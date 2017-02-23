import { Component,ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ItemDialogComponent } from './item-dialog.component';
import { User } from '../../../services/models';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/virtual-store/virtual-store.component.html'
})
export class VirtualStoreComponent {
    private sub: any;
    user: User[];
    constructor(private _route: ActivatedRoute, private profileServ: ProfileService, private componentFactoryResolver: ComponentFactoryResolver) {
        
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        //this.sub = this._route.parent.params.subscribe(params => {
        //    this.profileServ.GetFollowersByUserId(params['userId']).subscribe(usr => {     //Get User Image
        //        this.user = usr;
        //        console.log(this.user);
        //    });
        //});
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    @ViewChild('itemDialog', { read: ViewContainerRef }) itemDialogAnchor: ViewContainerRef;
    openItemDialogAnchor() {
        this.itemDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemDialogComponent);
        let dialogComponentRef = this.itemDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
}