document.onclick = function(element){ 
		var parent = element.target;
		while(parent!=undefined){
		
			if(parent.id === "buyOrdersTable" || parent.id === "sellOrdersTable")	
            {
				if(parent.id==="buyOrdersTable"){
					$("button:contains('Buy')")[0].click();$("button:contains('Confirm')")[1].click();
                }
				else if(parent.id ==="sellOrdersTable"){
					$("button:contains('Sell')")[0].click();$("button:contains('Confirm')")[1].click();
                }
				break;
            }
			else{

				parent = parent.parentElement;
				continue;
            }
        }
};
