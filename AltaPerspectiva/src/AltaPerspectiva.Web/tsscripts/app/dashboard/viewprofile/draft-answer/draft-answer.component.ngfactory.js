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
import * as import0 from './draft-answer.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import18 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import19 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from 'ngx-quill/src/quill-editor.component';
import * as import21 from '../../../../../node_modules/ngx-quill/src/quill-editor.component.ngfactory';
import * as import22 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import23 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import24 from '@angular/core/src/change_detection/change_detection_util';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from '@angular/forms/src/directives/validators';
import * as import28 from '@angular/forms/src/validators';
import * as import29 from '@angular/forms/src/directives/control_value_accessor';
import * as import30 from '@angular/forms/src/directives/ng_model';
import * as import31 from '@angular/forms/src/directives/ng_control';
import * as import32 from '@angular/forms/src/directives/ng_control_status';
import * as import33 from '@angular/forms/src/directives/ng_form';
import * as import34 from '@angular/forms/src/directives/control_container';
var Wrapper_DraftAnswerComponent = (function () {
    function Wrapper_DraftAnswerComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.DraftAnswerComponent(p0, p1, p2);
    }
    Wrapper_DraftAnswerComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DraftAnswerComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DraftAnswerComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DraftAnswerComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DraftAnswerComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DraftAnswerComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DraftAnswerComponent;
}());
export { Wrapper_DraftAnswerComponent };
var renderType_DraftAnswerComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DraftAnswerComponent_Host0 = (function (_super) {
    __extends(View_DraftAnswerComponent_Host0, _super);
    function View_DraftAnswerComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DraftAnswerComponent_Host0, renderType_DraftAnswerComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DraftAnswerComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DraftAnswerComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http, this.parentIndex));
        this._DraftAnswerComponent_0_4 = new Wrapper_DraftAnswerComponent(this.injectorGet(import10.ActivatedRoute, this.parentIndex), this._ProfileService_0_3, this.injectorGet(import11.Router, this.parentIndex));
        this.compView_0.create(this._DraftAnswerComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._DraftAnswerComponent_0_4.context);
    };
    View_DraftAnswerComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.DraftAnswerComponent) && (0 === requestNodeIndex))) {
            return this._DraftAnswerComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_DraftAnswerComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DraftAnswerComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DraftAnswerComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DraftAnswerComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DraftAnswerComponent_Host0;
}(import1.AppView));
export var DraftAnswerComponentNgFactory = new import8.ComponentFactory('ng-component', View_DraftAnswerComponent_Host0, import0.DraftAnswerComponent);
var styles_DraftAnswerComponent = [];
var renderType_DraftAnswerComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DraftAnswerComponent, {});
var View_DraftAnswerComponent0 = (function (_super) {
    __extends(View_DraftAnswerComponent0, _super);
    function View_DraftAnswerComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DraftAnswerComponent0, renderType_DraftAnswerComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DraftAnswerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import12.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import14.TemplateRef_(this, 0, this._anchor_0);
        this._NgFor_0_6 = new import13.Wrapper_NgFor(this._vc_0.vcRef, this._TemplateRef_0_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_DraftAnswerComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import16.NgFor) && (0 === requestNodeIndex))) {
            return this._NgFor_0_6.context;
        }
        return notFoundResult;
    };
    View_DraftAnswerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.questions;
        this._NgFor_0_6.check_ngForOf(currVal_0_0_0, throwOnChange, false);
        this._NgFor_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_DraftAnswerComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_DraftAnswerComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_DraftAnswerComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_DraftAnswerComponent0;
}(import1.AppView));
export { View_DraftAnswerComponent0 };
var View_DraftAnswerComponent1 = (function (_super) {
    __extends(View_DraftAnswerComponent1, _super);
    function View_DraftAnswerComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_DraftAnswerComponent1, renderType_DraftAnswerComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_48 = import24.UNINITIALIZED;
        _this._arr_49 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._arr_50 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._arr_51 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._map_52 = import3.pureProxy1(function (p0) {
            return { toolbar: p0 };
        });
        _this._map_53 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        return _this;
    }
    View_DraftAnswerComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'tab'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'form', new import3.InlineArray4(4, 'class', 'form-horizontal ', 'role', 'form'), null);
        this._NgForm_3_3 = new import17.Wrapper_NgForm(null, null);
        this._ControlContainer_3_4 = this._NgForm_3_3.context;
        this._NgControlStatusGroup_3_5 = new import18.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'modal-header'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_12 = new import12.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import14.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import19.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n                ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_14 = new import12.ViewContainer(14, 10, this, this._anchor_14);
        this._TemplateRef_14_5 = new import14.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import19.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'modal-body'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'quill-editor', new import3.InlineArray4(4, 'name', 'answerField', 'required', ''), null);
        this.compView_21 = new import21.View_QuillEditorComponent0(this.viewUtils, this, 21, this._el_21);
        this._QuillEditorComponent_21_3 = new import21.Wrapper_QuillEditorComponent(new import25.ElementRef(this._el_21));
        this._RequiredValidator_21_4 = new import22.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_21_5 = [
            this._QuillEditorComponent_21_3.context,
            this._RequiredValidator_21_4.context
        ];
        this._NG_VALUE_ACCESSOR_21_6 = [this._QuillEditorComponent_21_3.context];
        this._NgModel_21_7 = new import23.Wrapper_NgModel(this._ControlContainer_3_4, this._NG_VALIDATORS_21_5, null, this._NG_VALUE_ACCESSOR_21_6);
        this._NgControl_21_8 = this._NgModel_21_7.context;
        this._NgControlStatus_21_9 = new import18.Wrapper_NgControlStatus(this._NgControl_21_8);
        this.compView_21.create(this._QuillEditorComponent_21_3.context);
        this._text_22 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'style', 'text-align:left;'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'button', new import3.InlineArray8(6, 'class', 'btn btn-primary', 'data-dismiss', 'modal', 'type', 'button'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'Publish Answer', null);
        this._text_28 = this.renderer.createText(this._el_24, '           \n        ', null);
        this._text_29 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_3));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'ngModelChange', null), this.eventHandler(this.handleEvent_21));
        this._NgModel_21_7.subscribe(this, this.eventHandler(this.handleEvent_21), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_26, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_26));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
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
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_DraftAnswerComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import26.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import14.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import26.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import20.QuillEditorComponent) && (21 === requestNodeIndex))) {
            return this._QuillEditorComponent_21_3.context;
        }
        if (((token === import27.RequiredValidator) && (21 === requestNodeIndex))) {
            return this._RequiredValidator_21_4.context;
        }
        if (((token === import28.NG_VALIDATORS) && (21 === requestNodeIndex))) {
            return this._NG_VALIDATORS_21_5;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (21 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_21_6;
        }
        if (((token === import30.NgModel) && (21 === requestNodeIndex))) {
            return this._NgModel_21_7.context;
        }
        if (((token === import31.NgControl) && (21 === requestNodeIndex))) {
            return this._NgControl_21_8;
        }
        if (((token === import32.NgControlStatus) && (21 === requestNodeIndex))) {
            return this._NgControlStatus_21_9.context;
        }
        if (((token === import33.NgForm) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._NgForm_3_3.context;
        }
        if (((token === import34.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._ControlContainer_3_4;
        }
        if (((token === import32.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._NgControlStatusGroup_3_5.context;
        }
        return notFoundResult;
    };
    View_DraftAnswerComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this._NgControlStatusGroup_3_5.ngDoCheck(this, this._el_3, throwOnChange);
        var currVal_12_0_0 = !this.parentView.context.isAnonymous;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_14_0_0 = this.parentView.context.isAnonymous;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_21_0_0 = this._map_52(this._arr_51(this._arr_49('bold', 'italic', 'underline'), this._arr_50('link', 'image')));
        this._QuillEditorComponent_21_3.check_modules(currVal_21_0_0, throwOnChange, false);
        this._QuillEditorComponent_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_21_1_0 = '';
        this._RequiredValidator_21_4.check_required(currVal_21_1_0, throwOnChange, false);
        this._RequiredValidator_21_4.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_21_2_0 = 'answerField';
        this._NgModel_21_7.check_name(currVal_21_2_0, throwOnChange, false);
        var currVal_21_2_1 = this.context.$implicit.bestAnswer.text;
        this._NgModel_21_7.check_model(currVal_21_2_1, throwOnChange, false);
        var currVal_21_2_2 = this._map_53(true);
        this._NgModel_21_7.check_options(currVal_21_2_2, throwOnChange, false);
        this._NgModel_21_7.ngDoCheck(this, this._el_21, throwOnChange);
        this._NgControlStatus_21_9.ngDoCheck(this, this._el_21, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_3_5.checkHost(this, this, this._el_3, throwOnChange);
        var currVal_48 = import3.inlineInterpolate(1, '', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setText(this._text_8, currVal_48);
            this._expr_48 = currVal_48;
        }
        this._RequiredValidator_21_4.checkHost(this, this.compView_21, this._el_21, throwOnChange);
        this._NgControlStatus_21_9.checkHost(this, this.compView_21, this._el_21, throwOnChange);
        this.compView_21.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._QuillEditorComponent_21_3.context.ngAfterViewInit();
            }
        }
    };
    View_DraftAnswerComponent1.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this.compView_21.destroy();
        this._QuillEditorComponent_21_3.ngOnDestroy();
        this._NgModel_21_7.ngOnDestroy();
        this._NgForm_3_3.ngOnDestroy();
    };
    View_DraftAnswerComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DraftAnswerComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_DraftAnswerComponent2(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 14)) {
            return new View_DraftAnswerComponent3(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        return null;
    };
    View_DraftAnswerComponent1.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_3_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_DraftAnswerComponent1.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.$implicit.bestAnswer.text = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DraftAnswerComponent1.prototype.handleEvent_26 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.publishAnswer(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DraftAnswerComponent1;
}(import1.AppView));
var View_DraftAnswerComponent2 = (function (_super) {
    __extends(View_DraftAnswerComponent2, _super);
    function View_DraftAnswerComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_DraftAnswerComponent2, renderType_DraftAnswerComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_DraftAnswerComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'img-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), null);
        return null;
    };
    View_DraftAnswerComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DraftAnswerComponent2;
}(import1.AppView));
var View_DraftAnswerComponent3 = (function (_super) {
    __extends(View_DraftAnswerComponent3, _super);
    function View_DraftAnswerComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_DraftAnswerComponent3, renderType_DraftAnswerComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_DraftAnswerComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'img-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'user-image ', 'src', '../../../../profile/Anonymous.png'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_DraftAnswerComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DraftAnswerComponent3;
}(import1.AppView));
