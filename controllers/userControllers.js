'use strict';

const firebase = require('../db');
const User = require('../models/users.js');
const firestore = firebase.firestore();

// create an user
const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send('el usuario se guardó correctamente');
    } catch (error) {
        res.status(400).send(error.massage);
    }
}

// get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await firestore.collection('users');
        const data = await users.get();
        const allUsers = [];
        if(data.empty) {
            res.status(404).send('No se encuentran usuarios');
        } else {
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().nombres,
                    doc.data().apellidos,
                    doc.data().typid,
                    doc.data().numid,
                    doc.data().email,
                    doc.data().celular,
                    doc.data().nacimiento
                );
                allUsers.push(user);
            });
            res.send(allUsers);
        }
    } catch (error) {
        res.status(404).send(error.massage);
    }
}

//get user by id
const getaUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('el usuario con ese id no se encuentra');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//update an user
const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await firestore.collection('users').doc(id).update(data);
        res.send('el usuario se modificó correctamente');
    } catch (error) {
        res.status(400).send(error.massage);
    }
}

//delete an user
const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('users').doc(id).delete();
        res.send('usuario eliminado');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    addUser,
    getAllUsers,
    getaUser,
    updateUser,
    deleteUser
}