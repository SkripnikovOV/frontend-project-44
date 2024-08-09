import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => runGame(description, getQuestionAndAnswer);

export default startGame;
