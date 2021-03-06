/*!
 *  Echo v1.4.0
 *  Lazy-loading with data-* attributes, offsets and throttle options
 *  Project: https://github.com/toddmotto/echo
 *  by Todd Motto: http://toddmotto.com
 *  Copyright. MIT licensed.
 */
window.Echo = (function (window, document, undefined) {

    'use strict';

    var store = [],
        offset,
        throttle,
        poll;

    var _inView = function (el) {
        var coords = el.getBoundingClientRect();
        // console.log('coords==>', coords)
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
    };

    var _pollImages = function () {
        for (var i = store.length; i--;) {
            var self = store[i];
            // console.log("_inView(self)==>", _inView(self))
            if (_inView(self)) {
                $(self).removeClass('lazyload-bgImg');
                // self.src = self.getAttribute('data-echo');
                // self.style.display = 'block';
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function () {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function (obj) {
        var nodes = document.querySelectorAll('.lazyload-bgImg');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 10;

        for (var i = 0; i < nodes.length; i++) {
            // console.log('nodes==>', nodes[i])
            // nodes[i].style.display = 'none';
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            window.addEventListener('scroll', _throttle, false);
        } else {

            window.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

})(window, document);