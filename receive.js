const params = new URLSearchParams(window.location.search)
  var textT = params.get('data')
  console.log(textT)
  var semiSplit = textT.split(" --//-- ")
  console.log(semiSplit.length)
  var fullSplit = [];
  for(i = 0; i < semiSplit.length; i++){
    var newSplit = semiSplit[i].split(" //// ")
  fullSplit.push(newSplit[0])
  fullSplit.push(newSplit[1])
  }
  for(i = 0; i < fullSplit.length; i++){
    if(i%2 ==0){
    var myKey = fullSplit[i]
    var myData = fullSplit[i+1]
          if(myData.includes("`")){
        myData = myData.replace("`", "+");
      }
    localStorage.setItem(myKey, myData)
    console.log(i)
    }
  }
  var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes()

var dateTime = 'Data Pulled ' + date+' at '+time;
        localStorage.setItem("saved", dateTime)
window.location.href="../index.html";