import ClientFactory from "./client/ClientFactory";
import Attendances from "./services/Attendances";
import Lessons from "./services/Lessons";

export class App {

    async run(url, user, pass, turmaId) {

        const client = await ClientFactory.getClient(url, user, pass)

        const lessonsService = new Lessons(client);
        const attendanceService = new Attendances(client, lessonsService)
        
        const attendances = await attendanceService.getTodayAttendances(turmaId)
        console.log("Todays class attendances")
        console.log(attendances)

    }
}