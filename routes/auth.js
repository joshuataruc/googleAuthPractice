const passport = require('passport');
const router = require('express').Router();


// passport.js and auth.js are partners
// auth with google
// route get /auth/google
// we are getting the profile array from the passport.js
// passport.authenticate('google', .... google is the strategy that were using so if were using the facebook strategy it will become like this passport.authenticate('facbook'
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


// dashboard page
// route get

// {failureRedirect: '/'} if the function fail it will be redirected to '/'
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    })



// logout function
// route auth/logout

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


module.exports = router