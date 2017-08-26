// JavaScript Document
$(function(){
	$(".popup-creatcategory-tag span").click(function(){
		$(this).addClass("popup-creatcategory-active").siblings().removeClass("popup-creatcategory-active");
		var index=$(this).index();
		$(".popup-creatcategory-con div:eq("+index+")").show().siblings("div").hide();
		})
	$(".manage-menu-btn").hover(function(){
		$(".manage-top-slider").slideDown();
		$(".manage-slider-nav").show();
		$(".manage-slider-category").hide();
		$(".manage-slider-sort").hide();
		},function(){
			$(".manage-top-slider").slideUp();
		    $(".manage-slider-nav").hide();
			})
	$(".manage-option-product").hover(function(){
		$(".manage-top-slider").slideDown();
		$(".manage-slider-nav").hide();
		$(".manage-slider-category").show();
		$(".manage-slider-sort").hide();
		},function(){
			$(".manage-top-slider").slideUp();
		    $(".manage-slider-category").hide();
			})
	$(".manage-option-sort").hover(function(){
		$(".manage-top-slider").slideDown();
		$(".manage-slider-nav").hide();
		$(".manage-slider-category").hide();
		$(".manage-slider-sort").show();
		},function(){
			$(".manage-top-slider").slideUp();
		    $(".manage-slider-sort").hide();
			})
    $(".product-add").click(function(){
		$(".popup").show();
		$(".popup-creatproduct").show();
		})
	$(".product-cansel").click(function(){
		$(".popup").hide();
		$(".popup-creatproduct").hide();
		})	
	})
