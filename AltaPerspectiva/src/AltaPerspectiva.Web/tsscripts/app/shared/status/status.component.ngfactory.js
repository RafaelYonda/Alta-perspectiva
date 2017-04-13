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
import * as import0 from './status.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/status.service';
import * as import7 from '../../services/question.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '../../services/authentication.service';
import * as import14 from '../../services/question-answer.service';
import * as import15 from '../../services/communication.service';
import * as import16 from 'ng2-toastr/src/toast-manager';
import * as import17 from './status.component.css.shim.ngstyle';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '@angular/core/src/linker/view_container';
import * as import20 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '../../../../node_modules/ngx-popover/Popover.ngfactory';
import * as import22 from 'ngx-popover/PopoverContent';
import * as import23 from '../../../../node_modules/ngx-popover/PopoverContent.ngfactory';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from 'ngx-popover/Popover';
import * as import28 from '@angular/core/src/security';
var Wrapper_StatusComponent = (function () {
    function Wrapper_StatusComponent(p0, p1, p2, p3, p4, p5, p6) {
        this._changed = false;
        this.context = new import0.StatusComponent(p0, p1, p2, p3, p4, p5, p6);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    Wrapper_StatusComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_StatusComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_StatusComponent.prototype.check_questionObj = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.questionObj = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_StatusComponent.prototype.check_answerObj = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.answerObj = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_StatusComponent.prototype.check_isQuestion = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.isQuestion = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_StatusComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_StatusComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_StatusComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_StatusComponent.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onQuestionDetailClicked.subscribe(_eventHandler.bind(view, 'onQuestionDetailClicked')));
        }
        if (emit1) {
            (this.subscription1 = this.context.onQuestionReportClicked.subscribe(_eventHandler.bind(view, 'onQuestionReportClicked')));
        }
    };
    return Wrapper_StatusComponent;
}());
export { Wrapper_StatusComponent };
var renderType_StatusComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_StatusComponent_Host0 = (function (_super) {
    __extends(View_StatusComponent_Host0, _super);
    function View_StatusComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_StatusComponent_Host0, renderType_StatusComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_StatusComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ap-status', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_StatusComponent0(this.viewUtils, this, 0, this._el_0);
        this._StatusService_0_3 = new import6.StatusService(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionService_0_4 = new import7.QuestionService(this.injectorGet(import11.Http, this.parentIndex));
        this._StatusComponent_0_5 = new Wrapper_StatusComponent(this.injectorGet(import12.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import13.AuthenticationService, this.parentIndex), this._StatusService_0_3, this.injectorGet(import14.QuestionAnswerService, this.parentIndex), this.injectorGet(import15.CommunicationService, this.parentIndex), this._QuestionService_0_4, this.injectorGet(import16.ToastsManager, this.parentIndex));
        this.compView_0.create(this._StatusComponent_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._StatusComponent_0_5.context);
    };
    View_StatusComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.StatusService) && (0 === requestNodeIndex))) {
            return this._StatusService_0_3;
        }
        if (((token === import7.QuestionService) && (0 === requestNodeIndex))) {
            return this._QuestionService_0_4;
        }
        if (((token === import0.StatusComponent) && (0 === requestNodeIndex))) {
            return this._StatusComponent_0_5.context;
        }
        return notFoundResult;
    };
    View_StatusComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._StatusComponent_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_StatusComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._StatusComponent_0_5.ngOnDestroy();
    };
    View_StatusComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_StatusComponent_Host0;
}(import2.AppView));
export var StatusComponentNgFactory = new import10.ComponentFactory('ap-status', View_StatusComponent_Host0, import0.StatusComponent);
var styles_StatusComponent = [import17.styles];
var renderType_StatusComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_StatusComponent, {});
var View_StatusComponent0 = (function (_super) {
    __extends(View_StatusComponent0, _super);
    function View_StatusComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_StatusComponent0, renderType_StatusComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_108 = import1.UNINITIALIZED;
        _this._expr_109 = import1.UNINITIALIZED;
        _this._expr_110 = import1.UNINITIALIZED;
        _this._expr_111 = import1.UNINITIALIZED;
        _this._expr_112 = import1.UNINITIALIZED;
        _this._expr_113 = import1.UNINITIALIZED;
        _this._expr_114 = import1.UNINITIALIZED;
        _this._expr_115 = import1.UNINITIALIZED;
        _this._expr_116 = import1.UNINITIALIZED;
        return _this;
    }
    View_StatusComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import18.QueryList();
        this._viewQuery_likeAnchor_1 = new import18.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_0 = new import19.ViewContainer(0, null, this, this._el_0);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_2 = new import19.ViewContainer(2, null, this, this._el_2);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'status-panel'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import19.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import24.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import20.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_4, '\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_8 = new import19.ViewContainer(8, 4, this, this._anchor_8);
        this._TemplateRef_8_5 = new import24.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import20.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'class', 'number-box status-line'), null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_4, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'status-line'), null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'status-line like-border '), null);
        this._text_18 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'status-line number-box status-line hidden-xs'), null);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'status-line hidden-xs'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'Leidos', null);
        this._text_24 = this.renderer.createText(this._el_4, '', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'number-box status-line'), null);
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray8(6, 'aria-expanded', 'false', 'class', 'status-line', 'data-toggle', 'collapse'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'Comentarios', null);
        this._text_30 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'status-line number-box status-line hidden-xs'), null);
        this._text_32 = this.renderer.createText(this._el_31, '', null);
        this._text_33 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'status-line hidden-xs'), null);
        this._text_35 = this.renderer.createText(this._el_34, 'Respuestas', null);
        this._text_36 = this.renderer.createText(this._el_4, '\n\n    ', null);
        this._text_37 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'social-icon'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._anchor_40 = this.renderer.createTemplateAnchor(this._el_38, null);
        this._vc_40 = new import19.ViewContainer(40, 38, this, this._anchor_40);
        this._TemplateRef_40_5 = new import24.TemplateRef_(this, 40, this._anchor_40);
        this._NgIf_40_6 = new import20.Wrapper_NgIf(this._vc_40.vcRef, this._TemplateRef_40_5);
        this._text_41 = this.renderer.createText(this._el_38, '\n\n        ', null);
        this._anchor_42 = this.renderer.createTemplateAnchor(this._el_38, null);
        this._vc_42 = new import19.ViewContainer(42, 38, this, this._anchor_42);
        this._TemplateRef_42_5 = new import24.TemplateRef_(this, 42, this._anchor_42);
        this._NgIf_42_6 = new import20.Wrapper_NgIf(this._vc_42.vcRef, this._TemplateRef_42_5);
        this._text_43 = this.renderer.createText(this._el_38, '\n\n        ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_38, 'a', new import3.InlineArray8(6, 'class', 'SHARE TWITTER', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_45 = this.renderer.createText(this._el_44, '\n            ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_44, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img2', 'src', '../images/twitter.svg'), null);
        this._text_47 = this.renderer.createText(this._el_44, '\n        ', null);
        this._text_48 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_38, 'a', new import3.InlineArray4(4, 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_50 = this.renderer.createText(this._el_49, '\n            ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_49, 'img', new import3.InlineArray8(6, 'class', 'social-image social-image-linkedin', 'id', 'img3', 'src', '../images/linkedin.svg'), null);
        this._text_52 = this.renderer.createText(this._el_49, '\n        ', null);
        this._text_53 = this.renderer.createText(this._el_38, '\n\n        ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_38, 'div', new import3.InlineArray4(4, 'class', 'other-function hidden-xs', 'id', 'img4'), null);
        this._text_55 = this.renderer.createText(this._el_54, '\n            ', null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_54, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_56 = new import19.ViewContainer(56, 54, this, this._el_56);
        this._Popover_56_5 = new import21.Wrapper_Popover(this._vc_56.vcRef, this.parentView.injectorGet(import12.ComponentFactoryResolver, this.parentIndex));
        this._text_57 = this.renderer.createText(this._el_56, '...', null);
        this._text_58 = this.renderer.createText(this._el_54, '\n            ', null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_54, 'popover-content', new import3.InlineArray2(2, 'placement', 'top'), null);
        this.compView_59 = new import23.View_PopoverContent0(this.viewUtils, this, 59, this._el_59);
        this._PopoverContent_59_3 = new import23.Wrapper_PopoverContent(new import25.ElementRef(this._el_59), this.compView_59.ref, this.renderer);
        this._text_60 = this.renderer.createText(null, '\n                ', null);
        this._el_61 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_62 = this.renderer.createText(null, '\n                ', null);
        this._el_63 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'style', 'list-style-type: none;'), null);
        this._text_64 = this.renderer.createText(this._el_63, '\n                    ', null);
        this._anchor_65 = this.renderer.createTemplateAnchor(this._el_63, null);
        this._vc_65 = new import19.ViewContainer(65, 63, this, this._anchor_65);
        this._TemplateRef_65_5 = new import24.TemplateRef_(this, 65, this._anchor_65);
        this._NgIf_65_6 = new import20.Wrapper_NgIf(this._vc_65.vcRef, this._TemplateRef_65_5);
        this._text_66 = this.renderer.createText(this._el_63, '\n                    ', null);
        this._el_67 = import3.createRenderElement(this.renderer, this._el_63, 'li', new import3.InlineArray2(2, 'style', 'list-style-type: none;'), null);
        this._text_68 = this.renderer.createText(this._el_67, '\n                        ', null);
        this._el_69 = import3.createRenderElement(this.renderer, this._el_67, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_70 = this.renderer.createText(this._el_69, 'Guardar', null);
        this._text_71 = this.renderer.createText(this._el_67, '\n                    ', null);
        this._text_72 = this.renderer.createText(this._el_63, '\n                    ', null);
        this._el_73 = import3.createRenderElement(this.renderer, this._el_63, 'li', new import3.InlineArray2(2, 'style', 'list-style-type: none;'), null);
        this._text_74 = this.renderer.createText(this._el_73, '\n                        ', null);
        this._el_75 = import3.createRenderElement(this.renderer, this._el_73, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_76 = this.renderer.createText(this._el_75, 'Reportar', null);
        this._text_77 = this.renderer.createText(this._el_73, '\n                    ', null);
        this._text_78 = this.renderer.createText(this._el_63, '\n                    ', null);
        this._text_79 = this.renderer.createText(this._el_63, '\n                ', null);
        this._text_80 = this.renderer.createText(null, '\n            ', null);
        this.compView_59.create(this._PopoverContent_59_3.context);
        this._text_81 = this.renderer.createText(this._el_54, '\n        ', null);
        this._text_82 = this.renderer.createText(this._el_38, '\n    ', null);
        this._text_83 = this.renderer.createText(this._el_4, '\n', null);
        this._text_84 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_13));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_56, new import3.InlineArray16(10, 'click', null, 'focusin', null, 'mouseenter', null, 'focusout', null, 'mouseleave', null), this.eventHandler(this.handleEvent_56));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_69, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_69));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_75, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_75));
        this._viewQuery_logginAnchor_0.reset([this._vc_0.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
        this._viewQuery_likeAnchor_1.reset([this._vc_2.vcRef]);
        this.context.likeAnchor = this._viewQuery_likeAnchor_1.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._anchor_40,
            this._text_41,
            this._anchor_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._anchor_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._text_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._text_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._text_84
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_StatusComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import26.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import24.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import26.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        if (((token === import24.TemplateRef) && (40 === requestNodeIndex))) {
            return this._TemplateRef_40_5;
        }
        if (((token === import26.NgIf) && (40 === requestNodeIndex))) {
            return this._NgIf_40_6.context;
        }
        if (((token === import24.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import26.NgIf) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        if (((token === import27.Popover) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Popover_56_5.context;
        }
        if (((token === import24.TemplateRef) && (65 === requestNodeIndex))) {
            return this._TemplateRef_65_5;
        }
        if (((token === import26.NgIf) && (65 === requestNodeIndex))) {
            return this._NgIf_65_6.context;
        }
        if (((token === import22.PopoverContent) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._PopoverContent_59_3.context;
        }
        return notFoundResult;
    };
    View_StatusComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = (((this.context.questionObj == null) ? null : ((this.context.questionObj.answers[0] == null) ? null : ((this.context.questionObj.answers[0].likes == null) ? null : this.context.questionObj.answers[0].likes.length))) < 1);
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = (((this.context.questionObj == null) ? null : ((this.context.questionObj.answers[0] == null) ? null : ((this.context.questionObj.answers[0].likes == null) ? null : this.context.questionObj.answers[0].likes.length))) > 0);
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_40_0_0 = this.context.isQuestion;
        this._NgIf_40_6.check_ngIf(currVal_40_0_0, throwOnChange, false);
        this._NgIf_40_6.ngDoCheck(this, this._anchor_40, throwOnChange);
        var currVal_42_0_0 = !this.context.isQuestion;
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        var currVal_56_0_0 = this._PopoverContent_59_3.context;
        this._Popover_56_5.check_content(currVal_56_0_0, throwOnChange, false);
        this._Popover_56_5.ngDoCheck(this, this._el_56, throwOnChange);
        var currVal_59_0_0 = 'top';
        this._PopoverContent_59_3.check_placement(currVal_59_0_0, throwOnChange, false);
        var currVal_59_0_1 = true;
        this._PopoverContent_59_3.check_closeOnClickOutside(currVal_59_0_1, throwOnChange, false);
        this._PopoverContent_59_3.ngDoCheck(this, this._el_59, throwOnChange);
        var currVal_65_0_0 = this.context.isQuestion;
        this._NgIf_65_6.check_ngIf(currVal_65_0_0, throwOnChange, false);
        this._NgIf_65_6.ngDoCheck(this, this._anchor_65, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_40.detectChangesInNestedViews(throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._vc_56.detectChangesInNestedViews(throwOnChange);
        this._vc_65.detectChangesInNestedViews(throwOnChange);
        var currVal_108 = import3.inlineInterpolate(1, ' ', (this.context.isQuestion ? this.context.questionObj.likes.length : ((this.context.answerObj == null) ? null : ((this.context.answerObj.likes == null) ? null : this.context.answerObj.likes.length))), '');
        if (import3.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setText(this._text_11, currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = import3.inlineInterpolate(1, '', ((this.context.questionObj.likes.length > 1) ? 'Me gusta' : 'Me gusta'), '');
        if (import3.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setText(this._text_15, currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = import3.inlineInterpolate(1, '', (((this.context.questionObj == null) ? null : this.context.questionObj.viewCount) ? ((this.context.questionObj == null) ? null : this.context.questionObj.viewCount) : 0), '');
        if (import3.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setText(this._text_20, currVal_110);
            this._expr_110 = currVal_110;
        }
        var currVal_111 = import3.inlineInterpolate(1, '\n    ', ((this.context.likedUsers == null) ? null : this.context.likedUsers.length), '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setText(this._text_24, currVal_111);
            this._expr_111 = currVal_111;
        }
        var currVal_112 = import3.inlineInterpolate(1, '\n        ', this.context.CommentCount, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_112, currVal_112)) {
            this.renderer.setText(this._text_26, currVal_112);
            this._expr_112 = currVal_112;
        }
        var currVal_113 = import3.inlineInterpolate(1, '#questionComment', this.context.commentId, '');
        if (import3.checkBinding(throwOnChange, this._expr_113, currVal_113)) {
            this.renderer.setElementAttribute(this._el_28, 'data-target', ((currVal_113 == null) ? null : currVal_113.toString()));
            this._expr_113 = currVal_113;
        }
        var currVal_114 = import3.inlineInterpolate(1, '', ((this.context.questionObj == null) ? null : this.context.questionObj.answerCount), '');
        if (import3.checkBinding(throwOnChange, this._expr_114, currVal_114)) {
            this.renderer.setText(this._text_32, currVal_114);
            this._expr_114 = currVal_114;
        }
        var currVal_115 = import3.inlineInterpolate(2, 'https://twitter.com/intent/tweet?text=', ((this.context.questionObj == null) ? null : this.context.questionObj.title), 'Check out:', this.context.questionObj.shareUrl, '');
        if (import3.checkBinding(throwOnChange, this._expr_115, currVal_115)) {
            this.renderer.setElementProperty(this._el_44, 'href', this.viewUtils.sanitizer.sanitize(import28.SecurityContext.URL, currVal_115));
            this._expr_115 = currVal_115;
        }
        var currVal_116 = import3.inlineInterpolate(4, 'http://www.linkedin.com/shareArticle?mini=true&url=', this.context.questionObj.shareUrl, '&title=', ((this.context.questionObj == null) ? null : this.context.questionObj.title), '&summary=', this.context.answerTagsRemoved, '&picture=', ((this.context.questionObj == null) ? null : ((this.context.questionObj.bestAnswer == null) ? null : this.context.questionObj.bestAnswer.firstImageUrl)), '');
        if (import3.checkBinding(throwOnChange, this._expr_116, currVal_116)) {
            this.renderer.setElementProperty(this._el_49, 'href', this.viewUtils.sanitizer.sanitize(import28.SecurityContext.URL, currVal_116));
            this._expr_116 = currVal_116;
        }
        this.compView_59.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._PopoverContent_59_3.context.ngAfterViewInit();
            }
        }
    };
    View_StatusComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_2.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this._vc_8.destroyNestedViews();
        this._vc_40.destroyNestedViews();
        this._vc_42.destroyNestedViews();
        this._vc_56.destroyNestedViews();
        this._vc_65.destroyNestedViews();
        this.compView_59.destroy();
        this._Popover_56_5.ngOnDestroy();
        this._PopoverContent_59_3.ngOnDestroy();
    };
    View_StatusComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 59) && (ngContentIndex == 0))) {
            cb(this._text_60, ctx);
            cb(this._el_61, ctx);
            cb(this._text_62, ctx);
            cb(this._el_63, ctx);
            cb(this._text_80, ctx);
        }
    };
    View_StatusComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_StatusComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 8)) {
            return new View_StatusComponent2(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 40)) {
            return new View_StatusComponent3(this.viewUtils, this, 40, this._anchor_40, this._vc_40);
        }
        if ((nodeIndex == 42)) {
            return new View_StatusComponent4(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        if ((nodeIndex == 65)) {
            return new View_StatusComponent5(this.viewUtils, this, 65, this._anchor_65, this._vc_65);
        }
        return null;
    };
    View_StatusComponent0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.ShowLikeCount() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_StatusComponent0.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.submitLike(((this.context.answerObj == null) ? null : this.context.answerObj.id), this.context.questionObj.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_StatusComponent0.prototype.handleEvent_56 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._Popover_56_5.handleEvent(eventName, $event) && result);
        return result;
    };
    View_StatusComponent0.prototype.handleEvent_69 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.bookmarkClicked(((this.context.questionObj == null) ? null : this.context.questionObj.id)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_StatusComponent0.prototype.handleEvent_75 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.questionReportClicked(((this.context.questionObj == null) ? null : this.context.questionObj.id), ((this.context.answerObj == null) ? null : this.context.answerObj.id)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_StatusComponent0;
}(import2.AppView));
export { View_StatusComponent0 };
var View_StatusComponent1 = (function (_super) {
    __extends(View_StatusComponent1, _super);
    function View_StatusComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_StatusComponent1, renderType_StatusComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_StatusComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(8, 'class', 'hidden-xs', 'onmouseout', 'this.src = \'../images/fade-logo.png\';', 'onmouseover', 'this.src = \'../images/like-logo.png\';', 'src', '../images/fade-logo.png'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_StatusComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_StatusComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.submitLike(((this.parentView.context.answerObj == null) ? null : this.parentView.context.answerObj.id), this.parentView.context.questionObj.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_StatusComponent1;
}(import2.AppView));
var View_StatusComponent2 = (function (_super) {
    __extends(View_StatusComponent2, _super);
    function View_StatusComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_StatusComponent2, renderType_StatusComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_StatusComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray4(4, 'class', 'hidden-xs', 'src', '../images/like-logo.png'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_StatusComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_StatusComponent2;
}(import2.AppView));
var View_StatusComponent3 = (function (_super) {
    __extends(View_StatusComponent3, _super);
    function View_StatusComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_StatusComponent3, renderType_StatusComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_StatusComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray8(6, 'class', 'SHARE FACEBOOK', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img1', 'src', '../images/facebooklogo.svg'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_StatusComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(4, 'https://www.facebook.com/sharer/sharer.php?u=', this.parentView.context.questionObj.shareUrl, '&title=', ((this.parentView.context.questionObj == null) ? null : this.parentView.context.questionObj.title), '&description=', this.parentView.context.answerTagsRemoved, '&picture=', ((this.parentView.context.questionObj == null) ? null : ((this.parentView.context.questionObj.bestAnswer == null) ? null : this.parentView.context.questionObj.bestAnswer.firstImageUrl)), '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_0, 'href', this.viewUtils.sanitizer.sanitize(import28.SecurityContext.URL, currVal_4));
            this._expr_4 = currVal_4;
        }
    };
    View_StatusComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_StatusComponent3;
}(import2.AppView));
var View_StatusComponent4 = (function (_super) {
    __extends(View_StatusComponent4, _super);
    function View_StatusComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_StatusComponent4, renderType_StatusComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_StatusComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray8(6, 'class', 'SHARE FACEBOOK', 'onclick', 'window.open(this.href, "popupwindow", "width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable");return false;', 'target', 'social'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray8(6, 'class', 'social-image', 'id', 'img1', 'src', '../images/facebooklogo.svg'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_StatusComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = import3.inlineInterpolate(4, 'https://www.facebook.com/sharer/sharer.php?u=', this.parentView.context.questionObj.shareUrl, '&title=', ((this.parentView.context.questionObj == null) ? null : this.parentView.context.questionObj.title), '&description=', ((this.parentView.context.answerObj == null) ? null : this.parentView.context.answerObj.answerTagsRemoved), '&picture=', ((this.parentView.context.answerObj == null) ? null : this.parentView.context.answerObj.firstImageUrl), '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_0, 'href', this.viewUtils.sanitizer.sanitize(import28.SecurityContext.URL, currVal_4));
            this._expr_4 = currVal_4;
        }
    };
    View_StatusComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_StatusComponent4;
}(import2.AppView));
var View_StatusComponent5 = (function (_super) {
    __extends(View_StatusComponent5, _super);
    function View_StatusComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_StatusComponent5, renderType_StatusComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_StatusComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray2(2, 'style', 'list-style-type: none;width: 91px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Editar', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_StatusComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_StatusComponent5.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.questionDetailClicked() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_StatusComponent5;
}(import2.AppView));
