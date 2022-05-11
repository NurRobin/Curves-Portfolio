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
        obj.innerHTML = "0"
        obj.style.background="#3c4043";
        obj.style.border="1px solid #3c4043";
        obj.style.color="#e8eaed";
    }
}