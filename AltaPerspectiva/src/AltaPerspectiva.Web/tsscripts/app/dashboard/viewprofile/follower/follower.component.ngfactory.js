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
import * as import0 from './follower.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '../../../services/profile.service';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../../../shared/user-info/user-info.component';
import * as import16 from '../../../shared/user-info/user-info.component.ngfactory';
import * as import17 from '@angular/http/src/http';
var Wrapper_FollowerComponent = (function () {
    function Wrapper_FollowerComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.FollowerComponent(p0, p1);
    }
    Wrapper_FollowerComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FollowerComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_FollowerComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_FollowerComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FollowerComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FollowerComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FollowerComponent;
}());
export { Wrapper_FollowerComponent };
var renderType_FollowerComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_FollowerComponent_Host0 = (function (_super) {
    __extends(View_FollowerComponent_Host0, _super);
    function View_FollowerComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_FollowerComponent_Host0, renderType_FollowerComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_FollowerComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_FollowerComponent0(this.viewUtils, this, 0, this._el_0);
        this._FollowerComponent_0_3 = new Wrapper_FollowerComponent(this.injectorGet(import8.ActivatedRoute, this.parentIndex), this.injectorGet(import9.ProfileService, this.parentIndex));
        this.compView_0.create(this._FollowerComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._FollowerComponent_0_3.context);
    };
    View_FollowerComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FollowerComponent) && (0 === requestNodeIndex))) {
            return this._FollowerComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_FollowerComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FollowerComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_FollowerComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._FollowerComponent_0_3.ngOnDestroy();
    };
    View_FollowerComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FollowerComponent_Host0;
}(import1.AppView));
export var FollowerComponentNgFactory = new import7.ComponentFactory('ng-component', View_FollowerComponent_Host0, import0.FollowerComponent);
var styles_FollowerComponent = ['.row-gap[_ngcontent-%COMP%] {\n        margin-top: 5%;\n    }'];
var renderType_FollowerComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_FollowerComponent, {});
var View_FollowerComponent0 = (function (_super) {
    __extends(View_FollowerComponent0, _super);
    function View_FollowerComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_FollowerComponent0, renderType_FollowerComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_FollowerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row row-fix '), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new import10.ViewContainer(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import12.TemplateRef_(this, 3, this._anchor_3);
        this._NgFor_3_6 = new import11.Wrapper_NgFor(this._vc_3.vcRef, this._TemplateRef_3_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._text_5
        ]), null);
        return null;
    };
    View_FollowerComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import14.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6.context;
        }
        return notFoundResult;
    };
    View_FollowerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.user;
        this._NgFor_3_6.check_ngForOf(currVal_3_0_0, throwOnChange, false);
        this._NgFor_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
    };
    View_FollowerComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
    };
    View_FollowerComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_FollowerComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_FollowerComponent0;
}(import1.AppView));
export { View_FollowerComponent0 };
var View_FollowerComponent1 = (function (_super) {
    __extends(View_FollowerComponent1, _super);
    function View_FollowerComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_FollowerComponent1, renderType_FollowerComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_FollowerComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-4 row-gap width-xs'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import16.View_UserInfoComponent0(this.viewUtils, this, 2, this._el_2);
        this._ProfileService_2_3 = new import9.ProfileService(this.parentView.parentView.injectorGet(import17.Http, this.parentView.parentIndex));
        this._UserInfoComponent_2_4 = new import16.Wrapper_UserInfoComponent(this._ProfileService_2_3);
        this.compView_2.create(this._UserInfoComponent_2_4.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_FollowerComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.ProfileService) && (2 === requestNodeIndex))) {
            return this._ProfileService_2_3;
        }
        if (((token === import15.UserInfoComponent) && (2 === requestNodeIndex))) {
            return this._UserInfoComponent_2_4.context;
        }
        return notFoundResult;
    };
    View_FollowerComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._UserInfoComponent_2_4.check_userObj(currVal_2_0_0, throwOnChange, false);
        this._UserInfoComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_FollowerComponent1.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_FollowerComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FollowerComponent1;
}(import1.AppView));
