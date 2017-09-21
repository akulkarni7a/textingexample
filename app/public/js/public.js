$("#submit").on("click", function(event){
	event.preventDefault();
	var data= {
		number: $("#number").val(),
		message: $("#message").val(),
		interval: $("#options").val()
	};
	console.log(data);


	$.post("/new",data,function(data){
	});

});

$("#cancel").on("click",function(event){

	$.post("/cancel",function(data){
	});

});

