import { Component,ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ItemDialogComponent } from './item-dialog.component';
import { User } from '../../../services/models';
import { ConfigService } from '../../../services/config.service';
import { VirtualStore } from '../../../services/models/models.profile';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/virtual-store/virtual-store.component.html',
    providers: [ConfigService],
})
export class VirtualStoreComponent {
    private sub: any;
    user: User[];
    virtualStores: VirtualStore[];
    screenShotPath: string;
    constructor(private _route: ActivatedRoute, private profileServ: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private _configService: ConfigService) {
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.profileServ.getVirtualStoreItems().subscribe(res => {
            //this._configService.getConfig().subscribe(config => {
            //    //Get config for image
            //    this.screenShotPath = config.virtualStore;

            //});
            this.virtualStores = res;
            console.log(res);
        });
        //this.sub = this._route.parent.params.subscribe(params => {
        //    this.profileServ.GetFollowersByUserId(params['userId']).subscribe(usr => {     //Get User Image
        //        this.user = usr;
        //        console.log(this.user);
        //    });
        //});
    }

    @ViewChild('itemDialog', { read: ViewContainerRef }) itemDialogAnchor: ViewContainerRef;
    openItemDialogAnchor(virtualStore: VirtualStore) {
        this.itemDialogAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemDialogComponent);
        let dialogComponentRef = this.itemDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.virtualStore = virtualStore;
        dialogComponentRef.instance.screenShotPath = this.screenShotPath;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
}