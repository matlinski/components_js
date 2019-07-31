<?php

function Alert($input = "") {
$base_class = "alert";
$default = [
                "content"   =>   "Content placeholder",
                "tag"       =>   "div",
                "attr"      =>   "",
                "template"  =>   "alert-warning fade show",
                "dismisable"=>   true,
                "style"     =>   "",
                "script"    =>   ""
            ];

foreach(Component($input, $default, $base_class) as $key => $value) {
     $$key = $value;
}

$scheme =   [
               [
                    "condition" => true,
                    "line"      => html($tag,"id='$id' class='$base_class 
                    $template' ".attr_append($attr, [
                         "role" =>  "alert"
                    ])
                    )
               ],
               [
                    "condition" => true,
                    "line"      => $content
               ],
               [
                    "condition" => $dismisable,
               "line"      => html('button', ['type'=>'button','class'=>'close', 'data-dismiss'=>'alert','aria-label'=>'Close']).
                                        html('span',['aria-hidden'=>'true']).'&times;'.html('span','/').
                              html('button', '/')
               ],
               [
                    "condition" => !empty($script),
                    "line"      => html('script').$script.html('script','/')
               ],
               [
                    "condition" => !empty($style),
                    "line"      => html('style').$style.html('style','/')
               ],
               [
                    "condition" => true,
                    "line"      => html($tag,'/')
               ],
            ];
            
return Compiler($base_class, $scheme);
}

?>
