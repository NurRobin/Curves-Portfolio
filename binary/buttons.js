function getotherparentID(parentID){
    var n = parentID.length;
    var parentIDbin = parentID.substr(n-1,n);
    //console.log("ParentIDValue"+parentIDbin);
    if (parentIDbin == "1"){
        return parentID.substr(0,n-1)+"0";
    }
    else{
        return parentID.substr(0,n-1)+"1";
    }
}

function change_state(obj){
    //checked klasse zum label hinzufügen
    obj.parentNode.classList.add("checked");
    //id des Labels als String speichern
    var parentID = obj.parentNode.id.toString();
    //console.log("ParentID"+parentID);
    //id des anderen Labels als String speichern
    var otherparentID = getotherparentID(parentID);
    //console.log("otherParentID"+otherparentID);
    document.getElementById(otherparentID).classList.remove("checked");
}

function change_bin(obj)
{
    //console.log(obj);
    if(obj.innerHTML == "0"){
        obj.innerHTML = "1";
        obj.style.background="#E8EAD2";
        obj.style.border="1px solid #e8eaed";
        obj.style.color="#3c4043";
    }
    else{
        obj.innerHTML = "0";
        obj.style.background="#3c4043";
        obj.style.border="1px solid #3c4043";
        obj.style.color="#e8eaed";
    }
}

function calc()
{
    calc128();
    calc64();
    calc32();
    calc16();
    calc8();
    calc4();
    calc2();
    calc1();
    calc2();
    calc4();
    calc8();
    calc16();
    calc32();
    calc64();
    calc128();
    finalcalc();
}

function calc1()
{   
    if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-1")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-1")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-1")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-1")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-1")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-1")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-1-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-1-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-1")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-1")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-2")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-2")[0].innerHTML = "0";
        document.getElementsByClassName("sum-1")[0].innerHTML = "0";
    }
}

function calc2()
{
    if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-2")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-2")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-2")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-2")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-2")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-2")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-2-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-2-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-2")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-2")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-4")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-4")[0].innerHTML = "0";
        document.getElementsByClassName("sum-2")[0].innerHTML = "0";
    }
}

function calc4()
{
    if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-4")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-4")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-4")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-4")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-4")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-4")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-4-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-4-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-4")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-4")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-8")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-8")[0].innerHTML = "0";
        document.getElementsByClassName("sum-4")[0].innerHTML = "0";
    }
}

function calc8()
{
    if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-8")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-8")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-8")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-8")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-8")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-8")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-8-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-8-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-8")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-8")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-16")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-16")[0].innerHTML = "0";
        document.getElementsByClassName("sum-8")[0].innerHTML = "0";
    }
}


function calc16()
{
    if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-16")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-16")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-16")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-16")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-16")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-16")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-16-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-16-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-16")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-16")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-32")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-32")[0].innerHTML = "0";
        document.getElementsByClassName("sum-16")[0].innerHTML = "0";
    }
}


function calc32()
{
    if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-32")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-32")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-32")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-32")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-32")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-32")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-32-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-32-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-32")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-32")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-64")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-64")[0].innerHTML = "0";
        document.getElementsByClassName("sum-32")[0].innerHTML = "0";
    }
}


function calc64()
{
    if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-64")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-64")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-64")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "0";
    }
    else if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-64")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-64")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-64")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "0";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "1";
    }
    else if(document.getElementsByClassName("binary-64-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-64-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-64")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-64")[0].innerHTML = "1";
        document.getElementsByClassName("remainder-128")[0].innerHTML = "1";
    }
    else{
        document.getElementsByClassName("remainder-128")[0].innerHTML = "0";
        document.getElementsByClassName("sum-64")[0].innerHTML = "0";
    }
}


function calc128()
{
    if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-128")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "1";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "0";');
    }
    else if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-128")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "1";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "0";');
    }
    else if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-128")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "1";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "0";');
    }
    else if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-128")[0].innerHTML == "0"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "0";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "1";');
    }
    else if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "0" && document.getElementsByClassName("remainder-128")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "0";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "1";');
    }
    else if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "0" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-128")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "0";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "1";');
    }
    else if(document.getElementsByClassName("binary-128-1-row")[0].innerHTML == "1" && document.getElementsByClassName("binary-128-2-row")[0].innerHTML == "1" && document.getElementsByClassName("remainder-128")[0].innerHTML == "1"){
        document.getElementsByClassName("sum-128")[0].innerHTML = "1";
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "1";');
    }
    else{
        console.log('document.getElementsByClassName("remainder-256")[0].innerHTML = "0";');
        document.getElementsByClassName("sum-128")[0].innerHTML = "0";
    }
}

function finalcalc()
{
    var c = 0;
    if(document.getElementsByClassName("sum-1")[0].innerHTML == "1"){
        c = c + 1;
    }
    if(document.getElementsByClassName("sum-2")[0].innerHTML == "1"){
        c = c + 2;
    }
    if(document.getElementsByClassName("sum-4")[0].innerHTML == "1"){
        c = c + 4;
    }
    if(document.getElementsByClassName("sum-8")[0].innerHTML == "1"){
        c = c + 8;
    }
    if(document.getElementsByClassName("sum-16")[0].innerHTML == "1"){
        c = c + 16;
    }
    if(document.getElementsByClassName("sum-32")[0].innerHTML == "1"){
        c = c + 32;
    }
    if(document.getElementsByClassName("sum-64")[0].innerHTML == "1"){
        c = c + 64;
    }
    if(document.getElementsByClassName("sum-128")[0].innerHTML == "1"){
        c = c + 128;
    }
    document.getElementById("result").innerHTML = c;
}