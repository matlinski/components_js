<?php

function Spinner($input = "") {
$base_class = "spinner";

$default = [
                "radius"    =>  "2rem",
                "attr"      =>  "",
                "template"  =>  "spinner-border",
                "style"     =>  "",
                "script"    =>  ""
            ];

            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' class='$base_class 
                               $template' style='width:".$radius."; height:".$radius.
                               "' ".attr_append($attr, [
                                                         "role"=>"status"
                                                     ])).
                                                  html('span', ['class'=>'sr-only']).
                                                       'Loading...'.
                                                  html('span','/')
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
                               "line"      => html('/')
                          ],
                       ];
                       
           return Compiler($base_class, $scheme);

}

?>