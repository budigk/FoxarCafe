const authMiddleware = (req, res, next) => {
    console.log("MIDDLEWARE")
    if (req.session.user_name) {
        console.log(req.session)
        next()
    } else {
        let notif = "mohon login terlebih dahulu"
        res.redirect(`/?notif=${notif}`)
    }
}

module.exports = authMiddleware