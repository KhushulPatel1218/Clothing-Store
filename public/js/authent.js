
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


function validate()
        {
            if((document.getElementById("usernam").value == "workshop"
            && document.getElementById("passwor").value == "workshop") || 
			(document.getElementById("usernam").value == "Ek" &&
			document.getElementById("passwor").value == "Em"))
        {
             alert( "welcome back user " + document.getElementById("usernam").value);
            location.href="mens.html";
         }
        else
        {
        alert( "validation failed" );
    }
}


/*
function validate()
        {
			for(var i = 0; i < accounts.length; i++)
			{
            if(accounts.account.username.includes(document.getElementById("usernam").value) &&
			accounts.account.password.includes(document.getElementById("passwor").value))
        {
             alert( "welcome back user " + document.getElementById("usernam").value);
            location.href="groupproject.html";
         }
        else
        {
        alert( "validation failed" );
        }
			}
}
*/




//Ekene Emenanjor
