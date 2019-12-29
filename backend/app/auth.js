// Authentication Tokens
// Not used currently
let jwt = require('express-jwt'),
    jwks = require('jwks-rsa');

/**
 * Jwt check for authentication token
 * @type {jwt.RequestHandler}
 */
 export let jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-vgga-ftr.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3001',
    issuer: 'https://dev-vgga-ftr.auth0.com/',
    algorithms: ['RS256']
});
