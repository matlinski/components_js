import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'
function Alert(input = '') {
	const {
		content,
		tag,
		attr,
		template,
		dismisable,
		style,
		script,
		id,
		parent
	} = Component(input, {
		content: 'Content placeholder',
		tag: 'div',
		attr: '',
		template: 'alert-warning fade show',
		dismisable: true,
		style: '',
		script: ''
	}, 'alert');
	return 'document.querySelector("'+parent+'").innerHTML += `'+compiler([
		{
			condition: true,
			line: html	(
							tag,
							`id="${id}" class="alert ${template}"`+
							attr_append(attr, { role: 'alert' }),
							content+
							html	(
										'style',
										'',
										style
									)+
									(
										(dismisable)
										?(
											html(
												'button',
													{
														type: 'button',
														class: 'close',
														'data-dismiss': 'alert',
														'aria-label': 'close'
													},
														html(
																'span',
																{'aria-hidden': 'true'},
																'&times;'
															)
												)
										) 
										:''
									)
						)
		}
	])+'`;'+((script && script.length > 0)?script+';' :'');
}
export default Alert;

