$(document).ready(function(){
//	alert("ready");
	$("#fname").val("yufan");
	$("#lname").val("zheng");
	$("#email").val("ajfkshf@qq.com");
	$("#phone").val("20012412");
	$("#dob").val("2017-09-23");
	$("#gender").val("male");
	$("#address").val("fjasjfldajfads");
	$("#submit").click(function(){
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var DOB = $("#dob").val();
		var gender = $("#gender").val();
		var address = $("#address").val();
		console.log(fname);
		console.log(lname);
		console.log(email);
		console.log(phone);
		console.log(DOB);
		console.log(gender);
		console.log(address);
	});
	
	//localStorage.setItem
	localStorage.setItem("sample","test");
	console.log(localStorage.getItem("sample"));
});
