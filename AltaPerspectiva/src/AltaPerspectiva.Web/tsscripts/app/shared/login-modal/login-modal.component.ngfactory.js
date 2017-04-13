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
import * as import0 from './login-modal.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question-answer.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router';
import * as import11 from './login-modal.component.css.shim.ngstyle';
var Wrapper_loginModalComponent = (function () {
    function Wrapper_loginModalComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.loginModalComponent(p0, p1);
    }
    Wrapper_loginModalComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_loginModalComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_loginModalComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_loginModalComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_loginModalComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_loginModalComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_loginModalComponent;
}());
export { Wrapper_loginModalComponent };
var renderType_loginModalComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_loginModalComponent_Host0 = (function (_super) {
    __extends(View_loginModalComponent_Host0, _super);
    function View_loginModalComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_loginModalComponent_Host0, renderType_loginModalComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_loginModalComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'dlg', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_loginModalComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import9.Http, this.parentIndex));
        this._loginModalComponent_0_4 = new Wrapper_loginModalComponent(this._QuestionAnswerService_0_3, this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._loginModalComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._loginModalComponent_0_4.context);
    };
    View_loginModalComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import0.loginModalComponent) && (0 === requestNodeIndex))) {
            return this._loginModalComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_loginModalComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._loginModalComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_loginModalComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_loginModalComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_loginModalComponent_Host0;
}(import1.AppView));
export var loginModalComponentNgFactory = new import8.ComponentFactory('dlg', View_loginModalComponent_Host0, import0.loginModalComponent);
var styles_loginModalComponent = [
    '.disabledFollowingImg[_ngcontent-%COMP%] {\n        opacity: .1;\n    }\n\n    .enableFollowingImg[_ngcontent-%COMP%] {\n        opacity: 1;\n    }\n\n    .login-dialog[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 30px;\n    }\n\n    .btn-lg[_ngcontent-%COMP%] {\n        padding: 12px;\n        color: black;\n    }',
    import11.styles
];
var renderType_loginModalComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_loginModalComponent, {});
var View_loginModalComponent0 = (function (_super) {
    __extends(View_loginModalComponent0, _super);
    function View_loginModalComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_loginModalComponent0, renderType_loginModalComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_loginModalComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'login-dialog'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, 'Inicia sesión', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_5, 'a', new import3.InlineArray4(4, 'class', 'btn btn-primary btn-lg', 'href', '/signin'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_12 = this.renderer.createText(this._el_10, '\n                Iniciar sesión\n            ', null);
        this._text_13 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_5, 'a', new import3.InlineArray2(2, 'class', 'btn-lg btn btn-default '), null);
        this._text_15 = this.renderer.createText(this._el_14, 'Ahora no', null);
        this._text_16 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_1, '\n', null);
        this._text_19 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
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
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_loginModalComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_loginModalComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_loginModalComponent0;
}(import1.AppView));
export { View_loginModalComponent0 };
