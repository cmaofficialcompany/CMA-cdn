/*Requires jQuery. Copyright (c) by CMA. All rights reserved. Code written by Junhao Zhang. For developmental purposes only, this is not intended to be actual script for everything but it can be*/
var ads=[{title:"Play Docs.io!",click:"https://docsio.coder100.repl.co",desc:"Fun game for you!"},{title:"Play Slides.io!",click:"https://slidesio--coder100.repl.co",desc:"Fun game for you!"},{title:"Play Youtube.io!",click:"https://youtubeio--coder100.repl.co",desc:"This is a fun game for you!"},{title:"Play Sheets.io!",click:"https://sheetsio--coder100.repl.co",desc:"Fun game for you"},{title:"Join the CMA!",click:"https://forms.gle/q6Wjgd2WxwjXh4Tu8",desc:"Earn lots of money and get popular!"}];function getRandomAd(){return ads[Math.floor(Math.random()*ads.length)]}$(".adbox").each(function(){var e=this,t=getRandomAd();$(this).empty().append($("<a>").attr("href",t.click).append($("<h1>").html(t.title)).append($("<span>").html(t.desc))),setInterval(function(){var t=getRandomAd();$(e).empty().append($("<a>").attr("href",t.click).append($("<h1>").html(t.title)).append($("<span>").html(t.desc)))},5e3)});
