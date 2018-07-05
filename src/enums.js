const keyMirror = require('keymirror');

const HTTP_METHODS = keyMirror({
    GET: null,
    POST: null
});

const CONSUMER_STATES = keyMirror({
    INACTIVE: null,
    ACTIVE: null
});

const PRODUCER_STATES = keyMirror({
    INACTIVE: null,
    ACTIVE: null
});

const CONSUMER_TIERS = keyMirror({
    BASIC: null,
    PLUS: null,
    PREMIUM: null
});

const WS_TYPE = keyMirror({
    PRODUCER: null,
    CONSUMER: null
});

const WS_ACTIONS = keyMirror({
    PRODUCER_REPORT_SPACE_STATS: null,
    PRODUCER_SHARD_ORDER: null,
    PRODUCER_SHARD_ORDER_CONFIRM: null,
    PRODUCER_SHARD_ORDER_DENY: null,
    PRODUCER_SHARD_ORDER_ACCEPT: null,
    CONSUMER_NEW_PRODUCER_ACCEPTED: null,
    CONSUMER_UPLOAD_FILE: null,
    CONSUMER_UPLOAD_FILE_DONE: null,
});

module.exports = {
    HTTP_METHODS,
    CONSUMER_STATES,
    CONSUMER_TIERS,
    PRODUCER_STATES,
    WS_TYPE,
    WS_ACTIONS
};
