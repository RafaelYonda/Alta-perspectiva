var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ItemDialogComponent } from './item-dialog.component';
import { ConfigService } from '../../../services/config.service';
import { ActivatedRoute } from '@angular/router';
var VirtualStoreComponent = (function () {
    function VirtualStoreComponent(_route, profileServ, componentFactoryResolver, _configService) {
        this._route = _route;
        this.profileServ = profileServ;
        this.componentFactoryResolver = componentFactoryResolver;
        this._configService = _configService;
    }
    VirtualStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(function (params) {
            _this.profileServ.getVirtualStoreItems(params['userId']).subscribe(function (res) {
                _this.emptyMessage = "¡Pronto podrás ofrecer tus productos y servicios de consultoría para emprendedores y microempresas!";
                _this.virtualStores = res;
                console.log(res);
            });
        });
    };
    VirtualStoreComponent.prototype.openItemDialogAnchor = function (virtualStore) {
        this.itemDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemDialogComponent);
        var dialogComponentRef = this.itemDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.virtualStore = virtualStore;
        dialogComponentRef.instance.screenShotPath = this.screenShotPath;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return VirtualStoreComponent;
}());
__decorate([
    ViewChild('itemDialog', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], VirtualStoreComponent.prototype, "itemDialogAnchor", void 0);
VirtualStoreComponent = __decorate([
    Component({
        templateUrl: 'virtual-store.component.html',
        providers: [ConfigService],
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ProfileService, ComponentFactoryResolver, ConfigService])
], VirtualStoreComponent);
export { VirtualStoreComponent };
