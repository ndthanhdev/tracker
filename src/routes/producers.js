/**
 * Lib imports
 */
const router = require('express').Router();

/**
 * Project imports
 */
const {createDebugLogger} = require('../utils');

// eslint-disable-next-line no-unused-vars
const log = createDebugLogger('routes:producer');

router
    .post('/', (request, response) => {
        // This is a sample endpoint
        response.send('registerProducer - OK');
    })
    .get('/me', (request, response) => {
        // This is a sample endpoint
        response.send('getProducer - OK');
    });

module.exports = {
    path: '/producers',
    router
};
