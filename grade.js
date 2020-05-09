
function editName(i) {
  var r = confirm("Do you want to change class name?")
  if (r == true) {
    var x = localStorage.key(i)
    var gname = x + " GRADE"
    var cname = x + " CREDITS"
    var namepr = "Change name of class: " + x
    var p = prompt(namepr, "")
    var newName = p
        localStorage.setItem(newName, "isclass")
console.log(p)
    if (p === null) {
      return; //break out of the function early
    }
    var ngname = newName + " GRADE"
    var ncname = newName + " CREDITS"
    var grades = localStorage.getItem(gname)
    var credits = localStorage.getItem(cname)

    localStorage.removeItem(gname)
    localStorage.removeItem(cname)
    localStorage.removeItem(x)

    localStorage.setItem(ngname, grades)
    localStorage.setItem(ncname, credits)
    for (i=0; i < localStorage.length; i++){
      var check = localStorage.key(i)
      var checkVal = localStorage.getItem(check)
      if(check.includes(x) == true && checkVal != "isclass"){
        var newCheck = localStorage.key(i)
        var value = localStorage.getItem(newCheck)
        console.log(value)
        var ending = newCheck.substr(x.length, newCheck.length)
        var newKey = newName + ending
        localStorage.removeItem(newCheck)
        localStorage.setItem(newKey, value)
      }
    }
    window.location.reload()
  } else {
    return
  }
}

function editGrade(i) {
  console.log(i)
  var r = confirm("Do you want to edit the Grade for this course?")
  if (r == true) {

    var newKey = localStorage.key(i) + " GRADE"
    console.log(i)
    var x = localStorage.getItem(newKey)
    var p = prompt("Edit info: ", x)

    if (p === null) {
      return; //break out of the function early
    }
    localStorage.setItem(newKey, p)
    window.location.reload()

  } else {
    return
  }
}

function editCreds(i) {
  var r = confirm("Do you want to change credit amount?")

  if (r == true) {
    var newKey = localStorage.key(i) + " CREDITS"
    var x = localStorage.getItem(newKey)
    var p = prompt("Edit info: ", x)

    if (p === null) {
      return; //break out of the function early
    }

    localStorage.setItem(newKey, p)
    window.location.reload()

  } else {
    return
  }
}

function dele(i) {
  var r = confirm("Do you want to remove the course?")
  if (r == true) {
    var is = localStorage.key(i)
    var isG = localStorage.key(i) + " GRADE"
    var isC = localStorage.key(i) + " CREDITS"
    localStorage.removeItem(is)
    localStorage.removeItem(isG)
    localStorage.removeItem(isC)
    for(j=0; j < localStorage.length; j++){
      var myCheck = localStorage.key(j)
      if(myCheck.includes(is) == true){
        localStorage.removeItem(myCheck)
      }
    }
    window.location.reload()

  } else {
    return
  }
}


function createClass() {
  var local = prompt("Enter one class name. If it is an AP Course, use the word 'AP' in the class name. If Honors, use the word 'Honors' so as the GPA is correctly weighted. Examples: Honors Math, AP History, English:", "")
  if (local === null || local === "") {
    return; //break out of the function early
  }
  var credA = prompt("Enter the Number of Credits of this class. Example: 4", "")
  if (credA === null || credA === "") {
    return; //break out of the function early
  }
  var gradeA = prompt("Enter the Current LETTER Grade Received. Example: A-, B, D-", "")
  if (gradeA === null || gradeA === "") {
    return; //break out of the function early
  }
  var cred = local + " CREDITS";
  var grade = local + " GRADE"
  localStorage.setItem(local, "isclass");
  localStorage.setItem(cred, credA);
  localStorage.setItem(grade, gradeA);
  window.location.reload()
}

function editNameN() {
  var m = confirm("Do you want to change your name?")
  if (m == true) {
    var change = prompt("Edit name: ", localStorage.getItem("name"))
    if (change === null) {
      return; //break out of the function early
    }
    localStorage.setItem("name", change)
    window.location.reload()
  }
}

