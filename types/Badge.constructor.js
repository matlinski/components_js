import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'

function Badge(input = '', parent = 'body') {
	const {
		content,
		tag,
		attr,
		template,
		style,
		script,
		id
	} = Component(input, {
		content: 'Content placeholder',
		tag: 'span',
		attr: '',
		template: 'badge-primary',
		style: '',
		script: ''
    }, 'badge');
    let base_attr;
    if(tag === 'a'){
        base_attr = {"href":"#"};
    } else {
        base_attr = {};
    }
    return 'document.querySelector("'+parent+'").innerHTML += `'+compiler([
		{
            "condition" : true,
            "line"      : html(tag,`id='${id}' class='badge ${template}' `+attr_append(attr, base_attr), content + ((style && style.length > 0)?(html	(
                'style',
                '',
                style
            )) :''))
        }
    ])+'`;'+((script && script.length > 0)?script+';' :'');
}
export default Badge;