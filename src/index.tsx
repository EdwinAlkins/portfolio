import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import posthog from 'posthog-js';
import { PostHogProvider } from '@posthog/react';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  // The '2026-01-30' defaults already enable autocapture and SPA pageview
  // capture (capture_pageview: 'history_change'), so React Router navigations
  // are tracked automatically — no manual $pageview needed.
  defaults: '2026-01-30',
  // The site has no login, so every visitor is anonymous. 'always' lets us
  // attach person properties (e.g. has_viewed_resume) and build cohorts on
  // those otherwise-anonymous recruiters.
  person_profiles: 'always',
  capture_performance: true,
  loaded: (ph) => {
    // Avoid polluting production analytics with local dev traffic.
    if (import.meta.env.DEV) ph.opt_out_capturing();
  },
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
