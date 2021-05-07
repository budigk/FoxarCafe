'use strict'

const {User} = require('../models/index.js');
const bcrypt = require('bcrypt')

class UserModel{
    static login(req, res){
        const {user_name, password} = req.body;

        console.log(req.body)
        User.findOne({where: {user_name}})
        .then(result => {
            console.log("MASUK")
            if (result) {
                let compare = bcrypt.compareSync(password, result.password)

                console.log(result)
                if (compare) {
                    
                    req.session.user_id = result.id
                    req.session.user_name = result.user_name
                    req.session.role = result.role
                    req.session.cart = [];

                    console.log("SESSION ==>>", req.session)
                    res.redirect('/category')
                } else {
                    let err = new Error('Password Salah')
                    err.name = 'invalidUserPassword'
                    throw err
                }
            } else {
                let err = new Error('Username atau Password tidak ditemukan')
                err.name = 'invalidUserPassword'
                throw err
            }
        })
        .catch(err => {
            if (err.name == "invalidUserPassword"){
                res.send(err.message)
            } else {
                res.send(err)
            }
        })
    }

    static toList(req, res){
        let data = User.build(
            {user_name: "", password : "", role: ""}
        )

        console.log(data)
        User.findAll({
            order: ["id"]
        })
        .then(results => {
            res.render('user', {results, data, options: "Entri"})
        })
        .catch(err => {
            res.send(err);
        })
    }

    static editData(req, res){
        let listData;
        User.findAll({
            order: ["id"]
        })
        .then(results => {
            listData = results
            return User.findOne({
                where: {
                    id: req.params.id
                }
            })
        })
        .then(data => {
            res.render('user', {results: listData, data, options: "Edit"})
        })
        .catch(err => res.send(err))
    }

    static create(req, res){
        console.log(req.body)
        User.create(req.body)
            .then(() => res.redirect('/users'))
            .catch(err => res.send(err));
    }

    static update(req, res){
        console.log("edit", req.body)
        User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/users'))
        .catch(err => res.send(err))
    }
    
    static delete(req,res){
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/users'))
        .catch(err => res.send(err))
    }
}

module.exports = UserModel;