<?php
function f_scrollspy($content, $reference_id){
     if (is_array($content)) {
       $content_compiler = '';
              foreach($content as $key => $value) {
               $content_compiler .= 
                  html('a',['class'=>'list-group-item list-group-item-action','href'=>'#'.$reference_id.$key]).
                      $value.
                  html('a','/');
              }
         
            } else  {
              $content_compiler .= 'Please set the content as an array';
            }
            return $content_compiler;
    }

function Scrollspy($input = "") {
$base_class = "scrollspy";

$default = [
              "content"   => 
                    [
                      'Top',
                      'Middle',
                      'Bottom'
                    ],
              "reference_id"   =>  "id_placeholder",
              "attr"      =>  "",
              "template"  =>  "navbar-light bg-light col-md-1 col-3",
              "style"     =>  "&{".
                                  "position: fixed;".
                                  "top: 50%;".
                                  "right: 0%;".
                                  "z-index: 999;".
                                  "background: transparent !important;".
                                  "transform: translateY(-50%)".
                              "}",
              "script"    =>  ""
            ];

            foreach(Component($input, $default, $base_class) as $key => $value) {
              $$key = $value;
         }
         
         $script .= '$(\'body\').scrollspy({ target: \'#'.$id.'\'})';
         
         $scheme =   [
                        [
                             "condition" => true,
                             "line"      => html('nav',"id='$id' class='$base_class 
                                             $template' ".attr_append($attr))
                        ],
                        [
                             "condition" => true,
                             "line"      => f_scrollspy($content, $reference_id)
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
                             "line"      => html('nav', '/')
                        ],
                     ];
                     
         return Compiler($base_class, $scheme);

}

?>