function compiler(scheme = null){

    let compiler = "";
    for(const [key, value] of Object.entries(scheme)){
            if (value["condition"]) {
                compiler += value.line;
        }
    }
    console.log(compiler);

    return compiler;
}
export default compiler;