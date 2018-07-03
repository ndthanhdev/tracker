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

module.exports = {
    HTTP_METHODS,
    CONSUMER_STATES,
    CONSUMER_TIERS,
    PRODUCER_STATES,
    WS_TYPE
};
