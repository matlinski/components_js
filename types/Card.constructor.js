<?php
function Card($input = "") {
$base_class = "card";

$default = [
                "content"   =>  html('h5')."Title placeholder".html('h5',"/").
                                html('p')."Body placeholder".html('p',"/").
                                html('button',['class'=>'btn btn-primary']).'Click here'.html('button',"/"),

                "image"     =>  html('img',['width'=>'100%', 'src'=>'https://source.unsplash.com/'.rand(320,370).'x350/', 'alt'=>'...']),
                
                "attr"      =>  "",                   
                "template"  =>  "col-lg-3 col-md-5 col-sm-7 col-12",
                "style"     =>  "&>img{".
                                    "background-size: cover;".
                                    "border-top-left-radius: calc(.25rem - 1px);".
                                    "border-top-right-radius: calc(.25rem - 1px);".
                                "}",
                "script"    =>  ""
            ];

            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' class='$base_class 
                               $template' ".attr_append($attr))
                          ],
                          [
                               "condition" => true,
                               "line"      => $image
                          ],
                          [
                               "condition" => true,
                               "line"      => html('div', ['class'=>'card-body']).
                                                 $content.
                                             html('/')
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
