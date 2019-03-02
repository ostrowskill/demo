import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
    domain: 'dm-tst.eu.auth0.com',
    clientID: 'Pw5vy7629dJ8Z7JyJBa4VqYL9Rpy4Pic',
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
});

let tokens = {};
let userProfile = {}

const handleAuth = (cb) => {
    webAuth.parseHash( (err, authResult) => {
        if  (authResult && authResult.accessToken && authResult.idToken) {
            tokens.accessToken = authResult.accessToken;
            tokens.idToken = authResult.idToken;
            tokens.expiry = (new Date()).getTime() + authResult.expiresIn * 1000;
            // update userprofile from auth0
            userProfile = authResult.idTokenPayload;
            // console.log(tokens)
            // console.log(userProfile)
            cb();
        } else {
            console.log(err);
        }
    })
};

const getProfile = () => {
    return userProfile;
}

const isLoggedIn = () => {
    return (tokens.accessToken && (new Date()).getTime() < tokens.expiry)
}

const login = () => {
    webAuth.authorize();
}

const logout = () => {
    tokens = {};
}

export {
    login,
    logout,
    isLoggedIn,
    getProfile,
    handleAuth
}