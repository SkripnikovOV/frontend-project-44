import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};

const startGame = () => runGame(description, getQuestionAndAnswer);

export default startGame;