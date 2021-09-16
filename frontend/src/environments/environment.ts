/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffee-shop-auth.us', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'YuBa9k6Qf6N528cUlsPKQQEM6upqMwXJ', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100/login-results', // the base url of the running ionic application. 
  }
};
