import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import html from '../utilities/html.func.js'

function Input(input = '') {
	let {
		content,
		tag,
		attr,
		template,
		label,
		sticker,
		global,
		style,
		id
	} = Component(input, {
		content: 'Content placeholder',
		tag: 'input',
		attr: '',
		template: '',
		label: "Label placeholder",
		sticker: html('span','','@'),
		global: 'col-4',
		style: ''
     }, 'form-group');
     
           if (sticker.match(/<\/span>/)) {
               style += '#'+id+`.form-group>.input-group>div{
                   display: -ms-flexbox;
                   display: flex;
                   -ms-flex-align: center;
                   align-items: center;
                   padding: .375rem .75rem;
                   margin-bottom: 0;
                   font-size: 1rem;
                   font-weight: 400;
                   line-height: 1.5;
                   color: #495057;
                   text-align: center;
                   white-space: nowrap;
                   background-color: #e9ecef;
                   border: 1px solid #ced4da;
                   border-radius: .25rem;
               }`;
           }
           let base_attr = {
               "type"              :  "text",
               "placeholder"       :  "example placeholder",
               "aria-label"        :  "example",
               "aria-describedby"  :  "basic-addon"
          };
           if(tag === 'input'){
                base_attr = {
                    "type"              :  "text",
                    "placeholder"       :  "example placeholder",
                    "aria-label"        :  "example",
                    "aria-describedby"  :  "basic-addon",
                    "value"             :  content
               }
           }
           return compiler([
                          {
                               "condition" : true,
                               "line"      : html(
                                                  'div',
                                                  `id='${id}' style='width:auto' class='form-group ${global} form-control'`,
                                                  ((Array.isArray(label))
                                                       ?html('label', {'for':id, 'class':label[1]}, label[0])
                                                       :html('label', {'for':id}, label)
                                                  )+
                                                  html(
                                                       'div',
                                                       {'class':'input-group','style':'width:auto'}
                                                            ,((sticker)
                                                                 ?((Array.isArray(sticker))
                                                                      ?((sticker[1] !== "append")
                                                                           ?html('div',{'class':'input-group-'+sticker[1]}, sticker[0])+
                                                                           html(tag, `class="form-control ${template}"`+attr_append(attr, base_attr), content)
                                                                           :html(tag, `class="form-control ${template}"`+attr_append(attr, base_attr), content)+
                                                                           html('div',{'class':'input-group-'+sticker[1]}, sticker[0])
                                                                      )
                                                                      :html('div',{'class':'input-group-prepend'}, sticker)+
                                                                      html(tag, `class="form-control ${template}"`+attr_append(attr, base_attr), content)
                                                                 )
                                                                 :html(tag, `class="form-control ${template}"`+attr_append(attr, base_attr), content)
                                                       )
                                                  )+
                                                  ((style && style.length > 0)?(html	(
                                                       'style',
                                                       '',
                                                       style
                                                  )) :'')
                                             )
                          },
                         //  {
                         //       "condition" : is_array(label),
                         //       "line"      : html('label', {'for':id, 'class':label[1]}, label[0])
                                                  
                         //  },
                         //  {
                         //       "condition" : !is_array(label),
                         //       "line"      : html('label', {'for':id}, label)
                         //  },
                         //  {
                         //       "condition" : true,
                         //       "line"      : html(
                         //                          'div',
                         //                          {'class':'input-group','style':'width:auto'}
                         //                               ,((sticker)
                         //                                    ?((Array.isArray(sticker) && sticker[1] !== "append")
                         //                                         ?html('div',{'class':'input-group-'.sticker[1]}, sticker[0])+
                         //                                         html(tag, 'class="form-control"'.attr_append(attr, base_attr), content)
                         //                                         :html(tag, 'class="form-control"'.attr_append(attr, base_attr), content)+
                         //                                         html('div',{'class':'input-group-'.sticker[1]}, sticker[0])
                         //                                    )
                         //                                    :html('div',{'class':'input-group-prepend'}, sticker)
                         //                               )
                         //                          )
                         //  },
                         //  {
                         //       "condition" : sticker && is_array(sticker),
                         //       "line"      : html(tag, 'class="form-control"'.attr_append(attr), content)
                         //  },
                         //  {
                         //       "condition" : sticker && is_array(sticker) && sticker[1] !== "append",
                         //       "line"      : content
                         //  },
                         //  {
                         //       "condition" : sticker && is_array(sticker),
                         //       "line"      : html('div',{'class':'input-group-'.sticker[1]}, sticker[0])
                         //  },
                         //  {
                         //       "condition" : sticker && is_array(sticker),
                         //       "line"      : sticker[0]
                         //  },
                         //  {
                         //      "condition" : sticker && is_array(sticker),
                         //      "line"      : html('/')
                         //  },
                         //  {
                         //       "condition" : sticker && !is_array(sticker),
                         //       "line"      : html('div',{'class':'input-group-prepend'}, sticker)
                         //  },
                         //  {
                         //       "condition" : sticker && !is_array(sticker),
                         //       "line"      : sticker
                         //  },
                         //  {
                         //       "condition" : sticker,
                         //       "line"      : html('/')
                         //  },
                         //  {
                         //       "condition" : true,
                         //       "line"      : html('/')
                         //  },
                         //  {
                         //      "condition" : tag === "input",
                         //      "line"      : html(tag,"class='form-control template' ".attr_append(attr, {
                         //                         "type"              :  "text",
                         //                         "placeholder"       :  "example placeholder",
                         //                         "aria-label"        :  "example",
                         //                         "aria-describedby"  :  "basic-addon",
                         //                         "value"             :  content
                         //                    })
                         //                    )
                         // },
                         //  {
                         //      "condition" : tag !== "input",
                         //      "line"      : html(tag,"class='form-control template' ".attr_append(attr, {
                         //                         "type"              :  "text",
                         //                         "placeholder"       :  "example placeholder",
                         //                         "aria-label"        :  "example",
                         //                         "aria-describedby"  :  "basic-addon"
                         //                    })#
                         //                    )
                         // },
                         // {
                         //      "condition" : tag !== "input",
                         //      "line"      : content
                         // },
                         // {
                         //      "condition" : tag !== "input",
                         //      "line"      : html(tag,'/')
                         // },
                         //  {
                         //      "condition" : !empty(script),
                         //      "line"      : html('script').script.html('script','/')
                         // },
                         // {
                         //      "condition" : !empty(style),
                         //      "line"      : html('style').style.html('style','/')
                         // },
                         //  {
                         //       "condition" : true,
                         //       "line"      : html('/')
                         //  },
                         //  {
                         //       "condition" : true,
                         //       "line"      : html('/')
                         //  },
                         ]);
}
export default Input;