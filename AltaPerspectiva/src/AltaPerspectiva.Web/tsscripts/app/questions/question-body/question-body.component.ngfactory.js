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
import * as import0 from './question-body.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question-answer.service';
import * as import6 from '../../services/category.service';
import * as import7 from '../../services/config.service';
import * as import8 from '../../services/question.service';
import * as import9 from '@angular/core/src/linker/view_type';
import * as import10 from '@angular/core/src/change_detection/constants';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/http/src/http';
import * as import13 from '../../services/authentication.service';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '../../services/communication.service';
import * as import17 from '../../shared/left-menu/level.component';
import * as import18 from '../../shared/left-menu/level.component.ngfactory';
import * as import19 from '../../shared/left-menu/topfive-question-left-menu.component';
import * as import20 from '../../shared/left-menu/topfive-question-left-menu.component.ngfactory';
import * as import21 from '../../shared/left-menu/topfive-user.component';
import * as import22 from '../../services/profile.service';
import * as import23 from '../../shared/left-menu/topfive-user.component.ngfactory';
import * as import24 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import25 from '@angular/core/src/linker/view_container';
import * as import26 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import27 from '../../shared/left-menu/category-left-menu.component';
import * as import28 from '../../shared/left-menu/category-left-menu.component.ngfactory';
import * as import29 from '../../../../node_modules/angular2-infinite-scroll/src/infinite-scroll.ngfactory';
import * as import30 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import31 from '@angular/core/src/change_detection/change_detection_util';
import * as import32 from '@angular/common/src/location/location_strategy';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/linker/element_ref';
import * as import35 from '@angular/core/src/zone/ng_zone';
import * as import36 from 'angular2-infinite-scroll/src/position-resolver';
import * as import37 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import38 from '@angular/router/src/directives/router_link';
import * as import39 from '@angular/common/src/directives/ng_if';
import * as import40 from 'angular2-infinite-scroll/src/infinite-scroll';
import * as import41 from '@angular/common/src/directives/ng_for';
import * as import42 from '@angular/core/src/security';
import * as import43 from '../../shared/question-panel/question-panel.component';
import * as import44 from '../../shared/question-panel/question-panel.component.ngfactory';
import * as import45 from '@angular/core/src/linker/component_factory_resolver';
var Wrapper_QuestionBodyComponent = (function () {
    function Wrapper_QuestionBodyComponent(p0, p1, p2, p3, p4, p5, p6, p7) {
        this._changed = false;
        this.context = new import0.QuestionBodyComponent(p0, p1, p2, p3, p4, p5, p6, p7);
    }
    Wrapper_QuestionBodyComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionBodyComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionBodyComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_QuestionBodyComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionBodyComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionBodyComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionBodyComponent;
}());
export { Wrapper_QuestionBodyComponent };
var renderType_QuestionBodyComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_QuestionBodyComponent_Host0 = (function (_super) {
    __extends(View_QuestionBodyComponent_Host0, _super);
    function View_QuestionBodyComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionBodyComponent_Host0, renderType_QuestionBodyComponent_Host, import9.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionBodyComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'question-body', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_QuestionBodyComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import12.Http, this.parentIndex));
        this._CategoryService_0_4 = new import6.CategoryService(this.injectorGet(import12.Http, this.parentIndex));
        this._ConfigService_0_5 = new import7.ConfigService(this.injectorGet(import12.Http, this.parentIndex));
        this._QuestionService_0_6 = new import8.QuestionService(this.injectorGet(import12.Http, this.parentIndex));
        this._QuestionBodyComponent_0_7 = new Wrapper_QuestionBodyComponent(this._QuestionAnswerService_0_3, this.injectorGet(import13.AuthenticationService, this.parentIndex), this._CategoryService_0_4, this._ConfigService_0_5, this.injectorGet(import14.Router, this.parentIndex), this.injectorGet(import15.ActivatedRoute, this.parentIndex), this.injectorGet(import16.CommunicationService, this.parentIndex), this._QuestionService_0_6);
        this.compView_0.create(this._QuestionBodyComponent_0_7.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import11.ComponentRef_(0, this, this._el_0, this._QuestionBodyComponent_0_7.context);
    };
    View_QuestionBodyComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import6.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_4;
        }
        if (((token === import7.ConfigService) && (0 === requestNodeIndex))) {
            return this._ConfigService_0_5;
        }
        if (((token === import8.QuestionService) && (0 === requestNodeIndex))) {
            return this._QuestionService_0_6;
        }
        if (((token === import0.QuestionBodyComponent) && (0 === requestNodeIndex))) {
            return this._QuestionBodyComponent_0_7.context;
        }
        return notFoundResult;
    };
    View_QuestionBodyComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionBodyComponent_0_7.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionBodyComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_QuestionBodyComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent_Host0;
}(import1.AppView));
export var QuestionBodyComponentNgFactory = new import11.ComponentFactory('question-body', View_QuestionBodyComponent_Host0, import0.QuestionBodyComponent);
var styles_QuestionBodyComponent = ['.category-header[_ngcontent-%COMP%] {\n    }\n\n        .category-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n            display: inline-block;\n        }\n\n        .category-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n\n    .read-question-button[_ngcontent-%COMP%] {\n        margin-left: 15px;\n        margin-bottom: 10px;\n        display: inline-block;\n    }\n\n        .read-question-button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n            font-size: 17px;\n        }\n\n    .read-question-button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        width: 200px;\n        color: black;\n    }\n\n    read-question-button[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n        left: 5px;\n        min-width: 200px;\n    }\n\n    .tags-container[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n    .more-btn[_ngcontent-%COMP%] {\n        float: left;\n        padding: 5px;\n        font-weight: 700;\n    }'];
var renderType_QuestionBodyComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_QuestionBodyComponent, {});
var View_QuestionBodyComponent0 = (function (_super) {
    __extends(View_QuestionBodyComponent0, _super);
    function View_QuestionBodyComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_QuestionBodyComponent0, renderType_QuestionBodyComponent, import9.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_197 = import31.UNINITIALIZED;
        _this._expr_198 = import31.UNINITIALIZED;
        _this._expr_199 = import31.UNINITIALIZED;
        _this._expr_200 = import31.UNINITIALIZED;
        _this._expr_201 = import31.UNINITIALIZED;
        _this._expr_202 = import31.UNINITIALIZED;
        _this._expr_203 = import31.UNINITIALIZED;
        return _this;
    }
    View_QuestionBodyComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row row-fix'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_1, '\n', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'left-panel'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'id', 'leftPanel'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'level', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_12 = new import18.View_LevelComponent0(this.viewUtils, this, 12, this._el_12);
        this._QuestionService_12_3 = new import8.QuestionService(this.parentView.injectorGet(import12.Http, this.parentIndex));
        this._LevelComponent_12_4 = new import18.Wrapper_LevelComponent(this._QuestionService_12_3, this.parentView.injectorGet(import16.CommunicationService, this.parentIndex));
        this.compView_12.create(this._LevelComponent_12_4.context);
        this._text_13 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_10, 'topfive-question-left-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_14 = new import20.View_TopFiveQuestionLeftMenuComponent0(this.viewUtils, this, 14, this._el_14);
        this._QuestionService_14_3 = new import8.QuestionService(this.parentView.injectorGet(import12.Http, this.parentIndex));
        this._TopFiveQuestionLeftMenuComponent_14_4 = new import20.Wrapper_TopFiveQuestionLeftMenuComponent(this._QuestionService_14_3, this.parentView.injectorGet(import16.CommunicationService, this.parentIndex));
        this._text_15 = this.renderer.createText(null, ' ', null);
        this.compView_14.create(this._TopFiveQuestionLeftMenuComponent_14_4.context);
        this._text_16 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_10, 'topfive-user', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_17 = new import23.View_TopFiveUserComponent0(this.viewUtils, this, 17, this._el_17);
        this._ProfileService_17_3 = new import22.ProfileService(this.parentView.injectorGet(import12.Http, this.parentIndex));
        this._TopFiveUserComponent_17_4 = new import23.Wrapper_TopFiveUserComponent(this._ProfileService_17_3, this.parentView.injectorGet(import16.CommunicationService, this.parentIndex), this.parentView.injectorGet(import14.Router, this.parentIndex));
        this.compView_17.create(this._TopFiveUserComponent_17_4.context);
        this._text_18 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_8, '\n', null);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_21 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'right-panel category-panel-xs', 'id', 'toggleMenu'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n    ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'class', 'menu-container visible-xs'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'div', new import3.InlineArray2(2, 'class', 'cloe-button'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_28 = this.renderer.createText(this._el_27, ' ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'i', new import3.InlineArray2(2, 'class', 'fa fa-arrow-left'), null);
        this._text_30 = this.renderer.createText(this._el_27, ' ', null);
        this._text_31 = this.renderer.createText(this._el_25, '\n        ', null);
        this._text_32 = this.renderer.createText(this._el_23, '\n        ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_23, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n            ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'li', new import3.InlineArray2(2, 'class', ''), null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_35, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_36_3 = new import24.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import32.LocationStrategy, this.parentIndex));
        this._text_37 = this.renderer.createText(this._el_36, 'Alta Perspectiva', null);
        this._text_38 = this.renderer.createText(this._el_33, '\n            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_33, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_39, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_40_3 = new import24.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import32.LocationStrategy, this.parentIndex));
        this._text_41 = this.renderer.createText(this._el_40, 'Preguntas', null);
        this._text_42 = this.renderer.createText(this._el_33, '\n\n            ', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._vc_43 = new import25.ViewContainer(43, 33, this, this._anchor_43);
        this._TemplateRef_43_5 = new import33.TemplateRef_(this, 43, this._anchor_43);
        this._NgIf_43_6 = new import26.Wrapper_NgIf(this._vc_43.vcRef, this._TemplateRef_43_5);
        this._text_44 = this.renderer.createText(this._el_33, '\n            ', null);
        this._anchor_45 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._vc_45 = new import25.ViewContainer(45, 33, this, this._anchor_45);
        this._TemplateRef_45_5 = new import33.TemplateRef_(this, 45, this._anchor_45);
        this._NgIf_45_6 = new import26.Wrapper_NgIf(this._vc_45.vcRef, this._TemplateRef_45_5);
        this._text_46 = this.renderer.createText(this._el_33, '\n\n            ', null);
        this._anchor_47 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._vc_47 = new import25.ViewContainer(47, 33, this, this._anchor_47);
        this._TemplateRef_47_5 = new import33.TemplateRef_(this, 47, this._anchor_47);
        this._NgIf_47_6 = new import26.Wrapper_NgIf(this._vc_47.vcRef, this._TemplateRef_47_5);
        this._text_48 = this.renderer.createText(this._el_33, '\n            ', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._vc_49 = new import25.ViewContainer(49, 33, this, this._anchor_49);
        this._TemplateRef_49_5 = new import33.TemplateRef_(this, 49, this._anchor_49);
        this._NgIf_49_6 = new import26.Wrapper_NgIf(this._vc_49.vcRef, this._TemplateRef_49_5);
        this._text_50 = this.renderer.createText(this._el_33, '\n        ', null);
        this._text_51 = this.renderer.createText(this._el_23, '\n    ', null);
        this._text_52 = this.renderer.createText(this._el_21, '\n    ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_21, 'category-left-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_53 = new import28.View_CategoryMenuPanelComponent0(this.viewUtils, this, 53, this._el_53);
        this._QuestionAnswerService_53_3 = new import5.QuestionAnswerService(this.parentView.injectorGet(import12.Http, this.parentIndex));
        this._CategoryService_53_4 = new import6.CategoryService(this.parentView.injectorGet(import12.Http, this.parentIndex));
        this._CategoryMenuPanelComponent_53_5 = new import28.Wrapper_CategoryMenuPanelComponent(this._QuestionAnswerService_53_3, this._CategoryService_53_4, this.parentView.injectorGet(import16.CommunicationService, this.parentIndex));
        this.compView_53.create(this._CategoryMenuPanelComponent_53_5.context);
        this._text_54 = this.renderer.createText(this._el_21, '\n', null);
        this._text_55 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_56 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'center-width center-body z-ground center-fix'), null);
        this._text_57 = this.renderer.createText(this._el_56, '\n    ', null);
        this._anchor_58 = this.renderer.createTemplateAnchor(this._el_56, null);
        this._vc_58 = new import25.ViewContainer(58, 56, this, this._anchor_58);
        this._TemplateRef_58_5 = new import33.TemplateRef_(this, 58, this._anchor_58);
        this._NgIf_58_6 = new import26.Wrapper_NgIf(this._vc_58.vcRef, this._TemplateRef_58_5);
        this._text_59 = this.renderer.createText(this._el_56, '\n    ', null);
        this._el_60 = import3.createRenderElement(this.renderer, this._el_56, 'div', new import3.InlineArray2(2, 'class', 'row row-fix category-header'), null);
        this._text_61 = this.renderer.createText(this._el_60, '\n        ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_60, 'div', new import3.InlineArray2(2, 'class', 'pull-left'), null);
        this._text_63 = this.renderer.createText(this._el_62, '\n            ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_62, 'img', new import3.InlineArray4(4, 'align', 'left', 'class', 'img-rounded img-category'), null);
        this._text_65 = this.renderer.createText(this._el_62, '\n            ', null);
        this._el_66 = import3.createRenderElement(this.renderer, this._el_62, 'h2', new import3.InlineArray2(2, 'class', 'category-title'), null);
        this._text_67 = this.renderer.createText(this._el_66, '', null);
        this._text_68 = this.renderer.createText(this._el_62, '\n            ', null);
        this._anchor_69 = this.renderer.createTemplateAnchor(this._el_62, null);
        this._vc_69 = new import25.ViewContainer(69, 62, this, this._anchor_69);
        this._TemplateRef_69_5 = new import33.TemplateRef_(this, 69, this._anchor_69);
        this._NgIf_69_6 = new import26.Wrapper_NgIf(this._vc_69.vcRef, this._TemplateRef_69_5);
        this._text_70 = this.renderer.createText(this._el_62, '\n            ', null);
        this._anchor_71 = this.renderer.createTemplateAnchor(this._el_62, null);
        this._vc_71 = new import25.ViewContainer(71, 62, this, this._anchor_71);
        this._TemplateRef_71_5 = new import33.TemplateRef_(this, 71, this._anchor_71);
        this._NgIf_71_6 = new import26.Wrapper_NgIf(this._vc_71.vcRef, this._TemplateRef_71_5);
        this._text_72 = this.renderer.createText(this._el_62, '\n        ', null);
        this._text_73 = this.renderer.createText(this._el_60, '\n        ', null);
        this._el_74 = import3.createRenderElement(this.renderer, this._el_60, 'div', new import3.InlineArray2(2, 'class', 'pull-right'), null);
        this._text_75 = this.renderer.createText(this._el_74, '\n            ', null);
        this._el_76 = import3.createRenderElement(this.renderer, this._el_74, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_77 = this.renderer.createText(this._el_76, '', null);
        this._text_78 = this.renderer.createText(this._el_74, '\n            ', null);
        this._el_79 = import3.createRenderElement(this.renderer, this._el_74, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_80 = this.renderer.createText(this._el_79, 'Seguidores', null);
        this._text_81 = this.renderer.createText(this._el_74, '\n        ', null);
        this._text_82 = this.renderer.createText(this._el_60, '\n    ', null);
        this._text_83 = this.renderer.createText(this._el_56, '\n\n    ', null);
        this._el_84 = import3.createRenderElement(this.renderer, this._el_56, 'div', new import3.InlineArray2(2, 'class', 'row row-fix'), null);
        this._text_85 = this.renderer.createText(this._el_84, '\n        ', null);
        this._el_86 = import3.createRenderElement(this.renderer, this._el_84, 'button', new import3.InlineArray4(4, 'class', 'alta-btn alta-btn-lg', 'type', 'button'), null);
        this._text_87 = this.renderer.createText(this._el_86, 'Seguir', null);
        this._text_88 = this.renderer.createText(this._el_84, '\n        ', null);
        this._el_89 = import3.createRenderElement(this.renderer, this._el_84, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_90 = this.renderer.createText(this._el_89, '', null);
        this._text_91 = this.renderer.createText(this._el_84, '\n    ', null);
        this._text_92 = this.renderer.createText(this._el_56, '\n    ', null);
        this._el_93 = import3.createRenderElement(this.renderer, this._el_56, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_94 = this.renderer.createText(this._el_56, '\n    ', null);
        this._el_95 = import3.createRenderElement(this.renderer, this._el_56, 'div', new import3.InlineArray2(2, 'class', 'row tags-container'), null);
        this._text_96 = this.renderer.createText(this._el_95, '\n        ', null);
        this._anchor_97 = this.renderer.createTemplateAnchor(this._el_95, null);
        this._vc_97 = new import25.ViewContainer(97, 95, this, this._anchor_97);
        this._TemplateRef_97_5 = new import33.TemplateRef_(this, 97, this._anchor_97);
        this._NgIf_97_6 = new import26.Wrapper_NgIf(this._vc_97.vcRef, this._TemplateRef_97_5);
        this._text_98 = this.renderer.createText(this._el_95, '\n    ', null);
        this._text_99 = this.renderer.createText(this._el_56, '\n    ', null);
        this._el_100 = import3.createRenderElement(this.renderer, this._el_56, 'div', new import3.InlineArray2(2, 'class', 'filter-panel'), null);
        this._text_101 = this.renderer.createText(this._el_100, '\n        ', null);
        this._el_102 = import3.createRenderElement(this.renderer, this._el_100, 'div', new import3.InlineArray2(2, 'class', 'read-question-button'), null);
        this._text_103 = this.renderer.createText(this._el_102, '\n            ', null);
        this._el_104 = import3.createRenderElement(this.renderer, this._el_102, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_105 = this.renderer.createText(this._el_104, '', null);
        this._text_106 = this.renderer.createText(this._el_104, '\n            ', null);
        this._text_107 = this.renderer.createText(this._el_102, '\n            ', null);
        this._el_108 = import3.createRenderElement(this.renderer, this._el_102, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_109 = this.renderer.createText(this._el_108, '', null);
        this._text_110 = this.renderer.createText(this._el_108, '\n            ', null);
        this._text_111 = this.renderer.createText(this._el_102, '\n        ', null);
        this._text_112 = this.renderer.createText(this._el_100, '\n        ', null);
        this._el_113 = import3.createRenderElement(this.renderer, this._el_100, 'div', new import3.InlineArray2(2, 'class', 'read-question-button'), null);
        this._text_114 = this.renderer.createText(this._el_113, '\n            ', null);
        this._el_115 = import3.createRenderElement(this.renderer, this._el_113, 'div', new import3.InlineArray2(2, 'class', 'dropdown'), null);
        this._text_116 = this.renderer.createText(this._el_115, '\n                ', null);
        this._el_117 = import3.createRenderElement(this.renderer, this._el_115, 'button', new import3.InlineArray8(8, 'class', 'btn dropdown-toggle', 'data-toggle', 'dropdown', 'id', 'menu1', 'type', 'button'), null);
        this._text_118 = this.renderer.createText(this._el_117, '\n                    ', null);
        this._el_119 = import3.createRenderElement(this.renderer, this._el_117, 'span', new import3.InlineArray4(4, 'class', 'pull-left', 'id', 'icon-select'), null);
        this._text_120 = this.renderer.createText(this._el_119, '', null);
        this._text_121 = this.renderer.createText(this._el_117, '\n                    ', null);
        this._el_122 = import3.createRenderElement(this.renderer, this._el_117, 'span', new import3.InlineArray4(4, 'id', 'icon-view', 'style', 'margin-left: 20px; float: left; margin-top: 3px;'), null);
        this._text_123 = this.renderer.createText(this._el_117, '\n                    ', null);
        this._el_124 = import3.createRenderElement(this.renderer, this._el_117, 'span', new import3.InlineArray4(4, 'class', 'caret pull-right', 'style', 'margin-top:8px;'), null);
        this._text_125 = this.renderer.createText(this._el_117, '\n                ', null);
        this._text_126 = this.renderer.createText(this._el_115, '\n                ', null);
        this._el_127 = import3.createRenderElement(this.renderer, this._el_115, 'ul', new import3.InlineArray8(6, 'aria-labelledby', 'menu1', 'class', 'dropdown-menu', 'role', 'menu'), null);
        this._text_128 = this.renderer.createText(this._el_127, '\n                    ', null);
        this._el_129 = import3.createRenderElement(this.renderer, this._el_127, 'li', new import3.InlineArray2(2, 'role', 'presentation'), null);
        this._el_130 = import3.createRenderElement(this.renderer, this._el_129, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_131 = this.renderer.createText(this._el_130, 'Preguntas más recientes', null);
        this._text_132 = this.renderer.createText(this._el_127, '\n                    ', null);
        this._el_133 = import3.createRenderElement(this.renderer, this._el_127, 'li', new import3.InlineArray2(2, 'role', 'presentation'), null);
        this._el_134 = import3.createRenderElement(this.renderer, this._el_133, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_135 = this.renderer.createText(this._el_134, 'Preguntas con más “Me gusta” ', null);
        this._text_136 = this.renderer.createText(this._el_127, '\n                    ', null);
        this._el_137 = import3.createRenderElement(this.renderer, this._el_127, 'li', new import3.InlineArray2(2, 'role', 'presentation'), null);
        this._el_138 = import3.createRenderElement(this.renderer, this._el_137, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_139 = this.renderer.createText(this._el_138, 'Preguntas más vistas ', null);
        this._text_140 = this.renderer.createText(this._el_127, '\n                ', null);
        this._text_141 = this.renderer.createText(this._el_115, '\n            ', null);
        this._text_142 = this.renderer.createText(this._el_113, '\n        ', null);
        this._text_143 = this.renderer.createText(this._el_100, '\n    ', null);
        this._text_144 = this.renderer.createText(this._el_56, '\n    ', null);
        this._el_145 = import3.createRenderElement(this.renderer, this._el_56, 'div', new import3.InlineArray2(2, 'infinite-scroll', ''), null);
        this._InfiniteScroll_145_3 = new import29.Wrapper_InfiniteScroll(new import34.ElementRef(this._el_145), this.parentView.injectorGet(import35.NgZone, this.parentIndex), this.parentView.injectorGet(import36.PositionResolverFactory, this.parentIndex));
        this._text_146 = this.renderer.createText(this._el_145, '\n    ', null);
        this._text_147 = this.renderer.createText(this._el_56, '\n    ', null);
        this._anchor_148 = this.renderer.createTemplateAnchor(this._el_56, null);
        this._vc_148 = new import25.ViewContainer(148, 56, this, this._anchor_148);
        this._TemplateRef_148_5 = new import33.TemplateRef_(this, 148, this._anchor_148);
        this._NgFor_148_6 = new import30.Wrapper_NgFor(this._vc_148.vcRef, this._TemplateRef_148_5, this.parentView.injectorGet(import37.IterableDiffers, this.parentIndex), this.ref);
        this._text_149 = this.renderer.createText(this._el_56, '\n    ', null);
        this._text_150 = this.renderer.createText(this._el_56, '\n    ', null);
        this._el_151 = import3.createRenderElement(this.renderer, this._el_56, 'div', new import3.InlineArray4(4, 'class', 'hidden-xs', 'style', 'height:200px;position:relative;'), null);
        this._text_152 = this.renderer.createText(this._el_56, '\n', null);
        this._text_153 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_27));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_36, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_36));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_40, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_40));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_86, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_86));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_104, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_104));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_108, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_108));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_130, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_130));
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_134, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_134));
        var disposable_8 = import3.subscribeToRenderElement(this, this._el_138, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_138));
        var disposable_9 = import3.subscribeToRenderElement(this, this._el_145, new import3.InlineArray2(2, 'scrolled', null), this.eventHandler(this.handleEvent_145));
        this._InfiniteScroll_145_3.subscribe(this, this.eventHandler(this.handleEvent_145), true, false);
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
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._anchor_45,
            this._text_46,
            this._anchor_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._anchor_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._text_68,
            this._anchor_69,
            this._text_70,
            this._anchor_71,
            this._text_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._el_76,
            this._text_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._el_89,
            this._text_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._anchor_97,
            this._text_98,
            this._text_99,
            this._el_100,
            this._text_101,
            this._el_102,
            this._text_103,
            this._el_104,
            this._text_105,
            this._text_106,
            this._text_107,
            this._el_108,
            this._text_109,
            this._text_110,
            this._text_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._el_115,
            this._text_116,
            this._el_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._text_121,
            this._el_122,
            this._text_123,
            this._el_124,
            this._text_125,
            this._text_126,
            this._el_127,
            this._text_128,
            this._el_129,
            this._el_130,
            this._text_131,
            this._text_132,
            this._el_133,
            this._el_134,
            this._text_135,
            this._text_136,
            this._el_137,
            this._el_138,
            this._text_139,
            this._text_140,
            this._text_141,
            this._text_142,
            this._text_143,
            this._text_144,
            this._el_145,
            this._text_146,
            this._text_147,
            this._anchor_148,
            this._text_149,
            this._text_150,
            this._el_151,
            this._text_152,
            this._text_153
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
            disposable_9
        ]);
        return null;
    };
    View_QuestionBodyComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import8.QuestionService) && (12 === requestNodeIndex))) {
            return this._QuestionService_12_3;
        }
        if (((token === import17.LevelComponent) && (12 === requestNodeIndex))) {
            return this._LevelComponent_12_4.context;
        }
        if (((token === import8.QuestionService) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._QuestionService_14_3;
        }
        if (((token === import19.TopFiveQuestionLeftMenuComponent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._TopFiveQuestionLeftMenuComponent_14_4.context;
        }
        if (((token === import22.ProfileService) && (17 === requestNodeIndex))) {
            return this._ProfileService_17_3;
        }
        if (((token === import21.TopFiveUserComponent) && (17 === requestNodeIndex))) {
            return this._TopFiveUserComponent_17_4.context;
        }
        if (((token === import38.RouterLinkWithHref) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._RouterLinkWithHref_36_3.context;
        }
        if (((token === import38.RouterLinkWithHref) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._RouterLinkWithHref_40_3.context;
        }
        if (((token === import33.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import39.NgIf) && (43 === requestNodeIndex))) {
            return this._NgIf_43_6.context;
        }
        if (((token === import33.TemplateRef) && (45 === requestNodeIndex))) {
            return this._TemplateRef_45_5;
        }
        if (((token === import39.NgIf) && (45 === requestNodeIndex))) {
            return this._NgIf_45_6.context;
        }
        if (((token === import33.TemplateRef) && (47 === requestNodeIndex))) {
            return this._TemplateRef_47_5;
        }
        if (((token === import39.NgIf) && (47 === requestNodeIndex))) {
            return this._NgIf_47_6.context;
        }
        if (((token === import33.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import39.NgIf) && (49 === requestNodeIndex))) {
            return this._NgIf_49_6.context;
        }
        if (((token === import5.QuestionAnswerService) && (53 === requestNodeIndex))) {
            return this._QuestionAnswerService_53_3;
        }
        if (((token === import6.CategoryService) && (53 === requestNodeIndex))) {
            return this._CategoryService_53_4;
        }
        if (((token === import27.CategoryMenuPanelComponent) && (53 === requestNodeIndex))) {
            return this._CategoryMenuPanelComponent_53_5.context;
        }
        if (((token === import33.TemplateRef) && (58 === requestNodeIndex))) {
            return this._TemplateRef_58_5;
        }
        if (((token === import39.NgIf) && (58 === requestNodeIndex))) {
            return this._NgIf_58_6.context;
        }
        if (((token === import33.TemplateRef) && (69 === requestNodeIndex))) {
            return this._TemplateRef_69_5;
        }
        if (((token === import39.NgIf) && (69 === requestNodeIndex))) {
            return this._NgIf_69_6.context;
        }
        if (((token === import33.TemplateRef) && (71 === requestNodeIndex))) {
            return this._TemplateRef_71_5;
        }
        if (((token === import39.NgIf) && (71 === requestNodeIndex))) {
            return this._NgIf_71_6.context;
        }
        if (((token === import33.TemplateRef) && (97 === requestNodeIndex))) {
            return this._TemplateRef_97_5;
        }
        if (((token === import39.NgIf) && (97 === requestNodeIndex))) {
            return this._NgIf_97_6.context;
        }
        if (((token === import40.InfiniteScroll) && ((145 <= requestNodeIndex) && (requestNodeIndex <= 146)))) {
            return this._InfiniteScroll_145_3.context;
        }
        if (((token === import33.TemplateRef) && (148 === requestNodeIndex))) {
            return this._TemplateRef_148_5;
        }
        if (((token === import41.NgFor) && (148 === requestNodeIndex))) {
            return this._NgFor_148_6.context;
        }
        return notFoundResult;
    };
    View_QuestionBodyComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LevelComponent_12_4.ngDoCheck(this, this._el_12, throwOnChange);
        this._TopFiveQuestionLeftMenuComponent_14_4.ngDoCheck(this, this._el_14, throwOnChange);
        this._TopFiveUserComponent_17_4.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_36_0_0 = '/';
        this._RouterLinkWithHref_36_3.check_routerLink(currVal_36_0_0, throwOnChange, false);
        this._RouterLinkWithHref_36_3.ngDoCheck(this, this._el_36, throwOnChange);
        var currVal_40_0_0 = '/question/home/1';
        this._RouterLinkWithHref_40_3.check_routerLink(currVal_40_0_0, throwOnChange, false);
        this._RouterLinkWithHref_40_3.ngDoCheck(this, this._el_40, throwOnChange);
        var currVal_43_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_43_6.check_ngIf(currVal_43_0_0, throwOnChange, false);
        this._NgIf_43_6.ngDoCheck(this, this._anchor_43, throwOnChange);
        var currVal_45_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_45_6.check_ngIf(currVal_45_0_0, throwOnChange, false);
        this._NgIf_45_6.ngDoCheck(this, this._anchor_45, throwOnChange);
        var currVal_47_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_47_6.check_ngIf(currVal_47_0_0, throwOnChange, false);
        this._NgIf_47_6.ngDoCheck(this, this._anchor_47, throwOnChange);
        var currVal_49_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_49_6.check_ngIf(currVal_49_0_0, throwOnChange, false);
        this._NgIf_49_6.ngDoCheck(this, this._anchor_49, throwOnChange);
        var currVal_53_0_0 = this.context.categoryId;
        this._CategoryMenuPanelComponent_53_5.check_caegoryId(currVal_53_0_0, throwOnChange, false);
        this._CategoryMenuPanelComponent_53_5.ngDoCheck(this, this._el_53, throwOnChange);
        var currVal_58_0_0 = this.context.loader.isLoading;
        this._NgIf_58_6.check_ngIf(currVal_58_0_0, throwOnChange, false);
        this._NgIf_58_6.ngDoCheck(this, this._anchor_58, throwOnChange);
        var currVal_69_0_0 = this.context.topicName;
        this._NgIf_69_6.check_ngIf(currVal_69_0_0, throwOnChange, false);
        this._NgIf_69_6.ngDoCheck(this, this._anchor_69, throwOnChange);
        var currVal_71_0_0 = this.context.levelName;
        this._NgIf_71_6.check_ngIf(currVal_71_0_0, throwOnChange, false);
        this._NgIf_71_6.ngDoCheck(this, this._anchor_71, throwOnChange);
        var currVal_97_0_0 = (((this.context.topFiveTopics == null) ? null : this.context.topFiveTopics.length) != 0);
        this._NgIf_97_6.check_ngIf(currVal_97_0_0, throwOnChange, false);
        this._NgIf_97_6.ngDoCheck(this, this._anchor_97, throwOnChange);
        var currVal_145_0_0 = this.context.scrollDistance;
        this._InfiniteScroll_145_3.check__distanceDown(currVal_145_0_0, throwOnChange, false);
        var currVal_145_0_1 = this.context.throttle;
        this._InfiniteScroll_145_3.check__throttle(currVal_145_0_1, throwOnChange, false);
        this._InfiniteScroll_145_3.ngDoCheck(this, this._el_145, throwOnChange);
        var currVal_148_0_0 = this.context.questions;
        this._NgFor_148_6.check_ngForOf(currVal_148_0_0, throwOnChange, false);
        this._NgFor_148_6.ngDoCheck(this, this._anchor_148, throwOnChange);
        this._vc_43.detectChangesInNestedViews(throwOnChange);
        this._vc_45.detectChangesInNestedViews(throwOnChange);
        this._vc_47.detectChangesInNestedViews(throwOnChange);
        this._vc_49.detectChangesInNestedViews(throwOnChange);
        this._vc_58.detectChangesInNestedViews(throwOnChange);
        this._vc_69.detectChangesInNestedViews(throwOnChange);
        this._vc_71.detectChangesInNestedViews(throwOnChange);
        this._vc_97.detectChangesInNestedViews(throwOnChange);
        this._vc_148.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_36_3.checkHost(this, this, this._el_36, throwOnChange);
        this._RouterLinkWithHref_40_3.checkHost(this, this, this._el_40, throwOnChange);
        var currVal_197 = import3.inlineInterpolate(1, '', ((this.context.categorySelected == null) ? null : this.context.categorySelected.image), '');
        if (import3.checkBinding(throwOnChange, this._expr_197, currVal_197)) {
            this.renderer.setElementProperty(this._el_64, 'src', this.viewUtils.sanitizer.sanitize(import42.SecurityContext.URL, currVal_197));
            this._expr_197 = currVal_197;
        }
        var currVal_198 = import3.inlineInterpolate(1, '\n                ', ((this.context.categorySelected == null) ? null : this.context.categorySelected.name), '\n            ');
        if (import3.checkBinding(throwOnChange, this._expr_198, currVal_198)) {
            this.renderer.setText(this._text_67, currVal_198);
            this._expr_198 = currVal_198;
        }
        var currVal_199 = import3.inlineInterpolate(1, '\n                ', ((this.context.totalCount == null) ? null : this.context.totalCount.totalFollowers), '\n            ');
        if (import3.checkBinding(throwOnChange, this._expr_199, currVal_199)) {
            this.renderer.setText(this._text_77, currVal_199);
            this._expr_199 = currVal_199;
        }
        var currVal_200 = import3.inlineInterpolate(1, '\n            ', ((this.context.categorySelected == null) ? null : this.context.categorySelected.description), '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_200, currVal_200)) {
            this.renderer.setText(this._text_90, currVal_200);
            this._expr_200 = currVal_200;
        }
        var currVal_201 = import3.inlineInterpolate(1, '\n                ', ((this.context.totalCount == null) ? null : this.context.totalCount.totalAnsweredQuestion), ' Preguntas ');
        if (import3.checkBinding(throwOnChange, this._expr_201, currVal_201)) {
            this.renderer.setText(this._text_105, currVal_201);
            this._expr_201 = currVal_201;
        }
        var currVal_202 = import3.inlineInterpolate(1, '\n                ', ((this.context.totalCount == null) ? null : this.context.totalCount.totalUnAnsweredQuestion), ' Sin responder ');
        if (import3.checkBinding(throwOnChange, this._expr_202, currVal_202)) {
            this.renderer.setText(this._text_109, currVal_202);
            this._expr_202 = currVal_202;
        }
        var currVal_203 = import3.inlineInterpolate(1, '', this.context.FilterParam, '');
        if (import3.checkBinding(throwOnChange, this._expr_203, currVal_203)) {
            this.renderer.setText(this._text_120, currVal_203);
            this._expr_203 = currVal_203;
        }
        this.compView_12.internalDetectChanges(throwOnChange);
        this.compView_14.internalDetectChanges(throwOnChange);
        this.compView_17.internalDetectChanges(throwOnChange);
        this.compView_53.internalDetectChanges(throwOnChange);
    };
    View_QuestionBodyComponent0.prototype.destroyInternal = function () {
        this._vc_43.destroyNestedViews();
        this._vc_45.destroyNestedViews();
        this._vc_47.destroyNestedViews();
        this._vc_49.destroyNestedViews();
        this._vc_58.destroyNestedViews();
        this._vc_69.destroyNestedViews();
        this._vc_71.destroyNestedViews();
        this._vc_97.destroyNestedViews();
        this._vc_148.destroyNestedViews();
        this.compView_12.destroy();
        this.compView_14.destroy();
        this.compView_17.destroy();
        this.compView_53.destroy();
        this._RouterLinkWithHref_36_3.ngOnDestroy();
        this._RouterLinkWithHref_40_3.ngOnDestroy();
        this._InfiniteScroll_145_3.ngOnDestroy();
    };
    View_QuestionBodyComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 43)) {
            return new View_QuestionBodyComponent1(this.viewUtils, this, 43, this._anchor_43, this._vc_43);
        }
        if ((nodeIndex == 45)) {
            return new View_QuestionBodyComponent2(this.viewUtils, this, 45, this._anchor_45, this._vc_45);
        }
        if ((nodeIndex == 47)) {
            return new View_QuestionBodyComponent3(this.viewUtils, this, 47, this._anchor_47, this._vc_47);
        }
        if ((nodeIndex == 49)) {
            return new View_QuestionBodyComponent4(this.viewUtils, this, 49, this._anchor_49, this._vc_49);
        }
        if ((nodeIndex == 58)) {
            return new View_QuestionBodyComponent5(this.viewUtils, this, 58, this._anchor_58, this._vc_58);
        }
        if ((nodeIndex == 69)) {
            return new View_QuestionBodyComponent6(this.viewUtils, this, 69, this._anchor_69, this._vc_69);
        }
        if ((nodeIndex == 71)) {
            return new View_QuestionBodyComponent7(this.viewUtils, this, 71, this._anchor_71, this._vc_71);
        }
        if ((nodeIndex == 97)) {
            return new View_QuestionBodyComponent8(this.viewUtils, this, 97, this._anchor_97, this._vc_97);
        }
        if ((nodeIndex == 148)) {
            return new View_QuestionBodyComponent12(this.viewUtils, this, 148, this._anchor_148, this._vc_148);
        }
        return null;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_36 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_36_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_40 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_40_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_86 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.addFollower(this.context.categorySelected.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_104 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.getQuestionsAnswered(this.context.categorySelected.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_108 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.getQuestionNotAnswered(this.context.categorySelected.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_130 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.GetLatestQuestionByDate(this.context.categorySelected.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_134 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.getbestquestionbytotallike(this.context.categorySelected.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_138 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.getmorequestionbyviewcount(this.context.categorySelected.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionBodyComponent0.prototype.handleEvent_145 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'scrolled')) {
            var pd_sub_0 = (this.context.onScrollDown() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionBodyComponent0;
}(import1.AppView));
export { View_QuestionBodyComponent0 };
var View_QuestionBodyComponent1 = (function (_super) {
    __extends(View_QuestionBodyComponent1, _super);
    function View_QuestionBodyComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent1, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, ' Perfil', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_QuestionBodyComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionBodyComponent1.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.gotoProfile() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionBodyComponent1;
}(import1.AppView));
var View_QuestionBodyComponent2 = (function (_super) {
    __extends(View_QuestionBodyComponent2, _super);
    function View_QuestionBodyComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent2, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signout'), null);
        this._text_2 = this.renderer.createText(this._el_1, ' Cerrar sesión ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_QuestionBodyComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent2;
}(import1.AppView));
var View_QuestionBodyComponent3 = (function (_super) {
    __extends(View_QuestionBodyComponent3, _super);
    function View_QuestionBodyComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent3, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent3.prototype.createInternal = function (rootSelector) {
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
    View_QuestionBodyComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent3;
}(import1.AppView));
var View_QuestionBodyComponent4 = (function (_super) {
    __extends(View_QuestionBodyComponent4, _super);
    function View_QuestionBodyComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent4, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent4.prototype.createInternal = function (rootSelector) {
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
    View_QuestionBodyComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent4;
}(import1.AppView));
var View_QuestionBodyComponent5 = (function (_super) {
    __extends(View_QuestionBodyComponent5, _super);
    function View_QuestionBodyComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent5, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'modal-overlay z-modal'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'loader'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_QuestionBodyComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent5;
}(import1.AppView));
var View_QuestionBodyComponent6 = (function (_super) {
    __extends(View_QuestionBodyComponent6, _super);
    function View_QuestionBodyComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionBodyComponent6, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import31.UNINITIALIZED;
        return _this;
    }
    View_QuestionBodyComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h2', new import3.InlineArray2(2, 'class', 'category-title'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_QuestionBodyComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '\n                . ', this.parentView.context.topicName, '\n            ');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_QuestionBodyComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent6;
}(import1.AppView));
var View_QuestionBodyComponent7 = (function (_super) {
    __extends(View_QuestionBodyComponent7, _super);
    function View_QuestionBodyComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionBodyComponent7, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import31.UNINITIALIZED;
        return _this;
    }
    View_QuestionBodyComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h2', new import3.InlineArray2(2, 'class', 'category-title'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_QuestionBodyComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '\n                . ', this.parentView.context.levelName, '\n            ');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_QuestionBodyComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent7;
}(import1.AppView));
var View_QuestionBodyComponent8 = (function (_super) {
    __extends(View_QuestionBodyComponent8, _super);
    function View_QuestionBodyComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent8, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import25.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import33.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import30.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import37.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'more-btn'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import25.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import33.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import26.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'more-btn'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_11 = new import25.ViewContainer(11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new import33.TemplateRef_(this, 11, this._anchor_11);
        this._NgIf_11_6 = new import26.Wrapper_NgIf(this._vc_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._text_13
        ]), null);
        return null;
    };
    View_QuestionBodyComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import41.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        if (((token === import33.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import39.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import33.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import39.NgIf) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        return notFoundResult;
    };
    View_QuestionBodyComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.topFiveTopics;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_6_0_0 = (this.parentView.context.showMoreTopic && (this.parentView.context.topics.length > 5));
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_11_0_0 = !this.parentView.context.showMoreTopic;
        this._NgIf_11_6.check_ngIf(currVal_11_0_0, throwOnChange, false);
        this._NgIf_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
    };
    View_QuestionBodyComponent8.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this._vc_11.destroyNestedViews();
    };
    View_QuestionBodyComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionBodyComponent8.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_QuestionBodyComponent9(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 6)) {
            return new View_QuestionBodyComponent10(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 11)) {
            return new View_QuestionBodyComponent11(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        return null;
    };
    return View_QuestionBodyComponent8;
}(import1.AppView));
var View_QuestionBodyComponent9 = (function (_super) {
    __extends(View_QuestionBodyComponent9, _super);
    function View_QuestionBodyComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionBodyComponent9, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_6 = import3.pureProxy4(function (p0, p1, p2, p3) {
            return [
                p0,
                p1,
                p2,
                p3
            ];
        });
        _this._expr_7 = import31.UNINITIALIZED;
        return _this;
    }
    View_QuestionBodyComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'tags'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_2_3 = new import24.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import14.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import15.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import32.LocationStrategy, this.parentView.parentView.parentIndex));
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_QuestionBodyComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import38.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3.context;
        }
        return notFoundResult;
    };
    View_QuestionBodyComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._arr_6('/question/home', ((this.context.$implicit == null) ? null : this.context.$implicit.categoryId), ((this.context.$implicit == null) ? null : this.context.$implicit.id), 0);
        this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0, throwOnChange, false);
        this._RouterLinkWithHref_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._RouterLinkWithHref_2_3.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, ' ', this.context.$implicit.topicName, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_QuestionBodyComponent9.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
    };
    View_QuestionBodyComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionBodyComponent9.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_QuestionBodyComponent9;
}(import1.AppView));
var View_QuestionBodyComponent10 = (function (_super) {
    __extends(View_QuestionBodyComponent10, _super);
    function View_QuestionBodyComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent10, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Ver más..', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_QuestionBodyComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionBodyComponent10.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.toggleShowMoreTopic() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionBodyComponent10;
}(import1.AppView));
var View_QuestionBodyComponent11 = (function (_super) {
    __extends(View_QuestionBodyComponent11, _super);
    function View_QuestionBodyComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent11, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Ocultar..', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_QuestionBodyComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionBodyComponent11.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.toggleShowMoreTopic() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionBodyComponent11;
}(import1.AppView));
var View_QuestionBodyComponent12 = (function (_super) {
    __extends(View_QuestionBodyComponent12, _super);
    function View_QuestionBodyComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionBodyComponent12, renderType_QuestionBodyComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionBodyComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'question-panel', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import44.View_QuestionPanelComponent0(this.viewUtils, this, 2, this._el_2);
        this._QuestionAnswerService_2_3 = new import5.QuestionAnswerService(this.parentView.parentView.injectorGet(import12.Http, this.parentView.parentIndex));
        this._QuestionPanelComponent_2_4 = new import44.Wrapper_QuestionPanelComponent(this.parentView.parentView.injectorGet(import45.ComponentFactoryResolver, this.parentView.parentIndex), this._QuestionAnswerService_2_3);
        this.compView_2.create(this._QuestionPanelComponent_2_4.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_QuestionBodyComponent12.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (2 === requestNodeIndex))) {
            return this._QuestionAnswerService_2_3;
        }
        if (((token === import43.QuestionPanelComponent) && (2 === requestNodeIndex))) {
            return this._QuestionPanelComponent_2_4.context;
        }
        return notFoundResult;
    };
    View_QuestionBodyComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._QuestionPanelComponent_2_4.check_question(currVal_2_0_0, throwOnChange, false);
        this._QuestionPanelComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_QuestionBodyComponent12.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_QuestionBodyComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionBodyComponent12;
}(import1.AppView));
