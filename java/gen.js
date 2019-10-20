//---- Getting the information
var askLength = prompt("Select a character lenght between 8 and 128")
var askSpecial = confirm("Would you like special characters in your password")
var askLower = confirm("Would you like lower case characters in your password")
var askUpper = confirm("Would you like upper case characters in your password")
var askNum = confirm("Would you like numbers in your password")


var notNum = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
    "!", "@", "#", "$", "%", "^", "&", "*"]
var notSpec = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var notLower = [, "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
    "!", "@", "#", "$", "%", "^", "&", "*",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var notCap = ["q", "w", "e", "r", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    "!", "@", "#", "$", "%", "^", "&", "*"]







if (askNum === false) {
    for (var i = 0; i < askLength; i++) {
        var passDone = notNum[Math.floor(Math.random() * notNum.length)];
        console.log(passDone)
    }
}
else if (askSpecial === false) {
    for (let i = 0; i < askLength; i++) {
        var passDone = notSpec[Math.floor(Math.random() * notSpec.length)];
        console.log(passDone)

    }
}
else if (askLower === false) {
    for (let i = 0; i < askLength; i++) {
        var passDone = notLower[Math.floor(Math.random() * notLower.length)];
        console.log(passDone)
    }
}
else if (askUpper === false) {
    for (let i = 0; i < askLength; i++) {
        var passDone = notCap[Math.floor(Math.random() * notCap.length)];
        console.log(passDone)
    }
}
else {
    alert ("Must select password parameters")
}





