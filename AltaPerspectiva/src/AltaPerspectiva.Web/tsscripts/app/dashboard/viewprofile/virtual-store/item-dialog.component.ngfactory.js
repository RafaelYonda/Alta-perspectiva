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
import * as import0 from './item-dialog.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/authentication.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../../services/profile.service';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import16 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import17 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/forms/src/directives/default_value_accessor';
import * as import24 from '@angular/forms/src/directives/control_value_accessor';
import * as import25 from '@angular/forms/src/directives/ng_model';
import * as import26 from '@angular/forms/src/directives/ng_control';
import * as import27 from '@angular/forms/src/directives/ng_control_status';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from '@angular/core/src/security';
var Wrapper_ItemDialogComponent = (function () {
    function Wrapper_ItemDialogComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.ItemDialogComponent(p0, p1, p2, p3);
    }
    Wrapper_ItemDialogComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ItemDialogComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_ItemDialogComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ItemDialogComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ItemDialogComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ItemDialogComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ItemDialogComponent;
}());
export { Wrapper_ItemDialogComponent };
var renderType_ItemDialogComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ItemDialogComponent_Host0 = (function (_super) {
    __extends(View_ItemDialogComponent_Host0, _super);
    function View_ItemDialogComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ItemDialogComponent_Host0, renderType_ItemDialogComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ItemDialogComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ItemDialogComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuthenticationService_0_3 = new import5.AuthenticationService(this.injectorGet(import9.Http, this.parentIndex));
        this._ItemDialogComponent_0_4 = new Wrapper_ItemDialogComponent(this.injectorGet(import10.ActivatedRoute, this.parentIndex), this.injectorGet(import11.ProfileService, this.parentIndex), this.injectorGet(import12.ComponentFactoryResolver, this.parentIndex), this._AuthenticationService_0_3);
        this.compView_0.create(this._ItemDialogComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._ItemDialogComponent_0_4.context);
    };
    View_ItemDialogComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_3;
        }
        if (((token === import0.ItemDialogComponent) && (0 === requestNodeIndex))) {
            return this._ItemDialogComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_ItemDialogComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ItemDialogComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ItemDialogComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._ItemDialogComponent_0_4.ngOnDestroy();
    };
    View_ItemDialogComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ItemDialogComponent_Host0;
}(import1.AppView));
export var ItemDialogComponentNgFactory = new import8.ComponentFactory('ng-component', View_ItemDialogComponent_Host0, import0.ItemDialogComponent);
var styles_ItemDialogComponent = ['.item-dialog[_ngcontent-%COMP%] {\n        width: 52%;\n        margin: 10px auto;\n    }\n\n    .item-img-lg[_ngcontent-%COMP%] {\n        height: 200px;\n        width: 215px;\n        border-radius: 5%;\n        float: left;\n    }\n\n    .item-detail-container[_ngcontent-%COMP%] {\n        padding: 10px;\n        margin: 10px;\n    }\n\n    .item-comment-container[_ngcontent-%COMP%] {\n        padding: 20px 20px 30px 20px;\n    }\n\n    .item-info[_ngcontent-%COMP%] {\n        padding: 25px;\n        float: left;\n        width: 60%;\n    }\n    .item-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size:30px;\n    }\n    .btn-item[_ngcontent-%COMP%] {\n        background-color: #f6912b;\n        color: white;\n        min-width: 80px;\n        padding: 5px;\n        margin-right: 12px;\n    }\n\n    .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        min-height: 80px;\n    }\n    .item-comment[_ngcontent-%COMP%]{\n        background-color:#e8e6e2;\n    }\n    .comment-input-panel[_ngcontent-%COMP%]{\n        width:100%;\n    }\n    .comment-input-panel[_ngcontent-%COMP%]   .btn-item[_ngcontent-%COMP%]{\n        float:right;\n    }\n    .comment-input-panel[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n        display:inline-block;\n        width:85%;\n    }\n    .item-dialog[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]{\n        margin:10px;\n    }'];
var renderType_ItemDialogComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ItemDialogComponent, {});
var View_ItemDialogComponent0 = (function (_super) {
    __extends(View_ItemDialogComponent0, _super);
    function View_ItemDialogComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ItemDialogComponent0, renderType_ItemDialogComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_68 = import19.UNINITIALIZED;
        _this._expr_69 = import19.UNINITIALIZED;
        _this._expr_70 = import19.UNINITIALIZED;
        _this._expr_71 = import19.UNINITIALIZED;
        return _this;
    }
    View_ItemDialogComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import13.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-content item-dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'x', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_3, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_8 = new import14.ViewContainer(8, 3, this, this._el_8);
        this._text_9 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray4(4, 'class', 'modal-container', 'style', 'border:1px solid;'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'item-detail-container'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'img', new import3.InlineArray2(2, 'class', 'item-img-lg'), null);
        this._text_15 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_12, 'div', new import3.InlineArray2(2, 'class', 'item-info'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_16, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '', null);
        this._text_23 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_16, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._text_26 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_16, 'button', new import3.InlineArray2(2, 'class', 'btn btn-item'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'Buy', null);
        this._text_29 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_16, 'button', new import3.InlineArray2(2, 'class', 'btn btn-item'), null);
        this._text_31 = this.renderer.createText(this._el_30, 'Download', null);
        this._text_32 = this.renderer.createText(this._el_16, '\n                ', null);
        this._text_33 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_34 = this.renderer.createText(this._el_10, '\n            ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_10, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_10, '\n            ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'item-comment-container'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n                ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_40 = this.renderer.createText(this._el_39, 'Comment', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n                ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_37, 'div', new import3.InlineArray2(2, 'class', 'comment-input-panel'), null);
        this._text_43 = this.renderer.createText(this._el_42, '\n                    ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_42, 'input', new import3.InlineArray2(2, 'class', 'form-control item-comment'), null);
        this._DefaultValueAccessor_44_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer, new import20.ElementRef(this._el_44));
        this._NG_VALUE_ACCESSOR_44_4 = [this._DefaultValueAccessor_44_3.context];
        this._NgModel_44_5 = new import16.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_44_4);
        this._NgControl_44_6 = this._NgModel_44_5.context;
        this._NgControlStatus_44_7 = new import17.Wrapper_NgControlStatus(this._NgControl_44_6);
        this._text_45 = this.renderer.createText(this._el_42, '\n                    ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_42, 'button', new import3.InlineArray4(4, 'class', 'btn btn-item', 'type', 'button'), null);
        this._text_47 = this.renderer.createText(this._el_46, 'Comment', null);
        this._text_48 = this.renderer.createText(this._el_42, '\n                ', null);
        this._text_49 = this.renderer.createText(this._el_37, '\n            ', null);
        this._text_50 = this.renderer.createText(this._el_10, '\n            ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'card card-block'), null);
        this._text_52 = this.renderer.createText(this._el_51, '\n                ', null);
        this._anchor_53 = this.renderer.createTemplateAnchor(this._el_51, null);
        this._vc_53 = new import14.ViewContainer(53, 51, this, this._anchor_53);
        this._TemplateRef_53_5 = new import21.TemplateRef_(this, 53, this._anchor_53);
        this._NgFor_53_6 = new import18.Wrapper_NgFor(this._vc_53.vcRef, this._TemplateRef_53_5, this.parentView.injectorGet(import22.IterableDiffers, this.parentIndex), this.ref);
        this._text_54 = this.renderer.createText(this._el_51, '\n            ', null);
        this._text_55 = this.renderer.createText(this._el_10, '\n        ', null);
        this._text_56 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_57 = this.renderer.createText(this._el_1, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_44, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_44));
        this._NgModel_44_5.subscribe(this, this.eventHandler(this.handleEvent_44), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_46, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_46));
        this._viewQuery_logginAnchor_0.reset([this._vc_8.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
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
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
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
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._anchor_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._text_57
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_ItemDialogComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.DefaultValueAccessor) && (44 === requestNodeIndex))) {
            return this._DefaultValueAccessor_44_3.context;
        }
        if (((token === import24.NG_VALUE_ACCESSOR) && (44 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_44_4;
        }
        if (((token === import25.NgModel) && (44 === requestNodeIndex))) {
            return this._NgModel_44_5.context;
        }
        if (((token === import26.NgControl) && (44 === requestNodeIndex))) {
            return this._NgControl_44_6;
        }
        if (((token === import27.NgControlStatus) && (44 === requestNodeIndex))) {
            return this._NgControlStatus_44_7.context;
        }
        if (((token === import21.TemplateRef) && (53 === requestNodeIndex))) {
            return this._TemplateRef_53_5;
        }
        if (((token === import28.NgFor) && (53 === requestNodeIndex))) {
            return this._NgFor_53_6.context;
        }
        return notFoundResult;
    };
    View_ItemDialogComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_44_3.ngDoCheck(this, this._el_44, throwOnChange);
        var currVal_44_1_0 = this.context.comment.commentText;
        this._NgModel_44_5.check_model(currVal_44_1_0, throwOnChange, false);
        this._NgModel_44_5.ngDoCheck(this, this._el_44, throwOnChange);
        this._NgControlStatus_44_7.ngDoCheck(this, this._el_44, throwOnChange);
        var currVal_53_0_0 = this.context.virtualStore.productComments;
        this._NgFor_53_6.check_ngForOf(currVal_53_0_0, throwOnChange, false);
        this._NgFor_53_6.ngDoCheck(this, this._anchor_53, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_53.detectChangesInNestedViews(throwOnChange);
        var currVal_68 = import3.inlineInterpolate(1, '', this.context.virtualStore.screenShotFileName, '');
        if (import3.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this.renderer.setElementProperty(this._el_14, 'src', this.viewUtils.sanitizer.sanitize(import29.SecurityContext.URL, currVal_68));
            this._expr_68 = currVal_68;
        }
        var currVal_69 = import3.inlineInterpolate(1, '', this.context.virtualStore.price, '$');
        if (import3.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setText(this._text_19, currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_70 = import3.inlineInterpolate(1, '', this.context.virtualStore.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setText(this._text_22, currVal_70);
            this._expr_70 = currVal_70;
        }
        var currVal_71 = import3.inlineInterpolate(1, '', this.context.virtualStore.description, '');
        if (import3.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setText(this._text_25, currVal_71);
            this._expr_71 = currVal_71;
        }
        this._NgControlStatus_44_7.checkHost(this, this, this._el_44, throwOnChange);
    };
    View_ItemDialogComponent0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
        this._vc_53.destroyNestedViews();
        this._NgModel_44_5.ngOnDestroy();
    };
    View_ItemDialogComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 53)) {
            return new View_ItemDialogComponent1(this.viewUtils, this, 53, this._anchor_53, this._vc_53);
        }
        return null;
    };
    View_ItemDialogComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ItemDialogComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ItemDialogComponent0.prototype.handleEvent_44 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_44_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.comment.commentText = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ItemDialogComponent0.prototype.handleEvent_46 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.postComment() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ItemDialogComponent0;
}(import1.AppView));
export { View_ItemDialogComponent0 };
var View_ItemDialogComponent1 = (function (_super) {
    __extends(View_ItemDialogComponent1, _super);
    function View_ItemDialogComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ItemDialogComponent1, renderType_ItemDialogComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_15 = import19.UNINITIALIZED;
        _this._expr_16 = import19.UNINITIALIZED;
        _this._expr_17 = import19.UNINITIALIZED;
        return _this;
    }
    View_ItemDialogComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'clearfix'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray2(2, 'class', 'user-image comment-img'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'header-info'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_0, '\n                ', null);
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
            this._text_12,
            this._el_13,
            this._text_14
        ]), null);
        return null;
    };
    View_ItemDialogComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_15 = import3.inlineInterpolate(1, '', this.context.$implicit.userViewModel.imageUrl, '');
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import29.SecurityContext.URL, currVal_15));
            this._expr_15 = currVal_15;
        }
        var currVal_16 = import3.inlineInterpolate(1, '', this.context.$implicit.userViewModel.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_7, currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = import3.inlineInterpolate(1, '', this.context.$implicit.commentText, '');
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_10, currVal_17);
            this._expr_17 = currVal_17;
        }
    };
    View_ItemDialogComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ItemDialogComponent1;
}(import1.AppView));
