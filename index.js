const arreglo = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
let condicion = "string"

function crearArreglo(x, y) {
    let nuevoArreglo = []
    for (let i = 0; i < x.length; i++){
        if (typeof(x[i]) === y){
            
            nuevoArreglo.push(x[i]);
        }
        
    }
    return nuevoArreglo;
}

function ordenarArreglo(x) {
    let nuevoArreglo = []
    for (let i = 0; i < x.length; i++){
        if (typeof(x[i]) === y){
            
            nuevoArreglo.push(x[i]);
        }
        
    }
    return nuevoArreglo;
}

const nuevo = crearArreglo(arreglo, condicion).sort(function(a, b){return a - b})


for (let i = 0; i < nuevo.length; i++){
    
    console.log(nuevo[i])    
    
}