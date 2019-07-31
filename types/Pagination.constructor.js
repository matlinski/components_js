<?php
function f_pagination($links, $interface, $active){
    $links_compiler = '';
       if(is_array($links)){
        $i = 1;

            if ($interface) {
                    $links_compiler .= 
                    html('li',['class'=>'page-item'.(($i == $active)?' disabled':''), ]).
                        html('a',['class'=>'page-link', 'href'=>(($i != $active)?$links[$active-2] :'#')]);
                    if (is_array($interface)) {
                        $links_compiler .= $interface[0];
                    }   else    {
                        $links_compiler .= 'previous';
                    }
                    $links_compiler .= html('a','/').html('li','/');
            } 
            foreach($links as $value) {
                    $links_compiler .= 
                    html('li',['class'=>'page-item'.(($i == $active)?' active':''), ]).
                        html('a',['class'=>'page-link', 'href'=>$value]).
                            $i.
                        html('a','/').
                    html('li', '/');
                $i++;
            }
            if ($interface) {
                $links_compiler .= 
                html('li',['class'=>'page-item'.(($i == $active+1)?' disabled':''), ]).
                    html('a',['class'=>'page-link', 'href'=>(($i != $active+1)?$links[$active] :'#')]);
                if (is_array($interface)) {
                    $links_compiler .= $interface[1];
                }   else    {
                    $links_compiler .= 'previous';
                }
                $links_compiler .= html('a','/').html('li','/');
        } 
       } else {
            $links_compiler = 'Please set the links as an array';
       }                   
       return $links_compiler;
   }

function Pagination($input = "") {
$base_class = "pagination";

$default = [
                "links"     => 
                    [
                        '#id1',
                        '#id2',
                        '#id3'
                    ],
                "active"    =>  3,
                "interface" =>  
                    [
                        "previous",
                        "next"
                    ],
                "attr"      => "",
                "template"  =>"justify-links-left",
                "style"     => "",
                "script"    => ""
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
                               "condition" => true,
                               "line"      => f_pagination($links, $interface, $active)
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