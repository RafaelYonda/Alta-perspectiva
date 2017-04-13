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
import * as import0 from './question-home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../shared/nav-bar/nav-bar.component';
import * as import9 from '../services/authentication.service';
import * as import10 from '../shared/nav-bar/nav-bar.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '@angular/http/src/http';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/router/src/directives/router_outlet';
var Wrapper_QuestionHomeComponent = (function () {
    function Wrapper_QuestionHomeComponent() {
        this._changed = false;
        this.context = new import0.QuestionHomeComponent();
    }
    Wrapper_QuestionHomeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionHomeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionHomeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_QuestionHomeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionHomeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionHomeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionHomeComponent;
}());
export { Wrapper_QuestionHomeComponent };
var renderType_QuestionHomeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_QuestionHomeComponent_Host0 = (function (_super) {
    __extends(View_QuestionHomeComponent_Host0, _super);
    function View_QuestionHomeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionHomeComponent_Host0, renderType_QuestionHomeComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionHomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_QuestionHomeComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionHomeComponent_0_3 = new Wrapper_QuestionHomeComponent();
        this.compView_0.create(this._QuestionHomeComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._QuestionHomeComponent_0_3.context);
    };
    View_QuestionHomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.QuestionHomeComponent) && (0 === requestNodeIndex))) {
            return this._QuestionHomeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_QuestionHomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionHomeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionHomeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_QuestionHomeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionHomeComponent_Host0;
}(import1.AppView));
export var QuestionHomeComponentNgFactory = new import7.ComponentFactory('ng-component', View_QuestionHomeComponent_Host0, import0.QuestionHomeComponent);
var styles_QuestionHomeComponent = ['.banner-container[_ngcontent-%COMP%] {\n        position: relative;\n    }\n\n    .fixed-top[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 0;\n    }\n\n    .background-set[_nghost-%COMP%] {\n        min-height: 66px !important;\n        background-image: url(../images/background.png);\n    }\n\n    .body-padding[_ngcontent-%COMP%] {\n        padding-top: 150px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        margin-left: 33%;\n    }'];
var renderType_QuestionHomeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_QuestionHomeComponent, {});
var View_QuestionHomeComponent0 = (function (_super) {
    __extends(View_QuestionHomeComponent0, _super);
    function View_QuestionHomeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionHomeComponent0, renderType_QuestionHomeComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionHomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'nav-bar', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import10.View_NavBarComponent0(this.viewUtils, this, 3, this._el_3);
        this._AuthenticationService_3_3 = new import9.AuthenticationService(this.parentView.injectorGet(import13.Http, this.parentIndex));
        this._NavBarComponent_3_4 = new import10.Wrapper_NavBarComponent(this._AuthenticationService_3_3, this.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import15.Router, this.parentIndex));
        this.compView_3.create(this._NavBarComponent_3_4.context);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_5 = new import11.ViewContainer(5, 1, this, this._el_5);
        this._RouterOutlet_5_5 = new import12.Wrapper_RouterOutlet(this.parentView.injectorGet(import16.RouterOutletMap, this.parentIndex), this._vc_5.vcRef, this.parentView.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), null);
        this._text_6 = this.renderer.createText(this._el_1, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6
        ]), null);
        return null;
    };
    View_QuestionHomeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.AuthenticationService) && (3 === requestNodeIndex))) {
            return this._AuthenticationService_3_3;
        }
        if (((token === import8.NavBarComponent) && (3 === requestNodeIndex))) {
            return this._NavBarComponent_3_4.context;
        }
        if (((token === import17.RouterOutlet) && (5 === requestNodeIndex))) {
            return this._RouterOutlet_5_5.context;
        }
        return notFoundResult;
    };
    View_QuestionHomeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavBarComponent_3_4.ngDoCheck(this, this._el_3, throwOnChange);
        this._RouterOutlet_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this.compView_3.internalDetectChanges(throwOnChange);
    };
    View_QuestionHomeComponent0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this.compView_3.destroy();
        this._RouterOutlet_5_5.ngOnDestroy();
    };
    return View_QuestionHomeComponent0;
}(import1.AppView));
export { View_QuestionHomeComponent0 };
