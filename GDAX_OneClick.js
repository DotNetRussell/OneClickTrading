document.onclick = 
function()
{ 
	var btc=document.getElementById("btcbutton").innerText;
	if(btc=="0.00000000")
	{
		document.getElementById("usdbutton").click();
	}
	else
	{ 
		document.getElementById("btcbutton").click();
	} 
	document.getElementById("subbutton").click()
};
