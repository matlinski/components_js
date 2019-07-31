<?php

function Badge($input = "") {
$base_class = "badge";

$default = [
                "content"   =>  "Content placeholder",
                "tag"       =>  "span",
                "attr"      =>  "",
                "template"  =>  "badge-primary",
                "style"     =>  "",
                "script"    =>  ""
            ];
foreach(Component($input, $default, $base_class) as $key => $value) {
    $$key = $value;
}
           
$scheme =   [
                [
                    "condition" => $tag === "span",
                    "line"      => html('span',"id='$id' class='$base_class 
                                        $template' ".attr_append($attr)
                                        ).$content
                ],
                [
                    "condition" => $tag === "span" && !empty($script),
                    "line"      => html('script').$script.html('script','/')
                ],
                [
                        "condition" => $tag === "span" && !empty($style),
                        "line"      => html('style').$style.html('style','/')
                ],
                [
                    "condition" => $tag === "span",
                    "line"      => html('span','/')
                ],
                [
                    "condition" => ($tag === "a"),
                    "line"      => html('a',"id='$id' class='$base_class 
                        $template' ".attr_append($attr,["href"=>"#"])
                    ).$content
                ],
                [
                    "condition" => $tag === "a" && !empty($script),
                    "line"      => html('script').$script.html('script','/')
                ],
                [
                        "condition" => $tag === "a" && !empty($style),
                        "line"      => html('style').$style.html('style','/')
                ],
                [
                    "condition" => $tag === "a",
                    "line"      => html('a','/')
                ],
            ];
return Compiler($base_class, $scheme);
}

?>
