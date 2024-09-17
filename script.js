function firstWord(s) {
  s=s.trim();

	const index = s.indexOf(' ');
	if(index === -1){
		return s;
	}
	else{
		return s.substring(0,index);
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 
