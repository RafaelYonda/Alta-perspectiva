import { Component, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild  } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { User } from '../../../services/models';
import { VirtualStore, ProductComment } from '../../../services/models/models.profile';
import { ActivatedRoute } from '@angular/router';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { AuthenticationService } from '../../../services/authentication.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/virtual-store/item-dialog.component.html',
    providers: [AuthenticationService]
})
export class ItemDialogComponent {
    virtualStore: VirtualStore
    private sub: any;
    user: User[];
    close = new EventEmitter();
    screenShotPath: string;
    comment: ProductComment = new ProductComment();
    constructor(private _route: ActivatedRoute, private profileServ: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private _authService: AuthenticationService) {
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comment.virtualStoreId = this.virtualStore.id;
        this._authService.getLoggedinObj().subscribe(res => {
            this.comment.userViewModel = res;
        });
    }
    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
       // var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];

        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    ngOnDestroy() {
       
    }
    postComment() {
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        if (this.comment.commentText == "")
            return;
        this.profileServ.SaveVirtualStoreProductComment(this.comment).subscribe(res => {
            
            this.virtualStore.productComments.push(this.comment);
            this.comment = new ProductComment();
            this.ngOnInit();
        });
    }
    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        //this.onClickedExit();
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }

}