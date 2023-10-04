// ==UserScript==
// @name         VL Larger Chatbox
// @namespace    https://vaughn.live/
// @version      0.1
// @updateURL    
// @downloadURL  
// @description  Removes the spotlightbox which cause the chat to be larger.
// @author       arachnafobic
// @match        https://vaughn.live/*
// @exclude      http://vaughn.live/browse*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vaughn.live
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('vs_v9_channel_spotlight_box')[0].remove();
})();
