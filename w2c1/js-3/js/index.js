document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("menu1").addEventListener("click", function(){
		var newNode = document.createElement("li");

		var textNode = document.createTextNode("List item 4");
		newNode.appendChild(textNode);

		var olNode = document.getElementById("list1");
		olNode.appendChild(newNode);


	});

	document.getElementById("menu2").addEventListener("click", function(){
		var newNode = document.createElement("li");

		var textNode = document.createTextNode("List item 0");
		newNode.appendChild(textNode);

		var olNode = document.getElementById("list1");
		var siblingNode = olNode.firstElementChild
		olNode.insertBefore(newNode, siblingNode);

	});

	document.getElementById("menu3").addEventListener("click", function(){
		var newNode = document.createElement("li");

		var textNode = document.createTextNode("List item 1.5");
		newNode.appendChild(textNode);

		var olNode = document.getElementById("list1");
		var siblingNode = olNode.children[1]
		olNode.insertBefore(newNode, siblingNode);

	});

	document.getElementById("menu4").addEventListener("click", function(){
		var newNode = document.createElement("li");

		var textNode = document.createTextNode("List item 2.5");
		newNode.appendChild(textNode);

		var olNode = document.getElementById("list1");
		// var siblingNode = olNode.children[2]
		var siblingNode = olNode.lastElementChild
		olNode.insertBefore(newNode, siblingNode);

	});

	//Your exercise starts here
});

