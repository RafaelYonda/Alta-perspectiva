import { Component, EventEmitter, ViewChild, ViewContainerRef} from '@angular/core';
//import { Place } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ImageUploadService } from '../../../services/image-upload.service';

@Component({
    selector: 'preview-image',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/preview-image.component.html',
    providers: [ProfileService],
})

export class PreviewImageComponent {
   // place: Place = new Place();
    imageLink: string;
    croppedFile: any;

    name: string;
    data1: any;
    cropperSettings1: CropperSettings;
    croppedWidth: number;
    croppedHeight: number;
    userId:string;

    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    constructor(private profileService: ProfileService, private _imgService: ImageUploadService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.name = 'Angular2'
        this.cropperSettings1 = new CropperSettings();
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;

        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 10;
        this.cropperSettings1.minHeight = 10;

        this.cropperSettings1.rounded = false;
        this.cropperSettings1.keepAspect = false;

        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

        this.data1 = {};
    }
    ngOnInit(){
        var image: any = new Image();
        var file: File = this.croppedFile[0];
        var myReader: FileReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent: any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);

        };
        myReader.readAsDataURL(file);
    }
    close = new EventEmitter();

    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    cropped(bounds: Bounds) {
        this.croppedHeight = bounds.bottom - bounds.top;
        this.croppedWidth = bounds.right - bounds.left;
    }
    onUpdate() {
        var img = '<img src="' + this.data1.image + '">';
        var imageName = this.croppedFile[0].name;
        this._imgService
            .uploadCroppedImage(img, this.userId, imageName)
            .subscribe(res => {
                this.toastr.success('Image Chnaged successfully!', 'success');
                this.close.emit('event');
            });
    }
  
}