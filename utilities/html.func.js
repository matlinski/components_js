function html(tag="div", attr=""){
    let compiler = "";
    compiler += '<'.tag;
    if(tag){
        if(Array.isArray(attr) && attr[0]){
            attr.forEach(function(value){

                compiler += ' '+value;
            })
        }
        if(Array.isArray(attr) && !attr[0]){
            attr.forEach(function(value){

                compiler += ' '+key+'=\''+value+'\'';
            })
        }
        if(!Array.isArray(attr) && attr !== "close") {
            compiler += ' '+attr;
        }
        compiler += '>';
        if(attr === "/") {
            compiler = '</'+tag+'>';
        }
        if(tag === "/") {
            compiler = '</div>';
        }
        console.log(compiler);        
        return compiler;
    }
}
export default html;