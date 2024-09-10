const fs = require("fs")

const arreglo = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
let condicion = "number"

function crearArreglo(x, y) {
    if (y === "string"  || y === "number"  || y === "boolean"  || y === "bigint"){
    let nuevoArreglo = x.filter((e) => typeof(e) === y)
    nuevoArreglo = nuevoArreglo.sort(function(a, b){return a - b});
    nuevoArreglo = [...new Set(nuevoArreglo)]
    return nuevoArreglo;
}
    else{
        throw new Error()
        
    }}


try{
    const nuevo = crearArreglo(arreglo, condicion)
    const file = fs.writeFileSync("doc.txt", nuevo.toString())

 }
catch (e) {
    console.log("Error!")
}




    
