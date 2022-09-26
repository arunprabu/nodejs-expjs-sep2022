const express = require('express');
const employeesController = require('../../controllers/employees.controller');
const router = express.Router();

/* GET employees listing. */
router.get('/', employeesController.findAll);

/* POST - create employee */
router.post('/', employeesController.create);

/* GET - to fetch employee details */
/* Let's handle URL Param - id is the URL param*/
router.get('/:id', employeesController.findOne);

module.exports = router;