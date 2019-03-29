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
    defaultMessage: 'Ordered by most recent:',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Error obtaining latest phrases!',
  },
  notice: {
    id: `${scope}.notice`,
    defaultMessage: 'No phrases added yet! Please add one!',
  },
});
