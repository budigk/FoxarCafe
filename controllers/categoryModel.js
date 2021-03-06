'use strict'

const {Category} = require('../models/index.js');

class CategoryModel{
    static toList(req, res){
        let data = Category.build(
            {category_name: ""}
        )

        console.log(data)
        Category.findAll({
            order: ["id"]
        })
        .then(results => {
            res.render('category', {results, data, options: "Entri"})
        })
        .catch(err => {
            res.send(err);
        })
    }

    static editData(req, res){
        let listData;
        Category.findAll({
            order: ["id"]
        })
        .then(results => {
            listData = results
            return Category.findOne({
                where: {
                    id: req.params.id
                }
            })
        })
        .then(data => {
            res.render('category', {results: listData, data, options: "Edit"})
        })
        .catch(err => res.send(err))
    }

    static create(req, res){
        console.log(req.body)
        Category.create(req.body)
            .then(() => res.redirect('/category'))
            .catch(err => res.send(err));
    }

    static update(req, res){
        console.log("edit", req.body)
        Category.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/category'))
        .catch(err => res.send(err))
    }
    
    static delete(req,res){
        Category.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/category'))
        .catch(err => res.send(err))
    }
}

module.exports = CategoryModel;