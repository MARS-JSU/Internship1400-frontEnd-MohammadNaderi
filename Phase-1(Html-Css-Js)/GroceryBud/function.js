var selctedItem;
var size = 0;
	function funcLoad()
	{
		if(localStorage.getItem("size") == null)
		{
			localStorage.setItem("size", 0);
		}
		else
		{
			size = eval(localStorage.getItem("size"));
		}

		for(var i=1 ; i<=size ; i++)
		{
			var n = 'item'+i;
			var itemName = localStorage.getItem(n);

			var mytr = document.createElement('tr');
			mytr.innerHTML = "<td class='item'>"+itemName+"</td> <td class='icon' onclick='funcedit(this)'><img src='edit-icon.png'></td><td class='icon' onclick='funcDelete(this)'> <img src='delete-icon.png'></td>";
			var t = document.getElementById('mytable');
			t.appendChild(mytr);
		}
	}

	function funcSubmit()
	{
		ShowDlg('http://google.com');
		if(submitButton.value =='Submit')
		{
			var text = document.getElementById('txtBox').value;
			var mytr = document.createElement('tr');
			mytr.innerHTML = "<td class='item'>"+text+"</td> <td class='icon' onclick='funcedit(this)'><img src='edit-icon.png'></td><td class='icon' onclick='funcDelete(this)'> <img src='delete-icon.png'></td>";
			var t = document.getElementById('mytable');
			t.appendChild(mytr);
			document.getElementById('txtBox').value = "";

			size = size + 1;
			localStorage.setItem("size", size);
			var itemName = 'item'+size;
			localStorage.setItem( itemName, text);

		}
		else	//Edit
		{
			var text = document.getElementById('txtBox').value;
			selctedItem.innerHTML = document.getElementById('txtBox').value;
			document.getElementById('txtBox').value = "";
			submitButton.value ='Submit';

			var i=0;
			for( ; i<=size ; i++)
			{
				if(document.getElementById('mytable').getElementsByTagName('tr')[i] == selctedItem.parentNode)
					break;
			}
			i = i+1;
			var itemName = 'item'+i;
			localStorage.setItem( itemName, text);
		}
	}

	function funcedit(t)
	{
		submitButton.value ='Edit';
		document.getElementById('txtBox').value = t.previousSibling.previousSibling.innerText;
		selctedItem = t.previousSibling.previousSibling;
	}
	
	function funcDelete(s)
	{
		var i=0;
		for( ; i<=size ; i++)
		{
			if(document.getElementById('mytable').getElementsByTagName('tr')[i] == s.parentNode)
				break;
		}
		document.getElementById('mytable').removeChild(s.parentNode);
		for( i=i+1; i<=size-1 ; i++)
		{
			var itemName = 'item'+i;
			var itemName2 = 'item'+(i+1);
			localStorage.setItem( itemName, localStorage.getItem(itemName2));
		}
		localStorage.removeItem('item'+size);
		size = size-1;
		localStorage.setItem("size", size);
	}

	function funcClearItems()
	{
		var i=0;
		for( ; i<=size ; i++)
		{
			var itemName = 'item'+(i+1);
			localStorage.removeItem(itemName);
		}
		document.getElementById('mytable').innerHTML = " ";
		size = 0;
		localStorage.setItem('size' , 0);
	}