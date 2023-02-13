import Client from "../client/Client";
import DateUtil from "../util/DateUtil";

export default class Lessons {

    #client = null

    constructor(client) {
        if (client instanceof Client)
            this.#client = client
    }

    async getTodayLesson(turmaId) {

        const lessons = await this.getLessons(turmaId)
        console.debug(lessons)
        let todayLesson = {}
        await lessons.forEach(async lesson => {
            const isTodaysLesson = DateUtil.isSameDay(new Date(lesson.date), new Date());
            //if (isTodaysLesson)
                todayLesson = lesson

        })

        if(Object.keys(todayLesson).length === 0)
            throw "No lesson found for today"

        return todayLesson

    }

    async getLessons(turmaId) {
        return await this.#client.getJSON("/Turma/" + turmaId + "/lessons")
    }

}