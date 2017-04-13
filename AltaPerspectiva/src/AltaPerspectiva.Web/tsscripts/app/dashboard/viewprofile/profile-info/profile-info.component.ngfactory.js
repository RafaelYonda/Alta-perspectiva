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
import * as import0 from './profile-info.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_container';
import * as import7 from '../../../services/image-upload.service';
import * as import8 from '../../../services/config.service';
import * as import9 from '../../../services/authentication.service';
import * as import10 from '@angular/core/src/linker/view_type';
import * as import11 from '@angular/core/src/change_detection/constants';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/http/src/http';
import * as import14 from '../../../services/profile.service';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from 'ng2-toastr/src/toast-manager';
import * as import17 from '@angular/router/src/router';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '@angular/core/src/security';
import * as import23 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import25 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from '@angular/forms/src/directives/default_value_accessor';
import * as import28 from '@angular/forms/src/directives/control_value_accessor';
import * as import29 from '@angular/forms/src/directives/ng_model';
import * as import30 from '@angular/forms/src/directives/ng_control';
import * as import31 from '@angular/forms/src/directives/ng_control_status';
import * as import32 from 'ngx-quill/src/quill-editor.component';
import * as import33 from '../../../../../node_modules/ngx-quill/src/quill-editor.component.ngfactory';
import * as import34 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import35 from '@angular/forms/src/directives/validators';
import * as import36 from '@angular/forms/src/validators';
var Wrapper_ProfileInfoComponent = (function () {
    function Wrapper_ProfileInfoComponent(p0, p1, p2, p3, p4, p5, p6, p7) {
        this._changed = false;
        this._changes = {};
        this.context = new import0.ProfileInfoComponent(p0, p1, p2, p3, p4, p5, p6, p7);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_ProfileInfoComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ProfileInfoComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_ProfileInfoComponent.prototype.check_isOwner = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.isOwner = currValue;
            this._changes['isOwner'] = new import1.SimpleChange(this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_ProfileInfoComponent.prototype.check_credential = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.credential = currValue;
            this._changes['credential'] = new import1.SimpleChange(this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_ProfileInfoComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ProfileInfoComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ProfileInfoComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ProfileInfoComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onUpdated.subscribe(_eventHandler.bind(view, 'onUpdated')));
        }
    };
    return Wrapper_ProfileInfoComponent;
}());
export { Wrapper_ProfileInfoComponent };
var renderType_ProfileInfoComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ProfileInfoComponent_Host0 = (function (_super) {
    __extends(View_ProfileInfoComponent_Host0, _super);
    function View_ProfileInfoComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ProfileInfoComponent_Host0, renderType_ProfileInfoComponent_Host, import10.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ProfileInfoComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'profile-info', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import6.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_ProfileInfoComponent0(this.viewUtils, this, 0, this._el_0);
        this._ImageUploadService_0_5 = new import7.ImageUploadService(this.injectorGet(import13.Http, this.parentIndex));
        this._ConfigService_0_6 = new import8.ConfigService(this.injectorGet(import13.Http, this.parentIndex));
        this._AuthenticationService_0_7 = new import9.AuthenticationService(this.injectorGet(import13.Http, this.parentIndex));
        this._ProfileInfoComponent_0_8 = new Wrapper_ProfileInfoComponent(this._ImageUploadService_0_5, this._ConfigService_0_6, this.injectorGet(import14.ProfileService, this.parentIndex), this.injectorGet(import15.ComponentFactoryResolver, this.parentIndex), this._AuthenticationService_0_7, this.injectorGet(import16.ToastsManager, this.parentIndex), this._vc_0.vcRef, this.injectorGet(import17.Router, this.parentIndex));
        this.compView_0.create(this._ProfileInfoComponent_0_8.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import12.ComponentRef_(0, this, this._el_0, this._ProfileInfoComponent_0_8.context);
    };
    View_ProfileInfoComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import7.ImageUploadService) && (0 === requestNodeIndex))) {
            return this._ImageUploadService_0_5;
        }
        if (((token === import8.ConfigService) && (0 === requestNodeIndex))) {
            return this._ConfigService_0_6;
        }
        if (((token === import9.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_7;
        }
        if (((token === import0.ProfileInfoComponent) && (0 === requestNodeIndex))) {
            return this._ProfileInfoComponent_0_8.context;
        }
        return notFoundResult;
    };
    View_ProfileInfoComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProfileInfoComponent_0_8.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ProfileInfoComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
        this._ProfileInfoComponent_0_8.ngOnDestroy();
    };
    View_ProfileInfoComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_ProfileInfoComponent_Host0;
}(import2.AppView));
export var ProfileInfoComponentNgFactory = new import12.ComponentFactory('profile-info', View_ProfileInfoComponent_Host0, import0.ProfileInfoComponent);
var styles_ProfileInfoComponent = ['.edit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n        visibility: visible;\n        color: #f6912b;\n    }\n    .description-info[_ngcontent-%COMP%]{\n        min-height:60px;\n    }\n    .profile-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        font-family: "myriadpro-regular";\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 27.5px;\n        border: 1px solid #bdbdbd;\n        border-radius: 3px;\n    }\n\n    .credential-text[_ngcontent-%COMP%] {\n        font-size: 18px;\n        display: inline-block;\n        margin-right: 5px;\n    }\n\n    .profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    .user-name[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        margin-bottom: 5px;\n    }\n\n        .user-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .user-name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            margin-left: 5px;\n        }\n\n    .panel-heading[_ngcontent-%COMP%] {\n        position: relative;\n    }\n\n    .credential[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n    }\n\n        .credential[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            display: inline-block;\n        }\n\n    .heading[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    .dash-panel[_ngcontent-%COMP%] {\n        margin-top: 130px;\n        font-family: \'myriadpro-regular\';\n    }\n    \n    .custom-file-input[_ngcontent-%COMP%] {\n        width: 125px;\n        height: 50px;\n        margin: 5px auto;\n    }\n\n        .custom-file-input[_ngcontent-%COMP%]:focus {\n            outline: none;\n        }\n\n        .custom-file-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n            visibility: hidden;\n        }\n\n        .custom-file-input[_ngcontent-%COMP%]::before {\n            text-align: center;\n            width: 100%;\n            content: \'Upload Image\';\n            display: inline-block;\n            border-radius: 3px;\n            background-color: #ededed;\n            padding: 5px 8px;\n            outline: none;\n            white-space: nowrap;\n            -webkit-user-select: none;\n            cursor: pointer;\n            font-family: typogroteskrounded;\n            font-weight: 700;\n            font-size: 10pt;\n        }\n\n        .custom-file-input[_ngcontent-%COMP%]:hover::before {\n            border-color: black;\n        }\n\n        .custom-file-input[_ngcontent-%COMP%]:active::before {\n            background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n        }\n\n    .description-panel[_ngcontent-%COMP%] {\n        min-height: 50px;\n        min-width: 100%;\n    }\n\n    .btn-container[_ngcontent-%COMP%] {\n        text-align: right;\n        margin-top: 10px;\n    }\n\n        .btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            display: inline-block;\n        }\n\n    a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n        outline: none;\n        text-decoration: none;\n        color: #F6912B;\n    }\n\n    .edit[_ngcontent-%COMP%] {\n        font-size: 13px;\n        font-size: 13px;\n        margin-left: 4px;\n    }\n\n    \n    .profile-image-center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        color: black;\n    }\n\n    .display-hide[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    #userName[_ngcontent-%COMP%]:hover   #userName-btn[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n    \n    #credential-edit[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    #credential[_ngcontent-%COMP%]:hover   #credential-edit[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n    \n    #description-edit[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    #description[_ngcontent-%COMP%]:hover   #description-edit[_ngcontent-%COMP%] {\n        display: inline-block;\n    }'];
var renderType_ProfileInfoComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_ProfileInfoComponent, {});
var View_ProfileInfoComponent0 = (function (_super) {
    __extends(View_ProfileInfoComponent0, _super);
    function View_ProfileInfoComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ProfileInfoComponent0, renderType_ProfileInfoComponent, import10.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_47 = import1.UNINITIALIZED;
        return _this;
    }
    View_ProfileInfoComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_credentialDialogAnchor_0 = new import18.QueryList();
        this._viewQuery_previewImageDialogAnchor_1 = new import18.QueryList();
        this._viewQuery_twitterDialogAnchor_2 = new import18.QueryList();
        this._viewQuery_facebookDialogAnchor_3 = new import18.QueryList();
        this._viewQuery_linkedinDialogAnchor_4 = new import18.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_3 = new import6.ViewContainer(3, 1, this, this._el_3);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_5 = new import6.ViewContainer(5, 1, this, this._el_5);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_7 = new import6.ViewContainer(7, 1, this, this._el_7);
        this._text_8 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_9 = new import6.ViewContainer(9, 1, this, this._el_9);
        this._text_10 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_11 = new import6.ViewContainer(11, 1, this, this._el_11);
        this._text_12 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_14 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'profile-info-container'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'div', new import3.InlineArray2(2, 'class', 'col-md-3'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'profile-image-center'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'img', new import3.InlineArray2(2, 'class', 'profile-image'), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n            ', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._vc_22 = new import6.ViewContainer(22, 18, this, this._anchor_22);
        this._TemplateRef_22_5 = new import20.TemplateRef_(this, 22, this._anchor_22);
        this._NgIf_22_6 = new import19.Wrapper_NgIf(this._vc_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_18, '\n        ', null);
        this._text_24 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_14, 'div', new import3.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n        ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._vc_28 = new import6.ViewContainer(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import20.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import19.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_26, '\n\n    ', null);
        this._text_30 = this.renderer.createText(this._el_14, '\n', null);
        this._viewQuery_credentialDialogAnchor_0.reset([this._vc_3.vcRef]);
        this.context.credentialDialogAnchor = this._viewQuery_credentialDialogAnchor_0.first;
        this._viewQuery_previewImageDialogAnchor_1.reset([this._vc_5.vcRef]);
        this.context.previewImageDialogAnchor = this._viewQuery_previewImageDialogAnchor_1.first;
        this._viewQuery_twitterDialogAnchor_2.reset([this._vc_7.vcRef]);
        this.context.twitterDialogAnchor = this._viewQuery_twitterDialogAnchor_2.first;
        this._viewQuery_facebookDialogAnchor_3.reset([this._vc_9.vcRef]);
        this.context.facebookDialogAnchor = this._viewQuery_facebookDialogAnchor_3.first;
        this._viewQuery_linkedinDialogAnchor_4.reset([this._vc_11.vcRef]);
        this.context.linkedinDialogAnchor = this._viewQuery_linkedinDialogAnchor_4.first;
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
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30
        ]), null);
        return null;
    };
    View_ProfileInfoComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import21.NgIf) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === import20.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import21.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        return notFoundResult;
    };
    View_ProfileInfoComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_22_0_0 = this.context.isOwner;
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.ngDoCheck(this, this._anchor_22, throwOnChange);
        var currVal_28_0_0 = this.context.credential;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        var currVal_47 = import3.inlineInterpolate(1, '', this.context.imageLink, '');
        if (import3.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementProperty(this._el_20, 'src', this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL, currVal_47));
            this._expr_47 = currVal_47;
        }
    };
    View_ProfileInfoComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_22.destroyNestedViews();
        this._vc_28.destroyNestedViews();
    };
    View_ProfileInfoComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 22)) {
            return new View_ProfileInfoComponent1(this.viewUtils, this, 22, this._anchor_22, this._vc_22);
        }
        if ((nodeIndex == 28)) {
            return new View_ProfileInfoComponent2(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    return View_ProfileInfoComponent0;
}(import2.AppView));
export { View_ProfileInfoComponent0 };
var View_ProfileInfoComponent1 = (function (_super) {
    __extends(View_ProfileInfoComponent1, _super);
    function View_ProfileInfoComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent1, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray8(6, 'class', 'btn btn-default hidden-xs', 'name', 'documents', 'type', 'button'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Foto de perfil', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onUploadClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent1;
}(import2.AppView));
var View_ProfileInfoComponent2 = (function (_super) {
    __extends(View_ProfileInfoComponent2, _super);
    function View_ProfileInfoComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ProfileInfoComponent2, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_90 = import1.UNINITIALIZED;
        _this._expr_91 = import1.UNINITIALIZED;
        _this._expr_92 = import1.UNINITIALIZED;
        _this._expr_93 = import1.UNINITIALIZED;
        return _this;
    }
    View_ProfileInfoComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'profile-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'user-name'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'id', 'userName'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_10 = new import6.ViewContainer(10, 5, this, this._anchor_10);
        this._TemplateRef_10_5 = new import20.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import19.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_12 = this.renderer.createText(this._el_3, '\n                ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_13 = new import6.ViewContainer(13, 3, this, this._anchor_13);
        this._TemplateRef_13_5 = new import20.TemplateRef_(this, 13, this._anchor_13);
        this._NgIf_13_6 = new import19.Wrapper_NgIf(this._vc_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_3, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_17 = new import6.ViewContainer(17, 0, this, this._anchor_17);
        this._TemplateRef_17_5 = new import20.TemplateRef_(this, 17, this._anchor_17);
        this._NgIf_17_6 = new import19.Wrapper_NgIf(this._vc_17.vcRef, this._TemplateRef_17_5);
        this._text_18 = this.renderer.createText(this._el_0, '\n            \n            ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_19 = new import6.ViewContainer(19, 0, this, this._anchor_19);
        this._TemplateRef_19_5 = new import20.TemplateRef_(this, 19, this._anchor_19);
        this._NgIf_19_6 = new import19.Wrapper_NgIf(this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_22 = new import6.ViewContainer(22, 0, this, this._anchor_22);
        this._TemplateRef_22_5 = new import20.TemplateRef_(this, 22, this._anchor_22);
        this._NgIf_22_6 = new import19.Wrapper_NgIf(this._vc_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'description-info', 'id', 'description'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                \n                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_24, '\n                ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_24, null);
        this._vc_28 = new import6.ViewContainer(28, 24, this, this._anchor_28);
        this._TemplateRef_28_5 = new import20.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import19.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_24, '\n            ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_31 = new import6.ViewContainer(31, 0, this, this._anchor_31);
        this._TemplateRef_31_5 = new import20.TemplateRef_(this, 31, this._anchor_31);
        this._NgIf_31_6 = new import19.Wrapper_NgIf(this._vc_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_0, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_38 = this.renderer.createText(this._el_37, ' Twitter', null);
        this._text_39 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._anchor_40 = this.renderer.createTemplateAnchor(this._el_35, null);
        this._vc_40 = new import6.ViewContainer(40, 35, this, this._anchor_40);
        this._TemplateRef_40_5 = new import20.TemplateRef_(this, 40, this._anchor_40);
        this._NgIf_40_6 = new import19.Wrapper_NgIf(this._vc_40.vcRef, this._TemplateRef_40_5);
        this._text_41 = this.renderer.createText(this._el_35, '\n                ', null);
        this._text_42 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_33, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_44 = this.renderer.createText(this._el_43, '\n                    ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_43, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_46 = this.renderer.createText(this._el_45, ' Facebook', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n                    ', null);
        this._anchor_48 = this.renderer.createTemplateAnchor(this._el_43, null);
        this._vc_48 = new import6.ViewContainer(48, 43, this, this._anchor_48);
        this._TemplateRef_48_5 = new import20.TemplateRef_(this, 48, this._anchor_48);
        this._NgIf_48_6 = new import19.Wrapper_NgIf(this._vc_48.vcRef, this._TemplateRef_48_5);
        this._text_49 = this.renderer.createText(this._el_43, '\n                ', null);
        this._text_50 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_33, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_52 = this.renderer.createText(this._el_51, '\n                    ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_51, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_54 = this.renderer.createText(this._el_53, ' Linkedin', null);
        this._text_55 = this.renderer.createText(this._el_51, '\n                    ', null);
        this._anchor_56 = this.renderer.createTemplateAnchor(this._el_51, null);
        this._vc_56 = new import6.ViewContainer(56, 51, this, this._anchor_56);
        this._TemplateRef_56_5 = new import20.TemplateRef_(this, 56, this._anchor_56);
        this._NgIf_56_6 = new import19.Wrapper_NgIf(this._vc_56.vcRef, this._TemplateRef_56_5);
        this._text_57 = this.renderer.createText(this._el_51, '\n                ', null);
        this._text_58 = this.renderer.createText(this._el_33, '\n            ', null);
        this._text_59 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_37, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_37));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_45, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_45));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_53, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_53));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._anchor_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._anchor_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._anchor_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._anchor_56,
            this._text_57,
            this._text_58,
            this._text_59
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_ProfileInfoComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import21.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        if (((token === import20.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import21.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import20.TemplateRef) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === import21.NgIf) && (17 === requestNodeIndex))) {
            return this._NgIf_17_6.context;
        }
        if (((token === import20.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import21.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import20.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import21.NgIf) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === import20.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import21.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import20.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import21.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import20.TemplateRef) && (40 === requestNodeIndex))) {
            return this._TemplateRef_40_5;
        }
        if (((token === import21.NgIf) && (40 === requestNodeIndex))) {
            return this._NgIf_40_6.context;
        }
        if (((token === import20.TemplateRef) && (48 === requestNodeIndex))) {
            return this._TemplateRef_48_5;
        }
        if (((token === import21.NgIf) && (48 === requestNodeIndex))) {
            return this._NgIf_48_6.context;
        }
        if (((token === import20.TemplateRef) && (56 === requestNodeIndex))) {
            return this._TemplateRef_56_5;
        }
        if (((token === import21.NgIf) && (56 === requestNodeIndex))) {
            return this._NgIf_56_6.context;
        }
        return notFoundResult;
    };
    View_ProfileInfoComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10_0_0 = this.parentView.context.isOwner;
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        var currVal_13_0_0 = this.parentView.context.isOwner;
        this._NgIf_13_6.check_ngIf(currVal_13_0_0, throwOnChange, false);
        this._NgIf_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        var currVal_17_0_0 = (!this.parentView.context.credential.title && this.parentView.context.isOwner);
        this._NgIf_17_6.check_ngIf(currVal_17_0_0, throwOnChange, false);
        this._NgIf_17_6.ngDoCheck(this, this._anchor_17, throwOnChange);
        var currVal_19_0_0 = this.parentView.context.credential.title;
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        var currVal_22_0_0 = (!this.parentView.context.credential.description && this.parentView.context.isOwner);
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.ngDoCheck(this, this._anchor_22, throwOnChange);
        var currVal_28_0_0 = this.parentView.context.isOwner;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        var currVal_31_0_0 = this.parentView.context.isOwner;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        var currVal_40_0_0 = this.parentView.context.isOwner;
        this._NgIf_40_6.check_ngIf(currVal_40_0_0, throwOnChange, false);
        this._NgIf_40_6.ngDoCheck(this, this._anchor_40, throwOnChange);
        var currVal_48_0_0 = this.parentView.context.isOwner;
        this._NgIf_48_6.check_ngIf(currVal_48_0_0, throwOnChange, false);
        this._NgIf_48_6.ngDoCheck(this, this._anchor_48, throwOnChange);
        var currVal_56_0_0 = this.parentView.context.isOwner;
        this._NgIf_56_6.check_ngIf(currVal_56_0_0, throwOnChange, false);
        this._NgIf_56_6.ngDoCheck(this, this._anchor_56, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._vc_17.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_40.detectChangesInNestedViews(throwOnChange);
        this._vc_48.detectChangesInNestedViews(throwOnChange);
        this._vc_56.detectChangesInNestedViews(throwOnChange);
        var currVal_90 = !this.parentView.context.isUserHidden;
        if (import3.checkBinding(throwOnChange, this._expr_90, currVal_90)) {
            this.renderer.setElementProperty(this._el_5, 'hidden', currVal_90);
            this._expr_90 = currVal_90;
        }
        var currVal_91 = import3.inlineInterpolate(2, ' ', this.parentView.context.credential.firstName, ' ', this.parentView.context.credential.lastName, ' ');
        if (import3.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setText(this._text_8, currVal_91);
            this._expr_91 = currVal_91;
        }
        var currVal_92 = !this.parentView.context.showDescription;
        if (import3.checkBinding(throwOnChange, this._expr_92, currVal_92)) {
            this.renderer.setElementProperty(this._el_24, 'hidden', currVal_92);
            this._expr_92 = currVal_92;
        }
        var currVal_93 = this.parentView.context.credential.description;
        if (import3.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this.renderer.setElementProperty(this._el_26, 'innerHTML', this.viewUtils.sanitizer.sanitize(import22.SecurityContext.HTML, currVal_93));
            this._expr_93 = currVal_93;
        }
    };
    View_ProfileInfoComponent2.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
        this._vc_13.destroyNestedViews();
        this._vc_17.destroyNestedViews();
        this._vc_19.destroyNestedViews();
        this._vc_22.destroyNestedViews();
        this._vc_28.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_40.destroyNestedViews();
        this._vc_48.destroyNestedViews();
        this._vc_56.destroyNestedViews();
    };
    View_ProfileInfoComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_ProfileInfoComponent3(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        if ((nodeIndex == 13)) {
            return new View_ProfileInfoComponent4(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        if ((nodeIndex == 17)) {
            return new View_ProfileInfoComponent5(this.viewUtils, this, 17, this._anchor_17, this._vc_17);
        }
        if ((nodeIndex == 19)) {
            return new View_ProfileInfoComponent6(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 22)) {
            return new View_ProfileInfoComponent8(this.viewUtils, this, 22, this._anchor_22, this._vc_22);
        }
        if ((nodeIndex == 28)) {
            return new View_ProfileInfoComponent9(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        if ((nodeIndex == 31)) {
            return new View_ProfileInfoComponent10(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        if ((nodeIndex == 40)) {
            return new View_ProfileInfoComponent11(this.viewUtils, this, 40, this._anchor_40, this._vc_40);
        }
        if ((nodeIndex == 48)) {
            return new View_ProfileInfoComponent12(this.viewUtils, this, 48, this._anchor_48, this._vc_48);
        }
        if ((nodeIndex == 56)) {
            return new View_ProfileInfoComponent13(this.viewUtils, this, 56, this._anchor_56, this._vc_56);
        }
        return null;
    };
    View_ProfileInfoComponent2.prototype.handleEvent_37 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.twitter() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent2.prototype.handleEvent_45 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.facebook() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent2.prototype.handleEvent_53 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.linkedin() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent2;
}(import2.AppView));
var View_ProfileInfoComponent3 = (function (_super) {
    __extends(View_ProfileInfoComponent3, _super);
    function View_ProfileInfoComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent3, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray4(4, 'class', 'display-hide', 'id', 'userName-btn'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_1, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        this._text_3 = this.renderer.createText(this._el_1, 'Editar nombre', null);
        this._text_4 = this.renderer.createText(this._el_0, ' ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.isUserHidden = false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent3;
}(import2.AppView));
var View_ProfileInfoComponent4 = (function (_super) {
    __extends(View_ProfileInfoComponent4, _super);
    function View_ProfileInfoComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ProfileInfoComponent4, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_22 = import1.UNINITIALIZED;
        return _this;
    }
    View_ProfileInfoComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'placeholder', 'First Name', 'type', 'text'), null);
        this._DefaultValueAccessor_2_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import26.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._DefaultValueAccessor_2_3.context];
        this._NgModel_2_5 = new import24.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._NgModel_2_5.context;
        this._NgControlStatus_2_7 = new import25.Wrapper_NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'placeholder', 'Last Name', 'type', 'text'), null);
        this._DefaultValueAccessor_4_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import26.ElementRef(this._el_4));
        this._NG_VALUE_ACCESSOR_4_4 = [this._DefaultValueAccessor_4_3.context];
        this._NgModel_4_5 = new import24.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_4_4);
        this._NgControl_4_6 = this._NgModel_4_5.context;
        this._NgControlStatus_4_7 = new import25.Wrapper_NgControlStatus(this._NgControl_4_6);
        this._text_5 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Cancelar', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'btn btn-primary'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Actualizar', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_2));
        this._NgModel_2_5.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_4));
        this._NgModel_4_5.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_9));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_ProfileInfoComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.DefaultValueAccessor) && (2 === requestNodeIndex))) {
            return this._DefaultValueAccessor_2_3.context;
        }
        if (((token === import28.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import29.NgModel) && (2 === requestNodeIndex))) {
            return this._NgModel_2_5.context;
        }
        if (((token === import30.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_6;
        }
        if (((token === import31.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_7.context;
        }
        if (((token === import27.DefaultValueAccessor) && (4 === requestNodeIndex))) {
            return this._DefaultValueAccessor_4_3.context;
        }
        if (((token === import28.NG_VALUE_ACCESSOR) && (4 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_4_4;
        }
        if (((token === import29.NgModel) && (4 === requestNodeIndex))) {
            return this._NgModel_4_5.context;
        }
        if (((token === import30.NgControl) && (4 === requestNodeIndex))) {
            return this._NgControl_4_6;
        }
        if (((token === import31.NgControlStatus) && (4 === requestNodeIndex))) {
            return this._NgControlStatus_4_7.context;
        }
        return notFoundResult;
    };
    View_ProfileInfoComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = this.parentView.parentView.context.credential.firstName;
        this._NgModel_2_5.check_model(currVal_2_1_0, throwOnChange, false);
        this._NgModel_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.ngDoCheck(this, this._el_2, throwOnChange);
        this._DefaultValueAccessor_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_4_1_0 = this.parentView.parentView.context.credential.lastName;
        this._NgModel_4_5.check_model(currVal_4_1_0, throwOnChange, false);
        this._NgModel_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        this._NgControlStatus_4_7.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_22 = this.parentView.parentView.context.isUserHidden;
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementProperty(this._el_0, 'hidden', currVal_22);
            this._expr_22 = currVal_22;
        }
        this._NgControlStatus_2_7.checkHost(this, this, this._el_2, throwOnChange);
        this._NgControlStatus_4_7.checkHost(this, this, this._el_4, throwOnChange);
    };
    View_ProfileInfoComponent4.prototype.destroyInternal = function () {
        this._NgModel_2_5.ngOnDestroy();
        this._NgModel_4_5.ngOnDestroy();
    };
    View_ProfileInfoComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent4.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_2_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.credential.firstName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent4.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.credential.lastName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent4.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.isUserHidden = true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent4.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.UpdateUserName() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent4;
}(import2.AppView));
var View_ProfileInfoComponent5 = (function (_super) {
    __extends(View_ProfileInfoComponent5, _super);
    function View_ProfileInfoComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent5, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, ' Add profile credential', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
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
    View_ProfileInfoComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent5.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openCredentialDialogBox() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent5;
}(import2.AppView));
var View_ProfileInfoComponent6 = (function (_super) {
    __extends(View_ProfileInfoComponent6, _super);
    function View_ProfileInfoComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ProfileInfoComponent6, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_10 = import1.UNINITIALIZED;
        return _this;
    }
    View_ProfileInfoComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'id', 'credential'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'credential-text'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_5 = new import6.ViewContainer(5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new import20.TemplateRef_(this, 5, this._anchor_5);
        this._NgIf_5_6 = new import19.Wrapper_NgIf(this._vc_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6
        ]), null);
        return null;
    };
    View_ProfileInfoComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import21.NgIf) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        return notFoundResult;
    };
    View_ProfileInfoComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.parentView.parentView.context.isOwner;
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        var currVal_10 = import3.inlineInterpolate(1, '', this.parentView.parentView.context.credential.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_3, currVal_10);
            this._expr_10 = currVal_10;
        }
    };
    View_ProfileInfoComponent6.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
    };
    View_ProfileInfoComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent6.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_ProfileInfoComponent7(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        return null;
    };
    return View_ProfileInfoComponent6;
}(import2.AppView));
var View_ProfileInfoComponent7 = (function (_super) {
    __extends(View_ProfileInfoComponent7, _super);
    function View_ProfileInfoComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent7, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'id', 'credential-edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_1, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        this._text_3 = this.renderer.createText(this._el_1, 'Editar credencial', null);
        this._text_4 = this.renderer.createText(this._el_0, ' ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent7.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.openCredentialDialogBox() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent7;
}(import2.AppView));
var View_ProfileInfoComponent8 = (function (_super) {
    __extends(View_ProfileInfoComponent8, _super);
    function View_ProfileInfoComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent8, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, ' ', null);
        this._text_2 = this.renderer.createText(this._el_0, '¿Cómo te describes?', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent8.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.showDescription = false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent8;
}(import2.AppView));
var View_ProfileInfoComponent9 = (function (_super) {
    __extends(View_ProfileInfoComponent9, _super);
    function View_ProfileInfoComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent9, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'id', 'description-edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_1, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        this._text_3 = this.renderer.createText(this._el_1, 'Editar descripción', null);
        this._text_4 = this.renderer.createText(this._el_0, ' ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent9.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.showDescription = false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent9;
}(import2.AppView));
var View_ProfileInfoComponent10 = (function (_super) {
    __extends(View_ProfileInfoComponent10, _super);
    function View_ProfileInfoComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ProfileInfoComponent10, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_21 = import1.UNINITIALIZED;
        _this._arr_22 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._arr_23 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._arr_24 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._map_25 = import3.pureProxy1(function (p0) {
            return { toolbar: p0 };
        });
        _this._map_26 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        return _this;
    }
    View_ProfileInfoComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'description-panel'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'quill-editor', new import3.InlineArray8(6, 'name', 'answerField', 'placeholder', 'Escribe aquí', 'required', ''), null);
        this.compView_2 = new import33.View_QuillEditorComponent0(this.viewUtils, this, 2, this._el_2);
        this._QuillEditorComponent_2_3 = new import33.Wrapper_QuillEditorComponent(new import26.ElementRef(this._el_2));
        this._RequiredValidator_2_4 = new import34.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_2_5 = [
            this._QuillEditorComponent_2_3.context,
            this._RequiredValidator_2_4.context
        ];
        this._NG_VALUE_ACCESSOR_2_6 = [this._QuillEditorComponent_2_3.context];
        this._NgModel_2_7 = new import24.Wrapper_NgModel(null, this._NG_VALIDATORS_2_5, null, this._NG_VALUE_ACCESSOR_2_6);
        this._NgControl_2_8 = this._NgModel_2_7.context;
        this._NgControlStatus_2_9 = new import25.Wrapper_NgControlStatus(this._NgControl_2_8);
        this.compView_2.create(this._QuillEditorComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'btn-container'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Cancelar', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'button', new import3.InlineArray2(2, 'class', 'btn btn-primary'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Actualizar', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'ngModelChange', null), this.eventHandler(this.handleEvent_2));
        this._NgModel_2_7.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_9));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_ProfileInfoComponent10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.QuillEditorComponent) && (2 === requestNodeIndex))) {
            return this._QuillEditorComponent_2_3.context;
        }
        if (((token === import35.RequiredValidator) && (2 === requestNodeIndex))) {
            return this._RequiredValidator_2_4.context;
        }
        if (((token === import36.NG_VALIDATORS) && (2 === requestNodeIndex))) {
            return this._NG_VALIDATORS_2_5;
        }
        if (((token === import28.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_6;
        }
        if (((token === import29.NgModel) && (2 === requestNodeIndex))) {
            return this._NgModel_2_7.context;
        }
        if (((token === import30.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_8;
        }
        if (((token === import31.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_9.context;
        }
        return notFoundResult;
    };
    View_ProfileInfoComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._map_25(this._arr_24(this._arr_22('bold', 'italic', 'underline'), this._arr_23('link', 'image')));
        this._QuillEditorComponent_2_3.check_modules(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = 'Escribe aquí';
        this._QuillEditorComponent_2_3.check_placeholder(currVal_2_0_1, throwOnChange, false);
        this._QuillEditorComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = '';
        this._RequiredValidator_2_4.check_required(currVal_2_1_0, throwOnChange, false);
        this._RequiredValidator_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_2_0 = 'answerField';
        this._NgModel_2_7.check_name(currVal_2_2_0, throwOnChange, false);
        var currVal_2_2_1 = this.parentView.parentView.context.credential.description;
        this._NgModel_2_7.check_model(currVal_2_2_1, throwOnChange, false);
        var currVal_2_2_2 = this._map_26(true);
        this._NgModel_2_7.check_options(currVal_2_2_2, throwOnChange, false);
        this._NgModel_2_7.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_9.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_21 = this.parentView.parentView.context.showDescription;
        if (import3.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementProperty(this._el_0, 'hidden', currVal_21);
            this._expr_21 = currVal_21;
        }
        this._RequiredValidator_2_4.checkHost(this, this.compView_2, this._el_2, throwOnChange);
        this._NgControlStatus_2_9.checkHost(this, this.compView_2, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._QuillEditorComponent_2_3.context.ngAfterViewInit();
            }
        }
    };
    View_ProfileInfoComponent10.prototype.destroyInternal = function () {
        this.compView_2.destroy();
        this._QuillEditorComponent_2_3.ngOnDestroy();
        this._NgModel_2_7.ngOnDestroy();
    };
    View_ProfileInfoComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent10.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.credential.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent10.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.parentView.parentView.context.showDescription = true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProfileInfoComponent10.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.updateDecription() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent10;
}(import2.AppView));
var View_ProfileInfoComponent11 = (function (_super) {
    __extends(View_ProfileInfoComponent11, _super);
    function View_ProfileInfoComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent11, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent11.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.opentwitterDialogBox() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent11;
}(import2.AppView));
var View_ProfileInfoComponent12 = (function (_super) {
    __extends(View_ProfileInfoComponent12, _super);
    function View_ProfileInfoComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent12, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent12.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openfacebookDialogBox() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent12;
}(import2.AppView));
var View_ProfileInfoComponent13 = (function (_super) {
    __extends(View_ProfileInfoComponent13, _super);
    function View_ProfileInfoComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ProfileInfoComponent13, renderType_ProfileInfoComponent, import10.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import11.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ProfileInfoComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ProfileInfoComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileInfoComponent13.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openlinkedinDialogBox() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ProfileInfoComponent13;
}(import2.AppView));
