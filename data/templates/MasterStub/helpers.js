var moment=require("moment");

function getCurrentDate(){
    let  currentDate =moment(Date.now());
    return currentDate.format("MM/DD/YYYY HH:mm:ss")
}


function getTotalAmount(masterStubs){
    let totalAmount=0;
    masterStubs.forEach(function(masterStub){
        totalAmount+=masterStub.amount;
    })
    return totalAmount;
}

function getName(name, funding){
    if(funding=="funded"){
        return name;
    }
    else if(funding=="unfunded"){
        return name+"*";
    }
}