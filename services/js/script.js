var serviceHeading = [
    "medical service",
    "24 hours service",
    "emergency departments",
    "x-ray",
    "cardiology",
    "neurology",
    "pregrancy",
    "dental" 
];
var servicePicture = [
    "img/icon-med-var1.png",
    "img/icon-serv-var1.png",
    "img/icon-emerg-var1.png",
    "img/icon-xray-var1.png",
    "img/icon-card-var1.png",
    "img/icon-neur-var1.png",
    "img/icon-preg-var1.png",
    "img/icon-dent-var1.png"
];

var sericeText=[
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
];

(function mainFuction(){

for(var i=0;i<sericeText.length;i++){
        var service = document.createElement("div");
    service.setAttribute("class","col-sm-6 service");
    document.getElementsByClassName("firstSection")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0].appendChild(service);

    var servicebox=document.createElement("div");
    servicebox.setAttribute("class","service-box");
    service.appendChild(servicebox);

    var serviceimage= document.createElement("img");
    serviceimage.setAttribute("src",servicePicture[i]);
    servicebox.appendChild(serviceimage);

    var servicelib =document.createElement("div");
    servicelib.setAttribute("class","lib");
    servicebox.appendChild(servicelib);

    var sheading = document.createElement("h2");
    sheading.innerHTML= serviceHeading[i];
    servicelib.appendChild(sheading);

    var serviceP = document.createElement("p");
    serviceP.innerHTML =sericeText[i];
    servicelib.appendChild(serviceP);
}


}());