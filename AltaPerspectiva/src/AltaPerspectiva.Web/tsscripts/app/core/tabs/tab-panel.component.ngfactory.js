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
import * as import0 from './tab-panel.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question-answer.service';
import * as import6 from '../../services/resolve.services/question.resolver';
import * as import7 from '../../services/authentication.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/router/src/router';
import * as import14 from '../../services/communication.service';
import * as import15 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../../shared/left-menu/topfive-question-left-menu.component';
import * as import19 from '../../services/question.service';
import * as import20 from '../../shared/left-menu/topfive-question-left-menu.component.ngfactory';
import * as import21 from '../../shared/left-menu/topfive-topic.component';
import * as import22 from '../../shared/left-menu/topfive-topic.component.ngfactory';
import * as import23 from '../../shared/left-menu/category-left-menu.component';
import * as import24 from '../../services/category.service';
import * as import25 from '../../shared/left-menu/category-left-menu.component.ngfactory';
import * as import26 from '../../shared/left-menu/topfive-user.component';
import * as import27 from '../../services/profile.service';
import * as import28 from '../../shared/left-menu/topfive-user.component.ngfactory';
import * as import29 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import30 from '@angular/common/src/location/location_strategy';
import * as import31 from '@angular/core/src/linker/template_ref';
import * as import32 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import33 from '@angular/router/src/directives/router_link';
import * as import34 from '@angular/common/src/directives/ng_if';
import * as import35 from '@angular/common/src/directives/ng_for';
import * as import36 from '../../shared/question-panel/question-panel.component';
import * as import37 from '../../shared/question-panel/question-panel.component.ngfactory';
import * as import38 from '@angular/core/src/linker/component_factory_resolver';
var Wrapper_TabPanelComponent = (function () {
    function Wrapper_TabPanelComponent(p0, p1, p2, p3, p4, p5) {
        this._changed = false;
        this.context = new import0.TabPanelComponent(p0, p1, p2, p3, p4, p5);
    }
    Wrapper_TabPanelComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TabPanelComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_TabPanelComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TabPanelComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TabPanelComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TabPanelComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TabPanelComponent;
}());
export { Wrapper_TabPanelComponent };
var renderType_TabPanelComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_TabPanelComponent_Host0 = (function (_super) {
    __extends(View_TabPanelComponent_Host0, _super);
    function View_TabPanelComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_TabPanelComponent_Host0, renderType_TabPanelComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_TabPanelComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ap-tab-panel', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TabPanelComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionResolver_0_4 = new import6.QuestionResolver(this.injectorGet(import11.Http, this.parentIndex));
        this._AuthenticationService_0_5 = new import7.AuthenticationService(this.injectorGet(import11.Http, this.parentIndex));
        this._TabPanelComponent_0_6 = new Wrapper_TabPanelComponent(this.injectorGet(import12.ActivatedRoute, this.parentIndex), this.injectorGet(import13.Router, this.parentIndex), this._QuestionAnswerService_0_3, this._QuestionResolver_0_4, this._AuthenticationService_0_5, this.injectorGet(import14.CommunicationService, this.parentIndex));
        this.compView_0.create(this._TabPanelComponent_0_6.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._TabPanelComponent_0_6.context);
    };
    View_TabPanelComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import6.QuestionResolver) && (0 === requestNodeIndex))) {
            return this._QuestionResolver_0_4;
        }
        if (((token === import7.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_5;
        }
        if (((token === import0.TabPanelComponent) && (0 === requestNodeIndex))) {
            return this._TabPanelComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_TabPanelComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TabPanelComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TabPanelComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._TabPanelComponent_0_6.ngOnDestroy();
    };
    View_TabPanelComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabPanelComponent_Host0;
}(import1.AppView));
export var TabPanelComponentNgFactory = new import10.ComponentFactory('ap-tab-panel', View_TabPanelComponent_Host0, import0.TabPanelComponent);
var styles_TabPanelComponent = ['.center-width[_ngcontent-%COMP%] {\n        position: relative;\n    }'];
var renderType_TabPanelComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_TabPanelComponent, {});
var View_TabPanelComponent0 = (function (_super) {
    __extends(View_TabPanelComponent0, _super);
    function View_TabPanelComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_TabPanelComponent0, renderType_TabPanelComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_TabPanelComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray4(4, 'class', 'left-panel category-panel-xs', 'id', 'toggleMenu'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'menu-container visible-xs'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'cloe-button'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, ' ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'i', new import3.InlineArray2(2, 'class', 'fa fa-arrow-left'), null);
        this._text_12 = this.renderer.createText(this._el_9, ' ', null);
        this._text_13 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_14 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_5, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'li', new import3.InlineArray2(2, 'class', ''), null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_18_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import30.LocationStrategy, this.parentIndex));
        this._text_19 = this.renderer.createText(this._el_18, 'Alta Perspectiva', null);
        this._text_20 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_15, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_22_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import30.LocationStrategy, this.parentIndex));
        this._text_23 = this.renderer.createText(this._el_22, 'Preguntas', null);
        this._text_24 = this.renderer.createText(this._el_15, '\n                ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_15, null);
        this._vc_25 = new import16.ViewContainer(25, 15, this, this._anchor_25);
        this._TemplateRef_25_5 = new import31.TemplateRef_(this, 25, this._anchor_25);
        this._NgIf_25_6 = new import17.Wrapper_NgIf(this._vc_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_15, '\n                ', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_15, null);
        this._vc_27 = new import16.ViewContainer(27, 15, this, this._anchor_27);
        this._TemplateRef_27_5 = new import31.TemplateRef_(this, 27, this._anchor_27);
        this._NgIf_27_6 = new import17.Wrapper_NgIf(this._vc_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_15, '\n\n                ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_15, null);
        this._vc_29 = new import16.ViewContainer(29, 15, this, this._anchor_29);
        this._TemplateRef_29_5 = new import31.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import17.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_15, '\n                ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_15, null);
        this._vc_31 = new import16.ViewContainer(31, 15, this, this._anchor_31);
        this._TemplateRef_31_5 = new import31.TemplateRef_(this, 31, this._anchor_31);
        this._NgIf_31_6 = new import17.Wrapper_NgIf(this._vc_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_15, '\n            ', null);
        this._text_33 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'id', 'leftPanel'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n            ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'topfive-question-left-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_37 = new import20.View_TopFiveQuestionLeftMenuComponent0(this.viewUtils, this, 37, this._el_37);
        this._QuestionService_37_3 = new import19.QuestionService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._TopFiveQuestionLeftMenuComponent_37_4 = new import20.Wrapper_TopFiveQuestionLeftMenuComponent(this._QuestionService_37_3, this.parentView.injectorGet(import14.CommunicationService, this.parentIndex));
        this._text_38 = this.renderer.createText(null, ' ', null);
        this.compView_37.create(this._TopFiveQuestionLeftMenuComponent_37_4.context);
        this._text_39 = this.renderer.createText(this._el_35, '\n            ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_35, 'topfive-topic', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_40 = new import22.View_TopFiveTopicComponent0(this.viewUtils, this, 40, this._el_40);
        this._QuestionService_40_3 = new import19.QuestionService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._TopFiveTopicComponent_40_4 = new import22.Wrapper_TopFiveTopicComponent(this._QuestionService_40_3, this.parentView.injectorGet(import14.CommunicationService, this.parentIndex));
        this.compView_40.create(this._TopFiveTopicComponent_40_4.context);
        this._text_41 = this.renderer.createText(this._el_35, '\n            ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_35, 'category-left-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_42 = new import25.View_CategoryMenuPanelComponent0(this.viewUtils, this, 42, this._el_42);
        this._QuestionAnswerService_42_3 = new import5.QuestionAnswerService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._CategoryService_42_4 = new import24.CategoryService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._CategoryMenuPanelComponent_42_5 = new import25.Wrapper_CategoryMenuPanelComponent(this._QuestionAnswerService_42_3, this._CategoryService_42_4, this.parentView.injectorGet(import14.CommunicationService, this.parentIndex));
        this.compView_42.create(this._CategoryMenuPanelComponent_42_5.context);
        this._text_43 = this.renderer.createText(this._el_35, '\n        ', null);
        this._text_44 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_45 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'right-panel hidden-xs'), null);
        this._text_47 = this.renderer.createText(this._el_46, '\n        ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_46, 'topfive-user', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_48 = new import28.View_TopFiveUserComponent0(this.viewUtils, this, 48, this._el_48);
        this._ProfileService_48_3 = new import27.ProfileService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._TopFiveUserComponent_48_4 = new import28.Wrapper_TopFiveUserComponent(this._ProfileService_48_3, this.parentView.injectorGet(import14.CommunicationService, this.parentIndex), this.parentView.injectorGet(import13.Router, this.parentIndex));
        this.compView_48.create(this._TopFiveUserComponent_48_4.context);
        this._text_49 = this.renderer.createText(this._el_46, '\n    ', null);
        this._text_50 = this.renderer.createText(this._el_1, '\n\n    ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'center-width center-fix'), null);
        this._text_52 = this.renderer.createText(this._el_51, '\n        ', null);
        this._anchor_53 = this.renderer.createTemplateAnchor(this._el_51, null);
        this._vc_53 = new import16.ViewContainer(53, 51, this, this._anchor_53);
        this._TemplateRef_53_5 = new import31.TemplateRef_(this, 53, this._anchor_53);
        this._NgIf_53_6 = new import17.Wrapper_NgIf(this._vc_53.vcRef, this._TemplateRef_53_5);
        this._text_54 = this.renderer.createText(this._el_51, '\n        ', null);
        this._anchor_55 = this.renderer.createTemplateAnchor(this._el_51, null);
        this._vc_55 = new import16.ViewContainer(55, 51, this, this._anchor_55);
        this._TemplateRef_55_5 = new import31.TemplateRef_(this, 55, this._anchor_55);
        this._NgFor_55_6 = new import29.Wrapper_NgFor(this._vc_55.vcRef, this._TemplateRef_55_5, this.parentView.injectorGet(import32.IterableDiffers, this.parentIndex), this.ref);
        this._text_56 = this.renderer.createText(this._el_51, '\n        ', null);
        this._text_57 = this.renderer.createText(this._el_51, '\n        ', null);
        this._el_58 = import3.createRenderElement(this.renderer, this._el_51, 'div', new import3.InlineArray4(4, 'class', 'hidden-xs', 'style', 'height:200px;position:relative;'), null);
        this._text_59 = this.renderer.createText(this._el_51, '\n    ', null);
        this._text_60 = this.renderer.createText(this._el_1, '\n', null);
        this._text_61 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_9));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_22, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_22));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._anchor_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._anchor_53,
            this._text_54,
            this._anchor_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_TabPanelComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLinkWithHref_18_3.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._RouterLinkWithHref_22_3.context;
        }
        if (((token === import31.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import34.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        if (((token === import31.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import34.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6.context;
        }
        if (((token === import31.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import34.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import31.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import34.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import19.QuestionService) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._QuestionService_37_3;
        }
        if (((token === import18.TopFiveQuestionLeftMenuComponent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._TopFiveQuestionLeftMenuComponent_37_4.context;
        }
        if (((token === import19.QuestionService) && (40 === requestNodeIndex))) {
            return this._QuestionService_40_3;
        }
        if (((token === import21.TopFiveTopicComponent) && (40 === requestNodeIndex))) {
            return this._TopFiveTopicComponent_40_4.context;
        }
        if (((token === import5.QuestionAnswerService) && (42 === requestNodeIndex))) {
            return this._QuestionAnswerService_42_3;
        }
        if (((token === import24.CategoryService) && (42 === requestNodeIndex))) {
            return this._CategoryService_42_4;
        }
        if (((token === import23.CategoryMenuPanelComponent) && (42 === requestNodeIndex))) {
            return this._CategoryMenuPanelComponent_42_5.context;
        }
        if (((token === import27.ProfileService) && (48 === requestNodeIndex))) {
            return this._ProfileService_48_3;
        }
        if (((token === import26.TopFiveUserComponent) && (48 === requestNodeIndex))) {
            return this._TopFiveUserComponent_48_4.context;
        }
        if (((token === import31.TemplateRef) && (53 === requestNodeIndex))) {
            return this._TemplateRef_53_5;
        }
        if (((token === import34.NgIf) && (53 === requestNodeIndex))) {
            return this._NgIf_53_6.context;
        }
        if (((token === import31.TemplateRef) && (55 === requestNodeIndex))) {
            return this._TemplateRef_55_5;
        }
        if (((token === import35.NgFor) && (55 === requestNodeIndex))) {
            return this._NgFor_55_6.context;
        }
        return notFoundResult;
    };
    View_TabPanelComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = '/';
        this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLinkWithHref_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_22_0_0 = '/question/home/1';
        this._RouterLinkWithHref_22_3.check_routerLink(currVal_22_0_0, throwOnChange, false);
        this._RouterLinkWithHref_22_3.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_25_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        var currVal_27_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_27_6.check_ngIf(currVal_27_0_0, throwOnChange, false);
        this._NgIf_27_6.ngDoCheck(this, this._anchor_27, throwOnChange);
        var currVal_29_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        var currVal_31_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        this._TopFiveQuestionLeftMenuComponent_37_4.ngDoCheck(this, this._el_37, throwOnChange);
        var currVal_40_0_0 = true;
        this._TopFiveTopicComponent_40_4.check_isHomePage(currVal_40_0_0, throwOnChange, false);
        this._TopFiveTopicComponent_40_4.ngDoCheck(this, this._el_40, throwOnChange);
        var currVal_42_0_0 = this.context.id;
        this._CategoryMenuPanelComponent_42_5.check_caegoryId(currVal_42_0_0, throwOnChange, false);
        this._CategoryMenuPanelComponent_42_5.ngDoCheck(this, this._el_42, throwOnChange);
        this._TopFiveUserComponent_48_4.ngDoCheck(this, this._el_48, throwOnChange);
        var currVal_53_0_0 = this.context.isLoading;
        this._NgIf_53_6.check_ngIf(currVal_53_0_0, throwOnChange, false);
        this._NgIf_53_6.ngDoCheck(this, this._anchor_53, throwOnChange);
        var currVal_55_0_0 = this.context.questions;
        this._NgFor_55_6.check_ngForOf(currVal_55_0_0, throwOnChange, false);
        this._NgFor_55_6.ngDoCheck(this, this._anchor_55, throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._vc_27.detectChangesInNestedViews(throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_53.detectChangesInNestedViews(throwOnChange);
        this._vc_55.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_18_3.checkHost(this, this, this._el_18, throwOnChange);
        this._RouterLinkWithHref_22_3.checkHost(this, this, this._el_22, throwOnChange);
        this.compView_37.internalDetectChanges(throwOnChange);
        this.compView_40.internalDetectChanges(throwOnChange);
        this.compView_42.internalDetectChanges(throwOnChange);
        this.compView_48.internalDetectChanges(throwOnChange);
    };
    View_TabPanelComponent0.prototype.destroyInternal = function () {
        this._vc_25.destroyNestedViews();
        this._vc_27.destroyNestedViews();
        this._vc_29.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_53.destroyNestedViews();
        this._vc_55.destroyNestedViews();
        this.compView_37.destroy();
        this.compView_40.destroy();
        this.compView_42.destroy();
        this.compView_48.destroy();
        this._RouterLinkWithHref_18_3.ngOnDestroy();
        this._RouterLinkWithHref_22_3.ngOnDestroy();
    };
    View_TabPanelComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 25)) {
            return new View_TabPanelComponent1(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        if ((nodeIndex == 27)) {
            return new View_TabPanelComponent2(this.viewUtils, this, 27, this._anchor_27, this._vc_27);
        }
        if ((nodeIndex == 29)) {
            return new View_TabPanelComponent3(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        if ((nodeIndex == 31)) {
            return new View_TabPanelComponent4(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        if ((nodeIndex == 53)) {
            return new View_TabPanelComponent5(this.viewUtils, this, 53, this._anchor_53, this._vc_53);
        }
        if ((nodeIndex == 55)) {
            return new View_TabPanelComponent6(this.viewUtils, this, 55, this._anchor_55, this._vc_55);
        }
        return null;
    };
    View_TabPanelComponent0.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TabPanelComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TabPanelComponent0.prototype.handleEvent_22 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_22_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_TabPanelComponent0;
}(import1.AppView));
export { View_TabPanelComponent0 };
var View_TabPanelComponent1 = (function (_super) {
    __extends(View_TabPanelComponent1, _super);
    function View_TabPanelComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TabPanelComponent1, renderType_TabPanelComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TabPanelComponent1.prototype.createInternal = function (rootSelector) {
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
    View_TabPanelComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TabPanelComponent1.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.gotoProfile() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TabPanelComponent1;
}(import1.AppView));
var View_TabPanelComponent2 = (function (_super) {
    __extends(View_TabPanelComponent2, _super);
    function View_TabPanelComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TabPanelComponent2, renderType_TabPanelComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TabPanelComponent2.prototype.createInternal = function (rootSelector) {
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
    View_TabPanelComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabPanelComponent2;
}(import1.AppView));
var View_TabPanelComponent3 = (function (_super) {
    __extends(View_TabPanelComponent3, _super);
    function View_TabPanelComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TabPanelComponent3, renderType_TabPanelComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TabPanelComponent3.prototype.createInternal = function (rootSelector) {
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
    View_TabPanelComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabPanelComponent3;
}(import1.AppView));
var View_TabPanelComponent4 = (function (_super) {
    __extends(View_TabPanelComponent4, _super);
    function View_TabPanelComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TabPanelComponent4, renderType_TabPanelComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TabPanelComponent4.prototype.createInternal = function (rootSelector) {
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
    View_TabPanelComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabPanelComponent4;
}(import1.AppView));
var View_TabPanelComponent5 = (function (_super) {
    __extends(View_TabPanelComponent5, _super);
    function View_TabPanelComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TabPanelComponent5, renderType_TabPanelComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TabPanelComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'modal-overlay z-modal'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'loader'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_TabPanelComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabPanelComponent5;
}(import1.AppView));
var View_TabPanelComponent6 = (function (_super) {
    __extends(View_TabPanelComponent6, _super);
    function View_TabPanelComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_TabPanelComponent6, renderType_TabPanelComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_TabPanelComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'tab'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'question-panel', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import37.View_QuestionPanelComponent0(this.viewUtils, this, 2, this._el_2);
        this._QuestionAnswerService_2_3 = new import5.QuestionAnswerService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._QuestionPanelComponent_2_4 = new import37.Wrapper_QuestionPanelComponent(this.parentView.parentView.injectorGet(import38.ComponentFactoryResolver, this.parentView.parentIndex), this._QuestionAnswerService_2_3);
        this.compView_2.create(this._QuestionPanelComponent_2_4.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_TabPanelComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (2 === requestNodeIndex))) {
            return this._QuestionAnswerService_2_3;
        }
        if (((token === import36.QuestionPanelComponent) && (2 === requestNodeIndex))) {
            return this._QuestionPanelComponent_2_4.context;
        }
        return notFoundResult;
    };
    View_TabPanelComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._QuestionPanelComponent_2_4.check_question(currVal_2_0_0, throwOnChange, false);
        this._QuestionPanelComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_TabPanelComponent6.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_TabPanelComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabPanelComponent6;
}(import1.AppView));
