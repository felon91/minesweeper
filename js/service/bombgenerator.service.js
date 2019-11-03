import * as config from "../config.js";

export class BombGeneratorService {

  generationBomb(arr) {
    let countBomb = 10;
    switch (arr.length) {
      case config.FIELD_GAME.fieldOne: {
        countBomb = config.COUNT_BOMB.levelOne;
        break;
      }
      case config.FIELD_GAME.fieldTwo: {
        countBomb = config.COUNT_BOMB.levelTwo;
        break;
      }
      case config.FIELD_GAME.fieldThree: {
        countBomb = config.COUNT_BOMB.levelThree;
        break;
      }
      case config.FIELD_GAME.fieldFour: {
        countBomb = config.COUNT_BOMB.levelFour;
        break;
      }
      case config.FIELD_GAME.fieldFive: {
        countBomb = config.COUNT_BOMB.levelFive;
        break;
      }
      case config.FIELD_GAME.fieldSix: {
        countBomb = config.COUNT_BOMB.levelSix;
        break;
      }
      case config.FIELD_GAME.fieldSeven: {
        countBomb = config.COUNT_BOMB.levelSeven;
        break;
      }
      case config.FIELD_GAME.fieldEight: {
        countBomb = config.COUNT_BOMB.levelEight;
        break;
      }
      case config.FIELD_GAME.fieldNine: {
        countBomb = config.COUNT_BOMB.levelNine;
        break;
      }
    }

    let results = [];

    for (let i = 0; i < countBomb; i++) {
      this.setBomb(arr, results);
    }

  }

  setBomb(field, results) {
    let firstResult = Number(this.randomInteger(0, field.length - 1));
    let secondResult = Number(this.randomInteger(0, field.length - 1));

    if (results.includes(`${firstResult}, ${secondResult}`)) {
      this.setBomb(field, results);
    } else {
      results.push(`${firstResult}, ${secondResult}`);
      field[firstResult][secondResult] = config.BOMB;
    }
  }

  fillField(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (
            this.isNumberOutOfBound(arr, i - 1, j)
            &&
            arr[i - 1][j] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (
            this.isNumberOutOfBound(arr, i - 1, j + 1)
            &&
            arr[i - 1][j + 1] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (
            this.isNumberOutOfBound(arr, i - 1, j - 1)
            &&
            arr[i - 1][j - 1] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (
            this.isNumberOutOfBound(arr, i + 1, j)
            &&
            arr[i + 1][j] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (

            this.isNumberOutOfBound(arr, i + 1, j + 1)
            &&
            arr[i + 1][j + 1] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (
            this.isNumberOutOfBound(arr, i + 1, j - 1)
            &&
            arr[i + 1][j - 1] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (
            this.isNumberOutOfBound(arr, i, j - 1)
            &&
            arr[i][j - 1] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
        if (
            this.isNumberOutOfBound(arr, i, j + 1)
            &&
            arr[i][j + 1] == config.BOMB
            &&
            arr[i][j] !== config.BOMB
        ) arr[i][j]++;
      }
    }
  }

  isNumberOutOfBound(arr, x, y) {
    if (arr[x] === undefined) {
      return false;
    } else if (arr[x][y] === undefined) {
     return false;
    }
    return true;
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}