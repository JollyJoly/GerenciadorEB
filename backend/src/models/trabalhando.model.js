import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/index.js';

export class Trabalhando extends Model {
  static associate(models) {
    this.belongsTo(models.Militar, {foreignKey: 'cod_militar', targetKey: 'militar_id'}),
    this.belongsTo(models.Secao, {foreignKey: 'cod_secao', targetKey: 'secao_id'})
  }
}

Trabalhando.init(
  {
    trabalhando_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cod_militar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'militar',
        key: 'militar_id',
      }
    },
    cod_secao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'secao',
        key: 'secao_id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'trabalhando',
    modelName: 'Trabalhando',
  }
);