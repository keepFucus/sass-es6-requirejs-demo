"use strict";

/**
 * By chenmin from 2017/12/21
 */

window.onload = function () {
    require.config({
        paths: {
            "part": "es6/part",
            "part2": "es6/part2"
        }

    });

    require(['part'], function (part) {
        var oBtn = document.getElementById("oBtn");

        oBtn.onclick = function () {
            alert(part.getHello());
        };
    });
};