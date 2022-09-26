module.exports = (sequelize, Sequelize) => {
  // employee is the table in mysql
  const Employee = sequelize.define("employee", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  });
  return Employee;
};

/*
This Sequelize Model represents employees table in MySQL database. These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:
create a new employee: create(object)
find a employee by id: findByPk(id)
get all employees: findAll()
update a employee by id: update(data, where: { id: id })
remove a employee: destroy(where: { id: id })
remove all employees: destroy(where: {})
find all employees by title: findAll({ where: { title: ... } })
These functions will be used in our Controller.
*/