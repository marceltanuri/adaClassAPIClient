import Client from "../client/Client";

export default class GeneralService {

    constructor(client) {
        if (client instanceof Client)
            this.client = client
    }

}