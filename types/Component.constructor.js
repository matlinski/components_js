import * as info from '../utilities/info.js'
import * as rand from '../utilities/rand.func.js'

function Component(input, def, base_class) {

    if (typeof input === 'string') {
       var s = JSON.parse(input); 
    } 

    if (json_last_error() != JSON_ERROR_NONE && !Array.isArray(input)) { //not sure how to replace it
        settings = def;

        if (input) {
            settings["content"] = input;
        }
        info(base_class, settings);

    }  else if (Array.isArray(input)) {
        
        output = [];
        settings = def;
        i = 0;

        settings.forEach(function(value, key){

            if (!(array_keys(input) !== range(0, count(input) - 1))) {

                if (i >= count(input)) {
                   break; 
                }
                settings[key] = input[i];
                i++;

            }   else    {

                input.forEach (function(v, k){
                    settings[k] = v;
                }) 
            }
        }) 

    }  else  {      
        settings = def;

        s.forEach(function(value, key){
            settings[key] = value;
        }) 
    }
    output["id"] = base_class;
    id_supply = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x',
    'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y',
    'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J',
    'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    for(i = 0; i < 8; i++) {
        output["id"] += id_supply[rand(0, id_supply.lenght - 1)];
    }
    
    settings.forEach(function(value, key){
        key = value;
        output[key] = value;
    }) 

    if (trigger_id && trigger_id.lenght > 0) {
        output["id"] = trigger_id;
    }

    if (is_array(style)) {
        style_compiler = "";
        
        style.forEach(function(value, key){
            key = key.replace("/[&]/", "");
            style_compiler += "#".output["id"]+".{base_class}key{\n"+value+"\n}";
        }) 
        style = style_compiler;

    } else {

        style_compiler = "";
        style = style.replace("/[&]/", "#"+output["id"]+".{base_class}");
        style_compiler += style;
        style = style_compiler;
    }
    if (Array.isArray(script)) {
        script_compiler = "";
        
        script.forEach(function(value, key){
            key = key.replace("/[&]/", "", );
            script_compiler += '(\'#'+output["id"]+'\')';
        }) 
        script = script_compiler;

    } else {

        script_compiler = "";
        script = script.replace("/[&]/", '(\'#'+output["id"]+'\')');
        script_compiler += script;
        script = script_compiler;
    }
    output["style"] = style;
    output["script"] = script;
    return output;
}
export default Component;