import * as functions from 'firebase-functions';
const cors = require('cors')({ origin: true });

export const version = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.send({
      value: '2016.1.22',
      codeName: 'el viejo'
    });
  });
});
