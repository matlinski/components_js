import info from '../utilities/info.js'
import rand from '../utilities/rand.func.js'

function Component(input, def, base_class) {
    let output = [];
    if (typeof input === 'string') {
       var s = JSON.parse(input); 
    } 

    if (/*json_last_error() != JSON_ERROR_NONE && */!Array.isArray(input)) { //not sure how to replace it

        if (input) {
            def["content"] = input;
        }
        info(base_class, def);

    }  else if (Array.isArray(input)) {
        
        output = [];
        let i = 0;
        for(const [key, value] of Object.entries(def)){

            if (isNaN(key)) {

                if (i >= input.length) {
                   break; 
                }
                def[key] = input[i];
                i++;

            }   else    {

                input.forEach (function(v, k){
                    def[k] = v;
                }) 
            }
        } 

    }  else  {      
        def = def;

        s.forEach(function(value, key){
            def[key] = value;
        }) 
    }
    output["id"] = base_class;
    const id_supply = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x',
    'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y',
    'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J',
    'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    for(let i = 0; i < 8; i++) {
        output["id"] += id_supply[rand(0, (id_supply.length - 1))];
    }
    
    for(const [key, value] of Object.entries(def)){
        output[key] = value;
    } 

    if (typeof trigger_id !== 'undefined' && trigger_id.length > 0) {
        output["id"] = trigger_id;
    }

    if (Array.isArray(output["style"])) {
        let style_compiler = "";
        
        style.forEach(function(value, key){
            key = key.replace("/[&]/", "");
            style_compiler += "#".output["id"]+".{base_class}key{\n"+value+"\n}";
        }) 
        output["style"] = style_compiler;

    } else {

        let style_compiler = "";
        output["style"] = output["style"].replace("/[&]/", "#"+output["id"]+".{base_class}");
        output["style"] = style_compiler;
    }
    if (Array.isArray(output["script"])) {
        let script_compiler = "";
        
        output["script"].forEach(function(value, key){
            key = key.replace("/[&]/", "", );
            script_compiler += '(\'#'+output["id"]+'\')';
        }) 
        output["script"] = script_compiler;

    } else {

        let script_compiler = "";
        output["script"] = output["script"].replace("/[&]/", '(\'#'+output["id"]+'\')');
        output["script"] = script_compiler;
    }
    console.log(output);
    return output;
}
export default Component;