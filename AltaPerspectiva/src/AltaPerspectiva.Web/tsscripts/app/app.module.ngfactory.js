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
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from 'ng2-toastr/src/toast.module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from '@angular/router/src/router_module';
import * as import10 from 'ngx-popover/index';
import * as import11 from 'ngx-quill/src/quill.module';
import * as import12 from 'ng2-ckeditor/lib/ckeditor.module';
import * as import13 from './shared/shared.module';
import * as import14 from 'angular2-infinite-scroll/src/index';
import * as import15 from './questions/question.module';
import * as import16 from './core/core.module';
import * as import17 from 'ng2-img-cropper/src/imageCropperModule';
import * as import18 from './dashboard/dashboard.module';
import * as import19 from '@angular/common/src/localization';
import * as import20 from '@angular/core/src/application_init';
import * as import21 from '@angular/core/src/testability/testability';
import * as import22 from '@angular/core/src/application_ref';
import * as import23 from '@angular/core/src/linker/compiler';
import * as import24 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import25 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import26 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import27 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import28 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import29 from '@angular/core/src/animation/animation_queue';
import * as import30 from '@angular/core/src/linker/view_utils';
import * as import31 from '@angular/platform-browser/src/browser/title';
import * as import32 from '@angular/http/src/backends/browser_xhr';
import * as import33 from '@angular/http/src/base_response_options';
import * as import34 from '@angular/http/src/backends/xhr_backend';
import * as import35 from '@angular/http/src/base_request_options';
import * as import36 from 'ng2-toastr/src/toast-manager';
import * as import37 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import38 from './services/window-ref.service';
import * as import39 from './services/communication.service';
import * as import40 from 'angular2-infinite-scroll/src/axis-resolver';
import * as import41 from 'angular2-infinite-scroll/src/position-resolver';
import * as import42 from '@angular/common/src/location/location';
import * as import43 from '@angular/router/src/url_tree';
import * as import44 from '@angular/router/src/router_outlet_map';
import * as import45 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import46 from './services/question-answer.service';
import * as import47 from './services/resolve.services/question.resolver';
import * as import48 from './services/resolve.services/profile.resolver';
import * as import50 from '../../node_modules/ng2-toastr/src/toast-container.component.ngfactory';
import * as import51 from '../../node_modules/ngx-popover/PopoverContent.ngfactory';
import * as import52 from './shared/dialog-modal/dialog.component.ngfactory';
import * as import53 from './shared/answer-dialog/answer-dialog.component.ngfactory';
import * as import54 from './shared/question-report/question-report.component.ngfactory';
import * as import55 from './shared/login-modal/login-modal.component.ngfactory';
import * as import56 from './shared/like-modal/like.component.ngfactory';
import * as import57 from './questions/question-home.component.ngfactory';
import * as import58 from './questions/question-body/question-body.component.ngfactory';
import * as import59 from './questions/all-user/all-user.ngfactory';
import * as import60 from './questions/question-details/question-details.component.ngfactory';
import * as import61 from './questions/question-fullscreen/question-fullscreen.component.ngfactory';
import * as import62 from './core/home.component.ngfactory';
import * as import63 from './core/tabs/tab-panel.component.ngfactory';
import * as import64 from './dashboard/dashboard.component.ngfactory';
import * as import65 from './dashboard/viewprofile/viewprofile.component.ngfactory';
import * as import66 from './dashboard/viewprofile/user-question/user-question.component.ngfactory';
import * as import67 from './dashboard/viewprofile/user-answer/user-answer.component.ngfactory';
import * as import68 from './dashboard/viewprofile/follower/follower.component.ngfactory';
import * as import69 from './dashboard/viewprofile/following/following.component.ngfactory';
import * as import70 from './dashboard/viewprofile/bookmark/bookmark.component.ngfactory';
import * as import71 from './dashboard/viewprofile/posted-question/posted-question.component.ngfactory';
import * as import72 from './dashboard/viewprofile/blog-create/blog-create.component.ngfactory';
import * as import73 from './dashboard/viewprofile/direct-question/direct-question.component.ngfactory';
import * as import74 from './dashboard/viewprofile/virtual-store/virtual-store.component.ngfactory';
import * as import75 from './dashboard/viewprofile/draft-answer/draft-answer.component.ngfactory';
import * as import76 from './dashboard/viewprofile/blog-post/blog-post.component.ngfactory';
import * as import77 from './dashboard/viewprofile/edit-profile/add-credential.component.ngfactory';
import * as import78 from './dashboard/viewprofile/edit-profile/add-employment.component.ngfactory';
import * as import79 from './dashboard/viewprofile/edit-profile/add-education.component.ngfactory';
import * as import80 from './dashboard/viewprofile/edit-profile/add-otherexperience.component.ngfactory';
import * as import81 from './dashboard/viewprofile/edit-profile/add-place.component.ngfactory';
import * as import82 from './dashboard/viewprofile/blog-post/blogpost-detail.component.ngfactory';
import * as import83 from './dashboard/viewprofile/virtual-store/item-dialog.component.ngfactory';
import * as import84 from './dashboard/viewprofile/edit-profile/preview-image.component.ngfactory';
import * as import85 from './dashboard/viewprofile/edit-profile/twitter.component.ngfactory';
import * as import86 from './dashboard/viewprofile/edit-profile/facebook.component.ngfactory';
import * as import87 from './dashboard/viewprofile/edit-profile/linkedin.component.ngfactory';
import * as import88 from './learning/learnHome.ngfactory';
import * as import89 from './project/projectHome.ngfactory';
import * as import90 from './app.component.ngfactory';
import * as import91 from '@angular/core/src/application_tokens';
import * as import92 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import93 from '@angular/platform-browser/src/dom/events/key_events';
import * as import94 from '@angular/core/src/zone/ng_zone';
import * as import95 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import96 from 'ng2-toastr/src/toast-options';
import * as import97 from '@angular/common/src/location/platform_location';
import * as import98 from '@angular/common/src/location/location_strategy';
import * as import99 from './questions/question-home.component';
import * as import100 from './questions/question-body/question-body.component';
import * as import101 from './questions/all-user/all-user';
import * as import102 from './questions/question-details/question-details.component';
import * as import103 from './questions/question-fullscreen/question-fullscreen.component';
import * as import104 from './core/home.component';
import * as import105 from './core/tabs/tab-panel.component';
import * as import106 from './dashboard/dashboard.component';
import * as import107 from './dashboard/viewprofile/viewprofile.component';
import * as import108 from './dashboard/viewprofile/user-question/user-question.component';
import * as import109 from './dashboard/viewprofile/user-answer/user-answer.component';
import * as import110 from './dashboard/viewprofile/follower/follower.component';
import * as import111 from './dashboard/viewprofile/following/following.component';
import * as import112 from './dashboard/viewprofile/bookmark/bookmark.component';
import * as import113 from './dashboard/viewprofile/posted-question/posted-question.component';
import * as import114 from './dashboard/viewprofile/blog-create/blog-create.component';
import * as import115 from './dashboard/viewprofile/direct-question/direct-question.component';
import * as import116 from './dashboard/viewprofile/virtual-store/virtual-store.component';
import * as import117 from './dashboard/viewprofile/draft-answer/draft-answer.component';
import * as import118 from './dashboard/viewprofile/blog-post/blog-post.component';
import * as import119 from './services/resolve.services/auth.resolver';
import * as import120 from './learning/learnHome';
import * as import121 from './project/projectHome';
import * as import122 from '@angular/router/src/router';
import * as import123 from '@angular/core/src/console';
import * as import124 from '@angular/core/src/i18n/tokens';
import * as import125 from '@angular/core/src/error_handler';
import * as import126 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import127 from '@angular/platform-browser/src/dom/animation_driver';
import * as import128 from '@angular/core/src/render/api';
import * as import129 from '@angular/core/src/security';
import * as import130 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import131 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import132 from '@angular/http/src/interfaces';
import * as import133 from '@angular/http/src/http';
import * as import134 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import135 from '@angular/router/src/router_config_loader';
import * as import136 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import50.ToastContainerNgFactory,
            import51.PopoverContentNgFactory,
            import52.DialogComponentNgFactory,
            import53.AnswerDialogComponentNgFactory,
            import54.QuestionReportComponentNgFactory,
            import55.loginModalComponentNgFactory,
            import56.LikeComponentNgFactory,
            import57.QuestionHomeComponentNgFactory,
            import58.QuestionBodyComponentNgFactory,
            import59.AllUserComponentNgFactory,
            import60.QuestionDetailComponentNgFactory,
            import61.QuestionFullscreenComponentNgFactory,
            import62.HomeComponentNgFactory,
            import63.TabPanelComponentNgFactory,
            import64.DashBoardComponentNgFactory,
            import65.ViewProfileComponentNgFactory,
            import66.UserQuestionComponentNgFactory,
            import67.UserAnswerComponentNgFactory,
            import68.FollowerComponentNgFactory,
            import69.FollowingComponentNgFactory,
            import70.BookmarkComponentNgFactory,
            import71.PostedQuestionComponentNgFactory,
            import72.BlogCreateComponentNgFactory,
            import73.DirectQuestionComponentNgFactory,
            import74.VirtualStoreComponentNgFactory,
            import75.DraftAnswerComponentNgFactory,
            import76.BlogPostComponentNgFactory,
            import77.AddCredentialComponentNgFactory,
            import78.AddEmploymentComponentNgFactory,
            import79.AddEducationComponentNgFactory,
            import80.AddOtherExperienceComponentNgFactory,
            import81.AddPlaceComponentNgFactory,
            import82.BlogpostDetailComponentNgFactory,
            import83.ItemDialogComponentNgFactory,
            import84.PreviewImageComponentNgFactory,
            import85.TwitterComponentNgFactory,
            import86.FacebookComponentNgFactory,
            import87.LinkedinComponentNgFactory,
            import88.LearnHomeNgFactory,
            import89.ProjectHomeNgFactory,
            import90.AppComponentNgFactory
        ], [import90.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_19", {
        get: function () {
            if ((this.__LOCALE_ID_19 == null)) {
                (this.__LOCALE_ID_19 = 'en-US');
            }
            return this.__LOCALE_ID_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_20", {
        get: function () {
            if ((this.__NgLocalization_20 == null)) {
                (this.__NgLocalization_20 = new import19.NgLocaleLocalization(this._LOCALE_ID_19));
            }
            return this.__NgLocalization_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_25", {
        get: function () {
            if ((this.__ApplicationRef_25 == null)) {
                (this.__ApplicationRef_25 = this._ApplicationRef__24);
            }
            return this.__ApplicationRef_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_26", {
        get: function () {
            if ((this.__Compiler_26 == null)) {
                (this.__Compiler_26 = new import23.Compiler());
            }
            return this.__Compiler_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_27", {
        get: function () {
            if ((this.__APP_ID_27 == null)) {
                (this.__APP_ID_27 = import91._appIdRandomProviderFactory());
            }
            return this.__APP_ID_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_28", {
        get: function () {
            if ((this.__DOCUMENT_28 == null)) {
                (this.__DOCUMENT_28 = import4._document());
            }
            return this.__DOCUMENT_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_29", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_29 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_29 = new import24.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_30", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_30 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_30 = [
                    new import92.DomEventsPlugin(),
                    new import93.KeyEventsPlugin(),
                    new import24.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_29)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_31", {
        get: function () {
            if ((this.__EventManager_31 == null)) {
                (this.__EventManager_31 = new import25.EventManager(this._EVENT_MANAGER_PLUGINS_30, this.parent.get(import94.NgZone)));
            }
            return this.__EventManager_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_32", {
        get: function () {
            if ((this.__DomSharedStylesHost_32 == null)) {
                (this.__DomSharedStylesHost_32 = new import26.DomSharedStylesHost(this._DOCUMENT_28));
            }
            return this.__DomSharedStylesHost_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_33", {
        get: function () {
            if ((this.__AnimationDriver_33 == null)) {
                (this.__AnimationDriver_33 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_34", {
        get: function () {
            if ((this.__DomRootRenderer_34 == null)) {
                (this.__DomRootRenderer_34 = new import27.DomRootRenderer_(this._DOCUMENT_28, this._EventManager_31, this._DomSharedStylesHost_32, this._AnimationDriver_33, this._APP_ID_27));
            }
            return this.__DomRootRenderer_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_35", {
        get: function () {
            if ((this.__RootRenderer_35 == null)) {
                (this.__RootRenderer_35 = import95._createConditionalRootRenderer(this._DomRootRenderer_34, this.parent.get(import95.NgProbeToken, null), this.parent.get(import22.NgProbeToken, null)));
            }
            return this.__RootRenderer_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_36", {
        get: function () {
            if ((this.__DomSanitizer_36 == null)) {
                (this.__DomSanitizer_36 = new import28.DomSanitizerImpl());
            }
            return this.__DomSanitizer_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_37", {
        get: function () {
            if ((this.__Sanitizer_37 == null)) {
                (this.__Sanitizer_37 = this._DomSanitizer_36);
            }
            return this.__Sanitizer_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_38", {
        get: function () {
            if ((this.__AnimationQueue_38 == null)) {
                (this.__AnimationQueue_38 = new import29.AnimationQueue(this.parent.get(import94.NgZone)));
            }
            return this.__AnimationQueue_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_39", {
        get: function () {
            if ((this.__ViewUtils_39 == null)) {
                (this.__ViewUtils_39 = new import30.ViewUtils(this._RootRenderer_35, this._Sanitizer_37, this._AnimationQueue_38));
            }
            return this.__ViewUtils_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_40", {
        get: function () {
            if ((this.__IterableDiffers_40 == null)) {
                (this.__IterableDiffers_40 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_41", {
        get: function () {
            if ((this.__KeyValueDiffers_41 == null)) {
                (this.__KeyValueDiffers_41 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_42", {
        get: function () {
            if ((this.__SharedStylesHost_42 == null)) {
                (this.__SharedStylesHost_42 = this._DomSharedStylesHost_32);
            }
            return this.__SharedStylesHost_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_43", {
        get: function () {
            if ((this.__Title_43 == null)) {
                (this.__Title_43 = new import31.Title());
            }
            return this.__Title_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_44", {
        get: function () {
            if ((this.__BrowserXhr_44 == null)) {
                (this.__BrowserXhr_44 = new import32.BrowserXhr());
            }
            return this.__BrowserXhr_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_45", {
        get: function () {
            if ((this.__ResponseOptions_45 == null)) {
                (this.__ResponseOptions_45 = new import33.BaseResponseOptions());
            }
            return this.__ResponseOptions_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_46", {
        get: function () {
            if ((this.__XSRFStrategy_46 == null)) {
                (this.__XSRFStrategy_46 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_47", {
        get: function () {
            if ((this.__XHRBackend_47 == null)) {
                (this.__XHRBackend_47 = new import34.XHRBackend(this._BrowserXhr_44, this._ResponseOptions_45, this._XSRFStrategy_46));
            }
            return this.__XHRBackend_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_48", {
        get: function () {
            if ((this.__RequestOptions_48 == null)) {
                (this.__RequestOptions_48 = new import35.BaseRequestOptions());
            }
            return this.__RequestOptions_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_49", {
        get: function () {
            if ((this.__Http_49 == null)) {
                (this.__Http_49 = import5.httpFactory(this._XHRBackend_47, this._RequestOptions_48));
            }
            return this.__Http_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ToastsManager_50", {
        get: function () {
            if ((this.__ToastsManager_50 == null)) {
                (this.__ToastsManager_50 = new import36.ToastsManager(this, this._ApplicationRef_25, this.parent.get(import96.ToastOptions, null)));
            }
            return this.__ToastsManager_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_51", {
        get: function () {
            if ((this.__RadioControlRegistry_51 == null)) {
                (this.__RadioControlRegistry_51 = new import37.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_WindowRefService_52", {
        get: function () {
            if ((this.__WindowRefService_52 == null)) {
                (this.__WindowRefService_52 = new import38.WindowRefService());
            }
            return this.__WindowRefService_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_CommunicationService_53", {
        get: function () {
            if ((this.__CommunicationService_53 == null)) {
                (this.__CommunicationService_53 = new import39.CommunicationService());
            }
            return this.__CommunicationService_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AxisResolverFactory_54", {
        get: function () {
            if ((this.__AxisResolverFactory_54 == null)) {
                (this.__AxisResolverFactory_54 = new import40.AxisResolverFactory());
            }
            return this.__AxisResolverFactory_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PositionResolverFactory_55", {
        get: function () {
            if ((this.__PositionResolverFactory_55 == null)) {
                (this.__PositionResolverFactory_55 = new import41.PositionResolverFactory(this._AxisResolverFactory_54));
            }
            return this.__PositionResolverFactory_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_56", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_56 == null)) {
                (this.__ROUTER_CONFIGURATION_56 = {});
            }
            return this.__ROUTER_CONFIGURATION_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_57", {
        get: function () {
            if ((this.__LocationStrategy_57 == null)) {
                (this.__LocationStrategy_57 = import9.provideLocationStrategy(this.parent.get(import97.PlatformLocation), this.parent.get(import98.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_56));
            }
            return this.__LocationStrategy_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_58", {
        get: function () {
            if ((this.__Location_58 == null)) {
                (this.__Location_58 = new import42.Location(this._LocationStrategy_57));
            }
            return this.__Location_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_59", {
        get: function () {
            if ((this.__UrlSerializer_59 == null)) {
                (this.__UrlSerializer_59 = new import43.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_60", {
        get: function () {
            if ((this.__RouterOutletMap_60 == null)) {
                (this.__RouterOutletMap_60 = new import44.RouterOutletMap());
            }
            return this.__RouterOutletMap_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_61", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_61 == null)) {
                (this.__NgModuleFactoryLoader_61 = new import45.SystemJsNgModuleLoader(this._Compiler_26, this.parent.get(import45.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_62", {
        get: function () {
            if ((this.__ROUTES_62 == null)) {
                (this.__ROUTES_62 = [
                    [{
                            path: 'question',
                            component: import99.QuestionHomeComponent,
                            children: [
                                {
                                    path: 'home/:categoryId',
                                    component: import100.QuestionBodyComponent
                                },
                                {
                                    path: 'all-user',
                                    component: import101.AllUserComponent
                                },
                                {
                                    path: 'home/:categoryId/:topicId/:levelId',
                                    component: import100.QuestionBodyComponent
                                },
                                {
                                    path: 'detail/:id',
                                    component: import102.QuestionDetailComponent,
                                    resolve: { question: import47.QuestionResolver }
                                },
                                {
                                    path: 'questionfullscreen/:id',
                                    component: import103.QuestionFullscreenComponent,
                                    resolve: { question: import47.QuestionResolver }
                                }
                            ]
                        }
                    ],
                    [{
                            path: 'home',
                            component: import104.HomeComponent,
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'tab/1'
                                },
                                {
                                    path: 'tab/:id',
                                    component: import105.TabPanelComponent
                                }
                            ]
                        }
                    ],
                    [{
                            path: 'dashboard',
                            component: import106.DashBoardComponent,
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'viewprofile/-1'
                                },
                                {
                                    path: 'viewprofile/:userId',
                                    component: import107.ViewProfileComponent,
                                    children: [
                                        {
                                            path: '',
                                            redirectTo: 'user-question'
                                        },
                                        {
                                            path: 'user-question',
                                            component: import108.UserQuestionComponent
                                        },
                                        {
                                            path: 'user-answer',
                                            component: import109.UserAnswerComponent
                                        },
                                        {
                                            path: 'follower',
                                            component: import110.FollowerComponent
                                        },
                                        {
                                            path: 'following',
                                            component: import111.FollowingComponent
                                        },
                                        {
                                            path: 'bookmark',
                                            component: import112.BookmarkComponent
                                        },
                                        {
                                            path: 'posted-question',
                                            component: import113.PostedQuestionComponent
                                        },
                                        {
                                            path: 'blog-create',
                                            component: import114.BlogCreateComponent
                                        },
                                        {
                                            path: 'direct-question',
                                            component: import115.DirectQuestionComponent
                                        },
                                        {
                                            path: 'virtual-store',
                                            component: import116.VirtualStoreComponent
                                        },
                                        {
                                            path: 'draft-answer',
                                            component: import117.DraftAnswerComponent
                                        }
                                    ]
                                },
                                {
                                    path: 'blog-post/:blogId',
                                    component: import118.BlogPostComponent
                                }
                            ]
                        }
                    ],
                    [
                        {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            loadChildren: './core/core.module#CoreModule',
                            resolve: { question: import119.AuthResolver }
                        },
                        {
                            path: 'question',
                            loadChildren: './questions/question.module#QuestionModule'
                        },
                        {
                            path: 'questionDetails',
                            loadChildren: './questions/question.module#QuestionModule'
                        },
                        {
                            path: 'dashboard',
                            loadChildren: './dashboard/dashboard.module#DashBoardModule'
                        },
                        {
                            path: 'learn',
                            component: import120.LearnHome
                        },
                        {
                            path: 'project',
                            component: import121.ProjectHome
                        }
                    ]
                ]);
            }
            return this.__ROUTES_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_63", {
        get: function () {
            if ((this.__Router_63 == null)) {
                (this.__Router_63 = import9.setupRouter(this._ApplicationRef_25, this._UrlSerializer_59, this._RouterOutletMap_60, this._Location_58, this, this._NgModuleFactoryLoader_61, this._Compiler_26, this._ROUTES_62, this._ROUTER_CONFIGURATION_56));
            }
            return this.__Router_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_64", {
        get: function () {
            if ((this.__ActivatedRoute_64 == null)) {
                (this.__ActivatedRoute_64 = import9.rootRoute(this._Router_63));
            }
            return this.__ActivatedRoute_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_65", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_65 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_65 = [
                    import9.initialRouterNavigation(this._Router_63, this._ROUTER_CONFIGURATION_56),
                    import9.initialRouterNavigation(this._Router_63, this._ROUTER_CONFIGURATION_56),
                    import9.initialRouterNavigation(this._Router_63, this._ROUTER_CONFIGURATION_56),
                    import9.initialRouterNavigation(this._Router_63, this._ROUTER_CONFIGURATION_56)
                ]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_QuestionAnswerService_66", {
        get: function () {
            if ((this.__QuestionAnswerService_66 == null)) {
                (this.__QuestionAnswerService_66 = new import46.QuestionAnswerService(this._Http_49));
            }
            return this.__QuestionAnswerService_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_QuestionResolver_67", {
        get: function () {
            if ((this.__QuestionResolver_67 == null)) {
                (this.__QuestionResolver_67 = new import47.QuestionResolver(this._Http_49));
            }
            return this.__QuestionResolver_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ProfileResolver_68", {
        get: function () {
            if ((this.__ProfileResolver_68 == null)) {
                (this.__ProfileResolver_68 = new import48.ProfileResolver(this._Http_49));
            }
            return this.__ProfileResolver_68;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ToastModule_4 = new import6.ToastModule();
        this._InternalFormsSharedModule_5 = new import7.InternalFormsSharedModule();
        this._FormsModule_6 = new import8.FormsModule();
        this._ROUTER_FORROOT_GUARD_7 = import9.provideForRootGuard(this.parent.get(import122.Router, null));
        this._RouterModule_8 = new import9.RouterModule(this._ROUTER_FORROOT_GUARD_7);
        this._PopoverModule_9 = new import10.PopoverModule();
        this._QuillModule_10 = new import11.QuillModule();
        this._CKEditorModule_11 = new import12.CKEditorModule();
        this._SharedModule_12 = new import13.SharedModule();
        this._InfiniteScrollModule_13 = new import14.InfiniteScrollModule();
        this._QuestionModule_14 = new import15.QuestionModule();
        this._CoreModule_15 = new import16.CoreModule();
        this._ImageCropperModule_16 = new import17.ImageCropperModule();
        this._DashBoardModule_17 = new import18.DashBoardModule();
        this._AppModule_18 = new import1.AppModule();
        this._ErrorHandler_21 = import4.errorHandler();
        this._ApplicationInitStatus_22 = new import20.ApplicationInitStatus(this.parent.get(import20.APP_INITIALIZER, null));
        this._Testability_23 = new import21.Testability(this.parent.get(import94.NgZone));
        this._ApplicationRef__24 = new import22.ApplicationRef_(this.parent.get(import94.NgZone), this.parent.get(import123.Console), this, this._ErrorHandler_21, this, this._ApplicationInitStatus_22, this.parent.get(import21.TestabilityRegistry, null), this._Testability_23);
        return this._AppModule_18;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ToastModule)) {
            return this._ToastModule_4;
        }
        if ((token === import7.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_5;
        }
        if ((token === import8.FormsModule)) {
            return this._FormsModule_6;
        }
        if ((token === import9.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_7;
        }
        if ((token === import9.RouterModule)) {
            return this._RouterModule_8;
        }
        if ((token === import10.PopoverModule)) {
            return this._PopoverModule_9;
        }
        if ((token === import11.QuillModule)) {
            return this._QuillModule_10;
        }
        if ((token === import12.CKEditorModule)) {
            return this._CKEditorModule_11;
        }
        if ((token === import13.SharedModule)) {
            return this._SharedModule_12;
        }
        if ((token === import14.InfiniteScrollModule)) {
            return this._InfiniteScrollModule_13;
        }
        if ((token === import15.QuestionModule)) {
            return this._QuestionModule_14;
        }
        if ((token === import16.CoreModule)) {
            return this._CoreModule_15;
        }
        if ((token === import17.ImageCropperModule)) {
            return this._ImageCropperModule_16;
        }
        if ((token === import18.DashBoardModule)) {
            return this._DashBoardModule_17;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_18;
        }
        if ((token === import124.LOCALE_ID)) {
            return this._LOCALE_ID_19;
        }
        if ((token === import19.NgLocalization)) {
            return this._NgLocalization_20;
        }
        if ((token === import125.ErrorHandler)) {
            return this._ErrorHandler_21;
        }
        if ((token === import20.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_22;
        }
        if ((token === import21.Testability)) {
            return this._Testability_23;
        }
        if ((token === import22.ApplicationRef_)) {
            return this._ApplicationRef__24;
        }
        if ((token === import22.ApplicationRef)) {
            return this._ApplicationRef_25;
        }
        if ((token === import23.Compiler)) {
            return this._Compiler_26;
        }
        if ((token === import91.APP_ID)) {
            return this._APP_ID_27;
        }
        if ((token === import126.DOCUMENT)) {
            return this._DOCUMENT_28;
        }
        if ((token === import24.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_29;
        }
        if ((token === import25.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_30;
        }
        if ((token === import25.EventManager)) {
            return this._EventManager_31;
        }
        if ((token === import26.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_32;
        }
        if ((token === import127.AnimationDriver)) {
            return this._AnimationDriver_33;
        }
        if ((token === import27.DomRootRenderer)) {
            return this._DomRootRenderer_34;
        }
        if ((token === import128.RootRenderer)) {
            return this._RootRenderer_35;
        }
        if ((token === import28.DomSanitizer)) {
            return this._DomSanitizer_36;
        }
        if ((token === import129.Sanitizer)) {
            return this._Sanitizer_37;
        }
        if ((token === import29.AnimationQueue)) {
            return this._AnimationQueue_38;
        }
        if ((token === import30.ViewUtils)) {
            return this._ViewUtils_39;
        }
        if ((token === import130.IterableDiffers)) {
            return this._IterableDiffers_40;
        }
        if ((token === import131.KeyValueDiffers)) {
            return this._KeyValueDiffers_41;
        }
        if ((token === import26.SharedStylesHost)) {
            return this._SharedStylesHost_42;
        }
        if ((token === import31.Title)) {
            return this._Title_43;
        }
        if ((token === import32.BrowserXhr)) {
            return this._BrowserXhr_44;
        }
        if ((token === import33.ResponseOptions)) {
            return this._ResponseOptions_45;
        }
        if ((token === import132.XSRFStrategy)) {
            return this._XSRFStrategy_46;
        }
        if ((token === import34.XHRBackend)) {
            return this._XHRBackend_47;
        }
        if ((token === import35.RequestOptions)) {
            return this._RequestOptions_48;
        }
        if ((token === import133.Http)) {
            return this._Http_49;
        }
        if ((token === import36.ToastsManager)) {
            return this._ToastsManager_50;
        }
        if ((token === import37.RadioControlRegistry)) {
            return this._RadioControlRegistry_51;
        }
        if ((token === import38.WindowRefService)) {
            return this._WindowRefService_52;
        }
        if ((token === import39.CommunicationService)) {
            return this._CommunicationService_53;
        }
        if ((token === import40.AxisResolverFactory)) {
            return this._AxisResolverFactory_54;
        }
        if ((token === import41.PositionResolverFactory)) {
            return this._PositionResolverFactory_55;
        }
        if ((token === import9.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_56;
        }
        if ((token === import98.LocationStrategy)) {
            return this._LocationStrategy_57;
        }
        if ((token === import42.Location)) {
            return this._Location_58;
        }
        if ((token === import43.UrlSerializer)) {
            return this._UrlSerializer_59;
        }
        if ((token === import44.RouterOutletMap)) {
            return this._RouterOutletMap_60;
        }
        if ((token === import134.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_61;
        }
        if ((token === import135.ROUTES)) {
            return this._ROUTES_62;
        }
        if ((token === import122.Router)) {
            return this._Router_63;
        }
        if ((token === import136.ActivatedRoute)) {
            return this._ActivatedRoute_64;
        }
        if ((token === import91.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_65;
        }
        if ((token === import46.QuestionAnswerService)) {
            return this._QuestionAnswerService_66;
        }
        if ((token === import47.QuestionResolver)) {
            return this._QuestionResolver_67;
        }
        if ((token === import48.ProfileResolver)) {
            return this._ProfileResolver_68;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__24.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
