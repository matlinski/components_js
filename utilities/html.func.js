<?php
function html($tag="div", $attr=""){
    $compiler = "";
    $compiler .= '<'.$tag;
    if(!empty($tag)){
        if(is_array($attr) && isset($attr[0])){
            foreach($attr as $value){

                $compiler .= ' '.$value;
            }
        }
        if(is_array($attr) && !isset($attr[0])){
            foreach($attr as $key => $value){
                $compiler .= ' '.$key.'=\''.$value.'\'';
            }
        }
        if(!is_array($attr) && $attr !== "close") {
            $compiler .= ' '.$attr;
        }
        $compiler .= '>';
        if($attr === "/") {
            $compiler = '</'.$tag.'>';
        }
        if($tag === "/") {
            $compiler = '</div>';
        }
        return $compiler;
    }
}

?>