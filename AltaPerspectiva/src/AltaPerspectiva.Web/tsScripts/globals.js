export var profilePath = '../../../../category/';
export var categoryPath = '../../../../profile/';
export var isIE = (window.navigator.userAgent.toLowerCase().indexOf('trident')) > 0;
export var SITE_URL = 'http://alta-staging.azurewebsites.net';
export var AUTH_SITE_URL = 'http://alta-staging-auth.azurewebsites.net';
var LoggedInUser = (function () {
    function LoggedInUser() {
    }
    return LoggedInUser;
}());
export { LoggedInUser };
