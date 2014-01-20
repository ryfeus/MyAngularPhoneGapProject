function HeadingClick(elm){
	$(elm).siblings().each(function(){
		$(this).css("background-color","");
	});
	$(elm).css("background-color","#000");
	if($(elm).text() == 'Day'){
		$("#divDays").show();
	}else{
		$("#divDays").hide();
	}
};	

function showDescriptionDiv(elm){
	$("#divMain").hide();
	$("#divDescription").show('slow');
	var title = $(elm).find(".title").text();
	$("#divDescription").find("#divEventHeading").html(title);
}  