    var hw = document.querySelector("#op #hwo")
var mycal = document.querySelector("#op #classe")
var isClass = document.querySelector("#op #hwo")
var isCal = document.querySelector("#op #classe")
var isAdd = document.querySelector("#op #imp")
isClass.style.display = "none"
isCal.style.display = "none"
isAdd.style.display = "block"

function hideCl() {
  var isClass = document.querySelector("#op #hwo")
  var isCal = document.querySelector("#op #classe")
  isClass.style.display = "block"
  isCal.style.display = "none"
  isAdd.style.display = "none"

}
function hideCa() {
  var isClass = document.querySelector("#op #hwo")
  var isCal = document.querySelector("#op #classe")
  isClass.style.display = "none"
  isCal.style.display = "block"
  isAdd.style.display = "none"

  
}

function hideML(){
    isClass.style.display = "none"
  isCal.style.display = "none"
  isAdd.style.display = "block"


}

   var stringDropDowninnerHTML = "<option value=''>Select Class</option>";
            for (var i = 0; i < localStorage.length; i++) {
              var keyName = localStorage.key(i)
              var val = localStorage.getItem(keyName)
              if(val.includes("isclass")===true){
                stringDropDowninnerHTML += "<option value=" + i + ">" + keyName + "</option>";
              }
            }
            document.getElementById('myList').innerHTML = stringDropDowninnerHTML;
            var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var seleMonth = "<option value=''>Month</option>";
            for (var i = 1; i < 13; i++) {
                seleMonth += "<option value=" + i + ">" + monthArr[i-1] + "</option>";
            }
            document.getElementById('month').innerHTML = seleMonth;
    var seleDay = "<option value=''>Day</option>";
            for (var i = 1; i < 32; i++) {
                seleDay += "<option value=" + i + ">" + i + "</option>";
            }
            document.getElementById('day').innerHTML = seleDay;
    var seleYear = "<option value=''>Year</option>";
            for (var i = 2019; i < 2030; i++) {
                seleYear += "<option value=" + i + ">" + i + "</option>";
            }
            document.getElementById('year').innerHTML = seleYear;

function copyData(){
  var copydata = "";
  for (i = 0; i < localStorage.length; i++){
    var keyName = localStorage.key(i)
    if(keyName != "first" && keyName.includes("-") === false){
    var item = localStorage.getItem(keyName)
      if(item.includes("+")){
        item = item.replace("+", "`");
      }
    if(i + 1 != localStorage.length){
    var toIn = keyName + " //// " + item + " --//-- "
    } else {
          var toIn = keyName + " //// " + item
    }
    copydata = copydata + toIn
    }
  }
    var email = localStorage.getItem("email")
    window.location.href="http://mosallaei-api.000webhostapp.com/save.php?email=" + email + "&data=" + copydata

}

function useData(){
     var email = localStorage.getItem("email")
    window.location.href="http://mosallaei-api.000webhostapp.com/get.php?email=" + email
}

function changeEmail(){
  var confi = confirm("By changing the email, the app will reset and connect to the account of the new email. Do you agree?")
  if(confi === true){
    var newE = prompt("New email:", "")
    localStorage.setItem("email", newE)
        window.localStorage.clear()
    localStorage.setItem("name", "[TAP TO EDIT]")
    localStorage.setItem("first", 1)
    localStorage.setItem("beta", "7ugB3hYa")
    localStorage.setItem("email", newE)
    window.location.href="http://mosallaei-api.000webhostapp.com/inite.php?email=" + newE
  }
}


var em = localStorage.getItem("email")
var addEm = document.getElementById("emaill")
addEm.innerHTML="<b>Current Email:</b> " + em

function resetMe(){
  var conf = confirm("Are you sure you want to reset the app? All data will be lost from this device, however if you saved before, that data is still in the cloud. ")
  if(conf === true){
    window.localStorage.clear()
    localStorage.setItem("name", "[TAP TO EDIT]")
    localStorage.setItem("first", 1)
    localStorage.setItem("beta", "7ugB3hYa")
              localStorage.setItem("saved", "App Reset")
    window.location.reload()
  } else{
    return;
  }
}

function delSave(){
    var conf = confirm("Are you sure you want to remove your save from the cloud? You can always resave it if you change your mind.")
  if(conf === true){
    var email = localStorage.getItem("email")
                  localStorage.setItem("saved", "Data Removed from Cloud")
        window.location.href="http://mosallaei-api.000webhostapp.com/delete.php?email=" + email
  }
}

