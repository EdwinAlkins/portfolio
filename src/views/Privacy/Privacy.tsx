import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { usePostHog } from '@posthog/react';
import { blue1, gray1, gray2 } from '../../contantes/color';

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  color: ${gray1};
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.25rem;
`;

const Updated = styled.p`
  color: ${gray2};
  font-size: 0.85rem;
  margin: 0 0 2.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.15rem;
  color: ${blue1};
  margin-bottom: 0.6rem;
`;

const Text = styled.p`
  color: ${gray2};
  margin: 0 0 0.75rem;

  a {
    color: ${blue1};
    text-decoration: underline;
  }
`;

const List = styled.ul`
  color: ${gray2};
  margin: 0 0 0.75rem;
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.35rem;
  }
`;

const ManageButton = styled.button`
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.55rem 1.1rem;
  border-radius: 8px;
  border: 1px solid ${blue1};
  background-color: transparent;
  color: ${blue1};
  font-size: 0.9rem;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${blue1};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Privacy: React.FC = () => {
  const posthog = usePostHog();

  // Reset the explicit choice back to "pending" so the consent banner
  // (rendered in App.tsx) reappears and the visitor can change their mind.
  const reopenConsent = () => {
    posthog?.clear_opt_in_out_capturing();
    window.location.reload();
  };

  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Updated>Last updated: July 2026</Updated>

      <Section>
        <Heading>Who is responsible</Heading>
        <Text>
          This site is a personal portfolio operated by William Nauroy. For any
          question about your data, you can reach me at{' '}
          <a
            href="mailto:william.nauroy+privacy@gmail.com"
            onClick={() =>
              posthog?.capture('privacy_contact_clicked', { source: 'who_is_responsible' })
            }
          >
            william.nauroy+privacy@gmail.com
          </a>
          .
        </Text>
      </Section>

      <Section>
        <Heading>What data is collected, and why</Heading>
        <Text>
          The only purpose is <strong>audience measurement</strong> — understanding
          how the site is used so I can improve it. No account, no advertising, no
          selling of data, and no cross-site tracking.
        </Text>
        <List>
          <li>Pages visited and general navigation</li>
          <li>Approximate location</li>
          <li>Device and browser type</li>
        </List>
      </Section>

      <Section>
        <Heading>Cookies and your choice</Heading>
        <Text>
          When you first visit, a banner lets you accept or decline analytics
          cookies:
        </Text>
        <List>
          <li>
            <strong>If you accept</strong>, a cookie is stored so your visits can
            be recognised over time.
          </li>
          <li>
            <strong>If you decline</strong>, the measurement continues in a fully
            anonymous, cookieless mode, and you cannot be individually identified.
          </li>
        </List>
        <Text>You can change your choice at any time:</Text>
        <ManageButton
          onClick={() => {
            posthog?.capture('privacy_manage_consent_clicked');
            reopenConsent();
          }}
        >
          Manage my consent
        </ManageButton>
      </Section>

      <Section>
        <Heading>Processor and hosting</Heading>
        <Text>
          Analytics are handled by <strong>PostHog</strong>, acting as a data
          processor on my behalf. Data is stored on{' '}
          <strong>PostHog Cloud EU</strong> (servers located in Frankfurt,
          Germany), so it never leaves the European Union. See the{' '}
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture('privacy_external_link_clicked', { target: 'posthog_policy' })
            }
          >
            PostHog privacy policy
          </a>
          . The site itself is hosted on GitHub Pages.
        </Text>
      </Section>

      <Section>
        <Heading>Data retention</Heading>
        <Text>
          Analytics data is kept only as long as necessary for audience
          measurement, and is not used for any other purpose.
        </Text>
      </Section>

      <Section>
        <Heading>Your rights</Heading>
        <Text>
          Under the GDPR you have the right to access, rectify, erase and object to
          the processing of your data, as well as to withdraw consent at any time.
          To exercise these rights, contact{' '}
          <a
            href="mailto:william.nauroy+privacy@gmail.com"
            onClick={() =>
              posthog?.capture('privacy_contact_clicked', { source: 'your_rights' })
            }
          >
            william.nauroy+privacy@gmail.com
          </a>
          . You may also lodge a complaint with the CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture('privacy_external_link_clicked', { target: 'cnil' })
            }
          >
            cnil.fr
          </a>
          ).
        </Text>
      </Section>

      <BackLink
        to="/portfolio"
        onClick={() => posthog?.capture('privacy_back_to_home_clicked')}
      >
        ← Back to home
      </BackLink>
    </Container>
  );
};

export default Privacy;
