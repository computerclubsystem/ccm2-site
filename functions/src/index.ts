import * as functions from 'firebase-functions';

export const version = functions.https.onRequest((request, response) => {
    response.send({
      value: '2016.1.22',
      codeName: 'el viejo'
    });
});
