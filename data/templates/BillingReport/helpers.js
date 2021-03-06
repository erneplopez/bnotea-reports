var moment=require("moment");

function total(assistantAmount,analystAmount){
    let amount=0;
    if(assistantAmount){
        amount+=Number(assistantAmount);
    }
    if(analystAmount){
        amount+=Number(analystAmount);
    }
    if(amount==0){
        return "";
    }
    else{
        return Math.round(amount*100)/100;
    }
}


function getCurrentDate(){
    let  currentDate =moment(Date.now());
    return currentDate.format("MM/DD/YYYY HH:mm:ss")
}
function grandTotal(reports){
    var grandTotal=0;
    reports.forEach(function(report){
        if(report.invoiceTotals.assistantAmount){
            grandTotal+=Number(report.invoiceTotals.assistantAmount)
        }
        if(report.invoiceTotals.analystAmount){
            grandTotal+=Number(report.invoiceTotals.analystAmount)
        }
    })
    return Math.round(grandTotal*100)/100;
}
function getEndDate(endDate){
    return moment(endDate).format("MM/DD/YYYY");
}
function completed(invoiceTotals){
    if(invoiceTotals.assistantAmount!=0 && invoiceTotals.analystAmount!=0){
        return "Analyst and Assistant"
    }
    else if(invoiceTotals.assistantAmount==0 && invoiceTotals.analystAmount!=0){
        return "Analyst Only"
    }
    else{
        return "Assistant Only"
    }
}