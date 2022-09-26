const db = require("../models/mysql");
const Employee = db.employees; // into the table
const Op = db.Sequelize.Op;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create an Employeee
  const employee = {
    name: req.body.name,
    city: req.body.city
  };
  // Save Employeee in the database
  Employee.create(employee)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  //const title = req.query.title;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Employee.findAll()
    .then(data => { // if we get employees 
      res.json(data);
    })
    .catch(err => { // if we error 
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving Employee with id=" + id
      });
    });
};