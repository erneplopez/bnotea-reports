
function getCurrentDate(){
    currentDate =new Date(Date.now());
    return (currentDate.getMonth()+1)+"/"+currentDate.getDate()+"/"+currentDate.getFullYear();
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