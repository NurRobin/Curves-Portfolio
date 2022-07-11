//get value for element from txt file with the same name as the element id in the array and set it as the innerHTML of the element

item = ["Location_powerProduced","Location_powerOut","Location_powerBuffered","Location_powerConsumed","Location_powerConsumedFromGrid","Location_powerConsumedFromStorage","Location_powerDirectConsumed", "EVStation_modeStation", "BatteryConverter_stateOfCharge"]


function getValue() {
    for (var i = 0; i < item.length; i++) {
        var element = document.getElementById(item[i]);
        var file = "values/"+ item[i] + ".txt";
        var request = new XMLHttpRequest();
        request.open("GET", file, false);
        request.send(null);
        element.innerHTML = request.responseText;
    }
}