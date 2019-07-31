<?php
    function attr_append($attr, $base_attributes = []) {
        $attr_compiler = "";

        if (is_array($attr)) {

            foreach($attr as $key => $value) {

                foreach ($base_attributes as $k => $v) {

                    if ($key === $k) {
                        $attr_compiler .= " $k=\"$value\"";
                        
                    }   else    {
                        $attr_compiler .= " $k=\"$v\"";
                        $attr_compiler .= " $key=\"$value\"";
                    }
                }
                if (empty($base_attributes)) {
                    $attr_compiler .= " $key=\"$value\"";
                } 
            }
            $attr = $attr_compiler;

        } else {
            $attr= explode(" ",$attr);

            foreach ($attr as $key => $value) {

                foreach ($base_attributes as $k => $v) {

                    if (preg_match("/$k([^']*?)=([^']*?)\"([^']*?)\"/", $value)) {

                        $attr_string = preg_grep("/$k([^']*?)=([^']*?)\"([^']*?)\"/", [$value]);
                        $value = preg_replace("/$k([^']*?)=([^']*?)\"([^']*?)\"/", "", $value);
                        $attr_string= implode("",$attr_string);
                        $attr_string= explode("$k=",$attr_string);
                        $attr_string= implode("",$attr_string);
                        $attr_string= explode("\"",$attr_string);
                        $attr_string= implode("",$attr_string);
                        $attr_compiler .= " $k=\"$attr_string\"";

                    } else {
                        $attr_string = $k.'="'.$v.'" ';
                        $attr_string .= $value." ";
                        $attr_compiler .= $attr_string;
                    }
                }
            }
        }
        return $attr_compiler;
    }
?>