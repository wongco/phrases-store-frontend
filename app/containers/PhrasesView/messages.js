/*
 * PhrasesView Messages
 *
 * This contains all the text for the PhrasesView container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PhrasesView';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Most recently added phrases:',
  },
});
