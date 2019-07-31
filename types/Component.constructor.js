<?php
function Component($input, $default, $base_class) {

    if (is_string($input)) {
       $s = json_decode($input, true); 
    } 

    if (json_last_error() != JSON_ERROR_NONE && !is_array($input)) {
        $settings = $default;

        if ($input) {
            $settings["content"] = $input;
        }
        echo 
            "<script>".
                "console.log(' ####################');".

                "console.log(' #### ".strtoupper($base_class).
                    " ####".str_repeat("#", (10 - strlen($base_class)))."');".

                "console.log(' ####################');".info($settings).
            "</script>";

    }  elseif (is_array($input))     {
        
        $output = [];
        $settings = $default;
        $i = 0;

        foreach($settings as $key => $value) {

            if (!(array_keys($input) !== range(0, count($input) - 1))) {

                if ($i >= count($input)) {
                   break; 
                }
                $settings[$key] = $input[$i];
                $i++;

            }   else    {

                foreach ($input as $k => $v) {
                    $settings[$k] = $v;
                }
            }
        }

    }  else  {      
        $settings = $default;

        foreach($s as $key => $value) {
            $settings[$key] = $value;
        }
    }
    $output["id"] = $base_class;
    $id_supply = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x',
    'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y',
    'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J',
    'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    for($i = 0; $i < 8; $i++) {
        $output["id"] .= $id_supply[rand(0, (count($id_supply) - 1) )];
    }
    
    foreach($settings as $key => $value) {
        $$key = $value;
        $output[$key] = $value;
    }

    if (isset($trigger_id) && !empty($trigger_id)) {
        $output["id"] = $trigger_id;
    }

    if (is_array($style)) {
        $style_compiler = "";
        
        foreach($style as $key => $value) {
            $key = preg_replace("/[&]/", "", $key);
            $style_compiler .= "#".$output["id"].".{$base_class}$key{\n".$value."\n}";
        }
        $style = $style_compiler;

    } else {

        $style_compiler = "";
        $style = preg_replace("/[&]/", "#".$output["id"].".{$base_class}", $style);
        $style_compiler .= $style;
        $style = $style_compiler;
    }
    if (is_array($script)) {
        $script_compiler = "";
        
        foreach($script as $key => $value) {
            $key = preg_replace("/[&]/", "", $key);
            $script_compiler .= '$(\'#'.$output["id"].'\')';
        }
        $script = $script_compiler;

    } else {

        $script_compiler = "";
        $script = preg_replace("/[&]/", '$(\'#'.$output["id"].'\')', $script);
        $script_compiler .= $script;
        $script = $script_compiler;
    }
    $output["style"] = $style;
    $output["script"] = $script;
    return $output;
}   

?>
