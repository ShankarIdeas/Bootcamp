var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  //    console.log(data);
  data.forEach((element) => {
    document.write(
      "<div><center>" +
        element.name +
        " " +
        element.region +
        " " +
        element.subregion +
        " " +
        element.population +
        "</center></div>"
    );
    document.write(
      "<div><center><img src=" + element.flag + "></center></div>"
    );
  });
};
xhr.send();
