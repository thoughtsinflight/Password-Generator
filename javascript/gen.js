//---- Getting the information
document.getElementById("genButton").addEventListener("click",function(){
    var askLength = prompt("Select a character lenght between 8 and 128")
    var askSpecial = confirm("Would you like special characters in your password")
    var askLower = confirm("Would you like lower case characters in your password")
    var askUpper = confirm("Would you like upper case characters in your password")
    var askNum = confirm("Would you like numbers in your password")

    var passNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var passSym = ["!", "@", "#", "$", "%", "^", "&", "*", ":", "<",">","?"]
    var passUp = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
    var passLow = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

    var passpass = [] //to return the loops to user
    
    // codes for the different conditions where is the user wants the characters it will push into the passpass array.
    if (askLength >= 8 && askLength <= 128){

        if (askSpecial){
            passpass.push(passSym)
        }
        if (askLower){
            passpass.push(passLow)
        }
        if (askUpper){
            passpass.push(passUp)
        }
        if (askNum){
            passpass.push(passNum)
        }
        console.log(passpass)
        // a loop for getting the password.
        var password =''
        for (let i = 0; i < askLength; i++) {
            var littleboi = Math.floor(Math.random() * passpass.length);
             password += passpass[littleboi][Math.floor(Math.random() * passpass[littleboi].length)];
        }
        console.log(password)
        document.getElementById("passId").value = password
    }
    else {
        alert("Please pick a number between 8 and 128")
    }

} ) 





// //--- Testing some ideas
// by puting the arrays in an object, I could skip over the one I dont want to include in the password.
// var passWord = {
//     num: passNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//     sym: passSym = ["!", "@", "#", "$", "%", "^", "&", "*", ":"],
//     up: passUp = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"],
//     low: passLow = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
// }

// var passwordAnswer = [] // the return array

// if (askNum === false) {
//     let i = 0
//     do {
//         //tyring to select a random array in the passWord object and a random index from that random array.
//         var pass = passWord[Math.floor(Math.random() * 10)];
//         // var something = pass[Math.floor(Math.random())];
//         // // then return that into passwordAnswer to then display to the user
//         // passwordAnswer.push(something);
//         // alert(passwordAnswer)
//         // console.log(something);
//         // console.log(pass)
//         i++;
//     }
//     while (i <= askLength)
// }


//conclusion: I still can't solve the issue of the user selecting multiple options let alone fairly generate a password for those options.