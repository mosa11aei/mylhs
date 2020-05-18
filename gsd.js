var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes()

var dateTime = 'Saved to cloud ' + date+' at '+time;

localStorage.setItem("saved", dateTime)

window.location.href="../index.html"
