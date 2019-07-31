<?php

function Navbar($input = "") {
$base_class = "navbar";

$default = [
            "content"   =>  html('h1',['class'=>'navbar-brand']).
                                'Content placeholder'.
                            html('h1','/'),
            "attr"      =>  "",
            "template"  =>  "navbar-light bg-light",
            "style"     =>  "",
            "script"    =>  ""
        ];

        foreach(Component($input, $default, $base_class) as $key => $value) {
            $$key = $value;
       }
       
       $scheme =   [
                      [
                           "condition" => true,
                           "line"      => html('nav',"id='$id' class='$base_class 
                           $template' ".attr_append($attr)
                           )
                      ],
                      [
                           "condition" => true,
                           "line"      => $content
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
                           "line"      => html('nav','/')
                      ],
                   ];
                   
       return Compiler($base_class, $scheme);
}

?>