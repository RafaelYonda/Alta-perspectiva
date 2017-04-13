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
import * as import0 from './like.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question-answer.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/linker/component_factory_resolver';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
import * as import17 from '@angular/core/src/security';
var Wrapper_LikeComponent = (function () {
    function Wrapper_LikeComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.LikeComponent(p0, p1);
    }
    Wrapper_LikeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LikeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_LikeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_LikeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LikeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LikeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LikeComponent;
}());
export { Wrapper_LikeComponent };
var renderType_LikeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LikeComponent_Host0 = (function (_super) {
    __extends(View_LikeComponent_Host0, _super);
    function View_LikeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LikeComponent_Host0, renderType_LikeComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LikeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'like', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LikeComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import9.Http, this.parentIndex));
        this._LikeComponent_0_4 = new Wrapper_LikeComponent(this._QuestionAnswerService_0_3, this.injectorGet(import10.ComponentFactoryResolver, this.parentIndex));
        this.compView_0.create(this._LikeComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._LikeComponent_0_4.context);
    };
    View_LikeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import0.LikeComponent) && (0 === requestNodeIndex))) {
            return this._LikeComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_LikeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LikeComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LikeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LikeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LikeComponent_Host0;
}(import1.AppView));
export var LikeComponentNgFactory = new import8.ComponentFactory('like', View_LikeComponent_Host0, import0.LikeComponent);
var styles_LikeComponent = ['.credential-dialog[_ngcontent-%COMP%] {\n        margin: 10% auto;\n        max-width: 25%;\n    }\n\n    .like-user-image[_ngcontent-%COMP%] {\n        height: 50px;\n        width: 50px;\n        border-radius: 25px;\n        margin-bottom: 5px;\n    }\n\n    .profile-modal-body[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 15px;\n        background-color: #f6f6f6;\n        margin: 0px;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n        .profile-modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            border: 1px solid #bdbdbd;\n            border-radius: 3px;\n            padding: 2px 5px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n\n        .profile-modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }\n\n    .profile-modal-button-container[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n\n        .profile-modal-button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n        }\n\n    .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n\n    .col-sm-8[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n\n    @media screen and (max-width:767) {\n        .credential-dialog[_ngcontent-%COMP%] {\n            max-width: 95%;\n        }\n    }'];
var renderType_LikeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_LikeComponent, {});
var View_LikeComponent0 = (function (_super) {
    __extends(View_LikeComponent0, _super);
    function View_LikeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LikeComponent0, renderType_LikeComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LikeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-content credential-dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'x', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray4(4, 'class', 'modal-container', 'style', 'border:1px solid;'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'modal-header'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Users', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n\n            ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'modal-body'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_18 = new import11.ViewContainer(18, 16, this, this._anchor_18);
        this._TemplateRef_18_5 = new import13.TemplateRef_(this, 18, this._anchor_18);
        this._NgFor_18_6 = new import12.Wrapper_NgFor(this._vc_18.vcRef, this._TemplateRef_18_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.ref);
        this._text_19 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_22 = this.renderer.createText(this._el_1, '\n', null);
        this._text_23 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
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
            this._el_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_LikeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import15.NgFor) && (18 === requestNodeIndex))) {
            return this._NgFor_18_6.context;
        }
        return notFoundResult;
    };
    View_LikeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = this.context.likedUsers;
        this._NgFor_18_6.check_ngForOf(currVal_18_0_0, throwOnChange, false);
        this._NgFor_18_6.ngDoCheck(this, this._anchor_18, throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
    };
    View_LikeComponent0.prototype.destroyInternal = function () {
        this._vc_18.destroyNestedViews();
    };
    View_LikeComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 18)) {
            return new View_LikeComponent1(this.viewUtils, this, 18, this._anchor_18, this._vc_18);
        }
        return null;
    };
    View_LikeComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_LikeComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_LikeComponent0;
}(import1.AppView));
export { View_LikeComponent0 };
var View_LikeComponent1 = (function (_super) {
    __extends(View_LikeComponent1, _super);
    function View_LikeComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_LikeComponent1, renderType_LikeComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_6 = import16.UNINITIALIZED;
        _this._expr_7 = import16.UNINITIALIZED;
        return _this;
    }
    View_LikeComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'class', 'like-user-image img-circle img'), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
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
    View_LikeComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.imageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL, currVal_6));
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import3.inlineInterpolate(1, '\n                    ', ((this.context.$implicit == null) ? null : this.context.$implicit.name), '\n\n                    ');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_LikeComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LikeComponent1;
}(import1.AppView));
