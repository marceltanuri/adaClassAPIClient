# Ada ClassAPI Client

Provides a client framework to consume ADA Class API

* Session authentication 
* Authenticated requests to the API

### Example of use

```javascript
    import * as ada from "ada-class-client"

    async example(url, user, pass, turmaId) {

        const client = new ada.Client(await ada.SessionProvider.getSession(url, user, pass))

        const lessonsService = new ada.Lessons(client);
        const attendanceService = new ada.Attendances(client, lessonsService)

        const attendanceForTodaysLesson = await attendanceService.getAttendanceForTodaysLesson(turmaId);
        console.log(attendanceForTodaysLesson)
    }
```

## A full example of usage:
### Sending attendance list automatically from google meet to ada class via API : 
https://github.com/marceltanuri/class-auto-attendance