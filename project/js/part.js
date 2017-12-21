'use strict';

/**
 * By chenmin from 2017/12/21
 */

define(['part2'], function (part2) {
    return {
        getHello: function getHello() {
            return 'Hello World：' + part2.getName();
        }
    };
});