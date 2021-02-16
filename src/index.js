// console.log("First web service starting up ...");

const http = require('http');
const url = require('url');

// imports
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// url struct
const urlStruct = {
  '/random-joke': jsonHandler.getRandomJokeResponse,
  notFound: htmlHandler.get404Response,
};

const onRequest = (request, response) => {
  // console.log(request.headers);
  const parsedUrl = url.parse(request.url);
  const { pathname } = parsedUrl;
  // console.log('parsedUrl=', parsedUrl);
  // console.log("pathname=", pathname);

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response);
  } else {
    urlStruct.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port); // method chaining

// console.log(`Listening on 127.0.0.1: ${port}`);
