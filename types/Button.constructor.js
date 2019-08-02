import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'
function Button(input = '') {
	const {
		content,
		tag,
		attr,
		template,
		tooltip,
		dropdown,
		popover,
		collapse,
		style,
		script,
		id,
		parent
	} = Component(input, {
		content: 'Content placeholder',
		tag: 'button',
		attr: '',
		template: 'btn-primary',
		tooltip: false,
		dropdown: false,
		popover: false,
		collapse: false,
		style: '',
		script: ''
	}, 'btn');
        if (popover && !tooltip && !dropdown && !collapse) {
             $script += 
             `$(function () {
                 $(\'[data-toggle="popover"]\').popover()
             })`;
         }
  
        if (tooltip && !popover && !dropdown && !collapse) {
             $script += 
             `$(function () {
                 $(\'[data-toggle="tooltip"]\').tooltip()
             })`;
         }
         if (dropdown && !popover && !tooltip && !collapse) {
             $style += 
             '#'+$id+'.'+$base_class+`>.dropdown>.dropdown-menu>*{
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
             }`;
         }
             let drop_length;
             let secondary_id = 'test';
         if(!Array.isArray(dropdown)){
             drop_length = 0;
         } 
         
         let base_attr = {};
         if(tooltip && Array.isArray(tooltip) && !dropdown && !popover && !collapse){
            base_attr = {"type"          :  "submit",
                         "data-toggle"   :  "tooltip",
                         "data-placement":  tooltip[1],
                         "title"         :  tooltip[0]};  
         }
         if(tooltip && !Array.isArray(tooltip) && !dropdown && !popover && !collapse){
            base_attr = {"type"          :  "submit",
                         "data-toggle"   :  "tooltip",
                         "data-placement":  "top",
                         "title"         :  tooltip};  
         }
         if(dropdown && !tooltip && !popover && !collapse){
            base_attr = {"class"         :  "dropdown-toggle",
                         "type"          :  "submit",
                         "id"            :  "dropdownMenuButton",
                         "data-toggle"   :  "dropdown",
                         "aria-haspopup" :  "true",
                         "aria-expanded" :  "false"};
         }
         if(popover && Array.isArray(popover) && !tooltip && !dropdown && !collapse){
               base_attr = {
                    "data-container"    :  "body",
                    "data-toggle"       :  "popover",
                    "data-placement"    :  popover[1],
                    "data-content"      :  popover[0]};
         }
         if(tag === "button" && popover && !Array.isArray(popover) && !tooltip && !dropdown && !collapse){
            base_attr = {
               "data-container"    :  "body",
               "data-toggle"       :  "popover",
               "data-placement"    :  "top",
               "data-content"      :  popover};  
         }
         if(tag === "button" && collapse && !tooltip && !dropdown && !popover){
            base_attr = {
               "data-toggle"   :  "collapse",
               "data-target"   :  '#'.$secondary_id,
               "aria-expanded" :  "false",
               "aria-controls" :  '#'.$secondary_id};  
         }
         if(tag === "button" && !tooltip && !dropdown && !popover && !collapse){
            base_attr = {
               "type":"submit"};  
         }
         if(tag = 'a'){
               base_attr.href = '#'
               base_attr.role = 'button'
               base_attr.type = "submit"
          }
          if(tag = 'input'){
               base_attr.type = "submit"
               base_attr.value = content
          } 
          return compiler([
                         {
                              "condition" : dropdown,
                              "line"      : html('div', {'class':'dropdown'}, html(tag,`id='${id}' class='btn ${template}' `+attr_append(attr, base_attr), content + ((style && style.length > 0)?(html	(
                              'style',
                              '',
                              style
                              )) :'')))
                         },
                         {
                              "condition" : !dropdown,
                              "line"      : html(tag,`id='${id}' class='btn ${template}' `+attr_append(attr, base_attr), content + ((style && style.length > 0)?(html	(
                              'style',
                              '',
                              style
                              )) :''))
                         },
                          {
                               "condition" : dropdown && Array.isArray(dropdown) && !collapse && !tooltip && !popover,
                               "line"      : function(){
                                    let drop_compilator = "";
                                    let i = 0;
                                    dropdown.forEach (function(value){
                                        if (i < (dropdown.length-1) && !drop_length.match(/[<>]+/)) {
                                            
                                             drop_compilator += value;
                                             i++;
                                            
                                         }   else if ($i <= (dropdown.length-1) && drop_length.match(/[<>]+/))  {
                                                    
                                             drop_compilator += value;
                                             i++;
                                                    
                                         }   else    {
                                             break;
                                         }
                                    }) 
                                    return html('div',{'class':'dropdown-menu'}, drop_compilator)
                               }
                         },
                         {
                               "condition" : dropdown && !Array.isArray(dropdown) && !collapse && !tooltip && !popover,
                               "line"      : html('div',{'class':'dropdown-menu'}, dropdown)
                         },
                          {
                               "condition" : collapse && !dropdown && !tooltip && !popover,
                               "line"      : html('div',{'class':'collapse navbar-collapse', 'id':$secondary_id}, collapse)
                         }
                       ]);
}
export default Button;
