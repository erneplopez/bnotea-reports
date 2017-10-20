var moment=require("moment"); 

function getName(firstName, lastName){
    return firstName+" "+lastName;
}
function getDate(logs){
    return logs[0].timeStamp.split(",")[0];
}
function getCurrentDate(){
    let  currentDate =moment(Date.now());
    return currentDate.format("MM/DD/YYYY HH:mm:ss")
}