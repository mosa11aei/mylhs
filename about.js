    /*! ics.js Wed Aug 20 2014 17:23:02 */
    var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

    var ics=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B="rrule:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};

var hw = document.querySelector("#op #hwo")
var mycal = document.querySelector("#op #classe")
var isClass = document.querySelector("#op #hwo")
var isCal = document.querySelector("#op #classe")
isClass.style.display = "block"
isCal.style.display = "none"

function hideCl() {
  var isClass = document.querySelector("#op #hwo")
  var isCal = document.querySelector("#op #classe")
  isClass.style.display = "block"
  isCal.style.display = "none"
}
function hideCa() {
  var isClass = document.querySelector("#op #hwo")
  var isCal = document.querySelector("#op #classe")
  isClass.style.display = "none"
  isCal.style.display = "block"
}

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

function addHW(i) {
  var homework = prompt("Enter in the homework:", "")
  if (homework === null || homework === "") {
    return; //break out of the function early
  }
  var gDate = prompt("Enter the date the HW is due. ENTER IT AS M/D/YYYY (E.x. 4/5/2020). If the month or day is single digit, do NOT add a 0 before it.", "m/d/yyyy")
  if (gDate === null || gDate === "") {
    return; //break out of the function early
  }
  var hwID = Math.random() * (1000000 - 1000) + 1000;
  var className = localStorage.key(i)
  var hwNAME = className + "-hw-" + hwID
  var dateName = className + "-date-" + hwID
  localStorage.setItem(hwNAME, homework)
  localStorage.setItem(dateName, gDate)
  createGCalendar(hwID, className, homework, gDate)
location.reload()
}

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
    xx.style.display = "none"
    var paraA = document.createElement("h2")
    var line = document.createElement("HR")
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
    helpInfo.innerText = "Tap class name to show homework"
    hw.appendChild(helpInfo)

    var add = document.createElement("h4")
    add.innerText = "+ Add Homework"
    var addID = "spanC-" + i
    newSpanS.setAttribute("id", addID)
    add.setAttribute("class", "addHW")
    add.setAttribute("onclick", `addHW(${i})`)
    newSpanS.appendChild(add)

    for (j = 0; j < localStorage.length; j++) {
      var newCheck = localStorage.key(j)
      var hwofClass = x + "-hw"
      if (newCheck.includes(hwofClass)) {
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
        var dispLink = document.createElement("p")
        dispLink.innerHTML = "Tap this to add to GCalendar"
        dispLink.setAttribute("class", "dispHW")
        dispLink.setAttribute("onclick", `javascript:location.href='${calendarLink}'`)
        dispLink.setAttribute("style", "color:blue;margin-top:-4px;")
                var dispICS = document.createElement("p")
        dispICS.innerHTML = "Tap this to add to other calendar apps"
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
    hw.appendChild(newSpanS)
    hw.appendChild(line)
    var actID = "#" + addID
    var hideMePls = hw.querySelector(actID)
    hideMePls.style.display = "none"
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