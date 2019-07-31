function compiler(scheme = null){

    let compiler = "";
    
    scheme.forEach(function(value){
            if (value["condition"]) {
                compiler += value["line"];
        }
    })
    return compiler;
}
export default compiler;