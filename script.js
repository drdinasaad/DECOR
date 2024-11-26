// var allproducts = document.querySelectorAll("#buy")
var buy = document.querySelectorAll("#buy")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var totalPrice = 0
var del = document.querySelector("#del")
var pr = document.querySelector("#pr")

buy.forEach(function(buy){
buy.onclick = function() {
    totalPrice += +(buy.getAttribute("price"))
    content.innerHTML += buy.getAttribute("name") + "<br>"
    if(content.innerHTML !== "") {
        btn1.style.display = "block"
        del.style.display = "block"
        content.style.display = "block"

        btn1.style.backgroundColor = "darkblue"
    }
}
})

btn1.onclick = function() {
    pr.innerHTML=(totalPrice)
}
del.onclick = function() {
     content.innerHTML = ""
     pr.innerHTML=""
    //  del.style.display="block"
     totalPrice = 0
}
