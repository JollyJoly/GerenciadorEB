import { Militar } from "./militar.model.js";
import { Secao } from "./secao.model.js";

const models = {
    Militar,
    Secao
}

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

export {
    Militar,
    Secao
}

export default models;