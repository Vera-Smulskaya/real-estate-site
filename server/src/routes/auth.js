const { Router } = require("express");
const config = require("config");
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth2").Strategy;

const clientID = config.get("google_client.id");
const clientSecret = config.get("google_client.secret");
const callbackURL = config.get("app_host") + "/api/auth/callback";

passport.use(
  new GoogleStrategy(
    { clientID, clientSecret, callbackURL },
    (accessToken, refreshToken, profile, done) =>
      done(null, { email: profile.email, name: profile.name.givenName })
  )
);
passport.serializeUser((user, done) => done(null, JSON.stringify(user)));
passport.deserializeUser((user, done) => done(null, JSON.parse(user)));

module.exports = Router()
  .get("/", passport.authenticate("google", { scope: ["email", "profile"] }))
  .get(
    "/callback",
    passport.authenticate("google", {
      successRedirect: "/admin",
      failureRedirect: "/admin",
    })
  )
  .get("/status", (req, res) => res.json(req.user || {}))
  .get("/logout", (req, res) => req.logout(() => res.redirect("/admin")));