function removeB(){
  var c = confirm("Are you sure you would like to remove yourself from the beta program?")
  if (c === true){
    localStorage.removeItem("beta")
    window.location.reload()
  }
}

var title = document.createElement("H1")
var nn = localStorage.getItem("name")
title.setAttribute("onclick", "editNameN()")
title.setAttribute("id", "welc")
title.setAttribute("class", "borderWound")
title.innerText = nn + "'s GPA Page"
document.getElementById("gr").appendChild(title)

var removeBeta = document.createElement("p")
removeBeta.setAttribute("onclick", "removeB()")
removeBeta.setAttribute("class", "rBeta")
removeBeta.innerText = "Remove me from Beta"
document.getElementById("gr").appendChild(removeBeta)

// var titleb = document.createElement("p")
// titleb.innerText = "Tap on each class name to view options (tap the options to activate them). Tap on the GPA to toggle between weighted and unweighted GPA. (You can also change your name above)"
// document.getElementById("gr").appendChild(titleb)

var addC = document.createElement("BUTTON")
addC.setAttribute("onclick", "createClass()")
addC.setAttribute("id", "addC")
addC.innerHTML = '+ Add Class'
document.getElementById("gr").appendChild(addC)

function showMenu(i) {
  var spanName = "span-" + i
    var infoHelp = "helpG" + i
  var spann = document.getElementById(spanName)
  var helpp = document.getElementById(infoHelp)
  if (spann.style.display == "none") {
    spann.style.display = "block"
    helpp.innerText = "Tap class name to hide options"
  } else {
    spann.style.display = "none"
    helpp.innerText = "Tap class name to show options"  }
}

for (var i = 0; i < localStorage.length; i++) {
  var check = localStorage.key(i)
  if (localStorage.key(i) === "") {
    localStorage.removeItem("")
  }
  if (localStorage.getItem(check) == "isclass") {
    var xItem = localStorage.getItem(localStorage.key(i))
    var newSpan = document.createElement("SPAN")

    var para = document.createElement("h2")
    para.setAttribute("class", "classes");
    para.setAttribute("id", i)
    var z = para.getAttribute("id")
    var x = localStorage.key(i)
    para.innerHTML = x
    para.setAttribute("onclick", `showMenu(${z})`)
    newSpan.appendChild(para)

    var helpInfo = document.createElement("p")
    var helpTag = "helpG" + i
    helpInfo.setAttribute("id", helpTag)
    helpInfo.setAttribute("class", "helpText")
    helpInfo.innerText = "Tap class name to show options"
    newSpan.appendChild(helpInfo)

    var grName = localStorage.key(i) + " GRADE"
    var crname = localStorage.key(i) + " CREDITS"
    var gra = document.createElement("H4")
    gra.setAttribute("id", "myGRADE")
    gra.innerText = "GRADE: " + localStorage.getItem(grName) + "\xa0\xa0\xa0\xa0\xa0//\xa0\xa0\xa0\xa0\xa0" + "CREDITS: " + localStorage.getItem(crname)
    newSpan.appendChild(gra)
    document.getElementById("gr").appendChild(newSpan);

    var span = document.createElement("SPAN");
    spanID = "span-" + i
    span.setAttribute("id", spanID)
    var edit = document.createElement("A")
    edit.setAttribute("onclick", `editName(${z})`)
    edit.innerHTML = "Change Class Name  &#8226;  "
    span.appendChild(edit)

    var grade = document.createElement("A")
    grade.setAttribute("onclick", `editGrade(${z})`)
    grade.innerHTML = "Change Grade &#8226;  "
    span.appendChild(grade)

    var creds = document.createElement("A")
    creds.setAttribute("onclick", `editCreds(${z})`)
    creds.innerHTML = "Change Credit Amount &#8226; "
    span.appendChild(creds)

    var del = document.createElement("A")
    del.setAttribute("onclick", `dele(${z})`)
    del.innerText = "Remove"
    del.style.color = "red"
    span.appendChild(del)

    document.getElementById("gr").appendChild(span)
    var hide = document.getElementById(spanID)
    hide.style.display = "none"
    var line = document.createElement("HR")
    document.getElementById("gr").appendChild(line)
  }
}

