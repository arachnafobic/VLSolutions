// ==UserScript==
// @name         VL Theatre Mode - Remove Topbar
// @namespace    https://vaughn.live/
// @version      0.1
// @updateURL    https://github.com/arachnafobic/VLSolutions/raw/main/TheatreMode-RemoveTopbar.user.js
// @downloadURL  https://github.com/arachnafobic/VLSolutions/raw/main/TheatreMode-RemoveTopbar.user.js
// @description  Removes the topbar in theatre mode, put in a seperate file to make it optional.
// @author       arachnafobic
// @match        https://vaughn.live/*
// @exclude      http://vaughn.live/browse*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vaughn.live
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('wrapper_header')[0].remove();
    document.getElementsByClassName('wrapper_header2')[0].remove();
})();
