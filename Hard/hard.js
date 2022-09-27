var tomHeight = 9

var tomMass = 8

var jerryHeight = 10

var jerryMass = 45

var BMI1 = tomMass / (tomHeight * tomHeight)
var BMI2 = jerryMass / (jerryHeight * jerryHeight)



if( BMI1 > BMI2) {
    console.log("Tom has a higher BMI than Jerry")
}else if( BMI1 < BMI2) {
    console.log("Jerry has a higher BMI than Tom")
}