var lastSaved = document.getElementById("lastS")
var dateSaved = localStorage.getItem("saved")
lastSaved.innerHTML = "<b>Latest Update: </b>" + dateSaved

function showMenuA(i) {
  var spanNameB = "#spanC-" + i
  var infoHelp = "#help" + i
  var spannB = hw.querySelector(spanNameB)
  var helpB = hw.querySelector(infoHelp)
  if (spannB.style.display == "none") {
    spannB.style.display = "block"
    helpB.innerText = "Tap class name to hide homework"
  } else {
    spannB.style.display = "none"
    helpB.innerText = "Tap class name to show homework"
  }
}

function createGCalendar(id, name, hw, date){
var localName = name + "-calendar-" + id;
var month = date.substr(0, date.indexOf("/"))
var actualMonth = parseInt(month)
var usedMonth = month
//console.log(actualMonth+1)
if (month.length == 1){
  month = "0" + month
}
if(usedMonth.length == 1){
  console.log("hi")
var day = date.substr(date.indexOf("/")+1, date.lastIndexOf("/")-2)
} else {
  var day = date.substr(date.indexOf("/")+1, date.lastIndexOf("/")-3)
}
var endDay = parseInt(day) + 1
console.log(day)
var endmonth;
var wasChanged = false;
var month31 = [1, 3, 5, 7, 8, 10]
var month30 = [4, 6, 9, 11]
if(month31.indexOf(actualMonth) !== -1){
  if(endDay > 31){
    endDay = "01"
    endmonth = actualMonth + 1
        if(endmonth.length == 1){
    endmonth = "0" + endmonth
    }
    wasChanged= true;
  }
} else{
  endmonth = month
}
if(month30.indexOf(actualMonth) !== -1){
  if(endDay > 30){
          console.log("HI")

    endDay = "01"
    endmonth = actualMonth+1
    if(endmonth.length == 1){
    endmonth = "0" + endmonth
    }
        wasChanged= true;

  }
} else if (wasChanged == false){
  endmonth = month
}
if(actualMonth == 2){
  if(endDay > 28){
    endDay = "01"
    endmonth = actualMonth+1
    if(endmonth.length == 1){
    endmonth = "0" + endmonth
    }
        wasChanged= true;

  }
} else if (wasChanged == false){
  endmonth = month
}
if(day.length == 1){
  day = "0" + day
}
if(endDay.length == 1){
  endDay = "0" + endDay
}
var year = date.substr(date.lastIndexOf("/")+1, date.length)
var totalDate = year+month+day
var totalEND = year+endmonth+endDay
var calendarLink = "http://www.google.com/calendar/event?action=TEMPLATE&text="+hw+"&dates="+totalDate+"/"+totalEND
localStorage.setItem(localName, calendarLink)
}

if(localStorage.getItem("updated")===null){
  var mess = "<b>Lastest Update:</b> None"
  localStorage.setItem("updated", mess)
}
function addHW() {
  /*var homework = prompt("Enter in the homework:", "")
  if (homework === null || homework === "") {
    return; //break out of the function early
  }
  var gDate = prompt("Enter the date the HW is due. ENTER IT AS M/D/YYYY (E.x. 4/5/2020). If the month or day is single digit, do NOT add a 0 before it.", "m/d/yyyy")
  if (gDate === null || gDate === "") {
    return; //break out of the function early
  }*/
  var classID = document.getElementById("myList").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var year = document.getElementById("year").value;
  var fullDate = month + "/" + day + "/" + year
  var homework = document.getElementById("homework11").value;
  var hwID = Math.random() * (1000000 - 1000) + 1000;
  var className = localStorage.key(classID)
  var hwNAME = className + "-hw-" + hwID
  var dateName = className + "-date-" + hwID
  localStorage.setItem(hwNAME, homework)
  localStorage.setItem(dateName, fullDate)
  createGCalendar(hwID, className, homework, fullDate)
  var hwA = "<b>Last Updated:</b> New HW added to class: " + className
  localStorage.setItem("updated", hwA)

location.reload()
}
var myHWU = localStorage.getItem("updated")
  var updatedH = document.getElementById("updateHW")
  updatedH.innerHTML = myHWU
