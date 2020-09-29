var dT = new Date()
var gt = new Date()

function currentDate() {
    dT.setDate(1)
    var currDay = dT.getDay()
    var lastDate = new Date(dT.getFullYear(), dT.getMonth() + 1, 0).getDate()
    var previousDate = new Date(dT.getFullYear(), dT.getMonth(), 0).getDate()

    var arrMonths = ["January", "Feburary", "March", "Aprail", "May", "June", "July", "August", "September", "Octuber", "November", "December"]
    document.getElementById("month").innerHTML = arrMonths[gt.getMonth()]
    document.getElementById("date").innerHTML = gt.toDateString()
    var currDate = new Date()

    var dateS = ""

    for (j = currDay; j > 0; j--) {
        dateS += "<div class = 'previous'>" + (previousDate - j + 1) + "</div>"
    }
    for (i = 1; i <= lastDate; i++) {
        if (i == currDate.getDate() && dT.getMonth() == currDate.getMonth() && dT.getFullYear() == currDate.getFullYear()) {
            dateS += "<div class= 'today'>" + i + "</div>"
        } else {
            dateS += "<div>" + i + "</div>"
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = dateS
}

function changeDate(para) {
    if (para == "prev") {
        gt.setMonth(gt.getMonth() - 1)
        dT.setMonth(dT.getMonth() - 1)
    } else if (para == "next") {
        gt.setMonth(gt.getMonth() + 1)
        dT.setMonth(dT.getMonth() + 1)
    }
    currentDate()
}