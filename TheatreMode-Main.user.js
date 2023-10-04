// ==UserScript==
// @name         VL Theatre Mode - Main
// @namespace    https://vaughn.live/
// @version      0.1
// @updateURL    https://github.com/arachnafobic/VLSolutions/raw/main/TheatreMode-Main.user.js
// @downloadURL  https://github.com/arachnafobic/VLSolutions/raw/main/TheatreMode-Main.user.js
// @description  Attempts to alter a channel page to mimic theatre mode.
// @author       arachnafobic
// @match        https://vaughn.live/*
// @exclude      http://vaughn.live/browse*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vaughn.live
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var MyWidth = '100%';
    var MyHeight = '100vh';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('.the_content { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.the_content.the_content { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.vs_v9_stream_wrapper { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.vs_v9_stream_content { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.vs_v9_stream_player { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.abvsContainer { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.abvsContainer.abvsContainer { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.simplebar-wrapper { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.simplebar-mask { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.simplebar-placeholder { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.simplebar-offset { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.simplebar-content-wrapper { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.simplebar-content { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.vidPlayer { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.vidPlayer { top: -100% !important; }');
    addGlobalStyle('.MvnHlsPlayer { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.MvnHlsPlayer.MvnHlsPlayer_wrapper { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.MvnHlsPlayerBox { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.MvnHlsPlayerBox.MvnHlsPlayerBox { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');
    addGlobalStyle('.MvnHlsPlayerLive { width: ' + MyWidth + ' !important; height: ' + MyHeight + ' !important; }');

    document.getElementsByClassName('vs_stream_nav_box')[0].remove();
    document.getElementsByClassName('vs_v9_stream_content_abvs')[0].remove();
    document.getElementsByClassName('vs_v9_stream_content_info')[0].remove();
    document.getElementsByClassName('vs_v9_stream_content_spacer')[0].remove();
    document.getElementsByClassName('vs_v9_footer')[0].remove();
})();
