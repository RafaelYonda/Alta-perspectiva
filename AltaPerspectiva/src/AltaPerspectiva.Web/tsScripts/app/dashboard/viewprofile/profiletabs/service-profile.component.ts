import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ProfileService } from '../../../services/profile.service';
import { ConfigService } from '../../../services/config.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/profiletabs/service-profile.component.html',
})
export class ServiceProfileComponent { }