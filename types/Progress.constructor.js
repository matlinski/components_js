<?php

function Progress($input = "") {
$base_class = "progress";

$default = [
                "progress"  =>  25,
                "min"       =>  0,
                "max"       =>  100,
                "template"  =>  "bg-success",
                "attr"      =>  "",
                "style"     =>  "",
                "script"    =>  ""
            ];

foreach(Component($input, $default, $base_class) as $key => $value) {
    $$key = $value;
}
           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' class='$base_class'
                                 style='width: $max.% ' ".attr_append($attr)
                               )
                          ],
                          [
                               "condition" => true,
                               "line"      => html('div', [
                                                  'class'=>'progress-bar '.$template,
                                                  'role'=>'progressbar',
                                                  'aria-valuenow'=>$progress,
                                                  'aria-valuemin'=>$min,
                                                  'aria-valuemax'=>$max,
                                                  'style'=>'width: '.($progress/$max*100).'%'
                                                  ])."$progress%".html('/')
                                             
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
                          ]
                       ];
                       
           return Compiler($base_class, $scheme);
           
}

?>
