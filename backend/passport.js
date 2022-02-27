const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "913554659982-7qbklifgbh7m2gn9dsa2t7njc03ohq05.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
