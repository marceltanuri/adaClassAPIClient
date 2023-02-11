
export default class Auth {

    authToken = ""
    #user = ""
    #pass = ""
    #url = ""

    constructor(url, user, pass) {
        this.#url = url
        this.#user = user
        this.#pass = pass
    }

    

    async authenticate() {
        return await fetch(this.#url + "/Auth", {
            "headers": {
                "accept": "application/json",
                "cache-control": "no-cache",
                "content-type": "application/json-patch+json",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "body": "{\"email\":\" " + this.#user + " \",\"password\":\"" + this.#pass + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });
    }

}