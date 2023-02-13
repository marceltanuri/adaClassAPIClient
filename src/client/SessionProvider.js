import Session from "./Session";

export default class SessionProvider {

    static async getSession(url, user, pass) {
        const authToken = await this.#doAuth(url, user, pass)
        return new Session(url, authToken)
    }

    static async #doAuth(url, user, pass) {
        return this.#authenticate(url, user, pass).then(async res => {
            const json = await res.json();
            return json.session;
        })
    }

    static async #authenticate(url, user, pass) {
        return await fetch(url + "/Auth", {
            "headers": {
                "accept": "application/json",
                "cache-control": "no-cache",
                "content-type": "application/json-patch+json",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "body": "{\"email\":\" " + user + " \",\"password\":\"" + pass + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });
    }


}