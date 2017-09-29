
function getCurrentDate(){
    currentDate =new Date(Date.now());
    return (currentDate.getMonth()+1)+"/"+currentDate.getDate()+"/"+currentDate.getFullYear();
}

function getTotalAmount(masterStubs){
    let totalAmount=0;
    masterStubs.forEach(function(masterStub){
        totalAmount+=masterStub.amount;
    })
    return totalAmount;
}