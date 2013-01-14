// ==UserScript==
// @name         google-reader-imho
// @namespace    4db58647d9e1
// @description  http://userstyles.org/styles/55756/google-reader-imho-old-blue-style
// @include      http://*.google.com/reader/*
// @include      https://*.google.com/reader/*
// @include      http://www.google.com/reader/*
// @include      https://www.google.com/reader/*
// @match        http://*.google.com/reader/*
// @match        https://*.google.com/reader/*
// @run-at       document-start
// ==/UserScript==
/*jshint multistr:true */
var css =" \
* { font-family:tahoma, arial, sans-serif !important } \
#logo, #logo-container, #logo-section { background:none !important; height:0 !important; display:none !important; } \
#message-area-container { height:1px !important } \
#lhn-add-subscription-section, #viewer-header { height:32px !important } \
#chrome.page-view { padding-top:32px !important } \
body.fullscreen #chrome.page-view { padding-top:0 !important } \
#search, #lhn-add-subscription-section, #viewer-header, #chrome-viewer-container, #chrome.search-stream #chrome-view-links, #chrome.page-view { background-color:#C2CFF1 !important } \
#home-section { background:none !important } \
#main { border:1px solid #C2CFF1 !important; border-top:0 !important; } \
#viewer-container { border-left:1px solid #C2CFF1 !important } \
#top-bar { border-bottom:1px solid #B2C0DE !important } \
#search, #top-bar { height:0px !important; } \
#lhn-add-subscription-section, #viewer-header-container { border-bottom:1px solid #B2C0DE !important } \
#chrome.page-view #viewer-container { border-top:1px solid #B2C0DE !important } \
.tab-header, #viewer-recommendations-return, #viewer-header a, #viewer-header a:visited, #viewer-header .link, #viewer-container a, #viewer-container a:visited, #viewer-container .link, #settings a, #settings a:visited, #settings .link { color:#2244BB !important } \
#viewer-header { margin-right:-4px !important } \
#viewer-top-controls { padding:0 7px 3px 3px !important } \
#settings-button-container { margin-left:-1px !important } \
#sections-header .settings-button-container { margin-right:3px !important } \
#sections-holder { padding-right:0 !important } \
#lhn-add-subscription { width:94px !important; top:16px !important; } \
.jfk-button { height:21px !important; line-height:21px !important; min-width:24px !important;} \
.jfk-button .jfk-button-img { margin-top:-4px !important} \
.goog-flat-menu-button { line-height:21px !important} \
.goog-button-base-inner-box { height:21px !important} \
.goog-button-base-content { padding-top:3px !important} \
.goog-flat-menu-button-dropdown, .goog-menu-button-dropdown { top:9px !important} \
#viewer-view-options, #viewer-top-controls .goog-button { margin:0 6px 0 0 !important} \
#mark-all-as-read-split-button { margin:0 7px 0 0 !important} \
#search .search-restrict { margin:0 6px !important} \
#viewer-refresh.jfk-button, #search .jfk-button { margin-right:6px !important} \
#item-up-down-buttons, #chrome-view-links { margin-right:-10px !important} \
#viewer-translated-by { margin:-1px 0 0 0 !important} \
#viewer-recommendations-return { margin:2px 0 0 0 !important} \
#stream-prefs-menu div.goog-button-body { background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiZJREFUeNqFUs2L0lEU/QWzrllEMP9CLdq2DIRmJyI6qPg5ih+oiDNogiKZiqioqRAp5kINSQQRdDGBi0xBUEzaCCnCSEyDGCgyZgzMnXt/OANR1IMD7513z7vvnPeY4+PjxtHRUQfxGueGTCbzEACY/4HR6XTnarUaCEqlEoxG42UsFvtULpf3/ynELuNQKAQ+nw8sFgvIZDI4ODgAqVQKXq/3QyqVuv9XYSKRuIeTUwSMx2PIZrOA12aFdIjT6fzR6/Ue/yG02Wwv8vn888lkwkdChng/nU438XgcDAYDmM1mwK4Xm83m0W9ChUIxJ29WqxX8fv+0WCwacePBaDSqoFdWTBYajcYc+d1boUQimVMwYrEY+Hw+4EGAgi/pdHqn2WzaPB7PlVwuB7fbDcvl8uRWiPHzu93uz1KpBA6Hg/Wl1+uhUCh8x4Kddrv9ijpqtVqo1WoUBZv2zZ3JX3Q2m51jWGwRdoLFYtGjfbzBKd0ErZDwM+IOEwwG7yJsGNAhFZ2dnb1xuVysGN+SCg/D4TA6krBpr1Yr4p4wIpHorVAoBI1GA/1+v0DiaDR6Qs9BXbHwW71e38UcLqim1WqR8CUjEAiGPB4PVCoVdDodIo34BPscDof9SYPBANbr9VOTyfSRy+UChkY1TSYQCJjw51zlcjnYjlQkEtnDQC7J03A4JC6UTCYrdrsdqtUqrb/ehGNC/EIsEM+23N6Wo/Fuy1W269k1wiYXVuOR5+YAAAAASUVORK5CYII=') no-repeat scroll 50% 50% transparent !important; text-indent:-999px !important; overflow:hidden !important; width:10px !important; } \
#home-section { padding:2px 0 0 0 !important} \
#overview-selector, #lhn-selectors .selector, .folder .name.name-d-0, .lhn-section-footer, .selectors-footer { padding-left:21px !important} \
.lhn-section-primary { line-height:20px !important} \
#lhn-selectors .selector { height:20px !important} \
.selectors-footer { display:none !important} \
#reading-list-unread-count { margin-top:0 !important} \
#lhn-selectors .selector-icon { margin-left:0 !important; margin-right:-4px !important;} \
.section-minimize { top:3px !important; left:0 !important;} \
.lhn-section-footer { padding-bottom:0 !important; margin-bottom:0 !important; margin-left:0 !important;} \
#sub-tree-header { padding-left:18px !important } \
#recommendations-tree-view-all { margin-left:25px !important } \
.scroll-tree li { margin:0 !important } \
.scroll-tree li.folder .link, .scroll-tree li.sub { height:20px !important } \
.section-button { height:20px !important; width:20px !important; top:0 !important; } \
.folder .folder .folder-toggle { margin-left:0 !important } \
.scroll-tree .toggle { height:20px !important; width:20px !important; } \
.folder .sub-icon, .folder .folder>a>.icon { margin-left:18px !important } \
.folder .folder>ul .icon { margin-left:28px !important } \
.folder-icon, .sub-icon, .tag-icon { width:17px !important; height:17px !important; } \
.scroll-tree .expanded .toggle { background-position:-23px -119px !important } \
.section-minimized .section-minimize, .scroll-tree .collapsed .toggle { background-position:0 -119px !important } \
#recommendations-tree .sub-icon { background-position:0 -77px !important } \
.name-text { padding-left:2px !important } \
.folder-icon { opacity:0.2 !important } \
.tree-selected>a>.folder-icon, #lhn-selectors .selected .selector-icon { opacity:0.5 !important } \
.sub-icon, .tag-icon { opacity:0.2 !important } \
.tree-selected>a>.sub-icon, .tree-selected>a>.tag-icon { opacity:0.5 !important } \
.favicon { opacity:0.6 !important } \
.tree-selected>a>.favicon { opacity:0.8 !important } \
.lhn-nav-button-container { margin-left:4px !important } \
.lhn-section-secondary li a.tree-link-selected, li.folder.tree-selected, #lhn-selectors .selector.selected, #overview-selector.selected { background-color:#C9D8FA !important } \
.scroll-tree li a:hover, .tree-item-action-container, #lhn-selectors .selector:hover, #overview-selector:hover { background-color:#EBEFF9 !important } \
.scroll-tree li a.tree-link-selected .name, .scroll-tree li a.tree-link-selected:hover .name, #nav .selected a, #nav .selected a .text, #lhn-selectors .selected a span, #lhn-selectors .selected a:hover span { color:#2244BB !important } \
.lhn-section-secondary li a, #lhn-selectors .selector, #lhn-selectors .selector.selected, #overview-selector, #overview-selector.selected, .scroll-tree .lhn-section-primary { border-left:0 !important } \
#title-and-status-holder, #sections-header, #chrome.page-view #directory-search-return { background-color:#EBEFF9 !important; border-bottom:1px solid #C2CFF1 !important; } \
#title-and-status-holder { padding:0.3ex 0 0 0.5em !important; margin-right:0 !important; } \
#sections-header { height:27px !important; margin-bottom:0 !important; } \
#chrome.page-view #directory-search-return { padding:0 0 0 10px !important; height:27px !important; } \
#chrome-title { padding-right:4px !important } \
#chrome-title, #chrome-title .chevron, #chrome-title a { color:#666 !important; font-size:13px !important; } \
#entries { padding:0 !important; border:0 !important; } \
#entries .entry-main .entry-original, #trends .sorting .trends-sorting-homepage { opacity:0.3 !important } \
.entry .entry-body, .entry .entry-title, .entry .entry-likers, #chrome.search-stream #entries.search .entry-secondary-snippet { max-width:1300px !important } \
#entries .read .entry-container { background-color:#fff !important } \
#entries .entry .entry-actions { padding:2px 0 1px 5px !important; background-color:#EBEFF9 !important; border:none !important; } \
.entry .entry-actions .star { height:13px !important } \
#entries .entry .entry-actions .email-active { padding-bottom:1px !important; padding-top:1px !important; border:0 !important; background-color:transparent !important; } \
#entries .entry .action-area, #entries .entry .action-area .email-this-area { background-color:#EBEFF9 !important; border:0 !important; } \
#entries .tags-edit { background-color:#EBEFF9 !important; border:1px solid #C2CFF1 !important; } \
#entries .entry .action-area textarea, #entries .entry .action-area input, #entries .tags-edit-tags { background-color:#fff !important } \
.entry-title-go-to { display:none !important } \
#overview .title, #entries .entry-main>.entry-title, #entries .search-result .entry-title, .result-title { font-size:110% !important } \
#entries .read { opacity:0.65 !important } \
#current-entry.read { opacity:1 !important } \
#entries .entry .entry-body { padding:10px 6px 10px 0 !important } \
#entries.list .entry { border:2px solid #fff !important; border-bottom:1px solid #ccc !important; } \
#entries.list .collapsed .entry-main .entry-source-title, #entries.list .collapsed .entry-secondary { top:0 !important } \
#entries.list .collapsed { line-height:140% !important; height:16px !important; padding:0 0 3px 0 !important; background-color:#fff !important; border:none !important; border-bottom:1px solid #fff !important; } \
#entries.list .collapsed .entry-icons { top:2px !important } \
#entries.list .collapsed .entry-icons, #entries.list .collapsed .entry-main .entry-original { margin-top:-1px !important } \
#entries.list .collapsed .entry-main .entry-original { top:3px !important } \
#entries.list .collapsed .entry-date { margin-top:0 !important } \
#entries.list .collapsed .entry-source-title, #entries.list .collapsed .entry-title, #entries.list .collapsed .entry-date { line-height:16px !important } \
#entries.list .read .collapsed { background-color:#EBEFF9 !important; border-bottom:1px solid #EBEFF9 !important; } \
#entries.list .read { border:2px solid #EBEFF9 !important; border-bottom:1px solid #ccc !important; } \
#entries.list .expanded { border:2px solid #6688EE !important } \
#entries.list .entry-container { border:0 !important; padding:5px 5px 5px 25px !important; } \
#entries.cards .entry { margin:8px !important; padding:0 !important; border:1px solid #fff !important; } \
.entry .card, #entries.search .entry .search-result { box-shadow:1px 1px 3px #ccc !important } \
#entries.cards .entry .card { margin:0 !important; padding:0 !important; border:1px solid #ccc !important; border-radius:5px 5px 5px 5px !important; } \
#entries.cards .entry .card-content { padding:0 !important } \
#entries.cards .entry-container { border:0 !important; padding:0 !important; } \
#entries.cards .entry .entry-main { padding:4px 4px 4px 23px !important } \
#entries.cards>#current-entry { border:0 !important } \
#entries.cards>#current-entry .card { border:2px solid #6688EE !important; box-shadow:2px 3px 3px #bbb !important; } \
#entries.cards .entry-icons-placeholder { left:-2px !important; position:absolute !important; top:4px !important; } \
#entries.cards .card-actions { padding:0 !important; border:0 !important; border-bottom:1px solid #EBEFF9 !important; background-color:#EBEFF9 !important; } \
#entries.cards .card-actions .star { margin-top:2px !important } \
.preview-interruption { background-color:#EBEFF9 !important } \
#entries.search .entry { border-bottom:1px solid #ccc !important; padding:2px 4px 8px 12px !important; } \
#no-entries-msg { border:1px solid #ccc !important; border-radius:5px 5px 5px 5px !important; } \
.bundle-container { background:#EBEFF9 !important; border:1px solid #C2CFF1 !important; } \
.bundle-container th { background-color:#C2CFF1 !important } \
.tab-group { border:1px solid #EBEFF9 !important } \
.tab-group-headers, #settings #settings-navigation { background-color:#EBEFF9 !important } \
.tab-header, #settings-navigation h3 { background-color:#C2CFF1 !important; border-color:#C2CFF1 !important; } \
.tab-header-selected, #settings-navigation .selected { background-color:#fff !important; border-color:#2244BB !important; } \
#trends-item-count-header { font-size:120% !important } \
.search-result .highlighted0 { background-color:#ff9 !important } \
.search-result .highlighted1 { background-color:#fcc !important } \
.search-result .highlighted2 { background-color:#ccf !important } \
.search-result .highlighted3 { background-color:#cfc !important } \
.search-result .highlighted4 { background-color:#9cf !important } \
.search-result .highlighted5 { background-color:#cc9 !important } \
.search-result .highlighted6 { background-color:#f9c !important } \
.sharebox { background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAC4jAAAuIwF4pT92AAAB60lEQVR42pXQ/0sTYRwH8OfvMbAfxB9k2RDnYsjCwYhafvlBcBIVwRY0VjNxsHEcY4iEP+hPEaQggj8JEUbZKFiYSZer3Lyd23Tb7aa7Xd5tez59tqtDRQQfXnx4Pu/n+XAPR4bmy5dCBuekO7PiBQYi2Zac3hL3QnlVqBQqmgYa/F9yGTxR5fZsEdkje5gMRDKttkAkTV5ebDhnxKm10t6fQzxbf0OdL4rO6byunxEwxNpqD4gqgoM9dEQPHNF9X7ykgUprcOuBbAunbcw/OGDsiZKFm1HRzuZ0nJzDYyZYc81k4LxFagr03ZNsjGBjm96KzYGnftUSTFqCKR0m+sYaShFsXs3XreG0NcRbw3y8lD6WwPJYbLYtvVM7eAcr7nGGUKjjo18vqQ9f7q/sFhW55ho/6pn4bTA/S+CAOZDomfiFSCiW38wcCZKKv5U24O5YpTuQ6A5sG0x+7pqfw6q35PrkTpdvy/Vul4JCNegfLnU92boAMQV+dnq/3WC/J1WeAlVlGPVJmHR6N89F1ngxKyocf8wJ1YJSwefid55Hqh2ejY5HX06LYyWxD3XTeKL9/mfUy3x9n+MBGjhjHszr4Rnkqid5xf3xpMXUBlDKTqpnch1p9/5oc39qG4sZ7OvbQKtDI/LJ0PAXVOH0ySaOUjsAAAAASUVORK5CYII=') no-repeat scroll 0 0 transparent !important } \
#gb { height:68px !important } \
#gbx1 { background-color:#C2CFF1 !important; border-bottom:1px solid #B2C0DE !important; height:37px !important; } \
#gbq2, #gbu { padding:4px 0 !important } \
#gbq2 { padding-left:64px !important } \
#gbq1 { margin-left:78px !important; top:-3px !important; } \
#gbqlw { height:45px !important } \
#gb { height:4px !important; background-color:#C2CFF1 !important; border-bottom:1px solid #B2C0DE !important; } \
#message-area-container, #loading-area-container { top:4px !important } \
#gbx2, #gbx3, #gbx4 { display:none !important } \
#gbw, #gbx1 { visibility:hidden !important } \
#gb:hover>#gbw, #gb:hover>#gbx1 { visibility:visible !important } \
#gb:hover>#gbx2, #gb:hover>#gbx3, #gb:hover>#gbx4 { display:block !important } \
#gb:hover~#message-area-container, #gb:hover~#loading-area-container { display:none !important } \
#entries #current-entry .entry-container { background-color:#FFFFF9 !important } \
.jfk-button-primary { background-color:#4d90fe !important; background-image:-moz-linear-gradient(center top , #4d90fe, #4787fe) !important; background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed) !important; background-image:-o-linear-gradient(top,#4d90fe,#4787ed) !important; background-image:linear-gradient(top,#4d90fe,#4787ed) !important; border:1px solid #3079ed !important; color:#fff !important; } \
.jfk-button-primary.jfk-button-hover { background-color:#357ae8 !important; background-image:-moz-linear-gradient(center top , #4D90fe, #357ae8) !important; background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8 ) !important; background-image:-o-linear-gradient(top,#4d90fe,#357ae8 ) !important; background-image:linear-gradient(top,#4d90fe,#357ae8 ) !important; border:1px solid #2f5bb7 !important; box-shadow:0 1px 1px rgba(0, 0, 0, 0.2) !important; } \
#nav, #lhn-add-subscription-section, #scrollable-sections-top-shadow, #scrollable-sections-bottom-shadow { width:280px !important } \
#chrome { margin-left:280px !important } \
.folder .name-text, .folder .folder .name-text { max-width:182px !important } \
.folder .folder .sub .name-text { max-width:172px !important } \
.lhn-hidden #chrome { margin-left:0 !important } \
#lhn-add-subscription { margin-left:78px !important } \
.item-plusone { display:none !important } \
#lhn-selectors .selector, #lhn-selectors .selector a { overflow:hidden !important; overflow-x:hidden !important; overflow-y:hidden !important; } \
#sub-tree-container { border-top:1px solid #C9D8FA !important; } \
";
window.addEventListener('load',function(){ "use strict";
	if(document.location.href.indexOf('google.com/reader')<0) { return false; }
	universal_addstyle(css);
},false);
function universal_addstyle(css){ "use strict";
	var style = document.createElement('style');
	style.appendChild(document.createTextNode(css));
	var h = document.getElementsByTagName('head');
	if(h.length>=1) { h[h.length-1].appendChild(style); }
}