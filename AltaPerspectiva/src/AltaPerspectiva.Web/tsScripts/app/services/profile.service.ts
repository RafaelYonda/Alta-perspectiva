import { Injectable } from '@angular/core';
import {Profile} from './models';

@Injectable()
export class ProfileService {
    public profile: Profile;
    constructor() {
        this.profile = new Profile();
    }
    getProfileObj(): Profile {
        return new Profile();
    }
    SaveProfile() {
        console.log(this.profile);
    }
}