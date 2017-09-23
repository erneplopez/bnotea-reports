function total(assistantAmount,analystAmount){
    return Math.round((Number(assistantAmount)+Number(analystAmount))*100)/100;
}
function getCurrentDate(){
    currentDate =new Date(Date.now());
    return (currentDate.getMonth()+1)+"/"+currentDate.getDate()+"/"+currentDate.getFullYear();
}

