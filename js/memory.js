var image=[];
image[0]="image/image0.png";
image[1]="image/image1.jpg";
image[2]="image/image2.png";
image[3]="image/image3.png";
image[4]="image/image4.png";
image[5]="image/image5.png";
image[6]="image/image6.png";
image[7]="image/image7.png";

var previous,current;
var previousid,currentid;
var count=0;

/*function original(ids)                                  //apply restriction over this for mouseout
{

	document.getElementById(ids).src="image/pattern.jpg";


}*/

/*function changehover(changeit)
{
	var x=changeit.split("-");
	if (x[1]-1 <8) 
	{
		document.getElementById(changeit).src=image[x[1]-1];
	}

	else
	{
		document.getElementById(changeit).src=image[x[1]-9];                 //need to change
	}
	
	window.setTimeout(function (){document.getElementById(changeit).src="image/pattern.jpg"},250);
}*/


function change(changeit)
{
	var x=changeit.split("-");


	//if(count%2==0)
	//{
		//previous=changeit;    //changeit is the id ..and ids are not same image[id[1]-1]
		//console.log(count);
		if(count>1)
		{
			previous=current;
			previousid=currentid;
		
			if(x[1]-1<8)
			{
				current=image[x[1]-1];
				document.getElementById(changeit).src=image[x[1]-1];

			}
			else
			{
				current=image[x[1]-9];
				document.getElementById(changeit).src=image[x[1]-9];
			}
			currentid=changeit;
			count++;
			window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);
	  }
	  else if(count==0)          //when 1st and 2nd turn
	  {
	  	if(x[1]-1<8)
			{
				previous=image[x[1]-1];
				document.getElementById(changeit).src=image[x[1]-1];

			}
			else
			{
				previous=image[x[1]-9];
				document.getElementById(changeit).src=image[x[1]-9];
			}
			previousid=changeit;
			count++;
			window.setTimeout(function (){document.getElementById(previousid).src="image/pattern.jpg"},500);
	  }
	  else if(count==1)
	  {
	  	if(x[1]-1<8)
			{
				current=image[x[1]-1];
				document.getElementById(changeit).src=image[x[1]-1];

			}
			else
			{
				current=image[x[1]-9];
				document.getElementById(changeit).src=image[x[1]-9];
			}
			currentid=changeit;
			count++;
			window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);
	  }

	// else
	// {
	// 	//console.log(count);
	// 	if(x[1]-1<8)
	// 	{
	// 		current=image[x[1]-1];
	// 		document.getElementById(changeit).src=image[x[1]-1];

	// 	}
	// 	else
	// 	{
	// 		current=image[x[1]-9];
	// 		document.getElementById(changeit).src=image[x[1]-9];
	// 	}
	// 	currentid=changeit;
	// 	count++;
	// 	window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);

	// }


	if(count>1)
	{
		if(previous==current && previousid != currentid)						//so that on 2 clicks over the same div it should not click.
		{
		//document.getElementById(previousid).src='image/tick.png';
		//document.getElementById(currentid).src='image/tick.png';
		console.log(count);
		console.log(previousid);
		console.log(currentid);
		console.log(previous);
		console.log(current);
			
			// document.getElementById(previousid).disabled=true;
			// document.getElementById(currentid).disabled=true;
			document.getElementById(previousid).onclick="";
			document.getElementById(currentid).onclick="";
			document.getElementById(previousid).src=previous;
			document.getElementById(currentid).src=current;
			document.getElementById(changeit).id=" ";

		// document.getElementById(previousid).setAttribute('disabled','disabled');
		// document.getElementById(currentid).setAttribute('disabled','disabled');

		// $("previousid").attr("disabled","disabled");
		// $("currentid").attr("disabled","disabled");

		}
		else if(previous!=current && previousid!=currentid)
		{
		//console.log(count);
		console.log(previousid);
		console.log(currentid);
		console.log(previous);
		console.log(current);
			document.getElementById(previousid).src=previous;
			document.getElementById(currentid).src=current;
			window.setTimeout(function (){document.getElementById(previousid).src="image/pattern.jpg"},500);
			window.setTimeout(function (){document.getElementById(currentid).src="image/pattern.jpg"},500);  
		}

	}

	// if(document.getElementById("box-1")==document.getElementById("box-2")==document.getElementById("box-3")==document.getElementById("box-4")==document.getElementById("box-5)
	// 	==document.getElementById("box-6")==document.getElementById("box-7")==document.getElementById("box-8")==document.getElementById("box-9")==document.getElementById("box-10)
	// 	==document.getElementById("box-11")==document.getElementById("box-12")==document.getElementById("box-13")==document.getElementById("box-14")==document.getElementById("box-15)
	// 	==document.getElementById("box-16")){

	// 	console.log("winnnneeeeerrr");
	// }
}


/*
function clicked(change)
{
	if(count%2==0)
	{
		previous=change;
		count++;
	}
	else
	{
		current=change;
		count++;
	}

	if(previous==current)
	{
		document.getElementById(previous).src='image/tick.png';
		document.getElementById(current).src='image/tick.png';
	}

}*/

/*function change1(changeit1)
{
	document.getElementById(changeit1).src=image[0];
}

function change2(changeit2)
{
	document.getElementById(changeit2).src=image[1];
}

function change3(changeit3)
{
	document.getElementById(changeit3).src=image[2];
}

function change4(changeit4)
{
	document.getElementById(changeit4).src=image[3];
}

function change5(changeit5)
{
	document.getElementById(changeit5).src=image[4];
}

function change6(changeit6)
{
	document.getElementById(changeit6).src=image[5];
}

function change7(changeit7)
{
	document.getElementById(changeit7).src=image[6];
}

function change8(changeit8)
{
	document.getElementById(changeit8).src=image[7];
}

*/

/*function clicked1("boxclicked)
{
	document.getElementById("boxclicked).src=image[0];
	document.getElementById("boxclicked).disabled=true;

}*/