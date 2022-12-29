/*

The replaceString() function should accept 3 string inputs.

The function should search for second string in first string and if found should replace it with third string.

The function should return the replaced string.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type String !!", 
for any non-numeric value passed to the function.

*/

module.exports = function replaceString(inputString, searchString, replaceWith) {
    // Provide Solution Code Here
    if (typeof inputString === "string" && typeof searchString === "string" && typeof replaceWith === "string") {
        
        let w = inputString;
        inputString = inputString.split(" ");
        //console.log(inputString); 
        //let ans =""; 
        for(let i=0; i<inputString.length;i++){
            if(inputString[i]=== searchString){
                    inputString[i] = replaceWith;
                    return inputString.join(" ");
                    
                }
  
            }
        return w;
    } else {
        return "Invalid Input Types, All Inputs Should Be of Type String !!";
    }
  }