function editHWA(v) {
  for (i = 0; i < localStorage.length; i++) {
    var check = localStorage.key(i)
    var isHW = "-hw-" + v
    var isDate = "-date-" + v
    var canReload = true;
    var hwName;
    var dateName;
    if (check.includes(isHW) == true) {
      hwName = check
      var actualHW = localStorage.getItem(check)
      var confirmation = confirm("Do you want to edit the homework? (Deleting HW is later on in this menu. Cancel = No)")
      if (confirmation == true) {
        var newHW = prompt("Edit content of homework:", actualHW)
        if (newHW === null || newHW === "") {
          canReload = false;
        } else {
          if (newHW == actualHW) {
            localStorage.setItem(check, actualHW)
            canRelad = false;
          } else {
            localStorage.setItem(check, newHW)
          }
        }
      } else {
        canReload = false
      }
    }
        if (check.includes(isDate) == true) {
dateName = check
          var actualDate = localStorage.getItem(check)
                var confirmation = confirm("Do you want to edit the date? (Cancel = No)")
      if (confirmation == true) {
          var newDate = prompt("Edit the date AS m/d/yyyy (so like 5/6/2020 or 10/15/2020). If the month or day is single digit, do NOT add a 0 before it.:", actualDate)
          if (newDate === null || newDate === "") {
            canReload = false;
          } else {
            if (newDate == actualDate) {
              localStorage.setItem(check, actualDate)
              canReload = false;
            } else {
              localStorage.setItem(check, newDate)
            }
          }
      } else {
        canReload = false;
      }
        }
    }
    var delel = confirm("Do you want to DELETE this homework? (Cancel = No)")
    if(delel == true){
      var delA = confirm("Are you sure you want to delete this homework? This is irreversable.")
      if(delA == true){
    localStorage.removeItem(hwName)
    localStorage.removeItem(dateName)
   window.location.reload()
      }
    }
            if(canReload == true){
location.reload()
console.log(className)
createGCalendar(v, className, newHW, newDate)
        }
  }

  function createiCAL(v){
    for(i = 0; i < localStorage.length; i++){
      var check = localStorage.key(i)
      var isHW = "-hw-" + v
      var isDate = "-date-" + v
      if(check.includes(isHW) == true){
        var actualHW = localStorage.getItem(check)
      }
      if(check.includes(isDate) == true){
        var actualDate = localStorage.getItem(check)
      }

    }
            cal_single = ics();
        var icalTitle = actualHW
       var icalDate = "Due on: " + actualDate
            cal_single.addEvent(icalTitle, icalDate, 'LHS', actualDate, actualDate);
cal_single.download("Homework")
  }

      var helpText = document.createElement("p")
    helpText.setAttribute("id", "hwHelp")
    helpText.setAttribute("style", "text-align:center;")
    helpText.innerText = "Looks a bit empty here. Go to the GPA calc page to add a class, then come back here."
    hw.appendChild(helpText)
    var xx = document.getElementById("hwHelp")

