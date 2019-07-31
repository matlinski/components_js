<?php
function info($settings =false) {
    $compiler = "";
    $compiler2 = "";
    $compiler .= "console.log('The default options for this components are: ');\n
    var settings = {};\n";

    if (is_array($settings)) {

        foreach ($settings as $key => $value) {

            if (is_array($value)) {
                $compiler .= "settings.".$key." = "."{};\n";

                foreach($value as $k2 => $v2) {
                    $compiler .= "settings.".$key."[".$k2."] = "."\"$v2\";\n";
                }
            }   else  {

                if (empty($value)) {
                    $compiler .= 'settings.'.$key.' = "/* '.$key.' goes here */";';
                    
                }   else    {
                    $compiler .= "settings.".$key." = "."\"$value\";\n";
                }
            } 
        }
    }
    $compiler .= "console.table(settings);\n";
    return $compiler;
}
?>