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
import * as import0 from './bookmark.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/question.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../../services/profile.service';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../shared/question-panel/question-panel.component';
import * as import18 from '../../../services/question-answer.service';
import * as import19 from '../../../shared/question-panel/question-panel.component.ngfactory';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
var Wrapper_BookmarkComponent = (function () {
    function Wrapper_BookmarkComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.BookmarkComponent(p0, p1, p2);
    }
    Wrapper_BookmarkComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BookmarkComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_BookmarkComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BookmarkComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BookmarkComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BookmarkComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BookmarkComponent;
}());
export { Wrapper_BookmarkComponent };
var renderType_BookmarkComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BookmarkComponent_Host0 = (function (_super) {
    __extends(View_BookmarkComponent_Host0, _super);
    function View_BookmarkComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BookmarkComponent_Host0, renderType_BookmarkComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BookmarkComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BookmarkComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionService_0_3 = new import5.QuestionService(this.injectorGet(import9.Http, this.parentIndex));
        this._BookmarkComponent_0_4 = new Wrapper_BookmarkComponent(this._QuestionService_0_3, this.injectorGet(import10.ActivatedRoute, this.parentIndex), this.injectorGet(import11.ProfileService, this.parentIndex));
        this.compView_0.create(this._BookmarkComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._BookmarkComponent_0_4.context);
    };
    View_BookmarkComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionService) && (0 === requestNodeIndex))) {
            return this._QuestionService_0_3;
        }
        if (((token === import0.BookmarkComponent) && (0 === requestNodeIndex))) {
            return this._BookmarkComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_BookmarkComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BookmarkComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BookmarkComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._BookmarkComponent_0_4.ngOnDestroy();
    };
    View_BookmarkComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BookmarkComponent_Host0;
}(import1.AppView));
export var BookmarkComponentNgFactory = new import8.ComponentFactory('ng-component', View_BookmarkComponent_Host0, import0.BookmarkComponent);
var styles_BookmarkComponent = [];
var renderType_BookmarkComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_BookmarkComponent, {});
var View_BookmarkComponent0 = (function (_super) {
    __extends(View_BookmarkComponent0, _super);
    function View_BookmarkComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BookmarkComponent0, renderType_BookmarkComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BookmarkComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import12.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import14.TemplateRef_(this, 0, this._anchor_0);
        this._NgFor_0_6 = new import13.Wrapper_NgFor(this._vc_0.vcRef, this._TemplateRef_0_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_BookmarkComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import16.NgFor) && (0 === requestNodeIndex))) {
            return this._NgFor_0_6.context;
        }
        return notFoundResult;
    };
    View_BookmarkComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.questions;
        this._NgFor_0_6.check_ngForOf(currVal_0_0_0, throwOnChange, false);
        this._NgFor_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_BookmarkComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_BookmarkComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_BookmarkComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_BookmarkComponent0;
}(import1.AppView));
export { View_BookmarkComponent0 };
var View_BookmarkComponent1 = (function (_super) {
    __extends(View_BookmarkComponent1, _super);
    function View_BookmarkComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_BookmarkComponent1, renderType_BookmarkComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_BookmarkComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'tab'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'question-panel', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import19.View_QuestionPanelComponent0(this.viewUtils, this, 2, this._el_2);
        this._QuestionAnswerService_2_3 = new import18.QuestionAnswerService(this.parentView.injectorGet(import9.Http, this.parentIndex));
        this._QuestionPanelComponent_2_4 = new import19.Wrapper_QuestionPanelComponent(this.parentView.injectorGet(import20.ComponentFactoryResolver, this.parentIndex), this._QuestionAnswerService_2_3);
        this.compView_2.create(this._QuestionPanelComponent_2_4.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_BookmarkComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.QuestionAnswerService) && (2 === requestNodeIndex))) {
            return this._QuestionAnswerService_2_3;
        }
        if (((token === import17.QuestionPanelComponent) && (2 === requestNodeIndex))) {
            return this._QuestionPanelComponent_2_4.context;
        }
        return notFoundResult;
    };
    View_BookmarkComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._QuestionPanelComponent_2_4.check_question(currVal_2_0_0, throwOnChange, false);
        this._QuestionPanelComponent_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_BookmarkComponent1.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_BookmarkComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BookmarkComponent1;
}(import1.AppView));
