function info(base_class,settings =false) {
    console.log(' ####################');
    console.log(' #### '+base_class.toUpperCase()+" ####"+"#".repeat((10 - base_class.length)));
    console.log(' ####################');
    console.log('The default options for this components are: ');

    if (typeof settings === 'object') {

        for(let [key, value] of Object.entries(settings)){
            if (value == '') {
                settings[key] = key+" goes here"; 
            }
        } 
    }
    
    console.table(settings)
}
export default info;