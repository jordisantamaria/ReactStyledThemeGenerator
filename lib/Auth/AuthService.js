import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";

//TODO la info de AuthService tiene que estar en un Observable / singletone, redux????????????
export default class AuthService {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  //looks for the result of authentication in the URL hash. Then, the result is processed with the parseHash method from auth0.js
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log("autentificado correctamente");
      } else if (err) {
        //window.location.href = "/";
        console.log("authResult = ", authResult);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    //localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem("token", authResult.accessToken);

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    //window.location.href = "/";
  }

  renewSession() {
    console.log("renew session called");
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log("renew session result = ", authResult);
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

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    //localStorage.removeItem('isLoggedIn');
    localStorage.removeItem("token");
    console.log("removed item from localstorage");
    // navigate to the home route
    /*history.replace('/home');*/
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time

    console.log("Is Authenticated = ", new Date().getTime() < expiresAt);
    console.log("ExpiresAt = ", expiresAt);
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
