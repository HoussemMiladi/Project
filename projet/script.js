//==================================================
function EstNum(a){
	let i=0
	while (a.charAt(i)<="9" && a.charAt(i)<="0" && a.length>i){
		i++
	}
	return i==a.length
}


function estCh(name){
	let i=0
	while ((name.toUpperCase()).charAt(i)<="Z" && (name.toUpperCase()).charAt(i)>="A" && name.length>i){
		i++
	}
	return i==name.length
}


//=====================================================

function verif_fname(){
	fname=document.getElementById("fname").value
	if (fname.length<=3 || fname.length>=30 || estCh(fname)==false ){
		alert("le prenom est incorrecte ! Resaisir ")
		return false
	}
	else{
		return true
	}
}

function verif_name(){
	name=document.getElementById("name").value
	if (name.length<=3 || name.length>=30 || estCh(name)==false ){
		alert("le nom est incorrecte ! Resaisir ")
		return false
	}
	else{
		return true
	}
}

function verif_num(){
	num=document.getElementById("num").value
	if (num.length!=8 && estNum(num)==false &&  num.charAt(0)=="0" || num.charAt(0)=="3" ||num.charAt(0)=="1" ){
		alert("le numero est incorrecte ! resaisir ")
		return false
	}
	else{
		return true
	}
}


function ver1(x){
	if (x.indexOf("@")==a.lastIndexOf("@")!=0 && x.indexOf(".")==x.lastIndexOf(".")!=0){
		return true
	}
	else{
		return false
	}
}

function ver2(x){
	let ch1=x.substring(0, x.indexOf("@"));
	let ch2=x.substring(x.indexOf("@")+1,x.indexOf("."))
	let ch3=x.substring(x.lastIndexOf(".")+1,x.length)
	if (ch1.length>3 && ch2.length>3 && ch3.length>=2 && ch3.length<=4){
		return true
	}
	else {
		return false
	}
}


function verif_email(){
	a=document.getElementById("email").value;
	if (ver1(a)==true && ver2(a)==true){
		return true
	}
	else {
		alert ("saisie une adress email valide ! ")
		return false
	}
}



function verif_rad(){
	r1=document.getElementById("r1").checked
	r2=document.getElementById("r2").checked
	if (r1==true || r2==true){
		return true
	}
	else{
		alert("il faut choisir un sexe")
		return false
	}
}







/*captcha*/
function captcha(){
	ch=""
	for (i=0;i<6;i++){
		ch=ch+(Math.floor(Math.random() * (10)) )
	}
	return ch
}


function verif_captcha(){
	a=document.getElementById("verifcaptcha").value
	if (a==ch){
		return true
	}
	else{
		alert("verifier le code captcha")
		refcaptcha()
		return false
	}
}


function refcaptcha(){
	document.getElementById("captcha").innerHTML=captcha()
}


/*verif total*/

function verif(){
	if (verif_rad()==true && verif_fname()==true && verif_name()==true && verif_num()==true && verif_email()==true && verif_captcha()==true){
		document.getElementById("send").innerHTML="Click Here !"
		return true;
	}
	else{
		return false;
	}
}

