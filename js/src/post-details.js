// build time:Tue Apr 16 2019 14:36:37 GMT+0800 (GMT+08:00)
$(document).ready(function(){function t(){var t=".post-toc";var a=$(t);var o=".active-current";function e(){$(t+" "+o).removeClass(o.substring(1))}a.on("activate.bs.scrollspy",function(){var o=$(t+" .active").last();e();o.addClass("active-current");a.scrollTop(o.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",e);$("body").scrollspy({target:t})}t()});$(document).ready(function(){var t=$("html");var a=200;var o=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var i="sidebar-panel-active";if(t.hasClass(e)){return}var s=$("."+i);var l=$("."+t.data("target"));o?s.velocity("transition.slideUpOut",a,function(){l.velocity("stop").velocity("transition.slideDownIn",a).addClass(i)}):s.animate({opacity:0},a,function(){s.hide();l.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){s.removeClass(i);l.addClass(i)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(a){a.preventDefault();var e=NexT.utils.escapeSelector(this.getAttribute("href"));var i=$(e).offset().top;o?t.velocity("stop").velocity("scroll",{offset:i+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:i},500)});var e=$(".post-toc-content");var i=CONFIG.page.sidebar;if(typeof i!=="boolean"){var s=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var l=e.length>0&&e.html().trim().length>0;i=s&&l}if(i){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});$(document).ready(function(){$(document).on("click",".fold_hider",function(){$(">.fold",this.parentNode).slideToggle();$(">:first",this).toggleClass("open")});$("div.fold").css("display","none")});
//rebuild by neat 