var a="99";

var num=Number(a);

document.write(num+10);

var b="10 33 21";

num=parseInt(b);

document.write("<br>"+num);

var c="13.33 14.22";

num=parseFloat(c);

document.write("<br>"+num);

var d=Infinity;

num=isFinite(d);

document.write("<br>"+num);

var e=223.1;

num=Number.isInteger(e);

document.write("<br>"+num);

var f=2.55;

num=Math.ceil(f);

document.write("<br>"+num);

num=Math.floor(f);

document.write("<br>"+num);

num=Math.round(f);

document.write("<br>"+num);

num=Math.trunc(f);

document.write("<br>"+num);

num=Math.max(11,21,12,55,44,101);

document.write("<br>"+num);

num=Math.min(11,21,12,55,44,101);

document.write("<br>"+num);

var g=144;

num=Math.sqrt(g);

document.write("<br>"+num);

var h=125;

num=Math.cbrt(h);

document.write("<br>"+num);

num=Math.pow(2,3);

document.write("<br>"+num);

num=Math.floor((Math.random() *100)+1);

document.write("<br>"+num);

var i=23.45;

num=Math.abs(i);

document.write("<br>"+num);

num=Math.PI;

document.write("<br>"+num);

// var now=new Date('September 9 2011 12:06');

var now=new Date();

document.write("<br>"+now);

document.write("<br>"+now.toDateString());

document.write("<br>"+now.getDate());

document.write("<br>"+now.getFullYear());

document.write("<br>"+now.getMonth());

document.write("<br>"+now.getDay());