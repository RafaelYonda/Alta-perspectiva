export var profilePath = '../../../../category/';
export var categoryPath = '../../../../profile/';
export var isIE = (window.navigator.userAgent.toLowerCase().indexOf('trident')) > 0;
export var AUTH_SITE_URL = 'http://altaauth.azurewebsites.net';
export var SITE_URL = 'http://www.altaperspectiva.com';
var LoggedInUser = (function () {
    function LoggedInUser() {
    }
    return LoggedInUser;
}());
export { LoggedInUser };
