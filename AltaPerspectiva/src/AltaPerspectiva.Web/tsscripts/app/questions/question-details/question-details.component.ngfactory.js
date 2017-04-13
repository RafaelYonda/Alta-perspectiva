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
import * as import0 from './question-details.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/resolve.services/question.resolver';
import * as import6 from '../../services/question-answer.service';
import * as import7 from '../../services/authentication.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '../../shared/left-menu/related-question-left-menu.component';
import * as import20 from '../../services/category.service';
import * as import21 from '../../shared/left-menu/related-question-left-menu.component.ngfactory';
import * as import22 from '../../shared/left-menu/related-topic.component';
import * as import23 from '../../services/question.service';
import * as import24 from '../../shared/left-menu/related-topic.component.ngfactory';
import * as import25 from '../../shared/left-menu/category-left-menu.component';
import * as import26 from '../../shared/left-menu/category-left-menu.component.ngfactory';
import * as import27 from '@angular/common/src/location/location_strategy';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '../../services/communication.service';
import * as import30 from '@angular/router/src/directives/router_link';
import * as import31 from '@angular/common/src/directives/ng_if';
import * as import32 from '../../shared/question-header/question-header.component';
import * as import33 from '../../shared/question-header/question-header.component.ngfactory';
import * as import34 from '../../shared/user-info/user-info.component';
import * as import35 from '../../services/profile.service';
import * as import36 from '../../shared/user-info/user-info.component.ngfactory';
import * as import37 from '../../shared/status/status.component';
import * as import38 from '../../services/status.service';
import * as import39 from '../../shared/status/status.component.ngfactory';
import * as import40 from '../../shared/comment/comment.component';
import * as import41 from '../../services/comment.service';
import * as import42 from '../../shared/comment/comment.component.ngfactory';
import * as import43 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import44 from '@angular/core/src/change_detection/change_detection_util';
import * as import45 from 'ng2-toastr/src/toast-manager';
import * as import46 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import47 from '@angular/common/src/directives/ng_for';
import * as import48 from '@angular/core/src/security';
import * as import49 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import50 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import51 from '@angular/core/src/linker/element_ref';
import * as import52 from '@angular/common/src/directives/ng_class';
import * as import53 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import54 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import55 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import56 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import57 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import58 from '@angular/forms/src/directives/default_value_accessor';
import * as import59 from '@angular/forms/src/directives/validators';
import * as import60 from '@angular/forms/src/validators';
import * as import61 from '@angular/forms/src/directives/control_value_accessor';
import * as import62 from '@angular/forms/src/directives/ng_model';
import * as import63 from '@angular/forms/src/directives/ng_control';
import * as import64 from '@angular/forms/src/directives/ng_control_status';
import * as import65 from '@angular/forms/src/directives/ng_form';
import * as import66 from '@angular/forms/src/directives/control_container';
var Wrapper_QuestionDetailComponent = (function () {
    function Wrapper_QuestionDetailComponent(p0, p1, p2, p3, p4, p5) {
        this._changed = false;
        this.context = new import0.QuestionDetailComponent(p0, p1, p2, p3, p4, p5);
    }
    Wrapper_QuestionDetailComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionDetailComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionDetailComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_QuestionDetailComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionDetailComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionDetailComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionDetailComponent;
}());
export { Wrapper_QuestionDetailComponent };
var renderType_QuestionDetailComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_QuestionDetailComponent_Host0 = (function (_super) {
    __extends(View_QuestionDetailComponent_Host0, _super);
    function View_QuestionDetailComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionDetailComponent_Host0, renderType_QuestionDetailComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionDetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'question-details', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_QuestionDetailComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionResolver_0_3 = new import5.QuestionResolver(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionAnswerService_0_4 = new import6.QuestionAnswerService(this.injectorGet(import11.Http, this.parentIndex));
        this._AuthenticationService_0_5 = new import7.AuthenticationService(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionDetailComponent_0_6 = new Wrapper_QuestionDetailComponent(this.injectorGet(import12.Router, this.parentIndex), this.injectorGet(import13.ActivatedRoute, this.parentIndex), this._QuestionResolver_0_3, this._QuestionAnswerService_0_4, this._AuthenticationService_0_5, this.injectorGet(import14.ComponentFactoryResolver, this.parentIndex));
        this.compView_0.create(this._QuestionDetailComponent_0_6.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._QuestionDetailComponent_0_6.context);
    };
    View_QuestionDetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionResolver) && (0 === requestNodeIndex))) {
            return this._QuestionResolver_0_3;
        }
        if (((token === import6.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_4;
        }
        if (((token === import7.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_5;
        }
        if (((token === import0.QuestionDetailComponent) && (0 === requestNodeIndex))) {
            return this._QuestionDetailComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_QuestionDetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionDetailComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionDetailComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_QuestionDetailComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionDetailComponent_Host0;
}(import1.AppView));
export var QuestionDetailComponentNgFactory = new import10.ComponentFactory('question-details', View_QuestionDetailComponent_Host0, import0.QuestionDetailComponent);
var styles_QuestionDetailComponent = ['.disabledFollowingImg[_ngcontent-%COMP%] {\n        height: 25px;\n        opacity: .1;\n    }\n\n    .enableFollowingImg[_ngcontent-%COMP%] {\n        height: 25px;\n        opacity: 1;\n    }\n\n        .enableFollowingImg[_ngcontent-%COMP%]:hover {\n            height: 30px;\n        }\n\n    .filter-panel[_ngcontent-%COMP%] {\n        margin-left: 2px;\n        margin-right: 15px;\n    }'];
var renderType_QuestionDetailComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_QuestionDetailComponent, {});
var View_QuestionDetailComponent0 = (function (_super) {
    __extends(View_QuestionDetailComponent0, _super);
    function View_QuestionDetailComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionDetailComponent0, renderType_QuestionDetailComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionDetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_answerAnchor_0 = new import15.QueryList();
        this._viewQuery_questionReport_1 = new import15.QueryList();
        this._viewQuery_logginAnchor_2 = new import15.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_1 = new import16.ViewContainer(1, null, this, this._el_1);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_3 = new import16.ViewContainer(3, null, this, this._el_3);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_5 = new import16.ViewContainer(5, null, this, this._el_5);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_7 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'left-panel category-panel-xs', 'id', 'toggleMenu'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'menu-container visible-xs'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'cloe-button'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, ' ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'i', new import3.InlineArray2(2, 'class', 'fa fa-arrow-left'), null);
        this._text_16 = this.renderer.createText(this._el_13, ' ', null);
        this._text_17 = this.renderer.createText(this._el_11, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_9, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'li', new import3.InlineArray2(2, 'class', ''), null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_22_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import27.LocationStrategy, this.parentIndex));
        this._text_23 = this.renderer.createText(this._el_22, 'Alta Perspectiva', null);
        this._text_24 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_19, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_26_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import27.LocationStrategy, this.parentIndex));
        this._text_27 = this.renderer.createText(this._el_26, 'Preguntas', null);
        this._text_28 = this.renderer.createText(this._el_19, '\n            ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_29 = new import16.ViewContainer(29, 19, this, this._anchor_29);
        this._TemplateRef_29_5 = new import28.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import18.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_19, '\n            ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_31 = new import16.ViewContainer(31, 19, this, this._anchor_31);
        this._TemplateRef_31_5 = new import28.TemplateRef_(this, 31, this._anchor_31);
        this._NgIf_31_6 = new import18.Wrapper_NgIf(this._vc_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_19, '\n            ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_33 = new import16.ViewContainer(33, 19, this, this._anchor_33);
        this._TemplateRef_33_5 = new import28.TemplateRef_(this, 33, this._anchor_33);
        this._NgIf_33_6 = new import18.Wrapper_NgIf(this._vc_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_19, '\n            ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_35 = new import16.ViewContainer(35, 19, this, this._anchor_35);
        this._TemplateRef_35_5 = new import28.TemplateRef_(this, 35, this._anchor_35);
        this._NgIf_35_6 = new import18.Wrapper_NgIf(this._vc_35.vcRef, this._TemplateRef_35_5);
        this._text_36 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_7, 'related-question-left-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_39 = new import21.View_RelatedQuestionMenu0(this.viewUtils, this, 39, this._el_39);
        this._QuestionAnswerService_39_3 = new import6.QuestionAnswerService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._CategoryService_39_4 = new import20.CategoryService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._RelatedQuestionMenu_39_5 = new import21.Wrapper_RelatedQuestionMenu(this._QuestionAnswerService_39_3, this._CategoryService_39_4, this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import29.CommunicationService, this.parentIndex));
        this.compView_39.create(this._RelatedQuestionMenu_39_5.context);
        this._text_40 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_7, 'related-topic', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_41 = new import24.View_RelatedTopicComponent0(this.viewUtils, this, 41, this._el_41);
        this._QuestionService_41_3 = new import23.QuestionService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._RelatedTopicComponent_41_4 = new import24.Wrapper_RelatedTopicComponent(this._QuestionService_41_3, this.parentView.injectorGet(import29.CommunicationService, this.parentIndex));
        this.compView_41.create(this._RelatedTopicComponent_41_4.context);
        this._text_42 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_7, 'category-left-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_43 = new import26.View_CategoryMenuPanelComponent0(this.viewUtils, this, 43, this._el_43);
        this._QuestionAnswerService_43_3 = new import6.QuestionAnswerService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._CategoryService_43_4 = new import20.CategoryService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._CategoryMenuPanelComponent_43_5 = new import26.Wrapper_CategoryMenuPanelComponent(this._QuestionAnswerService_43_3, this._CategoryService_43_4, this.parentView.injectorGet(import29.CommunicationService, this.parentIndex));
        this.compView_43.create(this._CategoryMenuPanelComponent_43_5.context);
        this._text_44 = this.renderer.createText(this._el_7, '\n', null);
        this._text_45 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_46 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_47 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_47 = new import16.ViewContainer(47, null, this, this._anchor_47);
        this._TemplateRef_47_5 = new import28.TemplateRef_(this, 47, this._anchor_47);
        this._NgIf_47_6 = new import18.Wrapper_NgIf(this._vc_47.vcRef, this._TemplateRef_47_5);
        this._text_48 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_49 = new import16.ViewContainer(49, null, this, this._anchor_49);
        this._TemplateRef_49_5 = new import28.TemplateRef_(this, 49, this._anchor_49);
        this._NgIf_49_6 = new import18.Wrapper_NgIf(this._vc_49.vcRef, this._TemplateRef_49_5);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_13));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_22, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_22));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_26, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_26));
        this._viewQuery_answerAnchor_0.reset([this._vc_1.vcRef]);
        this.context.answerAnchor = this._viewQuery_answerAnchor_0.first;
        this._viewQuery_questionReport_1.reset([this._vc_3.vcRef]);
        this.context.questionReport = this._viewQuery_questionReport_1.first;
        this._viewQuery_logginAnchor_2.reset([this._vc_5.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_2.first;
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
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._anchor_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._anchor_47,
            this._text_48,
            this._anchor_49
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_QuestionDetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.RouterLinkWithHref) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._RouterLinkWithHref_22_3.context;
        }
        if (((token === import30.RouterLinkWithHref) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._RouterLinkWithHref_26_3.context;
        }
        if (((token === import28.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import31.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import28.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import31.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import28.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import31.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import28.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import31.NgIf) && (35 === requestNodeIndex))) {
            return this._NgIf_35_6.context;
        }
        if (((token === import6.QuestionAnswerService) && (39 === requestNodeIndex))) {
            return this._QuestionAnswerService_39_3;
        }
        if (((token === import20.CategoryService) && (39 === requestNodeIndex))) {
            return this._CategoryService_39_4;
        }
        if (((token === import19.RelatedQuestionMenu) && (39 === requestNodeIndex))) {
            return this._RelatedQuestionMenu_39_5.context;
        }
        if (((token === import23.QuestionService) && (41 === requestNodeIndex))) {
            return this._QuestionService_41_3;
        }
        if (((token === import22.RelatedTopicComponent) && (41 === requestNodeIndex))) {
            return this._RelatedTopicComponent_41_4.context;
        }
        if (((token === import6.QuestionAnswerService) && (43 === requestNodeIndex))) {
            return this._QuestionAnswerService_43_3;
        }
        if (((token === import20.CategoryService) && (43 === requestNodeIndex))) {
            return this._CategoryService_43_4;
        }
        if (((token === import25.CategoryMenuPanelComponent) && (43 === requestNodeIndex))) {
            return this._CategoryMenuPanelComponent_43_5.context;
        }
        if (((token === import28.TemplateRef) && (47 === requestNodeIndex))) {
            return this._TemplateRef_47_5;
        }
        if (((token === import31.NgIf) && (47 === requestNodeIndex))) {
            return this._NgIf_47_6.context;
        }
        if (((token === import28.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import31.NgIf) && (49 === requestNodeIndex))) {
            return this._NgIf_49_6.context;
        }
        return notFoundResult;
    };
    View_QuestionDetailComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_22_0_0 = '/';
        this._RouterLinkWithHref_22_3.check_routerLink(currVal_22_0_0, throwOnChange, false);
        this._RouterLinkWithHref_22_3.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_26_0_0 = '/question/home/1';
        this._RouterLinkWithHref_26_3.check_routerLink(currVal_26_0_0, throwOnChange, false);
        this._RouterLinkWithHref_26_3.ngDoCheck(this, this._el_26, throwOnChange);
        var currVal_29_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        var currVal_31_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        var currVal_33_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        var currVal_35_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_35_6.check_ngIf(currVal_35_0_0, throwOnChange, false);
        this._NgIf_35_6.ngDoCheck(this, this._anchor_35, throwOnChange);
        this._RelatedQuestionMenu_39_5.ngDoCheck(this, this._el_39, throwOnChange);
        var currVal_41_0_0 = ((this.context.question == null) ? null : ((this.context.question.questionTopics[0] == null) ? null : this.context.question.questionTopics[0].topicId));
        this._RelatedTopicComponent_41_4.check_topicId(currVal_41_0_0, throwOnChange, false);
        this._RelatedTopicComponent_41_4.ngDoCheck(this, this._el_41, throwOnChange);
        var currVal_43_0_0 = ((this.context.question == null) ? null : ((this.context.question.categories[0] == null) ? null : this.context.question.categories[0].id));
        this._CategoryMenuPanelComponent_43_5.check_caegoryId(currVal_43_0_0, throwOnChange, false);
        this._CategoryMenuPanelComponent_43_5.ngDoCheck(this, this._el_43, throwOnChange);
        var currVal_47_0_0 = !this.context.showQuestionEditForm;
        this._NgIf_47_6.check_ngIf(currVal_47_0_0, throwOnChange, false);
        this._NgIf_47_6.ngDoCheck(this, this._anchor_47, throwOnChange);
        var currVal_49_0_0 = this.context.showQuestionEditForm;
        this._NgIf_49_6.check_ngIf(currVal_49_0_0, throwOnChange, false);
        this._NgIf_49_6.ngDoCheck(this, this._anchor_49, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_35.detectChangesInNestedViews(throwOnChange);
        this._vc_47.detectChangesInNestedViews(throwOnChange);
        this._vc_49.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_22_3.checkHost(this, this, this._el_22, throwOnChange);
        this._RouterLinkWithHref_26_3.checkHost(this, this, this._el_26, throwOnChange);
        this.compView_39.internalDetectChanges(throwOnChange);
        this.compView_41.internalDetectChanges(throwOnChange);
        this.compView_43.internalDetectChanges(throwOnChange);
    };
    View_QuestionDetailComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_3.destroyNestedViews();
        this._vc_5.destroyNestedViews();
        this._vc_29.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_35.destroyNestedViews();
        this._vc_47.destroyNestedViews();
        this._vc_49.destroyNestedViews();
        this.compView_39.destroy();
        this.compView_41.destroy();
        this.compView_43.destroy();
        this._RouterLinkWithHref_22_3.ngOnDestroy();
        this._RouterLinkWithHref_26_3.ngOnDestroy();
    };
    View_QuestionDetailComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 29)) {
            return new View_QuestionDetailComponent1(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        if ((nodeIndex == 31)) {
            return new View_QuestionDetailComponent2(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        if ((nodeIndex == 33)) {
            return new View_QuestionDetailComponent3(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 35)) {
            return new View_QuestionDetailComponent4(this.viewUtils, this, 35, this._anchor_35, this._vc_35);
        }
        if ((nodeIndex == 47)) {
            return new View_QuestionDetailComponent5(this.viewUtils, this, 47, this._anchor_47, this._vc_47);
        }
        if ((nodeIndex == 49)) {
            return new View_QuestionDetailComponent8(this.viewUtils, this, 49, this._anchor_49, this._vc_49);
        }
        return null;
    };
    View_QuestionDetailComponent0.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent0.prototype.handleEvent_22 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_22_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_QuestionDetailComponent0.prototype.handleEvent_26 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_26_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_QuestionDetailComponent0;
}(import1.AppView));
export { View_QuestionDetailComponent0 };
var View_QuestionDetailComponent1 = (function (_super) {
    __extends(View_QuestionDetailComponent1, _super);
    function View_QuestionDetailComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionDetailComponent1, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionDetailComponent1.prototype.createInternal = function (rootSelector) {
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
    View_QuestionDetailComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionDetailComponent1.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.gotoProfile() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionDetailComponent1;
}(import1.AppView));
var View_QuestionDetailComponent2 = (function (_super) {
    __extends(View_QuestionDetailComponent2, _super);
    function View_QuestionDetailComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionDetailComponent2, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionDetailComponent2.prototype.createInternal = function (rootSelector) {
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
    View_QuestionDetailComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionDetailComponent2;
}(import1.AppView));
var View_QuestionDetailComponent3 = (function (_super) {
    __extends(View_QuestionDetailComponent3, _super);
    function View_QuestionDetailComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionDetailComponent3, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionDetailComponent3.prototype.createInternal = function (rootSelector) {
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
    View_QuestionDetailComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionDetailComponent3;
}(import1.AppView));
var View_QuestionDetailComponent4 = (function (_super) {
    __extends(View_QuestionDetailComponent4, _super);
    function View_QuestionDetailComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionDetailComponent4, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionDetailComponent4.prototype.createInternal = function (rootSelector) {
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
    View_QuestionDetailComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionDetailComponent4;
}(import1.AppView));
var View_QuestionDetailComponent5 = (function (_super) {
    __extends(View_QuestionDetailComponent5, _super);
    function View_QuestionDetailComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionDetailComponent5, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_79 = import44.UNINITIALIZED;
        _this._expr_80 = import44.UNINITIALIZED;
        _this._expr_81 = import44.UNINITIALIZED;
        return _this;
    }
    View_QuestionDetailComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'center-width center-fix center-body z-ground'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import33.View_QuestionHeaderComponent0(this.viewUtils, this, 4, this._el_4);
        this._QuestionHeaderComponent_4_3 = new import33.Wrapper_QuestionHeaderComponent(this.parentView.injectorGet(import12.Router, this.parentIndex));
        this.compView_4.create(this._QuestionHeaderComponent_4_3.context);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'h1', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_11 = new import36.View_UserInfoComponent0(this.viewUtils, this, 11, this._el_11);
        this._ProfileService_11_3 = new import35.ProfileService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._UserInfoComponent_11_4 = new import36.Wrapper_UserInfoComponent(this._ProfileService_11_3);
        this.compView_11.create(this._UserInfoComponent_11_4.context);
        this._text_12 = this.renderer.createText(this._el_9, '\n            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_9, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_14 = this.renderer.createText(this._el_9, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_9, 'ap-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_15 = new import39.View_StatusComponent0(this.viewUtils, this, 15, this._el_15);
        this._StatusService_15_3 = new import38.StatusService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._QuestionService_15_4 = new import23.QuestionService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._StatusComponent_15_5 = new import39.Wrapper_StatusComponent(this.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import7.AuthenticationService, this.parentIndex), this._StatusService_15_3, this.parentView.injectorGet(import6.QuestionAnswerService, this.parentIndex), this.parentView.injectorGet(import29.CommunicationService, this.parentIndex), this._QuestionService_15_4, this.parentView.injectorGet(import45.ToastsManager, this.parentIndex));
        this._text_16 = this.renderer.createText(null, ' ', null);
        this.compView_15.create(this._StatusComponent_15_5.context);
        this._text_17 = this.renderer.createText(this._el_9, '\n            ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_9, 'ap-comment', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_18 = new import42.View_CommentComponent0(this.viewUtils, this, 18, this._el_18);
        this._CommentService_18_3 = new import41.CommentService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._CommentComponent_18_4 = new import42.Wrapper_CommentComponent(this._CommentService_18_3, this.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import29.CommunicationService, this.parentIndex));
        this.compView_18.create(this._CommentComponent_18_4.context);
        this._text_19 = this.renderer.createText(this._el_9, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_2, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_2, 'button', new import3.InlineArray2(2, 'class', 'answer-button'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n            ', null);
        this._text_25 = this.renderer.createText(this._el_23, '\n            Responder\n        ', null);
        this._text_26 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'summery-panel'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, '', null);
        this._text_31 = this.renderer.createText(this._el_29, 'Respuestas\n            ', null);
        this._text_32 = this.renderer.createText(this._el_27, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_27, 'div', new import3.InlineArray2(2, 'class', 'row filter-panel'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_38 = this.renderer.createText(this._el_37, '\n                        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._text_41 = this.renderer.createText(this._el_39, '\n                            Últimas respuestas\n                        ', null);
        this._text_42 = this.renderer.createText(this._el_37, '\n                    ', null);
        this._text_43 = this.renderer.createText(this._el_35, '\n                ', null);
        this._text_44 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_33, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_46 = this.renderer.createText(this._el_45, '\n                    ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_45, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_48 = this.renderer.createText(this._el_47, '\n                        ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_47, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_50 = this.renderer.createText(this._el_49, '\n                            ', null);
        this._text_51 = this.renderer.createText(this._el_49, '\n                            Mejores respuestas\n                        ', null);
        this._text_52 = this.renderer.createText(this._el_47, '\n                    ', null);
        this._text_53 = this.renderer.createText(this._el_45, '\n                ', null);
        this._text_54 = this.renderer.createText(this._el_33, '\n                ', null);
        this._text_55 = this.renderer.createText(this._el_33, '\n            ', null);
        this._text_56 = this.renderer.createText(this._el_27, '\n            ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_27, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_58 = this.renderer.createText(this._el_27, '\n        ', null);
        this._text_59 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._text_60 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_61 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_61 = new import16.ViewContainer(61, 2, this, this._anchor_61);
        this._TemplateRef_61_5 = new import28.TemplateRef_(this, 61, this._anchor_61);
        this._NgFor_61_6 = new import43.Wrapper_NgFor(this._vc_61.vcRef, this._TemplateRef_61_5, this.parentView.injectorGet(import46.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_62 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_63 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray4(4, 'onQuestionDetailClicked', null, 'onQuestionReportClicked', null), this.eventHandler(this.handleEvent_15));
        this._StatusComponent_15_5.subscribe(this, this.eventHandler(this.handleEvent_15), true, true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_23, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_23));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_37, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_37));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_47, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_47));
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
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
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
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._anchor_61,
            this._text_62,
            this._text_63
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_QuestionDetailComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.QuestionHeaderComponent) && (4 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_4_3.context;
        }
        if (((token === import35.ProfileService) && (11 === requestNodeIndex))) {
            return this._ProfileService_11_3;
        }
        if (((token === import34.UserInfoComponent) && (11 === requestNodeIndex))) {
            return this._UserInfoComponent_11_4.context;
        }
        if (((token === import38.StatusService) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._StatusService_15_3;
        }
        if (((token === import23.QuestionService) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._QuestionService_15_4;
        }
        if (((token === import37.StatusComponent) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._StatusComponent_15_5.context;
        }
        if (((token === import41.CommentService) && (18 === requestNodeIndex))) {
            return this._CommentService_18_3;
        }
        if (((token === import40.CommentComponent) && (18 === requestNodeIndex))) {
            return this._CommentComponent_18_4.context;
        }
        if (((token === import28.TemplateRef) && (61 === requestNodeIndex))) {
            return this._TemplateRef_61_5;
        }
        if (((token === import47.NgFor) && (61 === requestNodeIndex))) {
            return this._NgFor_61_6.context;
        }
        return notFoundResult;
    };
    View_QuestionDetailComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parentView.context.question;
        this._QuestionHeaderComponent_4_3.check_question(currVal_4_0_0, throwOnChange, false);
        this._QuestionHeaderComponent_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_11_0_0 = this.parentView.context.question.userViewModel;
        this._UserInfoComponent_11_4.check_userObj(currVal_11_0_0, throwOnChange, false);
        var currVal_11_0_1 = ((this.parentView.context.question == null) ? null : this.parentView.context.question.createdOn);
        this._UserInfoComponent_11_4.check_viewDate(currVal_11_0_1, throwOnChange, false);
        var currVal_11_0_2 = ((this.parentView.context.question == null) ? null : this.parentView.context.question.isAnonymous);
        this._UserInfoComponent_11_4.check_isAnonymous(currVal_11_0_2, throwOnChange, false);
        this._UserInfoComponent_11_4.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_15_0_0 = this.parentView.context.question;
        this._StatusComponent_15_5.check_questionObj(currVal_15_0_0, throwOnChange, false);
        var currVal_15_0_1 = true;
        this._StatusComponent_15_5.check_isQuestion(currVal_15_0_1, throwOnChange, false);
        this._StatusComponent_15_5.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_18_0_0 = ((this.parentView.context.question == null) ? null : this.parentView.context.question.id);
        this._CommentComponent_18_4.check_questionId(currVal_18_0_0, throwOnChange, false);
        var currVal_18_0_1 = true;
        this._CommentComponent_18_4.check_isQuestion(currVal_18_0_1, throwOnChange, false);
        this._CommentComponent_18_4.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_61_0_0 = this.parentView.context.question.answers;
        this._NgFor_61_6.check_ngForOf(currVal_61_0_0, throwOnChange, false);
        this._NgFor_61_6.ngDoCheck(this, this._anchor_61, throwOnChange);
        this._vc_61.detectChangesInNestedViews(throwOnChange);
        var currVal_79 = import3.inlineInterpolate(1, '\n            ', this.parentView.context.question.title, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this.renderer.setText(this._text_7, currVal_79);
            this._expr_79 = currVal_79;
        }
        var currVal_80 = this.parentView.context.question.body;
        if (import3.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this.renderer.setElementProperty(this._el_13, 'innerHTML', this.viewUtils.sanitizer.sanitize(import48.SecurityContext.HTML, currVal_80));
            this._expr_80 = currVal_80;
        }
        var currVal_81 = import3.inlineInterpolate(1, '\n                ', ((this.parentView.context.question.answers == null) ? null : this.parentView.context.question.answers.length), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setText(this._text_30, currVal_81);
            this._expr_81 = currVal_81;
        }
        this.compView_4.internalDetectChanges(throwOnChange);
        this.compView_11.internalDetectChanges(throwOnChange);
        this.compView_15.internalDetectChanges(throwOnChange);
        this.compView_18.internalDetectChanges(throwOnChange);
    };
    View_QuestionDetailComponent5.prototype.destroyInternal = function () {
        this._vc_61.destroyNestedViews();
        this.compView_4.destroy();
        this.compView_11.destroy();
        this.compView_15.destroy();
        this.compView_18.destroy();
        this._StatusComponent_15_5.ngOnDestroy();
        this._CommentComponent_18_4.ngOnDestroy();
    };
    View_QuestionDetailComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionDetailComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 61)) {
            return new View_QuestionDetailComponent6(this.viewUtils, this, 61, this._anchor_61, this._vc_61);
        }
        return null;
    };
    View_QuestionDetailComponent5.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onQuestionDetailClicked')) {
            var pd_sub_0 = (this.parentView.context.onQuestionDetailClicked($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'onQuestionReportClicked')) {
            var pd_sub_1 = (this.parentView.context.onQuestionReportClicked($event, this.parentView.context.questionId, this.parentView.context.answerId) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_QuestionDetailComponent5.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.answerDialogBox(this.parentView.context.question) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent5.prototype.handleEvent_37 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.GetLatestAnswer(this.parentView.context.question.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent5.prototype.handleEvent_47 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.GetBestAnswer(this.parentView.context.question.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionDetailComponent5;
}(import1.AppView));
var View_QuestionDetailComponent6 = (function (_super) {
    __extends(View_QuestionDetailComponent6, _super);
    function View_QuestionDetailComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionDetailComponent6, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionDetailComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import16.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import28.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import18.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), null);
        return null;
    };
    View_QuestionDetailComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import31.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_QuestionDetailComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_QuestionDetailComponent6.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_QuestionDetailComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionDetailComponent6.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_QuestionDetailComponent7(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_QuestionDetailComponent6;
}(import1.AppView));
var View_QuestionDetailComponent7 = (function (_super) {
    __extends(View_QuestionDetailComponent7, _super);
    function View_QuestionDetailComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionDetailComponent7, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_33 = import44.UNINITIALIZED;
        _this._map_34 = import3.pureProxy2(function (p0, p1) {
            return {
                enableFollowingImg: p0,
                disabledFollowingImg: p1
            };
        });
        _this._expr_35 = import44.UNINITIALIZED;
        return _this;
    }
    View_QuestionDetailComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import36.View_UserInfoComponent0(this.viewUtils, this, 4, this._el_4);
        this._ProfileService_4_3 = new import35.ProfileService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._UserInfoComponent_4_4 = new import36.Wrapper_UserInfoComponent(this._ProfileService_4_3);
        this.compView_4.create(this._UserInfoComponent_4_4.context);
        this._text_5 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'pull-right'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'img', new import3.InlineArray2(2, 'src', '../../images/FollowingImage.svg'), null);
        this._NgClass_10_3 = new import49.Wrapper_NgClass(this.parentView.parentView.parentView.injectorGet(import46.IterableDiffers, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import50.KeyValueDiffers, this.parentView.parentView.parentIndex), new import51.ElementRef(this._el_10), this.renderer);
        this._text_11 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._text_12 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._text_13 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_2, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_15 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_2, 'ap-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_16 = new import39.View_StatusComponent0(this.viewUtils, this, 16, this._el_16);
        this._StatusService_16_3 = new import38.StatusService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._QuestionService_16_4 = new import23.QuestionService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._StatusComponent_16_5 = new import39.Wrapper_StatusComponent(this.parentView.parentView.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import7.AuthenticationService, this.parentView.parentView.parentIndex), this._StatusService_16_3, this.parentView.parentView.parentView.injectorGet(import6.QuestionAnswerService, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import29.CommunicationService, this.parentView.parentView.parentIndex), this._QuestionService_16_4, this.parentView.parentView.parentView.injectorGet(import45.ToastsManager, this.parentView.parentView.parentIndex));
        this._text_17 = this.renderer.createText(null, ' ', null);
        this.compView_16.create(this._StatusComponent_16_5.context);
        this._text_18 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_2, 'ap-comment', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_19 = new import42.View_CommentComponent0(this.viewUtils, this, 19, this._el_19);
        this._CommentService_19_3 = new import41.CommentService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._CommentComponent_19_4 = new import42.Wrapper_CommentComponent(this._CommentService_19_3, this.parentView.parentView.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import29.CommunicationService, this.parentView.parentView.parentIndex));
        this.compView_19.create(this._CommentComponent_19_4.context);
        this._text_20 = this.renderer.createText(this._el_2, '\n                ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray2(2, 'onQuestionReportClicked', null), this.eventHandler(this.handleEvent_16));
        this._StatusComponent_16_5.subscribe(this, this.eventHandler(this.handleEvent_16), false, true);
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
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_QuestionDetailComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.ProfileService) && (4 === requestNodeIndex))) {
            return this._ProfileService_4_3;
        }
        if (((token === import34.UserInfoComponent) && (4 === requestNodeIndex))) {
            return this._UserInfoComponent_4_4.context;
        }
        if (((token === import52.NgClass) && (10 === requestNodeIndex))) {
            return this._NgClass_10_3.context;
        }
        if (((token === import38.StatusService) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._StatusService_16_3;
        }
        if (((token === import23.QuestionService) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._QuestionService_16_4;
        }
        if (((token === import37.StatusComponent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._StatusComponent_16_5.context;
        }
        if (((token === import41.CommentService) && (19 === requestNodeIndex))) {
            return this._CommentService_19_3;
        }
        if (((token === import40.CommentComponent) && (19 === requestNodeIndex))) {
            return this._CommentComponent_19_4.context;
        }
        return notFoundResult;
    };
    View_QuestionDetailComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.userViewModel);
        this._UserInfoComponent_4_4.check_userObj(currVal_4_0_0, throwOnChange, false);
        var currVal_4_0_1 = ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.createdOn);
        this._UserInfoComponent_4_4.check_viewDate(currVal_4_0_1, throwOnChange, false);
        var currVal_4_0_2 = ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.isAnonymous);
        this._UserInfoComponent_4_4.check_isAnonymous(currVal_4_0_2, throwOnChange, false);
        this._UserInfoComponent_4_4.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_10_0_0 = this._map_34(!((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.isFollowing), ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.isFollowing));
        this._NgClass_10_3.check_ngClass(currVal_10_0_0, throwOnChange, false);
        this._NgClass_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_16_0_0 = this.parentView.parentView.parentView.context.question;
        this._StatusComponent_16_5.check_questionObj(currVal_16_0_0, throwOnChange, false);
        var currVal_16_0_1 = this.parentView.context.$implicit;
        this._StatusComponent_16_5.check_answerObj(currVal_16_0_1, throwOnChange, false);
        var currVal_16_0_2 = false;
        this._StatusComponent_16_5.check_isQuestion(currVal_16_0_2, throwOnChange, false);
        this._StatusComponent_16_5.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_19_0_0 = ((this.parentView.parentView.parentView.context.question == null) ? null : this.parentView.parentView.parentView.context.question.id);
        this._CommentComponent_19_4.check_questionId(currVal_19_0_0, throwOnChange, false);
        var currVal_19_0_1 = this.parentView.context.$implicit.id;
        this._CommentComponent_19_4.check_answerId(currVal_19_0_1, throwOnChange, false);
        var currVal_19_0_2 = false;
        this._CommentComponent_19_4.check_isQuestion(currVal_19_0_2, throwOnChange, false);
        this._CommentComponent_19_4.ngDoCheck(this, this._el_19, throwOnChange);
        var currVal_33 = import3.inlineInterpolate(1, '', ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.id), '');
        if (import3.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_35 = this.parentView.context.$implicit.text;
        if (import3.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementProperty(this._el_14, 'innerHTML', this.viewUtils.sanitizer.sanitize(import48.SecurityContext.HTML, currVal_35));
            this._expr_35 = currVal_35;
        }
        this.compView_4.internalDetectChanges(throwOnChange);
        this.compView_16.internalDetectChanges(throwOnChange);
        this.compView_19.internalDetectChanges(throwOnChange);
    };
    View_QuestionDetailComponent7.prototype.destroyInternal = function () {
        this.compView_4.destroy();
        this.compView_16.destroy();
        this.compView_19.destroy();
        this._StatusComponent_16_5.ngOnDestroy();
        this._CommentComponent_19_4.ngOnDestroy();
    };
    View_QuestionDetailComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionDetailComponent7.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.QuestionFollowing(this.parentView.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent7.prototype.handleEvent_16 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onQuestionReportClicked')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.onQuestionReportClicked($event, this.parentView.parentView.parentView.context.questionId, this.parentView.parentView.parentView.context.answerId) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionDetailComponent7;
}(import1.AppView));
var View_QuestionDetailComponent8 = (function (_super) {
    __extends(View_QuestionDetailComponent8, _super);
    function View_QuestionDetailComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionDetailComponent8, renderType_QuestionDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_49 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_50 = import44.UNINITIALIZED;
        return _this;
    }
    View_QuestionDetailComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'center-width center-body center-fix z-ground'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_4_3 = new import53.Wrapper_NgForm(null, null);
        this._ControlContainer_4_4 = this._NgForm_4_3.context;
        this._NgControlStatusGroup_4_5 = new import54.Wrapper_NgControlStatusGroup(this._ControlContainer_4_4);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import33.View_QuestionHeaderComponent0(this.viewUtils, this, 6, this._el_6);
        this._QuestionHeaderComponent_6_3 = new import33.Wrapper_QuestionHeaderComponent(this.parentView.injectorGet(import12.Router, this.parentIndex));
        this.compView_6.create(this._QuestionHeaderComponent_6_3.context);
        this._text_7 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_4, 'h1', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray8(6, 'name', 'editField', 'required', '', 'style', 'width:538px;'), null);
        this._DefaultValueAccessor_10_3 = new import55.Wrapper_DefaultValueAccessor(this.renderer, new import51.ElementRef(this._el_10));
        this._RequiredValidator_10_4 = new import56.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4.context];
        this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3.context];
        this._NgModel_10_7 = new import57.Wrapper_NgModel(this._ControlContainer_4_4, this._NG_VALIDATORS_10_5, null, this._NG_VALUE_ACCESSOR_10_6);
        this._NgControl_10_8 = this._NgModel_10_7.context;
        this._NgControlStatus_10_9 = new import54.Wrapper_NgControlStatus(this._NgControl_10_8);
        this._text_11 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_4, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_4, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_4, 'textarea', new import3.InlineArray16(10, 'class', 'question-control', 'cols', '86', 'name', 'editBody', 'placeholder', 'Agrega detalle de tu pregunta - Optional', 'rows', '6'), null);
        this._DefaultValueAccessor_17_3 = new import55.Wrapper_DefaultValueAccessor(this.renderer, new import51.ElementRef(this._el_17));
        this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_5 = new import57.Wrapper_NgModel(this._ControlContainer_4_4, null, null, this._NG_VALUE_ACCESSOR_17_4);
        this._NgControl_17_6 = this._NgModel_17_5.context;
        this._NgControlStatus_17_7 = new import54.Wrapper_NgControlStatus(this._NgControl_17_6);
        this._text_18 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'button', new import3.InlineArray4(4, 'class', 'btn btn-success fixed-height', 'type', 'submit'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._text_23 = this.renderer.createText(this._el_21, '\n                    Actualizar\n                ', null);
        this._text_24 = this.renderer.createText(this._el_19, '\n                ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_19, 'button', new import3.InlineArray4(4, 'class', 'btn btn-info fixed-height', 'type', 'button'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._text_27 = this.renderer.createText(this._el_25, '\n                    Cancelar\n                ', null);
        this._text_28 = this.renderer.createText(this._el_19, '\n            ', null);
        this._text_29 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_30 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_4));
        this._NgForm_4_3.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_7.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_5.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_25));
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
            this._el_10,
            this._text_11,
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
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_QuestionDetailComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.QuestionHeaderComponent) && (6 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_6_3.context;
        }
        if (((token === import58.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import59.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_4.context;
        }
        if (((token === import60.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_5;
        }
        if (((token === import61.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_6;
        }
        if (((token === import62.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_7.context;
        }
        if (((token === import63.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_8;
        }
        if (((token === import64.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_9.context;
        }
        if (((token === import58.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import61.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_4;
        }
        if (((token === import62.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_5.context;
        }
        if (((token === import63.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_6;
        }
        if (((token === import64.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_7.context;
        }
        if (((token === import65.NgForm) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._NgForm_4_3.context;
        }
        if (((token === import66.ControlContainer) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._ControlContainer_4_4;
        }
        if (((token === import64.NgControlStatusGroup) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._NgControlStatusGroup_4_5.context;
        }
        return notFoundResult;
    };
    View_QuestionDetailComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        this._NgControlStatusGroup_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_6_0_0 = this.parentView.context.question;
        this._QuestionHeaderComponent_6_3.check_question(currVal_6_0_0, throwOnChange, false);
        this._QuestionHeaderComponent_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_1_0 = '';
        this._RequiredValidator_10_4.check_required(currVal_10_1_0, throwOnChange, false);
        this._RequiredValidator_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_2_0 = 'editField';
        this._NgModel_10_7.check_name(currVal_10_2_0, throwOnChange, false);
        var currVal_10_2_1 = this.parentView.context.editTitle;
        this._NgModel_10_7.check_model(currVal_10_2_1, throwOnChange, false);
        this._NgModel_10_7.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.ngDoCheck(this, this._el_10, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_1_0 = 'editBody';
        this._NgModel_17_5.check_name(currVal_17_1_0, throwOnChange, false);
        var currVal_17_1_1 = this.parentView.context.editBody;
        this._NgModel_17_5.check_model(currVal_17_1_1, throwOnChange, false);
        var currVal_17_1_2 = this._map_49(true);
        this._NgModel_17_5.check_options(currVal_17_1_2, throwOnChange, false);
        this._NgModel_17_5.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatusGroup_4_5.checkHost(this, this, this._el_4, throwOnChange);
        this._RequiredValidator_10_4.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_17_7.checkHost(this, this, this._el_17, throwOnChange);
        var currVal_50 = !this._NgForm_4_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementProperty(this._el_21, 'disabled', currVal_50);
            this._expr_50 = currVal_50;
        }
        this.compView_6.internalDetectChanges(throwOnChange);
    };
    View_QuestionDetailComponent8.prototype.destroyInternal = function () {
        this.compView_6.destroy();
        this._NgModel_10_7.ngOnDestroy();
        this._NgModel_17_5.ngOnDestroy();
        this._NgForm_4_3.ngOnDestroy();
    };
    View_QuestionDetailComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionDetailComponent8.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.parentView.context.updateQuestion() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent8.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.editTitle = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent8.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.editBody = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionDetailComponent8.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onQuestionDetailClicked(false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionDetailComponent8;
}(import1.AppView));
