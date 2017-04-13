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
import * as import0 from './blog-create.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_container';
import * as import6 from '../../../services/profile.service';
import * as import7 from '../../../services/blog.service';
import * as import8 from '../../../services/authentication.service';
import * as import9 from '@angular/core/src/linker/view_type';
import * as import10 from '@angular/core/src/change_detection/constants';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/http/src/http';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '@angular/router/src/router';
import * as import16 from 'ng2-toastr/src/toast-manager';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import19 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import20 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from '@angular/forms/src/directives/ng_form';
import * as import24 from '@angular/forms/src/directives/control_container';
import * as import25 from '@angular/forms/src/directives/ng_control_status';
import * as import26 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import27 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import28 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import29 from '@angular/core/src/change_detection/change_detection_util';
import * as import30 from '@angular/core/src/linker/element_ref';
import * as import31 from '@angular/forms/src/directives/default_value_accessor';
import * as import32 from '@angular/forms/src/directives/validators';
import * as import33 from '@angular/forms/src/validators';
import * as import34 from '@angular/forms/src/directives/control_value_accessor';
import * as import35 from '@angular/forms/src/directives/ng_model';
import * as import36 from '@angular/forms/src/directives/ng_control';
import * as import37 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import38 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import39 from '@angular/common/src/directives/ng_for';
var Wrapper_BlogCreateComponent = (function () {
    function Wrapper_BlogCreateComponent(p0, p1, p2, p3, p4, p5, p6, p7) {
        this._changed = false;
        this.context = new import0.BlogCreateComponent(p0, p1, p2, p3, p4, p5, p6, p7);
    }
    Wrapper_BlogCreateComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BlogCreateComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BlogCreateComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BlogCreateComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BlogCreateComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BlogCreateComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BlogCreateComponent;
}());
export { Wrapper_BlogCreateComponent };
var renderType_BlogCreateComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BlogCreateComponent_Host0 = (function (_super) {
    __extends(View_BlogCreateComponent_Host0, _super);
    function View_BlogCreateComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BlogCreateComponent_Host0, renderType_BlogCreateComponent_Host, import9.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BlogCreateComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import5.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_BlogCreateComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_5 = new import6.ProfileService(this.injectorGet(import12.Http, this.parentIndex));
        this._BlogService_0_6 = new import7.BlogService(this.injectorGet(import12.Http, this.parentIndex));
        this._AuthenticationService_0_7 = new import8.AuthenticationService(this.injectorGet(import12.Http, this.parentIndex));
        this._BlogCreateComponent_0_8 = new Wrapper_BlogCreateComponent(this.injectorGet(import13.ActivatedRoute, this.parentIndex), this._ProfileService_0_5, this.injectorGet(import14.ComponentFactoryResolver, this.parentIndex), this._BlogService_0_6, this._AuthenticationService_0_7, this.injectorGet(import15.Router, this.parentIndex), this.injectorGet(import16.ToastsManager, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._BlogCreateComponent_0_8.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import11.ComponentRef_(0, this, this._el_0, this._BlogCreateComponent_0_8.context);
    };
    View_BlogCreateComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_5;
        }
        if (((token === import7.BlogService) && (0 === requestNodeIndex))) {
            return this._BlogService_0_6;
        }
        if (((token === import8.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_7;
        }
        if (((token === import0.BlogCreateComponent) && (0 === requestNodeIndex))) {
            return this._BlogCreateComponent_0_8.context;
        }
        return notFoundResult;
    };
    View_BlogCreateComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BlogCreateComponent_0_8.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BlogCreateComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_BlogCreateComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_BlogCreateComponent_Host0;
}(import1.AppView));
export var BlogCreateComponentNgFactory = new import11.ComponentFactory('ng-component', View_BlogCreateComponent_Host0, import0.BlogCreateComponent);
var styles_BlogCreateComponent = ['.move-left-35[_ngcontent-%COMP%] {\n        margin-left: -35px;\n    }\n\n    .post-info[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        color: #d6d1d1;\n    }\n\n    .blog-list-panel[_ngcontent-%COMP%] {\n        border: 1px dashed #e8d258;\n        border-radius: 6px;\n        padding: 10px;\n        text-align: center;\n        cursor: pointer;\n        margin-top: 15px;\n    }\n\n    .col-md-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n        border: 1px dashed #cfb730;\n        background-color: rgba(241, 230, 169, 0.50);\n    }'];
var renderType_BlogCreateComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_BlogCreateComponent, {});
var View_BlogCreateComponent0 = (function (_super) {
    __extends(View_BlogCreateComponent0, _super);
    function View_BlogCreateComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BlogCreateComponent0, renderType_BlogCreateComponent, import9.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BlogCreateComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import17.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_1 = new import5.ViewContainer(1, null, this, this._el_1);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_3_3 = new import18.Wrapper_NgForm(null, null);
        this._ControlContainer_3_4 = this._NgForm_3_3.context;
        this._NgControlStatusGroup_3_5 = new import19.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_5 = new import5.ViewContainer(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import21.TemplateRef_(this, 5, this._anchor_5);
        this._NgIf_5_6 = new import20.Wrapper_NgIf(this._vc_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_3, '\n', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_10 = new import5.ViewContainer(10, null, this, this._anchor_10);
        this._TemplateRef_10_5 = new import21.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import20.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_3));
        this._NgForm_3_3.subscribe(this, this.eventHandler(this.handleEvent_3), true);
        this._viewQuery_logginAnchor_0.reset([this._vc_1.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._anchor_10
        ]), [disposable_0]);
        return null;
    };
    View_BlogCreateComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import22.NgIf) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        if (((token === import23.NgForm) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NgForm_3_3.context;
        }
        if (((token === import24.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ControlContainer_3_4;
        }
        if (((token === import25.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NgControlStatusGroup_3_5.context;
        }
        if (((token === import21.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import22.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        return notFoundResult;
    };
    View_BlogCreateComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this._NgControlStatusGroup_3_5.ngDoCheck(this, this._el_3, throwOnChange);
        var currVal_5_0_0 = this.context.isOwner;
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        var currVal_10_0_0 = this.context.blog;
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_3_5.checkHost(this, this, this._el_3, throwOnChange);
    };
    View_BlogCreateComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_5.destroyNestedViews();
        this._vc_10.destroyNestedViews();
        this._NgForm_3_3.ngOnDestroy();
    };
    View_BlogCreateComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_BlogCreateComponent1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        if ((nodeIndex == 10)) {
            return new View_BlogCreateComponent2(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    };
    View_BlogCreateComponent0.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_3_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.saveBlog(this._NgForm_3_3.context) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogCreateComponent0;
}(import1.AppView));
export { View_BlogCreateComponent0 };
var View_BlogCreateComponent1 = (function (_super) {
    __extends(View_BlogCreateComponent1, _super);
    function View_BlogCreateComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogCreateComponent1, renderType_BlogCreateComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_79 = import29.UNINITIALIZED;
        _this._expr_80 = import29.UNINITIALIZED;
        _this._map_81 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_82 = import29.UNINITIALIZED;
        return _this;
    }
    View_BlogCreateComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'form-horizontal'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'label', new import3.InlineArray2(2, 'class', 'control-label col-sm-3'), null);
        this._text_5 = this.renderer.createText(this._el_4, ' Nombre del blog*', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'col-sm-3'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'id', 'blogName', 'name', 'blogName', 'placeholder', 'Mi Blog', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_9_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import30.ElementRef(this._el_9));
        this._RequiredValidator_9_4 = new import27.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_9_5 = [this._RequiredValidator_9_4.context];
        this._NG_VALUE_ACCESSOR_9_6 = [this._DefaultValueAccessor_9_3.context];
        this._NgModel_9_7 = new import28.Wrapper_NgModel(this.parentView._ControlContainer_3_4, this._NG_VALIDATORS_9_5, null, this._NG_VALUE_ACCESSOR_9_6);
        this._NgControl_9_8 = this._NgModel_9_7.context;
        this._NgControlStatus_9_9 = new import19.Wrapper_NgControlStatus(this._NgControl_9_8);
        this._text_10 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n                    ', null);
        this._text_13 = this.renderer.createText(this._el_11, '\n                    Nombre del blog requerido!\n\n                ', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'label', new import3.InlineArray2(2, 'class', 'control-label col-sm-3'), null);
        this._text_20 = this.renderer.createText(this._el_19, 'URL*', null);
        this._text_21 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'col-sm-1'), null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_22, 'label', new import3.InlineArray2(2, 'class', 'control-label'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'https://', null);
        this._text_25 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'col-sm-3'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'id', 'url', 'name', 'url', 'placeholder', 'miblog', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_28_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import30.ElementRef(this._el_28));
        this._RequiredValidator_28_4 = new import27.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_28_5 = [this._RequiredValidator_28_4.context];
        this._NG_VALUE_ACCESSOR_28_6 = [this._DefaultValueAccessor_28_3.context];
        this._NgModel_28_7 = new import28.Wrapper_NgModel(this.parentView._ControlContainer_3_4, this._NG_VALIDATORS_28_5, null, this._NG_VALUE_ACCESSOR_28_6);
        this._NgControl_28_8 = this._NgModel_28_7.context;
        this._NgControlStatus_28_9 = new import19.Wrapper_NgControlStatus(this._NgControl_28_8);
        this._text_29 = this.renderer.createText(this._el_26, '\n                ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_26, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                    ', null);
        this._text_32 = this.renderer.createText(this._el_30, '\n                    Url es necesario!\n                ', null);
        this._text_33 = this.renderer.createText(this._el_26, '\n            ', null);
        this._text_34 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'col-sm-3 '), null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_35, 'label', new import3.InlineArray2(2, 'class', 'control-label'), null);
        this._text_37 = this.renderer.createText(this._el_36, 'altraperspectiva.com', null);
        this._text_38 = this.renderer.createText(this._el_17, '\n        ', null);
        this._text_39 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n            ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'label', new import3.InlineArray2(2, 'class', 'control-label col-sm-3'), null);
        this._text_43 = this.renderer.createText(this._el_42, 'Descripción', null);
        this._text_44 = this.renderer.createText(this._el_40, '\n            ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_40, 'div', new import3.InlineArray2(2, 'class', 'col-sm-9'), null);
        this._text_46 = this.renderer.createText(this._el_45, '\n                ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_45, 'textarea', new import3.InlineArray8(6, 'class', 'form-control bottom-margin', 'placeholder', 'Descripción (Opcional)', 'rows', '5'), null);
        this._DefaultValueAccessor_47_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import30.ElementRef(this._el_47));
        this._NG_VALUE_ACCESSOR_47_4 = [this._DefaultValueAccessor_47_3.context];
        this._NgModel_47_5 = new import28.Wrapper_NgModel(this.parentView._ControlContainer_3_4, null, null, this._NG_VALUE_ACCESSOR_47_4);
        this._NgControl_47_6 = this._NgModel_47_5.context;
        this._NgControlStatus_47_7 = new import19.Wrapper_NgControlStatus(this._NgControl_47_6);
        this._text_48 = this.renderer.createText(this._el_45, '\n            ', null);
        this._text_49 = this.renderer.createText(this._el_40, '\n        ', null);
        this._text_50 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_52 = this.renderer.createText(this._el_51, '\n            ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_51, 'div', new import3.InlineArray2(2, 'class', 'col-sm-offset-2 col-sm-10'), null);
        this._text_54 = this.renderer.createText(this._el_53, '\n                ', null);
        this._el_55 = import3.createRenderElement(this.renderer, this._el_53, 'button', new import3.InlineArray4(4, 'class', 'btn btn-alta-primary pull-right', 'type', 'submit'), null);
        this._text_56 = this.renderer.createText(this._el_55, 'Crear Blog', null);
        this._text_57 = this.renderer.createText(this._el_53, '\n            ', null);
        this._text_58 = this.renderer.createText(this._el_51, '\n        ', null);
        this._text_59 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_9));
        this._NgModel_9_7.subscribe(this, this.eventHandler(this.handleEvent_9), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_28));
        this._NgModel_28_7.subscribe(this, this.eventHandler(this.handleEvent_28), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_47, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_47));
        this._NgModel_47_5.subscribe(this, this.eventHandler(this.handleEvent_47), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_BlogCreateComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.DefaultValueAccessor) && (9 === requestNodeIndex))) {
            return this._DefaultValueAccessor_9_3.context;
        }
        if (((token === import32.RequiredValidator) && (9 === requestNodeIndex))) {
            return this._RequiredValidator_9_4.context;
        }
        if (((token === import33.NG_VALIDATORS) && (9 === requestNodeIndex))) {
            return this._NG_VALIDATORS_9_5;
        }
        if (((token === import34.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_9_6;
        }
        if (((token === import35.NgModel) && (9 === requestNodeIndex))) {
            return this._NgModel_9_7.context;
        }
        if (((token === import36.NgControl) && (9 === requestNodeIndex))) {
            return this._NgControl_9_8;
        }
        if (((token === import25.NgControlStatus) && (9 === requestNodeIndex))) {
            return this._NgControlStatus_9_9.context;
        }
        if (((token === import31.DefaultValueAccessor) && (28 === requestNodeIndex))) {
            return this._DefaultValueAccessor_28_3.context;
        }
        if (((token === import32.RequiredValidator) && (28 === requestNodeIndex))) {
            return this._RequiredValidator_28_4.context;
        }
        if (((token === import33.NG_VALIDATORS) && (28 === requestNodeIndex))) {
            return this._NG_VALIDATORS_28_5;
        }
        if (((token === import34.NG_VALUE_ACCESSOR) && (28 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_28_6;
        }
        if (((token === import35.NgModel) && (28 === requestNodeIndex))) {
            return this._NgModel_28_7.context;
        }
        if (((token === import36.NgControl) && (28 === requestNodeIndex))) {
            return this._NgControl_28_8;
        }
        if (((token === import25.NgControlStatus) && (28 === requestNodeIndex))) {
            return this._NgControlStatus_28_9.context;
        }
        if (((token === import31.DefaultValueAccessor) && (47 === requestNodeIndex))) {
            return this._DefaultValueAccessor_47_3.context;
        }
        if (((token === import34.NG_VALUE_ACCESSOR) && (47 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_47_4;
        }
        if (((token === import35.NgModel) && (47 === requestNodeIndex))) {
            return this._NgModel_47_5.context;
        }
        if (((token === import36.NgControl) && (47 === requestNodeIndex))) {
            return this._NgControl_47_6;
        }
        if (((token === import25.NgControlStatus) && (47 === requestNodeIndex))) {
            return this._NgControlStatus_47_7.context;
        }
        return notFoundResult;
    };
    View_BlogCreateComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_9_3.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_9_1_0 = '';
        this._RequiredValidator_9_4.check_required(currVal_9_1_0, throwOnChange, false);
        this._RequiredValidator_9_4.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_9_2_0 = 'blogName';
        this._NgModel_9_7.check_name(currVal_9_2_0, throwOnChange, false);
        var currVal_9_2_1 = this.parentView.context.blog.title;
        this._NgModel_9_7.check_model(currVal_9_2_1, throwOnChange, false);
        this._NgModel_9_7.ngDoCheck(this, this._el_9, throwOnChange);
        this._NgControlStatus_9_9.ngDoCheck(this, this._el_9, throwOnChange);
        this._DefaultValueAccessor_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_1_0 = '';
        this._RequiredValidator_28_4.check_required(currVal_28_1_0, throwOnChange, false);
        this._RequiredValidator_28_4.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_2_0 = 'url';
        this._NgModel_28_7.check_name(currVal_28_2_0, throwOnChange, false);
        var currVal_28_2_1 = this.parentView.context.blog.url;
        this._NgModel_28_7.check_model(currVal_28_2_1, throwOnChange, false);
        this._NgModel_28_7.ngDoCheck(this, this._el_28, throwOnChange);
        this._NgControlStatus_28_9.ngDoCheck(this, this._el_28, throwOnChange);
        this._DefaultValueAccessor_47_3.ngDoCheck(this, this._el_47, throwOnChange);
        var currVal_47_1_0 = this.parentView.context.blog.description;
        this._NgModel_47_5.check_model(currVal_47_1_0, throwOnChange, false);
        var currVal_47_1_1 = this._map_81(true);
        this._NgModel_47_5.check_options(currVal_47_1_1, throwOnChange, false);
        this._NgModel_47_5.ngDoCheck(this, this._el_47, throwOnChange);
        this._NgControlStatus_47_7.ngDoCheck(this, this._el_47, throwOnChange);
        this._RequiredValidator_9_4.checkHost(this, this, this._el_9, throwOnChange);
        this._NgControlStatus_9_9.checkHost(this, this, this._el_9, throwOnChange);
        var currVal_79 = (this._NgModel_9_7.context.valid || this._NgModel_9_7.context.pristine);
        if (import3.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this.renderer.setElementProperty(this._el_11, 'hidden', currVal_79);
            this._expr_79 = currVal_79;
        }
        this._RequiredValidator_28_4.checkHost(this, this, this._el_28, throwOnChange);
        this._NgControlStatus_28_9.checkHost(this, this, this._el_28, throwOnChange);
        var currVal_80 = (this._NgModel_28_7.context.valid || this._NgModel_28_7.context.pristine);
        if (import3.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this.renderer.setElementProperty(this._el_30, 'hidden', currVal_80);
            this._expr_80 = currVal_80;
        }
        this._NgControlStatus_47_7.checkHost(this, this, this._el_47, throwOnChange);
        var currVal_82 = !this.parentView._NgForm_3_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this.renderer.setElementProperty(this._el_55, 'disabled', currVal_82);
            this._expr_82 = currVal_82;
        }
    };
    View_BlogCreateComponent1.prototype.destroyInternal = function () {
        this._NgModel_9_7.ngOnDestroy();
        this._NgModel_28_7.ngOnDestroy();
        this._NgModel_47_5.ngOnDestroy();
    };
    View_BlogCreateComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogCreateComponent1.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_9_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.blog.title = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogCreateComponent1.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_28_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.blog.url = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogCreateComponent1.prototype.handleEvent_47 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_47_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.blog.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogCreateComponent1;
}(import1.AppView));
var View_BlogCreateComponent2 = (function (_super) {
    __extends(View_BlogCreateComponent2, _super);
    function View_BlogCreateComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BlogCreateComponent2, renderType_BlogCreateComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BlogCreateComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import5.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import21.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import37.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.injectorGet(import38.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n\n    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_BlogCreateComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import39.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        return notFoundResult;
    };
    View_BlogCreateComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parentView.context.blogs;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_BlogCreateComponent2.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
    };
    View_BlogCreateComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogCreateComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_BlogCreateComponent3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_BlogCreateComponent2;
}(import1.AppView));
var View_BlogCreateComponent3 = (function (_super) {
    __extends(View_BlogCreateComponent3, _super);
    function View_BlogCreateComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_BlogCreateComponent3, renderType_BlogCreateComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_11 = import29.UNINITIALIZED;
        return _this;
    }
    View_BlogCreateComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-4'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'blog-list-panel'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray2(2, 'class', 'btn btn-primary'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Ver blog', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_BlogCreateComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_11 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_5, currVal_11);
            this._expr_11 = currVal_11;
        }
    };
    View_BlogCreateComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BlogCreateComponent3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.goToBlogPost(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BlogCreateComponent3.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.goToBlogPost(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BlogCreateComponent3;
}(import1.AppView));
