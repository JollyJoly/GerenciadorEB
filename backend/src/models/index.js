import { Militar } from "./militar.model.js";
import { Secao } from "./secao.model.js";
import { Trabalhando } from './trabalhando.model.js';

const models = {
    Militar,
    Secao,
    Trabalhando
}

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

export {
    Militar,
    Secao,
    Trabalhando
}

export default models;