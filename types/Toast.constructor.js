<?php

function Toast($input = "") {
$base_class = "toast";

$default = [
              "header"    =>  html('img', ['src'=>'https://picsum.photos/20/20',
                              'class'=>'rounded mr-2','alt'=>'...']).
                              html('strong', ['class'=>'mr-auto']).
                                  'Title example'.
                              html('strong', '/').
                              html('small').
                                '11 mins ago'.
                              html('small', '/'),

              "body"      =>  'Body placeholder',
              "attr"      =>  "",
              "template"  =>  "",
              "style"     =>  "",
              "script"    =>  ""
          ];

          foreach(Component($input, $default, $base_class) as $key => $value) {
            $$key = $value;
       }
       $script .= 
             '$(document).ready(function() {
                 $(\'.toast\').toast(\'show\');
             });';
       $scheme =   [
                      [
                           "condition" => true,
                           "line"      => html(
                              'div',"id='$id' class='$base_class 
                              $template' ".attr_append($attr, [
                                   "data-autohide" =>  "false",
                                   "role"          =>  "alert",
                                   "aria-live"     =>  "assertive",
                                   "aria-atomic"   =>  "true"
                              ])
                              )
                      ],
                      [
                           "condition" => true,
                           "line"      => html('div', ['class'=>'toast-header'])
                      ],
                      [
                           "condition" => true,
                           "line"      => $header
                      ],
                      [
                           "condition" => true,
                           "line"      => html('button',    [
                                                            'type'=>'button',
                                                            'class'=>'ml-2 mb-1 close',
                                                            'data-dismiss'=>'toast',
                                                            'aria-label'=>'close'
                                                            ]).

                                             html('span',   [
                                                            'aria-hidden'=>'true'
                                                            ]).'&times;'.

                                             html('span','/').
                                          html('button','/')
                      ],
                      [
                           "condition" => true,
                           "line"      => html('/')
                      ],
                      [
                           "condition" => true,
                           "line"      => html('div', ['class'=>'toast-body'])
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
