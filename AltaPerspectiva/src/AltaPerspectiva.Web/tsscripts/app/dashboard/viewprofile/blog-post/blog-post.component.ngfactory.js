var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from './blog-post.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '../../../services/blog.service';
import * as import7 from '../../../services/authentication.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/core/src/linker/component_factory_resolver';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '../../../shared/nav-bar/nav-bar.component';
import * as import16 from '../../../shared/nav-bar/nav-bar.component.ngfactory';
import * as import17 from '@angular/core/src/linker/view_container';
import * as import18 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import19 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/common/src/pipes/date_pipe';
import * as import21 from '@angular/router/src/router';
import * as import22 from '@angular/common/src/location/location_strategy';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/core/src/i18n/tokens';
import * as import25 from '@angular/router/src/directives/router_link';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import28 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import29 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import30 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import31 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import32 from 'ngx-quill/src/quill-editor.component';
import * as import33 from '../../../../../node_modules/ngx-quill/src/quill-editor.component.ngfactory';
import * as import34 from '@angular/core/src/change_detection/change_detection_util';
import * as import35 from '@angular/core/src/linker/element_ref';
import * as import36 from '@angular/forms/src/directives/default_value_accessor';
import * as import37 from '@angular/forms/src/directives/validators';
import * as import38 from '@angular/forms/src/validators';
import * as import39 from '@angular/forms/src/directives/control_value_accessor';
import * as import40 from '@angular/forms/src/directives/ng_model';
import * as import41 from '@angular/forms/src/directives/ng_control';
import * as import42 from '@angular/forms/src/directives/ng_control_status';
import * as import43 from '@angular/forms/src/directives/ng_form';
import * as import44 from '@angular/forms/src/directives/control_container';
import * as import45 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import46 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import47 from '@angular/common/src/directives/ng_for';
import * as import48 from '@angular/core/src/security';
import * as import49 from './post-status.component';
import * as import50 from './post-status.component.ngfactory';
import * as import51 from './post-comment.component';
import * as import52 from './post-comment.component.ngfactory';
var Wrapper_BlogPostComponent = (function () {
    function Wrapper_BlogPostComponent(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.BlogPostComponent(p0, p1, p2, p3, p4);
    }
    Wrapper_BlogPostComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BlogPostComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BlogPostComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BlogPostComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BlogPostComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BlogPostComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BlogPostComponent;
}());
export { Wrapper_BlogPostComponent };
var renderType_BlogPostComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BlogPostComponent_Host0 = (function (_super) {
    __extends(View_BlogPostComponent_Host0, _super);
    function View_BlogPostComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BlogPostComponent_Host0, renderType_BlogPostComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BlogPostComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BlogPostComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import11.Http, this.parentIndex));
        this._BlogService_0_4 = new import6.BlogService(this.injectorGet(import11.Http, this.parentIndex));
        this._AuthenticationService_0_5 = new import7.AuthenticationService(this.injectorGet(import11.Http, this.parentIndex));
        this._BlogPostComponent_0_6 = new Wrapper_BlogPostComponent(this.injectorGet(import12.ActivatedRoute, this.parentIndex), this._ProfileService_0_3, this.injectorGet(import13.ComponentFactoryResolver, this.parentIndex), this._BlogService_0_4, this._AuthenticationService_0_5);
        this.compView_0.create(this._BlogPostComponent_0_6.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._BlogPostComponent_0_6.context);
    };
    View_BlogPostComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import6.BlogService) && (0 === requestNodeIndex))) {
            return this._BlogService_0_4;
        }
        if (((token === import7.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_5;
        }
        if (((token === import0.BlogPostComponent) && (0 === requestNodeIndex))) {
            return this._BlogPostComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BlogPostComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BlogPostComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BlogPostComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent_Host0;
}(import1.AppView));
export var BlogPostComponentNgFactory = new import10.ComponentFactory('ng-component', View_BlogPostComponent_Host0, import0.BlogPostComponent);
var styles_BlogPostComponent = ['.blog-edit-panel[_ngcontent-%COMP%] {\n        width: 45%;\n        margin: 5px auto;\n        text-align: center;\n    }\n\n    .blog-post[_ngcontent-%COMP%] {\n        text-align: left;\n        margin-top: 10px;\n    }\n\n    .blog-header[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .blog-list[_ngcontent-%COMP%] {\n        width: 60%;\n        margin: 5px auto;\n        cursor: pointer;\n    }\n\n    .btn-blog-edit[_ngcontent-%COMP%] {\n        \n        width: 100%;\n        margin: 0 auto;\n        text-align: right;\n        padding-right: 3px;\n        color: #908c8c;\n        margin-bottom: 30px;\n    }\n    .blog-edit-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n        color: #908c8c;\n    }\n        .btn-blog-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            border-bottom: 1px solid #ece4e4;\n            width: 86%;\n            border-top: 1px;\n            border-left: 1px;\n            border-right: 1px;\n            padding: 2px;\n            \n            text-align: center;\n        }\n\n    .transparent-input[_ngcontent-%COMP%] {\n        border: 1px;\n        width: 100%;\n    }\n\n    .txt-small-grey[_ngcontent-%COMP%] {\n        color: #a4a1a1;\n    }\n\n    .margin-top-5[_ngcontent-%COMP%] {\n        margin-top: 5px;\n    }\n    @media only screen and (max-width:767px){\n        .blog-list[_ngcontent-%COMP%]{\n            width:95%;\n        }\n    }'];
var renderType_BlogPostComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_BlogPostComponent, {});
var View_BlogPostComponent0 = (function (_super) {
    __extends(View_BlogPostComponent0, _super);
    function View_BlogPostComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BlogPostComponent0, renderType_BlogPostComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BlogPostComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_blogPostDetail_0 = new import14.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav-bar', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_1 = new import16.View_NavBarComponent0(this.viewUtils, this, 1, this._el_1);
        this._AuthenticationService_1_3 = new import7.AuthenticationService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._NavBarComponent_1_4 = new import16.Wrapper_NavBarComponent(this._AuthenticationService_1_3, this.parentView.injectorGet(import13.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import21.Router, this.parentIndex));
        this.compView_1.create(this._NavBarComponent_1_4.context);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_3 = new import17.ViewContainer(3, null, this, this._el_3);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'category-panel-xs', 'id', 'toggleMenu'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'menu-container visible-xs'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'cloe-button'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, ' ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'i', new import3.InlineArray2(2, 'class', 'fa fa-arrow-left'), null);
        this._text_14 = this.renderer.createText(this._el_11, ' ', null);
        this._text_15 = this.renderer.createText(this._el_9, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_7, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'li', new import3.InlineArray2(2, 'class', ''), null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_20_3 = new import18.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import21.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import22.LocationStrategy, this.parentIndex));
        this._text_21 = this.renderer.createText(this._el_20, 'Alta Perspectiva', null);
        this._text_22 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_17, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_23, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_24_3 = new import18.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import21.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import22.LocationStrategy, this.parentIndex));
        this._text_25 = this.renderer.createText(this._el_24, 'Preguntas', null);
        this._text_26 = this.renderer.createText(this._el_17, '\n            ', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._vc_27 = new import17.ViewContainer(27, 17, this, this._anchor_27);
        this._TemplateRef_27_5 = new import23.TemplateRef_(this, 27, this._anchor_27);
        this._NgIf_27_6 = new import19.Wrapper_NgIf(this._vc_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_17, '\n            ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._vc_29 = new import17.ViewContainer(29, 17, this, this._anchor_29);
        this._TemplateRef_29_5 = new import23.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import19.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_17, '\n            ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._vc_31 = new import17.ViewContainer(31, 17, this, this._anchor_31);
        this._TemplateRef_31_5 = new import23.TemplateRef_(this, 31, this._anchor_31);
        this._NgIf_31_6 = new import19.Wrapper_NgIf(this._vc_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_17, '\n        ', null);
        this._text_33 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_5, '\n\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_36 = new import17.ViewContainer(36, null, this, this._anchor_36);
        this._TemplateRef_36_5 = new import23.TemplateRef_(this, 36, this._anchor_36);
        this._NgIf_36_6 = new import19.Wrapper_NgIf(this._vc_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_38 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_40 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_41 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_42 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_42 = new import17.ViewContainer(42, null, this, this._anchor_42);
        this._TemplateRef_42_5 = new import23.TemplateRef_(this, 42, this._anchor_42);
        this._NgIf_42_6 = new import19.Wrapper_NgIf(this._vc_42.vcRef, this._TemplateRef_42_5);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_24));
        this._pipe_date_0 = new import20.DatePipe(this.parentView.injectorGet(import24.LOCALE_ID, this.parentIndex));
        this._viewQuery_blogPostDetail_0.reset([this._vc_3.vcRef]);
        this.context.blogPostDetailDialogAnchor = this._viewQuery_blogPostDetail_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._anchor_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._anchor_42
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_BlogPostComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import7.AuthenticationService) && (1 === requestNodeIndex))) {
            return this._AuthenticationService_1_3;
        }
        if (((token === import15.NavBarComponent) && (1 === requestNodeIndex))) {
            return this._NavBarComponent_1_4.context;
        }
        if (((token === import25.RouterLinkWithHref) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._RouterLinkWithHref_20_3.context;
        }
        if (((token === import25.RouterLinkWithHref) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._RouterLinkWithHref_24_3.context;
        }
        if (((token === import23.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import26.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6.context;
        }
        if (((token === import23.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import26.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import23.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import26.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import23.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import26.NgIf) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        if (((token === import23.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import26.NgIf) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavBarComponent_1_4.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_20_0_0 = '/';
        this._RouterLinkWithHref_20_3.check_routerLink(currVal_20_0_0, throwOnChange, false);
        this._RouterLinkWithHref_20_3.ngDoCheck(this, this._el_20, throwOnChange);
        var currVal_24_0_0 = '/question/home/1';
        this._RouterLinkWithHref_24_3.check_routerLink(currVal_24_0_0, throwOnChange, false);
        this._RouterLinkWithHref_24_3.ngDoCheck(this, this._el_24, throwOnChange);
        var currVal_27_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_27_6.check_ngIf(currVal_27_0_0, throwOnChange, false);
        this._NgIf_27_6.ngDoCheck(this, this._anchor_27, throwOnChange);
        var currVal_29_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        var currVal_31_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        var currVal_36_0_0 = this.context.isOwner;
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.ngDoCheck(this, this._anchor_36, throwOnChange);
        var currVal_42_0_0 = this.context.blogposts;
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_27.detectChangesInNestedViews(throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_36.detectChangesInNestedViews(throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_20_3.checkHost(this, this, this._el_20, throwOnChange);
        this._RouterLinkWithHref_24_3.checkHost(this, this, this._el_24, throwOnChange);
        this.compView_1.internalDetectChanges(throwOnChange);
    };
    View_BlogPostComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_27.destroyNestedViews();
        this._vc_29.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_36.destroyNestedViews();
        this._vc_42.destroyNestedViews();
        this.compView_1.destroy();
        this._RouterLinkWithHref_20_3.ngOnDestroy();
        this._RouterLinkWithHref_24_3.ngOnDestroy();
    };
    View_BlogPostComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 27)) {
            return new View_BlogPostComponent1(this.viewUtils, this, 27, this._anchor_27, this._vc_27);
        }
        if ((nodeIndex == 29)) {
            return new View_BlogPostComponent2(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        if ((nodeIndex == 31)) {
            return new View_BlogPostComponent3(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        if ((nodeIndex == 36)) {
            return new View_BlogPostComponent4(this.viewUtils, this, 36, this._anchor_36, this._vc_36);
        }
        if ((nodeIndex == 42)) {
            return new View_BlogPostComponent11(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        return null;
    };
    View_BlogPostComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogPostComponent0.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_20_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_BlogPostComponent0.prototype.handleEvent_24 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_24_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_BlogPostComponent0;
}(import1.AppView));
export { View_BlogPostComponent0 };
var View_BlogPostComponent1 = (function (_super) {
    __extends(View_BlogPostComponent1, _super);
    function View_BlogPostComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent1, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signout'), null);
        this._text_2 = this.renderer.createText(this._el_1, ' Cerrar sesión ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_BlogPostComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent1;
}(import1.AppView));
var View_BlogPostComponent2 = (function (_super) {
    __extends(View_BlogPostComponent2, _super);
    function View_BlogPostComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent2, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Iniciar sesión', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_BlogPostComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent2;
}(import1.AppView));
var View_BlogPostComponent3 = (function (_super) {
    __extends(View_BlogPostComponent3, _super);
    function View_BlogPostComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent3, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Regístrate ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_BlogPostComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent3;
}(import1.AppView));
var View_BlogPostComponent4 = (function (_super) {
    __extends(View_BlogPostComponent4, _super);
    function View_BlogPostComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogPostComponent4, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_83 = import34.UNINITIALIZED;
        _this._arr_84 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._arr_85 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._arr_86 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._map_87 = import3.pureProxy1(function (p0) {
            return { toolbar: p0 };
        });
        _this._map_88 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_89 = import34.UNINITIALIZED;
        return _this;
    }
    View_BlogPostComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'blog-edit-panel'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import17.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import23.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'btn-blog-edit'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import17.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import23.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import19.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_4, '\n        ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_8 = new import17.ViewContainer(8, 4, this, this._anchor_8);
        this._TemplateRef_8_5 = new import23.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import19.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_11 = new import17.ViewContainer(11, 0, this, this._anchor_11);
        this._TemplateRef_11_5 = new import23.TemplateRef_(this, 11, this._anchor_11);
        this._NgIf_11_6 = new import19.Wrapper_NgIf(this._vc_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'btn-blog-edit'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_15 = new import17.ViewContainer(15, 13, this, this._anchor_15);
        this._TemplateRef_15_5 = new import23.TemplateRef_(this, 15, this._anchor_15);
        this._NgIf_15_6 = new import19.Wrapper_NgIf(this._vc_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_17 = new import17.ViewContainer(17, 13, this, this._anchor_17);
        this._TemplateRef_17_5 = new import23.TemplateRef_(this, 17, this._anchor_17);
        this._NgIf_17_6 = new import19.Wrapper_NgIf(this._vc_17.vcRef, this._TemplateRef_17_5);
        this._text_18 = this.renderer.createText(this._el_13, '\n\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'txt-small-grey'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'Escribir artículo', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_0, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_27_3 = new import27.Wrapper_NgForm(null, null);
        this._ControlContainer_27_4 = this._NgForm_27_3.context;
        this._NgControlStatusGroup_27_5 = new import28.Wrapper_NgControlStatusGroup(this._ControlContainer_27_4);
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'div', new import3.InlineArray2(2, 'class', 'blog-post'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n            ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, '\n                ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'input', new import3.InlineArray16(10, 'class', 'transparent-input', 'id', 'title', 'name', 'title', 'placeholder', 'Agregar título', 'required', ''), null);
        this._DefaultValueAccessor_33_3 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import35.ElementRef(this._el_33));
        this._RequiredValidator_33_4 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_33_5 = [this._RequiredValidator_33_4.context];
        this._NG_VALUE_ACCESSOR_33_6 = [this._DefaultValueAccessor_33_3.context];
        this._NgModel_33_7 = new import31.Wrapper_NgModel(this._ControlContainer_27_4, this._NG_VALIDATORS_33_5, null, this._NG_VALUE_ACCESSOR_33_6);
        this._NgControl_33_8 = this._NgModel_33_7.context;
        this._NgControlStatus_33_9 = new import28.Wrapper_NgControlStatus(this._NgControl_33_8);
        this._text_34 = this.renderer.createText(this._el_31, '\n            ', null);
        this._text_35 = this.renderer.createText(this._el_29, '\n            ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_29, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_37 = this.renderer.createText(this._el_36, '\n                ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_36, 'quill-editor', new import3.InlineArray8(6, 'id', 'description', 'name', 'description', 'placeholder', 'Escríbe aquí'), null);
        this.compView_38 = new import33.View_QuillEditorComponent0(this.viewUtils, this, 38, this._el_38);
        this._QuillEditorComponent_38_3 = new import33.Wrapper_QuillEditorComponent(new import35.ElementRef(this._el_38));
        this._NG_VALIDATORS_38_4 = [this._QuillEditorComponent_38_3.context];
        this._NG_VALUE_ACCESSOR_38_5 = [this._QuillEditorComponent_38_3.context];
        this._NgModel_38_6 = new import31.Wrapper_NgModel(this._ControlContainer_27_4, this._NG_VALIDATORS_38_4, null, this._NG_VALUE_ACCESSOR_38_5);
        this._NgControl_38_7 = this._NgModel_38_6.context;
        this._NgControlStatus_38_8 = new import28.Wrapper_NgControlStatus(this._NgControl_38_7);
        this.compView_38.create(this._QuillEditorComponent_38_3.context);
        this._text_39 = this.renderer.createText(this._el_36, '\n                ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_36, 'button', new import3.InlineArray2(2, 'class', 'btn btn-alta-primary pull-right margin-top-5 btn-sm'), null);
        this._text_41 = this.renderer.createText(this._el_40, 'Publicar', null);
        this._text_42 = this.renderer.createText(this._el_36, '\n            ', null);
        this._text_43 = this.renderer.createText(this._el_29, '\n        ', null);
        this._text_44 = this.renderer.createText(this._el_27, '\n    ', null);
        this._text_45 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'margin-bottom:50px'), null);
        this._text_47 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_27));
        this._NgForm_27_3.subscribe(this, this.eventHandler(this.handleEvent_27), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_33));
        this._NgModel_33_7.subscribe(this, this.eventHandler(this.handleEvent_33), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray2(2, 'ngModelChange', null), this.eventHandler(this.handleEvent_38));
        this._NgModel_38_6.subscribe(this, this.eventHandler(this.handleEvent_38), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._anchor_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_BlogPostComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import26.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import23.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import26.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import23.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import26.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        if (((token === import23.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import26.NgIf) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === import23.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import26.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === import23.TemplateRef) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === import26.NgIf) && (17 === requestNodeIndex))) {
            return this._NgIf_17_6.context;
        }
        if (((token === import36.DefaultValueAccessor) && (33 === requestNodeIndex))) {
            return this._DefaultValueAccessor_33_3.context;
        }
        if (((token === import37.RequiredValidator) && (33 === requestNodeIndex))) {
            return this._RequiredValidator_33_4.context;
        }
        if (((token === import38.NG_VALIDATORS) && (33 === requestNodeIndex))) {
            return this._NG_VALIDATORS_33_5;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_33_6;
        }
        if (((token === import40.NgModel) && (33 === requestNodeIndex))) {
            return this._NgModel_33_7.context;
        }
        if (((token === import41.NgControl) && (33 === requestNodeIndex))) {
            return this._NgControl_33_8;
        }
        if (((token === import42.NgControlStatus) && (33 === requestNodeIndex))) {
            return this._NgControlStatus_33_9.context;
        }
        if (((token === import32.QuillEditorComponent) && (38 === requestNodeIndex))) {
            return this._QuillEditorComponent_38_3.context;
        }
        if (((token === import38.NG_VALIDATORS) && (38 === requestNodeIndex))) {
            return this._NG_VALIDATORS_38_4;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && (38 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_38_5;
        }
        if (((token === import40.NgModel) && (38 === requestNodeIndex))) {
            return this._NgModel_38_6.context;
        }
        if (((token === import41.NgControl) && (38 === requestNodeIndex))) {
            return this._NgControl_38_7;
        }
        if (((token === import42.NgControlStatus) && (38 === requestNodeIndex))) {
            return this._NgControlStatus_38_8.context;
        }
        if (((token === import43.NgForm) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._NgForm_27_3.context;
        }
        if (((token === import44.ControlContainer) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._ControlContainer_27_4;
        }
        if (((token === import42.NgControlStatusGroup) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._NgControlStatusGroup_27_5.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.isEditTitle;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_6_0_0 = !this.parentView.context.isEditTitle;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = this.parentView.context.isEditTitle;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_11_0_0 = !this.parentView.context.isEditDescription;
        this._NgIf_11_6.check_ngIf(currVal_11_0_0, throwOnChange, false);
        this._NgIf_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        var currVal_15_0_0 = !this.parentView.context.isEditDescription;
        this._NgIf_15_6.check_ngIf(currVal_15_0_0, throwOnChange, false);
        this._NgIf_15_6.ngDoCheck(this, this._anchor_15, throwOnChange);
        var currVal_17_0_0 = this.parentView.context.isEditDescription;
        this._NgIf_17_6.check_ngIf(currVal_17_0_0, throwOnChange, false);
        this._NgIf_17_6.ngDoCheck(this, this._anchor_17, throwOnChange);
        this._NgForm_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        this._NgControlStatusGroup_27_5.ngDoCheck(this, this._el_27, throwOnChange);
        this._DefaultValueAccessor_33_3.ngDoCheck(this, this._el_33, throwOnChange);
        var currVal_33_1_0 = '';
        this._RequiredValidator_33_4.check_required(currVal_33_1_0, throwOnChange, false);
        this._RequiredValidator_33_4.ngDoCheck(this, this._el_33, throwOnChange);
        var currVal_33_2_0 = 'title';
        this._NgModel_33_7.check_name(currVal_33_2_0, throwOnChange, false);
        var currVal_33_2_1 = this.parentView.context.blogPost.title;
        this._NgModel_33_7.check_model(currVal_33_2_1, throwOnChange, false);
        this._NgModel_33_7.ngDoCheck(this, this._el_33, throwOnChange);
        this._NgControlStatus_33_9.ngDoCheck(this, this._el_33, throwOnChange);
        var currVal_38_0_0 = this._map_87(this._arr_86(this._arr_84('bold', 'italic', 'underline'), this._arr_85('link', 'image')));
        this._QuillEditorComponent_38_3.check_modules(currVal_38_0_0, throwOnChange, false);
        var currVal_38_0_1 = 'Escríbe aquí';
        this._QuillEditorComponent_38_3.check_placeholder(currVal_38_0_1, throwOnChange, false);
        this._QuillEditorComponent_38_3.ngDoCheck(this, this._el_38, throwOnChange);
        var currVal_38_1_0 = 'description';
        this._NgModel_38_6.check_name(currVal_38_1_0, throwOnChange, false);
        var currVal_38_1_1 = this.parentView.context.blogPost.description;
        this._NgModel_38_6.check_model(currVal_38_1_1, throwOnChange, false);
        var currVal_38_1_2 = this._map_88(true);
        this._NgModel_38_6.check_options(currVal_38_1_2, throwOnChange, false);
        this._NgModel_38_6.ngDoCheck(this, this._el_38, throwOnChange);
        this._NgControlStatus_38_8.ngDoCheck(this, this._el_38, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_15.detectChangesInNestedViews(throwOnChange);
        this._vc_17.detectChangesInNestedViews(throwOnChange);
        var currVal_83 = import3.inlineInterpolate(1, '', ((this.parentView.context._logObj == null) ? null : this.parentView.context._logObj.name), '');
        if (import3.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setText(this._text_22, currVal_83);
            this._expr_83 = currVal_83;
        }
        this._NgControlStatusGroup_27_5.checkHost(this, this, this._el_27, throwOnChange);
        this._RequiredValidator_33_4.checkHost(this, this, this._el_33, throwOnChange);
        this._NgControlStatus_33_9.checkHost(this, this, this._el_33, throwOnChange);
        this._NgControlStatus_38_8.checkHost(this, this.compView_38, this._el_38, throwOnChange);
        var currVal_89 = !this._NgForm_27_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setElementProperty(this._el_40, 'disabled', currVal_89);
            this._expr_89 = currVal_89;
        }
        this.compView_38.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._QuillEditorComponent_38_3.context.ngAfterViewInit();
            }
        }
    };
    View_BlogPostComponent4.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this._vc_8.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_15.destroyNestedViews();
        this._vc_17.destroyNestedViews();
        this.compView_38.destroy();
        this._NgModel_33_7.ngOnDestroy();
        this._QuillEditorComponent_38_3.ngOnDestroy();
        this._NgModel_38_6.ngOnDestroy();
        this._NgForm_27_3.ngOnDestroy();
    };
    View_BlogPostComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent4.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_BlogPostComponent5(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 6)) {
            return new View_BlogPostComponent6(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 8)) {
            return new View_BlogPostComponent7(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 11)) {
            return new View_BlogPostComponent8(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        if ((nodeIndex == 15)) {
            return new View_BlogPostComponent9(this.viewUtils, this, 15, this._anchor_15, this._vc_15);
        }
        if ((nodeIndex == 17)) {
            return new View_BlogPostComponent10(this.viewUtils, this, 17, this._anchor_17, this._vc_17);
        }
        return null;
    };
    View_BlogPostComponent4.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_27_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.parentView.context.saveBlogPost() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogPostComponent4.prototype.handleEvent_33 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_33_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.blogPost.title = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogPostComponent4.prototype.handleEvent_38 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.blogPost.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent4;
}(import1.AppView));
var View_BlogPostComponent5 = (function (_super) {
    __extends(View_BlogPostComponent5, _super);
    function View_BlogPostComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogPostComponent5, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import34.UNINITIALIZED;
        return _this;
    }
    View_BlogPostComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BlogPostComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', ((this.parentView.parentView.context.blog == null) ? null : this.parentView.parentView.context.blog.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_BlogPostComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent5;
}(import1.AppView));
var View_BlogPostComponent6 = (function (_super) {
    __extends(View_BlogPostComponent6, _super);
    function View_BlogPostComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent6, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'editar', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_BlogPostComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent6.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.isEditTitle = true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent6;
}(import1.AppView));
var View_BlogPostComponent7 = (function (_super) {
    __extends(View_BlogPostComponent7, _super);
    function View_BlogPostComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent7, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'placeholder', 'update title', 'type', 'text'), null);
        this._DefaultValueAccessor_2_3 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import35.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._DefaultValueAccessor_2_3.context];
        this._NgModel_2_5 = new import31.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._NgModel_2_5.context;
        this._NgControlStatus_2_7 = new import28.Wrapper_NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'btn btn-primary'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'actualizar', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_2));
        this._NgModel_2_5.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_BlogPostComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.DefaultValueAccessor) && (2 === requestNodeIndex))) {
            return this._DefaultValueAccessor_2_3.context;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import40.NgModel) && (2 === requestNodeIndex))) {
            return this._NgModel_2_5.context;
        }
        if (((token === import41.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_6;
        }
        if (((token === import42.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_7.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = this.parentView.parentView.context.blog.title;
        this._NgModel_2_5.check_model(currVal_2_1_0, throwOnChange, false);
        this._NgModel_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.checkHost(this, this, this._el_2, throwOnChange);
    };
    View_BlogPostComponent7.prototype.destroyInternal = function () {
        this._NgModel_2_5.ngOnDestroy();
    };
    View_BlogPostComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent7.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_2_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.blog.title = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogPostComponent7.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.updateTitle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent7;
}(import1.AppView));
var View_BlogPostComponent8 = (function (_super) {
    __extends(View_BlogPostComponent8, _super);
    function View_BlogPostComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogPostComponent8, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import34.UNINITIALIZED;
        return _this;
    }
    View_BlogPostComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BlogPostComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', ((this.parentView.parentView.context.blog == null) ? null : this.parentView.parentView.context.blog.description), '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_BlogPostComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent8;
}(import1.AppView));
var View_BlogPostComponent9 = (function (_super) {
    __extends(View_BlogPostComponent9, _super);
    function View_BlogPostComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent9, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'editar', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_BlogPostComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent9.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.isEditDescription = true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent9;
}(import1.AppView));
var View_BlogPostComponent10 = (function (_super) {
    __extends(View_BlogPostComponent10, _super);
    function View_BlogPostComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent10, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'placeholder', 'update description', 'type', 'text'), null);
        this._DefaultValueAccessor_2_3 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import35.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._DefaultValueAccessor_2_3.context];
        this._NgModel_2_5 = new import31.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._NgModel_2_5.context;
        this._NgControlStatus_2_7 = new import28.Wrapper_NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'btn btn-primary'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'actualizar ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_2));
        this._NgModel_2_5.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_BlogPostComponent10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.DefaultValueAccessor) && (2 === requestNodeIndex))) {
            return this._DefaultValueAccessor_2_3.context;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import40.NgModel) && (2 === requestNodeIndex))) {
            return this._NgModel_2_5.context;
        }
        if (((token === import41.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_6;
        }
        if (((token === import42.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_7.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = this.parentView.parentView.context.blog.description;
        this._NgModel_2_5.check_model(currVal_2_1_0, throwOnChange, false);
        this._NgModel_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.checkHost(this, this, this._el_2, throwOnChange);
    };
    View_BlogPostComponent10.prototype.destroyInternal = function () {
        this._NgModel_2_5.ngOnDestroy();
    };
    View_BlogPostComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent10.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_2_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.blog.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogPostComponent10.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.updateDescription() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent10;
}(import1.AppView));
var View_BlogPostComponent11 = (function (_super) {
    __extends(View_BlogPostComponent11, _super);
    function View_BlogPostComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent11, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'margin-top:-50px'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import17.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import23.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import45.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.injectorGet(import46.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_5 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5
        ]), null);
        return null;
    };
    View_BlogPostComponent11.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import47.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parentView.context.blogposts;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_BlogPostComponent11.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
    };
    View_BlogPostComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent11.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_BlogPostComponent12(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_BlogPostComponent11;
}(import1.AppView));
var View_BlogPostComponent12 = (function (_super) {
    __extends(View_BlogPostComponent12, _super);
    function View_BlogPostComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogPostComponent12, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_31 = import34.UNINITIALIZED;
        _this._expr_32 = import34.UNINITIALIZED;
        return _this;
    }
    View_BlogPostComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'blog-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'blog-header'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n                ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._vc_19 = new import17.ViewContainer(19, 17, this, this._anchor_19);
        this._TemplateRef_19_5 = new import23.TemplateRef_(this, 19, this._anchor_19);
        this._NgIf_19_6 = new import19.Wrapper_NgIf(this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_17, '\n                ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._vc_21 = new import17.ViewContainer(21, 17, this, this._anchor_21);
        this._TemplateRef_21_5 = new import23.TemplateRef_(this, 21, this._anchor_21);
        this._NgIf_21_6 = new import19.Wrapper_NgIf(this._vc_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(this._el_17, '\n            ', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n        ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        this._pipe_date_0_0 = import3.pureProxy2(this.parentView.parentView._pipe_date_0.transform.bind(this.parentView.parentView._pipe_date_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._text_23,
            this._text_24
        ]), [disposable_0]);
        return null;
    };
    View_BlogPostComponent12.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import26.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import23.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import26.NgIf) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import34.ValueUnwrapper();
        var currVal_19_0_0 = ((this.context.$implicit == null) ? null : this.context.$implicit.description);
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        var currVal_21_0_0 = this.context.$implicit;
        this._NgIf_21_6.check_ngIf(currVal_21_0_0, throwOnChange, false);
        this._NgIf_21_6.ngDoCheck(this, this._anchor_21, throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_21.detectChangesInNestedViews(throwOnChange);
        var currVal_31 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setText(this._text_9, currVal_31);
            this._expr_31 = currVal_31;
        }
        valUnwrapper.reset();
        var currVal_32 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0, this.parentView.parentView._pipe_date_0.transform)(((this.context.$implicit == null) ? null : this.context.$implicit.createdOn), 'dd MMM,yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_32, currVal_32))) {
            this.renderer.setText(this._text_12, currVal_32);
            this._expr_32 = currVal_32;
        }
    };
    View_BlogPostComponent12.prototype.destroyInternal = function () {
        this._vc_19.destroyNestedViews();
        this._vc_21.destroyNestedViews();
    };
    View_BlogPostComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent12.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 19)) {
            return new View_BlogPostComponent13(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 21)) {
            return new View_BlogPostComponent14(this.viewUtils, this, 21, this._anchor_21, this._vc_21);
        }
        return null;
    };
    View_BlogPostComponent12.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openPostDetailDialog(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent12;
}(import1.AppView));
var View_BlogPostComponent13 = (function (_super) {
    __extends(View_BlogPostComponent13, _super);
    function View_BlogPostComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogPostComponent13, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_7 = import34.UNINITIALIZED;
        return _this;
    }
    View_BlogPostComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_3, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Leer más..', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), [disposable_0]);
        return null;
    };
    View_BlogPostComponent13.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7 = ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.description.substring(0, 200));
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_2, 'innerHTML', this.viewUtils.sanitizer.sanitize(import48.SecurityContext.HTML, currVal_7));
            this._expr_7 = currVal_7;
        }
    };
    View_BlogPostComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogPostComponent13.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.openPostDetailDialog(this.parentView.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogPostComponent13;
}(import1.AppView));
var View_BlogPostComponent14 = (function (_super) {
    __extends(View_BlogPostComponent14, _super);
    function View_BlogPostComponent14(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogPostComponent14, renderType_BlogPostComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogPostComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'post-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import50.View_PostStatusComponent0(this.viewUtils, this, 2, this._el_2);
        this._BlogService_2_3 = new import6.BlogService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._PostStatusComponent_2_4 = new import50.Wrapper_PostStatusComponent(this._BlogService_2_3, this.parentView.parentView.parentView.injectorGet(import13.ComponentFactoryResolver, this.parentView.parentView.parentIndex));
        this.compView_2.create(this._PostStatusComponent_2_4.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'blogpost-comment', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import52.View_BlogpostCommentComponent0(this.viewUtils, this, 4, this._el_4);
        this._BlogService_4_3 = new import6.BlogService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._BlogpostCommentComponent_4_4 = new import52.Wrapper_BlogpostCommentComponent(this._BlogService_4_3, this.parentView.parentView.parentView.injectorGet(import13.ComponentFactoryResolver, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import5.ProfileService, this.parentView.parentView.parentIndex));
        this.compView_4.create(this._BlogpostCommentComponent_4_4.context);
        this._text_5 = this.renderer.createText(this._el_0, '\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), null);
        return null;
    };
    View_BlogPostComponent14.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.BlogService) && (2 === requestNodeIndex))) {
            return this._BlogService_2_3;
        }
        if (((token === import49.PostStatusComponent) && (2 === requestNodeIndex))) {
            return this._PostStatusComponent_2_4.context;
        }
        if (((token === import6.BlogService) && (4 === requestNodeIndex))) {
            return this._BlogService_4_3;
        }
        if (((token === import51.BlogpostCommentComponent) && (4 === requestNodeIndex))) {
            return this._BlogpostCommentComponent_4_4.context;
        }
        return notFoundResult;
    };
    View_BlogPostComponent14.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.$implicit;
        this._PostStatusComponent_2_4.check_blogPost(currVal_2_0_0, throwOnChange, false);
        this._PostStatusComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = this.parentView.context.$implicit;
        this._BlogpostCommentComponent_4_4.check_blogPost(currVal_4_0_0, throwOnChange, false);
        this._BlogpostCommentComponent_4_4.ngDoCheck(this, this._el_4, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        this.compView_4.internalDetectChanges(throwOnChange);
    };
    View_BlogPostComponent14.prototype.destroyInternal = function () {
        this.compView_2.destroy();
        this.compView_4.destroy();
        this._BlogpostCommentComponent_4_4.ngOnDestroy();
    };
    View_BlogPostComponent14.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogPostComponent14;
}(import1.AppView));
