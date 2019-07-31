<?php

function Input($input = "") {
$base_class = "form-group";

$default = [
                "content"   =>  "Value placeholder",
                "tag"       =>  "input",
                "label"     =>  "Label placeholder",
                "sticker"   =>  html('span').'@'.html('span','/'),
                "global"    =>  'col-4',
                "attr"      =>  "",
                "template"  =>  "",
                "style"     =>  "",
                "script"    =>  ""
            ];

            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           if (preg_match("/<\/span>/", $sticker)) {
               $style .= '#'.$id.'.'.$base_class.'>.input-group>div{
                   display: -ms-flexbox;
                   display: flex;
                   -ms-flex-align: center;
                   align-items: center;
                   padding: .375rem .75rem;
                   margin-bottom: 0;
                   font-size: 1rem;
                   font-weight: 400;
                   line-height: 1.5;
                   color: #495057;
                   text-align: center;
                   white-space: nowrap;
                   background-color: #e9ecef;
                   border: 1px solid #ced4da;
                   border-radius: .25rem;
               }';
           }
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' style='width:auto' class='$base_class $global form-control'"
                                             )
                          ],
                          [
                               "condition" => is_array($label),
                               "line"      => html('label', ['for'=>$id, 'class'=>$label[1]]).
                                                  $label[0].
                                             html('label','/')
                          ],
                          [
                               "condition" => !is_array($label),
                               "line"      => html('label', ['for'=>$id]).
                                                    $label.
                                              html('label','/')
                          ],
                          [
                               "condition" => true,
                               "line"      => html('div',['class'=>'input-group','style'=>'width:auto'])
                          ],
                          [
                               "condition" => $sticker && is_array($sticker),
                               "line"      => html($tag, 'class="form-control"'.attr_append($attr))
                          ],
                          [
                               "condition" => $sticker && is_array($sticker) && $sticker[1] !== "append",
                               "line"      => $content
                          ],
                          [
                               "condition" => $sticker && is_array($sticker),
                               "line"      => html('div',['class'=>'input-group-'.$sticker[1]])
                          ],
                          [
                               "condition" => $sticker && is_array($sticker),
                               "line"      => $sticker[0]
                          ],
                          [
                              "condition" => $sticker && is_array($sticker),
                              "line"      => html('/')
                          ],
                          [
                               "condition" => $sticker && !is_array($sticker),
                               "line"      => html('div',['class'=>'input-group-prepend'])
                          ],
                          [
                               "condition" => $sticker && !is_array($sticker),
                               "line"      => $sticker
                          ],
                          [
                               "condition" => $sticker,
                               "line"      => html('/')
                          ],
                          [
                               "condition" => true,
                               "line"      => html('/')
                          ],
                          [
                              "condition" => $tag === "input",
                              "line"      => html($tag,"class='form-control $template' ".attr_append($attr, [
                                                 "type"              =>  "text",
                                                 "placeholder"       =>  "example placeholder",
                                                 "aria-label"        =>  "example",
                                                 "aria-describedby"  =>  "basic-addon",
                                                 "value"             =>  $content
                                            ])#
                                            )
                         ],
                          [
                              "condition" => $tag !== "input",
                              "line"      => html($tag,"class='form-control $template' ".attr_append($attr, [
                                                 "type"              =>  "text",
                                                 "placeholder"       =>  "example placeholder",
                                                 "aria-label"        =>  "example",
                                                 "aria-describedby"  =>  "basic-addon"
                                            ])#
                                            )
                         ],
                         [
                              "condition" => $tag !== "input",
                              "line"      => $content
                         ],
                         [
                              "condition" => $tag !== "input",
                              "line"      => html($tag,'/')
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
                          [
                               "condition" => true,
                               "line"      => html('/')
                          ],
                       ];
                       
           return Compiler($base_class, $scheme);
}

?>