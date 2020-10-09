// https://id.twitch.tv/oauth2/token?client_id=&client_secret=&grant_type=client_credentials
// get bearer token
// validate token
// 

module.exports =  class OAuth {
    constructor(){
        this.CALLBACK_URL = "/redirect";
        this.TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
        this.TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;
        this.application_token = null;
        this.access_token = null;
    }
    
}

class Refresh {
    constructor(){
        this.access_token = "";
        this.refresh_token = "";
        this.expires_in = 0;
        this.scope
    }
}
