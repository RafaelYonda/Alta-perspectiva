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
import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_container';
import * as import6 from './services/authentication.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from 'ng2-toastr/src/toast-manager';
import * as import13 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import14 from '@angular/router/src/router_outlet_map';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from '@angular/router/src/directives/router_outlet';
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.AppComponent(p0, p1, p2, p3);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
export { Wrapper_AppComponent };
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import5.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuthenticationService_0_5 = new import6.AuthenticationService(this.injectorGet(import10.Http, this.parentIndex));
        this._AppComponent_0_6 = new Wrapper_AppComponent(new import11.ElementRef(this._el_0), this._AuthenticationService_0_5, this.injectorGet(import12.ToastsManager, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._AppComponent_0_6.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._AppComponent_0_6.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_5;
        }
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import9.ComponentFactory('app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent0, renderType_AppComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_2 = new import5.ViewContainer(2, 0, this, this._el_2);
        this._RouterOutlet_2_5 = new import13.Wrapper_RouterOutlet(this.parentView.injectorGet(import14.RouterOutletMap, this.parentIndex), this._vc_2.vcRef, this.parentView.injectorGet(import15.ComponentFactoryResolver, this.parentIndex), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.RouterOutlet) && (2 === requestNodeIndex))) {
            return this._RouterOutlet_2_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RouterOutlet_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._RouterOutlet_2_5.ngOnDestroy();
    };
    return View_AppComponent0;
}(import1.AppView));
export { View_AppComponent0 };
