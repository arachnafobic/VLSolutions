// ==UserScript==
// @name         VL Theatre Mode - Autoclose Left Sidebar
// @namespace    https://vaughn.live/
// @version      0.1
// @updateURL    https://github.com/arachnafobic/VLSolutions/raw/main/TheatreMode-LeftSidebar.user.js
// @downloadURL  https://github.com/arachnafobic/VLSolutions/raw/main/TheatreMode-LeftSidebar.user.js
// @description  Closes the sidebar on the left with following/trending.
// @author       arachnafobic
// @match        https://vaughn.live/*
// @exclude      http://vaughn.live/browse*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vaughn.live
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var targNode = document.getElementById ("vs_content_menu");
    targNode.classList.remove ("vs_v9_content_menu_open");
    targNode.classList.add ("vs_v9_content_menu_closed");
})();
