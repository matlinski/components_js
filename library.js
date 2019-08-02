import Alert from './types/Alert.constructor.js';
import Badge from './types/Badge.constructor.js';
import Breadcrumb from './types/Breadcrumb.constructor.js';
import Card from './types/Card.constructor.js';

const Write = function(s){
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length-1];
    lastScript.insertAdjacentHTML("beforebegin", s)
}
const c = {
    Alert: function(input){
                return Write(Alert(input))
            },
    Badge: function(input){
                return Write(Badge(input))
            },
    Breadcrumb: function(input){
                return Write(Breadcrumb(input))
            },
    Card: function(input){
                return Write(Card(input))
            }
}
export default c;