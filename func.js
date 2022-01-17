let piedra = document.querySelector(".piedra")
let papel = document.querySelector(".papel")
let tijera = document.querySelector(".tijera")
let eleccion = document.querySelector(".xd")
let reset = document.querySelector(".reset")
let x
//////


function getEleccion(){
	let n = Math.floor((Math.random() * (4-1) + 1))	
	console.log(n)
	if(n === 1){
		x = "piedra"
	}else if(n === 2){
		x = "papel"
	} else if(n === 3) {
		x = "tijera"
	}
}


function getResultado(y){
	getEleccion();
	if (x === "piedra" && y === 'papel'){
		eleccion.className = 'ganar'
		eleccion.innerHTML = `Ganaste! tu oponente sacó ${x}`
	} else if (x === "tijera" && y === 'piedra'){
		eleccion.className = 'ganar'
		eleccion.innerHTML = `Ganaste! tu oponente sacó ${x}`
	} else if (x === "papel" && y === 'tijera'){
		eleccion.className = 'ganar'
		eleccion.innerHTML = `Ganaste! tu oponente sacó ${x}`
	}else if (x === "piedra" && y === 'tijera'){
		eleccion.className = 'perder'
		eleccion.innerHTML = `Perdiste! tu oponente sacó ${x}`
	} else if (x === "tijera" && y === 'papel'){
		eleccion.className = 'perder'
		eleccion.innerHTML = `Perdiste! tu oponente sacó ${x}`
	} else if (x === "papel" && y === 'piedra'){
		eleccion.className = 'perder'
		eleccion.innerHTML = `Perdiste! tu oponente sacó ${x}`
	}else if (x === "piedra" && y === 'piedra'){
		eleccion.className = 'empate'
		eleccion.innerHTML = `Empataste! tu oponente sacó ${x}`
	} else if (x === "tijera" && y === 'tijera'){
		eleccion.className = 'empate'
		eleccion.innerHTML = `Empataste! tu oponente sacó ${x}`
	} else if (x === "papel" && y === 'papel'){
		eleccion.className = 'empate'
		eleccion.innerHTML = `Empataste! tu oponente sacó ${x}`
	}
 }

function clearReset(){
	eleccion.innerHTML = '';

}


reset.addEventListener("click",()=>clearReset())
piedra.addEventListener("click",()=>getResultado('piedra'));
papel.addEventListener("click",()=>getResultado('papel'));
tijera.addEventListener("click",()=>getResultado('tijera'));