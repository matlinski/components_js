<?php
function Button($input = "") {
$base_class = "btn";

$default = [
                "content"   =>  "Content placeholder",
                "tag"       =>  "button",
                "tooltip"   =>  false,
                "dropdown"  =>  false,
                "popover"   =>  false,
                "collapse"  =>  false,
                "attr"      =>  "",
                "template"  =>  "btn-primary",
                "style"     =>  "",
                "script"    =>  ""
            ];

            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
        if ($popover && !$tooltip && !$dropdown && !$collapse) {
             $script .= 
             '$(function () {
                 $(\'[data-toggle="popover"]\').popover()
             })';
         }
  
        if ($tooltip && !$popover && !$dropdown && !$collapse) {
             $script .= 
             '$(function () {
                 $(\'[data-toggle="tooltip"]\').tooltip()
             })';
         }
         if ($dropdown && !$popover && !$tooltip && !$collapse) {
             $style .= 
             '#'.$id.'.'.$base_class.'>.dropdown>.dropdown-menu>*{
                 display: block;
                 width: 100%;
                 padding: .25rem 1.5rem;
                 clear: both;
                 font-weight: 400;
                 color: #212529;
                 text-align: inherit;
                 white-space: nowrap;
                 background-color: transparent;
                 border: 0;
             }';
         }
         $secondary_id = secondary_id();
         if(is_array($dropdown)){
             $drop_length = $drop_length;
         } else {
             $drop_length = 0;
         }
            
            $scheme =   [
                         //   [
                         //        "condition" => $dropdown && is_array($dropdown) && !preg_match("/[<>]+/", $drop_length) && !$tooltip && !$popover && !$collapse,
                         //        "line"      => html('div', ['class'=>'dropdown '.$drop_length])
                         //   ],
                           [
                                "condition" => $dropdown && !$tooltip && !$popover && !$collapse,
                                "line"      => html('div',['class'=>'dropdown'])
                           ],
                         //   [
                         //        "condition" => $dropdown && !is_array($dropdown) && !$tooltip && !$popover && !$collapse,
                         //        "line"      => html('div',['class'=>'dropdown'])
                         //   ],
                          [
                               "condition" => $tag === "button" && $tooltip && is_array($tooltip) && !$dropdown && !$popover && !$collapse,
                               "line"      => html('button',"id='$id' class='$base_class 
                                             $template' ".attr_append($attr, [
                                                  "type"          =>  "submit",
                                                  "data-toggle"   =>  "tooltip",
                                                  "data-placement"=>  $tooltip[1],
                                                  "title"         =>  $tooltip[0]
                                               ])
                                             )
                          ],
                          [
                            "condition" => $tag === "button" && $tooltip && !is_array($tooltip) && !$dropdown && !$popover && !$collapse,
                            "line"      => html('button',"id='$id' class='$base_class 
                            $template' ".attr_append($attr, [
                                                  "type"          =>  "submit",
                                                  "data-toggle"   =>  "tooltip",
                                                  "data-placement"=>  "top",
                                                  "title"         =>  $tooltip
                                                  ])
                                             )
                          ],
                          [
                               "condition" => $tag === "button" && $dropdown && !$tooltip && !$popover && !$collapse,
                               "line"      => html('button',"id='$id' class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "class"         =>  "dropdown-toggle",
                                                       "type"          =>  "submit",
                                                       "id"            =>  "dropdownMenuButton",
                                                       "data-toggle"   =>  "dropdown",
                                                       "aria-haspopup" =>  "true",
                                                       "aria-expanded" =>  "false"
                                                  ])
                                                )
                          ],
                          [
                               "condition" => $tag === "button" && $popover && is_array($popover) && !$tooltip && !$dropdown && !$collapse,
                               "line"      => html('button',"id='$id' class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "data-container"    =>  "body",
                                                       "data-toggle"       =>  "popover",
                                                       "data-placement"    =>  $popover[1],
                                                       "data-content"      =>  $popover[0]
                                                  ])
                                                )
                          ],
                          [
                               "condition" => $tag === "button" && $popover && !is_array($popover) && !$tooltip && !$dropdown && !$collapse,
                               "line"      => html('button',"id='$id' class='$base_class 
                                             $template' ".attr_append($attr, [
                                                  "data-container"    =>  "body",
                                                  "data-toggle"       =>  "popover",
                                                  "data-placement"    =>  "top",
                                                  "data-content"      =>  $popover
                                              ])
                                        )
                          ],
                          [
                               "condition" => $tag === "button" && $collapse && !$tooltip && !$dropdown && !$popover,
                               "line"      => html('button',"id='$id' class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "type"          =>  "button",
                                                       "data-toggle"   =>  "collapse",
                                                       "data-target"   =>  '#'.$secondary_id,
                                                       "aria-expanded" =>  "false",
                                                       "aria-controls" =>  '#'.$secondary_id
                                                   ])
                                             )
                          ],
                          [
                               "condition" => $tag === "button" && !$tooltip && !$dropdown && !$popover && !$collapse,
                               "line"      => html('button',"id='$id' class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "type"=>"submit"
                                                   ])
                                             )
                          ],
                          [
                            "condition" => $tag === "button",
                            "line"      => $content
                          ],
                          [
                              "condition" => $tag === "button" && !empty($script),
                              "line"      => html('script').$script.html('script','/')
                         ],
                         [
                              "condition" => $tag === "button" && !empty($style),
                              "line"      => html('style').$style.html('style','/')
                         ],
                          [
                               "condition" => $tag === "button",
                               "line"      => html('button', '/')
                          ],
                          [
                               "condition" => $tag === "a" && $tooltip && is_array($tooltip) && !$dropdown && !$popover && !$collapse,
                               "line"      => attr_append($attr, [
                                                                    "type"          =>  "submit",
                                                                    "data-toggle"   =>  "tooltip",
                                                                    "data-placement"=>  $tooltip[1],
                                                                    "title"         =>  $tooltip[0]
                                                                ]).'>'
                          ],
                          [
                               "condition" => $tag === "a" && $tooltip && !is_array($tooltip) && !$dropdown && !$popover && !$collapse,
                               "line"      => html('a',"id='$id' class='$base_class 
                                             $template' ".attr_append($attr, [
                                                  "type"          =>  "submit",
                                                  "data-toggle"   =>  "tooltip",
                                                  "data-placement"=>  "top",
                                                  "title"         =>  $tooltip
                                              ])
                                        )
                          ],
                          [
                               "condition" => $tag === "a" && $dropdown && !$tooltip && !$popover && !$collapse,
                               "line"      => html('a',"id='$id' class='$base_class 
                                             $template' ".attr_append($attr, [
                                                  "class"         =>  "dropdown-toggle",
                                                  "href"          =>  "#",
                                                  "role"          =>  "button",
                                                  "id"            =>  "dropdownMenuButton",
                                                  "data-toggle"   =>  "dropdown",
                                                  "aria-haspopup" =>  "true",
                                                  "aria-expanded" =>  "false"
                                              ])
                                        )
                          ],
                          [
                               "condition" => $tag === "a" && $popover && is_array($popover) && !$dropdown && !$tooltip && !$collapse,
                               "line"      => html('a',"id='$id' class='$base_class 
                                             $template' ".attr_append($attr, [
                                                  "href"          =>  "#",
                                                  "role"          =>  "button",
                                                  "data-container"=>  "body",
                                                  "data-toggle"   =>  "popover",
                                                  "data-placement"=>  $popover[1],
                                                  "data-content"  =>  $popover[0]
                                              ])
                                        )
                          ],
                          [
                               "condition" => $tag === "a" && $popover && !is_array($popover) && !$dropdown && !$tooltip && !$collapse,
                               "line"      => html('a',"id='$id' class='$base_class 
                               $template' ".attr_append($attr, [
                                                  "href"          =>  "#",
                                                  "role"          =>  "button",
                                                  "data-container"=>  "body",
                                                  "data-toggle"   =>  "popover",
                                                  "data-placement"=>  "top",
                                                  "data-content"  =>  $popover
                                             ])
                                        )
                          ],
                          [
                               "condition" => $tag === "a" && $collapse && !$dropdown && !$tooltip && !$popover,
                               "line"      => html('a',"id='$id' class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                  "data-toggle"   =>  "collapse",
                                                  "href"          =>  '#'.$secondary_id,
                                                  "role"          =>  "button",
                                                  "aria-expanded"=>  "false",
                                                  "aria-controls"=>  '#'.$secondary_id
                                             ])
                                        )
                          ],
                          [
                               "condition" => $tag === "a" && !$collapse && !$dropdown && !$popover && !$tooltip,
                               "line"      => html('a',"id='$id' class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "href"  =>  "#",
                                                       "role"  =>  "button"
                                                   ])
                                        )
                          ],
                          [
                               "condition" => $tag === "a",
                               "line"      => $content
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
                          [
                               "condition" => $tag === "input",
                               "line"      => html('div',['id'=>$id, 'class'=>'input-group', 'style'=>'width:auto'])
                          ],
                          [
                               "condition" => $tag === "input" && $tooltip && is_array($tooltip) && !$collapse && !$dropdown && !$popover,
                               "line"      => html('input',"class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "type"          =>  "submit",
                                                       "value"         =>  $content,
                                                       "data-toggle"   =>  "tooltip",
                                                       "data-placement"=>  $tooltip[1],
                                                       "title"         =>  $tooltip[0]
                                                   ])
                                             )
                          ],
                          [
                               "condition" => $tag === "input" && $tooltip && !is_array($tooltip) && !$collapse && !$dropdown && !$popover,
                               "line"      => attr_append($attr, [
                                                                         "type"          =>  "submit",
                                                                         "data-toggle"   =>  "tooltip",
                                                                         "data-placement"=>  "top",
                                                                         "title"         =>  $tooltip
                                                                     ]).'>'
                          ],
                          [
                               "condition" => $tag === "input" && $popover && is_array($popover) && !$collapse && !$tooltip && !$dropdown,
                               "line"      => attr_append($attr, [
                                                                         "type"          =>  "submit",
                                                                         "value"         =>  $content,
                                                                         "data-container"=>  "body",
                                                                         "data-toggle"   =>  "popover",
                                                                         "data-placement"=>  $popover[1],
                                                                         "data-content"  =>  $popover[0]
                                                                     ]).'>'
                          ],
                          [
                               "condition" => $tag === "input" && $popover && !is_array($popover) && !$collapse && !$tooltip && !$dropdown,
                               "line"      => attr_append($attr, [
                                                                         "type"          =>  "submit",
                                                                         "value"         =>  $content,
                                                                         "data-container"=>  "body",
                                                                         "data-toggle"   =>  "popover",
                                                                         "data-placement"=>  $popover[1],
                                                                         "data-content"  =>  $popover[0]
                                                                     ]).'>'
                          ],
                          [
                               "condition" => $tag === "input" && !$collapse && !$dropdown && !$popover && !$tooltip,
                               "line"      => html('input',"class='$base_class 
                                                  $template' ".attr_append($attr, [
                                                       "type"  =>  "submit",
                                                       "value" =>  $content
                                                   ])
                                             )
                          ],
                          [
                              "condition" => $tag === "input" && !empty($script),
                              "line"      => html('script').$script.html('script','/')
                         ],
                         [
                              "condition" => $tag === "input" && !empty($style),
                              "line"      => html('style').$style.html('style','/')
                         ],
                          [
                               "condition" => $tag === "input",
                               "line"      => html('/')
                          ],
                          [
                               "condition" => $dropdown && is_array($dropdown) && !$collapse && !$tooltip && !$popover,
                               "line"      => function(){
                                    $drop_compilator = "";
                                    $i = 0;
                                    foreach ($dropdown as $value) {
                                        if ($i < (count($dropdown)-1) && !preg_match("/[<>]+/",
                                             $drop_length)) {
                                            
                                             $drop_compilator .= $value;
                                             $i++;
                                            
                                         }   elseif ($i <= (count($dropdown)-1) && preg_match("/[<>]+/",
                                                     $drop_length))  {
                                                    
                                             $drop_compilator .= $value;
                                             $i++;
                                                    
                                         }   else    {
                                             break;
                                         }
                                    }
                                    return html('div',['class'=>'dropdown-menu']).
                                                $drop_compilator.
                                            html('/');
                               }
                          ],
                          [
                               "condition" => $dropdown && !is_array($dropdown) && !$collapse && !$tooltip && !$popover,
                               "line"      => html('div',['class'=>'dropdown-menu']).
                                                    $dropdown.
                                             html('/')
                          ],
                          [
                               "condition" => $collapse && !$dropdown && !$tooltip && !$popover,
                               "line"      => html('div',['class'=>'collapse navbar-collapse', 'id'=>$secondary_id]).
                                                $collapse.
                                             html('/')
                          ],
                          [
                              "condition" => $dropdown && !$tooltip && !$popover && !$collapse,
                              "line"      => html('/')
                         ],
                       ];
                       
           return Compiler($base_class, $scheme);
}

?>