const express =require('express');
const {addUser, getAllUsers, getaUser, updateUser, deleteUser} = require('../controllers/userControllers');

const router = express.Router();

router.post('/user', addUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getaUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = {
    routes: router
}