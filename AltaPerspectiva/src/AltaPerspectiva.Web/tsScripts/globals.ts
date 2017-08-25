
export const profilePath: string = '../../../../category/';
export const categoryPath: string = '../../../../profile/'; 
export const SITE_URL: string = 'http://alta-staging.azurewebsites.net'; 
export const AUTH_SITE_URL: string = 'http://alta-staging-auth.azurewebsites.net';
//export const AUTH_SITE_URL: string = 'http://altaauth.azurewebsites.net/';
//export const SITE_URL: string = 'http://www.altaperspectiva.com/'; 

export class AppSettings {
    public static SITE_URL = 'http://alta-staging.azurewebsites.net';
    //public static SITE_URL = 'http://www.altaperspectiva.com/';
    public static AUTH_SITE_URL: string = 'http://alta-staging-auth.azurewebsites.net';
    //export const AUTH_SITE_URL: string = 'http://altaauth.azurewebsites.net/';
}
export class LoggedInUser {
    userId: string;
    name: string;
    occupassion: string;
    imageUrl: string;
    credentialId: string;
}