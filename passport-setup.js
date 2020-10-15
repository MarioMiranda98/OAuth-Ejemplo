const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: "687706618997-tpfqak0ndffiopncn7j38j8asn6gda4h.apps.googleusercontent.com",
        clientSecret: "zRBB66THaSLFJL6AutdV_J1B",
        callbackURL: "http://localhost:3000/google/callback"
    },

    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));