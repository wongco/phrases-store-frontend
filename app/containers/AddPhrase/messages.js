/*
 * AddPhrase Messages
 *
 * This contains all the text for the AddPhrase container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AddPhrase';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Add a phrase time!',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Error adding phrase! Try again later.',
  },
});
