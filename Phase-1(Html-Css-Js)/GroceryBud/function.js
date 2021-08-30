var selctedItem;
	function funcSubmit()
	{
		if(submitButton.value =='Submit')
		{
			var text = document.getElementById('txtBox').value;
			var mytr = document.createElement('tr');
			mytr.innerHTML = "<td class='item'>"+text+"</td> <td class='icon' onclick='funcedit(this)'><img src='edit-icon.png'></td><td class='icon'> <img src='delete-icon.png'></td>";
			var t = document.getElementById('mytable');
			t.appendChild(mytr);
			document.getElementById('txtBox').value = "";
		}
		else
		{
			selctedItem.innerHTML = document.getElementById('txtBox').value;
			document.getElementById('txtBox').value = "";
			submitButton.value ='Submit';
		}
	}

	function funcedit(t)
	{
		submitButton.value ='Edit';
		document.getElementById('txtBox').value = t.previousSibling.previousSibling.innerText;
		selctedItem = t.previousSibling.previousSibling;
	}
	