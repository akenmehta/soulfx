!function i(e,n,o){function r(s,d){if(!n[s]){if(!e[s]){var w="function"==typeof require&&require;if(!d&&w)return w(s,!0);if(t)return t(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(i){var n=e[s][1][i];return r(n||i)},u,u.exports,i,e,n,o)}return n[s].exports}for(var t="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(i,e,n){var o={};o.windowSize=$(window).width(),o.toggleClassInvisible=function(){o.windowSize<=668?$(".header__item:last-child").removeClass("hide-me"):$(".header__item:last-child").addClass("hide-me")},o.windowResize=function(){$(window).resize(function(){o.windowSize=$(window).width(),o.toggleClassInvisible(),console.log(o.windowSize)})},o.init=function(){o.windowResize(),o.toggleClassInvisible()},$(function(){o.init()})},{}]},{},[1]);
//# sourceMappingURL=main.js.map
