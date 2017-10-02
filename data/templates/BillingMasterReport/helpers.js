var moment=require("moment");

function getCurrentDate(){
    let  currentDate =moment(Date.now());
    return currentDate.format("MM/DD/YYYY HH:mm:ss")
}


