import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'
import rand from '../utilities/rand.func.js'
function Card(input = '') {
	const {
		content,
		tag,
		attr,
		template,
		image,
		style,
		id
	} = Component(input, {
		content:  html('h5', '',"Title placeholder")+
                    html('p', '', "Body placeholder")+
                    html('button',{'class':'btn btn-primary'}, 'Click here'),
		tag: 'div',
		attr: '',
		template: 'col-lg-3 col-md-5 col-sm-7 col-12',
		image: html('img',{'width':'100%', 'src':'https://source.unsplash.com/'+rand(320,370)+'x350/', 'alt':'...'}),
		style:    `&>img{
                         "background-size: cover;
                         "border-top-left-radius: calc(+25rem - 1px);
                         "border-top-right-radius: calc(+25rem - 1px);
                    }`
	}, 'card');

     return compiler([
                         {
                               "condition" : true,
                               "line"      : html(
                                    tag,
                                    `id='${id}' class='card ${template}' `+attr_append(attr),
                                    image+html('div', {'class':'card-body'}, content)+
                                    ((style && style.length > 0)?(html	(
                                        'style',
                                        '',
                                        style
                                   )) :'')
                               )
                         },
                       ]);
}
export default Card;
