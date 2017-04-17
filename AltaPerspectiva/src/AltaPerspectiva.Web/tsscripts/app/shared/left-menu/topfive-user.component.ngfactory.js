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
import * as import0 from './topfive-user.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/profile.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../services/communication.service';
import * as import11 from '@angular/router/src/router';
import * as import12 from './left-menu.css.shim.ngstyle';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from 'ngx-popover/PopoverContent';
import * as import16 from '../../../../node_modules/ngx-popover/PopoverContent.ngfactory';
import * as import17 from '@angular/core/src/change_detection/change_detection_util';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/core/src/security';
import * as import22 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import24 from '@angular/common/src/directives/ng_for';
import * as import25 from '../../../../node_modules/ngx-popover/Popover.ngfactory';
import * as import26 from '@angular/core/src/linker/component_factory_resolver';
import * as import27 from 'ngx-popover/Popover';
var Wrapper_TopFiveUserComponent = (function () {
    function Wrapper_TopFiveUserComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.TopFiveUserComponent(p0, p1, p2);
    }
    Wrapper_TopFiveUserComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TopFiveUserComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_TopFiveUserComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TopFiveUserComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TopFiveUserComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TopFiveUserComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TopFiveUserComponent;
}());
export { Wrapper_TopFiveUserComponent };
var renderType_TopFiveUserComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_TopFiveUserComponent_Host0 = (function (_super) {
    __extends(View_TopFiveUserComponent_Host0, _super);
    function View_TopFiveUserComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_TopFiveUserComponent_Host0, renderType_TopFiveUserComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_TopFiveUserComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'topfive-user', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TopFiveUserComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http, this.parentIndex));
        this._TopFiveUserComponent_0_4 = new Wrapper_TopFiveUserComponent(this._ProfileService_0_3, this.injectorGet(import10.CommunicationService, this.parentIndex), this.injectorGet(import11.Router, this.parentIndex));
        this.compView_0.create(this._TopFiveUserComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._TopFiveUserComponent_0_4.context);
    };
    View_TopFiveUserComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.TopFiveUserComponent) && (0 === requestNodeIndex))) {
            return this._TopFiveUserComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_TopFiveUserComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TopFiveUserComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TopFiveUserComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TopFiveUserComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent_Host0;
}(import1.AppView));
export var TopFiveUserComponentNgFactory = new import8.ComponentFactory('topfive-user', View_TopFiveUserComponent_Host0, import0.TopFiveUserComponent);
var styles_TopFiveUserComponent = [
    '.topAlign[_ngcontent-%COMP%] {\n        margin-top: 47px;\n        font-family: "myriadpro-regular";\n        font-size: 12px;\n        line-height: 16.5px;\n        max-width: 150px;\n        color: #888585;\n    }\n\n    .popover-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        list-style: none;\n        color: #888585;\n        font-size: 12px;\n        line-height: 16.5px;\n    }\n    top-user-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n        outline: none;\n    text-decoration: none;\n    color: #F6912B !important;\n    }',
    import12.styles
];
var renderType_TopFiveUserComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_TopFiveUserComponent, {});
var View_TopFiveUserComponent0 = (function (_super) {
    __extends(View_TopFiveUserComponent0, _super);
    function View_TopFiveUserComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_TopFiveUserComponent0, renderType_TopFiveUserComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_85 = import17.UNINITIALIZED;
        _this._expr_86 = import17.UNINITIALIZED;
        _this._expr_87 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'menu-container hidden-xs'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'list-title'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_3, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Usuarios más destacados', null);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_1, 'img', new import3.InlineArray4(4, 'class', 'horizontal-border', 'src', '../../../../images/border-horizontal.png'), null);
        this._text_8 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_9 = new import13.ViewContainer(9, 1, this, this._anchor_9);
        this._TemplateRef_9_5 = new import18.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import14.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_1, '\n', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_12 = import3.createRenderElement(this.renderer, parentRenderNode, 'popover-content', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_12 = new import16.View_PopoverContent0(this.viewUtils, this, 12, this._el_12);
        this._PopoverContent_12_3 = new import16.Wrapper_PopoverContent(new import19.ElementRef(this._el_12), this.compView_12.ref, this.renderer);
        this._text_13 = this.renderer.createText(null, '\n    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'popover-panel'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'ul', new import3.InlineArray2(2, 'style', 'list-style-type: none;'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n            ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n                ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'img', new import3.InlineArray2(2, 'class', 'user-image '), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n\n                ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_18, 'div', new import3.InlineArray2(2, 'class', 'user-info'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'div', new import3.InlineArray2(2, 'class', 'user-detail'), null);
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_24, 'span', new import3.InlineArray2(2, 'style', 'font-size: 12px;'), null);
        this._text_29 = this.renderer.createText(this._el_28, '', null);
        this._text_30 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._text_31 = this.renderer.createText(this._el_22, '\n                ', null);
        this._text_32 = this.renderer.createText(this._el_18, '\n            ', null);
        this._text_33 = this.renderer.createText(this._el_16, '\n\n        ', null);
        this._text_34 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_14, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_14, 'div', new import3.InlineArray2(2, 'class', 'topAlign'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'ul', new import3.InlineArray2(2, 'class', 'fa-ul'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                ', null);
        this._anchor_41 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_41 = new import13.ViewContainer(41, 39, this, this._anchor_41);
        this._TemplateRef_41_5 = new import18.TemplateRef_(this, 41, this._anchor_41);
        this._NgIf_41_6 = new import14.Wrapper_NgIf(this._vc_41.vcRef, this._TemplateRef_41_5);
        this._text_42 = this.renderer.createText(this._el_39, '\n                ', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_43 = new import13.ViewContainer(43, 39, this, this._anchor_43);
        this._TemplateRef_43_5 = new import18.TemplateRef_(this, 43, this._anchor_43);
        this._NgIf_43_6 = new import14.Wrapper_NgIf(this._vc_43.vcRef, this._TemplateRef_43_5);
        this._text_44 = this.renderer.createText(this._el_39, '\n\n\n                ', null);
        this._anchor_45 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_45 = new import13.ViewContainer(45, 39, this, this._anchor_45);
        this._TemplateRef_45_5 = new import18.TemplateRef_(this, 45, this._anchor_45);
        this._NgIf_45_6 = new import14.Wrapper_NgIf(this._vc_45.vcRef, this._TemplateRef_45_5);
        this._text_46 = this.renderer.createText(this._el_39, '\n                ', null);
        this._anchor_47 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_47 = new import13.ViewContainer(47, 39, this, this._anchor_47);
        this._TemplateRef_47_5 = new import18.TemplateRef_(this, 47, this._anchor_47);
        this._NgIf_47_6 = new import14.Wrapper_NgIf(this._vc_47.vcRef, this._TemplateRef_47_5);
        this._text_48 = this.renderer.createText(this._el_39, '\n                ', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_49 = new import13.ViewContainer(49, 39, this, this._anchor_49);
        this._TemplateRef_49_5 = new import18.TemplateRef_(this, 49, this._anchor_49);
        this._NgIf_49_6 = new import14.Wrapper_NgIf(this._vc_49.vcRef, this._TemplateRef_49_5);
        this._text_50 = this.renderer.createText(this._el_39, '\n                ', null);
        this._anchor_51 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_51 = new import13.ViewContainer(51, 39, this, this._anchor_51);
        this._TemplateRef_51_5 = new import18.TemplateRef_(this, 51, this._anchor_51);
        this._NgIf_51_6 = new import14.Wrapper_NgIf(this._vc_51.vcRef, this._TemplateRef_51_5);
        this._text_52 = this.renderer.createText(this._el_39, '\n\n                ', null);
        this._anchor_53 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_53 = new import13.ViewContainer(53, 39, this, this._anchor_53);
        this._TemplateRef_53_5 = new import18.TemplateRef_(this, 53, this._anchor_53);
        this._NgIf_53_6 = new import14.Wrapper_NgIf(this._vc_53.vcRef, this._TemplateRef_53_5);
        this._text_54 = this.renderer.createText(this._el_39, '\n            ', null);
        this._text_55 = this.renderer.createText(this._el_37, '\n        ', null);
        this._text_56 = this.renderer.createText(this._el_14, '\n    ', null);
        this._text_57 = this.renderer.createText(null, '\n', null);
        this.compView_12.create(this._PopoverContent_12_3.context);
        this._text_58 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
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
            this._anchor_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._anchor_45,
            this._text_46,
            this._anchor_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._anchor_51,
            this._text_52,
            this._anchor_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58
        ]), null);
        return null;
    };
    View_TopFiveUserComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import20.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        if (((token === import18.TemplateRef) && (41 === requestNodeIndex))) {
            return this._TemplateRef_41_5;
        }
        if (((token === import20.NgIf) && (41 === requestNodeIndex))) {
            return this._NgIf_41_6.context;
        }
        if (((token === import18.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import20.NgIf) && (43 === requestNodeIndex))) {
            return this._NgIf_43_6.context;
        }
        if (((token === import18.TemplateRef) && (45 === requestNodeIndex))) {
            return this._TemplateRef_45_5;
        }
        if (((token === import20.NgIf) && (45 === requestNodeIndex))) {
            return this._NgIf_45_6.context;
        }
        if (((token === import18.TemplateRef) && (47 === requestNodeIndex))) {
            return this._TemplateRef_47_5;
        }
        if (((token === import20.NgIf) && (47 === requestNodeIndex))) {
            return this._NgIf_47_6.context;
        }
        if (((token === import18.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import20.NgIf) && (49 === requestNodeIndex))) {
            return this._NgIf_49_6.context;
        }
        if (((token === import18.TemplateRef) && (51 === requestNodeIndex))) {
            return this._TemplateRef_51_5;
        }
        if (((token === import20.NgIf) && (51 === requestNodeIndex))) {
            return this._NgIf_51_6.context;
        }
        if (((token === import18.TemplateRef) && (53 === requestNodeIndex))) {
            return this._TemplateRef_53_5;
        }
        if (((token === import20.NgIf) && (53 === requestNodeIndex))) {
            return this._NgIf_53_6.context;
        }
        if (((token === import15.PopoverContent) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._PopoverContent_12_3.context;
        }
        return notFoundResult;
    };
    View_TopFiveUserComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9_0_0 = (this.context.topFiveUsers.length > 0);
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._PopoverContent_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_41_0_0 = (((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.questionCount) != 0);
        this._NgIf_41_6.check_ngIf(currVal_41_0_0, throwOnChange, false);
        this._NgIf_41_6.ngDoCheck(this, this._anchor_41, throwOnChange);
        var currVal_43_0_0 = (((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.answerCount) != 0);
        this._NgIf_43_6.check_ngIf(currVal_43_0_0, throwOnChange, false);
        this._NgIf_43_6.ngDoCheck(this, this._anchor_43, throwOnChange);
        var currVal_45_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.education);
        this._NgIf_45_6.check_ngIf(currVal_45_0_0, throwOnChange, false);
        this._NgIf_45_6.ngDoCheck(this, this._anchor_45, throwOnChange);
        var currVal_47_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.employment);
        this._NgIf_47_6.check_ngIf(currVal_47_0_0, throwOnChange, false);
        this._NgIf_47_6.ngDoCheck(this, this._anchor_47, throwOnChange);
        var currVal_49_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.place);
        this._NgIf_49_6.check_ngIf(currVal_49_0_0, throwOnChange, false);
        this._NgIf_49_6.ngDoCheck(this, this._anchor_49, throwOnChange);
        var currVal_51_0_0 = ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.otherExperience);
        this._NgIf_51_6.check_ngIf(currVal_51_0_0, throwOnChange, false);
        this._NgIf_51_6.ngDoCheck(this, this._anchor_51, throwOnChange);
        var currVal_53_0_0 = (((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.questionViewCount) != 0);
        this._NgIf_53_6.check_ngIf(currVal_53_0_0, throwOnChange, false);
        this._NgIf_53_6.ngDoCheck(this, this._anchor_53, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_41.detectChangesInNestedViews(throwOnChange);
        this._vc_43.detectChangesInNestedViews(throwOnChange);
        this._vc_45.detectChangesInNestedViews(throwOnChange);
        this._vc_47.detectChangesInNestedViews(throwOnChange);
        this._vc_49.detectChangesInNestedViews(throwOnChange);
        this._vc_51.detectChangesInNestedViews(throwOnChange);
        this._vc_53.detectChangesInNestedViews(throwOnChange);
        var currVal_85 = import3.inlineInterpolate(1, '', ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.imageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this.renderer.setElementProperty(this._el_20, 'src', this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL, currVal_85));
            this._expr_85 = currVal_85;
        }
        var currVal_86 = import3.inlineInterpolate(1, '\n                        ', ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.fullName), '\n                        ');
        if (import3.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setText(this._text_25, currVal_86);
            this._expr_86 = currVal_86;
        }
        var currVal_87 = import3.inlineInterpolate(1, ' ', ((this.context.userInfoDetails == null) ? null : this.context.userInfoDetails.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setText(this._text_29, currVal_87);
            this._expr_87 = currVal_87;
        }
        this.compView_12.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._PopoverContent_12_3.context.ngAfterViewInit();
            }
        }
    };
    View_TopFiveUserComponent0.prototype.destroyInternal = function () {
        this._vc_9.destroyNestedViews();
        this._vc_41.destroyNestedViews();
        this._vc_43.destroyNestedViews();
        this._vc_45.destroyNestedViews();
        this._vc_47.destroyNestedViews();
        this._vc_49.destroyNestedViews();
        this._vc_51.destroyNestedViews();
        this._vc_53.destroyNestedViews();
        this.compView_12.destroy();
        this._PopoverContent_12_3.ngOnDestroy();
    };
    View_TopFiveUserComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 12) && (ngContentIndex == 0))) {
            cb(this._text_13, ctx);
            cb(this._el_14, ctx);
            cb(this._text_57, ctx);
        }
    };
    View_TopFiveUserComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_TopFiveUserComponent1(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 41)) {
            return new View_TopFiveUserComponent4(this.viewUtils, this, 41, this._anchor_41, this._vc_41);
        }
        if ((nodeIndex == 43)) {
            return new View_TopFiveUserComponent5(this.viewUtils, this, 43, this._anchor_43, this._vc_43);
        }
        if ((nodeIndex == 45)) {
            return new View_TopFiveUserComponent6(this.viewUtils, this, 45, this._anchor_45, this._vc_45);
        }
        if ((nodeIndex == 47)) {
            return new View_TopFiveUserComponent7(this.viewUtils, this, 47, this._anchor_47, this._vc_47);
        }
        if ((nodeIndex == 49)) {
            return new View_TopFiveUserComponent8(this.viewUtils, this, 49, this._anchor_49, this._vc_49);
        }
        if ((nodeIndex == 51)) {
            return new View_TopFiveUserComponent9(this.viewUtils, this, 51, this._anchor_51, this._vc_51);
        }
        if ((nodeIndex == 53)) {
            return new View_TopFiveUserComponent10(this.viewUtils, this, 53, this._anchor_53, this._vc_53);
        }
        return null;
    };
    return View_TopFiveUserComponent0;
}(import1.AppView));
export { View_TopFiveUserComponent0 };
var View_TopFiveUserComponent1 = (function (_super) {
    __extends(View_TopFiveUserComponent1, _super);
    function View_TopFiveUserComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TopFiveUserComponent1, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TopFiveUserComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'user-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import13.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import18.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import22.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import23.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'top-user-info'), null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Ver más', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    };
    View_TopFiveUserComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import24.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_TopFiveUserComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.topFiveUsers;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_TopFiveUserComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_TopFiveUserComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TopFiveUserComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_TopFiveUserComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    View_TopFiveUserComponent1.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.goToAllUser() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TopFiveUserComponent1;
}(import1.AppView));
var View_TopFiveUserComponent2 = (function (_super) {
    __extends(View_TopFiveUserComponent2, _super);
    function View_TopFiveUserComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent2, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_22 = import17.UNINITIALIZED;
        _this._expr_23 = import17.UNINITIALIZED;
        _this._expr_24 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'class', 'user-image img-circle'), null);
        this._vc_2 = new import13.ViewContainer(2, 0, this, this._el_2);
        this._Popover_2_5 = new import25.Wrapper_Popover(this._vc_2.vcRef, this.parentView.parentView.parentView.injectorGet(import26.ComponentFactoryResolver, this.parentView.parentView.parentIndex));
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'top-user-info'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray4(4, 'data-toggle', 'dropdown', 'for', 'contain'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_9 = new import13.ViewContainer(9, 4, this, this._anchor_9);
        this._TemplateRef_9_5 = new import18.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import14.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'clearfix'), null);
        this._text_16 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray16(12, 'mouseover', null, 'click', null, 'focusin', null, 'mouseenter', null, 'focusout', null, 'mouseleave', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
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
            this._anchor_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_TopFiveUserComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.Popover) && (2 === requestNodeIndex))) {
            return this._Popover_2_5.context;
        }
        if (((token === import18.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import20.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        return notFoundResult;
    };
    View_TopFiveUserComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView._PopoverContent_12_3.context;
        this._Popover_2_5.check_content(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = true;
        this._Popover_2_5.check_popoverOnHover(currVal_2_0_1, throwOnChange, false);
        var currVal_2_0_2 = true;
        this._Popover_2_5.check_popoverCloseOnClickOutside(currVal_2_0_2, throwOnChange, false);
        this._Popover_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_9_0_0 = this.context.$implicit.occupation;
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        var currVal_22 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.imageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL, currVal_22));
            this._expr_22 = currVal_22;
        }
        var currVal_23 = import3.inlineInterpolate(1, ' ', ((this.context.$implicit == null) ? null : this.context.$implicit.name), '');
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_7, currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = import3.inlineInterpolate(1, '', this.context.$implicit.profileViewCount, ' visitas');
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_12, currVal_24);
            this._expr_24 = currVal_24;
        }
    };
    View_TopFiveUserComponent2.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._Popover_2_5.ngOnDestroy();
    };
    View_TopFiveUserComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TopFiveUserComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_TopFiveUserComponent3(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        return null;
    };
    View_TopFiveUserComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._Popover_2_5.handleEvent(eventName, $event) && result);
        if ((eventName == 'mouseover')) {
            var pd_sub_0 = (this.parentView.parentView.context.userover(((this.context.$implicit == null) ? null : this.context.$implicit.id)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TopFiveUserComponent2.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.gotoProfile(((this.context.$implicit == null) ? null : this.context.$implicit.userId)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TopFiveUserComponent2;
}(import1.AppView));
var View_TopFiveUserComponent3 = (function (_super) {
    __extends(View_TopFiveUserComponent3, _super);
    function View_TopFiveUserComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent3, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_TopFiveUserComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '  ', this.parentView.context.$implicit.occupation, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_TopFiveUserComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent3;
}(import1.AppView));
var View_TopFiveUserComponent4 = (function (_super) {
    __extends(View_TopFiveUserComponent4, _super);
    function View_TopFiveUserComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent4, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-question'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
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
    View_TopFiveUserComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '\n                    Preguntas:', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.questionCount), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_4, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_TopFiveUserComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent4;
}(import1.AppView));
var View_TopFiveUserComponent5 = (function (_super) {
    __extends(View_TopFiveUserComponent5, _super);
    function View_TopFiveUserComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent5, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent5.prototype.createInternal = function (rootSelector) {
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
    View_TopFiveUserComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, ' Respuestas:', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.answerCount), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_TopFiveUserComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent5;
}(import1.AppView));
var View_TopFiveUserComponent6 = (function (_super) {
    __extends(View_TopFiveUserComponent6, _super);
    function View_TopFiveUserComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent6, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent6.prototype.createInternal = function (rootSelector) {
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
    View_TopFiveUserComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, '\n                    Educación: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.education), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_TopFiveUserComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent6;
}(import1.AppView));
var View_TopFiveUserComponent7 = (function (_super) {
    __extends(View_TopFiveUserComponent7, _super);
    function View_TopFiveUserComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent7, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent7.prototype.createInternal = function (rootSelector) {
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
    View_TopFiveUserComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, ' Labor:', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.employment), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_TopFiveUserComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent7;
}(import1.AppView));
var View_TopFiveUserComponent8 = (function (_super) {
    __extends(View_TopFiveUserComponent8, _super);
    function View_TopFiveUserComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent8, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent8.prototype.createInternal = function (rootSelector) {
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
    View_TopFiveUserComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, '\n                    Lugar:', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.place), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_TopFiveUserComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent8;
}(import1.AppView));
var View_TopFiveUserComponent9 = (function (_super) {
    __extends(View_TopFiveUserComponent9, _super);
    function View_TopFiveUserComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent9, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent9.prototype.createInternal = function (rootSelector) {
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
    View_TopFiveUserComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, 'Otros:', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.otherExperience), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_TopFiveUserComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent9;
}(import1.AppView));
var View_TopFiveUserComponent10 = (function (_super) {
    __extends(View_TopFiveUserComponent10, _super);
    function View_TopFiveUserComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TopFiveUserComponent10, renderType_TopFiveUserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import17.UNINITIALIZED;
        return _this;
    }
    View_TopFiveUserComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa-li fa fa-eye'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                    ', null);
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
    View_TopFiveUserComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, 'Veces leído: ', ((this.parentView.context.userInfoDetails == null) ? null : this.parentView.context.userInfoDetails.questionViewCount), '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_4, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_TopFiveUserComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TopFiveUserComponent10;
}(import1.AppView));
