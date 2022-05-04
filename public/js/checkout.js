function getInfo() {
	var username = document.getElementById('fname').value
	var password = document.getElementById('lname').value
    var password = document.getElementById('address').value
    var password = document.getElementById('city').value
    var password = document.getElementById('state').value
    var password = document.getElementById('zipcode').value


let accounts = [];

const accountAdd = (ev)=>{
	ev.preventDefault();

	let account =
	 {
		username: document.getElementById("username").value,
		password: document.getElementById("password").value,
	 }


accounts.push(account);
document.forms[0].reset();


console.warn('added' , {accounts} );
let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(accounts, '\t', 2);

localStorage.setItem('accountsList', JSON.stringify(accounts) );
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', accountAdd);
});

}