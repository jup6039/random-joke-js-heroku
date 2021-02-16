// get a random joke from the list of jokes
const getRandomJokeResponse = (request, response) => {
  // joke questions
  const questions = [
    'What do you call a very small valentine?',
    'What did the dog say when he rubbed his tail on the sandpaper?',
    "Why don't sharks like to eat clowns?",
    'What did the boy cat say to the girl cat?',
    "What is a frog's favorite outdoor sport?",
    'I hate jokes about German sausages.',
    'Did you hear about the cheese factory that exploded in France?',
    'Is this pool safe for diving?',
    'Dad, can you put my shoes on?',
    'Can February March?',
    'What lies at the bottom of the ocean and twitches?',
  ];

  // joke answers
  const answers = [
    'A valen-tiny!',
    'Ruff, Ruff!',
    'Because they taste funny!',
    "You're Purr-fect!",
    'Fly Fishing!',
    'Theyre the wurst.',
    'There was nothing left but de Brie.',
    'It deep ends.',
    'I dont think theyll fit me.',
    'No, but April May.',
    'A nervous wreck.',
  ];

  // get a random number between 0-10 and put into joke object literal
  const randomNum = Math.floor(Math.random() * 11);
  const jokeObj = {
    q: questions[randomNum],
    a: answers[randomNum],
  };

  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(jokeObj));
  response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
