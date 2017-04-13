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
import * as import0 from './dashboard.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import10 from '@angular/router/src/router_outlet_map';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '@angular/router/src/directives/router_outlet';
var Wrapper_DashBoardComponent = (function () {
    function Wrapper_DashBoardComponent() {
        this._changed = false;
        this.context = new import0.DashBoardComponent();
    }
    Wrapper_DashBoardComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DashBoardComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DashBoardComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_DashBoardComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DashBoardComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DashBoardComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DashBoardComponent;
}());
export { Wrapper_DashBoardComponent };
var renderType_DashBoardComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DashBoardComponent_Host0 = (function (_super) {
    __extends(View_DashBoardComponent_Host0, _super);
    function View_DashBoardComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DashBoardComponent_Host0, renderType_DashBoardComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DashBoardComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DashBoardComponent0(this.viewUtils, this, 0, this._el_0);
        this._DashBoardComponent_0_3 = new Wrapper_DashBoardComponent();
        this.compView_0.create(this._DashBoardComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DashBoardComponent_0_3.context);
    };
    View_DashBoardComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DashBoardComponent) && (0 === requestNodeIndex))) {
            return this._DashBoardComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_DashBoardComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DashBoardComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DashBoardComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DashBoardComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DashBoardComponent_Host0;
}(import1.AppView));
export var DashBoardComponentNgFactory = new import7.ComponentFactory('ng-component', View_DashBoardComponent_Host0, import0.DashBoardComponent);
var styles_DashBoardComponent = [];
var renderType_DashBoardComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DashBoardComponent, {});
var View_DashBoardComponent0 = (function (_super) {
    __extends(View_DashBoardComponent0, _super);
    function View_DashBoardComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DashBoardComponent0, renderType_DashBoardComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DashBoardComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_1 = new import8.ViewContainer(1, null, this, this._el_1);
        this._RouterOutlet_1_5 = new import9.Wrapper_RouterOutlet(this.parentView.injectorGet(import10.RouterOutletMap, this.parentIndex), this._vc_1.vcRef, this.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentIndex), null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1
        ]), null);
        return null;
    };
    View_DashBoardComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.RouterOutlet) && (1 === requestNodeIndex))) {
            return this._RouterOutlet_1_5.context;
        }
        return notFoundResult;
    };
    View_DashBoardComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RouterOutlet_1_5.ngDoCheck(this, this._el_1, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
    };
    View_DashBoardComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._RouterOutlet_1_5.ngOnDestroy();
    };
    return View_DashBoardComponent0;
}(import1.AppView));
export { View_DashBoardComponent0 };
