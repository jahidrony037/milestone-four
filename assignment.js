
function feetToMile(feet){
 
    var miles = feet/5280;
    if(feet <0 ){
        return `Feet Doesn't Contain  Negative Value.Please assign a Correct Value.`
    }
    else{
        return miles;
    }
}
var feet = 50000;
var result = feetToMile(feet);
console.log(result.toFixed(4),"Miles");


function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    
    var total = chairWood + tableWood + bedWood;

    return total;   
}
var chair = 15;
var table = 10;
var bed = 14;
var intotalWood = woodCalculator(chair,table,bed);
console.log(intotalWood, "Cubic Feet");



function brickCalculator(buildingHeight){
                                                                    // we know 1 feet = 1000 brick;
                                                                    // and also know 1 flor = 15 feet;
   
   if(buildingHeight <=10 ){
    var  brickTillTen = buildingHeight*15 * 1000;
    return brickTillTen;
   }
   else if(buildingHeight >10 && buildingHeight <=20 ){
       var brickTillTwenty = (150000 + ((buildingHeight-10)*12*1000));
       return brickTillTwenty;
   }
   else{
       var brickUpperTwenty = (270000 + ((buildingHeight-20)*10*1000));
       return brickUpperTwenty;
   }
  

}
var buildingHeight = 30;
var result = brickCalculator(buildingHeight);
console.log(result,'Bricks Needed');



function tinyFriend(friendsArray){
        for(var i = 0; i<friendsArray.length; i++){
            var friendsName = friendsArray[i];
            if(friendsName.length < tinyName.length){
                tinyName = friendsName;
            }
        
        }
        return tinyName;
}
    var friendsArray = ['rahim', 'rony','mollik','lemon','tom','Zerry'];
    var tinyName =friendsArray [0];
    var tinyFriendName = tinyFriend(friendsArray);
    console.log(tinyFriendName);