function mainShowHW(){

for (i = 0; i < localStorage.length; i++) {
  localKey = localStorage.key(i);
  if (localStorage.getItem(localKey) == "isclass") {
    var colorKey = localKey + " COLOR"
    var myColor = localStorage.getItem(colorKey)
    xx.style.display = "none"
    var paraA = document.createElement("h2")
        paraA.style.cssText = `border-radius:10px;background-color:${myColor};padding:10px;`

    paraA.setAttribute("class", "classes");
    paraA.setAttribute("id", i)
    // var z = para.getAttribute("id")
    var x = localStorage.key(i)
    paraA.innerHTML = x
    paraA.setAttribute("onclick", `showMenuA(${i})`)
        hw.appendChild(paraA)
    var newSpanS = document.createElement("SPAN")

    var helpInfo = document.createElement("p")
    var helpTag = "help" + i
    helpInfo.setAttribute("id", helpTag)
    helpInfo.setAttribute("class", "helpText")
    hw.appendChild(helpInfo)

    
    var add = document.createElement("h4");
    var addID = "spanC-" + i;
    //newSpanS.setAttribute("id", addID);
    add.setAttribute("class", "addHW");
    //newSpanS.appendChild(add);
  var checkifnohw = 0
    for (j = 0; j < localStorage.length; j++) {
      var newCheck = localStorage.key(j)
      var hwofClass = x + "-hw"
      if (newCheck.includes(hwofClass)) {
        checkifnohw++
        var lastDash = newCheck.lastIndexOf("-") + 1
        var hwID = newCheck.substr(lastDash, newCheck.length)
        var calendarID = localKey + "-calendar-" + hwID
        var calendarLink = localStorage.getItem(calendarID)
        var nameofDate = x + "-date-" + hwID
        var actualHW = localStorage.getItem(newCheck)
        var actualDate = localStorage.getItem(nameofDate)
        var dispAll = document.createElement("p")
        dispAll.innerHTML = "<b>" + actualHW + "</b>" + "<br /> DUE ON " + actualDate + " (Tap to edit/delete)"
        dispAll.setAttribute("class", "dispHW")
        dispAll.setAttribute("parentID", x)
        dispAll.setAttribute("style", "border-radius:10px;background-color:#e6e6e6;padding:10px;")
        var dispLink = document.createElement("p")
        dispLink.innerHTML = "Tap this to add to GCalendar"
        dispLink.setAttribute("class", "dispHW")
        dispLink.setAttribute("onclick", `javascript:location.href='${calendarLink}'`)
        dispLink.setAttribute("style", "color:blue;margin-top:-30px;border-radius:10px;background-color:#e6e6e6;padding:10px;")
                var dispICS = document.createElement("p")
        //dispICS.innerHTML = "Tap this to add to other calendar apps"
        dispICS.setAttribute("class", "dispHW")
        // dispICS.setAttribute("onclick", `javascript:cal_single.download("${localKey}")`)
        dispICS.setAttribute("onclick", `createiCAL(${hwID})`)
        dispICS.setAttribute("style", "color:red;margin-top:-4px;")
        // dispAll.setAttribute("hwID", hwID)
        dispAll.setAttribute("onclick", `editHWA(${hwID})`)
        newSpanS.appendChild(dispAll)
        if(calendarLink === null || calendarLink == ""){
          //return
        } else {
        newSpanS.appendChild(dispLink)
        }
                newSpanS.appendChild(dispICS)
      }
    }
    if(checkifnohw == 0){
      var dispNone = document.createElement("P")
      dispNone.innerText = "No Homework"
      dispNone.setAttribute("style", "text-align:center;")
      newSpanS.appendChild(dispNone)
    }
    hw.appendChild(newSpanS)
    //hw.appendChild(line)
    var actID = "#" + addID
    var hideMePls = hw.querySelector(actID)
    //hideMePls.style.display = "none"
  }
}

}

mainShowHW()

// CALENDAR

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



let date = new Date();
let aliMonth = date.getMonth() + 1
let aliDay = date.getDate()
let aliYear = date.getFullYear()

var noHA = document.createElement("H2")
noHA.setAttribute("style", "text-align:center;")
noHA.innerText = "HOMEWORK"
mycal.appendChild(noHA)

var noH = document.createElement("H3")
noH.setAttribute("id", "noH")
noH.setAttribute("style", "text-align:center;color:green;")
noH.innerText = "NO HOMEWORK DUE TODAY"
mycal.appendChild(noH)

var hidemoi = mycal.querySelector("#noH")
hidemoi.style.display = "block"

var vbc = document.createElement("P")
vbc.setAttribute("id", "day")
vbc.innerText = aliDay
mycal.appendChild(vbc)
var vbv = document.createElement("P")
vbv.innerText = aliMonth
vbv.setAttribute("id", "month")
var vbd = document.createElement("P")
vbd.setAttribute("id", "year")
vbd.innerText = aliYear
mycal.appendChild(vbv)
mycal.appendChild(vbd)

var targetA = mycal.querySelector("#day")
var mTargetA = mycal.querySelector("#month")
var yTargetA = mycal.querySelector("#year")
targetA.style.display = "none"
mTargetA.style.display = "none"
yTargetA.style.display = "none"

