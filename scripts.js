const myButton = document.querySelector(".my-button")

function generateNumber() {
    const min = Math.floor(document.querySelector(".min").value)
    const max = Math.ceil(document.querySelector(".max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (min < max) {
        alert(result)
    }else{
        alert("o valor minimo tem que ser menor que o valor máximo!")
    }
}
myButton.addEventListener("click", generateNumber)