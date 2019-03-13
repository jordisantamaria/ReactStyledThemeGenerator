import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";

export const isAuthenticated = expiresAt => {
  // Check whether the current time is past the
  // access token's expiry time
  return new Date().getTime() < expiresAt;
};

//TODO la info de AuthService tiene que estar en un Observable / singletone, redux????????????
export default class AuthService {
  expiresAt;
  tokenRenewalTimeout;
  callbackExpiresAt;

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
    this.scheduleRenewal();
    console.log("Construir Auth service");
  }

  login() {
    this.auth0.authorize();
  }

  //looks for the result of authentication in the URL hash. Then, the result is processed with the parseHash method from auth0.js
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) {
          console.log("Error parsing hash in Auth0 service");
          return reject(err);
        }

        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          return resolve(authResult.accessToken);
        }
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
    //localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.expiresAt = expiresAt;
    if (this.callbackExpiresAt) {
      this.callbackExpiresAt(expiresAt);
    }

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("expires_at", expiresAt);

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
  }

  renewSession() {
    console.log("renew session called");
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
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

    clearTimeout(this.tokenRenewalTimeout);
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("profile");

    console.log("removed item from localstorage");
    // navigate to the home route
    /*history.replace('/home');*/
  }

  getUser = () => {
    const expiresAt = localStorage.getItem("expires_at");
    if (expiresAt) {
      if (new Date().getTime() < expiresAt) {
        const access_token = localStorage.getItem("access_token");
        const profile = localStorage.getItem("profile")
          ? JSON.parse(localStorage.profile)
          : {};
        console.log("getUser callbackExpiresAt = ", this.callbackExpiresAt);
        if (this.callbackExpiresAt) {
          console.log("getUser callbackExpiresAt");
          this.callbackExpiresAt(expiresAt);
        }
        return {
          access_token,
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
