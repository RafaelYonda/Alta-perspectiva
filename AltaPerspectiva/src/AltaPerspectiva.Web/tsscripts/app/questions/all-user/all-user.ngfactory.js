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
import * as import0 from './all-user';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/authentication.service';
import * as import7 from '../../services/profile.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '@angular/router/src/router';
import * as import14 from '../../services/communication.service';
import * as import15 from './all-user.css.shim.ngstyle';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import19 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import20 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import21 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import25 from '@angular/common/src/directives/ng_if';
import * as import26 from '@angular/forms/src/directives/default_value_accessor';
import * as import27 from '@angular/forms/src/directives/control_value_accessor';
import * as import28 from '@angular/forms/src/directives/ng_model';
import * as import29 from '@angular/forms/src/directives/ng_control';
import * as import30 from '@angular/forms/src/directives/ng_control_status';
import * as import31 from '@angular/common/src/directives/ng_for';
import * as import32 from '../../shared/user-info/user-info.component';
import * as import33 from '../../shared/user-info/user-info.component.ngfactory';
var Wrapper_AllUserComponent = (function () {
    function Wrapper_AllUserComponent(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.AllUserComponent(p0, p1, p2, p3, p4);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_AllUserComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AllUserComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AllUserComponent.prototype.check_className = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.className = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_AllUserComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AllUserComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AllUserComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AllUserComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AllUserComponent;
}());
export { Wrapper_AllUserComponent };
var renderType_AllUserComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_AllUserComponent_Host0 = (function (_super) {
    __extends(View_AllUserComponent_Host0, _super);
    function View_AllUserComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AllUserComponent_Host0, renderType_AllUserComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AllUserComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'all-users', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AllUserComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuthenticationService_0_3 = new import6.AuthenticationService(this.injectorGet(import11.Http, this.parentIndex));
        this._ProfileService_0_4 = new import7.ProfileService(this.injectorGet(import11.Http, this.parentIndex));
        this._AllUserComponent_0_5 = new Wrapper_AllUserComponent(this._AuthenticationService_0_3, this._ProfileService_0_4, this.injectorGet(import12.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import13.Router, this.parentIndex), this.injectorGet(import14.CommunicationService, this.parentIndex));
        this.compView_0.create(this._AllUserComponent_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._AllUserComponent_0_5.context);
    };
    View_AllUserComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_3;
        }
        if (((token === import7.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_4;
        }
        if (((token === import0.AllUserComponent) && (0 === requestNodeIndex))) {
            return this._AllUserComponent_0_5.context;
        }
        return notFoundResult;
    };
    View_AllUserComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AllUserComponent_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AllUserComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AllUserComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AllUserComponent_Host0;
}(import2.AppView));
export var AllUserComponentNgFactory = new import10.ComponentFactory('all-users', View_AllUserComponent_Host0, import0.AllUserComponent);
var styles_AllUserComponent = [
    '.all-user-list[_ngcontent-%COMP%] {\n        width: 70%;\n        margin: 10px auto;\n        background-color: #f9f6f6;\n    }\n\n    .user-search[_ngcontent-%COMP%] {\n        padding: 5px;\n        width: 90%;\n        height: 35px;\n        border: 1px solid #cccbcb;\n        border-bottom-left-radius: 6px;\n        border-top-left-radius: 6px;\n        margin-bottom: 20px;\n    }\n\n    .btn-usr-search[_ngcontent-%COMP%] {\n        width: 9%;\n        height: 35px;\n        margin: -5px;\n        background-color: #efa55c;\n        border: 1px;\n        border-bottom-right-radius: 6px;\n        border-top-right-radius: 6px;\n    }\n\n    .usr-search-group[_ngcontent-%COMP%] {\n        padding: 0 25%;\n    }',
    import15.styles
];
var renderType_AllUserComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_AllUserComponent, {});
var View_AllUserComponent0 = (function (_super) {
    __extends(View_AllUserComponent0, _super);
    function View_AllUserComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AllUserComponent0, renderType_AllUserComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AllUserComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new import16.ViewContainer(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import22.TemplateRef_(this, 1, this._anchor_1);
        this._NgIf_1_6 = new import17.Wrapper_NgIf(this._vc_1.vcRef, this._TemplateRef_1_5);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'usr-search-group'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'input', new import3.InlineArray8(6, 'class', 'user-search', 'placeholder', 'Ingresa nombre de usuario', 'type', 'text'), null);
        this._DefaultValueAccessor_5_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import23.ElementRef(this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
        this._NgModel_5_5 = new import19.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._NgModel_5_5.context;
        this._NgControlStatus_5_7 = new import20.Wrapper_NgControlStatus(this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_3, 'button', new import3.InlineArray2(2, 'class', 'btn-usr-search'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Buscar', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_11 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row row-fix all-user-list'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_13 = new import16.ViewContainer(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import22.TemplateRef_(this, 13, this._anchor_13);
        this._NgFor_13_6 = new import21.Wrapper_NgFor(this._vc_13.vcRef, this._TemplateRef_13_5, this.parentView.injectorGet(import24.IterableDiffers, this.parentIndex), this.ref);
        this._text_14 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray4(4, 'class', 'hidden-xs', 'style', 'height:400px;position:relative; float:left;'), null);
        this._text_17 = this.renderer.createText(this._el_11, '\n', null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_5));
        this._NgModel_5_5.subscribe(this, this.eventHandler(this.handleEvent_5), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._anchor_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_AllUserComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import25.NgIf) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6.context;
        }
        if (((token === import26.DefaultValueAccessor) && (5 === requestNodeIndex))) {
            return this._DefaultValueAccessor_5_3.context;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === import28.NgModel) && (5 === requestNodeIndex))) {
            return this._NgModel_5_5.context;
        }
        if (((token === import29.NgControl) && (5 === requestNodeIndex))) {
            return this._NgControl_5_6;
        }
        if (((token === import30.NgControlStatus) && (5 === requestNodeIndex))) {
            return this._NgControlStatus_5_7.context;
        }
        if (((token === import22.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import31.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        return notFoundResult;
    };
    View_AllUserComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.context.loader;
        this._NgIf_1_6.check_ngIf(currVal_1_0_0, throwOnChange, false);
        this._NgIf_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        this._DefaultValueAccessor_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = this.context.userName;
        this._NgModel_5_5.check_model(currVal_5_1_0, throwOnChange, false);
        this._NgModel_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_13_0_0 = this.context.user;
        this._NgFor_13_6.check_ngForOf(currVal_13_0_0, throwOnChange, false);
        this._NgFor_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_5_7.checkHost(this, this, this._el_5, throwOnChange);
    };
    View_AllUserComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_13.destroyNestedViews();
        this._NgModel_5_5.ngOnDestroy();
    };
    View_AllUserComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_AllUserComponent1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        if ((nodeIndex == 13)) {
            return new View_AllUserComponent2(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        return null;
    };
    View_AllUserComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_5_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.userName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AllUserComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onKeyPress() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AllUserComponent0;
}(import2.AppView));
export { View_AllUserComponent0 };
var View_AllUserComponent1 = (function (_super) {
    __extends(View_AllUserComponent1, _super);
    function View_AllUserComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AllUserComponent1, renderType_AllUserComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AllUserComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'modal-overlay z-modal'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'loader'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AllUserComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AllUserComponent1;
}(import2.AppView));
var View_AllUserComponent2 = (function (_super) {
    __extends(View_AllUserComponent2, _super);
    function View_AllUserComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AllUserComponent2, renderType_AllUserComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AllUserComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-4 row-gap width-xs'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import33.View_UserInfoComponent0(this.viewUtils, this, 2, this._el_2);
        this._ProfileService_2_3 = new import7.ProfileService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._UserInfoComponent_2_4 = new import33.Wrapper_UserInfoComponent(this._ProfileService_2_3);
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
    View_AllUserComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import7.ProfileService) && (2 === requestNodeIndex))) {
            return this._ProfileService_2_3;
        }
        if (((token === import32.UserInfoComponent) && (2 === requestNodeIndex))) {
            return this._UserInfoComponent_2_4.context;
        }
        return notFoundResult;
    };
    View_AllUserComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._UserInfoComponent_2_4.check_userObj(currVal_2_0_0, throwOnChange, false);
        this._UserInfoComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_AllUserComponent2.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AllUserComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AllUserComponent2;
}(import2.AppView));
