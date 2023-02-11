import Client from "../client/Client";
import Lessons from "./Lessons";

export default class Attendances {

    #client = null
    #lessons = null

    constructor(client, lessons) {
        if (lessons instanceof Lessons)
            this.#lessons = lessons

        if (client instanceof Client)
            this.#client = client
    }

    async getTodayAttendances(turmaId) {
        const todayLesson = await this.#lessons.getTodayLesson(turmaId)
        return await this.#client.getJSON(`/Turma/${turmaId}/lessons/${todayLesson.uuid}/attendances`)
    }

}