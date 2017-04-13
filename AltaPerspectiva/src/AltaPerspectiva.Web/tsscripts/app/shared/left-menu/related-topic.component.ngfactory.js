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
import * as import0 from './related-topic.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/question.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '../../services/communication.service';
import * as import12 from './left-menu.css.shim.ngstyle';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import21 from '@angular/router/src/router';
import * as import22 from '@angular/router/src/router_state';
import * as import23 from '@angular/common/src/location/location_strategy';
import * as import24 from '@angular/router/src/directives/router_link';
var Wrapper_RelatedTopicComponent = (function () {
    function Wrapper_RelatedTopicComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.RelatedTopicComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_RelatedTopicComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RelatedTopicComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_RelatedTopicComponent.prototype.check_topicId = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.topicId = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RelatedTopicComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_RelatedTopicComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RelatedTopicComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RelatedTopicComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RelatedTopicComponent;
}());
export { Wrapper_RelatedTopicComponent };
var renderType_RelatedTopicComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_RelatedTopicComponent_Host0 = (function (_super) {
    __extends(View_RelatedTopicComponent_Host0, _super);
    function View_RelatedTopicComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_RelatedTopicComponent_Host0, renderType_RelatedTopicComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_RelatedTopicComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'related-topic', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_RelatedTopicComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionService_0_3 = new import6.QuestionService(this.injectorGet(import10.Http, this.parentIndex));
        this._RelatedTopicComponent_0_4 = new Wrapper_RelatedTopicComponent(this._QuestionService_0_3, this.injectorGet(import11.CommunicationService, this.parentIndex));
        this.compView_0.create(this._RelatedTopicComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._RelatedTopicComponent_0_4.context);
    };
    View_RelatedTopicComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.QuestionService) && (0 === requestNodeIndex))) {
            return this._QuestionService_0_3;
        }
        if (((token === import0.RelatedTopicComponent) && (0 === requestNodeIndex))) {
            return this._RelatedTopicComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_RelatedTopicComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RelatedTopicComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_RelatedTopicComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RelatedTopicComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RelatedTopicComponent_Host0;
}(import2.AppView));
export var RelatedTopicComponentNgFactory = new import9.ComponentFactory('related-topic', View_RelatedTopicComponent_Host0, import0.RelatedTopicComponent);
var styles_RelatedTopicComponent = [import12.styles];
var renderType_RelatedTopicComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_RelatedTopicComponent, {});
var View_RelatedTopicComponent0 = (function (_super) {
    __extends(View_RelatedTopicComponent0, _super);
    function View_RelatedTopicComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_RelatedTopicComponent0, renderType_RelatedTopicComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_RelatedTopicComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'menu-container hidden-xs'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'list-title'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Temáticas relacionadas', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'horizontal-border', 'src', '../../../../images/border-horizontal.png'), null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_8 = new import13.ViewContainer(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import15.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import14.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._anchor_8,
            this._text_9
        ]), null);
        return null;
    };
    View_RelatedTopicComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import16.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        return notFoundResult;
    };
    View_RelatedTopicComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = (this.context.relatedTopics.length > 0);
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
    };
    View_RelatedTopicComponent0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
    };
    View_RelatedTopicComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_RelatedTopicComponent1(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        return null;
    };
    return View_RelatedTopicComponent0;
}(import2.AppView));
export { View_RelatedTopicComponent0 };
var View_RelatedTopicComponent1 = (function (_super) {
    __extends(View_RelatedTopicComponent1, _super);
    function View_RelatedTopicComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_RelatedTopicComponent1, renderType_RelatedTopicComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_RelatedTopicComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import13.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import15.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import17.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import18.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_RelatedTopicComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import19.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_RelatedTopicComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.relatedTopics;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_RelatedTopicComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_RelatedTopicComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_RelatedTopicComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_RelatedTopicComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_RelatedTopicComponent1;
}(import2.AppView));
var View_RelatedTopicComponent2 = (function (_super) {
    __extends(View_RelatedTopicComponent2, _super);
    function View_RelatedTopicComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_RelatedTopicComponent2, renderType_RelatedTopicComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_6 = import3.pureProxy4(function (p0, p1, p2, p3) {
            return [
                p0,
                p1,
                p2,
                p3
            ];
        });
        _this._expr_7 = import1.UNINITIALIZED;
        return _this;
    }
    View_RelatedTopicComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_2_3 = new import20.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import21.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import22.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import23.LocationStrategy, this.parentView.parentView.parentIndex));
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
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
    View_RelatedTopicComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3.context;
        }
        return notFoundResult;
    };
    View_RelatedTopicComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._arr_6('/question/home', ((this.context.$implicit == null) ? null : this.context.$implicit.categoryId), ((this.context.$implicit == null) ? null : this.context.$implicit.id), 0);
        this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0, throwOnChange, false);
        this._RouterLinkWithHref_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._RouterLinkWithHref_2_3.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, ' ', ((this.context.$implicit == null) ? null : this.context.$implicit.topicName), '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_RelatedTopicComponent2.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
    };
    View_RelatedTopicComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_RelatedTopicComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_RelatedTopicComponent2;
}(import2.AppView));
