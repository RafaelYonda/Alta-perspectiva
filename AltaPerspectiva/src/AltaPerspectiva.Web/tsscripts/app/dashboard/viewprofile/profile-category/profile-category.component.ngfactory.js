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
import * as import0 from './profile-category.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/core/src/security';
var Wrapper_ProfileCategoryComponent = (function () {
    function Wrapper_ProfileCategoryComponent() {
        this._changed = false;
        this.context = new import0.ProfileCategoryComponent();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_ProfileCategoryComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ProfileCategoryComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ProfileCategoryComponent.prototype.check_categoryWiseAnswers = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.categoryWiseAnswers = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ProfileCategoryComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ProfileCategoryComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ProfileCategoryComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ProfileCategoryComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ProfileCategoryComponent;
}());
export { Wrapper_ProfileCategoryComponent };
var renderType_ProfileCategoryComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ProfileCategoryComponent_Host0 = (function (_super) {
    __extends(View_ProfileCategoryComponent_Host0, _super);
    function View_ProfileCategoryComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ProfileCategoryComponent_Host0, renderType_ProfileCategoryComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ProfileCategoryComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'profile-category', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ProfileCategoryComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileCategoryComponent_0_3 = new Wrapper_ProfileCategoryComponent();
        this.compView_0.create(this._ProfileCategoryComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._ProfileCategoryComponent_0_3.context);
    };
    View_ProfileCategoryComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProfileCategoryComponent) && (0 === requestNodeIndex))) {
            return this._ProfileCategoryComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ProfileCategoryComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProfileCategoryComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ProfileCategoryComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ProfileCategoryComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileCategoryComponent_Host0;
}(import2.AppView));
export var ProfileCategoryComponentNgFactory = new import8.ComponentFactory('profile-category', View_ProfileCategoryComponent_Host0, import0.ProfileCategoryComponent);
var styles_ProfileCategoryComponent = ['.profile-cat-img[_ngcontent-%COMP%] {\n        float: left;\n        height: 30px;\n        width: 30px;\n        border-radius: 10%;\n        margin-right: 12px;\n    }\n\n    .statistic-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        list-style: none;\n    }\n\n    .profile-rightmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-weight: 700;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        line-height:10px;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n        font-size:10px;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n        margin-bottom:20px;\n    }'];
var renderType_ProfileCategoryComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_ProfileCategoryComponent, {});
var View_ProfileCategoryComponent0 = (function (_super) {
    __extends(View_ProfileCategoryComponent0, _super);
    function View_ProfileCategoryComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ProfileCategoryComponent0, renderType_ProfileCategoryComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ProfileCategoryComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'statistic-panel'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Etapas de mi negocio', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_6 = new import9.ViewContainer(6, 1, this, this._anchor_6);
        this._TemplateRef_6_5 = new import11.TemplateRef_(this, 6, this._anchor_6);
        this._NgFor_6_6 = new import10.Wrapper_NgFor(this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_7 = this.renderer.createText(this._el_1, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), null);
        return null;
    };
    View_ProfileCategoryComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import13.NgFor) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        return notFoundResult;
    };
    View_ProfileCategoryComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.categoryWiseAnswers;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
    };
    View_ProfileCategoryComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
    };
    View_ProfileCategoryComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_ProfileCategoryComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_ProfileCategoryComponent0;
}(import2.AppView));
export { View_ProfileCategoryComponent0 };
var View_ProfileCategoryComponent1 = (function (_super) {
    __extends(View_ProfileCategoryComponent1, _super);
    function View_ProfileCategoryComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ProfileCategoryComponent1, renderType_ProfileCategoryComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_19 = import1.UNINITIALIZED;
        _this._arr_20 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._arr_21 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_22 = import1.UNINITIALIZED;
        _this._expr_23 = import1.UNINITIALIZED;
        return _this;
    }
    View_ProfileCategoryComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'profile-rightmenu'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray2(2, 'class', 'profile-cat-img'), null);
        this._RouterLink_4_3 = new import14.Wrapper_RouterLink(this.parentView.parentView.injectorGet(import15.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import16.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import17.LocationStrategy, this.parentView.parentIndex));
        this._text_5 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_8_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import15.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import16.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import17.LocationStrategy, this.parentView.parentIndex));
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_2, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_12, 'Respuestas', null);
        this._text_15 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
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
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ProfileCategoryComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLink) && (4 === requestNodeIndex))) {
            return this._RouterLink_4_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_8_3.context;
        }
        return notFoundResult;
    };
    View_ProfileCategoryComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this._arr_20('/question/home', ((this.context.$implicit == null) ? null : this.context.$implicit.categoryId));
        this._RouterLink_4_3.check_routerLink(currVal_4_0_0, throwOnChange, false);
        this._RouterLink_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_8_0_0 = this._arr_21('/question/home', ((this.context.$implicit == null) ? null : this.context.$implicit.categoryId));
        this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0, throwOnChange, false);
        this._RouterLinkWithHref_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_19 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.imageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import19.SecurityContext.URL, currVal_19));
            this._expr_19 = currVal_19;
        }
        this._RouterLinkWithHref_8_3.checkHost(this, this, this._el_8, throwOnChange);
        var currVal_22 = import3.inlineInterpolate(1, ' ', ((this.context.$implicit == null) ? null : this.context.$implicit.categoryName), '');
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setText(this._text_9, currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.answerCount), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_13, currVal_23);
            this._expr_23 = currVal_23;
        }
    };
    View_ProfileCategoryComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_8_3.ngOnDestroy();
    };
    View_ProfileCategoryComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileCategoryComponent1.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_4_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ProfileCategoryComponent1.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ProfileCategoryComponent1;
}(import2.AppView));
