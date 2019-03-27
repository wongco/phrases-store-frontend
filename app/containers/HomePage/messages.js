/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to The Phrases Store!',
  },
  intro: {
    id: `${scope}.intro`,
    defaultMessage: 'Click Add on the navigation to add a phrase.',
  },
});
