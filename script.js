var totalAmt = 173;



var usaAmt = 2;
var luxemburgAmt = 5;
var norwayAmt = 5;
var germanyAmt = 13;
var belgiumAmt = 15;
var netherlandsAmt = 133;

function addData() {
    giveValue(netherlandsAmt, "netherlands");
    giveValue(belgiumAmt, "belgium");
    giveValue(germanyAmt, "germany");
    giveValue(norwayAmt, "norway");
    giveValue(luxemburgAmt, "luxemburg");
    giveValue(usaAmt, "usa");
}



var zh = "90";
var nh = "23";
var ut = "8";
var ze = "6";
var fr = "3";
var li = "3";

function addDataNL() {
    giveValue(zh, "zuid-holland");
    giveValue(nh, "noord-holland");
    giveValue(ut, "utrecht");
    giveValue(ze, "zeeland");
    giveValue(fr, "friesland");
    giveValue(li, "limburg");
}



var denhaag = "72";
var amsterdam = "23";
var brussels = "14";
var berlin = "13";
var rotterdam = "10";

function addDataCity() {
    giveValue(denhaag, "den-haag");
    giveValue(amsterdam, "amsterdam");
    giveValue(brussels, "brussels");
    giveValue(berlin, "berlin");
    giveValue(rotterdam, "rotterdam");
}




function giveValue(x, className) {
    var container = document.querySelector("." + className);
    var childDiv = container.querySelector(".dataBar"); // Change this selector to match the actual class or tag name of your child div
    var newHeight = (15 / totalAmt) * x;
    childDiv.style.height = newHeight + "rem";
}