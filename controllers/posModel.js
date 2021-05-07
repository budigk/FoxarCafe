'use strict'

const session = require('express-session');
const {Menu, TransMain, TransDetail} = require('../models/index.js');
const {getNoTrans} = require('../helpers/getNoTrans.js')

class PosModel{
    static pesan(req, res){
        let selectedMenu
        let dataMain
        Menu.findOne({where: {id: req.params.id}})
        .then(result => {
            selectedMenu = result;
            
            let transMain = {
                trans_no: "",
                trans_date: new Date(),
                payment_type: "",
                paymentamount: 0,
                change:0,
                createAt: new Date(),
                updatedAt: new Date(),
                member_id: null,
                user_id:req.session.user_id,
            }
            
            console.log("HASIL BUILD", transMain)

            return TransMain.create(transMain)
        })
        .then(resultMain => {
            dataMain = resultMain

            return TransDetail.findOne({
                where: {trans_main_id: dataMain.id, menu_id: selectedMenu.id}
            })
        })
        .then(resultDetail => {
            console.log("RESULT DETAIL ============> ", resultDetail)
        })
        .catch(err => res.send(err))
        // let selectedMenu
        // let main_id
        // console.log("PESAN >>>> ")
        // Menu.findOne({where: {id: req.params.id}})
        // .then(result => {
        //     console.log("Menu.FindOne >>>> ")
        //     selectedMenu = result
            
        //     return TransMain.findOne({where: {paymentamount: 0}})
        // })
        // .then(result => {
        //     console.log("TRANSMAIN FINE ONE >>>> ")
        //     if (!result) {
        //         console.log("TRANSMAIN !RESULT >>>> ")
        //         let dataMain = TransMain.build(
        //             {trans_no: "", trans_date: new Date(), payment_type: "", paymentamount:0, change:0, createdAt: new Date(), updatedAt: new Date(), member_id:"", user_id:req.session.user_name}
        //         )

        //         console.log("TRANSMAIN CREATE->>>>> >>>> ", dataMain)

        //         TransMain.create(dataMain)
        //         .then((dataReturn) => {
        //             console.log("TRANSMAIN CREATE >>>> ", dataReturn)

        //             main_id = dataReturn.id
        //             return TransDetail.findOne({where: {trans_main_id: dataReturn.id, menu_id: selectedMenu.id}})        
        //         })
        //     } else {
        //         console.log("TRANSMAIN TRANSDETAIL FINDONE >>>> ")

        //         main_id = result.id
        //         return TransDetail.findOne({where: {trans_main_id: result.id, menu_id: selectedMenu.id}})
        //     }
        // })
        // .then(result => {
        //     console.log("SAVE DETAIL >>>> ")
        //     if (!result) {
        //         let dataDetail = TransDetail.build(
        //             {qty: 1, price: selectedMenu.price, discount: 0, createdAt: new Date(), updatedAt: new Date(), trans_main_id: main_id, menu_id: selectedMenu.id}
        //         )

        //         return TransDetail.create(dataDetail)
        //     } else {
        //         result.qty++

        //         return TransDetail.update(result)
        //     }
        // })
        // .then(() => {
        //     console.log("REDIRECT >>>> ")
        //     res.redirect('/pos')
        // })
        // .catch(err => {
        //     console.log("ERROR ---------------")
        //     res.send(err)
        // })
    }
}

module.exports = PosModel;