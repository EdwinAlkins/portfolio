import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import posthog from 'posthog-js';
import type { CaptureResult } from 'posthog-js';
import { PostHogProvider } from '@posthog/react';

// Remove a single trailing slash from the path portion of a URL/pathname so
// '/portfolio' and '/portfolio/' — which render the same Home page — are stored
// identically in PostHog instead of as two distinct paths. The root '/' is left
// untouched.
const stripTrailingSlash = (value: string): string =>
  value === '/' ? value : value.replace(/\/(\?|#|$)/, '$1');

const normalizeUrlProperties = (event: CaptureResult | null): CaptureResult | null => {
  const props = event?.properties;
  if (props) {
    if (typeof props.$pathname === 'string') {
      props.$pathname = stripTrailingSlash(props.$pathname);
    }
    if (typeof props.$current_url === 'string') {
      props.$current_url = stripTrailingSlash(props.$current_url);
    }
  }
  return event;
};

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  // The '2026-01-30' defaults already enable autocapture and SPA pageview
  // capture (capture_pageview: 'history_change'), so React Router navigations
  // are tracked automatically — no manual $pageview needed.
  defaults: '2026-01-30',
  // The site has no login, so every visitor is anonymous. 'always' lets us
  // attach person properties (e.g. has_viewed_resume) and build cohorts on
  // those otherwise-anonymous recruiters — once they consent.
  person_profiles: 'always',
  capture_performance: true,
  // Default every new visitor to opted-out. Without this, a visitor who has made
  // no choice yet ('pending') is neither rejected nor opted-in, so is_capturing()
  // returns false and NOTHING is captured until they click the banner — which most
  // visitors never do. Combined with cookieless_mode: 'on_reject' below, defaulting
  // to opt-out means pending visitors are treated as rejected, so capture runs in
  // anonymous cookieless mode from the first page load (no cookie, GDPR-safe).
  opt_out_capturing_by_default: true,
  // GDPR / ePrivacy (art. 82 loi Informatique et Libertés) consent strategy:
  // with 'on_reject', PostHog writes nothing to the visitor's device (no cookie,
  // no localStorage) until they explicitly opt in via the consent banner. Before
  // any choice, and if they refuse, capture happens in privacy-preserving
  // cookieless mode (server-side hash) — which needs no prior consent. Opt-in
  // upgrades to full cookie-based person profiles and enables session replay
  // (both require browser storage, so they only run after consent).
  cookieless_mode: 'on_reject',
  // In dev, drop every event to keep production analytics clean. In prod,
  // normalize trailing slashes so '/portfolio' and '/portfolio/' count as one.
  before_send: import.meta.env.DEV ? () => null : normalizeUrlProperties,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
