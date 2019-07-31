<?php 
function compiler($base_class, $scheme = null){

    $compiler = "";
    
        foreach($scheme as $value){
            if ($value["condition"] === true) {
                    $compiler .= $value["line"];
            }
        }
    return $compiler;
}
?>