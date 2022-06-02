


let expr = "([{{}}])";

function checkBalanced(exp){
	let stack  = [];

	for(let i=0;i<exp.length;i++){
		let x = exp[i];
		if(x=="("||x=="["||x=="{"){
			stack.push(x);
			continue
		}
		if(stack.length==0){
			return false
		}
		
		let check;
		switch(x){
			case ')':
				check = stack.pop();
				if(check=="["||check=="{")
				return false
				break;
			case ']':
				check = stack.pop();
				if(check=="("||check=="{")
				return false
				break;
				
			case '}':
				check = stack.pop();
				if(check=="["||check=="(")
				return false
				break;
		}

		
	}
	return stack.length==0;
}

console.log(checkBalanced(expr));
