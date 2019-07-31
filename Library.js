<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<?php
require_once("utilities/html.func.php");
/**
 * COMPONENT CONSTRUCTOR
 * This is the common contstructor function for all
 * components, regardless of the input it applies
 * the necessary rules to output the fundation
 * of each component.
 */
require_once("types/Component.constructor.php");
/**
 * INFO FUNCTION
 * Is called if the user calles any of the component
 * constructors and doesn't provide a valid input.
 * Outputs an array of settings and passes it to
 * Compiler function.
 */
require_once("utilities/info.php");
/**
 * ATTR.APPEND FUNCTION
 * This function handles specifically attribute input
 * for each component inside compiler function.
 */
require_once("utilities/attr.append.php");
require_once("utilities/secondary_id.php");
/**
 * COMPILER FUNCTION
 * This function is taking the output from Component
 * constructor and compiles it according to the specified
 * settings.
 */
require_once("utilities/compiler.php");
/**
 * BUTTON CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/buttons/
 */
require_once("types/Button.constructor.php");
/**
 * ALERT CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/alerts/
 */
require_once("types/Alert.constructor.php");
/**
 * BADGE CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/badge/
 */
require_once("types/Badge.constructor.php");
/**
 * PROGRESS CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/progress/
 */
require_once("types/Progress.constructor.php");
/**
 * SPINNER CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/spinners/
 */
require_once("types/Spinner.constructor.php");
/**
 * CARD CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/card/
 */
require_once("types/Card.constructor.php");
/**
 * MEDIA CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/media-object/
 */
require_once("types/Media.constructor.php");
/**
 * INPUT CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/input-group/
 */
require_once("types/Input.constructor.php");
/**
 * TOAST CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/toasts/
 */
require_once("types/Toast.constructor.php");
/**
 * PAGINATION CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/pagination/
 */
require_once("types/Pagination.constructor.php");
/**
 * BREADCRUMB CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/breadcrumb/
 */
require_once("types/Breadcrumb.constructor.php");
/**
 * MODAL CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/modal/
 */
require_once("types/Modal.constructor.php");
/**
 * JUMBOTRON CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/jumbotron/
 */
require_once("types/Jumbotron.constructor.php");
/**
 * NAVBAR CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/navbar/
 */
require_once("types/Navbar.constructor.php");
/**
 * NAVS CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/navs/
 */
require_once("types/Navs.constructor.php");
/**
 * CAROUSEL CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/carousel/
 */
require_once("types/Carousel.constructor.php");
/**
 * SCROLLSPY CONSTURCTOR
 * This component is based on:
 * https://getbootstrap.com/docs/4.3/components/scrollspy/
 */
require_once("types/Scrollspy.constructor.php");
?>