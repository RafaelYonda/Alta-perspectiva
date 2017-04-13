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
import * as import0 from './post-status.component';
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
import * as import12 from './post-status.component.css.shim.ngstyle';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '@angular/core/src/security';
var Wrapper_PostStatusComponent = (function () {
    function Wrapper_PostStatusComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.PostStatusComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_PostStatusComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PostStatusComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PostStatusComponent.prototype.check_blogPost = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.blogPost = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_PostStatusComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PostStatusComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PostStatusComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PostStatusComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PostStatusComponent;
}());
export { Wrapper_PostStatusComponent };
var renderType_PostStatusComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_PostStatusComponent_Host0 = (function (_super) {
    __extends(View_PostStatusComponent_Host0, _super);
    function View_PostStatusComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PostStatusComponent_Host0, renderType_PostStatusComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PostStatusComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'post-status', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PostStatusComponent0(this.viewUtils, this, 0, this._el_0);
        this._BlogService_0_3 = new import6.BlogService(this.injectorGet(import10.Http, this.parentIndex));
        this._PostStatusComponent_0_4 = new Wrapper_PostStatusComponent(this._BlogService_0_3, this.injectorGet(import11.ComponentFactoryResolver, this.parentIndex));
        this.compView_0.create(this._PostStatusComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._PostStatusComponent_0_4.context);
    };
    View_PostStatusComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.BlogService) && (0 === requestNodeIndex))) {
            return this._BlogService_0_3;
        }
        if (((token === import0.PostStatusComponent) && (0 === requestNodeIndex))) {
            return this._PostStatusComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_PostStatusComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PostStatusComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PostStatusComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PostStatusComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PostStatusComponent_Host0;
}(import2.AppView));
export var PostStatusComponentNgFactory = new import9.ComponentFactory('post-status', View_PostStatusComponent_Host0, import0.PostStatusComponent);
var styles_PostStatusComponent = [import12.styles];
var renderType_PostStatusComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_PostStatusComponent, {});
var View_PostStatusComponent0 = (function (_super) {
    __extends(View_PostStatusComponent0, _super);
    function View_PostStatusComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_PostStatusComponent0, renderType_PostStatusComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_51 = import1.UNINITIALIZED;
        _this._expr_52 = import1.UNINITIALIZED;
        _this._expr_53 = import1.UNINITIALIZED;
        _this._expr_54 = import1.UNINITIALIZED;
        _this._expr_55 = import1.UNINITIALIZED;
        _this._expr_56 = import1.UNINITIALIZED;
        _this._expr_57 = import1.UNINITIALIZED;
        _this._expr_58 = import1.UNINITIALIZED;
        return _this;
    }
    View_PostStatusComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import13.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'status-panel'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import14.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import16.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import15.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_6 = new import14.ViewContainer(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import16.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import15.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray8(6, 'class', 'status-line number-box', 'data-toggle', 'modal', 'href', '#'), null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_2, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'status-line'), null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'status-line like-border'), null);
        this._text_16 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'status-line number-box'), null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'status-line'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Leidos', null);
        this._text_22 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'status-line number-box hidden-xs'), null);
        this._text_24 = this.renderer.createText(this._el_23, '', null);
        this._text_25 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray8(6, 'aria-expanded', 'false', 'class', 'status-line hidden-xs', 'data-toggle', 'collapse'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'Comentarios', null);
        this._text_28 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'social-icon'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n            ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'a', new import3.InlineArray8(6, 'class', 'SHARE FACEBOOK', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n                ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img1', 'src', '../images/facebooklogo.jpg'), null);
        this._text_34 = this.renderer.createText(this._el_31, '\n            ', null);
        this._text_35 = this.renderer.createText(this._el_29, '\n\n            ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_29, 'a', new import3.InlineArray8(6, 'class', 'SHARE TWITTER', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n                ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_36, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img2', 'src', '../images/twitter.png'), null);
        this._text_39 = this.renderer.createText(this._el_36, '\n            ', null);
        this._text_40 = this.renderer.createText(this._el_29, '\n        ', null);
        this._text_41 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_42 = this.renderer.createText(this._el_0, '\n', null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        this._viewQuery_logginAnchor_0.reset([]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
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
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_PostStatusComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import17.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import16.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import17.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_PostStatusComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = (((this.context.blogPost == null) ? null : ((this.context.blogPost.likes == null) ? null : this.context.blogPost.likes.length)) < 1);
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = (((this.context.blogPost == null) ? null : ((this.context.blogPost.likes == null) ? null : this.context.blogPost.likes.length)) > 0);
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        var currVal_51 = import3.inlineInterpolate(1, '#likeModal', this.context.blogPost.id, '');
        if (import3.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementAttribute(this._el_8, 'data-target', ((currVal_51 == null) ? null : currVal_51.toString()));
            this._expr_51 = currVal_51;
        }
        var currVal_52 = import3.inlineInterpolate(1, '', ((this.context.blogPost == null) ? null : ((this.context.blogPost.likes == null) ? null : this.context.blogPost.likes.length)), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setText(this._text_9, currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_53 = import3.inlineInterpolate(1, '', ((((this.context.blogPost == null) ? null : ((this.context.blogPost.likes == null) ? null : this.context.blogPost.likes.length)) > 1) ? 'Me gusta' : 'Me gusta'), '');
        if (import3.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setText(this._text_13, currVal_53);
            this._expr_53 = currVal_53;
        }
        var currVal_54 = import3.inlineInterpolate(1, '', (((this.context.blogPost == null) ? null : this.context.blogPost.blogViewCount) ? ((this.context.blogPost == null) ? null : this.context.blogPost.blogViewCount) : 0), '');
        if (import3.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setText(this._text_18, currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_55 = import3.inlineInterpolate(1, '\n            ', this.context.blogPost.comments.length, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setText(this._text_24, currVal_55);
            this._expr_55 = currVal_55;
        }
        var currVal_56 = import3.inlineInterpolate(1, '#postComment', this.context.blogPost.id, '');
        if (import3.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementAttribute(this._el_26, 'data-target', ((currVal_56 == null) ? null : currVal_56.toString()));
            this._expr_56 = currVal_56;
        }
        var currVal_57 = import3.inlineInterpolate(3, 'https://www.facebook.com/sharer/sharer.php?u=', ((this.context.blogPost == null) ? null : this.context.blogPost.shareUrl), '&title=', ((this.context.blogPost == null) ? null : this.context.blogPost.title), '&description=', this.context.blogText, '');
        if (import3.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setElementProperty(this._el_31, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_57));
            this._expr_57 = currVal_57;
        }
        var currVal_58 = import3.inlineInterpolate(2, 'https://twitter.com/intent/tweet?text=', ((this.context.blogPost == null) ? null : this.context.blogPost.title), ' Check out:', ((this.context.blogPost == null) ? null : this.context.blogPost.shareUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setElementProperty(this._el_36, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_58));
            this._expr_58 = currVal_58;
        }
    };
    View_PostStatusComponent0.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_PostStatusComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_PostStatusComponent1(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_PostStatusComponent2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_PostStatusComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.showLikeUserDetails() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PostStatusComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.submitLike(((this.context.blogPost == null) ? null : this.context.blogPost.id)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PostStatusComponent0;
}(import2.AppView));
export { View_PostStatusComponent0 };
var View_PostStatusComponent1 = (function (_super) {
    __extends(View_PostStatusComponent1, _super);
    function View_PostStatusComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PostStatusComponent1, renderType_PostStatusComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PostStatusComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'onmouseout', 'this.src = \'../images/fade-logo.png\';', 'onmouseover', 'this.src = \'../images/like-logo.png\';', 'src', '../images/fade-logo.png'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_PostStatusComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PostStatusComponent1;
}(import2.AppView));
var View_PostStatusComponent2 = (function (_super) {
    __extends(View_PostStatusComponent2, _super);
    function View_PostStatusComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_PostStatusComponent2, renderType_PostStatusComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_PostStatusComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray2(2, 'src', '../images/like-logo.png'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_PostStatusComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PostStatusComponent2;
}(import2.AppView));
