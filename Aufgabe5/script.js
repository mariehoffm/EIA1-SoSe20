var absoluteEmissionAfrica2018 = 1235.5;
var absoluteEmissionSouthAmerica2018 = 1261.5;
var absoluteEmissionEurope2018 = 4209.3;
var absoluteEmissionNorthAmerica2018 = 6035.6;
var absoluteEmissionAsia2018 = 16274.1;
var absoluteEmissionAustralia2018 = 2100.5;
var absoluteEmissionAfrica2008 = 1028;
var absoluteEmissionSouthAmerica2008 = 1132.6;
var absoluteEmissionEurope2008 = 4965.70;
var absoluteEmissionNorthAmerica2008 = 6600.40;
var absoluteEmissionAsia2008 = 12954.7;
var absoluteEmissionAustralia2008 = 1993;
var absoluteEmissionAfrica2009 = 1041.9;
var absoluteEmissionSouthAmerica2009 = 1093.1;
var absoluteEmissionEurope2009 = 4616.4;
var absoluteEmissionNorthAmerica2009 = 6139.9;
var absoluteEmissionAsia2009 = 13246.6;
var absoluteEmissionAustralia2009 = 1875.7;
var absoluteEmissionAfrica2010 = 1072.1;
var absoluteEmissionSouthAmerica2010 = 1164.2;
var absoluteEmissionEurope2010 = 4705.8;
var absoluteEmissionNorthAmerica2010 = 6375.8;
var absoluteEmissionAsia2010 = 13986.8;
var absoluteEmissionAustralia2010 = 1939.1;
var absoluteEmissionAfrica2011 = 1073.7;
var absoluteEmissionSouthAmerica2011 = 1215.5;
var absoluteEmissionEurope2011 = 4615.2;
var absoluteEmissionNorthAmerica2011 = 6262.8;
var absoluteEmissionAsia2011 = 14860.1;
var absoluteEmissionAustralia2011 = 2035.2;
var absoluteEmissionAfrica2012 = 1107.1;
var absoluteEmissionSouthAmerica2012 = 1262;
var absoluteEmissionEurope2012 = 4541.5;
var absoluteEmissionNorthAmerica2012 = 5998.9;
var absoluteEmissionAsia2012 = 15308.8;
var absoluteEmissionAustralia2012 = 2063.2;
var absoluteEmissionAfrica2013 = 1134.4;
var absoluteEmissionSouthAmerica2013 = 1208.9;
var absoluteEmissionEurope2013 = 4436.9;
var absoluteEmissionNorthAmerica2013 = 6167;
var absoluteEmissionAsia2013 = 15660.2;
var absoluteEmissionAustralia2013 = 2014.7;
var absoluteEmissionAfrica2014 = 1167.1;
var absoluteEmissionSouthAmerica2014 = 1331.2;
var absoluteEmissionEurope2014 = 4202;
var absoluteEmissionNorthAmerica2014 = 6267.9;
var absoluteEmissionAsia2014 = 15787.7;
var absoluteEmissionAustralia2014 = 2027.6;
var absoluteEmissionAfrica2015 = 1174.5;
var absoluteEmissionSouthAmerica2015 = 1321.7;
var absoluteEmissionEurope2015 = 4191.6;
var absoluteEmissionNorthAmerica2015 = 6048.7;
var absoluteEmissionAsia2015 = 15877;
var absoluteEmissionAustralia2015 = 1986.8;
var absoluteEmissionAfrica2016 = 1192.1;
var absoluteEmissionSouthAmerica2016 = 1294.7;
var absoluteEmissionEurope2016 = 4247.3;
var absoluteEmissionNorthAmerica2016 = 5938.3;
var absoluteEmissionAsia2016 = 15984;
var absoluteEmissionAustralia2016 = 1997.4;
var absoluteEmissionAfrica2017 = 1207;
var absoluteEmissionSouthAmerica2017 = 1279.2;
var absoluteEmissionEurope2017 = 4278.7;
var absoluteEmissionNorthAmerica2017 = 5920.5;
var absoluteEmissionAsia2017 = 16274.3;
var absoluteEmissionAustralia2017 = 2001.3;
var absoluteEmissionWorld2018 = absoluteEmissionAfrica2018 + absoluteEmissionSouthAmerica2018 + absoluteEmissionEurope2018 + absoluteEmissionNorthAmerica2018 + absoluteEmissionAsia2018 + absoluteEmissionAustralia2018;
//Punkt 1
console.log("Emission von 2018 Africa: " + absoluteEmissionAfrica2018);
console.log("Emission von 2018 South America: " + absoluteEmissionSouthAmerica2018);
console.log("Emission von 2018 Europe: " + absoluteEmissionEurope2018);
console.log("Emission von 2018 North America: " + absoluteEmissionNorthAmerica2018);
console.log("Emission von 2018 Asia: " + absoluteEmissionAsia2018);
console.log("Emission von 2018 Australia: " + absoluteEmissionAustralia2018);
//Punkt 2
console.log("relative Emissions Africa: " + (absoluteEmissionAfrica2018 / absoluteEmissionWorld2018) * 100 + " %");
console.log("relative Emissions South America: " + (absoluteEmissionSouthAmerica2018 / absoluteEmissionWorld2018) * 100 + " %");
console.log("relative Emissions Europe: " + (absoluteEmissionEurope2018 / absoluteEmissionWorld2018) * 100 + " %");
console.log("relative Emissions North America: " + (absoluteEmissionNorthAmerica2018 / absoluteEmissionWorld2018) * 100 + " %");
console.log("relative Emissions Asia: " + (absoluteEmissionAsia2018 / absoluteEmissionWorld2018) * 100 + " %");
console.log("relative Emissions Australia: " + (absoluteEmissionAustralia2018 / absoluteEmissionWorld2018) * 100 + " %");
//Punkt 3
console.log("Wachstumsrate von 2008 nach 2018 Africa: " + ((absoluteEmissionAfrica2018 - absoluteEmissionAfrica2008) / absoluteEmissionAfrica2018) * 100 + " %");
console.log("Wachstumsrate von 2008 nach 2018 South America: " + ((absoluteEmissionSouthAmerica2018 - absoluteEmissionSouthAmerica2008) / absoluteEmissionSouthAmerica2018) * 100 + " %");
console.log("Wachstumsrate von 2008 nach 2018 Europe: " + ((absoluteEmissionEurope2018 - absoluteEmissionEurope2008) / absoluteEmissionEurope2018) * 100 + " %");
console.log("Wachstumsrate von 2008 nach 2018 North Africa: " + ((absoluteEmissionNorthAmerica2018 - absoluteEmissionNorthAmerica2008) / absoluteEmissionNorthAmerica2018) * 100 + " %");
console.log("Wachstumsrate von 2008 nach 2018 Asia: " + ((absoluteEmissionAsia2018 - absoluteEmissionAsia2008) / absoluteEmissionAsia2018) * 100 + " %");
console.log("Wachstumsrate von 2008 nach 2018 Australia: " + ((absoluteEmissionAustralia2018 - absoluteEmissionAustralia2008) / absoluteEmissionAustralia2018) * 100 + " %");
//Punkt 4
console.log("Differenz zwischen 2008 und 2018 Africa: " + (absoluteEmissionAfrica2018 - absoluteEmissionAfrica2008));
console.log("Differenz zwischen 2008 und 2018 South America: " + (absoluteEmissionSouthAmerica2018 - absoluteEmissionSouthAmerica2008));
console.log("Differenz zwischen 2008 und 2018 Europe: " + (absoluteEmissionEurope2018 - absoluteEmissionEurope2008));
console.log("Differenz zwischen 2008 und 2018 North America: " + (absoluteEmissionNorthAmerica2018 - absoluteEmissionNorthAmerica2008));
console.log("Differenz zwischen 2008 und 2018 Asia: " + (absoluteEmissionAsia2018 - absoluteEmissionAsia2008));
console.log("Differenz zwischen 2008 und 2018 Australia: " + (absoluteEmissionAustralia2018 - absoluteEmissionAustralia2008));
//Aufgabe#06
//wenn click auf Europe ändert sich Überschrift zu "Emissions in Europe":
document.querySelector(".europe").addEventListener("click", myFunctionEurope);
function myFunctionEurope() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#absoluteEmmission").innerHTML = absoluteEmissionEurope2018;
    document.querySelector("#relativeEmission").innerHTML = (absoluteEmissionEurope2018 / absoluteEmissionWorld2018) * 100 + " %";
    ;
    document.querySelector("#growthRate").innerHTML = ((absoluteEmissionEurope2018 - absoluteEmissionEurope2008) / absoluteEmissionEurope2018) * 100 + " %";
    ;
    document.querySelector("#absoluteGR").innerHTML = (absoluteEmissionEurope2018 - absoluteEmissionEurope2008);
    ;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 13%");
}
//das gleiche für North America:
document.querySelector(".northamerica").addEventListener("click", myFunctionNorthamerica);
function myFunctionNorthamerica() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#absoluteEmmission").innerHTML = absoluteEmissionNorthAmerica2018;
    document.querySelector("#relativeEmission").innerHTML = (absoluteEmissionNorthAmerica2018 / absoluteEmissionWorld2018) * 100 + " %";
    ;
    document.querySelector("#growthRate").innerHTML = ((absoluteEmissionNorthAmerica2018 - absoluteEmissionNorthAmerica2008) / absoluteEmissionNorthAmerica2018) * 100 + " %";
    ;
    document.querySelector("#absoluteGR").innerHTML = (absoluteEmissionNorthAmerica2018 - absoluteEmissionNorthAmerica2008);
    ;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 19%");
}
//das gleiche für South America:
document.querySelector(".southamerica").addEventListener("click", myFunctionSouthamerica);
function myFunctionSouthamerica() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#absoluteEmmission").innerHTML = absoluteEmissionSouthAmerica2018;
    document.querySelector("#relativeEmission").innerHTML = (absoluteEmissionSouthAmerica2018 / absoluteEmissionWorld2018) * 100 + " %";
    ;
    document.querySelector("#growthRate").innerHTML = ((absoluteEmissionSouthAmericae2018 - absoluteEmissionSouthAmerica2008) / absoluteEmissionSouthAmerica2018) * 100 + " %";
    ;
    document.querySelector("#absoluteGR").innerHTML = (absoluteEmissionSouthAmerica2018 - absoluteEmissionSouthAmerica2008);
    ;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4%");
}
//das gleiche für Africa:
document.querySelector(".africa").addEventListener("click", myFunctionAfrica);
function myFunctionAfrica() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#absoluteEmmission").innerHTML = absoluteEmissionAfrica2018;
    document.querySelector("#relativeEmission").innerHTML = (absoluteEmissionAfrica2018 / absoluteEmissionWorld2018) * 100 + " %";
    ;
    document.querySelector("#growthRate").innerHTML = ((absoluteEmissionAfrica2018 - absoluteEmissionAfrica2008) / absoluteEmissionAfrica2018) * 100 + " %";
    ;
    document.querySelector("#absoluteGR").innerHTML = (absoluteEmissionAfrica2018 - absoluteEmissionAfrica2008);
    ;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 3%");
}
//das gleiche für asia:
document.querySelector(".asia").addEventListener("click", myFunctionAsia);
function myFunctionAsia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#absoluteEmmission").innerHTML = absoluteEmissionAsia2018;
    document.querySelector("#relativeEmission").innerHTML = (absoluteEmissionAsia2018 / absoluteEmissionWorld2018) * 100 + " %";
    ;
    document.querySelector("#growthRate").innerHTML = ((absoluteEmissionAsia2018 - absoluteEmissionAsia2008) / absoluteEmissionAsia2018) * 100 + " %";
    ;
    document.querySelector("#absoluteGR").innerHTML = (absoluteEmissionAsia2018 - absoluteEmissionAsia2008);
    ;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 52%");
}
//das gleiche für  australia:
document.querySelector(".australia").addEventListener("click", myFunctionAustralia);
function myFunctionAustralia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#absoluteEmmission").innerHTML = absoluteEmissionAustralia2018;
    document.querySelector("#relativeEmission").innerHTML = (absoluteEmissionAustralia2018 / absoluteEmissionWorld2018) * 100 + " %";
    ;
    document.querySelector("#growthRate").innerHTML = ((absoluteEmissionAustralia2018 - absoluteEmissionAustralia2008) / absoluteEmissionAustralia2018) * 100 + " %";
    ;
    document.querySelector("#absoluteGR").innerHTML = (absoluteEmissionAustralia2018 - absoluteEmissionAustralia2008);
    ;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 6%");
}
//# sourceMappingURL=script.js.map