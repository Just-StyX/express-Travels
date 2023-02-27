const getHandler = {
    getHome(req, res) {
        res.render('home')
    },

    getAbout(req, res) {
        res.render('about')
    }
}

module.exports = getHandler