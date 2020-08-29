import { Polly } from '@pollyjs/core';
import FetchAdapter from '@pollyjs/adapter-fetch';
import XHRAdapter from '@pollyjs/adapter-xhr';
import RESTPersister from '@pollyjs/persister-rest';

Polly.register(FetchAdapter);
Polly.register(XHRAdapter);
Polly.register(RESTPersister);

const polly = new Polly('Atticus Mock Server', {
  loggin: true,
  adapters: [ 'xhr', 'fetch' ],
  persister: 'rest',
});

const { server } = polly;

const RESPONSE_DELAY = 2000;

server
  .post('/test/artist')
  .intercept(async (req, res) => {
    await server.timeout(RESPONSE_DELAY);   

    if (firstName === 'Bob') {

    }

    return res.json({
      artist: {
        firstName: 'Bob',
        lastName: 'Marley',
      }
    })
  })

  server.get('http://localhost:8081').passthrough();
  window.polly = polly;
