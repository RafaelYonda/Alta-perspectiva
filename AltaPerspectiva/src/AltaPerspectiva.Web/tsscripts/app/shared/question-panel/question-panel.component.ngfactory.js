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
import * as import0 from './question-panel.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/question-answer.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../question-header/question-header.component';
import * as import18 from '../question-header/question-header.component.ngfactory';
import * as import19 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/router/src/router';
import * as import21 from '@angular/router/src/router_state';
import * as import22 from '@angular/common/src/location/location_strategy';
import * as import23 from '@angular/router/src/directives/router_link';
import * as import24 from '../user-info/user-info.component';
import * as import25 from '../../services/profile.service';
import * as import26 from '../user-info/user-info.component.ngfactory';
import * as import27 from '@angular/core/src/security';
import * as import28 from '../status/status.component';
import * as import29 from '../../services/status.service';
import * as import30 from '../../services/question.service';
import * as import31 from '../status/status.component.ngfactory';
import * as import32 from '../comment/comment.component';
import * as import33 from '../../services/comment.service';
import * as import34 from '../comment/comment.component.ngfactory';
import * as import35 from '../../services/authentication.service';
import * as import36 from '../../services/communication.service';
import * as import37 from 'ng2-toastr/src/toast-manager';
import * as import38 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import39 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import40 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import41 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import42 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import43 from '@angular/core/src/linker/element_ref';
import * as import44 from '@angular/forms/src/directives/default_value_accessor';
import * as import45 from '@angular/forms/src/directives/validators';
import * as import46 from '@angular/forms/src/validators';
import * as import47 from '@angular/forms/src/directives/control_value_accessor';
import * as import48 from '@angular/forms/src/directives/ng_model';
import * as import49 from '@angular/forms/src/directives/ng_control';
import * as import50 from '@angular/forms/src/directives/ng_control_status';
import * as import51 from '@angular/forms/src/directives/ng_form';
import * as import52 from '@angular/forms/src/directives/control_container';
var Wrapper_QuestionPanelComponent = (function () {
    function Wrapper_QuestionPanelComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.QuestionPanelComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_QuestionPanelComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionPanelComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionPanelComponent.prototype.check_question = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.question = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_QuestionPanelComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_QuestionPanelComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionPanelComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionPanelComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionPanelComponent;
}());
export { Wrapper_QuestionPanelComponent };
var renderType_QuestionPanelComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_QuestionPanelComponent_Host0 = (function (_super) {
    __extends(View_QuestionPanelComponent_Host0, _super);
    function View_QuestionPanelComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionPanelComponent_Host0, renderType_QuestionPanelComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionPanelComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'question-panel', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_QuestionPanelComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import6.QuestionAnswerService(this.injectorGet(import10.Http, this.parentIndex));
        this._QuestionPanelComponent_0_4 = new Wrapper_QuestionPanelComponent(this.injectorGet(import11.ComponentFactoryResolver, this.parentIndex), this._QuestionAnswerService_0_3);
        this.compView_0.create(this._QuestionPanelComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._QuestionPanelComponent_0_4.context);
    };
    View_QuestionPanelComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import0.QuestionPanelComponent) && (0 === requestNodeIndex))) {
            return this._QuestionPanelComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_QuestionPanelComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionPanelComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionPanelComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_QuestionPanelComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionPanelComponent_Host0;
}(import2.AppView));
export var QuestionPanelComponentNgFactory = new import9.ComponentFactory('question-panel', View_QuestionPanelComponent_Host0, import0.QuestionPanelComponent);
var styles_QuestionPanelComponent = ['.article-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], article-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n\n    .filter-panel[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        width: 200px;\n    }'];
var renderType_QuestionPanelComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_QuestionPanelComponent, {});
var View_QuestionPanelComponent0 = (function (_super) {
    __extends(View_QuestionPanelComponent0, _super);
    function View_QuestionPanelComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionPanelComponent0, renderType_QuestionPanelComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionPanelComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import12.QueryList();
        this._viewQuery_answerAnchor_1 = new import12.QueryList();
        this._viewQuery_dialogAnchor_2 = new import12.QueryList();
        this._viewQuery_questionReport_3 = new import12.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_3 = new import13.ViewContainer(3, 1, this, this._el_3);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_5 = new import13.ViewContainer(5, 1, this, this._el_5);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_7 = new import13.ViewContainer(7, 1, this, this._el_7);
        this._text_8 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_9 = new import13.ViewContainer(9, 1, this, this._el_9);
        this._text_10 = this.renderer.createText(this._el_1, '\n', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_12 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'panel-article'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'div', new import3.InlineArray2(2, 'class', 'questions-container'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._vc_16 = new import13.ViewContainer(16, 14, this, this._anchor_16);
        this._TemplateRef_16_5 = new import15.TemplateRef_(this, 16, this._anchor_16);
        this._NgIf_16_6 = new import14.Wrapper_NgIf(this._vc_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_14, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n        ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._vc_19 = new import13.ViewContainer(19, 14, this, this._anchor_19);
        this._TemplateRef_19_5 = new import15.TemplateRef_(this, 19, this._anchor_19);
        this._NgIf_19_6 = new import14.Wrapper_NgIf(this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_14, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_12, '\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._viewQuery_logginAnchor_0.reset([this._vc_9.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
        this._viewQuery_answerAnchor_1.reset([this._vc_5.vcRef]);
        this.context.answerAnchor = this._viewQuery_answerAnchor_1.first;
        this._viewQuery_dialogAnchor_2.reset([this._vc_3.vcRef]);
        this.context.dialogAnchor = this._viewQuery_dialogAnchor_2.first;
        this._viewQuery_questionReport_3.reset([this._vc_7.vcRef]);
        this.context.questionReport = this._viewQuery_questionReport_3.first;
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
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._text_22
        ]), null);
        return null;
    };
    View_QuestionPanelComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import16.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        if (((token === import15.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import16.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        return notFoundResult;
    };
    View_QuestionPanelComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16_0_0 = !this.context.showQuestionEditForm;
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_19_0_0 = this.context.showQuestionEditForm;
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
    };
    View_QuestionPanelComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this._vc_19.destroyNestedViews();
    };
    View_QuestionPanelComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 16)) {
            return new View_QuestionPanelComponent1(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        if ((nodeIndex == 19)) {
            return new View_QuestionPanelComponent6(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        return null;
    };
    return View_QuestionPanelComponent0;
}(import2.AppView));
export { View_QuestionPanelComponent0 };
var View_QuestionPanelComponent1 = (function (_super) {
    __extends(View_QuestionPanelComponent1, _super);
    function View_QuestionPanelComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionPanelComponent1, renderType_QuestionPanelComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_26 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_27 = import1.UNINITIALIZED;
        return _this;
    }
    View_QuestionPanelComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'details-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import18.View_QuestionHeaderComponent0(this.viewUtils, this, 2, this._el_2);
        this._QuestionHeaderComponent_2_3 = new import18.Wrapper_QuestionHeaderComponent(this.parentView.parentView.injectorGet(import20.Router, this.parentView.parentIndex));
        this.compView_2.create(this._QuestionHeaderComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'h3', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_6_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import20.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import21.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import22.LocationStrategy, this.parentView.parentIndex));
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_12 = new import13.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import15.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import14.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n                ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_14 = new import13.ViewContainer(14, 10, this, this._anchor_14);
        this._TemplateRef_14_5 = new import15.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import14.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
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
            this._text_9,
            this._el_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_QuestionPanelComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.QuestionHeaderComponent) && (2 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_2_3.context;
        }
        if (((token === import23.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._RouterLinkWithHref_6_3.context;
        }
        if (((token === import15.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import16.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import15.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import16.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        return notFoundResult;
    };
    View_QuestionPanelComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.question;
        this._QuestionHeaderComponent_2_3.check_question(currVal_2_0_0, throwOnChange, false);
        this._QuestionHeaderComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_6_0_0 = this._arr_26('/question/detail', this.parentView.context.question.id);
        this._RouterLinkWithHref_6_3.check_routerLink(currVal_6_0_0, throwOnChange, false);
        this._RouterLinkWithHref_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_12_0_0 = !(this.parentView.context.question.answerCount > 0);
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_14_0_0 = (this.parentView.context.question.answerCount > 0);
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_6_3.checkHost(this, this, this._el_6, throwOnChange);
        var currVal_27 = import3.inlineInterpolate(1, '', this.parentView.context.question.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setText(this._text_7, currVal_27);
            this._expr_27 = currVal_27;
        }
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_QuestionPanelComponent1.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this.compView_2.destroy();
        this._RouterLinkWithHref_6_3.ngOnDestroy();
    };
    View_QuestionPanelComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionPanelComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_QuestionPanelComponent2(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 14)) {
            return new View_QuestionPanelComponent3(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        return null;
    };
    View_QuestionPanelComponent1.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_6_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_QuestionPanelComponent1.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.answerDialogBoxIfNoAnswer(this.parentView.context.question) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionPanelComponent1;
}(import2.AppView));
var View_QuestionPanelComponent2 = (function (_super) {
    __extends(View_QuestionPanelComponent2, _super);
    function View_QuestionPanelComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionPanelComponent2, renderType_QuestionPanelComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionPanelComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'answer-button'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'Responder', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
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
    View_QuestionPanelComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionPanelComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.answerDialogBox(this.parentView.parentView.context.question) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionPanelComponent2;
}(import2.AppView));
var View_QuestionPanelComponent3 = (function (_super) {
    __extends(View_QuestionPanelComponent3, _super);
    function View_QuestionPanelComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionPanelComponent3, renderType_QuestionPanelComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionPanelComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import26.View_UserInfoComponent0(this.viewUtils, this, 2, this._el_2);
        this._ProfileService_2_3 = new import25.ProfileService(this.parentView.parentView.parentView.injectorGet(import10.Http, this.parentView.parentView.parentIndex));
        this._UserInfoComponent_2_4 = new import26.Wrapper_UserInfoComponent(this._ProfileService_2_3);
        this.compView_2.create(this._UserInfoComponent_2_4.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import13.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import15.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import14.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_6 = new import13.ViewContainer(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import15.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import14.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), null);
        return null;
    };
    View_QuestionPanelComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.ProfileService) && (2 === requestNodeIndex))) {
            return this._ProfileService_2_3;
        }
        if (((token === import24.UserInfoComponent) && (2 === requestNodeIndex))) {
            return this._UserInfoComponent_2_4.context;
        }
        if (((token === import15.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import16.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import15.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import16.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_QuestionPanelComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = ((this.parentView.parentView.context.question.bestAnswer == null) ? null : this.parentView.parentView.context.question.bestAnswer.userViewModel);
        this._UserInfoComponent_2_4.check_userObj(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = ((this.parentView.parentView.context.question.bestAnswer == null) ? null : this.parentView.parentView.context.question.bestAnswer.answerDate);
        this._UserInfoComponent_2_4.check_viewDate(currVal_2_0_1, throwOnChange, false);
        var currVal_2_0_2 = ((this.parentView.parentView.context.question.bestAnswer == null) ? null : this.parentView.parentView.context.question.bestAnswer.isAnonymous);
        this._UserInfoComponent_2_4.check_isAnonymous(currVal_2_0_2, throwOnChange, false);
        this._UserInfoComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = ((this.parentView.parentView.context.question.bestAnswer == null) ? null : this.parentView.parentView.context.question.bestAnswer.text);
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = this.parentView.parentView.context.question.bestAnswer;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_QuestionPanelComponent3.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this.compView_2.destroy();
    };
    View_QuestionPanelComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionPanelComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_QuestionPanelComponent4(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_QuestionPanelComponent5(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_QuestionPanelComponent3;
}(import2.AppView));
var View_QuestionPanelComponent4 = (function (_super) {
    __extends(View_QuestionPanelComponent4, _super);
    function View_QuestionPanelComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionPanelComponent4, renderType_QuestionPanelComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import1.UNINITIALIZED;
        return _this;
    }
    View_QuestionPanelComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_QuestionPanelComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = this.parentView.parentView.parentView.context.clippedAnswer;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'innerHTML', this.viewUtils.sanitizer.sanitize(import27.SecurityContext.HTML, currVal_5));
            this._expr_5 = currVal_5;
        }
    };
    View_QuestionPanelComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionPanelComponent4.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.openDialogBox(this.parentView.parentView.parentView.context.question) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionPanelComponent4;
}(import2.AppView));
var View_QuestionPanelComponent5 = (function (_super) {
    __extends(View_QuestionPanelComponent5, _super);
    function View_QuestionPanelComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionPanelComponent5, renderType_QuestionPanelComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionPanelComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ap-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import31.View_StatusComponent0(this.viewUtils, this, 2, this._el_2);
        this._StatusService_2_3 = new import29.StatusService(this.parentView.parentView.parentView.parentView.injectorGet(import10.Http, this.parentView.parentView.parentView.parentIndex));
        this._QuestionService_2_4 = new import30.QuestionService(this.parentView.parentView.parentView.parentView.injectorGet(import10.Http, this.parentView.parentView.parentView.parentIndex));
        this._StatusComponent_2_5 = new import31.Wrapper_StatusComponent(this.parentView.parentView.parentView.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import35.AuthenticationService, this.parentView.parentView.parentView.parentIndex), this._StatusService_2_3, this.parentView.parentView.parentView.parentView.injectorGet(import6.QuestionAnswerService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import36.CommunicationService, this.parentView.parentView.parentView.parentIndex), this._QuestionService_2_4, this.parentView.parentView.parentView.parentView.injectorGet(import37.ToastsManager, this.parentView.parentView.parentView.parentIndex));
        this.compView_2.create(this._StatusComponent_2_5.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'ap-comment', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import34.View_CommentComponent0(this.viewUtils, this, 4, this._el_4);
        this._CommentService_4_3 = new import33.CommentService(this.parentView.parentView.parentView.parentView.injectorGet(import10.Http, this.parentView.parentView.parentView.parentIndex));
        this._CommentComponent_4_4 = new import34.Wrapper_CommentComponent(this._CommentService_4_3, this.parentView.parentView.parentView.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import36.CommunicationService, this.parentView.parentView.parentView.parentIndex));
        this.compView_4.create(this._CommentComponent_4_4.context);
        this._text_5 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray4(4, 'onQuestionReportClicked', null, 'onQuestionDetailClicked', null), this.eventHandler(this.handleEvent_2));
        this._StatusComponent_2_5.subscribe(this, this.eventHandler(this.handleEvent_2), true, true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'sendCommentCount', null), this.eventHandler(this.handleEvent_4));
        this._CommentComponent_4_4.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_QuestionPanelComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import29.StatusService) && (2 === requestNodeIndex))) {
            return this._StatusService_2_3;
        }
        if (((token === import30.QuestionService) && (2 === requestNodeIndex))) {
            return this._QuestionService_2_4;
        }
        if (((token === import28.StatusComponent) && (2 === requestNodeIndex))) {
            return this._StatusComponent_2_5.context;
        }
        if (((token === import33.CommentService) && (4 === requestNodeIndex))) {
            return this._CommentService_4_3;
        }
        if (((token === import32.CommentComponent) && (4 === requestNodeIndex))) {
            return this._CommentComponent_4_4.context;
        }
        return notFoundResult;
    };
    View_QuestionPanelComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.parentView.context.question;
        this._StatusComponent_2_5.check_questionObj(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.parentView.parentView.parentView.context.question.bestAnswer;
        this._StatusComponent_2_5.check_answerObj(currVal_2_0_1, throwOnChange, false);
        var currVal_2_0_2 = false;
        this._StatusComponent_2_5.check_isQuestion(currVal_2_0_2, throwOnChange, false);
        this._StatusComponent_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = this.parentView.parentView.parentView.context.question.id;
        this._CommentComponent_4_4.check_questionId(currVal_4_0_0, throwOnChange, false);
        var currVal_4_0_1 = ((this.parentView.parentView.parentView.context.question.bestAnswer == null) ? null : this.parentView.parentView.parentView.context.question.bestAnswer.id);
        this._CommentComponent_4_4.check_answerId(currVal_4_0_1, throwOnChange, false);
        var currVal_4_0_2 = false;
        this._CommentComponent_4_4.check_isQuestion(currVal_4_0_2, throwOnChange, false);
        this._CommentComponent_4_4.ngDoCheck(this, this._el_4, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        this.compView_4.internalDetectChanges(throwOnChange);
    };
    View_QuestionPanelComponent5.prototype.destroyInternal = function () {
        this.compView_2.destroy();
        this.compView_4.destroy();
        this._StatusComponent_2_5.ngOnDestroy();
        this._CommentComponent_4_4.ngOnDestroy();
    };
    View_QuestionPanelComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionPanelComponent5.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onQuestionReportClicked')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.onQuestionReportClicked($event, this.parentView.parentView.parentView.context.questionId, this.parentView.parentView.parentView.context.answerId) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'onQuestionDetailClicked')) {
            var pd_sub_1 = (this.parentView.parentView.parentView.context.onQuestionDetailClicked($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_QuestionPanelComponent5.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'sendCommentCount')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.sendCommentCount($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionPanelComponent5;
}(import2.AppView));
var View_QuestionPanelComponent6 = (function (_super) {
    __extends(View_QuestionPanelComponent6, _super);
    function View_QuestionPanelComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionPanelComponent6, renderType_QuestionPanelComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_49 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_50 = import1.UNINITIALIZED;
        return _this;
    }
    View_QuestionPanelComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'details-container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_4_3 = new import38.Wrapper_NgForm(null, null);
        this._ControlContainer_4_4 = this._NgForm_4_3.context;
        this._NgControlStatusGroup_4_5 = new import39.Wrapper_NgControlStatusGroup(this._ControlContainer_4_4);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import18.View_QuestionHeaderComponent0(this.viewUtils, this, 6, this._el_6);
        this._QuestionHeaderComponent_6_3 = new import18.Wrapper_QuestionHeaderComponent(this.parentView.parentView.injectorGet(import20.Router, this.parentView.parentIndex));
        this.compView_6.create(this._QuestionHeaderComponent_6_3.context);
        this._text_7 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_4, 'h1', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray8(6, 'name', 'editField', 'required', '', 'style', 'width:538px;'), null);
        this._DefaultValueAccessor_10_3 = new import40.Wrapper_DefaultValueAccessor(this.renderer, new import43.ElementRef(this._el_10));
        this._RequiredValidator_10_4 = new import41.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4.context];
        this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3.context];
        this._NgModel_10_7 = new import42.Wrapper_NgModel(this._ControlContainer_4_4, this._NG_VALIDATORS_10_5, null, this._NG_VALUE_ACCESSOR_10_6);
        this._NgControl_10_8 = this._NgModel_10_7.context;
        this._NgControlStatus_10_9 = new import39.Wrapper_NgControlStatus(this._NgControl_10_8);
        this._text_11 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_4, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_4, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_4, 'textarea', new import3.InlineArray16(10, 'class', 'question-control', 'cols', '86', 'name', 'editBody', 'placeholder', 'Agrega detalle de tu pregunta - Optional', 'rows', '6'), null);
        this._DefaultValueAccessor_17_3 = new import40.Wrapper_DefaultValueAccessor(this.renderer, new import43.ElementRef(this._el_17));
        this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_5 = new import42.Wrapper_NgModel(this._ControlContainer_4_4, null, null, this._NG_VALUE_ACCESSOR_17_4);
        this._NgControl_17_6 = this._NgModel_17_5.context;
        this._NgControlStatus_17_7 = new import39.Wrapper_NgControlStatus(this._NgControl_17_6);
        this._text_18 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'button', new import3.InlineArray4(4, 'class', 'btn btn-success fixed-height', 'type', 'submit'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                            ', null);
        this._text_23 = this.renderer.createText(this._el_21, '\n                            Actualizar\n                        ', null);
        this._text_24 = this.renderer.createText(this._el_19, '\n                        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_19, 'button', new import3.InlineArray4(4, 'class', 'btn btn-info fixed-height', 'type', 'button'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                            ', null);
        this._text_27 = this.renderer.createText(this._el_25, '\n                            Cancelar\n                        ', null);
        this._text_28 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._text_29 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_30 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n        ', null);
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
    View_QuestionPanelComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.QuestionHeaderComponent) && (6 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_6_3.context;
        }
        if (((token === import44.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import45.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_4.context;
        }
        if (((token === import46.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_5;
        }
        if (((token === import47.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_6;
        }
        if (((token === import48.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_7.context;
        }
        if (((token === import49.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_8;
        }
        if (((token === import50.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_9.context;
        }
        if (((token === import44.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import47.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_4;
        }
        if (((token === import48.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_5.context;
        }
        if (((token === import49.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_6;
        }
        if (((token === import50.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_7.context;
        }
        if (((token === import51.NgForm) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._NgForm_4_3.context;
        }
        if (((token === import52.ControlContainer) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._ControlContainer_4_4;
        }
        if (((token === import50.NgControlStatusGroup) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._NgControlStatusGroup_4_5.context;
        }
        return notFoundResult;
    };
    View_QuestionPanelComponent6.prototype.detectChangesInternal = function (throwOnChange) {
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
    View_QuestionPanelComponent6.prototype.destroyInternal = function () {
        this.compView_6.destroy();
        this._NgModel_10_7.ngOnDestroy();
        this._NgModel_17_5.ngOnDestroy();
        this._NgForm_4_3.ngOnDestroy();
    };
    View_QuestionPanelComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionPanelComponent6.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.parentView.context.updateQuestion() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionPanelComponent6.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.editTitle = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionPanelComponent6.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.editBody = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionPanelComponent6.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onQuestionDetailClicked(false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionPanelComponent6;
}(import2.AppView));
