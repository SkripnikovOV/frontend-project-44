// src/games/calc.js

import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2).toString();
  return [question, correctAnswer];
};

const startGame = () => runGame(description, getQuestionAndAnswer);

export default startGame;
