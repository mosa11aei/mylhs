function mainShowHW(){

for (i = 0; i < localStorage.length; i++) {
  localKey = localStorage.key(i);
  if (localStorage.getItem(localKey) == "isclass") {
    xx.style.display = "none"
    var paraA = document.createElement("h2")
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

    
    var add = document.createElement("h4");
    var addID = "spanC-" + i;
    //newSpanS.setAttribute("id", addID);
    add.setAttribute("class", "addHW");
    //newSpanS.appendChild(add);

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
    hw.appendChild(newSpanS)
    //hw.appendChild(line)
    var actID = "#" + addID
    var hideMePls = hw.querySelector(actID)
    //hideMePls.style.display = "none"
  }
}

}

mainShowHW()