var gpa = 0
let totalCred = 0
var gpaWeighted = 0
for (i = 0; i < localStorage.length; i++) {
  var check = localStorage.key(i)
  if (localStorage.getItem(check) == "isclass") {
    var gradeKey = localStorage.key(i) + " GRADE"
    var credKey = localStorage.key(i) + " CREDITS"
    var gradeL = localStorage.getItem(gradeKey)
    var credV = localStorage.getItem(credKey)
    var credVN = parseInt(credV, 10)

    var gradeN = 0
    if (gradeL == "A+" || gradeL == "A") {
      gradeN = 4 * credV
    } else if (gradeL == "A-") {
      gradeN = 3.7 * credV
    } else if (gradeL == "B+") {
      gradeN = 3.33 * credV
    } else if (gradeL == "B") {
      gradeN = 3 * credV
    } else if (gradeL == "B-") {
      gradeN = 2.7 * credV
    } else if (gradeL == "C+") {
      gradeN = 2.3 * credV
    } else if (gradeL == "C") {
      gradeN = 2 * credV
    } else if (gradeL == "C-") {
      gradeN = 1.7 * credV
    } else if (gradeL == "D+") {
      gradeN = 1.3 * credV
    } else if (gradeL == "D") {
      gradeN = credV
    } else if (gradeL == "D-") {
      gradeN = 0.7 * credV
    } else if (gradeL == "F") {
      gradeN = 0
    }
    var isAP = check.includes("AP")
    var isHon = check.includes("Honors")
    var isCanadian = check.includes("Honours")
    newG = gradeN
    if (isAP == true) {
      newG = gradeN + credVN
    }
    if (isHon == true || isCanadian == true) {
      newG = gradeN + credVN * 0.5
    }
    gpaWeighted += newG
    gpa += gradeN
    totalCred += credVN
  }
}
gpa = gpa / totalCred
gpaWeighted = gpaWeighted / totalCred
console.log(gpaWeighted)

gpa = gpa.toFixed(2)
gpaWeighted = gpaWeighted.toFixed(2)

function changeGPA() {
  var displ = document.getElementById("gpaD")
  var isW = displ.innerText.includes("Weighted")

  if (isW == true) {
    displ.innerText = "Unweighted GPA: " + gpa
  } else {
    displ.innerText = "Weighted GPA: " + gpaWeighted
  }

}

if (localStorage.length > 3 && isNaN(gpaWeighted) == false) {
  var gpaD = document.createElement("H1")
  gpaD.setAttribute("id", "gpaD")
  gpaD.setAttribute("onclick", "changeGPA()")

  gpaD.innerText = "Weighted GPA: " + gpaWeighted
  document.getElementById("gr").appendChild(gpaD)
  var helpGPA = document.createElement("p")
  helpGPA.setAttribute("id", "helpGPA")
  helpGPA.innerText = "Tap GPA to toggle"
    document.getElementById("gr").appendChild(helpGPA)
} else {
  var info = document.createElement("h3")
  info.setAttribute("id", "info")

  info.innerText = "To get started, click the '+ Add Class' button at the top left to add a class. To edit class info after a class has been made, tap on the class name. To edit your name, tap on your name!\n\nYou can also tap on the GPA to toggle between showing the weighted and unweighted GPA \n\n Grades at LHS range from A+ to F, and so those are the only accepted grades. \n\n The data entered in this app by you is saved on your phone only. No one else has access to this data."

  document.getElementById("gr").appendChild(info)
}
