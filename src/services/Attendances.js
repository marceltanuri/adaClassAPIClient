import GeneralService from "./GeneralService";
import Lessons from "./Lessons";

export default class Attendances extends GeneralService {

    constructor(client, lessons) {
        super(client)
        if (lessons instanceof Lessons)
            this.lessons = lessons
    }

    async getAttendanceForTodaysLesson(turmaId) {
        const todayLesson = await this.lessons.getTodayLesson(turmaId)
        return await this.client.getJSON(`/Turma/${turmaId}/lessons/${todayLesson.uuid}/attendances`)
    }

    async setAttendanceForTodaysLesson(turmaId, studentsList) {
        const todayFormattedDate = new Date().toISOString().split('T')[0]
        return await this.client.post(`/Aluno/courses/${turmaId}/checkin/${todayFormattedDate}`, studentsList)

    }

}