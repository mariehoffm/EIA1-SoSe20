

var absoluteEmissionAfrica2018: number = 1235.5;
var absoluteEmissionSouthAmerica2018: number = 1261.5;
var absoluteEmissionEurope2018: number = 4209.3;
var absoluteEmissionNorthAmerica2018: number = 6035.6;
var absoluteEmissionAsia2018: number = 16274.1;
var absoluteEmissionAustralia2018: number = 2100.5;

var absoluteEmissionAfrica2008: number = 1028;
var absoluteEmissionSouthAmerica2008: number = 1132.6;
var absoluteEmissionEurope2008: number = 4965.70;
var absoluteEmissionNorthAmerica2008: number = 6600.40;
var absoluteEmissionAsia2008: number = 12954.7;
var absoluteEmissionAustralia2008: number = 1993;

var absoluteEmissionAfrica2009: number = 1041.9;
var absoluteEmissionSouthAmerica2009: number = 1093.1;
var absoluteEmissionEurope2009: number = 4616.4;
var absoluteEmissionNorthAmerica2009: number = 6139.9;
var absoluteEmissionAsia2009: number = 13246.6;
var absoluteEmissionAustralia2009: number = 1875.7;

var absoluteEmissionAfrica2010: number = 1072.1;
var absoluteEmissionSouthAmerica2010: number = 1164.2;
var absoluteEmissionEurope2010: number = 4705.8;
var absoluteEmissionNorthAmerica2010: number = 6375.8;
var absoluteEmissionAsia2010: number = 13986.8;
var absoluteEmissionAustralia2010: number = 1939.1;

var absoluteEmissionAfrica2011: number = 1073.7;
var absoluteEmissionSouthAmerica2011: number = 1215.5;
var absoluteEmissionEurope2011: number = 4615.2;
var absoluteEmissionNorthAmerica2011: number = 6262.8;
var absoluteEmissionAsia2011: number = 14860.1;
var absoluteEmissionAustralia2011: number = 2035.2;

var absoluteEmissionAfrica2012: number = 1107.1;
var absoluteEmissionSouthAmerica2012: number = 1262;
var absoluteEmissionEurope2012: number = 4541.5;
var absoluteEmissionNorthAmerica2012: number = 5998.9;
var absoluteEmissionAsia2012: number = 15308.8;
var absoluteEmissionAustralia2012: number = 2063.2;

var absoluteEmissionAfrica2013: number = 1134.4;
var absoluteEmissionSouthAmerica2013: number = 1208.9;
var absoluteEmissionEurope2013: number = 4436.9;
var absoluteEmissionNorthAmerica2013: number = 6167;
var absoluteEmissionAsia2013: number = 15660.2;
var absoluteEmissionAustralia2013: number = 2014.7;

var absoluteEmissionAfrica2014: number = 1167.1;
var absoluteEmissionSouthAmerica2014: number = 1331.2;
var absoluteEmissionEurope2014: number = 4202;
var absoluteEmissionNorthAmerica2014: number = 6267.9;
var absoluteEmissionAsia2014: number = 15787.7;
var absoluteEmissionAustralia2014: number = 2027.6;

var absoluteEmissionAfrica2015: number = 1174.5;
var absoluteEmissionSouthAmerica2015: number = 1321.7;
var absoluteEmissionEurope2015: number = 4191.6;
var absoluteEmissionNorthAmerica2015: number = 6048.7;
var absoluteEmissionAsia2015: number = 15877;
var absoluteEmissionAustralia2015: number = 1986.8;

var absoluteEmissionAfrica2016: number = 1192.1;
var absoluteEmissionSouthAmerica2016: number = 1294.7;
var absoluteEmissionEurope2016: number = 4247.3;
var absoluteEmissionNorthAmerica2016: number = 5938.3;
var absoluteEmissionAsia2016: number = 15984;
var absoluteEmissionAustralia2016: number = 1997.4;

var absoluteEmissionAfrica2017: number = 1207;
var absoluteEmissionSouthAmerica2017: number = 1279.2;
var absoluteEmissionEurope2017: number = 4278.7;
var absoluteEmissionNorthAmerica2017: number = 5920.5;
var absoluteEmissionAsia2017: number = 16274.3;
var absoluteEmissionAustralia2017: number = 2001.3;

var absoluteEmissionWorld2018: number = absoluteEmissionAfrica2018 + absoluteEmissionSouthAmerica2018 + absoluteEmissionEurope2018 + absoluteEmissionNorthAmerica2018 + absoluteEmissionAsia2018 + absoluteEmissionAustralia2018;

//Punkt 1
console.log("Emission von 2018 Africa: " + absoluteEmissionAfrica2018);
console.log("Emission von 2018 South America: " + absoluteEmissionSouthAmerica2018);
console.log("Emission von 2018 Europe: " + absoluteEmissionEurope2018);
console.log("Emission von 2018 North America: " + absoluteEmissionNorthAmerica2018);
console.log("Emission von 2018 Asia: " + absoluteEmissionAsia2018);
console.log("Emission von 2018 Australia: " + absoluteEmissionAustralia2018);

//Punkt 2
console.log("relative Emissions Africa: " + (absoluteEmissionAfrica2018 / absoluteEmissionWorld2018) *100 + " %");
console.log("relative Emissions South America: " + (absoluteEmissionSouthAmerica2018 / absoluteEmissionWorld2018) *100 + " %");
console.log("relative Emissions Europe: " + (absoluteEmissionEurope2018 / absoluteEmissionWorld2018) *100 + " %");
console.log("relative Emissions North America: " + (absoluteEmissionNorthAmerica2018 / absoluteEmissionWorld2018) *100 + " %");
console.log("relative Emissions Asia: " + (absoluteEmissionAsia2018 / absoluteEmissionWorld2018) *100 + " %");
console.log("relative Emissions Australia: " + (absoluteEmissionAustralia2018 / absoluteEmissionWorld2018) *100 + " %");

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

