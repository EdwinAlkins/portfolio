import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { usePostHog } from '@posthog/react';
import { blue1, black2, gray1, gray2 } from '../contantes/color';

// GDPR / ePrivacy consent banner for PostHog analytics.
//
// PostHog is initialized with `cookieless_mode: 'on_reject'` (see src/index.tsx):
// nothing is stored on the visitor's device until they explicitly accept.
// Accepting upgrades to full cookie-based person profiles and enables session
// replay; refusing keeps anonymous cookieless measurement (no consent required
// for that path). We show it only while the choice is still "pending".

const Banner = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 1000;
  margin: 0 auto;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background-color: ${black2};
  border: 1px solid rgba(144, 205, 244, 0.25);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  flex: 1 1 260px;
  margin: 0;
  color: ${gray2};
  font-size: 0.9rem;
  line-height: 1.5;

  a {
    color: ${blue1};
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;
`;

const Button = styled.button<{ $primary?: boolean }>`
  cursor: pointer;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  transition: opacity 0.15s ease;
  border: 1px solid ${(p) => (p.$primary ? blue1 : 'rgba(160, 174, 192, 0.4)')};
  background-color: ${(p) => (p.$primary ? blue1 : 'transparent')};
  color: ${(p) => (p.$primary ? black2 : gray1)};

  &:hover {
    opacity: 0.85;
  }
`;

const ConsentBanner: React.FC = () => {
  const posthog = usePostHog();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only prompt when the visitor hasn't made an explicit choice yet.
    if (posthog?.get_explicit_consent_status?.() === 'pending') {
      setVisible(true);
    }
  }, [posthog]);

  if (!visible) return null;

  const accept = () => {
    posthog.opt_in_capturing();
    setVisible(false);
  };

  const refuse = () => {
    posthog.opt_out_capturing();
    setVisible(false);
  };

  return (
    <Banner role="dialog" aria-live="polite" aria-label="Analytics consent">
      <Text>
        This site uses analytics to understand how it's used. If you accept, a
        cookie helps improve your experience. If you decline, measurement stays
        fully anonymous, with no cookie.
      </Text>
      <Actions>
        <Button onClick={refuse}>Decline</Button>
        <Button $primary onClick={accept}>
          Accept
        </Button>
      </Actions>
    </Banner>
  );
};

export default ConsentBanner;
