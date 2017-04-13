/// <reference path="app/app.module.ngfactory.ts" />

//// Entry point for AoT compilation.

//declare var System: any;

//import {platformBrowser} from '@angular/platform-browser';
//import { enableProdMode } from '@angular/core';
//import {MyAppModuleNgFactory } from './app.ngfactory'; // generated code


//enableProdMode();

//platformBrowser().bootstrapModuleFactory(MyAppModuleNgFactory);


import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from './app/app.module.ngfactory';
//import { AboutModuleNgFactory } from "./platformapp/about/about.module.ngfactory";
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
