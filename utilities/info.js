function info(base_class,settings =false) {
    compiler = "";
    compiler2 = "";
    console.log(' ####################');
    console.log(' #### '+base_class.toUpperCase()+" ####"+"#".repeat((10 - base_class.length)));
    console.log(' ####################');
    console.log('The default options for this components are: ');
    var settings = {};

    if (Array.isArray(settings)) {

        settings.forEach (function(value, key){

            if (is_array(value)) {
                settings.key = {};

                value.forEach(function(k2, v2){
                    settings.key[k2] = v2;
                }) 
            }   else  {

                if (!value) {
                    compiler += settings.key = "/* "+key+" goes here */";
                    
                }   else    {
                    compiler += "settings."+key+" = "+value;
                }
            } 
        }) 
    }
    console.table(settings);
}
export default info;