const express = require('express');
const { body } = require('express-validator');

const { createUser, getUsers, getUserById, updateUserById } = require('../../controllers/users.controller');
const router = express.Router();

/* POST add user */
router.post('/', 
         body('name')
          .isLength({min: 2})
          .withMessage('Name must be at least 2 chars long'), 
        body('phone')
          .isLength({min:6, max: 10})
          .withMessage('Phone should be 6-10 digits'),
        body('email')
          .isEmail()
          .withMessage('Email seems to be invalid'),
        createUser);
       // Note: Also refer controller as we are sending error messages as resp from there

/* GET users listing. */
router.get('/', getUsers);

/* GET to get user details of specific user id */
router.get('/:userId', getUserById);

/* PUT to update user details of specific user id */
router.put('/:userId', updateUserById);

module.exports = router;
