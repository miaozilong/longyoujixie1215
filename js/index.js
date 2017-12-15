$(function(){
	$(".setIndexPage a").on("click",function(){
		window.alert('您的浏览器不支持自动设置主页，请使用浏览器菜单手动设置!');
		return false;
	})
	$(".addToFav a").on("click",function(){
		window.alert('您使用的浏览器不支持此功能，请按“Ctrl + D”键手工加入收藏!');
		return false;
	})
})
