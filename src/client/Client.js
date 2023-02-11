
export default class Client {

    constructor(url, authToken){
        this.url = url
        this.authToken = authToken
    }

    async getJSON(path) {
        return await fetch(this.url + path, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,pt-PT;q=0.8,pt;q=0.7",
                "authorization": "Bearer " + this.authToken,
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