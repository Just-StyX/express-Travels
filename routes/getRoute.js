const fortune = require('../libs/data')

const getHandler = {
    getHome(req, res) {
        res.render('home')
    },

    getAbout(req, res) {
        const randomFortune = fortune[Math.floor(Math.random() * fortune.length)]
        res.render('about', {
            fortune: randomFortune
        })
    }
}

module.exports = getHandler