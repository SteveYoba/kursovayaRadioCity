!function(){var o=document.getElementById("allrecords");function e(){var e=Math.floor(899999*Math.random())+1e5;return(new Date).getTime()+"."+e}function i(e){e=e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1"),e=new RegExp("(?:^|; )"+e+"=([^;]*)"),e=document.cookie.match(e);if(e)return decodeURIComponent(e[1])}function n(e,t,i){var o,n=i.expires;if(n){"number"==typeof n&&(o=(new Date).getTime()+1e3*n,(n=new Date(o)).toUTCString&&(i.expires=n.toUTCString()));var a,r=e+"="+(t=encodeURIComponent(t));for(a in i)r+="; "+a,!0!==i[a]&&(r+="="+i[a]);document.cookie=r}}function a(){var e=window.pageYOffset,t=window.innerHeight,i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),o=0,n=0;g=!0;var a=document.getElementById("t-header"),r=document.getElementById("t-footer"),d=document.getElementById("tildacopy");a&&(o=a.offsetHeight),r&&(n=r.offsetHeight),d&&(n+=d.offsetHeight);n=Math.floor(100*(e-o+t)/(i-o-n));if(10<=n&&!w.p10)u.page="/tilda/scroll/10/",window.tildastat("pageview"),w.p10=!0;else{if(24<=n){if(0==w.p25)return u.page="/tilda/scroll/25/",window.tildastat("pageview"),void(w.p25=setTimeout(function(){clearTimeout(w.p25),w.p25=-1},5e3));if(n<51&&-1==w.p25)return void(w.p25=0)}if(49<=n){if(0==w.p50)return u.page="/tilda/scroll/50/",window.tildastat("pageview"),void(w.p50=setTimeout(function(){clearTimeout(w.p50),w.p50=-1},5e3));if(n<76&&-1==w.p50)return void(w.p50=0)}if(74<=n){if(0==w.p75)return u.page="/tilda/scroll/75/",window.tildastat("pageview"),void(w.p75=setTimeout(function(){clearTimeout(w.p75),w.p75=-1},5e3));if(n<91&&-1==w.p75)return void(w.p75=0)}89<=n&&(0==w.p90?(u.page="/tilda/scroll/90/",window.tildastat("pageview"),w.p90=setTimeout(function(){clearTimeout(w.p90),w.p90=-1},5e3)):-1==w.p90&&(w.p90=0))}}function r(){var e=0===window.location.hostname.indexOf("www.")?window.location.hostname.slice(4):window.location.hostname;return e.lastIndexOf(".")===e.length-1&&(e=e.slice(0,-1)),e+window.location.pathname}function d(){var e=(navigator.cookieEnabled?"cT":"cF")+(navigator.deviceMemory?"dm"+navigator.deviceMemory:"dm")+(navigator.hardwareConcurrency?"hc"+navigator.hardwareConcurrency:"hc")+(navigator.languages?"l"+navigator.languages.join(","):"l")+(navigator.platform?"p"+navigator.platform:"p")+(navigator.vendor?"v"+navigator.vendor:"v")+(navigator.appCodeName?"a"+navigator.appCodeName:"a")+(navigator.appName?"n"+navigator.appName:"n");if(navigator.plugins){for(var t="",i=0;i<navigator.plugins.length;i++)t+=navigator.plugins[i].filename;e+="pl"+t}return e+="pr"+window.devicePixelRatio,e=function(t){for(var e=Array(t.length),i=0;i<t.length;i++)e[i]=i;return Array.prototype.map.call(e,function(e){return t.charCodeAt(e).toString(16)}).join("")}(e+="w"+window.winWidth+"h"+window.winHeight)}function c(){v=i("tildauid"),h=i("tildasid"),h=f?(v=v||"simple",h||"simple"):(v=v||e(),h||e())}function s(){f||(n("tildauid",v,{expires:7776e3,path:"/"}),n("tildasid",h,{expires:1800,path:"/"}))}function l(){if(!(""<u.user_agent&&-1!=u.user_agent.indexOf("bot")))if("http:"==window.location.protocol||"https:"==window.location.protocol){var t,i;c(),s(),u.page=r(),u.referrer=document.referrer||"",u.userid=v,u.sessionid=h,u.user_agent=window.navigator.userAgent,u.user_language=window.navigator.userLanguage||window.navigator.language,o&&(u.projectid=o.getAttribute("data-tilda-project-id")||"0",u.pageid=o.getAttribute("data-tilda-page-id")||"0",u.pagealias=o.getAttribute("data-tilda-page-alias")||"",u.formskey=o.getAttribute("data-tilda-formskey")||""),u.params={};try{t=decodeURIComponent(window.location.search)}catch(e){t=window.location.search}"?"<t&&(u.pagequery=t.substring(1).toLowerCase(),~u.pagequery.indexOf("utm_")&&(e=u.pagequery.split("&"),Array.prototype.forEach.call(e,function(e){1<(i=e.split("=")).length?"utm_referrer"!==i[0]||u.referrer&&!~u.referrer.indexOf("ohio8.v")?u.params[i[0]]=i[1]:u.referrer=i[1]:u.params[i[0]]=""})));var e=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e=!0),u.ismobile=e,document.getElementById("tildastatscript")&&(u.tildastatcode=document.getElementById("tildastatscript").key),m)try{!function(e){var t=!0;if(!e)throw new Error("no callback given");function i(){t||e(t=!0)}function o(){t&&e(t=!1)}"hidden"in document&&document.addEventListener("visibilitychange",function(){(document.hidden?o:i)()}),"mozHidden"in document&&document.addEventListener("mozvisibilitychange",function(){(document.mozHidden?o:i)()}),"webkitHidden"in document&&document.addEventListener("webkitvisibilitychange",function(){(document.webkitHidden?o:i)()}),"msHidden"in document&&document.addEventListener("msvisibilitychange",function(){(document.msHidden?o:i)()}),"onfocusin"in document&&(document.onfocusin=i,document.onfocusout=o),window.onpageshow=window.onfocus=i,window.onpagehide=window.onblur=o}(function(e){g=!!e}),document.body.addEventListener("mousewheel",t_throttle(function(){g=!0},1e3)),document.body.addEventListener("mousemove",t_throttle(function(){g=!0},1e3)),document.body.addEventListener("keypress",t_throttle(function(){g=!0},1e3)),document.body.addEventListener("click",t_throttle(function(){g=!0},1e3))}catch(e){}u.fingerprint=d(),y=!0}else console.log("TildaStat: cannot work on local page")}function p(){f||(i("tildasid")||"")!=u.sessionid&&n("tildasid",u.sessionid,{expires:1800,path:"/"}),""===u.referrer&&(u.referrer=i("previousUrl")||""),u.tildautm=i("TILDAUTM")||"",u.page||(console.log("TildaStat: page empty"),u.page=r(),window.location.hash&&0===window.location.hash.indexOf("#!")&&(u.page+=window.location.hash)),"/"===u.page.substring(0,1)&&(u.page=window.location.hostname+u.page);var e=function(e){var t,i="";for(t in e)if(""!=i&&"object"!=typeof e[t]&&(i+="&"),"object"==typeof e[t]){if(Object.keys(e[t]).length)for(var o in e[t])i+="&"+t+"["+o+"]="+encodeURIComponent(e[t][o])}else i+=t+"="+encodeURIComponent(e[t]);return i}(u),t=new XMLHttpRequest;t.open("POST","https://stat.tildacdn.com/event/",!0),t.withCredentials=!1,t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(e),t.onerror=function(e){console.error("TildaStat: fail pageview "),console.error(e)},t.timeout=3e3,u.page&&-1===u.page.indexOf("tilda/scroll")&&-1===u.page.indexOf("tilda/readtime")&&-1===u.page.indexOf("tilda/click")&&-1===u.page.indexOf("tilda/cookieenabled")&&(u.referrer=u.page,f||n("previousUrl",u.page,{path:"/",expires:1800})),u.page="",window.tildastatload=!0}window.tildastat=function(e,t){if(!e)return!1;if("create"!==e&&!y)return setTimeout(function(){window.tildastat(e,t)},1e3),!1;switch(t&&function(e,t){for(var i in t)e[i]=t[i]}(u,t),e){case"create":l();break;case"pageview":p();break;case"readtime":m&&(g&&(u.page="/tilda/readtime/",g=!1,p()),setTimeout(function(){window.tildastat("readtime")},15e3));break;case"scroll":m&&"function"==typeof t_throttle&&window.addEventListener("scroll",t_throttle(a,1e3));break;case"cookieenabled":f=!1,c(),s(),u.userid=v,u.sessionid=h,u.page="/tilda/cookieenabled/",p();break;case"fingerprint":return d()}};var t,u={},w={p10:0,p25:0,p50:0,p75:0,p90:0},g=!0,f="no"===window.tildastatcookie;window.tildastatcookie||o&&(f="no"===o.getAttribute("data-tilda-cookie")),"yes"===window.tildastatcookiegdpr&&!1===f&&((f=!0)!==i("t_cookiesConsentGiven")||"string"==typeof(t=i("t_cookiesCategories"))&&-1<t.indexOf("analytics")&&(f=!1));var m="yes"===window.tildastatscroll;void 0===window.tildastatscroll&&o&&(m="yes"===o.getAttribute("data-tilda-stat-scroll"));var v="",h="",y=!1;window.tildastat("create"),setTimeout(function(){window.tildastat("pageview"),window.tildastat("readtime"),window.tildastat("scroll")},500),setInterval(function(){var e;("object"==typeof window.t_jserrors&&0<window.t_jserrors.length||"object"==typeof window.t_cdnerrors&&0<window.t_cdnerrors.length||"object"==typeof window.t_ajaxerrors&&0<window.t_ajaxerrors.length)&&"function"!=typeof t_errors__sendJSErrors&&!0!==window.t_isloadingerrorsjsfile&&(window.t_isloadingerrorsjsfile=!0,(e=document.createElement("script")).src="https://static.tildacdn.com/js/tilda-errors-1.0.min.js",e.async=!0,document.body.appendChild(e))},2e3)}();
