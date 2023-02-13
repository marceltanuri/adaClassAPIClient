# Ada ClassAPI Client

Provides a client framework to consume ADA Class API

* Session authentication 
* Authenticated requests to the API

### Example os use

```
    import * as ada from "ada-class-client"

    async example(url, user, pass, turmaId) {

        const client = new ada.Client(await ada.SessionProvider.getSession(url, user, pass))

        const lessonsService = new ada.Lessons(client);
        const attendanceService = new ada.Attendances(client, lessonsService)

        const attendanceForTodaysLesson = await attendanceService.getAttendanceForTodaysLesson(turmaId);
        console.log(attendanceForTodaysLesson)
    }
```