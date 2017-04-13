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
import * as import0 from './learnHome';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
var Wrapper_LearnHome = (function () {
    function Wrapper_LearnHome() {
        this._changed = false;
        this.context = new import0.LearnHome();
    }
    Wrapper_LearnHome.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LearnHome.prototype.ngOnDestroy = function () {
    };
    Wrapper_LearnHome.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_LearnHome.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LearnHome.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LearnHome.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LearnHome;
}());
export { Wrapper_LearnHome };
var renderType_LearnHome_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LearnHome_Host0 = (function (_super) {
    __extends(View_LearnHome_Host0, _super);
    function View_LearnHome_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LearnHome_Host0, renderType_LearnHome_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LearnHome_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LearnHome0(this.viewUtils, this, 0, this._el_0);
        this._LearnHome_0_3 = new Wrapper_LearnHome();
        this.compView_0.create(this._LearnHome_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._LearnHome_0_3.context);
    };
    View_LearnHome_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LearnHome) && (0 === requestNodeIndex))) {
            return this._LearnHome_0_3.context;
        }
        return notFoundResult;
    };
    View_LearnHome_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LearnHome_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LearnHome_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LearnHome_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LearnHome_Host0;
}(import1.AppView));
export var LearnHomeNgFactory = new import7.ComponentFactory('ng-component', View_LearnHome_Host0, import0.LearnHome);
var styles_LearnHome = [];
var renderType_LearnHome = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_LearnHome, {});
var View_LearnHome0 = (function (_super) {
    __extends(View_LearnHome0, _super);
    function View_LearnHome0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LearnHome0, renderType_LearnHome, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LearnHome0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Learn here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    return View_LearnHome0;
}(import1.AppView));
export { View_LearnHome0 };
