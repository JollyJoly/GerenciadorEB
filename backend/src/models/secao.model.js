import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/index.js';

export class Secao extends Model {

  static associate(models) {
  }
}

Secao.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: { args: [2, 50], msg: 'nome deve ter entre 2 e 50 caracteres' },
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'secao',
    modelName: 'Secao',
  }
);