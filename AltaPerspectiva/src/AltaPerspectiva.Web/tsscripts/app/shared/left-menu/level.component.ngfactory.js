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
import * as import0 from './level.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/question.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../services/communication.service';
import * as import11 from './left-menu.css.shim.ngstyle';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/core/src/change_detection/change_detection_util';
import * as import21 from '@angular/router/src/router';
import * as import22 from '@angular/router/src/router_state';
import * as import23 from '@angular/common/src/location/location_strategy';
import * as import24 from '@angular/router/src/directives/router_link';
var Wrapper_LevelComponent = (function () {
    function Wrapper_LevelComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.LevelComponent(p0, p1);
    }
    Wrapper_LevelComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LevelComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_LevelComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_LevelComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LevelComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LevelComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LevelComponent;
}());
export { Wrapper_LevelComponent };
var renderType_LevelComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LevelComponent_Host0 = (function (_super) {
    __extends(View_LevelComponent_Host0, _super);
    function View_LevelComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LevelComponent_Host0, renderType_LevelComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LevelComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'level', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LevelComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionService_0_3 = new import5.QuestionService(this.injectorGet(import9.Http, this.parentIndex));
        this._LevelComponent_0_4 = new Wrapper_LevelComponent(this._QuestionService_0_3, this.injectorGet(import10.CommunicationService, this.parentIndex));
        this.compView_0.create(this._LevelComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._LevelComponent_0_4.context);
    };
    View_LevelComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.QuestionService) && (0 === requestNodeIndex))) {
            return this._QuestionService_0_3;
        }
        if (((token === import0.LevelComponent) && (0 === requestNodeIndex))) {
            return this._LevelComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_LevelComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LevelComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LevelComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LevelComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LevelComponent_Host0;
}(import1.AppView));
export var LevelComponentNgFactory = new import8.ComponentFactory('level', View_LevelComponent_Host0, import0.LevelComponent);
var styles_LevelComponent = [import11.styles];
var renderType_LevelComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_LevelComponent, {});
var View_LevelComponent0 = (function (_super) {
    __extends(View_LevelComponent0, _super);
    function View_LevelComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LevelComponent0, renderType_LevelComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LevelComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'menu-container hidden-xs'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'list-title'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Tipo de solicitud', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'horizontal-border', 'src', '../../../../images/border-horizontal.png'), null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_8 = new import12.ViewContainer(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import14.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import13.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
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
    View_LevelComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import15.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        return notFoundResult;
    };
    View_LevelComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = (this.context.levels.length > 0);
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
    };
    View_LevelComponent0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
    };
    View_LevelComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_LevelComponent1(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        return null;
    };
    return View_LevelComponent0;
}(import1.AppView));
export { View_LevelComponent0 };
var View_LevelComponent1 = (function (_super) {
    __extends(View_LevelComponent1, _super);
    function View_LevelComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LevelComponent1, renderType_LevelComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LevelComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import12.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import14.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import16.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import17.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_LevelComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import18.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_LevelComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.levels;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_LevelComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_LevelComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_LevelComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_LevelComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_LevelComponent1;
}(import1.AppView));
var View_LevelComponent2 = (function (_super) {
    __extends(View_LevelComponent2, _super);
    function View_LevelComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_LevelComponent2, renderType_LevelComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_6 = import3.pureProxy4(function (p0, p1, p2, p3) {
            return [
                p0,
                p1,
                p2,
                p3
            ];
        });
        _this._expr_7 = import20.UNINITIALIZED;
        return _this;
    }
    View_LevelComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_2_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import21.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import22.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import23.LocationStrategy, this.parentView.parentView.parentIndex));
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
    View_LevelComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3.context;
        }
        return notFoundResult;
    };
    View_LevelComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._arr_6('/question/home', this.parentView.parentView.context.categoryId, this.parentView.parentView.context.topicId, ((this.context.$implicit == null) ? null : this.context.$implicit.id));
        this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0, throwOnChange, false);
        this._RouterLinkWithHref_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._RouterLinkWithHref_2_3.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, ' ', ((this.context.$implicit == null) ? null : this.context.$implicit.levelName), '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_LevelComponent2.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
    };
    View_LevelComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_LevelComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_LevelComponent2;
}(import1.AppView));
