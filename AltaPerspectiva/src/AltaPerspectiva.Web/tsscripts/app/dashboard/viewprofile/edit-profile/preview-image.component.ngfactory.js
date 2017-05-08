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
import * as import0 from './preview-image.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_container';
import * as import6 from '../../../services/profile.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '../../../services/image-upload.service';
import * as import12 from 'ng2-toastr/src/toast-manager';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from 'ng2-img-cropper/src/imageCropperComponent';
import * as import15 from '../../../../../node_modules/ng2-img-cropper/src/imageCropperComponent.ngfactory';
import * as import16 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
import * as import20 from '@angular/core/src/security';
var Wrapper_PreviewImageComponent = (function () {
    function Wrapper_PreviewImageComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.PreviewImageComponent(p0, p1, p2, p3);
    }
    Wrapper_PreviewImageComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PreviewImageComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PreviewImageComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PreviewImageComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PreviewImageComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PreviewImageComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PreviewImageComponent;
}());
export { Wrapper_PreviewImageComponent };
var renderType_PreviewImageComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_PreviewImageComponent_Host0 = (function (_super) {
    __extends(View_PreviewImageComponent_Host0, _super);
    function View_PreviewImageComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PreviewImageComponent_Host0, renderType_PreviewImageComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PreviewImageComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'preview-image', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import5.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_PreviewImageComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_5 = new import6.ProfileService(this.injectorGet(import10.Http, this.parentIndex));
        this._PreviewImageComponent_0_6 = new Wrapper_PreviewImageComponent(this._ProfileService_0_5, this.injectorGet(import11.ImageUploadService, this.parentIndex), this.injectorGet(import12.ToastsManager, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._PreviewImageComponent_0_6.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._PreviewImageComponent_0_6.context);
    };
    View_PreviewImageComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_5;
        }
        if (((token === import0.PreviewImageComponent) && (0 === requestNodeIndex))) {
            return this._PreviewImageComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_PreviewImageComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PreviewImageComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PreviewImageComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_PreviewImageComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_PreviewImageComponent_Host0;
}(import1.AppView));
export var PreviewImageComponentNgFactory = new import9.ComponentFactory('preview-image', View_PreviewImageComponent_Host0, import0.PreviewImageComponent);
var styles_PreviewImageComponent = ['.credential-dialog[_ngcontent-%COMP%] {\n        margin: 20% auto;\n        max-width: 45%;\n        padding: 25px;\n    }\n\n    .profile-modal-body[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 15px;\n        background-color: #f6f6f6;\n        margin: 0px;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n        text-align: center;\n    }\n\n        .profile-modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            border: 1px solid #bdbdbd;\n            border-radius: 3px;\n            padding: 2px 5px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n\n        .profile-modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }\n\n\n\n    .profile-modal-button-container[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n\n        .profile-modal-button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n        }\n\n    .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n\n    .modal-overlay[_ngcontent-%COMP%] {\n        top: -209px;\n    }\n    .modal-image[_ngcontent-%COMP%]{\n        overflow:scroll;\n    }\n\n    @media only screen and (max-width:1000px) {\n        .modal-overlay[_ngcontent-%COMP%] {\n            top: 0;\n        }\n        .credential-dialog[_ngcontent-%COMP%]{\n            max-width:85%;\n        }\n    }'];
var renderType_PreviewImageComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_PreviewImageComponent, {});
var View_PreviewImageComponent0 = (function (_super) {
    __extends(View_PreviewImageComponent0, _super);
    function View_PreviewImageComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PreviewImageComponent0, renderType_PreviewImageComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PreviewImageComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_cropper_0 = new import13.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal modal-image', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-content credential-dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'x', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'modal-container'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'modal-header'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Imagen previa', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_15 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-body'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n                ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'img-cropper', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_21 = new import15.View_ImageCropperComponent0(this.viewUtils, this, 21, this._el_21);
        this._ImageCropperComponent_21_3 = new import15.Wrapper_ImageCropperComponent(this.renderer);
        this.compView_21.create(this._ImageCropperComponent_21_3.context);
        this._text_22 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_23 = new import5.ViewContainer(23, 19, this, this._anchor_23);
        this._TemplateRef_23_5 = new import17.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import16.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'button', new import3.InlineArray2(2, 'class', 'btn btn-info'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'Actualizar', null);
        this._text_29 = this.renderer.createText(this._el_25, '\n                        ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_25, 'button', new import3.InlineArray2(2, 'class', 'btn btn-danger'), null);
        this._text_31 = this.renderer.createText(this._el_30, 'Cancelar', null);
        this._text_32 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._text_33 = this.renderer.createText(this._el_19, '\n                ', null);
        this._text_34 = this.renderer.createText(this._el_17, '\n            ', null);
        this._text_35 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_1, '\n', null);
        this._text_38 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'onCrop', null), this.eventHandler(this.handleEvent_21));
        this._ImageCropperComponent_21_3.subscribe(this, this.eventHandler(this.handleEvent_21), false, true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_27));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
        this._viewQuery_cropper_0.reset([this._ImageCropperComponent_21_3.context]);
        this.context.cropper = this._viewQuery_cropper_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_PreviewImageComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.ImageCropperComponent) && (21 === requestNodeIndex))) {
            return this._ImageCropperComponent_21_3.context;
        }
        if (((token === import17.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import18.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        return notFoundResult;
    };
    View_PreviewImageComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_21_0_0 = this.context.cropperSettings1;
        this._ImageCropperComponent_21_3.check_settings(currVal_21_0_0, throwOnChange, false);
        var currVal_21_0_1 = this.context.data1;
        this._ImageCropperComponent_21_3.check_image(currVal_21_0_1, throwOnChange, false);
        this._ImageCropperComponent_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_23_0_0 = this.context.data1.image;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this.compView_21.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._ImageCropperComponent_21_3.context.ngAfterViewInit();
            }
        }
    };
    View_PreviewImageComponent0.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
        this.compView_21.destroy();
        this._ImageCropperComponent_21_3.ngOnDestroy();
    };
    View_PreviewImageComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_PreviewImageComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_PreviewImageComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PreviewImageComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PreviewImageComponent0.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onCrop')) {
            var pd_sub_0 = (this.context.cropped($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PreviewImageComponent0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onUpdate() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PreviewImageComponent0.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PreviewImageComponent0;
}(import1.AppView));
export { View_PreviewImageComponent0 };
var View_PreviewImageComponent1 = (function (_super) {
    __extends(View_PreviewImageComponent1, _super);
    function View_PreviewImageComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_PreviewImageComponent1, renderType_PreviewImageComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import19.UNINITIALIZED;
        _this._expr_5 = import19.UNINITIALIZED;
        _this._expr_6 = import19.UNINITIALIZED;
        return _this;
    }
    View_PreviewImageComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'result'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'style', 'border:1px solid #dedbdb'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_PreviewImageComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = this.parentView.context.data1.image;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL, currVal_4));
            this._expr_4 = currVal_4;
        }
        var currVal_5 = 200;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'width', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 200;
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementProperty(this._el_2, 'height', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_PreviewImageComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PreviewImageComponent1;
}(import1.AppView));
