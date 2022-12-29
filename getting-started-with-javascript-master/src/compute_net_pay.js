/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(a,b,c) {
   
  // Provide Solution Code Here
  if(typeof a == 'number' && typeof b == 'number' && typeof c == 'number' ) {
    totalhourwages= (a*b);
    totalhourwages =totalhourwages-((c/100)*totalhourwages); 
    return totalhourwages.toString();
  }else {
    return "Invalid Input Types, All Inputs Should Be of Type Number !!";
  }
}
