<?php

function Media($input = "") {
$base_class = "media";

$default = [
                "content"   =>  html('h5').
                                    "Content placeholder".
                                html('h5','/').
                                html('p').
                                    " Lorem ipsum dolor sit amet consectetur adipisicing elit.".
                                    " Nesciunt repellendus perspiciatis maxime porro. Est ab cum,".
                                    " porro ullam dicta expedita! Quis a, vero nemo dolore assumenda".
                                    " vitae impedit doloremque reiciendis.".
                                html('p','/').
                                html('button',['class'=>'btn btn-primary']).
                                   'Click here'.
                                html('button',"/"),

                "image"     =>  html('img',['src'=>'https://picsum.photos/'.rand(190,210).'/200','class'=>'card-img-top col-md-2 col-sm-4 col-6 mt-4','alt'=>'...']),
                                    
                "reverse"   =>  false,
                "attr"      =>  "",
                "template"  =>  "",
                "style"     =>  "",
                "script"    =>  ""
            ];


            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           $style .=  '#'.$id.'>.'.$base_class.'{
            display: flex; flex-direction: row
            }
            #'.$id.'>.'.$base_class.'>img{
                flex-basis: 150px; margin: 1.25rem 0 0 1.25rem
            } 
            #'.$id.'>.'.$base_class.'>.card-body{
                flex-basis: 100%
            }';
           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' class='$base_class 
                               $template' ".attr_append($attr)
                               )
                          ],
                          [
                               "condition" => !$reverse,
                               "line"      => $image
                          ],
                          [
                               "condition" => true,
                               "line"      => html('div',['class'=>'card-body']).
                                                $content.
                                            html('/')
                          ],
                          [
                               "condition" => $reverse,
                               "line"      => $image
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