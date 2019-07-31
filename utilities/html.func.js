function html(tag="div", attr=""){
    let compiler = "";
    compiler += '<'+tag;
    if(tag){
        if(typeof attr === 'object'){
            for(const [key, value] of Object.entries(attr)){
                compiler += ' '+key+'=\''+value+'\'';
            }
        }
        if(typeof attr !== 'object' && attr !== "/") {
                compiler += ' '+attr;
        }
        compiler += '>';
        if(attr === "/") {
            compiler = '</'+tag+'>';
        }
        if(tag === "/") {
            compiler = '</div>';
        }
        return compiler;
    }
}
export default html;