$(function ()
{
    'use strict' 
   // Adjust slider height 
   var winH   = $(window).height() ; 
   var upperH = $('.upper').innerHeight(); 
   var navH   = $('.navbar').innerHeight() ; 

   $('.slider .carousel-item').height(winH -(upperH + navH));
})