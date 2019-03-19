import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";
import Observable from "../utils/Observable";
import { configReact } from "../config/configReact";

//TODO el servei te que funcionar tot amb aquesta funcio, no te que guardar expiresAt
export const isAuthenticated = expiresAt => {
  // Check whether the current time is past the
  // access token's expiry time
  if (expiresAt === null) {
    return null;
  }
  return new Date().getTime() < expiresAt;
};

//TODO la info de AuthService tiene que estar en un Observable / singletone, redux????????????
class Auth {
  expiresAt;
  tokenRenewalTimeout;
  callbackExpiresAt;
  idToken;
  profile;
  hasInit = false;
  initializing = false;
  initializingObservable;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid profile email"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.renewSession = this.renewSession.bind(this);
    console.log("Construir Auth service");
    this.initializingObservable = new Observable(this.initializing);
  }

  init() {
    //per inicialitzar necessitem idToken, expiresAt
    return new Promise((resolve, reject) => {
      if (this.hasInit) {
        resolve(this.idToken);
      } else if (this.initializing === false) {
        //obtenir access token
        this.initializing = true;
        this.renewSession(() => {
          this.hasInit = true;
          this.initializing = false;
          this.initializingObservable.notifyChanges(this.initializing);
          console.log("idToken init = ", this.idToken);
          resolve(this.idToken);
        });
      } else if (this.initializing) {
        this.initializingObservable.subscribeOneChange(() =>
          resolve(this.idToken)
        );
      }
    });
  }

  login() {
    this.auth0.authorize();
  }

  getIdToken() {
    return this.idToken;
  }

  //looks for the result of authentication in the URL hash. Then, the result is processed with the parseHash method from auth0.js
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) {
          console.log("Error parsing hash in Auth0 service");
          return reject(err);
        }
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }

        this.setSession(authResult);
        resolve(authResult.accessToken);
      });
    }).then(accessToken => {
      return this.handleUserInfo(accessToken);
    });
  }

  handleUserInfo(accessToken) {
    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (err) {
          console.log("Error getting user info in Auth0 service");
          return reject(err);
        }

        if (profile) {
          this.setProfile(profile);
          return resolve({
            accessToken,
            user_id: profile.sub,
            email: profile.email,
            name: profile.name,
            picture: profile.picture,
            email_verified: profile.email_verified
          });
        }
      });
    });
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage

    // Set the time that the access token will expire at
    this.idToken = authResult.idToken;
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    if (this.expiresAt !== expiresAt) {
      this.expiresAt = expiresAt;
      console.log("expiresAt on setSession = ", this.expiresAt);
      localStorage.setItem("expires_at", expiresAt);
      if (this.callbackExpiresAt) {
        this.callbackExpiresAt(expiresAt);
      }
    }
    this.scheduleRenewal();
    // navigate to the home route
    //window.location.href = "/";
  }

  setProfile(profile) {
    localStorage.setItem(
      "profile",
      JSON.stringify({
        user_id: profile.sub,
        email: profile.email,
        name: profile.name,
        picture: profile.picture,
        email_verified: profile.email_verified
      })
    );
    this.profile = profile;
  }

  renewSession(callback) {
    if (this.isAuthenticated()) {
      console.log("renew session called");
      this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          if (callback) {
            callback(true);
          }
        } else if (err) {
          this.logout();
          console.log(err);
          alert(
            `Could not get a new token (${err.error}: ${
              err.error_description
            }).`
          );
          if (callback) {
            callback(false);
          }
        }
      });
    } else if (callback) {
      callback(false);
    }
  }

  scheduleRenewal() {
    let expiresAt = this.expiresAt;
    const timeout = expiresAt - Date.now();
    if (timeout > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewSession();
      }, timeout);
    }
  }

  //TODO token expires i navigate??
  logout() {
    // Remove tokens and expiry time
    this.expiresAt = 0;

    if (this.callbackExpiresAt) {
      this.callbackExpiresAt(this.expiresAt);
    }
    //redirect to https://learn-japanese.eu.auth0.com/v2/logout
    this.auth0.logout({
      returnTo: configReact.URL,
      clientID: AUTH_CONFIG.clientId
    });

    clearTimeout(this.tokenRenewalTimeout);
    localStorage.removeItem("expires_at");
    localStorage.removeItem("profile");

    console.log("removed item from localstorage");
    // navigate to the home route
    /*history.replace('/home');*/
  }

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    if (localStorage && !expiresAt) {
      expiresAt = localStorage.getItem("expires_at");
      if (this.callbackExpiresAt) {
        this.callbackExpiresAt(expiresAt);
      }
    }
    console.log("expiresAt = ", expiresAt);
    return new Date().getTime() < expiresAt;
  };

  getUser = () => {
    const expiresAt = localStorage.getItem("expires_at");
    if (expiresAt) {
      if (new Date().getTime() < expiresAt) {
        const profile = localStorage.getItem("profile")
          ? JSON.parse(localStorage.profile)
          : {};
        return {
          ...profile
        };
      } else {
        this.logout();
        return null;
      }
    }
  };

  updateExpiresAt = callback => {
    this.callbackExpiresAt = callback;
  };
}

const auth = new Auth();

export default auth;
