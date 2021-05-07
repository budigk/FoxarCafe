'use strict'

const {Category, Menu} = require('../models/index.js');

class MenuModel{
    static toList(req, res){
        let data = Menu.build(
            {
                menu_name: "",
                price:0,
                image_url: ""
            }
        )

        console.log(data)
        let category;

        Category.findAll()
        .then(results => {
            category = results
            
            return Menu.findAll({
                order: ["id"],
                include: [Category]
            })
        })
        .then(results => {
            res.render('menus', {results, data, category, options: "Entri"})
        })
        .catch(err => {
            res.send(err);
        })
    }

    static editData(req, res){
        let listData;
        let category;

        Category.findAll()
        .then(results => {
            category = results
            
            return Menu.findAll({
                order: ["id"], 
                include: [Category]
            })
        })
        .then(results => {
            listData = results
            return Menu.findOne({
                where: {
                    id: req.params.id
                }
            })
        })
        .then(data => {
            res.render('menus', {results: listData, data, category, options: "Edit"})
        })
        .catch(err => res.send(err))
    }

    static create(req, res){
        console.log(req.body)
        Menu.create(req.body)
            .then(() => res.redirect('/menus'))
            .catch(err => res.send(err));
    }

    static update(req, res){
        console.log("edit", req.body)
        Menu.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/menus'))
        .catch(err => res.send(err))
    }
    
    static delete(req,res){
        Menu.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/menus'))
        .catch(err => res.send(err))
    }

    static pos(req, res){
        Menu.findAll({
            order: ["id"],
        })
        .then(results => {
            res.render('pos', {results})
        })
        .catch(err => {
            res.send(err);
        })
    }
}

module.exports = MenuModel;