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
import * as import0 from './home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../services/question-answer.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from './banner/apbanner.component';
import * as import11 from './banner/apbanner.component.ngfactory';
import * as import12 from './nav/apnav';
import * as import13 from '../services/authentication.service';
import * as import14 from '../services/profile.service';
import * as import15 from './nav/apnav.ngfactory';
import * as import16 from '../shared/search/apsearch.component';
import * as import17 from '../services/category.service';
import * as import18 from '../shared/search/apsearch.component.ngfactory';
import * as import19 from './tabs/tabs.component';
import * as import20 from './tabs/tabs.component.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '../services/window-ref.service';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from '@angular/router/src/router';
import * as import25 from '../services/communication.service';
var Wrapper_HomeComponent = (function () {
    function Wrapper_HomeComponent(p0) {
        this._changed = false;
        this.context = new import0.HomeComponent(p0);
    }
    Wrapper_HomeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_HomeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_HomeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_HomeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_HomeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_HomeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_HomeComponent;
}());
export { Wrapper_HomeComponent };
var renderType_HomeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_HomeComponent_Host0 = (function (_super) {
    __extends(View_HomeComponent_Host0, _super);
    function View_HomeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_HomeComponent_Host0, renderType_HomeComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_HomeComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import9.Http, this.parentIndex));
        this._HomeComponent_0_4 = new Wrapper_HomeComponent(this._QuestionAnswerService_0_3);
        this.compView_0.create(this._HomeComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._HomeComponent_0_4.context);
    };
    View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_HomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomeComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_HomeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_HomeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HomeComponent_Host0;
}(import1.AppView));
export var HomeComponentNgFactory = new import8.ComponentFactory('ng-component', View_HomeComponent_Host0, import0.HomeComponent);
var styles_HomeComponent = ['.banner-container[_ngcontent-%COMP%] {\n        position: relative;\n    }\n    .fixed-top[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 0;\n        width:100%\n    }'];
var renderType_HomeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_HomeComponent, {});
var View_HomeComponent0 = (function (_super) {
    __extends(View_HomeComponent0, _super);
    function View_HomeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_HomeComponent0, renderType_HomeComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'banner-container z-banner'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'ap-banner', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import11.View_ApBannerComponent0(this.viewUtils, this, 3, this._el_3);
        this._ApBannerComponent_3_3 = new import11.Wrapper_ApBannerComponent(new import21.ElementRef(this._el_3), this.parentView.injectorGet(import22.WindowRefService, this.parentIndex));
        this.compView_3.create(this._ApBannerComponent_3_3.context);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'ap-nav', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_5 = new import15.View_ApNav0(this.viewUtils, this, 5, this._el_5);
        this._AuthenticationService_5_3 = new import13.AuthenticationService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._ProfileService_5_4 = new import14.ProfileService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._ApNav_5_5 = new import15.Wrapper_ApNav(this._AuthenticationService_5_3, this._ProfileService_5_4, this.parentView.injectorGet(import23.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import24.Router, this.parentIndex), this.parentView.injectorGet(import25.CommunicationService, this.parentIndex));
        this.compView_5.create(this._ApNav_5_5.context);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_1, 'ap-search', new import3.InlineArray2(2, 'placeBottom', 'bottom-float'), null);
        this.compView_7 = new import18.View_ApSearchComponent0(this.viewUtils, this, 7, this._el_7);
        this._CategoryService_7_3 = new import17.CategoryService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._QuestionAnswerService_7_4 = new import5.QuestionAnswerService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._ApSearchComponent_7_5 = new import18.Wrapper_ApSearchComponent(this.parentView.injectorGet(import23.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import24.Router, this.parentIndex), this._CategoryService_7_3, this._QuestionAnswerService_7_4, this.parentView.injectorGet(import25.CommunicationService, this.parentIndex), new import21.ElementRef(this._el_7), this.parentView.injectorGet(import22.WindowRefService, this.parentIndex));
        this.compView_7.create(this._ApSearchComponent_7_5.context);
        this._text_8 = this.renderer.createText(this._el_1, '\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_10 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'ap-tabs', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_12 = new import20.View_TabsComponent0(this.viewUtils, this, 12, this._el_12);
        this._CategoryService_12_3 = new import17.CategoryService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._TabsComponent_12_4 = new import20.Wrapper_TabsComponent(this._CategoryService_12_3, this.parentView.injectorGet(import25.CommunicationService, this.parentIndex), this.parentView.injectorGet(import24.Router, this.parentIndex));
        this.compView_12.create(this._TabsComponent_12_4.context);
        this._text_13 = this.renderer.createText(this._el_10, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'scroll', 'window'), this.eventHandler(this.handleEvent_3));
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
            this._el_12,
            this._text_13,
            this._text_14
        ]), [disposable_0]);
        return null;
    };
    View_HomeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.ApBannerComponent) && (3 === requestNodeIndex))) {
            return this._ApBannerComponent_3_3.context;
        }
        if (((token === import13.AuthenticationService) && (5 === requestNodeIndex))) {
            return this._AuthenticationService_5_3;
        }
        if (((token === import14.ProfileService) && (5 === requestNodeIndex))) {
            return this._ProfileService_5_4;
        }
        if (((token === import12.ApNav) && (5 === requestNodeIndex))) {
            return this._ApNav_5_5.context;
        }
        if (((token === import17.CategoryService) && (7 === requestNodeIndex))) {
            return this._CategoryService_7_3;
        }
        if (((token === import5.QuestionAnswerService) && (7 === requestNodeIndex))) {
            return this._QuestionAnswerService_7_4;
        }
        if (((token === import16.ApSearchComponent) && (7 === requestNodeIndex))) {
            return this._ApSearchComponent_7_5.context;
        }
        if (((token === import17.CategoryService) && (12 === requestNodeIndex))) {
            return this._CategoryService_12_3;
        }
        if (((token === import19.TabsComponent) && (12 === requestNodeIndex))) {
            return this._TabsComponent_12_4.context;
        }
        return notFoundResult;
    };
    View_HomeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApBannerComponent_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this._ApNav_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_7_0_0 = 'bottom-float';
        this._ApSearchComponent_7_5.check_placeBottom(currVal_7_0_0, throwOnChange, false);
        this._ApSearchComponent_7_5.ngDoCheck(this, this._el_7, throwOnChange);
        this._TabsComponent_12_4.ngDoCheck(this, this._el_12, throwOnChange);
        this.compView_3.internalDetectChanges(throwOnChange);
        this.compView_5.internalDetectChanges(throwOnChange);
        this.compView_7.internalDetectChanges(throwOnChange);
        this.compView_12.internalDetectChanges(throwOnChange);
    };
    View_HomeComponent0.prototype.destroyInternal = function () {
        this.compView_3.destroy();
        this.compView_5.destroy();
        this.compView_7.destroy();
        this.compView_12.destroy();
        this._ApSearchComponent_7_5.ngOnDestroy();
    };
    View_HomeComponent0.prototype.handleEvent_3 = function (eventName, $event) {
        this.compView_3.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._ApBannerComponent_3_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_HomeComponent0;
}(import1.AppView));
export { View_HomeComponent0 };
