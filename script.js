function tipo(){
    return typeof true
}

console.log((tipo() == "boolean") == true)