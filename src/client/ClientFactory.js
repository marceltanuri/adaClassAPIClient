import Client from "./Client";
import Auth from "./Auth";

export default class ClientFactory {

    static async getClient(url, user, pass) {
        const authToken = await this.#doAuth(url, user, pass)
        return new Client(url, authToken)
    }

    static async #doAuth(url, user, pass) {
        return new Auth(url, user, pass).authenticate().then(async res => {
            const json = await res.json();
            return json.session;
        })
    }


}