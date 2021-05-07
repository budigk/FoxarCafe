'use strict'

const {Member} = require('../models/index.js');

class MemberModel{
    static toList(req, res){
        let data = Member.build(
            {name: "", phone: "", discount:0}
        )

        console.log(data)
        Member.findAll({
            order: ["id"]
        })
        .then(results => {
            res.render('member', {results, data, options: "Entri"})
        })
        .catch(err => {
            res.send(err);
        })
    }

    static editData(req, res){
        let listData;
        Member.findAll({
            order: ["id"]
        })
        .then(results => {
            listData = results
            return Member.findOne({
                where: {
                    id: req.params.id
                }
            })
        })
        .then(data => {
            res.render('member', {results: listData, data, options: "Edit"})
        })
        .catch(err => res.send(err))
    }

    static create(req, res){
        console.log(req.body)
        Member.create(req.body)
            .then(() => res.redirect('/members'))
            .catch(err => res.send(err));
    }

    static update(req, res){
        console.log("edit", req.body)
        Member.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/members'))
        .catch(err => res.send(err))
    }
    
    static delete(req,res){
        Member.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/members'))
        .catch(err => res.send(err))
    }
}

module.exports = MemberModel;