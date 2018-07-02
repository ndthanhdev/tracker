/**
 * Lib imports
 */
const router = require('express').Router();
const { CREATED, NOT_FOUND, OK } = require('http-status-codes');
const { check } = require('express-validator/check');

/**
 * Project imports
 */
const { createDebugLogger } = require('../utils');
const { validate, auth } = require('../middlewares');
const { create, getConsumerByIdAndUserId, getConsumerByUserId, updateConsumerByIdAndUserId } = require('../services/consumer');
const { getFileByUserIdAndConsumerId } = require('../services/file');

// eslint-disable-next-line no-unused-vars
const log = createDebugLogger('routes:consumer');

router.get('/:id',
    validate([
        check('id').not().isEmpty()
            .isNumeric()]),
    auth(), (request, response, next) => {
        const { id } = request.params;
        const userId = request.user.id;
        return getConsumerByIdAndUserId({ id, userId })
            .then(consumer => consumer
                ? response.send(consumer)
                : response.status(NOT_FOUND).send(`Can't find your consumer with id: ${request.params.id}`))
            .catch(next);
    });

router.get('/:id/files',
    validate([check('id').not().isEmpty().isNumeric()]),
    auth(),
    (request, response, next) => {
        const { id } = request.params;
        const userId = request.user.id;
        return getFileByUserIdAndConsumerId({ consumerId: id, userId })
            .then(files=>response.status(OK).send(files))
            .catch(next);
    });
    
router.put('/:id',
    validate([
        check('id').not().isEmpty()
            .isNumeric()]),
    auth(), (request, response, next) => {
        const { id } = request.params;
        const userId = request.user.id;
        return updateConsumerByIdAndUserId({ id, userId, newValue: request.body })
            .then((data) => response.status(OK).send(data[1][0])) // get first affected row http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-update
            .catch(next);

    });
// TODO: make PUT endpoint, user can edit address only when consumer state is INACTIVE
// User can upgrade consumer Tier

router.get('/', auth(),
    (request, response, next) => getConsumerByUserId(request.user.id)
        .then(cs => response.send(cs))
        .catch(next));

router.post('/', auth(),
    validate([check('name').trim().not().isEmpty()]),
    (request, response, next) => {
        const {name, tier} = request.body;
        const userId = request.user.id;
        return create({tier, name, userId})
            .then((data) => response.status(CREATED).send(data))
            .catch(next);
    });

module.exports = {
    path: '/consumers',
    router
};
