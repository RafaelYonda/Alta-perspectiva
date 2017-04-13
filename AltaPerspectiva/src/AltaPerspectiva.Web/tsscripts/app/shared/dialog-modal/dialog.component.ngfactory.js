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
import * as import0 from './dialog.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question-answer.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from './dialog.component.css.shim.ngstyle';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '../question-header/question-header.component';
import * as import19 from '../question-header/question-header.component.ngfactory';
import * as import20 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import21 from '../user-info/user-info.component';
import * as import22 from '../../services/profile.service';
import * as import23 from '../user-info/user-info.component.ngfactory';
import * as import24 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import25 from '../status/status.component';
import * as import26 from '../../services/status.service';
import * as import27 from '../../services/question.service';
import * as import28 from '../status/status.component.ngfactory';
import * as import29 from '../comment/comment.component';
import * as import30 from '../../services/comment.service';
import * as import31 from '../comment/comment.component.ngfactory';
import * as import32 from '@angular/core/src/change_detection/change_detection_util';
import * as import33 from '@angular/router/src/router_state';
import * as import34 from '@angular/common/src/location/location_strategy';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import37 from '@angular/core/src/linker/element_ref';
import * as import38 from '../../services/authentication.service';
import * as import39 from '../../services/communication.service';
import * as import40 from 'ng2-toastr/src/toast-manager';
import * as import41 from '@angular/router/src/directives/router_link';
import * as import42 from '@angular/common/src/directives/ng_class';
import * as import43 from '@angular/core/src/security';
import * as import44 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import45 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import46 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import47 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import48 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import49 from '@angular/forms/src/directives/default_value_accessor';
import * as import50 from '@angular/forms/src/directives/validators';
import * as import51 from '@angular/forms/src/validators';
import * as import52 from '@angular/forms/src/directives/control_value_accessor';
import * as import53 from '@angular/forms/src/directives/ng_model';
import * as import54 from '@angular/forms/src/directives/ng_control';
import * as import55 from '@angular/forms/src/directives/ng_control_status';
import * as import56 from '@angular/forms/src/directives/ng_form';
import * as import57 from '@angular/forms/src/directives/control_container';
var Wrapper_DialogComponent = (function () {
    function Wrapper_DialogComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.DialogComponent(p0, p1, p2);
    }
    Wrapper_DialogComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DialogComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DialogComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DialogComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DialogComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DialogComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DialogComponent;
}());
export { Wrapper_DialogComponent };
var renderType_DialogComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DialogComponent_Host0 = (function (_super) {
    __extends(View_DialogComponent_Host0, _super);
    function View_DialogComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DialogComponent_Host0, renderType_DialogComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DialogComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'dlg', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DialogComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import9.Http, this.parentIndex));
        this._DialogComponent_0_4 = new Wrapper_DialogComponent(this._QuestionAnswerService_0_3, this.injectorGet(import10.Router, this.parentIndex), this.injectorGet(import11.ComponentFactoryResolver, this.parentIndex));
        this.compView_0.create(this._DialogComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._DialogComponent_0_4.context);
    };
    View_DialogComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import0.DialogComponent) && (0 === requestNodeIndex))) {
            return this._DialogComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_DialogComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DialogComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DialogComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DialogComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DialogComponent_Host0;
}(import1.AppView));
export var DialogComponentNgFactory = new import8.ComponentFactory('dlg', View_DialogComponent_Host0, import0.DialogComponent);
var styles_DialogComponent = [
    '.disabledFollowingImg[_ngcontent-%COMP%] {\n        height:25px;\n        opacity: .1;\n    }\n\n    .enableFollowingImg[_ngcontent-%COMP%] {\n        height:25px;\n        opacity: 1;\n    }\n    .enableFollowingImg[_ngcontent-%COMP%]:hover{\n        height:30px;\n    }',
    import12.styles
];
var renderType_DialogComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_DialogComponent, {});
var View_DialogComponent0 = (function (_super) {
    __extends(View_DialogComponent0, _super);
    function View_DialogComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DialogComponent0, renderType_DialogComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DialogComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import13.QueryList();
        this._viewQuery_questionReport_1 = new import13.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_3 = new import14.ViewContainer(3, 1, this, this._el_3);
        this._text_4 = this.renderer.createText(this._el_1, '\n    \n    ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_5 = new import14.ViewContainer(5, 1, this, this._anchor_5);
        this._TemplateRef_5_5 = new import16.TemplateRef_(this, 5, this._anchor_5);
        this._NgIf_5_6 = new import15.Wrapper_NgIf(this._vc_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_7 = new import14.ViewContainer(7, 1, this, this._anchor_7);
        this._TemplateRef_7_5 = new import16.TemplateRef_(this, 7, this._anchor_7);
        this._NgIf_7_6 = new import15.Wrapper_NgIf(this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_1, '\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this._viewQuery_questionReport_1.reset([this._vc_3.vcRef]);
        this.context.questionReport = this._viewQuery_questionReport_1.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._text_9
        ]), [disposable_0]);
        return null;
    };
    View_DialogComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import17.NgIf) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        if (((token === import16.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import17.NgIf) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        return notFoundResult;
    };
    View_DialogComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = !this.context.showQuestionEditForm;
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        var currVal_7_0_0 = this.context.showQuestionEditForm;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_logginAnchor_0.dirty) {
                this._viewQuery_logginAnchor_0.reset([this._vc_5.mapNestedViews(View_DialogComponent1, function (nestedView) {
                        return [nestedView._vc_2.vcRef];
                    })]);
                this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
            }
        }
    };
    View_DialogComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
    };
    View_DialogComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_DialogComponent1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        if ((nodeIndex == 7)) {
            return new View_DialogComponent3(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    View_DialogComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DialogComponent0;
}(import1.AppView));
export { View_DialogComponent0 };
var View_DialogComponent1 = (function (_super) {
    __extends(View_DialogComponent1, _super);
    function View_DialogComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_DialogComponent1, renderType_DialogComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_75 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_76 = import32.UNINITIALIZED;
        _this._map_77 = import3.pureProxy2(function (p0, p1) {
            return {
                disabledFollowingImg: p0,
                enableFollowingImg: p1
            };
        });
        _this._expr_78 = import32.UNINITIALIZED;
        return _this;
    }
    View_DialogComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_2 = new import14.ViewContainer(2, 0, this, this._el_2);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'dialog'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'x', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'header', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n                    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_13 = new import19.View_QuestionHeaderComponent0(this.viewUtils, this, 13, this._el_13);
        this._QuestionHeaderComponent_13_3 = new import19.Wrapper_QuestionHeaderComponent(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex));
        this.compView_13.create(this._QuestionHeaderComponent_13_3.context);
        this._text_14 = this.renderer.createText(this._el_11, '\n                    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_11, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_17_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import33.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.LocationStrategy, this.parentView.parentIndex));
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._text_20 = this.renderer.createText(this._el_11, '\n                ', null);
        this._text_21 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_22 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'panel-article'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n                ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'div', new import3.InlineArray2(2, 'class', 'details-container'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_29 = new import23.View_UserInfoComponent0(this.viewUtils, this, 29, this._el_29);
        this._ProfileService_29_3 = new import22.ProfileService(this.parentView.parentView.injectorGet(import9.Http, this.parentView.parentIndex));
        this._UserInfoComponent_29_4 = new import23.Wrapper_UserInfoComponent(this._ProfileService_29_3);
        this.compView_29.create(this._UserInfoComponent_29_4.context);
        this._text_30 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_27, 'div', new import3.InlineArray2(2, 'class', 'pull-right'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n                            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, '\n                                ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'img', new import3.InlineArray2(2, 'src', '../../images/FollowingImage.svg'), null);
        this._NgClass_35_3 = new import24.Wrapper_NgClass(this.parentView.parentView.injectorGet(import35.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import36.KeyValueDiffers, this.parentView.parentIndex), new import37.ElementRef(this._el_35), this.renderer);
        this._text_36 = this.renderer.createText(this._el_33, '\n                            ', null);
        this._text_37 = this.renderer.createText(this._el_31, '\n                        ', null);
        this._text_38 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_27, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_42 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_39, 'ap-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_43 = new import28.View_StatusComponent0(this.viewUtils, this, 43, this._el_43);
        this._StatusService_43_3 = new import26.StatusService(this.parentView.parentView.injectorGet(import9.Http, this.parentView.parentIndex));
        this._QuestionService_43_4 = new import27.QuestionService(this.parentView.parentView.injectorGet(import9.Http, this.parentView.parentIndex));
        this._StatusComponent_43_5 = new import28.Wrapper_StatusComponent(this.parentView.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import38.AuthenticationService, this.parentView.parentIndex), this._StatusService_43_3, this.parentView.parentView.injectorGet(import5.QuestionAnswerService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import39.CommunicationService, this.parentView.parentIndex), this._QuestionService_43_4, this.parentView.parentView.injectorGet(import40.ToastsManager, this.parentView.parentIndex));
        this._text_44 = this.renderer.createText(null, ' ', null);
        this.compView_43.create(this._StatusComponent_43_5.context);
        this._text_45 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_39, 'ap-comment', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_46 = new import31.View_CommentComponent0(this.viewUtils, this, 46, this._el_46);
        this._CommentService_46_3 = new import30.CommentService(this.parentView.parentView.injectorGet(import9.Http, this.parentView.parentIndex));
        this._CommentComponent_46_4 = new import31.Wrapper_CommentComponent(this._CommentService_46_3, this.parentView.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import39.CommunicationService, this.parentView.parentIndex));
        this.compView_46.create(this._CommentComponent_46_4.context);
        this._text_47 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_39, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_49 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._anchor_50 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_50 = new import14.ViewContainer(50, 39, this, this._anchor_50);
        this._TemplateRef_50_5 = new import16.TemplateRef_(this, 50, this._anchor_50);
        this._NgIf_50_6 = new import15.Wrapper_NgIf(this._vc_50.vcRef, this._TemplateRef_50_5);
        this._text_51 = this.renderer.createText(this._el_39, '\n                        ', null);
        this._text_52 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._text_53 = this.renderer.createText(this._el_25, '\n                ', null);
        this._text_54 = this.renderer.createText(this._el_23, '\n            ', null);
        this._text_55 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_56 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_17));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_33));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_43, new import3.InlineArray4(4, 'onQuestionDetailClicked', null, 'onQuestionReportClicked', null), this.eventHandler(this.handleEvent_43));
        this._StatusComponent_43_5.subscribe(this, this.eventHandler(this.handleEvent_43), true, true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._anchor_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._text_56
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_DialogComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.QuestionHeaderComponent) && (13 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_13_3.context;
        }
        if (((token === import41.RouterLinkWithHref) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._RouterLinkWithHref_17_3.context;
        }
        if (((token === import22.ProfileService) && (29 === requestNodeIndex))) {
            return this._ProfileService_29_3;
        }
        if (((token === import21.UserInfoComponent) && (29 === requestNodeIndex))) {
            return this._UserInfoComponent_29_4.context;
        }
        if (((token === import42.NgClass) && (35 === requestNodeIndex))) {
            return this._NgClass_35_3.context;
        }
        if (((token === import26.StatusService) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._StatusService_43_3;
        }
        if (((token === import27.QuestionService) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._QuestionService_43_4;
        }
        if (((token === import25.StatusComponent) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._StatusComponent_43_5.context;
        }
        if (((token === import30.CommentService) && (46 === requestNodeIndex))) {
            return this._CommentService_46_3;
        }
        if (((token === import29.CommentComponent) && (46 === requestNodeIndex))) {
            return this._CommentComponent_46_4.context;
        }
        if (((token === import16.TemplateRef) && (50 === requestNodeIndex))) {
            return this._TemplateRef_50_5;
        }
        if (((token === import17.NgIf) && (50 === requestNodeIndex))) {
            return this._NgIf_50_6.context;
        }
        return notFoundResult;
    };
    View_DialogComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_13_0_0 = this.parentView.context.question;
        this._QuestionHeaderComponent_13_3.check_question(currVal_13_0_0, throwOnChange, false);
        this._QuestionHeaderComponent_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_17_0_0 = this._arr_75('/question/detail', this.parentView.context.question.id);
        this._RouterLinkWithHref_17_3.check_routerLink(currVal_17_0_0, throwOnChange, false);
        this._RouterLinkWithHref_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_29_0_0 = ((this.parentView.context.question.bestAnswer == null) ? null : this.parentView.context.question.bestAnswer.userViewModel);
        this._UserInfoComponent_29_4.check_userObj(currVal_29_0_0, throwOnChange, false);
        var currVal_29_0_1 = ((this.parentView.context.question.bestAnswer == null) ? null : this.parentView.context.question.bestAnswer.answerDate);
        this._UserInfoComponent_29_4.check_viewDate(currVal_29_0_1, throwOnChange, false);
        var currVal_29_0_2 = ((this.parentView.context.question.bestAnswer == null) ? null : this.parentView.context.question.bestAnswer.isAnonymous);
        this._UserInfoComponent_29_4.check_isAnonymous(currVal_29_0_2, throwOnChange, false);
        this._UserInfoComponent_29_4.ngDoCheck(this, this._el_29, throwOnChange);
        var currVal_35_0_0 = this._map_77(!this.parentView.context.isFollowing, this.parentView.context.isFollowing);
        this._NgClass_35_3.check_ngClass(currVal_35_0_0, throwOnChange, false);
        this._NgClass_35_3.ngDoCheck(this, this._el_35, throwOnChange);
        var currVal_43_0_0 = this.parentView.context.question;
        this._StatusComponent_43_5.check_questionObj(currVal_43_0_0, throwOnChange, false);
        var currVal_43_0_1 = ((this.parentView.context.question == null) ? null : this.parentView.context.question.bestAnswer);
        this._StatusComponent_43_5.check_answerObj(currVal_43_0_1, throwOnChange, false);
        var currVal_43_0_2 = false;
        this._StatusComponent_43_5.check_isQuestion(currVal_43_0_2, throwOnChange, false);
        this._StatusComponent_43_5.ngDoCheck(this, this._el_43, throwOnChange);
        var currVal_46_0_0 = ((this.parentView.context.question == null) ? null : this.parentView.context.question.id);
        this._CommentComponent_46_4.check_questionId(currVal_46_0_0, throwOnChange, false);
        var currVal_46_0_1 = ((this.parentView.context.question == null) ? null : ((this.parentView.context.question.bestAnswer == null) ? null : this.parentView.context.question.bestAnswer.id));
        this._CommentComponent_46_4.check_answerId(currVal_46_0_1, throwOnChange, false);
        var currVal_46_0_2 = false;
        this._CommentComponent_46_4.check_isQuestion(currVal_46_0_2, throwOnChange, false);
        this._CommentComponent_46_4.ngDoCheck(this, this._el_46, throwOnChange);
        var currVal_50_0_0 = (this.parentView.context.question.answerCount > 1);
        this._NgIf_50_6.check_ngIf(currVal_50_0_0, throwOnChange, false);
        this._NgIf_50_6.ngDoCheck(this, this._anchor_50, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_50.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_17_3.checkHost(this, this, this._el_17, throwOnChange);
        var currVal_76 = import3.inlineInterpolate(1, '', this.parentView.context.question.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setText(this._text_18, currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_78 = ((this.parentView.context.question.bestAnswer == null) ? null : this.parentView.context.question.bestAnswer.text);
        if (import3.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementProperty(this._el_41, 'innerHTML', this.viewUtils.sanitizer.sanitize(import43.SecurityContext.HTML, currVal_78));
            this._expr_78 = currVal_78;
        }
        this.compView_13.internalDetectChanges(throwOnChange);
        this.compView_29.internalDetectChanges(throwOnChange);
        this.compView_43.internalDetectChanges(throwOnChange);
        this.compView_46.internalDetectChanges(throwOnChange);
    };
    View_DialogComponent1.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_logginAnchor_0.setDirty();
    };
    View_DialogComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_50.destroyNestedViews();
        this.compView_13.destroy();
        this.compView_29.destroy();
        this.compView_43.destroy();
        this.compView_46.destroy();
        this._RouterLinkWithHref_17_3.ngOnDestroy();
        this._StatusComponent_43_5.ngOnDestroy();
        this._CommentComponent_46_4.ngOnDestroy();
    };
    View_DialogComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DialogComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 50)) {
            return new View_DialogComponent2(this.viewUtils, this, 50, this._anchor_50, this._vc_50);
        }
        return null;
    };
    View_DialogComponent1.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DialogComponent1.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_17_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_DialogComponent1.prototype.handleEvent_33 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.QuestionFollowing(this.parentView.context.question) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DialogComponent1.prototype.handleEvent_43 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onQuestionDetailClicked')) {
            var pd_sub_0 = (this.parentView.context.onQuestionDetailClicked($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'onQuestionReportClicked')) {
            var pd_sub_1 = (this.parentView.context.onQuestionReportClicked($event, this.parentView.context.questionId, this.parentView.context.answerId) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    return View_DialogComponent1;
}(import1.AppView));
var View_DialogComponent2 = (function (_super) {
    __extends(View_DialogComponent2, _super);
    function View_DialogComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_DialogComponent2, renderType_DialogComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_4 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_5 = import32.UNINITIALIZED;
        return _this;
    }
    View_DialogComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray2(2, 'class', 'btn btn-info'), null);
        this._RouterLink_0_3 = new import20.Wrapper_RouterLink(this.parentView.parentView.parentView.injectorGet(import10.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import33.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import34.LocationStrategy, this.parentView.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n                                ', null);
        this._text_2 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_DialogComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import41.RouterLink) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLink_0_3.context;
        }
        return notFoundResult;
    };
    View_DialogComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_4('/question/detail', this.parentView.parentView.context.question.id);
        this._RouterLink_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLink_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_5 = import3.inlineInterpolate(1, '\n                                Ver  ', (((this.parentView.parentView.context.question == null) ? null : this.parentView.parentView.context.question.answerCount) - 1), ' Respuestas\n                            ');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_2, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_DialogComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DialogComponent2.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_DialogComponent2;
}(import1.AppView));
var View_DialogComponent3 = (function (_super) {
    __extends(View_DialogComponent3, _super);
    function View_DialogComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_DialogComponent3, renderType_DialogComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_53 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_54 = import32.UNINITIALIZED;
        return _this;
    }
    View_DialogComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'dialog'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_4_3 = new import44.Wrapper_NgForm(null, null);
        this._ControlContainer_4_4 = this._NgForm_4_3.context;
        this._NgControlStatusGroup_4_5 = new import45.Wrapper_NgControlStatusGroup(this._ControlContainer_4_4);
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'question-header', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import19.View_QuestionHeaderComponent0(this.viewUtils, this, 6, this._el_6);
        this._QuestionHeaderComponent_6_3 = new import19.Wrapper_QuestionHeaderComponent(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex));
        this.compView_6.create(this._QuestionHeaderComponent_6_3.context);
        this._text_7 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_4, 'h1', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray8(6, 'name', 'editField', 'required', '', 'style', 'width: 538px;'), null);
        this._DefaultValueAccessor_10_3 = new import46.Wrapper_DefaultValueAccessor(this.renderer, new import37.ElementRef(this._el_10));
        this._RequiredValidator_10_4 = new import47.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4.context];
        this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3.context];
        this._NgModel_10_7 = new import48.Wrapper_NgModel(this._ControlContainer_4_4, this._NG_VALIDATORS_10_5, null, this._NG_VALUE_ACCESSOR_10_6);
        this._NgControl_10_8 = this._NgModel_10_7.context;
        this._NgControlStatus_10_9 = new import45.Wrapper_NgControlStatus(this._NgControl_10_8);
        this._text_11 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_4, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_4, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_4, 'textarea', new import3.InlineArray16(10, 'class', 'question-control', 'cols', '86', 'name', 'editBody', 'placeholder', 'Agrega detalle de tu pregunta - Optional', 'rows', '6'), null);
        this._DefaultValueAccessor_17_3 = new import46.Wrapper_DefaultValueAccessor(this.renderer, new import37.ElementRef(this._el_17));
        this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_5 = new import48.Wrapper_NgModel(this._ControlContainer_4_4, null, null, this._NG_VALUE_ACCESSOR_17_4);
        this._NgControl_17_6 = this._NgModel_17_5.context;
        this._NgControlStatus_17_7 = new import45.Wrapper_NgControlStatus(this._NgControl_17_6);
        this._text_18 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'button', new import3.InlineArray4(4, 'class', 'btn btn-success fixed-height', 'type', 'submit'), null);
        this._text_22 = this.renderer.createText(this._el_21, 'Update', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_19, 'button', new import3.InlineArray4(4, 'class', 'btn btn-info fixed-height', 'type', 'button'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'Cancel', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_28 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_2, 'ap-status', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_29 = new import28.View_StatusComponent0(this.viewUtils, this, 29, this._el_29);
        this._StatusService_29_3 = new import26.StatusService(this.parentView.parentView.injectorGet(import9.Http, this.parentView.parentIndex));
        this._QuestionService_29_4 = new import27.QuestionService(this.parentView.parentView.injectorGet(import9.Http, this.parentView.parentIndex));
        this._StatusComponent_29_5 = new import28.Wrapper_StatusComponent(this.parentView.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import38.AuthenticationService, this.parentView.parentIndex), this._StatusService_29_3, this.parentView.parentView.injectorGet(import5.QuestionAnswerService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import39.CommunicationService, this.parentView.parentIndex), this._QuestionService_29_4, this.parentView.parentView.injectorGet(import40.ToastsManager, this.parentView.parentIndex));
        this.compView_29.create(this._StatusComponent_29_5.context);
        this._text_30 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_4));
        this._NgForm_4_3.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_7.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_5.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_24));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_29, new import3.InlineArray4(4, 'onQuestionReportClicked', null, 'onQuestionDetailClicked', null), this.eventHandler(this.handleEvent_29));
        this._StatusComponent_29_5.subscribe(this, this.eventHandler(this.handleEvent_29), true, true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_DialogComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.QuestionHeaderComponent) && (6 === requestNodeIndex))) {
            return this._QuestionHeaderComponent_6_3.context;
        }
        if (((token === import49.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import50.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_4.context;
        }
        if (((token === import51.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_5;
        }
        if (((token === import52.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_6;
        }
        if (((token === import53.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_7.context;
        }
        if (((token === import54.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_8;
        }
        if (((token === import55.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_9.context;
        }
        if (((token === import49.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import52.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_4;
        }
        if (((token === import53.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_5.context;
        }
        if (((token === import54.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_6;
        }
        if (((token === import55.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_7.context;
        }
        if (((token === import56.NgForm) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgForm_4_3.context;
        }
        if (((token === import57.ControlContainer) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ControlContainer_4_4;
        }
        if (((token === import55.NgControlStatusGroup) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgControlStatusGroup_4_5.context;
        }
        if (((token === import26.StatusService) && (29 === requestNodeIndex))) {
            return this._StatusService_29_3;
        }
        if (((token === import27.QuestionService) && (29 === requestNodeIndex))) {
            return this._QuestionService_29_4;
        }
        if (((token === import25.StatusComponent) && (29 === requestNodeIndex))) {
            return this._StatusComponent_29_5.context;
        }
        return notFoundResult;
    };
    View_DialogComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        this._NgControlStatusGroup_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_6_0_0 = this.parentView.context.question;
        this._QuestionHeaderComponent_6_3.check_question(currVal_6_0_0, throwOnChange, false);
        this._QuestionHeaderComponent_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_1_0 = '';
        this._RequiredValidator_10_4.check_required(currVal_10_1_0, throwOnChange, false);
        this._RequiredValidator_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_2_0 = 'editField';
        this._NgModel_10_7.check_name(currVal_10_2_0, throwOnChange, false);
        var currVal_10_2_1 = this.parentView.context.editTitle;
        this._NgModel_10_7.check_model(currVal_10_2_1, throwOnChange, false);
        this._NgModel_10_7.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.ngDoCheck(this, this._el_10, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_1_0 = 'editBody';
        this._NgModel_17_5.check_name(currVal_17_1_0, throwOnChange, false);
        var currVal_17_1_1 = this.parentView.context.editBody;
        this._NgModel_17_5.check_model(currVal_17_1_1, throwOnChange, false);
        var currVal_17_1_2 = this._map_53(true);
        this._NgModel_17_5.check_options(currVal_17_1_2, throwOnChange, false);
        this._NgModel_17_5.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_29_0_0 = this.parentView.context.question;
        this._StatusComponent_29_5.check_questionObj(currVal_29_0_0, throwOnChange, false);
        var currVal_29_0_1 = this.parentView.context.question.bestAnswer;
        this._StatusComponent_29_5.check_answerObj(currVal_29_0_1, throwOnChange, false);
        var currVal_29_0_2 = false;
        this._StatusComponent_29_5.check_isQuestion(currVal_29_0_2, throwOnChange, false);
        this._StatusComponent_29_5.ngDoCheck(this, this._el_29, throwOnChange);
        this._NgControlStatusGroup_4_5.checkHost(this, this, this._el_4, throwOnChange);
        this._RequiredValidator_10_4.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_17_7.checkHost(this, this, this._el_17, throwOnChange);
        var currVal_54 = !this._NgForm_4_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementProperty(this._el_21, 'disabled', currVal_54);
            this._expr_54 = currVal_54;
        }
        this.compView_6.internalDetectChanges(throwOnChange);
        this.compView_29.internalDetectChanges(throwOnChange);
    };
    View_DialogComponent3.prototype.destroyInternal = function () {
        this.compView_6.destroy();
        this.compView_29.destroy();
        this._NgModel_10_7.ngOnDestroy();
        this._NgModel_17_5.ngOnDestroy();
        this._NgForm_4_3.ngOnDestroy();
        this._StatusComponent_29_5.ngOnDestroy();
    };
    View_DialogComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DialogComponent3.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.parentView.context.updateQuestion() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DialogComponent3.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.editTitle = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DialogComponent3.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.editBody = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DialogComponent3.prototype.handleEvent_24 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onQuestionDetailClicked(false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DialogComponent3.prototype.handleEvent_29 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onQuestionReportClicked')) {
            var pd_sub_0 = (this.parentView.context.onQuestionReportClicked($event, this.parentView.context.questionId, this.parentView.context.answerId) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'onQuestionDetailClicked')) {
            var pd_sub_1 = (this.parentView.context.onQuestionDetailClicked($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    return View_DialogComponent3;
}(import1.AppView));
