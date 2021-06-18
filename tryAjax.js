var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function(){
    var data = JSON.parse(this.response);
//    console.log(data);
    data.forEach(element => {
        document.write(element.name+ " " + element.region+ " " + element.subregion+ " " + element.population +"<br>");
        document.write("<img src="+element.flag+"><br>");
    });
  
};
xhr.send();