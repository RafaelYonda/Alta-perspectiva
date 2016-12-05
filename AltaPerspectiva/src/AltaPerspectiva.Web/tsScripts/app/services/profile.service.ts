import { Injectable } from '@angular/core';
import {Profile} from './models';

@Injectable()
export class ProfileService {
    static instance: ProfileService;
    profile: Profile;
    constructor() {
        this.profile = new Profile();
        return ProfileService.instance = ProfileService.instance || this;
    }
    //constructor() {
    //    this.profile = new Profile();
    //}
    //getProfileObj(): Profile {
    //    return ProfileService.profile;
    //}
    SaveProfile() {
        console.log(ProfileService.instance.profile);
    }
}