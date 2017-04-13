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
import * as import0 from './question-header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/router/src/router';
import * as import10 from './question-header.component.css.shim.ngstyle';
import * as import11 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/common/src/pipes/date_pipe';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/i18n/tokens';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/common/src/directives/ng_if';
var Wrapper_QuestionHeaderComponent = (function () {
    function Wrapper_QuestionHeaderComponent(p0) {
        this._changed = false;
        this.context = new import0.QuestionHeaderComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_QuestionHeaderComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionHeaderComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionHeaderComponent.prototype.check_question = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.question = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_QuestionHeaderComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_QuestionHeaderComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionHeaderComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionHeaderComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionHeaderComponent;
}());
export { Wrapper_QuestionHeaderComponent };
var renderType_QuestionHeaderComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_QuestionHeaderComponent_Host0 = (function (_super) {
    __extends(View_QuestionHeaderComponent_Host0, _super);
    function View_QuestionHeaderComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionHeaderComponent_Host0, renderType_QuestionHeaderComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionHeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'question-header', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_QuestionHeaderComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionHeaderComponent_0_3 = new Wrapper_QuestionHeaderComponent(this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._QuestionHeaderComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._QuestionHeaderComponent_0_3.context);
    };
    View_QuestionHeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.QuestionHeaderComponent) && (0 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_QuestionHeaderComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionHeaderComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionHeaderComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_QuestionHeaderComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionHeaderComponent_Host0;
}(import2.AppView));
export var QuestionHeaderComponentNgFactory = new import8.ComponentFactory('question-header', View_QuestionHeaderComponent_Host0, import0.QuestionHeaderComponent);
var styles_QuestionHeaderComponent = [import10.styles];
var renderType_QuestionHeaderComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_QuestionHeaderComponent, {});
var View_QuestionHeaderComponent0 = (function (_super) {
    __extends(View_QuestionHeaderComponent0, _super);
    function View_QuestionHeaderComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_QuestionHeaderComponent0, renderType_QuestionHeaderComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._arr_26 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_27 = import1.UNINITIALIZED;
        _this._expr_28 = import1.UNINITIALIZED;
        return _this;
    }
    View_QuestionHeaderComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row row-fix'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'question-header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_6_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import16.LocationStrategy, this.parentIndex));
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_10 = new import12.ViewContainer(10, 2, this, this._anchor_10);
        this._TemplateRef_10_5 = new import17.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import13.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_12 = new import12.ViewContainer(12, 2, this, this._anchor_12);
        this._TemplateRef_12_5 = new import17.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import13.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_2, 'li', new import3.InlineArray2(2, 'class', 'question-info'), null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n', null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        this._pipe_date_0 = new import14.DatePipe(this.parentView.injectorGet(import18.LOCALE_ID, this.parentIndex));
        this._pipe_date_0_0 = import3.pureProxy2(this._pipe_date_0.transform.bind(this._pipe_date_0));
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._anchor_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18
        ]), [disposable_0]);
        return null;
    };
    View_QuestionHeaderComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._RouterLinkWithHref_6_3.context;
        }
        if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import20.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        if (((token === import17.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import20.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        return notFoundResult;
    };
    View_QuestionHeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_6_0_0 = this._arr_26('/question/home', ((this.context.question == null) ? null : ((this.context.question.categories[0] == null) ? null : this.context.question.categories[0].id)));
        this._RouterLinkWithHref_6_3.check_routerLink(currVal_6_0_0, throwOnChange, false);
        this._RouterLinkWithHref_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_10_0_0 = (!((this.context.question == null) ? null : this.context.question.questionTopics) || (((this.context.question == null) ? null : ((this.context.question.questionTopics == null) ? null : this.context.question.questionTopics.length)) != 0));
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        var currVal_12_0_0 = (!((this.context.question == null) ? null : this.context.question.questionLevels) || (((this.context.question == null) ? null : ((this.context.question.questionLevels == null) ? null : this.context.question.questionLevels.length)) != 0));
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_6_3.checkHost(this, this, this._el_6, throwOnChange);
        var currVal_27 = import3.inlineInterpolate(1, ' ', ((this.context.question.categories[0] == null) ? null : this.context.question.categories[0].name), '');
        if (import3.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setText(this._text_7, currVal_27);
            this._expr_27 = currVal_27;
        }
        valUnwrapper.reset();
        var currVal_28 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0, this._pipe_date_0.transform)(((this.context.question == null) ? null : this.context.question.createdOn), 'MMM, yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_28, currVal_28))) {
            this.renderer.setText(this._text_15, currVal_28);
            this._expr_28 = currVal_28;
        }
    };
    View_QuestionHeaderComponent0.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
        this._vc_12.destroyNestedViews();
        this._RouterLinkWithHref_6_3.ngOnDestroy();
    };
    View_QuestionHeaderComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_QuestionHeaderComponent1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        if ((nodeIndex == 12)) {
            return new View_QuestionHeaderComponent2(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        return null;
    };
    View_QuestionHeaderComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_6_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_QuestionHeaderComponent0;
}(import2.AppView));
export { View_QuestionHeaderComponent0 };
var View_QuestionHeaderComponent1 = (function (_super) {
    __extends(View_QuestionHeaderComponent1, _super);
    function View_QuestionHeaderComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionHeaderComponent1, renderType_QuestionHeaderComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_6 = import1.UNINITIALIZED;
        return _this;
    }
    View_QuestionHeaderComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray2(2, 'class', 'question-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n          \n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_3));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5
        ]), [disposable_0]);
        return null;
    };
    View_QuestionHeaderComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6 = import3.inlineInterpolate(1, ' ', ((this.parentView.context.question == null) ? null : this.parentView.context.question.questionTopicNames[0]), '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_4, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_QuestionHeaderComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionHeaderComponent1.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.topicRoute(((this.parentView.context.question == null) ? null : ((this.parentView.context.question.categories[0] == null) ? null : this.parentView.context.question.categories[0].id)), ((this.parentView.context.question == null) ? null : ((this.parentView.context.question.questionTopics[0] == null) ? null : this.parentView.context.question.questionTopics[0].topicId))) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionHeaderComponent1;
}(import2.AppView));
var View_QuestionHeaderComponent2 = (function (_super) {
    __extends(View_QuestionHeaderComponent2, _super);
    function View_QuestionHeaderComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionHeaderComponent2, renderType_QuestionHeaderComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_6 = import1.UNINITIALIZED;
        return _this;
    }
    View_QuestionHeaderComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray2(2, 'class', 'question-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n           \n           \n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_3));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5
        ]), [disposable_0]);
        return null;
    };
    View_QuestionHeaderComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6 = import3.inlineInterpolate(1, ' ', ((this.parentView.context.question == null) ? null : this.parentView.context.question.questionLevelNames[0]), '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_4, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_QuestionHeaderComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionHeaderComponent2.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.levelRoute(((this.parentView.context.question == null) ? null : ((this.parentView.context.question.categories[0] == null) ? null : this.parentView.context.question.categories[0].id)), ((this.parentView.context.question == null) ? null : ((this.parentView.context.question.questionTopics[0] == null) ? null : this.parentView.context.question.questionTopics[0].topicId)), ((this.parentView.context.question == null) ? null : ((this.parentView.context.question.questionLevels[0] == null) ? null : this.parentView.context.question.questionLevels[0].levelId))) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionHeaderComponent2;
}(import2.AppView));
