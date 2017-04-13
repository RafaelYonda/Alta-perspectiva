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
import * as import0 from './blogpost-detail.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from './post-status.component';
import * as import14 from '../../../services/blog.service';
import * as import15 from './post-status.component.ngfactory';
import * as import16 from './post-comment.component';
import * as import17 from './post-comment.component.ngfactory';
import * as import18 from '@angular/common/src/pipes/date_pipe';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from '@angular/core/src/i18n/tokens';
import * as import23 from '@angular/common/src/directives/ng_if';
import * as import24 from '@angular/core/src/security';
var Wrapper_BlogpostDetailComponent = (function () {
    function Wrapper_BlogpostDetailComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.BlogpostDetailComponent(p0, p1);
    }
    Wrapper_BlogpostDetailComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BlogpostDetailComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BlogpostDetailComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BlogpostDetailComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BlogpostDetailComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BlogpostDetailComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BlogpostDetailComponent;
}());
export { Wrapper_BlogpostDetailComponent };
var renderType_BlogpostDetailComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BlogpostDetailComponent_Host0 = (function (_super) {
    __extends(View_BlogpostDetailComponent_Host0, _super);
    function View_BlogpostDetailComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BlogpostDetailComponent_Host0, renderType_BlogpostDetailComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BlogpostDetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BlogpostDetailComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http, this.parentIndex));
        this._BlogpostDetailComponent_0_4 = new Wrapper_BlogpostDetailComponent(this.injectorGet(import10.ActivatedRoute, this.parentIndex), this._ProfileService_0_3);
        this.compView_0.create(this._BlogpostDetailComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._BlogpostDetailComponent_0_4.context);
    };
    View_BlogpostDetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.BlogpostDetailComponent) && (0 === requestNodeIndex))) {
            return this._BlogpostDetailComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_BlogpostDetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BlogpostDetailComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BlogpostDetailComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BlogpostDetailComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogpostDetailComponent_Host0;
}(import1.AppView));
export var BlogpostDetailComponentNgFactory = new import8.ComponentFactory('ng-component', View_BlogpostDetailComponent_Host0, import0.BlogpostDetailComponent);
var styles_BlogpostDetailComponent = ['.blog-edit-panel[_ngcontent-%COMP%] {\n        width: 45%;\n        margin: 5px auto;\n        text-align: center;\n    }\n\n    .blog-post[_ngcontent-%COMP%] {\n        text-align: left;\n        margin-top: 10px;\n    }\n\n    .blog-header[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .blog-list[_ngcontent-%COMP%] {\n        width: 60%;\n        margin: 5px auto;\n    }\n\n    .btn-blog-edit[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #ece4e4;\n        width: 50%;\n        margin: 0 auto;\n        text-align: right;\n        padding-right: 3px;\n        color: #908c8c;\n    }\n\n    .transparent-input[_ngcontent-%COMP%] {\n        border: 1px;\n    }\n\n    .txt-small-grey[_ngcontent-%COMP%] {\n        color: #a4a1a1;\n    }\n\n    .margin-top-5[_ngcontent-%COMP%] {\n        margin-top: 5px;\n    }\n    \n    .postDetail-body[_ngcontent-%COMP%]{\n        padding:10px;\n        margin-left:15px;\n    }\n    .post-dialog[_ngcontent-%COMP%]{\n        margin:80px auto;\n        width:60%;\n    }'];
var renderType_BlogpostDetailComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_BlogpostDetailComponent, {});
var View_BlogpostDetailComponent0 = (function (_super) {
    __extends(View_BlogpostDetailComponent0, _super);
    function View_BlogpostDetailComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_BlogpostDetailComponent0, renderType_BlogpostDetailComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_43 = import19.UNINITIALIZED;
        _this._expr_44 = import19.UNINITIALIZED;
        return _this;
    }
    View_BlogpostDetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-content post-dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'x', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'postDetail-body'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'blog-header'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_10, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_18 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_8, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_23 = new import11.ViewContainer(23, 21, this, this._anchor_23);
        this._TemplateRef_23_5 = new import20.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import12.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_21, 'post-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_25 = new import15.View_PostStatusComponent0(this.viewUtils, this, 25, this._el_25);
        this._BlogService_25_3 = new import14.BlogService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._PostStatusComponent_25_4 = new import15.Wrapper_PostStatusComponent(this._BlogService_25_3, this.parentView.injectorGet(import21.ComponentFactoryResolver, this.parentIndex));
        this.compView_25.create(this._PostStatusComponent_25_4.context);
        this._text_26 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_21, 'blogpost-comment', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_27 = new import17.View_BlogpostCommentComponent0(this.viewUtils, this, 27, this._el_27);
        this._BlogService_27_3 = new import14.BlogService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._BlogpostCommentComponent_27_4 = new import17.Wrapper_BlogpostCommentComponent(this._BlogService_27_3, this.parentView.injectorGet(import21.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import5.ProfileService, this.parentIndex));
        this.compView_27.create(this._BlogpostCommentComponent_27_4.context);
        this._text_28 = this.renderer.createText(this._el_21, '\n                ', null);
        this._text_29 = this.renderer.createText(this._el_19, '\n            ', null);
        this._text_30 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_31 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_32 = this.renderer.createText(this._el_1, '\n', null);
        this._text_33 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        this._pipe_date_0 = new import18.DatePipe(this.parentView.injectorGet(import22.LOCALE_ID, this.parentIndex));
        this._pipe_date_0_0 = import3.pureProxy2(this._pipe_date_0.transform.bind(this._pipe_date_0));
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
            this._el_15,
            this._text_16,
            this._text_17,
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
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_BlogpostDetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import23.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import14.BlogService) && (25 === requestNodeIndex))) {
            return this._BlogService_25_3;
        }
        if (((token === import13.PostStatusComponent) && (25 === requestNodeIndex))) {
            return this._PostStatusComponent_25_4.context;
        }
        if (((token === import14.BlogService) && (27 === requestNodeIndex))) {
            return this._BlogService_27_3;
        }
        if (((token === import16.BlogpostCommentComponent) && (27 === requestNodeIndex))) {
            return this._BlogpostCommentComponent_27_4.context;
        }
        return notFoundResult;
    };
    View_BlogpostDetailComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import19.ValueUnwrapper();
        var currVal_23_0_0 = ((this.context.post == null) ? null : this.context.post.description);
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        var currVal_25_0_0 = this.context.post;
        this._PostStatusComponent_25_4.check_blogPost(currVal_25_0_0, throwOnChange, false);
        this._PostStatusComponent_25_4.ngDoCheck(this, this._el_25, throwOnChange);
        var currVal_27_0_0 = this.context.post;
        this._BlogpostCommentComponent_27_4.check_blogPost(currVal_27_0_0, throwOnChange, false);
        this._BlogpostCommentComponent_27_4.ngDoCheck(this, this._el_27, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        var currVal_43 = import3.inlineInterpolate(1, '', ((this.context.post == null) ? null : this.context.post.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setText(this._text_13, currVal_43);
            this._expr_43 = currVal_43;
        }
        valUnwrapper.reset();
        var currVal_44 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0, this._pipe_date_0.transform)(((this.context.post == null) ? null : this.context.post.createdOn), 'dd MMM,yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_44, currVal_44))) {
            this.renderer.setText(this._text_16, currVal_44);
            this._expr_44 = currVal_44;
        }
        this.compView_25.internalDetectChanges(throwOnChange);
        this.compView_27.internalDetectChanges(throwOnChange);
    };
    View_BlogpostDetailComponent0.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
        this.compView_25.destroy();
        this.compView_27.destroy();
        this._BlogpostCommentComponent_27_4.ngOnDestroy();
    };
    View_BlogpostDetailComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_BlogpostDetailComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_BlogpostDetailComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogpostDetailComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogpostDetailComponent0;
}(import1.AppView));
export { View_BlogpostDetailComponent0 };
var View_BlogpostDetailComponent1 = (function (_super) {
    __extends(View_BlogpostDetailComponent1, _super);
    function View_BlogpostDetailComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogpostDetailComponent1, renderType_BlogpostDetailComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import19.UNINITIALIZED;
        return _this;
    }
    View_BlogpostDetailComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_BlogpostDetailComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = ((this.parentView.context.post == null) ? null : this.parentView.context.post.description);
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'innerHTML', this.viewUtils.sanitizer.sanitize(import24.SecurityContext.HTML, currVal_4));
            this._expr_4 = currVal_4;
        }
    };
    View_BlogpostDetailComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogpostDetailComponent1;
}(import1.AppView));
