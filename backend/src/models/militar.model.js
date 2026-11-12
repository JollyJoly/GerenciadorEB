import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/index.js';
import { POST_GRAD_ENUM } from '../enum/post_grad.enum.js';

export class Militar extends Model {
  static associate(models) {
    this.hasMany(models.Militar, { foreignKey: 'cod_militar', sourceKey: 'militar_id' })
  }
}

Militar.init(
  {
    militar_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: { args: [4, 100], msg: 'nome deve ter entre 4 e 100 caracteres' },
      },
    },
    nome_guerra: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        len: { args: [1, 20], msg: 'nome_guerra deve ter entre 1 e 20 caracteres' },
      },
    },
    ident_militar: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: { args: [10], msg: 'identidade militar deve ter 10 caracteres' },
      },
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      validate: {
        is: { args: /^\d{11}$/, msg: 'cpf deve conter exatamente 11 dígitos numéricos' },
      },
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue('email', typeof value === 'string' ? value.trim().toLowerCase() : value);
      },
      validate: {
        isEmail: { msg: 'digite um email válido' },
        len: { args: [7, 45], msg: 'o email deve ter entre 7 e 45 caracteres' },
      },
    },
    data_nasc: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: { args: true, msg: 'a data de nascimento deve ser uma data válida' },
      },
    },
    post_grad: {
      type: DataTypes.ENUM(...Object.values(POST_GRAD_ENUM)),
      allowNull: false,
      validate: {
        isIn: { args: [Object.values(POST_GRAD_ENUM)], msg: 'insira a sigla de um posto de graduação válido' }
      }
    },
    anos_exer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: { args: [0], msg: 'anos de exército devem ser um número positivo' }
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'militar',
    modelName: 'Militar',
  }
);