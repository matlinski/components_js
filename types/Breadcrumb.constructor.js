import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'
function f_breadcrumb(content){
    if(Array.isArray(content)){
            let content_compiler = "";
            let i = 1;
            content.forEach(function(value){
            
                if (i === content.length ) {
                    content_compiler += 
                    html('li', {'class': 'breadcrumb-item active','aria-current': 'page'}, value)
                
                }	else	{
                    content_compiler += 
                    html('li', {'class': 'breadcrumb-item'}, value)
                } 
            i++;
            }) 
            return content_compiler;

    } else {
        return 'Please set the content as an array';
    }
};

function Breadcrumb(input = '', parent = 'body') {
	let {
		content,
		attr,
		template,
		separator,
		style,
		script,
		id
	} = Component(input, {
		content: [
                    html('a',{'href':'home.html'}, 'home'),
                    html('a',{'href':'library.html'}, 'library'),
                    'data'
                ],
		attr: '',
		template: 'justify-content-left',
		separator: '>',
		style: '',
		script: ''
    }, 'breadcrumb');
    if (separator) {
        style += `
            .breadcrumb-item + .breadcrumb-item::before
            {
                content: "${separator}";
            }
            `
    } 
	return 'document.querySelector("'+parent+'").innerHTML += `'+compiler([
		{
            "condition" :  true,
            "line"      :  html('ul',`id='${id}' class='breadcrumb 
                             ${template}' `+attr_append(attr),
                             f_breadcrumb(content)+((style && style.length > 0)?html('style','', style):'')
                             )
       }
    ])+'`;'+((script && script.length > 0)?script+';' :'');
}
export default Breadcrumb;
