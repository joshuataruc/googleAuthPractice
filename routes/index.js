const router = require('express').Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// login page
// route get

router.get('/', ensureGuest, (req, res) =>{
    res.render('login',
    {layout: 'login',});
})

// dashboard page
// route get

router.get('/dashboard',ensureAuth, (req, res) =>{
    res.render('dashboard',{
        name: req.user.firstName,
    });
})


module.exports = router