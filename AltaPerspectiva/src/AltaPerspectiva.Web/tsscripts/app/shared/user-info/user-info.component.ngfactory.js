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
import * as import0 from './user-info.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/profile.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from 'ngx-popover/PopoverContent';
import * as import14 from '../../../../node_modules/ngx-popover/PopoverContent.ngfactory';
import * as import15 from '@angular/common/src/pipes/date_pipe';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/i18n/tokens';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/core/src/security';
import * as import21 from '../../../../node_modules/ngx-popover/Popover.ngfactory';
import * as import22 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from '@angular/router/src/router';
import * as import25 from '@angular/router/src/router_state';
import * as import26 from '@angular/common/src/location/location_strategy';
import * as import27 from 'ngx-popover/Popover';
import * as import28 from '@angular/router/src/directives/router_link';
var Wrapper_UserInfoComponent = (function () {
    function Wrapper_UserInfoComponent(p0) {
        this._changed = false;
        this.context = new import0.UserInfoComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    Wrapper_UserInfoComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UserInfoComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_UserInfoComponent.prototype.check_userObj = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.userObj = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_UserInfoComponent.prototype.check_viewDate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.viewDate = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_UserInfoComponent.prototype.check_isAnonymous = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.isAnonymous = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_UserInfoComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_UserInfoComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UserInfoComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UserInfoComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_UserInfoComponent;
}());
export { Wrapper_UserInfoComponent };
var renderType_UserInfoComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_UserInfoComponent_Host0 = (function (_super) {
    __extends(View_UserInfoComponent_Host0, _super);
    function View_UserInfoComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_UserInfoComponent_Host0, renderType_UserInfoComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_UserInfoComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'user-info', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UserInfoComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import6.ProfileService(this.injectorGet(import10.Http, this.parentIndex));
        this._UserInfoComponent_0_4 = new Wrapper_UserInfoComponent(this._ProfileService_0_3);
        this.compView_0.create(this._UserInfoComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._UserInfoComponent_0_4.context);
    };
    View_UserInfoComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.UserInfoComponent) && (0 === requestNodeIndex))) {
            return this._UserInfoComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_UserInfoComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserInfoComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UserInfoComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_UserInfoComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent_Host0;
}(import2.AppView));
export var UserInfoComponentNgFactory = new import9.ComponentFactory('user-info', View_UserInfoComponent_Host0, import0.UserInfoComponent);
var styles_UserInfoComponent = ['.topAlign[_ngcontent-%COMP%] {\n        margin-top: 47px;\n        font-family: "myriadpro-regular";\n        font-size: 12px;\n        line-height: 16.5px;\n        max-width: 150px;\n        color: #888585;\n    }\n    .popover-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n        list-style:none;\n        color: #888585;\n        font-size: 12px;\n        line-height: 16.5px;\n    }'];
var renderType_UserInfoComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_UserInfoComponent, {});
var View_UserInfoComponent0 = (function (_super) {
    __extends(View_UserInfoComponent0, _super);
    function View_UserInfoComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_UserInfoComponent0, renderType_UserInfoComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_86 = import1.UNINITIALIZED;
        _this._expr_87 = import1.UNINITIALIZED;
        _this._expr_88 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row row-fix inline-display'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new import11.ViewContainer(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import16.TemplateRef_(this, 3, this._anchor_3);
        this._NgIf_3_6 = new import12.Wrapper_NgIf(this._vc_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_6 = new import11.ViewContainer(6, 1, this, this._anchor_6);
        this._TemplateRef_6_5 = new import16.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import12.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_1, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = import3.createRenderElement(this.renderer, parentRenderNode, 'popover-content', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_9 = new import14.View_PopoverContent0(this.viewUtils, this, 9, this._el_9);
        this._PopoverContent_9_3 = new import14.Wrapper_PopoverContent(new import17.ElementRef(this._el_9), this.compView_9.ref, this.renderer);
        this._text_10 = this.renderer.createText(null, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'popover-panel'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'img', new import3.InlineArray2(2, 'class', 'user-image '), null);
        this._text_18 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'user-info'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'user-detail'), null);
        this._text_22 = this.renderer.createText(this._el_21, '', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'style', 'font-size: 12px;'), null);
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._text_28 = this.renderer.createText(this._el_19, '\n                ', null);
        this._text_29 = this.renderer.createText(this._el_15, '\n            ', null);
        this._text_30 = this.renderer.createText(this._el_13, '\n\n        ', null);
        this._text_31 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_11, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_33 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'topAlign'), null);
        this._text_35 = this.renderer.createText(this._el_34, '\n            ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'ul', new import3.InlineArray2(2, 'class', 'fa-ul'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n                ', null);
        this._anchor_38 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_38 = new import11.ViewContainer(38, 36, this, this._anchor_38);
        this._TemplateRef_38_5 = new import16.TemplateRef_(this, 38, this._anchor_38);
        this._NgIf_38_6 = new import12.Wrapper_NgIf(this._vc_38.vcRef, this._TemplateRef_38_5);
        this._text_39 = this.renderer.createText(this._el_36, '\n                ', null);
        this._anchor_40 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_40 = new import11.ViewContainer(40, 36, this, this._anchor_40);
        this._TemplateRef_40_5 = new import16.TemplateRef_(this, 40, this._anchor_40);
        this._NgIf_40_6 = new import12.Wrapper_NgIf(this._vc_40.vcRef, this._TemplateRef_40_5);
        this._text_41 = this.renderer.createText(this._el_36, '\n\n\n                ', null);
        this._anchor_42 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_42 = new import11.ViewContainer(42, 36, this, this._anchor_42);
        this._TemplateRef_42_5 = new import16.TemplateRef_(this, 42, this._anchor_42);
        this._NgIf_42_6 = new import12.Wrapper_NgIf(this._vc_42.vcRef, this._TemplateRef_42_5);
        this._text_43 = this.renderer.createText(this._el_36, '\n                ', null);
        this._anchor_44 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_44 = new import11.ViewContainer(44, 36, this, this._anchor_44);
        this._TemplateRef_44_5 = new import16.TemplateRef_(this, 44, this._anchor_44);
        this._NgIf_44_6 = new import12.Wrapper_NgIf(this._vc_44.vcRef, this._TemplateRef_44_5);
        this._text_45 = this.renderer.createText(this._el_36, '\n                ', null);
        this._anchor_46 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_46 = new import11.ViewContainer(46, 36, this, this._anchor_46);
        this._TemplateRef_46_5 = new import16.TemplateRef_(this, 46, this._anchor_46);
        this._NgIf_46_6 = new import12.Wrapper_NgIf(this._vc_46.vcRef, this._TemplateRef_46_5);
        this._text_47 = this.renderer.createText(this._el_36, '\n                ', null);
        this._anchor_48 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_48 = new import11.ViewContainer(48, 36, this, this._anchor_48);
        this._TemplateRef_48_5 = new import16.TemplateRef_(this, 48, this._anchor_48);
        this._NgIf_48_6 = new import12.Wrapper_NgIf(this._vc_48.vcRef, this._TemplateRef_48_5);
        this._text_49 = this.renderer.createText(this._el_36, '\n\n                ', null);
        this._anchor_50 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_50 = new import11.ViewContainer(50, 36, this, this._anchor_50);
        this._TemplateRef_50_5 = new import16.TemplateRef_(this, 50, this._anchor_50);
        this._NgIf_50_6 = new import12.Wrapper_NgIf(this._vc_50.vcRef, this._TemplateRef_50_5);
        this._text_51 = this.renderer.createText(this._el_36, '\n            ', null);
        this._text_52 = this.renderer.createText(this._el_34, '\n        ', null);
        this._text_53 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_54 = this.renderer.createText(null, '\n', null);
        this.compView_9.create(this._PopoverContent_9_3.context);
        this._text_55 = this.renderer.createText(parentRenderNode, '\n', null);
        this._pipe_date_0 = new import15.DatePipe(this.parentView.injectorGet(import18.LOCALE_ID, this.parentIndex));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._anchor_38,
            this._text_39,
            this._anchor_40,
            this._text_41,
            this._anchor_42,
            this._text_43,
            this._anchor_44,
            this._text_45,
            this._anchor_46,
            this._text_47,
            this._anchor_48,
            this._text_49,
            this._anchor_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._text_54,
            this._text_55
        ]), null);
        return null;
    };
    View_UserInfoComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import19.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        if (((token === import16.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import19.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import16.TemplateRef) && (38 === requestNodeIndex))) {
            return this._TemplateRef_38_5;
        }
        if (((token === import19.NgIf) && (38 === requestNodeIndex))) {
            return this._NgIf_38_6.context;
        }
        if (((token === import16.TemplateRef) && (40 === requestNodeIndex))) {
            return this._TemplateRef_40_5;
        }
        if (((token === import19.NgIf) && (40 === requestNodeIndex))) {
            return this._NgIf_40_6.context;
        }
        if (((token === import16.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import19.NgIf) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        if (((token === import16.TemplateRef) && (44 === requestNodeIndex))) {
            return this._TemplateRef_44_5;
        }
        if (((token === import19.NgIf) && (44 === requestNodeIndex))) {
            return this._NgIf_44_6.context;
        }
        if (((token === import16.TemplateRef) && (46 === requestNodeIndex))) {
            return this._TemplateRef_46_5;
        }
        if (((token === import19.NgIf) && (46 === requestNodeIndex))) {
            return this._NgIf_46_6.context;
        }
        if (((token === import16.TemplateRef) && (48 === requestNodeIndex))) {
            return this._TemplateRef_48_5;
        }
        if (((token === import19.NgIf) && (48 === requestNodeIndex))) {
            return this._NgIf_48_6.context;
        }
        if (((token === import16.TemplateRef) && (50 === requestNodeIndex))) {
            return this._TemplateRef_50_5;
        }
        if (((token === import19.NgIf) && (50 === requestNodeIndex))) {
            return this._NgIf_50_6.context;
        }
        if (((token === import13.PopoverContent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._PopoverContent_9_3.context;
        }
        return notFoundResult;
    };
    View_UserInfoComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = !this.context.isAnonymous;
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        var currVal_6_0_0 = this.context.isAnonymous;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._PopoverContent_9_3.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_38_0_0 = (((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.questionCount) != 0);
        this._NgIf_38_6.check_ngIf(currVal_38_0_0, throwOnChange, false);
        this._NgIf_38_6.ngDoCheck(this, this._anchor_38, throwOnChange);
        var currVal_40_0_0 = (((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.answerCount) != 0);
        this._NgIf_40_6.check_ngIf(currVal_40_0_0, throwOnChange, false);
        this._NgIf_40_6.ngDoCheck(this, this._anchor_40, throwOnChange);
        var currVal_42_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.education);
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        var currVal_44_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.employment);
        this._NgIf_44_6.check_ngIf(currVal_44_0_0, throwOnChange, false);
        this._NgIf_44_6.ngDoCheck(this, this._anchor_44, throwOnChange);
        var currVal_46_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.place);
        this._NgIf_46_6.check_ngIf(currVal_46_0_0, throwOnChange, false);
        this._NgIf_46_6.ngDoCheck(this, this._anchor_46, throwOnChange);
        var currVal_48_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.otherExperience);
        this._NgIf_48_6.check_ngIf(currVal_48_0_0, throwOnChange, false);
        this._NgIf_48_6.ngDoCheck(this, this._anchor_48, throwOnChange);
        var currVal_50_0_0 = (((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.questionViewCount) != 0);
        this._NgIf_50_6.check_ngIf(currVal_50_0_0, throwOnChange, false);
        this._NgIf_50_6.ngDoCheck(this, this._anchor_50, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_38.detectChangesInNestedViews(throwOnChange);
        this._vc_40.detectChangesInNestedViews(throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._vc_44.detectChangesInNestedViews(throwOnChange);
        this._vc_46.detectChangesInNestedViews(throwOnChange);
        this._vc_48.detectChangesInNestedViews(throwOnChange);
        this._vc_50.detectChangesInNestedViews(throwOnChange);
        var currVal_86 = import3.inlineInterpolate(1, '', ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.imageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setElementProperty(this._el_17, 'src', this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL, currVal_86));
            this._expr_86 = currVal_86;
        }
        var currVal_87 = import3.inlineInterpolate(1, '\n                        ', ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.fullName), '\n                        ');
        if (import3.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setText(this._text_22, currVal_87);
            this._expr_87 = currVal_87;
        }
        var currVal_88 = import3.inlineInterpolate(1, ' ', ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setText(this._text_26, currVal_88);
            this._expr_88 = currVal_88;
        }
        this.compView_9.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._PopoverContent_9_3.context.ngAfterViewInit();
            }
        }
    };
    View_UserInfoComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this._vc_38.destroyNestedViews();
        this._vc_40.destroyNestedViews();
        this._vc_42.destroyNestedViews();
        this._vc_44.destroyNestedViews();
        this._vc_46.destroyNestedViews();
        this._vc_48.destroyNestedViews();
        this._vc_50.destroyNestedViews();
        this.compView_9.destroy();
        this._PopoverContent_9_3.ngOnDestroy();
    };
    View_UserInfoComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 9) && (ngContentIndex == 0))) {
            cb(this._text_10, ctx);
            cb(this._el_11, ctx);
            cb(this._text_54, ctx);
        }
    };
    View_UserInfoComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_UserInfoComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        if ((nodeIndex == 6)) {
            return new View_UserInfoComponent3(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 38)) {
            return new View_UserInfoComponent5(this.viewUtils, this, 38, this._anchor_38, this._vc_38);
        }
        if ((nodeIndex == 40)) {
            return new View_UserInfoComponent6(this.viewUtils, this, 40, this._anchor_40, this._vc_40);
        }
        if ((nodeIndex == 42)) {
            return new View_UserInfoComponent7(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        if ((nodeIndex == 44)) {
            return new View_UserInfoComponent8(this.viewUtils, this, 44, this._anchor_44, this._vc_44);
        }
        if ((nodeIndex == 46)) {
            return new View_UserInfoComponent9(this.viewUtils, this, 46, this._anchor_46, this._vc_46);
        }
        if ((nodeIndex == 48)) {
            return new View_UserInfoComponent10(this.viewUtils, this, 48, this._anchor_48, this._vc_48);
        }
        if ((nodeIndex == 50)) {
            return new View_UserInfoComponent11(this.viewUtils, this, 50, this._anchor_50, this._vc_50);
        }
        return null;
    };
    return View_UserInfoComponent0;
}(import2.AppView));
export { View_UserInfoComponent0 };
var View_UserInfoComponent1 = (function (_super) {
    __extends(View_UserInfoComponent1, _super);
    function View_UserInfoComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserInfoComponent1, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserInfoComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import16.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import12.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import19.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_UserInfoComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.userObj;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_UserInfoComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_UserInfoComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserInfoComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_UserInfoComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_UserInfoComponent1;
}(import2.AppView));
var View_UserInfoComponent2 = (function (_super) {
    __extends(View_UserInfoComponent2, _super);
    function View_UserInfoComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent2, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_24 = import1.UNINITIALIZED;
        _this._arr_25 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_26 = import1.UNINITIALIZED;
        _this._expr_27 = import1.UNINITIALIZED;
        _this._expr_28 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'class', 'user-image '), null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._el_2);
        this._Popover_2_5 = new import21.Wrapper_Popover(this._vc_2.vcRef, this.parentView.parentView.parentView.injectorGet(import23.ComponentFactoryResolver, this.parentView.parentView.parentIndex));
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'user-info'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'user-detail'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_8_3 = new import22.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import24.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import25.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import26.LocationStrategy, this.parentView.parentView.parentIndex));
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'style', 'font-size: 12px;'), null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(this._el_6, '\n                ', null);
        this._text_16 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'user-detail light-gray date-font'), null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray16(12, 'mouseover', null, 'click', null, 'focusin', null, 'mouseenter', null, 'focusout', null, 'mouseleave', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
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
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_UserInfoComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.Popover) && (2 === requestNodeIndex))) {
            return this._Popover_2_5.context;
        }
        if (((token === import28.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_8_3.context;
        }
        return notFoundResult;
    };
    View_UserInfoComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_2_0_0 = this.parentView.parentView._PopoverContent_9_3.context;
        this._Popover_2_5.check_content(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = true;
        this._Popover_2_5.check_popoverOnHover(currVal_2_0_1, throwOnChange, false);
        var currVal_2_0_2 = true;
        this._Popover_2_5.check_popoverCloseOnClickOutside(currVal_2_0_2, throwOnChange, false);
        this._Popover_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_8_0_0 = this._arr_25('/dashboard/viewprofile/', ((this.parentView.parentView.context.userObj == null) ? null : this.parentView.parentView.context.userObj.userId), 'user-question');
        this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0, throwOnChange, false);
        this._RouterLinkWithHref_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        var currVal_24 = import3.inlineInterpolate(1, '', ((this.parentView.parentView.context.userObj == null) ? null : this.parentView.parentView.context.userObj.imageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL, currVal_24));
            this._expr_24 = currVal_24;
        }
        this._RouterLinkWithHref_8_3.checkHost(this, this, this._el_8, throwOnChange);
        var currVal_26 = import3.inlineInterpolate(1, ' ', ((this.parentView.parentView.context.userObj == null) ? null : this.parentView.parentView.context.userObj.name), '');
        if (import3.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setText(this._text_9, currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = import3.inlineInterpolate(1, ' ', ((this.parentView.parentView.context.userObj == null) ? null : this.parentView.parentView.context.userObj.occupation), '');
        if (import3.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setText(this._text_14, currVal_27);
            this._expr_27 = currVal_27;
        }
        valUnwrapper.reset();
        var currVal_28 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0, this.parentView.parentView._pipe_date_0.transform)(this.parentView.parentView.context.viewDate, 'dd MMM, yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_28, currVal_28))) {
            this.renderer.setText(this._text_18, currVal_28);
            this._expr_28 = currVal_28;
        }
    };
    View_UserInfoComponent2.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._Popover_2_5.ngOnDestroy();
        this._RouterLinkWithHref_8_3.ngOnDestroy();
    };
    View_UserInfoComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserInfoComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._Popover_2_5.handleEvent(eventName, $event) && result);
        if ((eventName == 'mouseover')) {
            var pd_sub_0 = (this.parentView.parentView.context.over(((this.parentView.parentView.context.userObj == null) ? null : this.parentView.parentView.context.userObj.userId)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserInfoComponent2.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_UserInfoComponent2;
}(import2.AppView));
var View_UserInfoComponent3 = (function (_super) {
    __extends(View_UserInfoComponent3, _super);
    function View_UserInfoComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserInfoComponent3, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserInfoComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import16.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import12.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import19.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_UserInfoComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.userObj;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_UserInfoComponent3.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_UserInfoComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserInfoComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_UserInfoComponent4(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_UserInfoComponent3;
}(import2.AppView));
var View_UserInfoComponent4 = (function (_super) {
    __extends(View_UserInfoComponent4, _super);
    function View_UserInfoComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent4, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_13 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'user-image ', 'src', '../../../../profile/Anonymous.png'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'user-info'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'user-detail'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Anónimo', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'user-detail light-gray'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n        ', null);
        this._pipe_date_0_1 = import3.pureProxy2(this.parentView.parentView._pipe_date_0.transform.bind(this.parentView.parentView._pipe_date_0));
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
        ]), null);
        return null;
    };
    View_UserInfoComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        valUnwrapper.reset();
        var currVal_13 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_1, this.parentView.parentView._pipe_date_0.transform)(this.parentView.parentView.context.viewDate, 'dd MMM, yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_13, currVal_13))) {
            this.renderer.setText(this._text_10, currVal_13);
            this._expr_13 = currVal_13;
        }
    };
    View_UserInfoComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent4;
}(import2.AppView));
var View_UserInfoComponent5 = (function (_super) {
    __extends(View_UserInfoComponent5, _super);
    function View_UserInfoComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent5, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_3 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-question'), null);
        this._text_2 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_UserInfoComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = import3.inlineInterpolate(1, 'Preguntas: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.questionCount), '');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_2, currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_UserInfoComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent5;
}(import2.AppView));
var View_UserInfoComponent6 = (function (_super) {
    __extends(View_UserInfoComponent6, _super);
    function View_UserInfoComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent6, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-check-square'), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, 'Respuestas: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.answerCount), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_UserInfoComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent6;
}(import2.AppView));
var View_UserInfoComponent7 = (function (_super) {
    __extends(View_UserInfoComponent7, _super);
    function View_UserInfoComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent7, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-university'), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, 'Educación: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.education), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_UserInfoComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent7;
}(import2.AppView));
var View_UserInfoComponent8 = (function (_super) {
    __extends(View_UserInfoComponent8, _super);
    function View_UserInfoComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent8, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-info-circle'), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, 'Labor: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.employment), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_UserInfoComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent8;
}(import2.AppView));
var View_UserInfoComponent9 = (function (_super) {
    __extends(View_UserInfoComponent9, _super);
    function View_UserInfoComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent9, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-home '), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, 'Lugar: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.place), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_UserInfoComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent9;
}(import2.AppView));
var View_UserInfoComponent10 = (function (_super) {
    __extends(View_UserInfoComponent10, _super);
    function View_UserInfoComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent10, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-cog'), null);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_UserInfoComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, 'Otros: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.otherExperience), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_UserInfoComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent10;
}(import2.AppView));
var View_UserInfoComponent11 = (function (_super) {
    __extends(View_UserInfoComponent11, _super);
    function View_UserInfoComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserInfoComponent11, renderType_UserInfoComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserInfoComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-eye'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n\n                    ', null);
        this._text_4 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_UserInfoComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, 'Veces leído: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.questionViewCount), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_4, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_UserInfoComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserInfoComponent11;
}(import2.AppView));
