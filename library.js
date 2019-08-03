import Alert from './types/Alert.constructor.js';
import Badge from './types/Badge.constructor.js';
import Breadcrumb from './types/Breadcrumb.constructor.js';
import Card from './types/Card.constructor.js';
import Button from './types/Button.constructor.js';

const Write = function(s){
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length-1];
    lastScript.insertAdjacentHTML("beforebegin", s)
}
const component = {
    Alert: function(input){
                Write(Alert(input))
            },
    Badge: function(input){
                Write(Badge(input))
            },
    Breadcrumb: function(input){
                Write(Breadcrumb(input))
            },
    Card: function(input){
                Write(Card(input))
            },
    Button: function(input){
                Write(Button(input))
                $('[data-toggle="popover"]').popover()
                $('[data-toggle="tooltip"]').tooltip()
                $('.dropdown-toggle').dropdown()
            }
}
export {Button, Alert, Badge, Breadcrumb, Card,component as default}