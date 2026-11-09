let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const myLeadUl = document.getElementById("my-leads-ul");

myLeads = JSON.parse(localStorage.getItem("myLeadsLs")) || [];
rendersLeads();


inputBtn.addEventListener("click", function(){
	myLeadUl.textContent = "";
	let newLead = inputEl.value;
	myLeads.push(newLead);

	localStorage.setItem("myLeadsLs", JSON.stringify(myLeads));

	inputEl.value = "";
	rendersLeads()
})

function rendersLeads(){

	let toHtml=""
	for (let i=0;i<myLeads.length;i++){
			//myLeadUl.innerHTML += "<li>"+myLeads[i]+"</li>" ;
			toHtml += `
			<li>
				<a target='_blank' href='${myLeads[i]}'>
				${myLeads[i]}
				</a>
			</li>`
		}
	myLeadUl.innerHTML += toHtml;

}

let gtagButton = document.getElementById("gtag-btn");

gtagButton.addEventListener("click", function(){
	console.log("gtag clicked");
	gtag("event","purchase", {
		currency: "EUR",
		value: 25
	})
});
