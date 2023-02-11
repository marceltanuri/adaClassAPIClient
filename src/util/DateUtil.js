export default class DateUtil {

    static isSameDay(date1, date2) {

        if (date1 instanceof Date && date2 instanceof Date) {

            return (date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear())

        }

        return false

    }

}