function getCurrentDate(element, asString) {
  if (element) {
    if (asString) {
      return element.textContent = weekdays[date.getDay()] + ', ' + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
    return element.value = date.toISOString().substr(0, 10);
  }
  return date;
}


// Função principal que gera o calendário
function generateCalendar() {

  // Pega um calendário e se já existir o remove
  const calendar = document.getElementById('calendar');
  if (calendar) {
    calendar.remove();
  }

  // Cria a tabela que será armazenada as datas
  const table = document.createElement("table");
  table.id = "calendar";

  // Cria os headers referentes aos dias da semana
  const trHeader = document.createElement('tr');
  trHeader.className = 'weekends';
  weekdays.map(week => {
    const th = document.createElement('th');
    const w = document.createTextNode(week.substring(0, 3));
    th.appendChild(w);
    trHeader.appendChild(th);
  });

  // Adiciona os headers na tabela
  table.appendChild(trHeader);

  const weekDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  let tr = document.createElement("tr");
  let td = '';
  let empty = '';
  let btn = document.createElement('button');
  let week = 0;

  while (week < weekDay) {
    td = document.createElement("td");
    empty = document.createTextNode(' ');
    td.appendChild(empty);
    tr.appendChild(td);
    week++;
  }

  for (let i = 1; i <= lastDay;) {
    while (week < 7) {
      td = document.createElement('td');
      let text = document.createTextNode(i);
      btn = document.createElement('button');
      btn.className = "btn-day";
      btn.addEventListener('click', function () { changeDate(this) });
      week++;


      if (i <= lastDay) {
        i++;
        btn.appendChild(text);
        td.appendChild(btn)
      } else {
        text = document.createTextNode(' ');
        td.appendChild(text);
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);

    tr = document.createElement("tr");

    week = 0;
  }
  const content = document.getElementById('table');
  content.appendChild(table);
  changeActive();
  changeHeader(date);
  // document.getElementById('date').textContent = date;
  getCurrentDate(document.getElementById("currentDate"), true);
  getCurrentDate(document.getElementById("date"), false);
}

// function setDate(form) {
//   let newDate = new Date(form.date.value);
//   date = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
//   generateCalendar();
//   aliDay = newDate.getDate() + 1
//   aliMonth = newDate.getMonth() + 1
//   aliYear = newDate.getFullYear()
//   var target = mycal.querySelector("#day")
//   target.innerText = aliDay;
//   var mTarget = mycal.querySelector("#month")
//   mTarget.innerText = aliMonth
//   var yTarget = mycal.querySelector("#year")
//   yTarget.innerText = aliYear
//   hidemoi.style.display = "block"
//   $(".activeClass").remove()

//   return false;
// }

// Método Muda o mês e o ano do topo do calendário
function changeHeader(dateHeader) {
  const month = document.getElementById("month-header");
  if (month.childNodes[0]) {
    month.removeChild(month.childNodes[0]);
  }
  const headerMonth = document.createElement("h1");
  const textMonth = document.createTextNode(months[dateHeader.getMonth()].substring(0, 3) + " " + dateHeader.getFullYear());
  headerMonth.appendChild(textMonth);
  month.appendChild(headerMonth);
}

// Função para mudar a cor do botão do dia que está ativo
function changeActive() {
  let btnList = document.querySelectorAll('button.active');
  btnList.forEach(btn => {
    btn.classList.remove('active');
  });
  btnList = document.getElementsByClassName('btn-day');
  for (let i = 0; i < btnList.length; i++) {
    const btn = btnList[i];
    if (btn.textContent === (date.getDate()).toString()) {
      btn.classList.add('active');
    }
  }
}

// Função que pega a data atual
function resetDate() {
  date = new Date();
  generateCalendar();
  aliDay = date.getDate() + 1
  aliMonth = date.getMonth() + 1
  aliYear = date.getFullYear()
  var target = mycal.querySelector("#day")
  target.innerText = aliDay;
  var mTarget = mycal.querySelector("#month")
  mTarget.innerText = aliMonth
  var yTarget = mycal.querySelector("#year")
  yTarget.innerText = aliYear
  hidemoi.style.display = "block"
  $(".activeClass").remove()
}

// Muda a data pelo numero do botão clicado
function changeDate(button) {
  let newDay = parseInt(button.textContent);
  date = new Date(date.getFullYear(), date.getMonth(), newDay);
  generateCalendar();
  aliMonth = date.getMonth() + 1
  aliDay = newDay
  //console.log(aliDay)
  aliYear = date.getFullYear()
  var target = mycal.querySelector("#day")
  target.innerText = aliDay;
  var mTarget = mycal.querySelector("#month")
  mTarget.innerText = aliMonth
  var yTarget = mycal.querySelector("#year")
  yTarget.innerText = aliYear
  hidemoi.style.display = "block"
  $(".activeClass").remove()


}

// Funções de avançar e retroceder mês e dia
function nextMonth() {
  date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  generateCalendar(date);
  aliDay = date.getDate() + 1
  aliMonth = date.getMonth() + 2
  aliYear = date.getFullYear()
  var target = mycal.querySelector("#day")
  target.innerText = aliDay;
  var mTarget = mycal.querySelector("#month")
  mTarget.innerText = aliMonth
  var yTarget = mycal.querySelector("#year")
  yTarget.innerText = aliYear
  hidemoi.style.display = "block"
  $(".activeClass").remove()
}

function prevMonth() {
  date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  generateCalendar(date);
  aliDay = date.getDate() + 1
  aliMonth = date.getMonth()
  aliYear = date.getFullYear()
  var target = mycal.querySelector("#day")
  target.innerText = aliDay;
  var mTarget = mycal.querySelector("#month")
  mTarget.innerText = aliMonth
  var yTarget = mycal.querySelector("#year")
  yTarget.innerText = aliYear
  hidemoi.style.display = "block"
  $(".activeClass").remove()
}


function prevDay() {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
  generateCalendar();
  aliDay = date.getDate()
  aliMonth = date.getMonth() + 1
  aliYear = date.getFullYear()
  var target = mycal.querySelector("#day")
  target.innerText = aliDay;
  var mTarget = mycal.querySelector("#month")
  mTarget.innerText = aliMonth
  var yTarget = mycal.querySelector("#year")
  yTarget.innerText = aliYear
  hidemoi.style.display = "block"
  $(".activeClass").remove()
}

function nextDay() {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  generateCalendar();
  aliDay = date.getDate()
  aliMonth = date.getMonth() + 1
  aliYear = date.getFullYear()
  var target = mycal.querySelector("#day")
  target.innerText = aliDay;
  var mTarget = mycal.querySelector("#month")
  mTarget.innerText = aliMonth
  var yTarget = mycal.querySelector("#year")
  yTarget.innerText = aliYear
  hidemoi.style.display = "block"
  $(".activeClass").remove()
}

document.onload = generateCalendar(date);

var targetA = mycal.querySelector("#day")
var mTargetA = mycal.querySelector("#month")
var yTargetA = mycal.querySelector("#year")
var myDay;
var myMonth;
var myYear

setInterval(function () {
  targetA = mycal.querySelector("#day")
  mTargetA = mycal.querySelector("#month")
  yTargetA = mycal.querySelector("#year")
  myDay = targetA.innerText
  myMonth = mTargetA.innerText
  myYear = yTargetA.innerText
}, 10)


var currentDate;

function delHW(i) {
  var confirmation = confirm("Do you really want to delete this homework?")
  if (confirmation == true) {
    var ismykey = localStorage.key(i)
    var lastDash = ismykey.lastIndexOf("-") + 1
    var getHWID = ismykey.substr(lastDash, ismykey.length)
    var nameClass = ismykey.substr(0, lastDash - 6)
    var nameofhw = nameClass + "-hw-" + getHWID
    var namecalendar = nameClass + "-calendar-" + getHWID
    localStorage.removeItem(ismykey)
    localStorage.removeItem(nameofhw)
   window.location.reload()
  }
}

setInterval(function () {
  currentDate = myMonth + "/" + myDay + "/" + myYear
  showHidden = 0;
  for (i = 0; i < localStorage.length; i++) {
    check = localStorage.getItem(localStorage.key(i))
    var ismykey = localStorage.key(i)
    var isid = i + "-hwc"
    if (check.includes(currentDate) == true) {
      if (mycal.querySelector("[id=" + CSS.escape(isid) + "]")) {
        return
      } else {
        hidemoi.style.display = "none"
        var lastDash = ismykey.lastIndexOf("-") + 1
        var firstDash = ismykey.indexOf("-")
        var getHWID = ismykey.substr(lastDash, ismykey.length)
        var nameClass = ismykey.substr(0, firstDash)
        console.log(nameClass)
        var nameofhw = nameClass + "-hw-" + getHWID
        var actualHW = localStorage.getItem(nameofhw)
        console.log(getHWID)
        var dispHW = document.createElement("h3")
        var tag = i + "-hwc"
        dispHW.setAttribute("id", tag)
        dispHW.setAttribute("class", "activeClass")
        dispHW.setAttribute("style", "text-align:center;")
        dispHW.setAttribute("onclick", `delHW(${i})`)
        console.log(dispHW.getAttribute("id"))
        dispHW.innerHTML = nameClass + ": " + actualHW + `<br /><i style="color:red;font-weight:normal;font-size:15px;">Tap to delete this HW</i>`
        mycal.appendChild(dispHW)
      }
    }
  }
}, 10)