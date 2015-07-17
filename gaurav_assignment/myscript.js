

function validate()
{
var fn1,ln1,pass1,email1,con1,gen1,country1,tech1,addr1;

	fn1=document.getElementById("fn");
	ln1=document.getElementById("ln");
	pass1=document.getElementById("pw");
	email1=document.getElementById("eid");
	con1=document.getElementById("cn");
	tech1=document.getElementById("skill");
	addr1=document.getElementById("add");
    fner1=document.getElementById("fn_er");






	var s=checkblank(fn1,ln1,pass1,email1,con1,addr1);
     if(s.value==0)
     {


	 }
	 else
	 {

 //validation for firstname

			if(fn1.value.length>=15 || fn1.value.length<=2 )
			{
				fn_er.style.display="inline";
				fn_er.innerHTML="ONLY 2 to 15 CHARATERS ALLOWED";

			}
			else
			{
				  if((fn1.value).match(/\d/))
					{
						fn_er.style.display="inline";
						fn_er.innerHTML="ONLY CHARATERS ALLOWED";

					}
					else if((fn1.value).match(/\s/))
					{
						 fn_er.style.display="inline";
						 fn_er.innerHTML="SPECIAL CHARATERS NOT ALLOWED";
					}
					else
					{
						 fn_er.style.display="inline";
						 fn_er.innerHTML="";
			        }
			}


 //validation for lastname

			if(ln1.value.length>=15 || ln1.value.length<=2 )
				{
					ln_er.style.display="inline";
					ln_er.innerHTML="ONLY 2 to 15 CHARATERS ALLOWED";

				}
				else
	            {
					if((ln1.value).match(/\d/))
						{
							ln_er.style.display="inline";
							ln_er.innerHTML="ONLY CHARATERS ALLOWED";

						}
						else if((ln1.value).match(/\s/))
						{
							 ln_er.style.display="inline";
							 ln_er.innerHTML="SPECIAL CHARATERS NOT ALLOWED";
						}
						else
						{
							 ln_er.style.display="inline";
							 ln_er.innerHTML="";
						}

		     	}



//validation for mail

   eid_er.innerHTML="";

//validation for password
            if(pass1.value.length>=16 || pass1.value.length<5)
            {
			  pw_er.style.display="inline";
			  pw_er.innerHTML="ONLY 5 TO 16 CHARATERS ALLOWED";

			}
			else
			{
				pw_er.innerHTML="";
			}




		       if(isNaN(con1.value))
		 	         {

		             con_er.style.display="inline";
		 			con_er.innerHTML="ONLY NUMBER IS ALLOWED";
		 	  	   }
		 	  	   else
		 	  	   {
		 			 if(con1.value.length!=10)
		 			 {
		 			  con_er.innerHTML="ONLY 10 DIGITS ARE ALLOWED";

		 			 }
		 			 else
		 			 {
		  			 con_er.innerHTML="";

		 			 }

		            }


		 changesize();
	 }

}



function checkblank(fn1,ln1,pass1,email1,con1,addr1)
{
	var flag=0;
		if(fn1.value=="")
		{
			fn_er.style.display="inline";
			fn_er.innerHTML="FNAME SHOULD NOT BE BLANK";
            flag=1;
		}

    	if(ln1.value=="")
		{
			ln_er.style.display="inline";
			ln_er.innerHTML="LASTNAME SHOULD NOT BE BLANK";
           flag=1;
	    }

	    if(pass1.value=="")
		{
		    pw_er.style.display="inline";
			pw_er.innerHTML="PASSWORD SHOULD NOT BE BLANK";
            flag=1;
	    }

	    if(email1.value=="")
		{
			eid_er.style.display="inline";
			eid_er.innerHTML="EMAIL-ID SHOULD NOT BE BLANK";
	        flag=1;
	    }

	    if(con1.value=="")
		{
			con_er.style.display="inline";
			con_er.innerHTML="CONTACT SHOULD NOT BE BLANK";
	        flag=1;
	    }

	    if(addr1.value=="")
		{
			add_er.style.display="inline";
			add_er.innerHTML="ADDRESS SHOULD NOT BE BLANK";
            flag=1;
	    }
	    return flag;

}

function changesize()
{
	document.getElementById("mq").style.width="50%";
	document.getElementById("fild").style.width="48%";

}
