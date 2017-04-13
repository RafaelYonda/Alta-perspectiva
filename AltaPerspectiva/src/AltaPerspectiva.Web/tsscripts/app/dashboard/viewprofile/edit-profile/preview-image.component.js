var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ImageUploadService } from '../../../services/image-upload.service';
var PreviewImageComponent = (function () {
    function PreviewImageComponent(profileService, _imgService, toastr, vcr) {
        this.profileService = profileService;
        this._imgService = _imgService;
        this.toastr = toastr;
        this.close = new EventEmitter();
        this.name = 'Angular2';
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
    PreviewImageComponent.prototype.ngOnInit = function () {
    };
    PreviewImageComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    PreviewImageComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    PreviewImageComponent.prototype.cropped = function (bounds) {
        this.croppedHeight = bounds.bottom - bounds.top;
        this.croppedWidth = bounds.right - bounds.left;
    };
    PreviewImageComponent.prototype.onUpdate = function () {
        var _this = this;
        if (this.data1.image) {
            var fileArray = this.data1.image.split(';');
            var type = fileArray[0];
            var extension = "";
            if (type == "data:image/jpeg") {
                extension = ".jpg";
            }
            if (type == "data:image/png") {
                extension = ".png";
            }
            if (extension == "") {
                this.toastr.error('Selecciona una imagen jpg/png', '¡Oops!');
                return;
            }
            var imageName = this.userId + extension;
            var img = '<img src="' + this.data1.image + '">';
            this._imgService
                .uploadCroppedImage(img, this.userId, imageName)
                .subscribe(function (res) {
                _this.toastr.success('Imagen cambiada !', '¡Perfecto! ');
                _this.close.emit('event');
            });
        }
        else {
            this.toastr.error('Selecciona una imagen jpg/png', '¡Oops!');
            return;
        }
    };
    PreviewImageComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    return PreviewImageComponent;
}());
__decorate([
    ViewChild('cropper', undefined),
    __metadata("design:type", ImageCropperComponent)
], PreviewImageComponent.prototype, "cropper", void 0);
PreviewImageComponent = __decorate([
    Component({
        selector: 'preview-image',
        templateUrl: 'preview-image.component.html',
        providers: [ProfileService],
    }),
    __metadata("design:paramtypes", [ProfileService, ImageUploadService, ToastsManager, ViewContainerRef])
], PreviewImageComponent);
export { PreviewImageComponent };
