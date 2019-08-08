/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Custom Dropdown
4. Init Page Menu
5. Init Recently Viewed Slider
6. Init Brands Slider
7. Init Isotope
8. Init Price Slider
9. Init Favorites


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menuActive = false;
	var header = $('.header');

	setHeader();

	initCustomDropdown();
	initPageMenu();
	initViewedSlider();
	initBrandsSlider();
	initIsotope();
	initPriceSlider();
	initFavs();

	$(window).on('resize', function()
	{
		setHeader();
	});