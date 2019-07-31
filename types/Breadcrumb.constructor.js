<?php
function f_breadcrumb($content){
    if(is_array($content)){
            $content_compiler = "";
            $i = 1;
            foreach($content as $value) {
            
                if ($i === (count($content)) ) {
                    $content_compiler .= 
                    html('li', ['class'=>'breadcrumb-item active','aria-current'=>'page']).
                    $value.
                    html('li','/');    
                
                }	else	{
                    $content_compiler .= 
                    html('li', ['class'=>'breadcrumb-item']).
                    $value.
                    html('li','/');
                } 
            $i++;
            }
            return $content_compiler;

    } else {
        return 'Please set the content as an array';
    }
};


function Breadcrumb($input = "") {
$base_class = "breadcrumb";

$default = [
                "content"   => 
                    [
                    html('a',['href'=>'home.html']).'home'.html('a','/'),
                    html('a',['href'=>'library.html']).'library'.html('a','/'),
                    'data'
                    ],
                "separator" =>  ">",
                "attr"      =>  "",
                "template"  =>  "justify-content-left",
                "style"     =>  "",
                "script"    =>  ""
            ];
            
            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }
           
           
           if ($separator) {
                     $style .= '
                         .breadcrumb-item + .breadcrumb-item::before{
                             content: "'.$separator.'";
                         }
                     ';
                 }   
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('ul',"id='$id' class='$base_class 
                                                $template' ".attr_append($attr)
                                                )
                          ],
                          [
                               "condition" => true,
                               "line"      => f_breadcrumb($content)
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