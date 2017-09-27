
function getCurrentDate(){
    currentDate =new Date(Date.now());
    return (currentDate.getMonth()+1)+"/"+currentDate.getDate()+"/"+currentDate.getFullYear();
}
