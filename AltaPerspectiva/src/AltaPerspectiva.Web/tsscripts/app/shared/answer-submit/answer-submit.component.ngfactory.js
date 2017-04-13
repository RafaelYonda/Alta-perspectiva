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
import * as import0 from './answer-submit.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_container';
import * as import7 from '../../services/question-answer.service';
import * as import8 from '../../services/profile.service';
import * as import9 from '@angular/core/src/linker/view_type';
import * as import10 from '@angular/core/src/change_detection/constants';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/http/src/http';
import * as import13 from '@angular/router/src/router';
import * as import14 from '../../services/authentication.service';
import * as import15 from 'ng2-toastr/src/toast-manager';
import * as import16 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import17 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../question-header/question-header.component';
import * as import19 from '../question-header/question-header.component.ngfactory';
import * as import20 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from 'ngx-quill/src/quill-editor.component';
import * as import22 from '../../../../node_modules/ngx-quill/src/quill-editor.component.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import24 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from '@angular/common/src/directives/ng_if';
import * as import28 from '@angular/forms/src/directives/validators';
import * as import29 from '@angular/forms/src/validators';
import * as import30 from '@angular/forms/src/directives/control_value_accessor';
import * as import31 from '@angular/forms/src/directives/ng_model';
import * as import32 from '@angular/forms/src/directives/ng_control';
import * as import33 from '@angular/forms/src/directives/ng_control_status';
import * as import34 from '@angular/forms/src/directives/ng_form';
import * as import35 from '@angular/forms/src/directives/control_container';
import * as import36 from '@angular/core/src/security';
import * as import37 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import38 from '@angular/router/src/router_state';
import * as import39 from '@angular/common/src/location/location_strategy';
import * as import40 from '@angular/router/src/directives/router_link';
var Wrapper_AnswerSubmitComponent = (function () {
    function Wrapper_AnswerSubmitComponent(p0, p1, p2, p3, p4, p5) {
        this._changed = false;
        this.context = new import0.AnswerSubmitComponent(p0, p1, p2, p3, p4, p5);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
    }
    Wrapper_AnswerSubmitComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AnswerSubmitComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AnswerSubmitComponent.prototype.check_question = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.question = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_AnswerSubmitComponent.prototype.check_isFullScreen = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.isFullScreen = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_AnswerSubmitComponent.prototype.check_isDetail = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.isDetail = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_AnswerSubmitComponent.prototype.check_isDraft = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.isDraft = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_AnswerSubmitComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AnswerSubmitComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AnswerSubmitComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AnswerSubmitComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AnswerSubmitComponent;
}());
export { Wrapper_AnswerSubmitComponent };
var renderType_AnswerSubmitComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_AnswerSubmitComponent_Host0 = (function (_super) {
    __extends(View_AnswerSubmitComponent_Host0, _super);
    function View_AnswerSubmitComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AnswerSubmitComponent_Host0, renderType_AnswerSubmitComponent_Host, import9.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AnswerSubmitComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'answer-submit', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import6.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_AnswerSubmitComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_5 = new import7.QuestionAnswerService(this.injectorGet(import12.Http, this.parentIndex));
        this._ProfileService_0_6 = new import8.ProfileService(this.injectorGet(import12.Http, this.parentIndex));
        this._AnswerSubmitComponent_0_7 = new Wrapper_AnswerSubmitComponent(this._QuestionAnswerService_0_5, this.injectorGet(import13.Router, this.parentIndex), this._ProfileService_0_6, this.injectorGet(import14.AuthenticationService, this.parentIndex), this.injectorGet(import15.ToastsManager, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._AnswerSubmitComponent_0_7.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import11.ComponentRef_(0, this, this._el_0, this._AnswerSubmitComponent_0_7.context);
    };
    View_AnswerSubmitComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import7.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_5;
        }
        if (((token === import8.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_6;
        }
        if (((token === import0.AnswerSubmitComponent) && (0 === requestNodeIndex))) {
            return this._AnswerSubmitComponent_0_7.context;
        }
        return notFoundResult;
    };
    View_AnswerSubmitComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AnswerSubmitComponent_0_7.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AnswerSubmitComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_AnswerSubmitComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_AnswerSubmitComponent_Host0;
}(import2.AppView));
export var AnswerSubmitComponentNgFactory = new import11.ComponentFactory('answer-submit', View_AnswerSubmitComponent_Host0, import0.AnswerSubmitComponent);
var styles_AnswerSubmitComponent = ['.img-container[_ngcontent-%COMP%] {\n        margin-left: 10px;\n    }\n\n    .checkbox-container[_ngcontent-%COMP%] {\n        margin-left: 10px;\n        float: left;\n    }\n\n    .social-share[_ngcontent-%COMP%] {\n        float: right;\n        position: relative;\n        width: 40px;\n        margin-top: 10px;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        margin-right: 22px;\n    }\n\n    #img1[_ngcontent-%COMP%] {\n        left: 0;\n    }\n\n    #img2[_ngcontent-%COMP%] {\n        left: 26px;\n    }\n    .save-as-draft[_ngcontent-%COMP%] {\n            background-color: #b9caba;\n    }\n    .header-info[_ngcontent-%COMP%] {\n            margin-left: 70px;\n    }\n    label[_ngcontent-%COMP%]{\n        font-weight:normal;\n    }'];
var renderType_AnswerSubmitComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_AnswerSubmitComponent, {});
var View_AnswerSubmitComponent0 = (function (_super) {
    __extends(View_AnswerSubmitComponent0, _super);
    function View_AnswerSubmitComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_AnswerSubmitComponent0, renderType_AnswerSubmitComponent, import9.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_91 = import1.UNINITIALIZED;
        _this._arr_92 = import3.pureProxy3(function (p0, p1, p2) {
            return [
                p0,
                p1,
                p2
            ];
        });
        _this._arr_93 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._arr_94 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._map_95 = import3.pureProxy1(function (p0) {
            return { toolbar: p0 };
        });
        _this._map_96 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_97 = import1.UNINITIALIZED;
        _this._expr_98 = import1.UNINITIALIZED;
        return _this;
    }
    View_AnswerSubmitComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', new import3.InlineArray4(4, 'class', 'form-horizontal ', 'role', 'form'), null);
        this._NgForm_1_3 = new import16.Wrapper_NgForm(null, null);
        this._ControlContainer_1_4 = this._NgForm_1_3.context;
        this._NgControlStatusGroup_1_5 = new import17.Wrapper_NgControlStatusGroup(this._ControlContainer_1_4);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-header'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_5 = new import19.View_QuestionHeaderComponent0(this.viewUtils, this, 5, this._el_5);
        this._QuestionHeaderComponent_5_3 = new import19.Wrapper_QuestionHeaderComponent(this.parentView.injectorGet(import13.Router, this.parentIndex));
        this.compView_5.create(this._QuestionHeaderComponent_5_3.context);
        this._text_6 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_3, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_12 = new import6.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import25.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import20.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_14 = new import6.ViewContainer(14, 10, this, this._anchor_14);
        this._TemplateRef_14_5 = new import25.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import20.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_16 = new import6.ViewContainer(16, 10, this, this._anchor_16);
        this._TemplateRef_16_5 = new import25.TemplateRef_(this, 16, this._anchor_16);
        this._NgIf_16_6 = new import20.Wrapper_NgIf(this._vc_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_18 = new import6.ViewContainer(18, 10, this, this._anchor_18);
        this._TemplateRef_18_5 = new import25.TemplateRef_(this, 18, this._anchor_18);
        this._NgIf_18_6 = new import20.Wrapper_NgIf(this._vc_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_20 = new import6.ViewContainer(20, 10, this, this._anchor_20);
        this._TemplateRef_20_5 = new import25.TemplateRef_(this, 20, this._anchor_20);
        this._NgIf_20_6 = new import20.Wrapper_NgIf(this._vc_20.vcRef, this._TemplateRef_20_5);
        this._text_21 = this.renderer.createText(this._el_10, '\n        ', null);
        this._text_22 = this.renderer.createText(this._el_3, '\n       \n    ', null);
        this._text_23 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-body'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'quill-editor', new import3.InlineArray8(6, 'name', 'answerField', 'placeholder', 'Escríbe aquí', 'required', ''), null);
        this.compView_26 = new import22.View_QuillEditorComponent0(this.viewUtils, this, 26, this._el_26);
        this._QuillEditorComponent_26_3 = new import22.Wrapper_QuillEditorComponent(new import26.ElementRef(this._el_26));
        this._RequiredValidator_26_4 = new import23.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_26_5 = [
            this._QuillEditorComponent_26_3.context,
            this._RequiredValidator_26_4.context
        ];
        this._NG_VALUE_ACCESSOR_26_6 = [this._QuillEditorComponent_26_3.context];
        this._NgModel_26_7 = new import24.Wrapper_NgModel(this._ControlContainer_1_4, this._NG_VALIDATORS_26_5, null, this._NG_VALUE_ACCESSOR_26_6);
        this._NgControl_26_8 = this._NgModel_26_7.context;
        this._NgControlStatus_26_9 = new import17.Wrapper_NgControlStatus(this._NgControl_26_8);
        this.compView_26.create(this._QuillEditorComponent_26_3.context);
        this._text_27 = this.renderer.createText(this._el_24, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-footer'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'div', new import3.InlineArray2(2, 'style', 'float:left;color:#737373;line-height: 34px;'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n            ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._vc_33 = new import6.ViewContainer(33, 31, this, this._anchor_33);
        this._TemplateRef_33_5 = new import25.TemplateRef_(this, 33, this._anchor_33);
        this._NgIf_33_6 = new import20.Wrapper_NgIf(this._vc_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_31, '\n            ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._vc_35 = new import6.ViewContainer(35, 31, this, this._anchor_35);
        this._TemplateRef_35_5 = new import25.TemplateRef_(this, 35, this._anchor_35);
        this._NgIf_35_6 = new import20.Wrapper_NgIf(this._vc_35.vcRef, this._TemplateRef_35_5);
        this._text_36 = this.renderer.createText(this._el_31, '\n            ', null);
        this._anchor_37 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._vc_37 = new import6.ViewContainer(37, 31, this, this._anchor_37);
        this._TemplateRef_37_5 = new import25.TemplateRef_(this, 37, this._anchor_37);
        this._NgIf_37_6 = new import20.Wrapper_NgIf(this._vc_37.vcRef, this._TemplateRef_37_5);
        this._text_38 = this.renderer.createText(this._el_31, '\n        ', null);
        this._text_39 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_29, 'div', new import3.InlineArray2(2, 'class', 'social-share'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n            ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'a', new import3.InlineArray8(6, 'class', 'SHARE FACEBOOK', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_43 = this.renderer.createText(this._el_42, '\n                ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_42, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img1', 'src', '../images/facebooklogo.jpg'), null);
        this._text_45 = this.renderer.createText(this._el_42, '\n            ', null);
        this._text_46 = this.renderer.createText(this._el_40, '\n            \n            ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_40, 'a', new import3.InlineArray8(6, 'class', 'SHARE TWITTER', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_48 = this.renderer.createText(this._el_47, '\n                ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_47, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img2', 'src', '../images/twitter.png'), null);
        this._text_50 = this.renderer.createText(this._el_47, '\n            ', null);
        this._text_51 = this.renderer.createText(this._el_40, '\n          \n        ', null);
        this._text_52 = this.renderer.createText(this._el_29, '\n    ', null);
        this._text_53 = this.renderer.createText(this._el_1, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_26, new import3.InlineArray2(2, 'ngModelChange', null), this.eventHandler(this.handleEvent_26));
        this._NgModel_26_7.subscribe(this, this.eventHandler(this.handleEvent_26), true);
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
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._anchor_35,
            this._text_36,
            this._anchor_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_AnswerSubmitComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.QuestionHeaderComponent) && (5 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_5_3.context;
        }
        if (((token === import25.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import27.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import25.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import27.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import25.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import27.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        if (((token === import25.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import27.NgIf) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6.context;
        }
        if (((token === import25.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import27.NgIf) && (20 === requestNodeIndex))) {
            return this._NgIf_20_6.context;
        }
        if (((token === import21.QuillEditorComponent) && (26 === requestNodeIndex))) {
            return this._QuillEditorComponent_26_3.context;
        }
        if (((token === import28.RequiredValidator) && (26 === requestNodeIndex))) {
            return this._RequiredValidator_26_4.context;
        }
        if (((token === import29.NG_VALIDATORS) && (26 === requestNodeIndex))) {
            return this._NG_VALIDATORS_26_5;
        }
        if (((token === import30.NG_VALUE_ACCESSOR) && (26 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_26_6;
        }
        if (((token === import31.NgModel) && (26 === requestNodeIndex))) {
            return this._NgModel_26_7.context;
        }
        if (((token === import32.NgControl) && (26 === requestNodeIndex))) {
            return this._NgControl_26_8;
        }
        if (((token === import33.NgControlStatus) && (26 === requestNodeIndex))) {
            return this._NgControlStatus_26_9.context;
        }
        if (((token === import25.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import27.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import25.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import27.NgIf) && (35 === requestNodeIndex))) {
            return this._NgIf_35_6.context;
        }
        if (((token === import25.TemplateRef) && (37 === requestNodeIndex))) {
            return this._TemplateRef_37_5;
        }
        if (((token === import27.NgIf) && (37 === requestNodeIndex))) {
            return this._NgIf_37_6.context;
        }
        if (((token === import34.NgForm) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._NgForm_1_3.context;
        }
        if (((token === import35.ControlContainer) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._ControlContainer_1_4;
        }
        if (((token === import33.NgControlStatusGroup) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._NgControlStatusGroup_1_5.context;
        }
        return notFoundResult;
    };
    View_AnswerSubmitComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        this._NgControlStatusGroup_1_5.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_5_0_0 = this.context.question;
        this._QuestionHeaderComponent_5_3.check_question(currVal_5_0_0, throwOnChange, false);
        this._QuestionHeaderComponent_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_12_0_0 = !this.context.isAnonymous;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_14_0_0 = this.context.isAnonymous;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_16_0_0 = !this.context.isAnonymous;
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_18_0_0 = this.context.isAnonymous;
        this._NgIf_18_6.check_ngIf(currVal_18_0_0, throwOnChange, false);
        this._NgIf_18_6.ngDoCheck(this, this._anchor_18, throwOnChange);
        var currVal_20_0_0 = !this.context.isDraft;
        this._NgIf_20_6.check_ngIf(currVal_20_0_0, throwOnChange, false);
        this._NgIf_20_6.ngDoCheck(this, this._anchor_20, throwOnChange);
        var currVal_26_0_0 = this._map_95(this._arr_94(this._arr_92('bold', 'italic', 'underline'), this._arr_93('link', 'image')));
        this._QuillEditorComponent_26_3.check_modules(currVal_26_0_0, throwOnChange, false);
        var currVal_26_0_1 = 'Escríbe aquí';
        this._QuillEditorComponent_26_3.check_placeholder(currVal_26_0_1, throwOnChange, false);
        this._QuillEditorComponent_26_3.ngDoCheck(this, this._el_26, throwOnChange);
        var currVal_26_1_0 = '';
        this._RequiredValidator_26_4.check_required(currVal_26_1_0, throwOnChange, false);
        this._RequiredValidator_26_4.ngDoCheck(this, this._el_26, throwOnChange);
        var currVal_26_2_0 = 'answerField';
        this._NgModel_26_7.check_name(currVal_26_2_0, throwOnChange, false);
        var currVal_26_2_1 = this.context.answerText;
        this._NgModel_26_7.check_model(currVal_26_2_1, throwOnChange, false);
        var currVal_26_2_2 = this._map_96(true);
        this._NgModel_26_7.check_options(currVal_26_2_2, throwOnChange, false);
        this._NgModel_26_7.ngDoCheck(this, this._el_26, throwOnChange);
        this._NgControlStatus_26_9.ngDoCheck(this, this._el_26, throwOnChange);
        var currVal_33_0_0 = !this.context.isDraft;
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        var currVal_35_0_0 = !this.context.isDraft;
        this._NgIf_35_6.check_ngIf(currVal_35_0_0, throwOnChange, false);
        this._NgIf_35_6.ngDoCheck(this, this._anchor_35, throwOnChange);
        var currVal_37_0_0 = this.context.isDraft;
        this._NgIf_37_6.check_ngIf(currVal_37_0_0, throwOnChange, false);
        this._NgIf_37_6.ngDoCheck(this, this._anchor_37, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
        this._vc_20.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_35.detectChangesInNestedViews(throwOnChange);
        this._vc_37.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_1_5.checkHost(this, this, this._el_1, throwOnChange);
        var currVal_91 = import3.inlineInterpolate(1, '', this.context.question.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setText(this._text_8, currVal_91);
            this._expr_91 = currVal_91;
        }
        this._RequiredValidator_26_4.checkHost(this, this.compView_26, this._el_26, throwOnChange);
        this._NgControlStatus_26_9.checkHost(this, this.compView_26, this._el_26, throwOnChange);
        var currVal_97 = import3.inlineInterpolate(2, 'https://www.facebook.com/sharer/sharer.php?u=', ((this.context.question == null) ? null : this.context.question.shareUrl), '&title=', ((this.context.question == null) ? null : this.context.question.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this.renderer.setElementProperty(this._el_42, 'href', this.viewUtils.sanitizer.sanitize(import36.SecurityContext.URL, currVal_97));
            this._expr_97 = currVal_97;
        }
        var currVal_98 = import3.inlineInterpolate(2, 'https://twitter.com/intent/tweet?text=', ((this.context.question == null) ? null : this.context.question.title), 'Check out:', ((this.context.question == null) ? null : this.context.question.shareUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this.renderer.setElementProperty(this._el_47, 'href', this.viewUtils.sanitizer.sanitize(import36.SecurityContext.URL, currVal_98));
            this._expr_98 = currVal_98;
        }
        this.compView_5.internalDetectChanges(throwOnChange);
        this.compView_26.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._QuillEditorComponent_26_3.context.ngAfterViewInit();
            }
        }
    };
    View_AnswerSubmitComponent0.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this._vc_18.destroyNestedViews();
        this._vc_20.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_35.destroyNestedViews();
        this._vc_37.destroyNestedViews();
        this.compView_5.destroy();
        this.compView_26.destroy();
        this._QuillEditorComponent_26_3.ngOnDestroy();
        this._NgModel_26_7.ngOnDestroy();
        this._NgForm_1_3.ngOnDestroy();
    };
    View_AnswerSubmitComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_AnswerSubmitComponent1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 14)) {
            return new View_AnswerSubmitComponent2(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 16)) {
            return new View_AnswerSubmitComponent3(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        if ((nodeIndex == 18)) {
            return new View_AnswerSubmitComponent4(this.viewUtils, this, 18, this._anchor_18, this._vc_18);
        }
        if ((nodeIndex == 20)) {
            return new View_AnswerSubmitComponent5(this.viewUtils, this, 20, this._anchor_20, this._vc_20);
        }
        if ((nodeIndex == 33)) {
            return new View_AnswerSubmitComponent7(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 35)) {
            return new View_AnswerSubmitComponent8(this.viewUtils, this, 35, this._anchor_35, this._vc_35);
        }
        if ((nodeIndex == 37)) {
            return new View_AnswerSubmitComponent9(this.viewUtils, this, 37, this._anchor_37, this._vc_37);
        }
        return null;
    };
    View_AnswerSubmitComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_1_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AnswerSubmitComponent0.prototype.handleEvent_26 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.answerText = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AnswerSubmitComponent0;
}(import2.AppView));
export { View_AnswerSubmitComponent0 };
var View_AnswerSubmitComponent1 = (function (_super) {
    __extends(View_AnswerSubmitComponent1, _super);
    function View_AnswerSubmitComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AnswerSubmitComponent1, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_AnswerSubmitComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'img-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'class', 'user-image'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AnswerSubmitComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(1, '', this.parentView.context._logObj.user.imageUrl, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import36.SecurityContext.URL, currVal_4));
            this._expr_4 = currVal_4;
        }
    };
    View_AnswerSubmitComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AnswerSubmitComponent1;
}(import2.AppView));
var View_AnswerSubmitComponent2 = (function (_super) {
    __extends(View_AnswerSubmitComponent2, _super);
    function View_AnswerSubmitComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AnswerSubmitComponent2, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AnswerSubmitComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'img-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'user-image ', 'src', '../../../../profile/Anonymous.png'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AnswerSubmitComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AnswerSubmitComponent2;
}(import2.AppView));
var View_AnswerSubmitComponent3 = (function (_super) {
    __extends(View_AnswerSubmitComponent3, _super);
    function View_AnswerSubmitComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AnswerSubmitComponent3, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import1.UNINITIALIZED;
        return _this;
    }
    View_AnswerSubmitComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'header-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AnswerSubmitComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(2, '', ((this.parentView.context._logObj.user == null) ? null : this.parentView.context._logObj.user.name), '', (((this.parentView.context._logObj.user == null) ? null : this.parentView.context._logObj.user.occupassion) ? (' ' + ((this.parentView.context._logObj.user == null) ? null : this.parentView.context._logObj.user.occupassion)) : ''), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AnswerSubmitComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AnswerSubmitComponent3;
}(import2.AppView));
var View_AnswerSubmitComponent4 = (function (_super) {
    __extends(View_AnswerSubmitComponent4, _super);
    function View_AnswerSubmitComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AnswerSubmitComponent4, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AnswerSubmitComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'header-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Anonymous', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AnswerSubmitComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AnswerSubmitComponent4;
}(import2.AppView));
var View_AnswerSubmitComponent5 = (function (_super) {
    __extends(View_AnswerSubmitComponent5, _super);
    function View_AnswerSubmitComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AnswerSubmitComponent5, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_12 = import1.UNINITIALIZED;
        return _this;
    }
    View_AnswerSubmitComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'checkbox-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray2(2, 'type', 'checkbox'), null);
        this._text_3 = this.renderer.createText(this._el_0, ' ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Anónimo ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_7 = new import6.ViewContainer(7, 0, this, this._anchor_7);
        this._TemplateRef_7_5 = new import25.TemplateRef_(this, 7, this._anchor_7);
        this._NgIf_7_6 = new import20.Wrapper_NgIf(this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._anchor_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    };
    View_AnswerSubmitComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import27.NgIf) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        return notFoundResult;
    };
    View_AnswerSubmitComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = !this.parentView.context.isFullScreen;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        var currVal_12 = false;
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_2, 'checked', currVal_12);
            this._expr_12 = currVal_12;
        }
    };
    View_AnswerSubmitComponent5.prototype.destroyInternal = function () {
        this._vc_7.destroyNestedViews();
    };
    View_AnswerSubmitComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AnswerSubmitComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 7)) {
            return new View_AnswerSubmitComponent6(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    View_AnswerSubmitComponent5.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.parentView.context.onChange(this._el_2.checked) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AnswerSubmitComponent5;
}(import2.AppView));
var View_AnswerSubmitComponent6 = (function (_super) {
    __extends(View_AnswerSubmitComponent6, _super);
    function View_AnswerSubmitComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AnswerSubmitComponent6, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_4 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        return _this;
    }
    View_AnswerSubmitComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_0_3 = new import37.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import13.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import38.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import39.LocationStrategy, this.parentView.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._text_2 = this.renderer.createText(this._el_0, ' ,Ver página completa\n                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_AnswerSubmitComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkWithHref_0_3.context;
        }
        return notFoundResult;
    };
    View_AnswerSubmitComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_4('/question/questionfullscreen', this.parentView.parentView.context.question.id);
        this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLinkWithHref_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterLinkWithHref_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_AnswerSubmitComponent6.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_0_3.ngOnDestroy();
    };
    View_AnswerSubmitComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AnswerSubmitComponent6.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AnswerSubmitComponent6;
}(import2.AppView));
var View_AnswerSubmitComponent7 = (function (_super) {
    __extends(View_AnswerSubmitComponent7, _super);
    function View_AnswerSubmitComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AnswerSubmitComponent7, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AnswerSubmitComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray8(6, 'class', 'btn btn-primary', 'data-dismiss', 'modal', 'type', 'button'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._text_2 = this.renderer.createText(this._el_0, 'Enviar\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_AnswerSubmitComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AnswerSubmitComponent7.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.submitAnswer(this.parentView.context.question.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AnswerSubmitComponent7;
}(import2.AppView));
var View_AnswerSubmitComponent8 = (function (_super) {
    __extends(View_AnswerSubmitComponent8, _super);
    function View_AnswerSubmitComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AnswerSubmitComponent8, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AnswerSubmitComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray8(6, 'class', 'btn save-as-draft', 'data-dismiss', 'modal', 'type', 'button'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._text_2 = this.renderer.createText(this._el_0, 'Guardar borrador\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_AnswerSubmitComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AnswerSubmitComponent8.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.submitAnswerAsDraft(this.parentView.context.question.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AnswerSubmitComponent8;
}(import2.AppView));
var View_AnswerSubmitComponent9 = (function (_super) {
    __extends(View_AnswerSubmitComponent9, _super);
    function View_AnswerSubmitComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AnswerSubmitComponent9, renderType_AnswerSubmitComponent, import9.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import10.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AnswerSubmitComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray8(6, 'class', 'btn btn-primary', 'data-dismiss', 'modal', 'type', 'button'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n                Publicar Respuesta\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_AnswerSubmitComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AnswerSubmitComponent9.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.submitAnswer(this.parentView.context.question.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AnswerSubmitComponent9;
}(import2.AppView));
