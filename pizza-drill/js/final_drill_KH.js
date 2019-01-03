// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "</p>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.
function getReceipt() {
	text1 = ""; // These initialize as empty strings but get passed from  
	text2 = ""; // function to function, growing line by line into a full receipt.
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+ '<p style="border-bottom: 1px solid black;">' +selectedSize+"</p>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+'<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+sizeTotal+".00</p>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+'<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+sizeTotal+".00</p>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+'<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+sizeTotal+".00</p>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+'<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+sizeTotal+".00</p>";
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1,text2); // All three of these variables will be passed on to each function.
};	

// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost.
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total.
function getMeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+'<p style="border-bottom: 1px solid black;">' +selectedMeat[j]+"</p>";
			if (meatCount <= 1) {
				text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 0 + ".00</p>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 1 + ".00</p>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 1 + ".00</p>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,text1,text2);
};

function getVeggie(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+'<p style="border-bottom: 1px solid black;">' +selectedVeggie[j]+"</p>";
			if (veggieCount <= 1) {
				text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 0 + ".00</p>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 1 + ".00</p>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 1 + ".00</p>";
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
	}
	text2 = text2+'<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ cheeseTotal+".00</p>";
	text1 = text1+'<p style="border-bottom: 1px solid black;">' +selectedCheese+"</p>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + '<p style="border-bottom: 1px solid black;">' +selectedSauce +"</p>";
		}
	}
	text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ 0 + ".00</p>";
	getCrust(runningTotal,text1,text2)
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + '<p style="border-bottom: 1px solid black;">' +selectedCrust + "</p>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + '<p style="border-bottom: 1px solid black;text-align: right;">' +"&dollar;"+ crustTotal + ".00</p>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "<h3>&dollar;"+runningTotal+".00</h3>";
};

// This code clears the form selections to their defaults and then sets the 
// corresponding div's CSS opacity to 0, effectively hiding it from view.
function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};