function attr_append(attr, base_attributes = {}) {
        let attr_compiler = "";
        if (typeof attr === 'object') {
            attr = {...base_attributes, ...attr}
            for(const [key, value] of Object.entries(attr)){
                        attr_compiler += " "+key+"=\""+value+"\"";
                } 
             
            attr = attr_compiler;

        } else {
            attr= attr.split(" ");
            
            for(const [key, value] of Object.entries(attr)){


                for(const [k, v] of Object.entries(base_attributes)){                    

                    if (value.match(/k([^']*?)=([^']*?)\"([^']*?)\"/g)) {

                        let attr_string = value.match(/k([^']*?)=([^']*?)\"([^']*?)\"/g);
                        value = value.replace(/k([^']*?)=([^']*?)\"([^']*?)\"/g, "");
                        attr_string= attr_string.join("");
                        attr_string= attr_string.split(k+"=");
                        attr_string= attr_string.join("");
                        attr_string= attr_string.split("\"");
                        attr_string= attr_string.join("");
                        attr_compiler += " "+k+"=\""+attr_string+"\"";
                        

                    } else {
                        let attr_string = k+'="'+v+'" ';
                        attr_string += value+" ";
                        attr_compiler += attr_string;
                    }
                } 
            } 
        }
        
        return attr_compiler;
    }
    export default attr_append;