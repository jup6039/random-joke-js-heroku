//console.log("First web service starting up ...");

const http = require('http');

const url = require('url');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// 404 page
const errorPage = `
<html>
  <head>
    <title>404 - File Not Found!</title>
  </head>
  <body>
    <h1>404 - File Not Found!</h1>
    <p>Check your URL, or your typing!!</p>
	<p>:-0</p>
  </body>
</html>`;

// get a random joke from the list of jokes
const getRandomNumberJoke = () => {
	// joke questions
	let questions = [
		"What do you call a very small valentine?",
		"What did the dog say when he rubbed his tail on the sandpaper?",
		"Why don't sharks like to eat clowns?",
		"What did the boy cat say to the girl cat?",
		"What is a frog's favorite outdoor sport?",
		"I hate jokes about German sausages.",
		"Did you hear about the cheese factory that exploded in France?",
		"Is this pool safe for diving?",
		"Dad, can you put my shoes on?",
		"Can February March?",
		"What lies at the bottom of the ocean and twitches?"
	];
	
	// joke answers
	let answers = [
		"A valen-tiny!",
		"Ruff, Ruff!",
		"Because they taste funny!",
		"You're Purr-fect!",
		"Fly Fishing!",
		"Theyre the wurst.",
		"There was nothing left but de Brie.",
		"It deep ends.",
		"I dont think theyll fit me.",
		"No, but April May.",
		"A nervous wreck."
	];
	
	// get a random number between 0-10 and put into joke object literal
	const randomNum = Math.floor(Math.random() * 11);
	const jokeObj = {
		q: questions[randomNum],
		a: answers[randomNum]
	};
	return JSON.stringify(jokeObj);
};


const onRequest = (request, response) => {
  //console.log(request.headers);
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname + "/randomjoke";
  //console.log("parsedUrl=", parsedUrl);
  //console.log("pathname=", pathname);
  
  if (pathname == "/") {
	  response.writeHead(200, { 'Content-Type': 'application/json'});	// send response headers
	  response.write(getRandomNumberJoke());	// send content
	  response.end();	// close connection
  } else {
	  response.writeHead(404, { 'Content-Type': 'text/html'});	// send response headers
	  response.write(errorPage);	// send content
	  response.end();	// close connection
  }
   
};


http.createServer(onRequest).listen(port);	// method chaining

//console.log(`Listening on 127.0.0.1: ${port}`);