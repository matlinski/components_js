function attr_append(attr, base_attributes = []) {
        attr_compiler = "";

        if (is_array(attr)) {

            attr.forEach(function(key, value){

                base_attributes.forEach(function(v,k){

                    if (key === k) {
                        attr_compiler += " "+k+"=\""+value+"\"";
                        
                    }   else    {
                        attr_compiler += " "+k+"=\""+v+"\"";
                        attr_compiler += " "+key+"=\""+value+"\"";
                    }
                }) 
                if (!base_attributes) {
                    attr_compiler += " "+key+"=\""+value+"\"";
                } 
            }) 
            attr = attr_compiler;

        } else {
            attr= attr.split(" ");

            attr.forEach (function(value){

                base_attributes.forEach (function(v, k){

                    if (preg_match("/k([^']*?)=([^']*?)\"([^']*?)\"/", value)) {

                        attr_string = value.match("/k([^']*?)=([^']*?)\"([^']*?)\"/");
                        value = value.replace("/k([^']*?)=([^']*?)\"([^']*?)\"/", "");
                        attr_string= attr_string.join("");
                        attr_string= attr_string.split(k+"=");
                        attr_string= attr_string.join("");
                        attr_string= attr_string.split("\"");
                        attr_string= attr_string.join("");
                        attr_compiler += " "+k+"=\""+attr_string+"\"";

                    } else {
                        attr_string = k+'="'+v+'" ';
                        attr_string += value+" ";
                        attr_compiler += attr_string;
                    }
                }) 
            }) 
        }
        return attr_compiler;
    }
    export default attr_append;