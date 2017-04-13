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
import * as import0 from './related-question-left-menu.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question-answer.service';
import * as import6 from '../../services/category.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '../../services/communication.service';
import * as import14 from './left-menu.css.shim.ngstyle';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import21 from '@angular/core/src/change_detection/change_detection_util';
import * as import22 from '@angular/common/src/location/location_strategy';
import * as import23 from '@angular/router/src/directives/router_link';
var Wrapper_RelatedQuestionMenu = (function () {
    function Wrapper_RelatedQuestionMenu(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.RelatedQuestionMenu(p0, p1, p2, p3, p4);
    }
    Wrapper_RelatedQuestionMenu.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RelatedQuestionMenu.prototype.ngOnDestroy = function () {
    };
    Wrapper_RelatedQuestionMenu.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_RelatedQuestionMenu.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RelatedQuestionMenu.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RelatedQuestionMenu.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RelatedQuestionMenu;
}());
export { Wrapper_RelatedQuestionMenu };
var renderType_RelatedQuestionMenu_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_RelatedQuestionMenu_Host0 = (function (_super) {
    __extends(View_RelatedQuestionMenu_Host0, _super);
    function View_RelatedQuestionMenu_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_RelatedQuestionMenu_Host0, renderType_RelatedQuestionMenu_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_RelatedQuestionMenu_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'related-question-left-menu', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_RelatedQuestionMenu0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_3 = new import5.QuestionAnswerService(this.injectorGet(import10.Http, this.parentIndex));
        this._CategoryService_0_4 = new import6.CategoryService(this.injectorGet(import10.Http, this.parentIndex));
        this._RelatedQuestionMenu_0_5 = new Wrapper_RelatedQuestionMenu(this._QuestionAnswerService_0_3, this._CategoryService_0_4, this.injectorGet(import11.Router, this.parentIndex), this.injectorGet(import12.ActivatedRoute, this.parentIndex), this.injectorGet(import13.CommunicationService, this.parentIndex));
        this.compView_0.create(this._RelatedQuestionMenu_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._RelatedQuestionMenu_0_5.context);
    };
    View_RelatedQuestionMenu_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_3;
        }
        if (((token === import6.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_4;
        }
        if (((token === import0.RelatedQuestionMenu) && (0 === requestNodeIndex))) {
            return this._RelatedQuestionMenu_0_5.context;
        }
        return notFoundResult;
    };
    View_RelatedQuestionMenu_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RelatedQuestionMenu_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_RelatedQuestionMenu_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RelatedQuestionMenu_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RelatedQuestionMenu_Host0;
}(import1.AppView));
export var RelatedQuestionMenuNgFactory = new import9.ComponentFactory('related-question-left-menu', View_RelatedQuestionMenu_Host0, import0.RelatedQuestionMenu);
var styles_RelatedQuestionMenu = [import14.styles];
var renderType_RelatedQuestionMenu = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_RelatedQuestionMenu, {});
var View_RelatedQuestionMenu0 = (function (_super) {
    __extends(View_RelatedQuestionMenu0, _super);
    function View_RelatedQuestionMenu0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_RelatedQuestionMenu0, renderType_RelatedQuestionMenu, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_RelatedQuestionMenu0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'menu-container hidden-xs', 'id', 'category'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'list-title'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Preguntas relacionadas', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'horizontal-border', 'src', '../../../../images/border-horizontal.png'), null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._vc_10 = new import15.ViewContainer(10, 8, this, this._anchor_10);
        this._TemplateRef_10_5 = new import17.TemplateRef_(this, 10, this._anchor_10);
        this._NgFor_10_6 = new import16.Wrapper_NgFor(this._vc_10.vcRef, this._TemplateRef_10_5, this.parentView.injectorGet(import18.IterableDiffers, this.parentIndex), this.ref);
        this._text_11 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12
        ]), null);
        return null;
    };
    View_RelatedQuestionMenu0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import19.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6.context;
        }
        return notFoundResult;
    };
    View_RelatedQuestionMenu0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10_0_0 = this.context.questions;
        this._NgFor_10_6.check_ngForOf(currVal_10_0_0, throwOnChange, false);
        this._NgFor_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
    };
    View_RelatedQuestionMenu0.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
    };
    View_RelatedQuestionMenu0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_RelatedQuestionMenu1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    };
    return View_RelatedQuestionMenu0;
}(import1.AppView));
export { View_RelatedQuestionMenu0 };
var View_RelatedQuestionMenu1 = (function (_super) {
    __extends(View_RelatedQuestionMenu1, _super);
    function View_RelatedQuestionMenu1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_RelatedQuestionMenu1, renderType_RelatedQuestionMenu, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_4 = import3.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        _this._expr_5 = import21.UNINITIALIZED;
        return _this;
    }
    View_RelatedQuestionMenu1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_1_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import11.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import12.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import22.LocationStrategy, this.parentView.parentIndex));
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_RelatedQuestionMenu1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._RouterLinkWithHref_1_3.context;
        }
        return notFoundResult;
    };
    View_RelatedQuestionMenu1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this._arr_4('/question/detail', this.context.$implicit.id);
        this._RouterLinkWithHref_1_3.check_routerLink(currVal_1_0_0, throwOnChange, false);
        this._RouterLinkWithHref_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        this._RouterLinkWithHref_1_3.checkHost(this, this, this._el_1, throwOnChange);
        var currVal_5 = import3.inlineInterpolate(1, ' ', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_2, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_RelatedQuestionMenu1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_1_3.ngOnDestroy();
    };
    View_RelatedQuestionMenu1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_RelatedQuestionMenu1.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_1_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_RelatedQuestionMenu1;
}(import1.AppView));
