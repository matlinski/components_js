// Dependencies:
// Component, html, attr_append, Compiler
/* global Component, html, attr_append, Compiler */

function Alert(input = '') {
	const {
		content,
		tag,
		attr,
		template,
		dismisable,
		style,
		script,
		id
	} = Component(input, {
		content: 'Content placeholder',
		tag: 'div',
		attr: '',
		template: 'alert-warning fade show',
		dismisable: true,
		style: '',
		script: ''
	}, 'alert');
	return Compiler('alert', [
		{
			condition: true,
			line: html(tag, `id="${id}" class="alert" ${template}` +
				attr_append(attr, { role: 'alert' }))
		},
		{ condition: true, line: content },
		{
			condition: dismisable,
			line: html('button', {
				type: 'button',
				class: 'close',
				'data-dismiss': 'alert',
				'aria-label': 'Close'
			}) + html('span', {
				'aria-hidden': 'true'
			}) +
			'&times;' +
			html('span', '/') +
			html('button', '/')
		},
		{
			condition: script && script.length > 0,
			line: html('script') + script + html('script', '/')
		},
		{
			condition: style && style.length > 0,
			line: html('style') + style + html('style', '/')
		},
		{
			condition: true,
			line: html(tag, '/')
		}
	]);
}

export default Alert;
