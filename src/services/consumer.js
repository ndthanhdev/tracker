/**
 * Project imports
 */
const db = require('../db');
const { createDebugLogger } = require('../utils');
const { pick } = require('ramda');

// eslint-disable-next-line no-unused-vars
const log = createDebugLogger('services:consumer');

function create({ address, userId }) {
    return db.Consumer.create({ address, userId });
}

function getConsumerByIdAndUserId({ id, userId }) {
    return db.Consumer.findOne({ where: { id, userId } });
}

function getConsumerByUserId(userId) {
    return db.Consumer.findAll({ where: { userId }, order: [['id', 'ASC']] });
}

function activateConsumer(consumerId) {
    // TODO
    log('INSIDE activateConsumer: ', consumerId);
    return consumerId;
}

function activateConsumerHandler(...rest) {
    // TODO
    log('activateConsumerHandler: ', rest);
    return activateConsumer(...rest);
}

function updateConsumerByIdAndUserId({ id, userId, newValue }) {
    const updateAbleFields = ['address'];
    const fields = Object.keys(pick(updateAbleFields, newValue));
    return db.Consumer.update(newValue, {
        // Return affected rows
        returning: true,
        where: {
            id,
            userId
        },
        fields
    });
}

module.exports = {
    create,
    getConsumerByIdAndUserId,
    getConsumerByUserId,
    activateConsumerHandler,
    updateConsumerByIdAndUserId
};
