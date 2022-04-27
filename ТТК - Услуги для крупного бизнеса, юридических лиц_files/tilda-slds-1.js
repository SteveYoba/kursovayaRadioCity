function t_sldsInit(t,s){var e="object"==typeof t?t:$("#rec"+t);if(0===e.length)return!1;var a=e.find(".t-slds__item:not(.t-slds__item_dummy)"),d=a.length,i=a.filter(":first"),a=a.filter(":last"),_=$(window).width(),r=e.find(".t-slds__items-wrapper"),l=r.attr("data-slider-items-in-row")||0,c=r.attr("data-slider-with-cycle"),n=parseFloat(r.attr("data-slider-transition"));if(n||0===n||(n=300),"true"==r.attr("data-slider-stop"))return!1;isNaN(n)&&r.attr("data-slider-transition","300"),r.hasClass("t-slds_animated-fast")||r.hasClass("t-slds_animated-slow")||r.hasClass("t-slds_animated-none")||r.addClass("t-slds_animated-fast");var f=l,n=(t_slds_setItemsInRow(t),t_slds_changeImageUrl(t),window.navigator.userAgent),o=n.indexOf("MSIE"),p=!1,o=(0<o&&(8!=(n=parseInt(n.substring(o+5,n.indexOf(".",o))))&&9!=n||(p=!0)),!0===p&&(r.removeClass("t-slds_animated-fast").removeClass("t-slds_animated-slow").addClass("t-slds_animated-none t-slds_ie").attr("data-slider-correct-height","true"),r.attr("data-slider-items-in-row",1)),"true"==r.attr("data-slider-initialized")&&(d-=2),r.attr("data-slider-initialized","true"),r.attr("data-slider-totalslides",d),r.attr("data-slider-pos")||r.attr("data-slider-pos",1),r.attr("data-slider-curr-pos",1),r.attr("data-slider-cycle",""),r.attr("data-slider-animated",""),!1),n=i.find('[data-zoomable="yes"]'),m=a.find('[data-zoomable="yes"]');if((n||m)&&(o=!0,n.removeClass("t-zoomable").removeAttr("data-zoomable"),m.removeClass("t-zoomable").removeAttr("data-zoomable")),0==e.find(".t-slds__item[data-slide-index=0]").length&&(i.before(a.clone(!0).attr("data-slide-index","0")),i.parent().find("[data-slide-index=0]").find("[field]").removeAttr("field")),0==e.find(".t-slds__item[data-slide-index="+(d+1)+"]").length&&(a.after(i.clone(!0).attr("data-slide-index",d+1).removeClass("t-slds__item_active")).addClass("t-slds__item-loaded"),0<l&&"true"===c))for(var u=i,w=a,h=0;h<l-1;h++){var v=u.next().clone(!0).attr("data-slide-index",d+h+1);w.next().after(v),w=w.next(),u=u.next()}o&&(n.addClass("t-zoomable").attr("data-zoomable","yes"),m.addClass("t-zoomable").attr("data-zoomable","yes")),l=r.attr("data-slider-items-in-row")||0,"false"===c&&d-l<=0?e.find(".t-slds__arrow_wrapper-right").css("display","none"):e.find(".t-slds__arrow_wrapper-right").css("display",""),t_slds_SliderWidth(t),"true"==r.attr("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveSlide(t,1,d,s),t_slds_initSliderControls(t,s),t_slds_ActiveCaption(t,1,d),0<r.attr("data-slider-timeout")&&t_slds_initAutoPlay(t,1,d,s),e.find(".t-slds__item-loaded").length<d+2&&t_slds_UpdateImages(t,1),"yes"==r.attr("data-slider-arrows-nearpic")&&t_slds_positionArrows(t),!0!==p&&t_slds_onHammerLoad("Hammer",function(){t_slds_initSliderSwipe(t,d,_)}),e.find(".t-slds").css("visibility",""),e.off("displayChanged"),e.on("displayChanged",t_throttle(function(){t_slds_setItemsInRow(t,f),t_slds_updateSlider(t),t_slds_positionArrows(t)})),e.trigger("sliderIsReady"),$(window).bind("resize",t_throttle(function(){setTimeout(function(){t_slds_setItemsInRow(t,f),t_slds_updateSlider(t),t_slds_positionArrows(t)},100)})),$(window).on("load",function(){"true"==r.attr("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)})}function t_slds_setItemsInRow(t,s){var e,t=("object"==typeof t?t:$("#rec"+t)).find(".t-slds__items-wrapper");(t.attr("data-slider-items-in-row")||0)&&(window.innerWidth<=960&&(e=2),window.innerWidth<=640&&(e=1),960<window.innerWidth&&(e=s)),e&&t.attr("data-slider-items-in-row",e)}function t_slds_initSliderControls(i,r){var l="object"==typeof i?i:$("#rec"+i),n=l.find(".t-slds__items-wrapper"),t=(0<(n.attr("data-slider-items-in-row")||0)?l.find(".t-slds__container .t-slds__item"):l.find(".t-slds__container")).width();l.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");if("true"==n.attr("data-slider-stop"))return!1;n.css({transform:"translateX(-"+t+"px)"}),l.find(".t-slds__arrow_wrapper").click(function(){var t=t_slds_getCurrentTranslate(l),s=n.attr("data-slider-animated"),e=parseFloat(n.attr("data-slider-pos")),a=parseFloat(n.attr("data-slider-totalslides")),d="";""==s&&(n.attr("data-slider-animated","yes"),"left"===$(this).attr("data-slide-direction")?"false"==n.attr("data-slider-with-cycle")&&1==e?e=1:e--:"false"==n.attr("data-slider-with-cycle")&&e==a?e=a:e++,n.attr("data-slider-pos",e),n.attr("data-slider-cycle",d=e!=a+1&&0!=e?d:"yes"),t_slideMoveWithoutAnimation(i,!1,r,t)),t_slds_updateSlider(l)}),l.find(".t-slds__bullet").click(function(){var t=t_slds_getCurrentTranslate(l),s=parseFloat($(this).attr("data-slide-bullet-for"));n.attr("data-slider-pos",s),t_slideMoveWithoutAnimation(i,!1,r,t),t_slds_updateSlider(l)})}function t_slds_animate(a,d,i){var r=performance.now();requestAnimationFrame(function t(s){var s=(s-r)/i,e=a(s=1<s?1:s);d(e),s<1?requestAnimationFrame(t):"y"!==window.lazy&&"yes"!==$("#allrecords").attr("data-tilda-lazy")||t_slds_onHammerLoad("t_lazyload_update",function(){t_lazyload_update()})})}function t_slide_MoveAnimation(s,t,e,a){var d,i;s[0]&&(s[0].style.transition="height ease-in-out .5s, transform ease-in-out 0s",t=-Math.abs(t*e),d=-parseInt(s[0].style.transform.match(/\d+/)[0]),0!=(i=d-t)&&t_slds_animate(function(t){return t},function(t){s[0].style.transform="translateX("+(d-i*t)+"px)"},a))}function t_slideMoveWithoutAnimation(t,s,e){var a,d="object"==typeof t?t:$("#rec"+t),i=d.find(".t-slds__items-wrapper"),r=parseFloat(i.attr("data-slider-pos")),l=(0<(i.attr("data-slider-items-in-row")||0)?d.find(".t-slds__container .t-slds__item"):d.find(".t-slds__container")).width(),n=parseFloat(i.attr("data-slider-totalslides")),o=d.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");n+1<r&&(r=1),o&&(n=d.find(".t-slds__item_active"),a=d.find(".t-slds__item"),d.find(".t-slds__item_dummy").stop(!0,!0),a.stop(!0,!0),0===d.find(".t-slds__item_dummy").length&&(d=n.clone().addClass("t-slds__item_dummy").css({position:"absolute",left:l*r+"px"}).appendTo(i),a.css("opacity",0),d.animate({opacity:0},function(){$(this).remove()}),setTimeout(function(){a.animate({opacity:1})},50)),i.addClass("t-slds_animated-cancel")),t_slideMove(t,s,e),o&&i.removeClass("t-slds_animated-cancel")}function t_slideMoveInstantly(t,s,e){var a="object"==typeof t?t:$("#rec"+t),d=a.find(".t-slds__items-wrapper"),i=parseFloat(d.attr("data-slider-pos")),r=(0<(d.attr("data-slider-items-in-row")||0)?a.find(".t-slds__container .t-slds__item"):a.find(".t-slds__container")).width(),l=parseFloat(d.attr("data-slider-totalslides")),n=a.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");l+1<i&&(i=1),n&&(l=a.find(".t-slds__item_active"),0===a.find(".t-slds__item_dummy").length&&l.clone().addClass("t-slds__item_dummy").css({position:"absolute",left:r*i+"px"}).appendTo(d).fadeOut("normal",function(){$(this).remove()})),d.addClass("t-slds_animated").addClass("t-slds_animated-cancel"),t_slideMove(t,s,e),d.removeClass("t-slds_animated").removeClass("t-slds_animated-cancel")}function t_slideMove(t,_,s){var e="object"==typeof t?t:$("#rec"+t),a=e.find(".t-slds__items-wrapper"),d=a.attr("data-slider-items-in-row")||0,i=(0<d?e.find(".t-slds__container .t-slds__item"):e.find(".t-slds__container")).width(),r=parseFloat(a.attr("data-slider-transition")),l=parseFloat(a.attr("data-slider-pos")),n=parseFloat(a.attr("data-slider-totalslides")),o=(a.attr("data-slider-cycle"),e.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none")),c=0<a.attr("data-slider-timeout"),f=a.attr("data-slider-stop");if(r||0===r||(r=300),n+1<l&&(l=1,a.attr("data-slider-pos",1)),"true"==f)return!1;"false"==a.attr("data-slider-with-cycle")&&(l==n||1<d&&l==n-d+1)?e.find(".t-slds__arrow_wrapper-right").fadeOut(300):e.find(".t-slds__arrow_wrapper-right").fadeIn(300),"false"==a.attr("data-slider-with-cycle")&&1==l?e.find(".t-slds__arrow_wrapper-left").fadeOut(300):e.find(".t-slds__arrow_wrapper-left").fadeIn(300),a.addClass("t-slds_animated"),window.isSafariVersion&&13<=window.isSafariVersion[0]&&window.isiOSChrome&&!o?t_slide_MoveAnimation(a,l,i,r):a.css({transform:"translateX(-"+i*l+"px)"}),setTimeout(function(){a.removeClass("t-slds_animated"),a.attr("data-slider-animated",""),"yes"==a.attr("data-slider-cycle")&&(0==(l=l==n+1?1:l)&&(l=n),window.isSafariVersion&&13<=window.isSafariVersion[0]&&window.isiOSChrome&&!o?t_slide_MoveAnimation(a,l,i,0):a.css({transform:"translateX(-"+i*l+"px)"}),!0!==o&&t_slds_ActiveSlide(t,l,n,s),a.attr("data-slider-pos",l)),"y"!==window.lazy&&"yes"!==$("#allrecords").attr("data-tilda-lazy")||t_slds_onHammerLoad("t_lazyload_update",function(){t_lazyload_update()}),!_&&c&&t_slds_initAutoPlay(t,l,n,s)},r),t_slds_ActiveBullet(t,l,n,s),t_slds_ActiveSlide(t,l,n),"true"==a.attr("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveCaption(t,l,n),e.find(".t-slds__item-loaded").length<n+2&&t_slds_UpdateImages(t,l),a.attr("data-slider-curr-pos",l)}function t_slds_updateSlider(t){var s="object"==typeof t?t:$("#rec"+t),e=(t_slds_SliderWidth(t),s.find(".t-slds__items-wrapper")),a=e.attr("data-slider-items-in-row")||0,d=(0<a?s.find(".t-slds__container .t-slds__item"):s.find(".t-slds__container")).width(),i=parseFloat(e.attr("data-slider-pos")),r=parseFloat(e.attr("data-slider-totalslides")),l=e.attr("data-slider-with-cycle");r+1<i&&e.attr("data-slider-pos",i=1),"false"===l&&r-a<=0?s.find(".t-slds__arrow_wrapper-right").css("display","none"):s.find(".t-slds__arrow_wrapper-right").css("display",""),e.css({transform:"translateX(-"+d*i+"px)"}),"true"==e.attr("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)}function t_slds_UpdateImages(t,s){t=("object"==typeof t?t:$("#rec"+t)).find('.t-slds__item[data-slide-index="'+s+'"]');t.addClass("t-slds__item-loaded"),t.next().addClass("t-slds__item-loaded"),t.prev().addClass("t-slds__item-loaded")}function t_slds_ActiveCaption(t,s,e){var t="object"==typeof t?t:$("#rec"+t),a=t.find(".t-slds__caption"),d=t.find('.t-slds__caption[data-slide-caption="'+s+'"]');a.removeClass("t-slds__caption-active"),0==s?d=t.find('.t-slds__caption[data-slide-caption="'+e+'"]'):s==e+1&&(d=t.find('.t-slds__caption[data-slide-caption="1"]')),d.addClass("t-slds__caption-active")}function t_slds_scrollImages(t,s){t="object"==typeof t?t:$("#rec"+t),s=(s<0?"":"-")+Math.abs(s).toString();t.find(".t-slds__items-wrapper").css("transform","translateX("+s+"px)")}function t_slds_ActiveBullet(t,s,e,a){a&&a.thumbsbulletGallery&&(d=parseInt(a.storeOptions.popup_opts.columns),i=+a.storeOptions.slider_slidesOpts.ratio,d=t_store_prodPopup_gallery_calcMaxThumbsCount(d,i,60,10));var d,i="object"==typeof t?t:$("#rec"+t),t=i.find(".t-slds__bullet"),r=i.find('.t-slds__bullet[data-slide-bullet-for="'+s+'"]');t.removeClass("t-slds__bullet_active"),a&&a.thumbsbulletGallery&&d<=s&&s!=e+1||d<=e&&0==s?r=i.find('.t-slds__bullet[data-slide-bullet-for="'+d+'"]'):0==s?r=i.find('.t-slds__bullet[data-slide-bullet-for="'+e+'"]'):s==e+1&&(r=i.find('.t-slds__bullet[data-slide-bullet-for="1"]')),r.addClass("t-slds__bullet_active")}function t_slds_ActiveSlide(t,s,e){var t="object"==typeof t?t:$("#rec"+t),a=t.find(".t-slds__item"),d=t.find('.t-slds__item[data-slide-index="'+s+'"]'),i=t.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none");t.find("iframe").each(function(t,s){s.src&&(-1!==s.src.indexOf("&enablejsapi=1")&&s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1===s.src.indexOf("vimeo")||-1===s.src.indexOf("&amp;api=1")&&-1===s.src.indexOf("&api=1")||s.contentWindow.postMessage('{"method":"pause","value":"true"}',"*"))}),a.removeClass("t-slds__item_active"),0==s&&!1===i?t.find('.t-slds__item[data-slide-index="'+e+'"]').addClass("t-slds__item_active"):0==s&&!0===i?d=t.find('.t-slds__item[data-slide-index="'+e+'"]'):s==e+1&&!1===i?t.find('.t-slds__item[data-slide-index="1"]').addClass("t-slds__item_active"):s==e+1&&!0===i&&(d=t.find('.t-slds__item[data-slide-index="1"]')),d.addClass("t-slds__item_active")}function t_slds_SliderWidth(t){var t="object"==typeof t?t:$("#rec"+t),s=t.find(".t-slds__container").width(),e=t.find(".t-slds__item:not(.t-slds__item_dummy)").length,a=t.find(".t-slds__items-wrapper"),d=a.attr("data-slider-stop"),a=a.attr("data-slider-items-in-row")||0;if("true"==d)return!1;t.find(".t-slds__items-wrapper").width(s*e),window.innerWidth<=640?a=1:window.innerWidth<=960&&1<a&&(a=2);d=1<a?s/a:s;0<d&&t.find(".t-slds__item").width(d)}function t_slds_SliderHeight(t){var t="object"==typeof t?t:$("#rec"+t),s=t.find(".t-slds__items-wrapper").not('[data-slider-correct-height="false"]'),t=t.find(".t-slds__item_active").height();0!==t&&s.css("height",t)}function t_slds_UpdateSliderHeight(t){var t="object"==typeof t?t:$("#rec"+t),s=t.find(".t-slds__items-wrapper").not('[data-slider-correct-height="false"]'),t=t.find(".t-slds__item_active").height();0!==t&&s.css("height",t)}function t_slds_SliderArrowsHeight(t){("object"==typeof t?t:$("#rec"+t)).find(".t-slds").each(function(t,s){var e=$(s).find(".t-slds__item_active").height();0!==e&&$(s).find(".t-slds__arrow_wrapper").css("height",e)})}function t_slds_UpdateSliderArrowsHeight(t){("object"==typeof t?t:$("#rec"+t)).find(".t-slds").each(function(t,s){var e=$(s).find(".t-slds__item_active").height();0!==e&&$(s).find(".t-slds__arrow_wrapper").css("height",e)})}function t_slds_initAutoPlay(d,i,r,c){var f="object"==typeof d,l=f?d:$("#rec"+d),e=l.find(".t-slds"),n=l.find(".t-slds__items-wrapper"),p=parseFloat(n.attr("data-slider-timeout")),o="",m=n.attr("data-slider-stop"),t=(l.find(".t-slds__items-wrapper").hasClass("t-slds_animated-none"),n.attr("data-slider-interval-id"));if(t&&clearInterval(t),"true"==m)return!1;window.isMobile||e.hover(function(){n.attr("data-slider-stopped","yes")},function(){n.attr("data-slider-stopped","")});var a,s,_=l.offset().top,t=(l.outerHeight(),$(window).resize(t_throttle(function(){_=l.offset().top,l.outerHeight()})),void 0!==document.hidden?(a="hidden",s="visibilitychange"):void 0!==document.msHidden?(a="msHidden",s="msvisibilitychange"):void 0!==document.webkitHidden&&(a="webkitHidden",s="webkitvisibilitychange"),document.addEventListener(s,function(){var t,s,e;document[a]?n.attr("data-slider-stopped","yes"):(t=l.css("display"),e=(s=$(window).scrollTop())+$(window).height(),_=l.offset().top,s<_+l.outerHeight()&&_<e&&"none"!==t&&n.attr("data-slider-stopped",""))},!1),1===l.length&&$(window).bind("scroll",t_throttle(function(){var t=l.css("display"),s=$(window).scrollTop(),e=s+$(window).height();"none"!==t?(_=l.offset().top,s<_+l.outerHeight()&&_<e?n.attr("data-slider-stopped",""):""===n.attr("data-slider-stopped")&&n.attr("data-slider-stopped","yes")):f||n.attr("data-slider-stopped","yes")})),setInterval(function(){var t=n.attr("data-slider-stopped"),s=n.attr("data-slider-autoplay-ignore-hover"),e=n.attr("data-slider-touch"),a=t_slds_getCurrentTranslate(l);"yes"!=t&&"yes"!=s&&"yes"!=e&&("false"==n.attr("data-slider-with-cycle")&&i==r?i=r:i++,n.attr("data-slider-pos",i),i!=r+1&&0!=i||(o="yes"),t_slideMoveWithoutAnimation(d,!0,c,a),t_slds_updateSlider(d),"yes"==o&&(0==(i=i==r+1?1:i)&&(i=r),n.attr("data-slider-pos",i)),n.attr("data-slider-cycle",o))},p));n.attr("data-slider-interval-id",t)}function t_slds_positionArrows(t){var t="object"==typeof t?t:$("#rec"+t),s=t.find(".t-slds__arrow_container-outside"),e=t.find(".t-slds__item").width(),a=t.find(".t-slds__arrow-left").width(),t=t.find(".t-slds__arrow-right").width();s.css({"max-width":a+t+e+120+"px"})}function t_slds_initSliderSwipe(_,t,s,c){var e,f="object"==typeof _?_:$("#rec"+_),a=f.find(".t-slds__items-wrapper"),d=a.attr("data-slider-stop"),p=!1;if("true"==d)return!1;if(delete Hammer.defaults.cssProps.userSelect,0<a.length){if(hammer=new Hammer(a[0],{domEvents:!0,inputClass:Hammer.TouchInput,recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),$(window).bind("scroll",function(){p=!0,clearTimeout(e),e=setTimeout(function(){p=!1},250)}),1==t)return!1;hammer.on("pan",function(t){return!p&&(d=((a=1<(e=(s=f.find(".t-slds__items-wrapper")).attr("data-slider-items-in-row")||0))?f.find(".t-slds__container .t-slds__item"):f.find(".t-slds__container")).width(),i=parseFloat(s.attr("data-slider-pos")),r=parseFloat(s.attr("data-slider-totalslides")),l="",n=t.deltaX,o=100/r*t.deltaX/$(window).innerWidth(),"true"!=s.attr("data-slider-stop")&&(s.attr("data-slider-touch","yes"),t_slds_scrollImages(_,d*i-n),void(t.isFinal&&(.4<t.velocityX?("false"==s.attr("data-slider-with-cycle")&&1==i?i=1:i--,s.attr("data-slider-pos",i),s.attr("data-slider-cycle",l=0==i?"yes":l)):t.velocityX<-.4||o<=-30/r?("false"==s.attr("data-slider-with-cycle")&&(i==r||a&&i==r-e+1)?i=a?r-e:r:i++,s.attr("data-slider-pos",i),s.attr("data-slider-cycle",l=i==r+1?"yes":l)):30/r<=o&&("false"==s.attr("data-slider-with-cycle")&&1==i?i=1:i--,s.attr("data-slider-pos",i),s.attr("data-slider-cycle",l=0==i?"yes":l)),t_slideMove(_,!1,c),s.attr("data-slider-touch","")))));var s,e,a,d,i,r,l,n,o}),hammer.on("panend",function(){t_slideMove(_,!1,c)})}}function t_slds_getCurrentTranslate(t){t=t.find(".t-slds__items-wrapper");if(0<t.length){var s=t[0].style.transform;if(t&&void 0!==s&&""!==s){t=s.match(/\d+/g);if(null!==t)return parseInt(t[0],10)}}}function t_slds_changeImageUrl(t){("object"==typeof t?t:$("#rec"+t)).find(".t-slds__img").each(function(){var t=$(this);void 0!==t.attr("data-src")&&((t=$(this)).attr("src",t.attr("data-src")),t.removeAttr("data-src"))})}function t_slds_onHammerLoad(e,a,d){var i;"function"==typeof window[e]?a():(i=Date.now(),setTimeout(function t(){var s=Date.now();if("function"!=typeof window[e]){if(7e3<s-i)throw new Error(e+" is undefined");setTimeout(t,d||100)}else a()}))}