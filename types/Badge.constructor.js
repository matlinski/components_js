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
    document.querySelector(parent).innerHTML += compiler([
		{
            "condition" : tag === "span",
            "line"      : html('span',`id='${id}' class='badge 
                                ${template}' `+attr_append(attr)
                                )+content
        },
        {
            "condition" : tag === "span" && !script,
            "line"      : html('script')+script+html('script','/')
        },
        {
           "condition" : tag === "span" && !style,
            "line"      : html('style')+style+html('style','/')
        },
        {
            "condition" : tag === "span",
            "line"      : html('span','/')
        },
        {
            "condition" : (tag === "a"),
            "line"      : html('a',`id='${id}' class='badge 
                ${template}' `+attr_append(attr,{"href":"#"})
            )+content
        },
        {
            "condition" : tag === "a" && !script,
            "line"      : html('script')+script+html('script','/')
        },
        {
                "condition" : tag === "a" && !style,
                "line"      : html('style')+style+html('style','/')
        },
        {
            "condition" : tag === "a",
            "line"      : html('a','/')
        },
    ]);
    eval(script);
}
export default Badge;