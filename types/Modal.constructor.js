<?php

function Modal($input = "") {
$base_class = "modal";

$default = [
            "header"    =>  html('h5', ['class'=>'modal-title']).
                                'Header placeholder'.
                            html('h5', '/'),

            "body"      =>  html('p').
                                'Body placeholder'.
                            html('p', '/'),

            "footer"    =>  html('button', ['class'=>'btn btn-primary']).
                                'Take action!'.
                            html('button', '/'),

            "trigger_id"=>  "myID",
            "attr"      =>  '',
            "template"  =>  "fade",
            "style"     =>  "",
            "script"    =>  ""
          ];

          foreach(Component($input, $default, $base_class) as $key => $value) {
            $$key = $value;
       }
       $script .= 
         '$(\'#myModal\').on(\'shown.bs.modal\', function () {
             $(\'#myInput\').trigger(\'focus\')
         })';
       
       $scheme =   [
                      [
                           "condition" => true,
                           "line"      => html('div',"id='$trigger_id' class='$base_class 
                                        $template' ".attr_append($attr, [
                                             "tabindex"    =>  "-1",
                                             "role"        =>  "dialog",
                                             "aria-hidden" =>  "true"
                                         ])
                                        )
                      ],
                      [
                           "condition" => true,
                           "line"      => html('div',['class'=>'modal-dialog', 'role'=>'document'])
                      ],
                      [
                           "condition" => true,
                           "line"      => html('div',['class'=>'modal-content'])
                      ],
                      [
                           "condition" => true,
                           "line"      => html('div',['class'=>'modal-header'])
                      ],
                      [
                           "condition" => true,
                           "line"      => $header
                      ],
                      [
                           "condition" => true,
                           "line"      => html('button', ['type'=>'button','class'=>'close', 'data-dismiss'=>'modal','aria-label'=>'Close']).
                                                  html('span',['aria-hidden'=>'true']).
                                                       '&times;'
                                                  .html('span','/').
                                             html('button', '/')
                      ],
                      [
                           "condition" => true,
                           "line"      => html('/')
                      ],
                      [
                           "condition" => true,
                           "line"      => html('div',['class'=>'modal-body'])
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
                           "condition" => true,
                           "line"      => html('div',['class'=>'modal-footer'])
                      ],
                      [
                           "condition" => true,
                           "line"      => html('button', ['type'=>'button','class'=>'btn btn-secondary', 'data-dismiss'=>'modal']).
                                                       'Close'.
                                             html('button', '/')
                      ],
                      [
                           "condition" => true,
                           "line"      => $footer
                      ],
                      [
                           "condition" => true,
                           "line"      => html('/')
                      ],
                      [
                           "condition" => true,
                           "line"      => html('/')
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