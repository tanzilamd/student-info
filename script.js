function info(name, address, school, cl, section) {
    document.getElementById("infoList").innerHTML = "";

    var ele = document.createElement("li");
    var eleText = document.createTextNode(`Name : ${name}`);
    ele.appendChild(eleText)
    document.getElementById("infoList").appendChild(ele);

    var ele = document.createElement("li");
    var eleText = document.createTextNode(`Address : ${address}`);
    ele.appendChild(eleText)
    document.getElementById("infoList").appendChild(ele);

    var ele = document.createElement("li");
    var eleText = document.createTextNode(`School : ${school}`);
    ele.appendChild(eleText)
    document.getElementById("infoList").appendChild(ele);

    var ele = document.createElement("li");
    var eleText = document.createTextNode(`Class : ${cl}`);
    ele.appendChild(eleText)
    document.getElementById("infoList").appendChild(ele);

    var ele = document.createElement("li");
    var eleText = document.createTextNode(`Section : ${section}`);
    ele.appendChild(eleText)
    document.getElementById("infoList").appendChild(ele);

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("school").value = "";
    document.getElementById("cl").value = "";
    document.getElementById("section").value = "";

}