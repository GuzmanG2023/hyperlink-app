// check for session, if not, redirect to login screen
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;