document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("menu1").addEventListener("click", function(){
		var newNode = document.createElement("li");
		var text = document.createTextNode("Appended item");
		newNode.appendChild(text);
		document.getElementsByTagName("ol")[0].appendChild(newNode);
	});

	document.getElementById("menu2").addEventListener("click", function(){
		var newNode = document.createElement("li");
		var text = document.createTextNode("Prepended item");
		newNode.appendChild(text);

		var olItem = document.getElementsByTagName("ol")[0];
		var firstItem = olItem.firstElementChild;
		olItem.insertBefore(newNode, firstItem);
	});

	document.getElementById("menu3").addEventListener("click", function(){
		var newNode = document.createElement("li");
		var text = document.createTextNode("the after item");
		newNode.appendChild(text);

		var olItem = document.getElementsByTagName("ol")[0];
		var secondItem = olItem.children[1];
		olItem.insertBefore(newNode, secondItem);
	});

	document.getElementById("menu4").addEventListener("click", function(){
		var newNode = document.createElement("li");
		var text = document.createTextNode("the before item");
		newNode.appendChild(text);

		var olItem = document.getElementsByTagName("ol")[0];
		var secondItem = olItem.lastElementChild;
		olItem.insertBefore(newNode, secondItem);
	});

	//Your exercise starts here
	document.getElementById("test-menu1").addEventListener("click", function(){
		var newNode = document.createElement("span");
		var text = document.createTextNode("span 4");
		newNode.appendChild(text);
		document.getElementsByTagName("p")[0].appendChild(newNode);
	});

	document.getElementById("test-menu2").addEventListener("click", function(){
		var newNode = document.createElement("span");
		var text = document.createTextNode("span 0");
		newNode.appendChild(text);

		var brNode = document.createElement("br");

		var olItem = document.getElementsByTagName("p")[0];
		var firstItem = olItem.firstElementChild;
		olItem.insertBefore(brNode, firstItem);
		olItem.insertBefore(newNode, brNode);
	});

	document.getElementById("test-menu3").addEventListener("click", function(){
		var newNode = document.createElement("span");
		var text = document.createTextNode("before span 1");
		newNode.appendChild(text);

		var brNode = document.createElement("br");

		var olItem = document.getElementsByTagName("p")[0];
		var firstItem = olItem.children[0];
		olItem.insertBefore(newNode, firstItem);
		olItem.insertBefore(brNode, firstItem);

	});

	document.getElementById("test-menu4").addEventListener("click", function(){
		var newNode = document.createElement("span");
		var text = document.createTextNode("after span 3");
		newNode.appendChild(text);

		var brNode = document.createElement("br");

		var olItem = document.getElementsByTagName("p")[0];
		var lastItem = olItem.lastElementChild;
		olItem.appendChild(newNode)
		olItem.appendChild(brNode)
	});
});

