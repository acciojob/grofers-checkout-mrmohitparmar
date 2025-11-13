const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => {
//Add your code here
	
let table = document.querySelector(".table1");
let price = document.querySelectorAll(".price");
let length = price.length;
let sum= 0;
for (let i = 0; i < length; i++) {
sum = sum + Number(price[i].innerText);

}
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
	td1.innerText = "Total Value ";
	td2.innerText = sum;
	td.id = "ans";
	tr.append(td1);
	tr.append(td2);
	table.append(tr);
	
  
};

getSumBtn.addEventListener("click", getSum);

