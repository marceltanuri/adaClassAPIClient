import Session from "./Session";

export default class Client {

    constructor(session){
        if(session instanceof Session)
            this.session = session
    }

    async getJSON(path) {
        return await fetch(this.session.baseURL + path, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,pt-PT;q=0.8,pt;q=0.7",
                "authorization": "Bearer " + this.session.authToken,
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }).then(async res => {
            const json = await res.json();
            return json;
        })

    }


}