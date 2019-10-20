//---- Getting the information
document.getElementById("genButton").addEventListener("click",function(){
    var askLength = prompt("Select a character lenght between 8 and 128")
    var askSpecial = confirm("Would you like special characters in your password")
    var askLower = confirm("Would you like lower case characters in your password")
    var askUpper = confirm("Would you like upper case characters in your password")
    var askNum = confirm("Would you like numbers in your password")

    var passpass = [] //to return the loops to user
    
    // codes for the different conditions
    
    if (askNum === false) {
        for (var i = 0; i < askLength; i++) {
            var passDone = notNum[Math.floor(Math.random() * notNum.length)];
            passpass.push(passDone);
            alert(passpass);
            console.log(passDone); 
        }
    }
    else if (askSpecial === false) {
        for (let i = 0; i < askLength; i++) {
            var passDone = notSpec[Math.floor(Math.random() * notSpec.length)];
            passpass.push(passDone);
            alert(passpass);
            console.log(passDone)
        }
    }
    else if (askLower === false) {
        for (let i = 0; i < askLength; i++) {
            var passDone = notLower[Math.floor(Math.random() * notLower.length)];
            passpass.push(passDone);
            alert(passpass);
            console.log(passDone)
        }
    }
    else if (askUpper === false) {
        for (let i = 0; i < askLength; i++) {
            var passDone = notCap[Math.floor(Math.random() * notCap.length)];
            passpass.push(passDone);
            alert(passpass);
            console.log(passDone)
        }
    }
    else {
        alert("Must select password parameters")
    }
})

// ---- array for different answers
var notNum = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
    "!", "@", "#", "$", "%", "^", "&", "*"]
var notSpec = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var notLower = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
    "!", "@", "#", "$", "%", "^", "&", "*",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var notCap = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    "!", "@", "#", "$", "%", "^", "&", "*"]





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