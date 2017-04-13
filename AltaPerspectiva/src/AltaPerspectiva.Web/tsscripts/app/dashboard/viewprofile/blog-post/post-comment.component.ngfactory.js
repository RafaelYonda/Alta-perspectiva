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
import * as import0 from './post-comment.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../../services/blog.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '../../../services/profile.service';
import * as import13 from './post-comment.component.css.shim.ngstyle';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import17 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import19 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import20 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import24 from '@angular/forms/src/directives/default_value_accessor';
import * as import25 from '@angular/forms/src/directives/control_value_accessor';
import * as import26 from '@angular/forms/src/directives/ng_model';
import * as import27 from '@angular/forms/src/directives/ng_control';
import * as import28 from '@angular/forms/src/directives/ng_control_status';
import * as import29 from '@angular/forms/src/directives/ng_form';
import * as import30 from '@angular/forms/src/directives/control_container';
import * as import31 from '@angular/common/src/directives/ng_for';
import * as import32 from '@angular/core/src/security';
import * as import33 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import34 from '@angular/common/src/directives/ng_if';
var Wrapper_BlogpostCommentComponent = (function () {
    function Wrapper_BlogpostCommentComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.BlogpostCommentComponent(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_BlogpostCommentComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BlogpostCommentComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_BlogpostCommentComponent.prototype.check_blogPost = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.blogPost = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_BlogpostCommentComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BlogpostCommentComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BlogpostCommentComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BlogpostCommentComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.sendCommentCount.subscribe(_eventHandler.bind(view, 'sendCommentCount')));
        }
    };
    return Wrapper_BlogpostCommentComponent;
}());
export { Wrapper_BlogpostCommentComponent };
var renderType_BlogpostCommentComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_BlogpostCommentComponent_Host0 = (function (_super) {
    __extends(View_BlogpostCommentComponent_Host0, _super);
    function View_BlogpostCommentComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BlogpostCommentComponent_Host0, renderType_BlogpostCommentComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BlogpostCommentComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'blogpost-comment', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BlogpostCommentComponent0(this.viewUtils, this, 0, this._el_0);
        this._BlogService_0_3 = new import6.BlogService(this.injectorGet(import10.Http, this.parentIndex));
        this._BlogpostCommentComponent_0_4 = new Wrapper_BlogpostCommentComponent(this._BlogService_0_3, this.injectorGet(import11.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import12.ProfileService, this.parentIndex));
        this.compView_0.create(this._BlogpostCommentComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._BlogpostCommentComponent_0_4.context);
    };
    View_BlogpostCommentComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.BlogService) && (0 === requestNodeIndex))) {
            return this._BlogService_0_3;
        }
        if (((token === import0.BlogpostCommentComponent) && (0 === requestNodeIndex))) {
            return this._BlogpostCommentComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_BlogpostCommentComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BlogpostCommentComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BlogpostCommentComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._BlogpostCommentComponent_0_4.ngOnDestroy();
    };
    View_BlogpostCommentComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogpostCommentComponent_Host0;
}(import2.AppView));
export var BlogpostCommentComponentNgFactory = new import9.ComponentFactory('blogpost-comment', View_BlogpostCommentComponent_Host0, import0.BlogpostCommentComponent);
var styles_BlogpostCommentComponent = [import13.styles];
var renderType_BlogpostCommentComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_BlogpostCommentComponent, {});
var View_BlogpostCommentComponent0 = (function (_super) {
    __extends(View_BlogpostCommentComponent0, _super);
    function View_BlogpostCommentComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_BlogpostCommentComponent0, renderType_BlogpostCommentComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_39 = import1.UNINITIALIZED;
        _this._expr_40 = import1.UNINITIALIZED;
        _this._map_41 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        return _this;
    }
    View_BlogpostCommentComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import14.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_0 = new import15.ViewContainer(0, null, this, this._el_0);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'collapse comment-panel'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'form', new import3.InlineArray4(4, 'class', 'form-horizontal ', 'role', 'form'), null);
        this._NgForm_6_3 = new import16.Wrapper_NgForm(null, null);
        this._ControlContainer_6_4 = this._NgForm_6_3.context;
        this._NgControlStatusGroup_6_5 = new import17.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'comment-input'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'img', new import3.InlineArray2(2, 'class', 'user-image'), null);
        this._text_11 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray4(4, 'class', 'form-control', 'id', 'comment'), null);
        this._DefaultValueAccessor_12_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import21.ElementRef(this._el_12));
        this._NG_VALUE_ACCESSOR_12_4 = [this._DefaultValueAccessor_12_3.context];
        this._NgModel_12_5 = new import19.Wrapper_NgModel(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_12_4);
        this._NgControl_12_6 = this._NgModel_12_5.context;
        this._NgControlStatus_12_7 = new import17.Wrapper_NgControlStatus(this._NgControl_12_6);
        this._text_13 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_8, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_15 = this.renderer.createText(this._el_14, 'Comenta', null);
        this._text_16 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'card card-block'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_21 = new import15.ViewContainer(21, 19, this, this._anchor_21);
        this._TemplateRef_21_5 = new import22.TemplateRef_(this, 21, this._anchor_21);
        this._NgFor_21_6 = new import20.Wrapper_NgFor(this._vc_21.vcRef, this._TemplateRef_21_5, this.parentView.injectorGet(import23.IterableDiffers, this.parentIndex), this.ref);
        this._text_22 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_2, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_12));
        this._NgModel_12_5.subscribe(this, this.eventHandler(this.handleEvent_12), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
        this._viewQuery_logginAnchor_0.reset([this._vc_0.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_BlogpostCommentComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.DefaultValueAccessor) && (12 === requestNodeIndex))) {
            return this._DefaultValueAccessor_12_3.context;
        }
        if (((token === import25.NG_VALUE_ACCESSOR) && (12 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_12_4;
        }
        if (((token === import26.NgModel) && (12 === requestNodeIndex))) {
            return this._NgModel_12_5.context;
        }
        if (((token === import27.NgControl) && (12 === requestNodeIndex))) {
            return this._NgControl_12_6;
        }
        if (((token === import28.NgControlStatus) && (12 === requestNodeIndex))) {
            return this._NgControlStatus_12_7.context;
        }
        if (((token === import29.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgForm_6_3.context;
        }
        if (((token === import30.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import28.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        if (((token === import22.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import31.NgFor) && (21 === requestNodeIndex))) {
            return this._NgFor_21_6.context;
        }
        return notFoundResult;
    };
    View_BlogpostCommentComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_12_1_0 = this.context.comment.commentText;
        this._NgModel_12_5.check_model(currVal_12_1_0, throwOnChange, false);
        var currVal_12_1_1 = this._map_41(true);
        this._NgModel_12_5.check_options(currVal_12_1_1, throwOnChange, false);
        this._NgModel_12_5.ngDoCheck(this, this._el_12, throwOnChange);
        this._NgControlStatus_12_7.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_21_0_0 = this.context.blogPost.comments;
        this._NgFor_21_6.check_ngForOf(currVal_21_0_0, throwOnChange, false);
        this._NgFor_21_6.ngDoCheck(this, this._anchor_21, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_21.detectChangesInNestedViews(throwOnChange);
        var currVal_39 = import3.inlineInterpolate(1, 'postComment', this.context.blogPost.id, '');
        if (import3.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementProperty(this._el_4, 'id', currVal_39);
            this._expr_39 = currVal_39;
        }
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        var currVal_40 = import3.inlineInterpolate(1, '', this.context.imageLink, '');
        if (import3.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementProperty(this._el_10, 'src', this.viewUtils.sanitizer.sanitize(import32.SecurityContext.URL, currVal_40));
            this._expr_40 = currVal_40;
        }
        this._NgControlStatus_12_7.checkHost(this, this, this._el_12, throwOnChange);
    };
    View_BlogpostCommentComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_21.destroyNestedViews();
        this._NgModel_12_5.ngOnDestroy();
        this._NgForm_6_3.ngOnDestroy();
    };
    View_BlogpostCommentComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 21)) {
            return new View_BlogpostCommentComponent1(this.viewUtils, this, 21, this._anchor_21, this._vc_21);
        }
        return null;
    };
    View_BlogpostCommentComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_6_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_BlogpostCommentComponent0.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_12_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.comment.commentText = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogpostCommentComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.submitComment(this.context.blogPost.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogpostCommentComponent0;
}(import2.AppView));
export { View_BlogpostCommentComponent0 };
var View_BlogpostCommentComponent1 = (function (_super) {
    __extends(View_BlogpostCommentComponent1, _super);
    function View_BlogpostCommentComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogpostCommentComponent1, renderType_BlogpostCommentComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogpostCommentComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'clearfix'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import15.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import22.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import33.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n            ', null);
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
    View_BlogpostCommentComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import34.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        return notFoundResult;
    };
    View_BlogpostCommentComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.context.$implicit;
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_BlogpostCommentComponent1.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
    };
    View_BlogpostCommentComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogpostCommentComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_BlogpostCommentComponent2(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_BlogpostCommentComponent1;
}(import2.AppView));
var View_BlogpostCommentComponent2 = (function (_super) {
    __extends(View_BlogpostCommentComponent2, _super);
    function View_BlogpostCommentComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogpostCommentComponent2, renderType_BlogpostCommentComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_10 = import1.UNINITIALIZED;
        _this._expr_11 = import1.UNINITIALIZED;
        _this._expr_12 = import1.UNINITIALIZED;
        return _this;
    }
    View_BlogpostCommentComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'class', 'user-image comment-img'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'header-info'), null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ]), null);
        return null;
    };
    View_BlogpostCommentComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10 = import3.inlineInterpolate(1, '', ((this.parentView.context.$implicit == null) ? null : ((this.parentView.context.$implicit.user == null) ? null : this.parentView.context.$implicit.user.imageUrl)), '');
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import32.SecurityContext.URL, currVal_10));
            this._expr_10 = currVal_10;
        }
        var currVal_11 = import3.inlineInterpolate(1, '', ((this.parentView.context.$implicit == null) ? null : ((this.parentView.context.$implicit.user == null) ? null : this.parentView.context.$implicit.user.name)), '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_5, currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit.commentText, '');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_8, currVal_12);
            this._expr_12 = currVal_12;
        }
    };
    View_BlogpostCommentComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BlogpostCommentComponent2;
}(import2.AppView));
