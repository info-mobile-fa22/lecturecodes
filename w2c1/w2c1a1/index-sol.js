
const newMovie = [["Girl Picture","Amy Nicholson", "2022-08-11", "https://www.nytimes.com/2022/08/11/movies/girl-picture-review.html", "https://static01.nyt.com/images/2022/08/12/arts/11girl/11girl-mediumThreeByTwo210.jpg"],["A Little Night Music", "Jesse Green", "2022-08-12","https://www.nytimes.com/2022/08/12/theater/a-little-night-music-great-barrington-stage.html","https://static01.nyt.com/images/2022/08/12/arts/12little-night/12little-night-mediumThreeByTwo210.jpg"]]

document.addEventListener("DOMContentLoaded", function(event) {
	
	/* 
	In this JavaScript exercise, we will practice DOM selection and manipulation.
	The sample code here shows the UI of a weather app, without backend data access.

	In the newMovie array, there are two movie datasets.

	When a user clicks the "More Reviews +" button, please 
	(1) Use the first movie data set ("Girl Picture") to replace "The Princess"
	(2) Use the second movie dataset  ("A Little Night Music") to fill the empty panel at the bottom of the page

	** You are free to modify the HTML file to make it easier for you to manipulate the DOM **

	*/
	
	document.getElementById("more-review").addEventListener("click", function(){
		let movieCP = newMovie[0]
		let movieCPNode = document.getElementsByClassName("panel-body")[3]
		let movieCPNodeText = movieCPNode.getElementsByClassName("text")
		movieCPNodeText[0].querySelector(".caption-display > span").textContent = movieCP[0]
		movieCPNodeText[0].getElementsByClassName("status")[0].textContent = movieCP[1]
		movieCPNodeText[0].getElementsByClassName("status")[1].textContent = movieCP[2]
		movieCPNodeText[0].getElementsByClassName("status")[2].textContent = movieCP[3]
		let movieCPNodePoster = movieCPNode.getElementsByClassName("poster")
		movieCPNodePoster[0].querySelector("img").setAttribute("src", movieCP[4])


		let movieALNM = newMovie[1]
		let movieALNMNode = document.getElementsByClassName("panel-body")[4]
		let movieALNMNodeText = movieALNMNode.getElementsByClassName("text")
		movieALNMNodeText[0].querySelector(".caption-display > span").textContent = movieALNM[0]
		movieALNMNodeText[0].getElementsByClassName("status")[0].textContent = movieALNM[1]
		movieALNMNodeText[0].getElementsByClassName("status")[1].textContent = movieALNM[2]
		movieALNMNodeText[0].getElementsByClassName("status")[2].textContent = movieALNM[3]
		let movieALNMNodePoster = movieALNMNode.getElementsByClassName("poster")
		movieALNMNodePoster[0].querySelector("img").setAttribute("src", movieALNM[4])

	})


}, false);