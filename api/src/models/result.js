// Result (line item from health code result)
export default (sequelize, DataTypes) => {
    return sequelize.define('results', {
      camis: {
          type: DataTypes.INTEGER
      },
      dba: {
          type: DataTypes.TEXT
      },
      boro: {
          type: DataTypes.STRING 
      },
      building: {
        type: DataTypes.TEXT
      },
      street: {
        type: DataTypes.TEXT
      },
      zipcode: {
        type: DataTypes.TEXT
      },
      phone: {
        type: DataTypes.TEXT
      },
      inspection_date: {
        type: DataTypes.DATE
      },
      action: {
        type: DataTypes.TEXT
      },
      violation_description: {
        type: DataTypes.TEXT
      },
      score: {
        type: DataTypes.INTEGER
      },
      grade: {
        type: DataTypes.STRING
      }
    })
  }