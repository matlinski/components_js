<?php
function f_navs($content, $active, $disabled){
    $content_compiler = '';
    foreach($content as $key => $value) {
                     $value = explode('href', $value);

                     if (($key+1) == $active) {
                         $value[0] .= 'class ="nav-link active" ';

                     } elseif (($key+1) == $disabled) {
                         $value[0] .= 'class ="nav-link disabled" ';

                     } else {
                         $value[0] .= 'class ="nav-link" ';
                     }
                     $value = implode('href', $value);
                     $content_compiler .= html('li', ['class'=>'nav-item']).$value.html('li', '/');
                 }
                 return $content_compiler;
   }
function Navs($input = "") {
$base_class = "nav";

$default = [
                "content"   => 
                    [
                        html('a',['href'=>'home.html']).
                            'Home'.
                        html('a','/'),
                        html('a',['href'=>'about.html']).
                            'About us'.
                        html('a','/'),
                        html('a',['href'=>'contact.html']).
                            'Contact'.
                        html('a','/')
                    ],
                'active'    =>  2,
                'disabled'  =>  1,
                "attr"      =>  "",
                "template"  =>  "nav-tabs",
                "style"     =>  "",
                "script"    =>  ""
            ];
            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('ul',"id='$id' class='$base_class 
                                                $template' ".attr_append($attr))
                          ],
                          [
                               "condition" => is_array($content),
                               "line"      => f_navs($content, $active, $disabled)
                          ],
                          [
                               "condition" => !is_array($content),
                               "line"      => 'Please set the content as an array'
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
                               "line"      => html('ul','/')
                          ],
                       ];
                       
           return Compiler($base_class, $scheme);
}

?>