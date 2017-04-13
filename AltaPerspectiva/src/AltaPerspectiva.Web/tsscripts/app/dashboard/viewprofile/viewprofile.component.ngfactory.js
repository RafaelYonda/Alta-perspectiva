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
import * as import0 from './viewprofile.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/profile.service';
import * as import6 from '../../services/config.service';
import * as import7 from '../../services/authentication.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../shared/nav-bar/nav-bar.component';
import * as import17 from '../../shared/nav-bar/nav-bar.component.ngfactory';
import * as import18 from '@angular/core/src/linker/view_container';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import21 from '../../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import22 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import23 from './profile-category/profile-category.component';
import * as import24 from './profile-category/profile-category.component.ngfactory';
import * as import25 from './profile-stat/profile-stat.component';
import * as import26 from './profile-stat/profile-stat.component.ngfactory';
import * as import27 from '@angular/core/src/change_detection/change_detection_util';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/common/src/location/location_strategy';
import * as import30 from '@angular/core/src/linker/element_ref';
import * as import31 from '@angular/router/src/router_outlet_map';
import * as import32 from '@angular/common/src/directives/ng_if';
import * as import33 from '@angular/router/src/directives/router_link';
import * as import34 from '@angular/router/src/directives/router_link_active';
import * as import35 from '@angular/router/src/directives/router_outlet';
import * as import36 from './profile-info/profile-info.component';
import * as import37 from '../../services/image-upload.service';
import * as import38 from './profile-info/profile-info.component.ngfactory';
import * as import39 from 'ng2-toastr/src/toast-manager';
import * as import40 from '@angular/core/src/security';
var Wrapper_ViewProfileComponent = (function () {
    function Wrapper_ViewProfileComponent(p0, p1, p2, p3, p4, p5) {
        this._changed = false;
        this.context = new import0.ViewProfileComponent(p0, p1, p2, p3, p4, p5);
    }
    Wrapper_ViewProfileComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ViewProfileComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ViewProfileComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ViewProfileComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ViewProfileComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ViewProfileComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ViewProfileComponent;
}());
export { Wrapper_ViewProfileComponent };
var renderType_ViewProfileComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ViewProfileComponent_Host0 = (function (_super) {
    __extends(View_ViewProfileComponent_Host0, _super);
    function View_ViewProfileComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ViewProfileComponent_Host0, renderType_ViewProfileComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ViewProfileComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ViewProfileComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import11.Http, this.parentIndex));
        this._ConfigService_0_4 = new import6.ConfigService(this.injectorGet(import11.Http, this.parentIndex));
        this._AuthenticationService_0_5 = new import7.AuthenticationService(this.injectorGet(import11.Http, this.parentIndex));
        this._ViewProfileComponent_0_6 = new Wrapper_ViewProfileComponent(this._ProfileService_0_3, this.injectorGet(import12.ActivatedRoute, this.parentIndex), this._ConfigService_0_4, this.injectorGet(import13.Router, this.parentIndex), this.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), this._AuthenticationService_0_5);
        this.compView_0.create(this._ViewProfileComponent_0_6.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._ViewProfileComponent_0_6.context);
    };
    View_ViewProfileComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import6.ConfigService) && (0 === requestNodeIndex))) {
            return this._ConfigService_0_4;
        }
        if (((token === import7.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_5;
        }
        if (((token === import0.ViewProfileComponent) && (0 === requestNodeIndex))) {
            return this._ViewProfileComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ViewProfileComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ViewProfileComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ViewProfileComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ViewProfileComponent_Host0;
}(import1.AppView));
export var ViewProfileComponentNgFactory = new import10.ComponentFactory('ng-component', View_ViewProfileComponent_Host0, import0.ViewProfileComponent);
var styles_ViewProfileComponent = ['.edit[_ngcontent-%COMP%] {\n        \n        font-size: 13px;\n    }\n\n        .edit[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n            visibility: visible;\n            color: #f6912b;\n        }\n\n    .fa-li[_ngcontent-%COMP%] {\n        position: static;\n    }\n\n    .top-spacing[_ngcontent-%COMP%] {\n        margin-top: 20px;\n    }\n\n    .credential-panel[_ngcontent-%COMP%] {\n        list-style: none;\n    }\n\n        .credential-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n            margin-bottom: 5px;\n            font-size:11px;\n        }\n\n    .row-overflow[_ngcontent-%COMP%] {\n        overflow: visible;\n    }\n\n    #employment-edit[_ngcontent-%COMP%]{\n        display:none;\n    }\n    #employment[_ngcontent-%COMP%]:hover   #employment-edit[_ngcontent-%COMP%]{\n        display:inline-block;\n    }\n    .show-edit[_ngcontent-%COMP%]{\n        display:none;\n    }\n    .show[_ngcontent-%COMP%]:hover   .show-edit[_ngcontent-%COMP%]{\n        display:inline-block;\n    }'];
var renderType_ViewProfileComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ViewProfileComponent, {});
var View_ViewProfileComponent0 = (function (_super) {
    __extends(View_ViewProfileComponent0, _super);
    function View_ViewProfileComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ViewProfileComponent0, renderType_ViewProfileComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
        _this._arr_264 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_265 = import27.UNINITIALIZED;
        _this._arr_266 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_267 = import27.UNINITIALIZED;
        _this._arr_268 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_269 = import27.UNINITIALIZED;
        _this._arr_270 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_271 = import27.UNINITIALIZED;
        _this._arr_272 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_273 = import27.UNINITIALIZED;
        _this._arr_274 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._expr_275 = import27.UNINITIALIZED;
        _this._arr_276 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._arr_277 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        return _this;
    }
    View_ViewProfileComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_educationDialogAnchor_0 = new import15.QueryList();
        this._viewQuery_employmentDialogAnchor_1 = new import15.QueryList();
        this._viewQuery_otherexperienceDialogAnchor_2 = new import15.QueryList();
        this._viewQuery_placeDialogAnchor_3 = new import15.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav-bar', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import17.View_NavBarComponent0(this.viewUtils, this, 2, this._el_2);
        this._AuthenticationService_2_3 = new import7.AuthenticationService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._NavBarComponent_2_4 = new import17.Wrapper_NavBarComponent(this._AuthenticationService_2_3, this.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import13.Router, this.parentIndex));
        this.compView_2.create(this._NavBarComponent_2_4.context);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_6 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_7 = new import18.ViewContainer(7, 4, this, this._el_7);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_9 = new import18.ViewContainer(9, 4, this, this._el_9);
        this._text_10 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_11 = new import18.ViewContainer(11, 4, this, this._el_11);
        this._text_12 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_13 = new import18.ViewContainer(13, 4, this, this._el_13);
        this._text_14 = this.renderer.createText(this._el_4, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row profile-xs'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n\n    ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_18 = new import18.ViewContainer(18, 16, this, this._anchor_18);
        this._TemplateRef_18_5 = new import28.TemplateRef_(this, 18, this._anchor_18);
        this._NgIf_18_6 = new import19.Wrapper_NgIf(this._vc_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n        ', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._vc_22 = new import18.ViewContainer(22, 20, this, this._anchor_22);
        this._TemplateRef_22_5 = new import28.TemplateRef_(this, 22, this._anchor_22);
        this._NgIf_22_6 = new import19.Wrapper_NgIf(this._vc_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_20, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_20, 'div', new import3.InlineArray2(2, 'class', 'row row-overflow'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray4(4, 'class', 'col-md-3 category-panel-xs', 'id', 'toggleMenu'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'div', new import3.InlineArray2(2, 'class', 'menu-container visible-xs'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                    ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'cloe-button'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_30, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_33 = this.renderer.createText(this._el_32, ' ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_32, 'i', new import3.InlineArray2(2, 'class', 'fa fa-arrow-left'), null);
        this._text_35 = this.renderer.createText(this._el_32, ' ', null);
        this._text_36 = this.renderer.createText(this._el_30, '\n                    ', null);
        this._text_37 = this.renderer.createText(this._el_28, '\n                    ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_28, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n                        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'li', new import3.InlineArray2(2, 'class', ''), null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_40, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_41_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._text_42 = this.renderer.createText(this._el_41, 'Alta Perspectiva', null);
        this._text_43 = this.renderer.createText(this._el_38, '\n                        ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_38, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_44, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_45_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._text_46 = this.renderer.createText(this._el_45, 'Preguntas', null);
        this._text_47 = this.renderer.createText(this._el_38, '\n                        ', null);
        this._anchor_48 = this.renderer.createTemplateAnchor(this._el_38, null);
        this._vc_48 = new import18.ViewContainer(48, 38, this, this._anchor_48);
        this._TemplateRef_48_5 = new import28.TemplateRef_(this, 48, this._anchor_48);
        this._NgIf_48_6 = new import19.Wrapper_NgIf(this._vc_48.vcRef, this._TemplateRef_48_5);
        this._text_49 = this.renderer.createText(this._el_38, '\n                        ', null);
        this._anchor_50 = this.renderer.createTemplateAnchor(this._el_38, null);
        this._vc_50 = new import18.ViewContainer(50, 38, this, this._anchor_50);
        this._TemplateRef_50_5 = new import28.TemplateRef_(this, 50, this._anchor_50);
        this._NgIf_50_6 = new import19.Wrapper_NgIf(this._vc_50.vcRef, this._TemplateRef_50_5);
        this._text_51 = this.renderer.createText(this._el_38, '\n                        ', null);
        this._anchor_52 = this.renderer.createTemplateAnchor(this._el_38, null);
        this._vc_52 = new import18.ViewContainer(52, 38, this, this._anchor_52);
        this._TemplateRef_52_5 = new import28.TemplateRef_(this, 52, this._anchor_52);
        this._NgIf_52_6 = new import19.Wrapper_NgIf(this._vc_52.vcRef, this._TemplateRef_52_5);
        this._text_53 = this.renderer.createText(this._el_38, '\n                    ', null);
        this._text_54 = this.renderer.createText(this._el_28, '\n                ', null);
        this._text_55 = this.renderer.createText(this._el_26, '\n                ', null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_26, 'ul', new import3.InlineArray4(4, 'class', 'profile-leftmenu', 'id', 'profile-route'), null);
        this._text_57 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_58 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_58, 'a', new import3.InlineArray4(4, 'class', 'route link-with-number', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_59_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_59_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_59), this.renderer);
        this._query_RouterLink_59_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_59_1 = new import15.QueryList();
        this._text_60 = this.renderer.createText(this._el_59, 'Respuestas', null);
        this._el_61 = import3.createRenderElement(this.renderer, this._el_59, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_62 = this.renderer.createText(this._el_61, '', null);
        this._text_63 = this.renderer.createText(this._el_59, ' ', null);
        this._text_64 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_65 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_66 = import3.createRenderElement(this.renderer, this._el_65, 'a', new import3.InlineArray8(8, 'class', 'route link-with-number', 'id', 'question-route', 'routerLinkActive', 'active-link', 'tabindex', '0'), null);
        this._RouterLinkWithHref_66_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_66_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_66), this.renderer);
        this._query_RouterLink_66_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_66_1 = new import15.QueryList();
        this._text_67 = this.renderer.createText(this._el_66, 'Preguntas', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_66, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_69 = this.renderer.createText(this._el_68, '', null);
        this._text_70 = this.renderer.createText(this._el_66, ' ', null);
        this._text_71 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_72 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_73 = import3.createRenderElement(this.renderer, this._el_72, 'a', new import3.InlineArray4(4, 'class', 'route link-with-number', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_73_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_73_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_73), this.renderer);
        this._query_RouterLink_73_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_73_1 = new import15.QueryList();
        this._text_74 = this.renderer.createText(this._el_73, 'Seguidores', null);
        this._text_75 = this.renderer.createText(this._el_73, ' ', null);
        this._el_76 = import3.createRenderElement(this.renderer, this._el_73, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_77 = this.renderer.createText(this._el_76, '', null);
        this._text_78 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_79 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_80 = import3.createRenderElement(this.renderer, this._el_79, 'a', new import3.InlineArray4(4, 'class', 'route link-with-number', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_80_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_80_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_80), this.renderer);
        this._query_RouterLink_80_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_80_1 = new import15.QueryList();
        this._text_81 = this.renderer.createText(this._el_80, 'Siguiendo ', null);
        this._el_82 = import3.createRenderElement(this.renderer, this._el_80, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_83 = this.renderer.createText(this._el_82, '', null);
        this._text_84 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_85 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_86 = import3.createRenderElement(this.renderer, this._el_85, 'a', new import3.InlineArray4(4, 'class', 'route', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_86_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_86_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_86), this.renderer);
        this._query_RouterLink_86_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_86_1 = new import15.QueryList();
        this._text_87 = this.renderer.createText(this._el_86, 'Guardadas ', null);
        this._el_88 = import3.createRenderElement(this.renderer, this._el_86, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_89 = this.renderer.createText(this._el_88, '', null);
        this._text_90 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._text_91 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._anchor_92 = this.renderer.createTemplateAnchor(this._el_56, null);
        this._vc_92 = new import18.ViewContainer(92, 56, this, this._anchor_92);
        this._TemplateRef_92_5 = new import28.TemplateRef_(this, 92, this._anchor_92);
        this._NgIf_92_6 = new import19.Wrapper_NgIf(this._vc_92.vcRef, this._TemplateRef_92_5);
        this._text_93 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_94 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_95 = import3.createRenderElement(this.renderer, this._el_94, 'a', new import3.InlineArray4(4, 'class', 'route', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_95_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_95_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_95), this.renderer);
        this._query_RouterLink_95_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_95_1 = new import15.QueryList();
        this._text_96 = this.renderer.createText(this._el_95, 'Blogs', null);
        this._el_97 = import3.createRenderElement(this.renderer, this._el_95, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_98 = this.renderer.createText(this._el_97, '', null);
        this._text_99 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_100 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_101 = import3.createRenderElement(this.renderer, this._el_100, 'a', new import3.InlineArray4(4, 'class', 'route', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_101_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_101_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_101), this.renderer);
        this._query_RouterLink_101_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_101_1 = new import15.QueryList();
        this._text_102 = this.renderer.createText(this._el_101, 'Pregúntame', null);
        this._text_103 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_104 = import3.createRenderElement(this.renderer, this._el_56, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_105 = import3.createRenderElement(this.renderer, this._el_104, 'a', new import3.InlineArray4(4, 'class', 'route', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_105_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_105_4 = new import21.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router, this.parentIndex), new import30.ElementRef(this._el_105), this.renderer);
        this._query_RouterLink_105_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_105_1 = new import15.QueryList();
        this._text_106 = this.renderer.createText(this._el_105, 'Mis servicios', null);
        this._text_107 = this.renderer.createText(this._el_56, '\n                ', null);
        this._text_108 = this.renderer.createText(this._el_26, '\n            ', null);
        this._text_109 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_110 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'col-md-9 border-top-grey'), null);
        this._text_111 = this.renderer.createText(this._el_110, '\n                ', null);
        this._el_112 = import3.createRenderElement(this.renderer, this._el_110, 'div', new import3.InlineArray4(4, 'id', 'profile-info', 'style', 'margin-top: -1px;'), null);
        this._text_113 = this.renderer.createText(this._el_112, '\n                    ', null);
        this._text_114 = this.renderer.createText(this._el_112, '\n                    ', null);
        this._el_115 = import3.createRenderElement(this.renderer, this._el_112, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_115 = new import18.ViewContainer(115, 112, this, this._el_115);
        this._RouterOutlet_115_5 = new import22.Wrapper_RouterOutlet(this.parentView.injectorGet(import31.RouterOutletMap, this.parentIndex), this._vc_115.vcRef, this.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), null);
        this._text_116 = this.renderer.createText(this._el_112, '\n                ', null);
        this._text_117 = this.renderer.createText(this._el_110, '\n                ', null);
        this._text_118 = this.renderer.createText(this._el_110, '\n                ', null);
        this._el_119 = import3.createRenderElement(this.renderer, this._el_110, 'div', new import3.InlineArray4(4, 'class', 'hidden-xs', 'style', 'height:200px;position:relative;'), null);
        this._text_120 = this.renderer.createText(this._el_110, '\n            ', null);
        this._text_121 = this.renderer.createText(this._el_24, '\n        ', null);
        this._text_122 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_123 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_124 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'col-md-3 top-spacing'), null);
        this._text_125 = this.renderer.createText(this._el_124, '\n        ', null);
        this._el_126 = import3.createRenderElement(this.renderer, this._el_124, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_127 = this.renderer.createText(this._el_126, '\n            ', null);
        this._el_128 = import3.createRenderElement(this.renderer, this._el_126, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_129 = this.renderer.createText(this._el_128, '\n                ', null);
        this._text_130 = this.renderer.createText(this._el_128, 'Información personal\n            ', null);
        this._text_131 = this.renderer.createText(this._el_126, '\n            ', null);
        this._el_132 = import3.createRenderElement(this.renderer, this._el_126, 'ul', new import3.InlineArray2(2, 'class', 'credential-panel'), null);
        this._text_133 = this.renderer.createText(this._el_132, '\n                ', null);
        this._el_134 = import3.createRenderElement(this.renderer, this._el_132, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_135 = this.renderer.createText(this._el_134, '\n                    ', null);
        this._anchor_136 = this.renderer.createTemplateAnchor(this._el_134, null);
        this._vc_136 = new import18.ViewContainer(136, 134, this, this._anchor_136);
        this._TemplateRef_136_5 = new import28.TemplateRef_(this, 136, this._anchor_136);
        this._NgIf_136_6 = new import19.Wrapper_NgIf(this._vc_136.vcRef, this._TemplateRef_136_5);
        this._text_137 = this.renderer.createText(this._el_134, '\n                    ', null);
        this._anchor_138 = this.renderer.createTemplateAnchor(this._el_134, null);
        this._vc_138 = new import18.ViewContainer(138, 134, this, this._anchor_138);
        this._TemplateRef_138_5 = new import28.TemplateRef_(this, 138, this._anchor_138);
        this._NgIf_138_6 = new import19.Wrapper_NgIf(this._vc_138.vcRef, this._TemplateRef_138_5);
        this._text_139 = this.renderer.createText(this._el_134, '\n                ', null);
        this._text_140 = this.renderer.createText(this._el_132, '\n                ', null);
        this._el_141 = import3.createRenderElement(this.renderer, this._el_132, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_142 = this.renderer.createText(this._el_141, '\n                    ', null);
        this._anchor_143 = this.renderer.createTemplateAnchor(this._el_141, null);
        this._vc_143 = new import18.ViewContainer(143, 141, this, this._anchor_143);
        this._TemplateRef_143_5 = new import28.TemplateRef_(this, 143, this._anchor_143);
        this._NgIf_143_6 = new import19.Wrapper_NgIf(this._vc_143.vcRef, this._TemplateRef_143_5);
        this._text_144 = this.renderer.createText(this._el_141, '\n                    ', null);
        this._anchor_145 = this.renderer.createTemplateAnchor(this._el_141, null);
        this._vc_145 = new import18.ViewContainer(145, 141, this, this._anchor_145);
        this._TemplateRef_145_5 = new import28.TemplateRef_(this, 145, this._anchor_145);
        this._NgIf_145_6 = new import19.Wrapper_NgIf(this._vc_145.vcRef, this._TemplateRef_145_5);
        this._text_146 = this.renderer.createText(this._el_141, '\n                ', null);
        this._text_147 = this.renderer.createText(this._el_132, '\n                ', null);
        this._el_148 = import3.createRenderElement(this.renderer, this._el_132, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_149 = this.renderer.createText(this._el_148, '\n                    ', null);
        this._anchor_150 = this.renderer.createTemplateAnchor(this._el_148, null);
        this._vc_150 = new import18.ViewContainer(150, 148, this, this._anchor_150);
        this._TemplateRef_150_5 = new import28.TemplateRef_(this, 150, this._anchor_150);
        this._NgIf_150_6 = new import19.Wrapper_NgIf(this._vc_150.vcRef, this._TemplateRef_150_5);
        this._text_151 = this.renderer.createText(this._el_148, '\n                    ', null);
        this._anchor_152 = this.renderer.createTemplateAnchor(this._el_148, null);
        this._vc_152 = new import18.ViewContainer(152, 148, this, this._anchor_152);
        this._TemplateRef_152_5 = new import28.TemplateRef_(this, 152, this._anchor_152);
        this._NgIf_152_6 = new import19.Wrapper_NgIf(this._vc_152.vcRef, this._TemplateRef_152_5);
        this._text_153 = this.renderer.createText(this._el_148, '\n                ', null);
        this._text_154 = this.renderer.createText(this._el_132, '\n                ', null);
        this._el_155 = import3.createRenderElement(this.renderer, this._el_132, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_156 = this.renderer.createText(this._el_155, '\n                    ', null);
        this._anchor_157 = this.renderer.createTemplateAnchor(this._el_155, null);
        this._vc_157 = new import18.ViewContainer(157, 155, this, this._anchor_157);
        this._TemplateRef_157_5 = new import28.TemplateRef_(this, 157, this._anchor_157);
        this._NgIf_157_6 = new import19.Wrapper_NgIf(this._vc_157.vcRef, this._TemplateRef_157_5);
        this._text_158 = this.renderer.createText(this._el_155, '\n                    ', null);
        this._anchor_159 = this.renderer.createTemplateAnchor(this._el_155, null);
        this._vc_159 = new import18.ViewContainer(159, 155, this, this._anchor_159);
        this._TemplateRef_159_5 = new import28.TemplateRef_(this, 159, this._anchor_159);
        this._NgIf_159_6 = new import19.Wrapper_NgIf(this._vc_159.vcRef, this._TemplateRef_159_5);
        this._text_160 = this.renderer.createText(this._el_155, '\n                ', null);
        this._text_161 = this.renderer.createText(this._el_132, '\n            ', null);
        this._text_162 = this.renderer.createText(this._el_126, '\n        ', null);
        this._text_163 = this.renderer.createText(this._el_124, '\n        ', null);
        this._el_164 = import3.createRenderElement(this.renderer, this._el_124, 'div', new import3.InlineArray2(2, 'id', 'other-credentials'), null);
        this._text_165 = this.renderer.createText(this._el_124, '\n        ', null);
        this._el_166 = import3.createRenderElement(this.renderer, this._el_124, 'profile-category', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_166 = new import24.View_ProfileCategoryComponent0(this.viewUtils, this, 166, this._el_166);
        this._ProfileCategoryComponent_166_3 = new import24.Wrapper_ProfileCategoryComponent();
        this.compView_166.create(this._ProfileCategoryComponent_166_3.context);
        this._text_167 = this.renderer.createText(this._el_124, '\n        ', null);
        this._el_168 = import3.createRenderElement(this.renderer, this._el_124, 'profile-stat', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_168 = new import26.View_ProfileStatComponent0(this.viewUtils, this, 168, this._el_168);
        this._ProfileStatComponent_168_3 = new import26.Wrapper_ProfileStatComponent();
        this.compView_168.create(this._ProfileStatComponent_168_3.context);
        this._text_169 = this.renderer.createText(this._el_124, '\n    ', null);
        this._text_170 = this.renderer.createText(this._el_16, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_32, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_32));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_41));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_45, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_45));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_59, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_59));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_66, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_66));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_73, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_73));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_80, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_80));
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_86, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_86));
        var disposable_8 = import3.subscribeToRenderElement(this, this._el_95, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_95));
        var disposable_9 = import3.subscribeToRenderElement(this, this._el_101, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_101));
        var disposable_10 = import3.subscribeToRenderElement(this, this._el_105, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_105));
        this._viewQuery_educationDialogAnchor_0.reset([this._vc_9.vcRef]);
        this.context.educationDialogAnchor = this._viewQuery_educationDialogAnchor_0.first;
        this._viewQuery_employmentDialogAnchor_1.reset([this._vc_7.vcRef]);
        this.context.employmentDialogAnchor = this._viewQuery_employmentDialogAnchor_1.first;
        this._viewQuery_otherexperienceDialogAnchor_2.reset([this._vc_11.vcRef]);
        this.context.otherexperienceDialogAnchor = this._viewQuery_otherexperienceDialogAnchor_2.first;
        this._viewQuery_placeDialogAnchor_3.reset([this._vc_13.vcRef]);
        this.context.placeDialogAnchor = this._viewQuery_placeDialogAnchor_3.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._anchor_48,
            this._text_49,
            this._anchor_50,
            this._text_51,
            this._anchor_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._el_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._el_73,
            this._text_74,
            this._text_75,
            this._el_76,
            this._text_77,
            this._text_78,
            this._el_79,
            this._el_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._text_84,
            this._el_85,
            this._el_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._text_90,
            this._text_91,
            this._anchor_92,
            this._text_93,
            this._el_94,
            this._el_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._text_99,
            this._el_100,
            this._el_101,
            this._text_102,
            this._text_103,
            this._el_104,
            this._el_105,
            this._text_106,
            this._text_107,
            this._text_108,
            this._text_109,
            this._el_110,
            this._text_111,
            this._el_112,
            this._text_113,
            this._text_114,
            this._el_115,
            this._text_116,
            this._text_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._text_121,
            this._text_122,
            this._text_123,
            this._el_124,
            this._text_125,
            this._el_126,
            this._text_127,
            this._el_128,
            this._text_129,
            this._text_130,
            this._text_131,
            this._el_132,
            this._text_133,
            this._el_134,
            this._text_135,
            this._anchor_136,
            this._text_137,
            this._anchor_138,
            this._text_139,
            this._text_140,
            this._el_141,
            this._text_142,
            this._anchor_143,
            this._text_144,
            this._anchor_145,
            this._text_146,
            this._text_147,
            this._el_148,
            this._text_149,
            this._anchor_150,
            this._text_151,
            this._anchor_152,
            this._text_153,
            this._text_154,
            this._el_155,
            this._text_156,
            this._anchor_157,
            this._text_158,
            this._anchor_159,
            this._text_160,
            this._text_161,
            this._text_162,
            this._text_163,
            this._el_164,
            this._text_165,
            this._el_166,
            this._text_167,
            this._el_168,
            this._text_169,
            this._text_170
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10
        ]);
        return null;
    };
    View_ViewProfileComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import7.AuthenticationService) && (2 === requestNodeIndex))) {
            return this._AuthenticationService_2_3;
        }
        if (((token === import16.NavBarComponent) && (2 === requestNodeIndex))) {
            return this._NavBarComponent_2_4.context;
        }
        if (((token === import28.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import32.NgIf) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6.context;
        }
        if (((token === import28.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import32.NgIf) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._RouterLinkWithHref_41_3.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._RouterLinkWithHref_45_3.context;
        }
        if (((token === import28.TemplateRef) && (48 === requestNodeIndex))) {
            return this._TemplateRef_48_5;
        }
        if (((token === import32.NgIf) && (48 === requestNodeIndex))) {
            return this._NgIf_48_6.context;
        }
        if (((token === import28.TemplateRef) && (50 === requestNodeIndex))) {
            return this._TemplateRef_50_5;
        }
        if (((token === import32.NgIf) && (50 === requestNodeIndex))) {
            return this._NgIf_50_6.context;
        }
        if (((token === import28.TemplateRef) && (52 === requestNodeIndex))) {
            return this._TemplateRef_52_5;
        }
        if (((token === import32.NgIf) && (52 === requestNodeIndex))) {
            return this._NgIf_52_6.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._RouterLinkWithHref_59_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._RouterLinkActive_59_4.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._RouterLinkWithHref_66_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._RouterLinkActive_66_4.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 77)))) {
            return this._RouterLinkWithHref_73_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 77)))) {
            return this._RouterLinkActive_73_4.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._RouterLinkWithHref_80_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._RouterLinkActive_80_4.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._RouterLinkWithHref_86_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._RouterLinkActive_86_4.context;
        }
        if (((token === import28.TemplateRef) && (92 === requestNodeIndex))) {
            return this._TemplateRef_92_5;
        }
        if (((token === import32.NgIf) && (92 === requestNodeIndex))) {
            return this._NgIf_92_6.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._RouterLinkWithHref_95_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._RouterLinkActive_95_4.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((101 <= requestNodeIndex) && (requestNodeIndex <= 102)))) {
            return this._RouterLinkWithHref_101_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((101 <= requestNodeIndex) && (requestNodeIndex <= 102)))) {
            return this._RouterLinkActive_101_4.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((105 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._RouterLinkWithHref_105_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((105 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._RouterLinkActive_105_4.context;
        }
        if (((token === import35.RouterOutlet) && (115 === requestNodeIndex))) {
            return this._RouterOutlet_115_5.context;
        }
        if (((token === import28.TemplateRef) && (136 === requestNodeIndex))) {
            return this._TemplateRef_136_5;
        }
        if (((token === import32.NgIf) && (136 === requestNodeIndex))) {
            return this._NgIf_136_6.context;
        }
        if (((token === import28.TemplateRef) && (138 === requestNodeIndex))) {
            return this._TemplateRef_138_5;
        }
        if (((token === import32.NgIf) && (138 === requestNodeIndex))) {
            return this._NgIf_138_6.context;
        }
        if (((token === import28.TemplateRef) && (143 === requestNodeIndex))) {
            return this._TemplateRef_143_5;
        }
        if (((token === import32.NgIf) && (143 === requestNodeIndex))) {
            return this._NgIf_143_6.context;
        }
        if (((token === import28.TemplateRef) && (145 === requestNodeIndex))) {
            return this._TemplateRef_145_5;
        }
        if (((token === import32.NgIf) && (145 === requestNodeIndex))) {
            return this._NgIf_145_6.context;
        }
        if (((token === import28.TemplateRef) && (150 === requestNodeIndex))) {
            return this._TemplateRef_150_5;
        }
        if (((token === import32.NgIf) && (150 === requestNodeIndex))) {
            return this._NgIf_150_6.context;
        }
        if (((token === import28.TemplateRef) && (152 === requestNodeIndex))) {
            return this._TemplateRef_152_5;
        }
        if (((token === import32.NgIf) && (152 === requestNodeIndex))) {
            return this._NgIf_152_6.context;
        }
        if (((token === import28.TemplateRef) && (157 === requestNodeIndex))) {
            return this._TemplateRef_157_5;
        }
        if (((token === import32.NgIf) && (157 === requestNodeIndex))) {
            return this._NgIf_157_6.context;
        }
        if (((token === import28.TemplateRef) && (159 === requestNodeIndex))) {
            return this._TemplateRef_159_5;
        }
        if (((token === import32.NgIf) && (159 === requestNodeIndex))) {
            return this._NgIf_159_6.context;
        }
        if (((token === import23.ProfileCategoryComponent) && (166 === requestNodeIndex))) {
            return this._ProfileCategoryComponent_166_3.context;
        }
        if (((token === import25.ProfileStatComponent) && (168 === requestNodeIndex))) {
            return this._ProfileStatComponent_168_3.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavBarComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_18_0_0 = (this.context.isOwner && this.context.credential);
        this._NgIf_18_6.check_ngIf(currVal_18_0_0, throwOnChange, false);
        this._NgIf_18_6.ngDoCheck(this, this._anchor_18, throwOnChange);
        var currVal_22_0_0 = this.context.credential;
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.ngDoCheck(this, this._anchor_22, throwOnChange);
        var currVal_41_0_0 = '/';
        this._RouterLinkWithHref_41_3.check_routerLink(currVal_41_0_0, throwOnChange, false);
        this._RouterLinkWithHref_41_3.ngDoCheck(this, this._el_41, throwOnChange);
        var currVal_45_0_0 = '/question/home/1';
        this._RouterLinkWithHref_45_3.check_routerLink(currVal_45_0_0, throwOnChange, false);
        this._RouterLinkWithHref_45_3.ngDoCheck(this, this._el_45, throwOnChange);
        var currVal_48_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_48_6.check_ngIf(currVal_48_0_0, throwOnChange, false);
        this._NgIf_48_6.ngDoCheck(this, this._anchor_48, throwOnChange);
        var currVal_50_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_50_6.check_ngIf(currVal_50_0_0, throwOnChange, false);
        this._NgIf_50_6.ngDoCheck(this, this._anchor_50, throwOnChange);
        var currVal_52_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_52_6.check_ngIf(currVal_52_0_0, throwOnChange, false);
        this._NgIf_52_6.ngDoCheck(this, this._anchor_52, throwOnChange);
        var currVal_59_0_0 = this._arr_264('/dashboard/viewprofile', this.context.credential.userId, 'user-answer');
        this._RouterLinkWithHref_59_3.check_routerLink(currVal_59_0_0, throwOnChange, false);
        this._RouterLinkWithHref_59_3.ngDoCheck(this, this._el_59, throwOnChange);
        var currVal_59_1_0 = 'active-link';
        this._RouterLinkActive_59_4.check_routerLinkActive(currVal_59_1_0, throwOnChange, false);
        this._RouterLinkActive_59_4.ngDoCheck(this, this._el_59, throwOnChange);
        var currVal_66_0_0 = this._arr_266('/dashboard/viewprofile', this.context.credential.userId, 'user-question');
        this._RouterLinkWithHref_66_3.check_routerLink(currVal_66_0_0, throwOnChange, false);
        this._RouterLinkWithHref_66_3.ngDoCheck(this, this._el_66, throwOnChange);
        var currVal_66_1_0 = 'active-link';
        this._RouterLinkActive_66_4.check_routerLinkActive(currVal_66_1_0, throwOnChange, false);
        this._RouterLinkActive_66_4.ngDoCheck(this, this._el_66, throwOnChange);
        var currVal_73_0_0 = this._arr_268('/dashboard/viewprofile', this.context.credential.userId, 'follower');
        this._RouterLinkWithHref_73_3.check_routerLink(currVal_73_0_0, throwOnChange, false);
        this._RouterLinkWithHref_73_3.ngDoCheck(this, this._el_73, throwOnChange);
        var currVal_73_1_0 = 'active-link';
        this._RouterLinkActive_73_4.check_routerLinkActive(currVal_73_1_0, throwOnChange, false);
        this._RouterLinkActive_73_4.ngDoCheck(this, this._el_73, throwOnChange);
        var currVal_80_0_0 = this._arr_270('/dashboard/viewprofile', this.context.credential.userId, 'following');
        this._RouterLinkWithHref_80_3.check_routerLink(currVal_80_0_0, throwOnChange, false);
        this._RouterLinkWithHref_80_3.ngDoCheck(this, this._el_80, throwOnChange);
        var currVal_80_1_0 = 'active-link';
        this._RouterLinkActive_80_4.check_routerLinkActive(currVal_80_1_0, throwOnChange, false);
        this._RouterLinkActive_80_4.ngDoCheck(this, this._el_80, throwOnChange);
        var currVal_86_0_0 = this._arr_272('/dashboard/viewprofile', this.context.credential.userId, 'bookmark');
        this._RouterLinkWithHref_86_3.check_routerLink(currVal_86_0_0, throwOnChange, false);
        this._RouterLinkWithHref_86_3.ngDoCheck(this, this._el_86, throwOnChange);
        var currVal_86_1_0 = 'active-link';
        this._RouterLinkActive_86_4.check_routerLinkActive(currVal_86_1_0, throwOnChange, false);
        this._RouterLinkActive_86_4.ngDoCheck(this, this._el_86, throwOnChange);
        var currVal_92_0_0 = this.context.isOwner;
        this._NgIf_92_6.check_ngIf(currVal_92_0_0, throwOnChange, false);
        this._NgIf_92_6.ngDoCheck(this, this._anchor_92, throwOnChange);
        var currVal_95_0_0 = this._arr_274('/dashboard/viewprofile', this.context.credential.userId, 'blog-create');
        this._RouterLinkWithHref_95_3.check_routerLink(currVal_95_0_0, throwOnChange, false);
        this._RouterLinkWithHref_95_3.ngDoCheck(this, this._el_95, throwOnChange);
        var currVal_95_1_0 = 'active-link';
        this._RouterLinkActive_95_4.check_routerLinkActive(currVal_95_1_0, throwOnChange, false);
        this._RouterLinkActive_95_4.ngDoCheck(this, this._el_95, throwOnChange);
        var currVal_101_0_0 = this._arr_276('/dashboard/viewprofile', this.context.credential.userId, 'direct-question');
        this._RouterLinkWithHref_101_3.check_routerLink(currVal_101_0_0, throwOnChange, false);
        this._RouterLinkWithHref_101_3.ngDoCheck(this, this._el_101, throwOnChange);
        var currVal_101_1_0 = 'active-link';
        this._RouterLinkActive_101_4.check_routerLinkActive(currVal_101_1_0, throwOnChange, false);
        this._RouterLinkActive_101_4.ngDoCheck(this, this._el_101, throwOnChange);
        var currVal_105_0_0 = this._arr_277('/dashboard/viewprofile', this.context.credential.userId, 'virtual-store');
        this._RouterLinkWithHref_105_3.check_routerLink(currVal_105_0_0, throwOnChange, false);
        this._RouterLinkWithHref_105_3.ngDoCheck(this, this._el_105, throwOnChange);
        var currVal_105_1_0 = 'active-link';
        this._RouterLinkActive_105_4.check_routerLinkActive(currVal_105_1_0, throwOnChange, false);
        this._RouterLinkActive_105_4.ngDoCheck(this, this._el_105, throwOnChange);
        this._RouterOutlet_115_5.ngDoCheck(this, this._el_115, throwOnChange);
        var currVal_136_0_0 = this.context.employmentExists;
        this._NgIf_136_6.check_ngIf(currVal_136_0_0, throwOnChange, false);
        this._NgIf_136_6.ngDoCheck(this, this._anchor_136, throwOnChange);
        var currVal_138_0_0 = (!this.context.employmentExists && this.context.isOwner);
        this._NgIf_138_6.check_ngIf(currVal_138_0_0, throwOnChange, false);
        this._NgIf_138_6.ngDoCheck(this, this._anchor_138, throwOnChange);
        var currVal_143_0_0 = this.context.educationExists;
        this._NgIf_143_6.check_ngIf(currVal_143_0_0, throwOnChange, false);
        this._NgIf_143_6.ngDoCheck(this, this._anchor_143, throwOnChange);
        var currVal_145_0_0 = (!this.context.educationExists && this.context.isOwner);
        this._NgIf_145_6.check_ngIf(currVal_145_0_0, throwOnChange, false);
        this._NgIf_145_6.ngDoCheck(this, this._anchor_145, throwOnChange);
        var currVal_150_0_0 = this.context.placeExists;
        this._NgIf_150_6.check_ngIf(currVal_150_0_0, throwOnChange, false);
        this._NgIf_150_6.ngDoCheck(this, this._anchor_150, throwOnChange);
        var currVal_152_0_0 = (!this.context.placeExists && this.context.isOwner);
        this._NgIf_152_6.check_ngIf(currVal_152_0_0, throwOnChange, false);
        this._NgIf_152_6.ngDoCheck(this, this._anchor_152, throwOnChange);
        var currVal_157_0_0 = this.context.otherExperienceExists;
        this._NgIf_157_6.check_ngIf(currVal_157_0_0, throwOnChange, false);
        this._NgIf_157_6.ngDoCheck(this, this._anchor_157, throwOnChange);
        var currVal_159_0_0 = (!this.context.otherExperienceExists && this.context.isOwner);
        this._NgIf_159_6.check_ngIf(currVal_159_0_0, throwOnChange, false);
        this._NgIf_159_6.ngDoCheck(this, this._anchor_159, throwOnChange);
        var currVal_166_0_0 = this.context.categoryWiseAnswers;
        this._ProfileCategoryComponent_166_3.check_categoryWiseAnswers(currVal_166_0_0, throwOnChange, false);
        this._ProfileCategoryComponent_166_3.ngDoCheck(this, this._el_166, throwOnChange);
        var currVal_168_0_0 = this.context.profileParam;
        this._ProfileStatComponent_168_3.check_profileParam(currVal_168_0_0, throwOnChange, false);
        this._ProfileStatComponent_168_3.ngDoCheck(this, this._el_168, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._vc_48.detectChangesInNestedViews(throwOnChange);
        this._vc_50.detectChangesInNestedViews(throwOnChange);
        this._vc_52.detectChangesInNestedViews(throwOnChange);
        this._vc_92.detectChangesInNestedViews(throwOnChange);
        this._vc_115.detectChangesInNestedViews(throwOnChange);
        this._vc_136.detectChangesInNestedViews(throwOnChange);
        this._vc_138.detectChangesInNestedViews(throwOnChange);
        this._vc_143.detectChangesInNestedViews(throwOnChange);
        this._vc_145.detectChangesInNestedViews(throwOnChange);
        this._vc_150.detectChangesInNestedViews(throwOnChange);
        this._vc_152.detectChangesInNestedViews(throwOnChange);
        this._vc_157.detectChangesInNestedViews(throwOnChange);
        this._vc_159.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_59_0.dirty) {
                this._query_RouterLink_59_0.reset([]);
                this._RouterLinkActive_59_4.context.links = this._query_RouterLink_59_0;
                this._query_RouterLink_59_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_59_1.dirty) {
                this._query_RouterLinkWithHref_59_1.reset([this._RouterLinkWithHref_59_3.context]);
                this._RouterLinkActive_59_4.context.linksWithHrefs = this._query_RouterLinkWithHref_59_1;
                this._query_RouterLinkWithHref_59_1.notifyOnChanges();
            }
            if (this._query_RouterLink_66_0.dirty) {
                this._query_RouterLink_66_0.reset([]);
                this._RouterLinkActive_66_4.context.links = this._query_RouterLink_66_0;
                this._query_RouterLink_66_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_66_1.dirty) {
                this._query_RouterLinkWithHref_66_1.reset([this._RouterLinkWithHref_66_3.context]);
                this._RouterLinkActive_66_4.context.linksWithHrefs = this._query_RouterLinkWithHref_66_1;
                this._query_RouterLinkWithHref_66_1.notifyOnChanges();
            }
            if (this._query_RouterLink_73_0.dirty) {
                this._query_RouterLink_73_0.reset([]);
                this._RouterLinkActive_73_4.context.links = this._query_RouterLink_73_0;
                this._query_RouterLink_73_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_73_1.dirty) {
                this._query_RouterLinkWithHref_73_1.reset([this._RouterLinkWithHref_73_3.context]);
                this._RouterLinkActive_73_4.context.linksWithHrefs = this._query_RouterLinkWithHref_73_1;
                this._query_RouterLinkWithHref_73_1.notifyOnChanges();
            }
            if (this._query_RouterLink_80_0.dirty) {
                this._query_RouterLink_80_0.reset([]);
                this._RouterLinkActive_80_4.context.links = this._query_RouterLink_80_0;
                this._query_RouterLink_80_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_80_1.dirty) {
                this._query_RouterLinkWithHref_80_1.reset([this._RouterLinkWithHref_80_3.context]);
                this._RouterLinkActive_80_4.context.linksWithHrefs = this._query_RouterLinkWithHref_80_1;
                this._query_RouterLinkWithHref_80_1.notifyOnChanges();
            }
            if (this._query_RouterLink_86_0.dirty) {
                this._query_RouterLink_86_0.reset([]);
                this._RouterLinkActive_86_4.context.links = this._query_RouterLink_86_0;
                this._query_RouterLink_86_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_86_1.dirty) {
                this._query_RouterLinkWithHref_86_1.reset([this._RouterLinkWithHref_86_3.context]);
                this._RouterLinkActive_86_4.context.linksWithHrefs = this._query_RouterLinkWithHref_86_1;
                this._query_RouterLinkWithHref_86_1.notifyOnChanges();
            }
            if (this._query_RouterLink_95_0.dirty) {
                this._query_RouterLink_95_0.reset([]);
                this._RouterLinkActive_95_4.context.links = this._query_RouterLink_95_0;
                this._query_RouterLink_95_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_95_1.dirty) {
                this._query_RouterLinkWithHref_95_1.reset([this._RouterLinkWithHref_95_3.context]);
                this._RouterLinkActive_95_4.context.linksWithHrefs = this._query_RouterLinkWithHref_95_1;
                this._query_RouterLinkWithHref_95_1.notifyOnChanges();
            }
            if (this._query_RouterLink_101_0.dirty) {
                this._query_RouterLink_101_0.reset([]);
                this._RouterLinkActive_101_4.context.links = this._query_RouterLink_101_0;
                this._query_RouterLink_101_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_101_1.dirty) {
                this._query_RouterLinkWithHref_101_1.reset([this._RouterLinkWithHref_101_3.context]);
                this._RouterLinkActive_101_4.context.linksWithHrefs = this._query_RouterLinkWithHref_101_1;
                this._query_RouterLinkWithHref_101_1.notifyOnChanges();
            }
            if (this._query_RouterLink_105_0.dirty) {
                this._query_RouterLink_105_0.reset([]);
                this._RouterLinkActive_105_4.context.links = this._query_RouterLink_105_0;
                this._query_RouterLink_105_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_105_1.dirty) {
                this._query_RouterLinkWithHref_105_1.reset([this._RouterLinkWithHref_105_3.context]);
                this._RouterLinkActive_105_4.context.linksWithHrefs = this._query_RouterLinkWithHref_105_1;
                this._query_RouterLinkWithHref_105_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_59_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_66_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_73_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_80_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_86_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_95_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_101_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_105_4.context.ngAfterContentInit();
            }
        }
        this._RouterLinkWithHref_41_3.checkHost(this, this, this._el_41, throwOnChange);
        this._RouterLinkWithHref_45_3.checkHost(this, this, this._el_45, throwOnChange);
        this._RouterLinkWithHref_59_3.checkHost(this, this, this._el_59, throwOnChange);
        var currVal_265 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.answers), '');
        if (import3.checkBinding(throwOnChange, this._expr_265, currVal_265)) {
            this.renderer.setText(this._text_62, currVal_265);
            this._expr_265 = currVal_265;
        }
        this._RouterLinkWithHref_66_3.checkHost(this, this, this._el_66, throwOnChange);
        var currVal_267 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.questions), '');
        if (import3.checkBinding(throwOnChange, this._expr_267, currVal_267)) {
            this.renderer.setText(this._text_69, currVal_267);
            this._expr_267 = currVal_267;
        }
        this._RouterLinkWithHref_73_3.checkHost(this, this, this._el_73, throwOnChange);
        var currVal_269 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.followers), '');
        if (import3.checkBinding(throwOnChange, this._expr_269, currVal_269)) {
            this.renderer.setText(this._text_77, currVal_269);
            this._expr_269 = currVal_269;
        }
        this._RouterLinkWithHref_80_3.checkHost(this, this, this._el_80, throwOnChange);
        var currVal_271 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.followings), '');
        if (import3.checkBinding(throwOnChange, this._expr_271, currVal_271)) {
            this.renderer.setText(this._text_83, currVal_271);
            this._expr_271 = currVal_271;
        }
        this._RouterLinkWithHref_86_3.checkHost(this, this, this._el_86, throwOnChange);
        var currVal_273 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.bookmarks), '');
        if (import3.checkBinding(throwOnChange, this._expr_273, currVal_273)) {
            this.renderer.setText(this._text_89, currVal_273);
            this._expr_273 = currVal_273;
        }
        this._RouterLinkWithHref_95_3.checkHost(this, this, this._el_95, throwOnChange);
        var currVal_275 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.blogs), '');
        if (import3.checkBinding(throwOnChange, this._expr_275, currVal_275)) {
            this.renderer.setText(this._text_98, currVal_275);
            this._expr_275 = currVal_275;
        }
        this._RouterLinkWithHref_101_3.checkHost(this, this, this._el_101, throwOnChange);
        this._RouterLinkWithHref_105_3.checkHost(this, this, this._el_105, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        this.compView_166.internalDetectChanges(throwOnChange);
        this.compView_168.internalDetectChanges(throwOnChange);
    };
    View_ViewProfileComponent0.prototype.destroyInternal = function () {
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_13.destroyNestedViews();
        this._vc_18.destroyNestedViews();
        this._vc_22.destroyNestedViews();
        this._vc_48.destroyNestedViews();
        this._vc_50.destroyNestedViews();
        this._vc_52.destroyNestedViews();
        this._vc_92.destroyNestedViews();
        this._vc_115.destroyNestedViews();
        this._vc_136.destroyNestedViews();
        this._vc_138.destroyNestedViews();
        this._vc_143.destroyNestedViews();
        this._vc_145.destroyNestedViews();
        this._vc_150.destroyNestedViews();
        this._vc_152.destroyNestedViews();
        this._vc_157.destroyNestedViews();
        this._vc_159.destroyNestedViews();
        this.compView_2.destroy();
        this.compView_166.destroy();
        this.compView_168.destroy();
        this._RouterLinkWithHref_41_3.ngOnDestroy();
        this._RouterLinkWithHref_45_3.ngOnDestroy();
        this._RouterLinkWithHref_59_3.ngOnDestroy();
        this._RouterLinkActive_59_4.ngOnDestroy();
        this._RouterLinkWithHref_66_3.ngOnDestroy();
        this._RouterLinkActive_66_4.ngOnDestroy();
        this._RouterLinkWithHref_73_3.ngOnDestroy();
        this._RouterLinkActive_73_4.ngOnDestroy();
        this._RouterLinkWithHref_80_3.ngOnDestroy();
        this._RouterLinkActive_80_4.ngOnDestroy();
        this._RouterLinkWithHref_86_3.ngOnDestroy();
        this._RouterLinkActive_86_4.ngOnDestroy();
        this._RouterLinkWithHref_95_3.ngOnDestroy();
        this._RouterLinkActive_95_4.ngOnDestroy();
        this._RouterLinkWithHref_101_3.ngOnDestroy();
        this._RouterLinkActive_101_4.ngOnDestroy();
        this._RouterLinkWithHref_105_3.ngOnDestroy();
        this._RouterLinkActive_105_4.ngOnDestroy();
        this._RouterOutlet_115_5.ngOnDestroy();
    };
    View_ViewProfileComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 18)) {
            return new View_ViewProfileComponent1(this.viewUtils, this, 18, this._anchor_18, this._vc_18);
        }
        if ((nodeIndex == 22)) {
            return new View_ViewProfileComponent3(this.viewUtils, this, 22, this._anchor_22, this._vc_22);
        }
        if ((nodeIndex == 48)) {
            return new View_ViewProfileComponent4(this.viewUtils, this, 48, this._anchor_48, this._vc_48);
        }
        if ((nodeIndex == 50)) {
            return new View_ViewProfileComponent5(this.viewUtils, this, 50, this._anchor_50, this._vc_50);
        }
        if ((nodeIndex == 52)) {
            return new View_ViewProfileComponent6(this.viewUtils, this, 52, this._anchor_52, this._vc_52);
        }
        if ((nodeIndex == 92)) {
            return new View_ViewProfileComponent7(this.viewUtils, this, 92, this._anchor_92, this._vc_92);
        }
        if ((nodeIndex == 136)) {
            return new View_ViewProfileComponent8(this.viewUtils, this, 136, this._anchor_136, this._vc_136);
        }
        if ((nodeIndex == 138)) {
            return new View_ViewProfileComponent10(this.viewUtils, this, 138, this._anchor_138, this._vc_138);
        }
        if ((nodeIndex == 143)) {
            return new View_ViewProfileComponent11(this.viewUtils, this, 143, this._anchor_143, this._vc_143);
        }
        if ((nodeIndex == 145)) {
            return new View_ViewProfileComponent13(this.viewUtils, this, 145, this._anchor_145, this._vc_145);
        }
        if ((nodeIndex == 150)) {
            return new View_ViewProfileComponent14(this.viewUtils, this, 150, this._anchor_150, this._vc_150);
        }
        if ((nodeIndex == 152)) {
            return new View_ViewProfileComponent16(this.viewUtils, this, 152, this._anchor_152, this._vc_152);
        }
        if ((nodeIndex == 157)) {
            return new View_ViewProfileComponent17(this.viewUtils, this, 157, this._anchor_157, this._vc_157);
        }
        if ((nodeIndex == 159)) {
            return new View_ViewProfileComponent19(this.viewUtils, this, 159, this._anchor_159, this._vc_159);
        }
        return null;
    };
    View_ViewProfileComponent0.prototype.handleEvent_32 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_41_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_45 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_45_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_59 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_59_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_66 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_66_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_73 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_73_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_80 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_80_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_86 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_86_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_95 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_95_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_101 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_101_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ViewProfileComponent0.prototype.handleEvent_105 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_105_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent0;
}(import1.AppView));
export { View_ViewProfileComponent0 };
var View_ViewProfileComponent1 = (function (_super) {
    __extends(View_ViewProfileComponent1, _super);
    function View_ViewProfileComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent1, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import18.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import28.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_ViewProfileComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import32.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.credential.id;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_ViewProfileComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_ViewProfileComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_ViewProfileComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_ViewProfileComponent1;
}(import1.AppView));
var View_ViewProfileComponent2 = (function (_super) {
    __extends(View_ViewProfileComponent2, _super);
    function View_ViewProfileComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent2, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger center-width'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            Please add first name and last name to start.\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ViewProfileComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ViewProfileComponent2;
}(import1.AppView));
var View_ViewProfileComponent3 = (function (_super) {
    __extends(View_ViewProfileComponent3, _super);
    function View_ViewProfileComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent3, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'profile-info', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_2 = new import18.ViewContainer(2, 0, this, this._el_2);
        this.compView_2 = new import38.View_ProfileInfoComponent0(this.viewUtils, this, 2, this._el_2);
        this._ImageUploadService_2_5 = new import37.ImageUploadService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._ConfigService_2_6 = new import6.ConfigService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._AuthenticationService_2_7 = new import7.AuthenticationService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._ProfileInfoComponent_2_8 = new import38.Wrapper_ProfileInfoComponent(this._ImageUploadService_2_5, this._ConfigService_2_6, this.parentView.parentView.injectorGet(import5.ProfileService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentView.parentIndex), this._AuthenticationService_2_7, this.parentView.parentView.injectorGet(import39.ToastsManager, this.parentView.parentIndex), this._vc_2.vcRef, this.parentView.parentView.injectorGet(import13.Router, this.parentView.parentIndex));
        this.compView_2.create(this._ProfileInfoComponent_2_8.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'onUpdated', null), this.eventHandler(this.handleEvent_2));
        this._ProfileInfoComponent_2_8.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.ImageUploadService) && (2 === requestNodeIndex))) {
            return this._ImageUploadService_2_5;
        }
        if (((token === import6.ConfigService) && (2 === requestNodeIndex))) {
            return this._ConfigService_2_6;
        }
        if (((token === import7.AuthenticationService) && (2 === requestNodeIndex))) {
            return this._AuthenticationService_2_7;
        }
        if (((token === import36.ProfileInfoComponent) && (2 === requestNodeIndex))) {
            return this._ProfileInfoComponent_2_8.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.isOwner;
        this._ProfileInfoComponent_2_8.check_isOwner(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.parentView.context.credential;
        this._ProfileInfoComponent_2_8.check_credential(currVal_2_0_1, throwOnChange, false);
        this._ProfileInfoComponent_2_8.ngDoCheck(this, this._el_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_ViewProfileComponent3.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this.compView_2.destroy();
        this._ProfileInfoComponent_2_8.ngOnDestroy();
    };
    View_ViewProfileComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onUpdated')) {
            var pd_sub_0 = (this.parentView.context.onUpdatedProfile($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent3;
}(import1.AppView));
var View_ViewProfileComponent4 = (function (_super) {
    __extends(View_ViewProfileComponent4, _super);
    function View_ViewProfileComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent4, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signout'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Cerrar sesión', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_ViewProfileComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ViewProfileComponent4;
}(import1.AppView));
var View_ViewProfileComponent5 = (function (_super) {
    __extends(View_ViewProfileComponent5, _super);
    function View_ViewProfileComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent5, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Iniciar sesión', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_ViewProfileComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ViewProfileComponent5;
}(import1.AppView));
var View_ViewProfileComponent6 = (function (_super) {
    __extends(View_ViewProfileComponent6, _super);
    function View_ViewProfileComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent6, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Regístrate ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_ViewProfileComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ViewProfileComponent6;
}(import1.AppView));
var View_ViewProfileComponent7 = (function (_super) {
    __extends(View_ViewProfileComponent7, _super);
    function View_ViewProfileComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ViewProfileComponent7, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_7 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        return _this;
    }
    View_ViewProfileComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray4(4, 'class', 'route', 'routerLinkActive', 'active-link'), null);
        this._RouterLinkWithHref_1_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import13.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import12.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import29.LocationStrategy, this.parentView.parentIndex));
        this._RouterLinkActive_1_4 = new import21.Wrapper_RouterLinkActive(this.parentView.parentView.injectorGet(import13.Router, this.parentView.parentIndex), new import30.ElementRef(this._el_1), this.renderer);
        this._query_RouterLink_1_0 = new import15.QueryList();
        this._query_RouterLinkWithHref_1_1 = new import15.QueryList();
        this._text_2 = this.renderer.createText(this._el_1, 'Borrador ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkWithHref_1_3.context;
        }
        if (((token === import34.RouterLinkActive) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkActive_1_4.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this._arr_7('/dashboard/viewprofile', this.parentView.context.credential.userId, 'draft-answer');
        this._RouterLinkWithHref_1_3.check_routerLink(currVal_1_0_0, throwOnChange, false);
        this._RouterLinkWithHref_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_1_1_0 = 'active-link';
        this._RouterLinkActive_1_4.check_routerLinkActive(currVal_1_1_0, throwOnChange, false);
        this._RouterLinkActive_1_4.ngDoCheck(this, this._el_1, throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_1_0.dirty) {
                this._query_RouterLink_1_0.reset([]);
                this._RouterLinkActive_1_4.context.links = this._query_RouterLink_1_0;
                this._query_RouterLink_1_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_1_1.dirty) {
                this._query_RouterLinkWithHref_1_1.reset([this._RouterLinkWithHref_1_3.context]);
                this._RouterLinkActive_1_4.context.linksWithHrefs = this._query_RouterLinkWithHref_1_1;
                this._query_RouterLinkWithHref_1_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_1_4.context.ngAfterContentInit();
            }
        }
        this._RouterLinkWithHref_1_3.checkHost(this, this, this._el_1, throwOnChange);
    };
    View_ViewProfileComponent7.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_1_3.ngOnDestroy();
        this._RouterLinkActive_1_4.ngOnDestroy();
    };
    View_ViewProfileComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent7.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_1_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ViewProfileComponent7;
}(import1.AppView));
var View_ViewProfileComponent8 = (function (_super) {
    __extends(View_ViewProfileComponent8, _super);
    function View_ViewProfileComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ViewProfileComponent8, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_14 = import27.UNINITIALIZED;
        return _this;
    }
    View_ViewProfileComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'show'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mytooltip'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'i', new import3.InlineArray2(2, 'class', 'fa fa-suitcase'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'mytooltiptext'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Trabajo', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'title', 'Employment'), null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_9 = new import18.ViewContainer(9, 0, this, this._anchor_9);
        this._TemplateRef_9_5 = new import28.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import19.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10
        ]), null);
        return null;
    };
    View_ViewProfileComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import32.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9_0_0 = this.parentView.context.isOwner;
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        var currVal_14 = import3.inlineInterpolate(1, '', this.parentView.context.employmentHtml, '');
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_7, 'innerHTML', this.viewUtils.sanitizer.sanitize(import40.SecurityContext.HTML, currVal_14));
            this._expr_14 = currVal_14;
        }
    };
    View_ViewProfileComponent8.prototype.destroyInternal = function () {
        this._vc_9.destroyNestedViews();
    };
    View_ViewProfileComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent8.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_ViewProfileComponent9(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        return null;
    };
    return View_ViewProfileComponent8;
}(import1.AppView));
var View_ViewProfileComponent9 = (function (_super) {
    __extends(View_ViewProfileComponent9, _super);
    function View_ViewProfileComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent9, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit show-edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent9.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openEmploymentDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent9;
}(import1.AppView));
var View_ViewProfileComponent10 = (function (_super) {
    __extends(View_ViewProfileComponent10, _super);
    function View_ViewProfileComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent10, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ¿Cuál es tu labor?', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent10.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.openEmploymentDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent10;
}(import1.AppView));
var View_ViewProfileComponent11 = (function (_super) {
    __extends(View_ViewProfileComponent11, _super);
    function View_ViewProfileComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ViewProfileComponent11, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_14 = import27.UNINITIALIZED;
        return _this;
    }
    View_ViewProfileComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'show'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mytooltip'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'i', new import3.InlineArray2(2, 'class', 'fa fa-university'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'mytooltiptext'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Educación', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n                        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'title', 'Education'), null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_9 = new import18.ViewContainer(9, 0, this, this._anchor_9);
        this._TemplateRef_9_5 = new import28.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import19.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10
        ]), null);
        return null;
    };
    View_ViewProfileComponent11.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import32.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9_0_0 = this.parentView.context.isOwner;
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        var currVal_14 = import3.inlineInterpolate(1, '', this.parentView.context.educationHtml, '');
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_7, 'innerHTML', this.viewUtils.sanitizer.sanitize(import40.SecurityContext.HTML, currVal_14));
            this._expr_14 = currVal_14;
        }
    };
    View_ViewProfileComponent11.prototype.destroyInternal = function () {
        this._vc_9.destroyNestedViews();
    };
    View_ViewProfileComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent11.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_ViewProfileComponent12(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        return null;
    };
    return View_ViewProfileComponent11;
}(import1.AppView));
var View_ViewProfileComponent12 = (function (_super) {
    __extends(View_ViewProfileComponent12, _super);
    function View_ViewProfileComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent12, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit show-edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent12.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openEducationDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent12;
}(import1.AppView));
var View_ViewProfileComponent13 = (function (_super) {
    __extends(View_ViewProfileComponent13, _super);
    function View_ViewProfileComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent13, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._text_2 = this.renderer.createText(this._el_0, '¿Cuál es tu profesión?\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent13.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.openEducationDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent13;
}(import1.AppView));
var View_ViewProfileComponent14 = (function (_super) {
    __extends(View_ViewProfileComponent14, _super);
    function View_ViewProfileComponent14(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ViewProfileComponent14, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_14 = import27.UNINITIALIZED;
        return _this;
    }
    View_ViewProfileComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'show'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mytooltip'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'i', new import3.InlineArray2(2, 'class', 'fa fa-home'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'mytooltiptext'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Lugar', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n                        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'title', 'Place'), null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_9 = new import18.ViewContainer(9, 0, this, this._anchor_9);
        this._TemplateRef_9_5 = new import28.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import19.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10
        ]), null);
        return null;
    };
    View_ViewProfileComponent14.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import32.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent14.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9_0_0 = this.parentView.context.isOwner;
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        var currVal_14 = import3.inlineInterpolate(1, '', this.parentView.context.placeHtml, '');
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_7, 'innerHTML', this.viewUtils.sanitizer.sanitize(import40.SecurityContext.HTML, currVal_14));
            this._expr_14 = currVal_14;
        }
    };
    View_ViewProfileComponent14.prototype.destroyInternal = function () {
        this._vc_9.destroyNestedViews();
    };
    View_ViewProfileComponent14.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent14.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_ViewProfileComponent15(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        return null;
    };
    return View_ViewProfileComponent14;
}(import1.AppView));
var View_ViewProfileComponent15 = (function (_super) {
    __extends(View_ViewProfileComponent15, _super);
    function View_ViewProfileComponent15(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent15, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit show-edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent15.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent15.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openPlaceDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent15;
}(import1.AppView));
var View_ViewProfileComponent16 = (function (_super) {
    __extends(View_ViewProfileComponent16, _super);
    function View_ViewProfileComponent16(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent16, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent16.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._text_2 = this.renderer.createText(this._el_0, '¿Dónde vives?\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent16.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent16.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.openPlaceDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent16;
}(import1.AppView));
var View_ViewProfileComponent17 = (function (_super) {
    __extends(View_ViewProfileComponent17, _super);
    function View_ViewProfileComponent17(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ViewProfileComponent17, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_14 = import27.UNINITIALIZED;
        return _this;
    }
    View_ViewProfileComponent17.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'show'), null);
        this._text_1 = this.renderer.createText(this._el_0, ' \n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mytooltip'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'i', new import3.InlineArray2(2, 'class', 'fa fa-cog'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'mytooltiptext'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Otros', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'title', 'Others'), null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_9 = new import18.ViewContainer(9, 0, this, this._anchor_9);
        this._TemplateRef_9_5 = new import28.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import19.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10
        ]), null);
        return null;
    };
    View_ViewProfileComponent17.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import32.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        return notFoundResult;
    };
    View_ViewProfileComponent17.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9_0_0 = this.parentView.context.isOwner;
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        var currVal_14 = import3.inlineInterpolate(1, '', this.parentView.context.othersHtml, '');
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_7, 'innerHTML', this.viewUtils.sanitizer.sanitize(import40.SecurityContext.HTML, currVal_14));
            this._expr_14 = currVal_14;
        }
    };
    View_ViewProfileComponent17.prototype.destroyInternal = function () {
        this._vc_9.destroyNestedViews();
    };
    View_ViewProfileComponent17.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent17.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_ViewProfileComponent18(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        return null;
    };
    return View_ViewProfileComponent17;
}(import1.AppView));
var View_ViewProfileComponent18 = (function (_super) {
    __extends(View_ViewProfileComponent18, _super);
    function View_ViewProfileComponent18(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent18, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent18.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit show-edit'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'fa fa-edit'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent18.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent18.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.openOtherexperienceDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent18;
}(import1.AppView));
var View_ViewProfileComponent19 = (function (_super) {
    __extends(View_ViewProfileComponent19, _super);
    function View_ViewProfileComponent19(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ViewProfileComponent19, renderType_ViewProfileComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ViewProfileComponent19.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'edit'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._text_2 = this.renderer.createText(this._el_0, '¿Cuál es tu hobby?\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_ViewProfileComponent19.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ViewProfileComponent19.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.openOtherexperienceDialogAnchor() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ViewProfileComponent19;
}(import1.AppView));
