var gadjets = [
    {
        img : "vivo.jpeg",
        brand : "vivo",
        model : "vivo s1",
        cost : "20,000" , 
    },
    {
        img : "oppo.jpg",
        brand : "oppo",
        model : "oppo A9 ",
        cost : "18,000" , 
    },
    {
        img : "nokia6.1.jpg",
        brand : "nokia",
        model : "nokia6.1 plus ",
        cost : "18,000" , 
    },
]
var p = document.getElementById("phone");
var pro = "";
for (product of gadjets){
    pro += "<div class='prod'><img src ='images/"+product.img+"'><div class ='brand'>"+product.brand+"</div><div class='model'>"+product.model+"</div><div class = 'cost'>"+product.cost+"</div></div>"
}
phone.innerHTML = pro;