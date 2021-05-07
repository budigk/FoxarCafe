'use strict'

const session = require('express-session');
const {Menu, TransMain, TransDetail} = require('../models/index.js');

class PosModel{
    static pesan(req, res){
        Menu.findOne({where: {id: req.params.id}})
        .then(result => {
            console.log(req.session, "-----------------------------------------------")
            if (!req.session.cart){
                console.log("XXX")
                req.session.cart = [];
            }

            req.session.cart.push({
                menu_id: result.id,
                menu_name: result.menu_name,
                qty: 1,
                price: result.price,
                discount: 0 
            })

            console.log(req.session.cart)
            console.log(req.session)

            res.redirect('/pos')
        })
    }

    static create(req, res){

    }
}

module.exports = PosModel;