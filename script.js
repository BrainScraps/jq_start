$(document).ready(function(){
  	$("#chk_wth").on("click", function(e){
  			e.preventDefault();
  			var current = parseInt($("#chk_bal").text());
  			var requested_amt = parseInt($("#chk_box").val());
  			var sav_bal = parseInt($("#sav_bal").text());


  			if (current == 0){
  				if (sav_bal > requested_amt){

  					$("#sav_bal").text(sav_bal - requested_amt);
  					$("#chk_box").val("");
  				} else {
  					broke_sucka();
  				}
  			} else if (requested_amt > current + sav_bal){
  				broke_sucka();
  			} else if (requested_amt <= current){
  				$("#chk_bal").text(current - requested_amt);
  					$("#chk_box").val("");
  			} else if (requested_amt > current && requested_amt < current + sav_bal){
  				var remainder = requested_amt - current;
  				$("#chk_bal").text("0");
  				$("#sav_bal").text(sav_bal - remainder);
  				alert("You have used overdraft protection to withdraw $" + remainder + " from your SAVINGS account.");

  			} else {
  				alert("Something went wrong, apparently.");
  			}
  			zero_chk();

  });
  	$("#sav_wth").on("click", function(e){
  		e.preventDefault();

  		var current = parseInt($("#sav_bal").text());
  		var requested_amt = parseInt($("#sav_box").val());

  		if (current < requested_amt){
  			broke_sucka();
  		} else {
  			$("#sav_bal").text(current - requested_amt);
  			$("#sav_box").val("");
  		}
  		zero_chk();


  	})

  	$("#chk_dep").on("click", function(e){
  			e.preventDefault();
  			var current = parseInt($("#chk_bal").text());
  			var requested_amt = parseInt($("#chk_box").val());

  			$("#chk_bal").text(current + requested_amt);
  			$("#chk_box").val("");

  			zero_chk();

  	});

  	$("#sav_dep").on("click", function(e){
  			e.preventDefault();
  			var current = parseInt($("#sav_bal").text());
  			var requested_amt = parseInt($("#sav_box").val());

  			$("#sav_bal").text(current + requested_amt);
  			$("#sav_box").val("");

  			zero_chk();

  	});

  });


function broke_sucka(){ alert("Sorry, you don't have enough money in Checking and Savings to complete the transaction.");
  					$("#chk_box").val("");

  				};
function zero_chk(){
	if (parseInt($("#chk_bal").text()) == 0){
		legend = $("#checking_div legend").text();
		$("#checking_div").addClass("zero_bal");
		$("#chk_zero").show();
	} else {
		$("#checking_div").removeClass("zero_bal");

		$("#chk_zero").hide();

	}

	if (parseInt($("#sav_bal").text()) == 0){
		$("#savings_div").addClass("zero_bal");
		$("#sav_zero").show();
	} else {
		$("#savings_div").removeClass("zero_bal");

		$("#sav_zero").hide();
	}
}