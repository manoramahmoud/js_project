var productsBuy = document.querySelectorAll(".card .card-body");
var table = document.querySelector("table");
var button = document.querySelector('.div button');
var sum = 0;
productsBuy.forEach(function (item, i) {
    item.addEventListener("click", function () {
       
        table.style.display = "block"
        productName = document.querySelectorAll('.card-text')[i].textContent
        productprice = document.querySelectorAll('.card-title')[i].textContent
        sum +=parseInt(productprice)
        table.innerHTML += "<td class='table-light'>" + productName + "</td>" + "<td class='table-secondary'>" + productprice + "</td>"
        if (table.innerHTML != "") {

            button.style.visibility = "visible"
          

        }

    })


})
button.onclick = function(){
    document.querySelector(".alert").style.visibility ="visible"
    document.querySelector(".alert").innerHTML = "Your total Cost is " + sum
}