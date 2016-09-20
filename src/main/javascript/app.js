'use strict';

var mainBlock = require('babel!./pages/main.jsx');

$(document).ready(function () {
    console.log('>> Quest is starting...');
    mainBlock();
});

