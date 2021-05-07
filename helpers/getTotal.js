function getTotalCart(cart = []){
    let total = 0;
    for (i = 0; i < cart.length; i++){
        total += cart[i].qty * cart[i].price
    }
    return total
}

module.exports = getTotalCart;