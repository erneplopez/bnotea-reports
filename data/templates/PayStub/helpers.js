var moment=require("moment");

function getCurrentDate(){
    let  currentDate =moment(Date.now());
    return currentDate.format("MM/DD/YYYY HH:mm:ss")
}

function getPeriod(startDate, endDate){
    return startDate+" - "+endDate;
}
function getTotalAmount(stub){
    let totalAmount=0;
    stub.forEach(function(s){
        totalAmount+=s.amount;
    })
    return totalAmount;
}