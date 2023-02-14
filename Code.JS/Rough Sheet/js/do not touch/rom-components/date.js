// Begin storage for date...
const dd = new Date();
const dayAvatar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthAvatar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
const d = {
    day : () => {
        return dayAvatar[dd.getDay()]
    },
    date : () => {
        $last_digit = dd.getDate().toString()[dd.getDate().toString().length - 1];
        if ($last_digit == 1) {
            return dd.getDate() + "st"
        }
        else if ($last_digit == 2) {
            return dd.getDate() + "nd"
        }
        else if ($last_digit == 3) {
            return dd.getDate() + "rd"
        }
        else {
            return dd.getDate() + "th"
        }
    },
    month : () => {
        return monthAvatar[dd.getMonth()]
    },
    year : () => {
        return dd.getFullYear()
    },
    fullDate : () => {
        return d.day() + ", " + d.date() + " " + d.month() + ", " + d.year()
    }
};
// End storage for date...