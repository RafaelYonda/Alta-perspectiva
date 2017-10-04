
export const profilePath: string = '../../../../category/';
export const categoryPath: string = '../../../../profile/'; 
export const isIE = (window.navigator.userAgent.toLowerCase().indexOf('trident')) > 0;

export const SITE_URL: string = 'http://alta-staging.azurewebsites.net'; 
export const AUTH_SITE_URL: string = 'http://alta-staging-auth.azurewebsites.net';

//export const AUTH_SITE_URL: string = 'http://altaauth.azurewebsites.net';
//export const SITE_URL: string = 'http://www.altaperspectiva.com'; 

export class LoggedInUser {
    userId: string;
    name: string;
    occupassion: string;
    imageUrl: string;
    credentialId: string;
}