import HTML from './utilities/HTML.func.js';
import Alert from './types/Alert.constructor.js';
import Badge from './types/Badge.constructor.js';
import Breadcrumb from './types/Breadcrumb.constructor.js';
import Card from './types/Card.constructor.js';
import Button from './types/Button.constructor.js';
import Carousel from './types/Carousel.constructor.js';
import Input from './types/Input.constructor.js';
import Jumbotron from './types/Jumbotron.constructor.js';
import Media from './types/Media.constructor.js';
import Modal from './types/Modal.constructor.js';
import Navbar from './types/Navbar.constructor.js';
import Navs from './types/Navs.constructor.js';
import Pagination from './types/Pagination.constructor.js';
import Progress from './types/Progress.constructor.js';
import Scrollspy from './types/Scrollspy.constructor.js';
import Spinner from './types/Spinner.constructor.js';
import Toast from './types/Toast.constructor.js';

const Write = function(s){
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length-1];
    lastScript.insertAdjacentHTML("beforebegin", s)
}
const PRINT = {
    HTML: function(...input){
                Write(HTML(...input))
            },
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
            },
    Carousel: function(input){
                Write(Carousel(input))
            },
    Input: function(input){
                Write(Input(input))
            },
    Jumbotron: function(input){
                Write(Jumbotron(input))
            },
    Media: function(input){
                Write(Media(input))
            },
    Modal: function(input){
                Write(Modal(input))
                $('#myInput').trigger('focus')

            },
    Navbar: function(input){
                Write(Navbar(input))
            },
    Navs: function(input){
                Write(Navs(input))
            },
    Pagination: function(input){
                Write(Pagination(input))
            },
    Progress: function(input){
                Write(Progress(input))
            },
    Scrollspy: function(input){
                Write(Scrollspy(input))
                $('body').scrollspy(['target: scroll']);
            },
    Spinner: function(input){
                Write(Spinner(input))
            },
    Toast: function(input){
                Write(Toast(input))
                $('.toast').toast('show');
            }
}
export {HTML, Button, Alert, Badge, Breadcrumb, Card, Carousel, Input, Jumbotron, Media, Modal, Navbar, Navs, Pagination, Progress, Scrollspy, Spinner, Toast, PRINT as default}