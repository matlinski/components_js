import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'

function Jumbotron(input = '') {
	const {
		header,
		body,
		tag,
		attr,
		template,
		style,
		id
	} = Component(input, {
		header: html('h1', {'class':'display-4'}, 'Header placeholder'),
		body: html('p', {'class':'lead'}, 'This is a body placeholder.')+
               html('button', {'class':'btn btn-primary'}, 'Take action!'),
		tag: 'div',
		attr: '',
		template: 'jumbotron-fluid',
		style:    `&{
                         background-image: url(\'https://source.unsplash.com/featured/?dark\');
                         background-size: cover;
                         color: white
                    }`
	}, 'jumbotron');
     
     return compiler([
                          {
                               "condition" : true,
                               "line"      : html(tag,`id='${id}' class='jumbotron 
                               ${template}' `+attr_append(attr),
                               html('div',
                               {'class':'container'},
                               header+body)+
                              ((style && style.length > 0)?(html	(
                                   'style',
                                   '',
                                   style
                              )) :'')
                               )
                          }
                       ]);
}
export default Jumbotron;