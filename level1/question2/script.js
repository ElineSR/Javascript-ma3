//Console.log out elements in JSON file
// Made many attempts at this. This below is wrong.
/* Missing:
Should I have made the "video" Json into a var?
It is connected to the HTML throught the script tag, but it probably needs activating somehow. Unsure of how?
Unsure of how to loop further into the information. Found no examples of that. Got confused.

 */
var json = {
"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

var videoData = json.video;

for (var i in videoData) {
	var id = videoData[i].id;
	var name = videoData[i].name;
	console.log(id);
	console.log(name);
}


/*
(function(){
	var myVideo = JSON.parse(video);
	console.log(mydata[0].id)
	console.log(mydata[0].name)
	console.log(mydata[0].url)
	console.log(mydata[0].author)
})();