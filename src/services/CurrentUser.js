import GeneralService from "./GeneralService";

export default class CurrentUser extends GeneralService {

    constructor(client){
        super(client)
    }

    async get() {
        return await this.client.getJSON("/Auth")
    }

}