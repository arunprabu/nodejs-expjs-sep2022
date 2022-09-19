var express = require('express');
const { createUser, getUsers, getUserById, updateUserById } = require('../../controllers/users.controller');
var router = express.Router();

/* POST add user */
router.post('/', createUser);

/* GET users listing. */
router.get('/', getUsers);

/* GET to get user details of specific user id */
router.get('/:userId', getUserById);

/* PUT to update user details of specific user id */
router.put('/:userId', updateUserById);

module.exports = router;
