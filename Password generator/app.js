const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolset = "!@#$%^&*_-=+/?"


//selctors

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (DataSet) => {
    return DataSet[Math.floor(Math.random() * DataSet.length)]
}

const generatepassword = (password = '') => {

    if (upperInput.checked) {
        password += getRandomData(upperset)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerset)
    }
    if (numberInput.checked) {
        password += getRandomData(numberset)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolset)
    }
    if (password.length < totalChar.value ) {
        return generatepassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);

}

generatepassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatepassword();
    }

)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

