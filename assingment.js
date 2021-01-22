// https://github.com/Nabin-070/assingment-3



// kilometerToMeter
 
 function kilometerToMeter(kilometer) {
   if (kilometer > 0){
     var meter = kilometer * 1000;
       return meter;
   }
   else{
       return "num is invalid"
   }
 }
//  var total = kilometerToMeter(5);
// console.log(total);



// budgetCalculator



function budgetCalculator (watch, mobile, laptop){
       var watch = 5*50;
      var mobile = 5*100;
      var laptop = 2*500;
      var total = watch + mobile + laptop;
      return total;
}
// var result = budgetCalculator(5,5,2)
//  console.log(result);



// megaFriend

 function megaFriend(array){
     var len = 0;
     var longest;
     for (var i = 0; i < array.length; i++){
         if (array[i].length > len) {
              len = array[i].length;
              longest = array[i];
         }
     }
     return longest;
 }
// var count = megaFriend (["sangakara", "mahmudullah", "tamim"]);
// console.log(count);




// hotelCost

 function hotelCost(days){
 costamount = 0;
 if(days <= 10) {
 costamount = days*100;
}
else if(days <= 20){
var firstTendays = 10*100;
var remaining = days - 10;
var secondTendays = remaining * 80;
costamount = firstTendays + secondTendays;
}
else{
   var firstTendays = 10*100;
   var secondTendays = 10*80;
   var remaining = days - 20;
   var thirdTendays = remaining * 50;
  costamount = firstTendays + secondTendays + thirdTendays;
}
 return costamount;
}
