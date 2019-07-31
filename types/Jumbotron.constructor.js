<?php

function Jumbotron($input = "") {
$base_class = "jumbotron";

$default = [
                "header"    =>  html('h1', ['class'=>'display-4']).
                                    'Header placeholder'.
                                html('h1', '/').html('br'),

                "body"      =>  html('p', ['class'=>'lead']).
                                   'This is a body placeholder.'.
                              html('p', '/').
                              html('button', ['class'=>'btn btn-primary']).
                              'Take action!'.
                              html('button', '/'),

                "attr"      =>  "",
                "template"  =>  "jumbotron-fluid",
                "style"     =>  '&{'.
                                    'background-image: url(\'https://source.unsplash.com/featured/?dark\');'.
                                    ' background-size: cover;'.
                                    ' color: white'.
                                '}',
                "script"    =>  ""
            ];
            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' class='$base_class 
                               $template' ".attr_append($attr)
                               )
                          ],
                          [
                               "condition" => true,
                               "line"      => html('div', ['class'=>'container'])
                          ],
                          [
                               "condition" => true,
                               "line"      => $header
                          ],
                          [
                               "condition" => true,
                               "line"      => $body
                          ],
                          [
                               "condition" => true,
                               "line"      => html('/')
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