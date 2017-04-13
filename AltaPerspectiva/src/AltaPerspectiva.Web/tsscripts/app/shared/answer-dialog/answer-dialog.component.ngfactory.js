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
import * as import0 from './answer-dialog.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './answer-dialog.component.css.shim.ngstyle';
import * as import9 from '@angular/core/src/linker/query_list';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../answer-submit/answer-submit.component';
import * as import12 from '../../services/question-answer.service';
import * as import13 from '../../services/profile.service';
import * as import14 from '../answer-submit/answer-submit.component.ngfactory';
import * as import15 from '@angular/http/src/http';
import * as import16 from '@angular/router/src/router';
import * as import17 from '../../services/authentication.service';
import * as import18 from 'ng2-toastr/src/toast-manager';
var Wrapper_AnswerDialogComponent = (function () {
    function Wrapper_AnswerDialogComponent() {
        this._changed = false;
        this.context = new import0.AnswerDialogComponent();
    }
    Wrapper_AnswerDialogComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AnswerDialogComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AnswerDialogComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AnswerDialogComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AnswerDialogComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AnswerDialogComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AnswerDialogComponent;
}());
export { Wrapper_AnswerDialogComponent };
var renderType_AnswerDialogComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AnswerDialogComponent_Host0 = (function (_super) {
    __extends(View_AnswerDialogComponent_Host0, _super);
    function View_AnswerDialogComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AnswerDialogComponent_Host0, renderType_AnswerDialogComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AnswerDialogComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'answer-dialog', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AnswerDialogComponent0(this.viewUtils, this, 0, this._el_0);
        this._AnswerDialogComponent_0_3 = new Wrapper_AnswerDialogComponent();
        this.compView_0.create(this._AnswerDialogComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AnswerDialogComponent_0_3.context);
    };
    View_AnswerDialogComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AnswerDialogComponent) && (0 === requestNodeIndex))) {
            return this._AnswerDialogComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AnswerDialogComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AnswerDialogComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AnswerDialogComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AnswerDialogComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AnswerDialogComponent_Host0;
}(import1.AppView));
export var AnswerDialogComponentNgFactory = new import7.ComponentFactory('answer-dialog', View_AnswerDialogComponent_Host0, import0.AnswerDialogComponent);
var styles_AnswerDialogComponent = [import8.styles];
var renderType_AnswerDialogComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AnswerDialogComponent, {});
var View_AnswerDialogComponent0 = (function (_super) {
    __extends(View_AnswerDialogComponent0, _super);
    function View_AnswerDialogComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AnswerDialogComponent0, renderType_AnswerDialogComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AnswerDialogComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_AnswerSubmitComponent_0 = new import9.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'modal-content answer-dialog'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'x', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'answer-submit', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_7 = new import10.ViewContainer(7, 2, this, this._el_7);
        this.compView_7 = new import14.View_AnswerSubmitComponent0(this.viewUtils, this, 7, this._el_7);
        this._QuestionAnswerService_7_5 = new import12.QuestionAnswerService(this.parentView.injectorGet(import15.Http, this.parentIndex));
        this._ProfileService_7_6 = new import13.ProfileService(this.parentView.injectorGet(import15.Http, this.parentIndex));
        this._AnswerSubmitComponent_7_7 = new import14.Wrapper_AnswerSubmitComponent(this._QuestionAnswerService_7_5, this.parentView.injectorGet(import16.Router, this.parentIndex), this._ProfileService_7_6, this.parentView.injectorGet(import17.AuthenticationService, this.parentIndex), this.parentView.injectorGet(import18.ToastsManager, this.parentIndex), this._vc_7.vcRef);
        this.compView_7.create(this._AnswerSubmitComponent_7_7.context);
        this._text_8 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        this._viewQuery_AnswerSubmitComponent_0.reset([this._AnswerSubmitComponent_7_7.context]);
        this.context.anserSubmit = this._viewQuery_AnswerSubmitComponent_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_AnswerDialogComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.QuestionAnswerService) && (7 === requestNodeIndex))) {
            return this._QuestionAnswerService_7_5;
        }
        if (((token === import13.ProfileService) && (7 === requestNodeIndex))) {
            return this._ProfileService_7_6;
        }
        if (((token === import11.AnswerSubmitComponent) && (7 === requestNodeIndex))) {
            return this._AnswerSubmitComponent_7_7.context;
        }
        return notFoundResult;
    };
    View_AnswerDialogComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this.context.question;
        this._AnswerSubmitComponent_7_7.check_question(currVal_7_0_0, throwOnChange, false);
        var currVal_7_0_1 = false;
        this._AnswerSubmitComponent_7_7.check_isFullScreen(currVal_7_0_1, throwOnChange, false);
        var currVal_7_0_2 = this.context.isDetail;
        this._AnswerSubmitComponent_7_7.check_isDetail(currVal_7_0_2, throwOnChange, false);
        this._AnswerSubmitComponent_7_7.ngDoCheck(this, this._el_7, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this.compView_7.internalDetectChanges(throwOnChange);
    };
    View_AnswerDialogComponent0.prototype.destroyInternal = function () {
        this._vc_7.destroyNestedViews();
        this.compView_7.destroy();
    };
    View_AnswerDialogComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AnswerDialogComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AnswerDialogComponent0;
}(import1.AppView));
export { View_AnswerDialogComponent0 };
