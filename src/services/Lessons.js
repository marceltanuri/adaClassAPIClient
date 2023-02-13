import DateUtil from "../util/DateUtil";
import GeneralService from "./GeneralService";

export default class Lessons extends GeneralService{

    constructor(client) {
        super(client)
    }

    async getTodayLesson(turmaId) {

        const lessons = await this.getLessons(turmaId)
        console.debug(lessons)
        let todayLesson = {}
        await lessons.forEach(async lesson => {
            const isTodaysLesson = DateUtil.isSameDay(new Date(lesson.date), new Date());
            if (isTodaysLesson)
            todayLesson = lesson
            
        })
        
        if(Object.keys(todayLesson).length === 0)
        throw "No lesson found for today"
        
        console.debug(todayLesson)
        return todayLesson

    }

    async getLessons(turmaId) {
        return await this.client.getJSON("/Turma/" + turmaId + "/lessons")
    }

}