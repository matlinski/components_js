<?php
function f_carousel($active, $interval =5000, $content){

    if(is_array($content)){
    $content_compiler = '';
            foreach($content as $key => $value) {
                if (($key+1) === $active ) {
                $content_compiler .= html('div',['class'=>'carousel-item active', 'data-interval'=>$interval]);

                }   else    {
                $content_compiler .= html('div',['class'=>'carousel-item', 'data-interval'=>$interval]);
                } 
                $content_compiler .= $value;
                $content_compiler .= html('/');
                }
            return $content_compiler;
        } else {
            return 'Please set the content as an array';
        }
    }

    function f2_carousel($content, $active, $id){
        $temp = html('ol', ['class'=>'carousel-indicators']);

                foreach($content as $key => $value) {

                if (($key+1) === $active ) {
                    $temp .= 
                        html('li', ['data-target'=>'#'.$id, 'data-slide-to'=>$key, 'class'=>'active']).html('li','/');

                }   else    {
                    $temp .= 
                        html('li', ['data-target'=>'#'.$id, 'data-slide-to'=>$key]).html('li','/');
                } 
                }
                $temp .= html('ol','/');
             return $temp;
       }

function Carousel($input = "") {
$base_class = "carousel";

$default = [
                "content"       => 
                
                        [
                        html().
                            html('h2', ['class'=>'display-4']).'First caption'.html('h2', '/').
                            html('p').'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est ipsam, deleniti quo quos illo voluptatibus consequuntur magni quae eaque deserunt neque explicabo consectetur minima autem placeat suscipit odit inventore!'.html('p', '/').
                        html('/').
                        html('img',['src'=>'https://source.unsplash.com/2501x300?moon', 'alt'=>'...']),

                        html().
                            html('h2', ['class'=>'display-4']).'Second caption'.html('h2', '/').
                            html('p').'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est ipsam, deleniti quo quos illo voluptatibus consequuntur magni quae eaque deserunt neque explicabo consectetur minima autem placeat suscipit odit inventore!'.html('p', '/').
                        html('/').
                        html('img',['src'=>'https://source.unsplash.com/2500x300?moon', 'alt'=>'...']),

                        html().
                            html('h2', ['class'=>'display-4']).'Third caption'.html('h2', '/').
                            html('p').'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est ipsam, deleniti quo quos illo voluptatibus consequuntur magni quae eaque deserunt neque explicabo consectetur minima autem placeat suscipit odit inventore!'.html('p', '/').
                        html('/').
                        html('img',['src'=>'https://source.unsplash.com/2499x300?moon', 'alt'=>'...'])

                        ],
                'active'        =>  2,
                "caption"       =>  true,
                "controls"      =>  false,
                "indicators"    =>  false,
                'interval'      =>  5000,
                "attr"          =>  "",
                "template"      =>  "slide",
                "style"         =>  '&>.carousel-inner>.carousel-item>:not(img) {'.
                                        'position: absolute;'.
                                        'right: 15%;'.
                                        'bottom: 20px;'.
                                        'left: 15%;'.
                                        'z-index: 10;'.
                                        'padding-top: 20px;'.
                                        'padding-bottom: 20px;'.
                                        'color: #fff;'.
                                        'text-align: center;'.
                                    '}',
                "script"        =>  ""
            ];

            foreach(Component($input, $default, $base_class) as $key => $value) {
                $$key = $value;
           }

           
           $scheme =   [
                          [
                               "condition" => true,
                               "line"      => html('div',"id='$id' class='$base_class 
                                            $template' ".attr_append($attr, [
                                                "data-ride" =>  "carousel"
                                            ])
                                            )
                          ],
                          [
                                "condition" => is_array($content) && $indicators,
                                "line"      => f2_carousel($content, $active, $id)
                          ],
                          [
                               "condition" => true,
                               "line"      => html('div',['class'=>'carousel-inner'])
                          ],
                          [
                               "condition" => true,
                               "line"      => f_carousel($active, $interval, $content)
                          ],
                          [
                               "condition" => is_array($content) && $controls,
                               "line"      =>   html('a',['class'=>'carousel-control-prev', 'href'=>'#'.$id, 'role'=>'button', 'data-slide'=>'prev']).
                                                    html('span',['class'=>'carousel-control-prev-icon', 'aria-hidden'=>'true']).html('span','/').
                                                    html('span',['class'=>'sr-only']).'Previous'.html('span','/').
                                                html('a','/').
                                                html('a',['class'=>'carousel-control-next', 'href'=>'#'.$id, 'role'=>'button', 'data-slide'=>'next']).
                                                    html('span',['class'=>'carousel-control-next-icon', 'aria-hidden'=>'true']).html('span','/').
                                                    html('span',['class'=>'sr-only']).'Next'.html('span','/').
                                                html('a','/')
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