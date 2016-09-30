//通过即时（ JiT ）编译器动态引导
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);


//使用预编译器（ AoT - Ahead-Of-Time ）进行静态引导
// The browser platform without a compiler
//import { platformBrowser } from '@angular/platform-browser';

// The app module factory produced by the static offline compiler
//import { AppModuleNgFactory } from './app.module.ngfactory';

// Launch with the app module factory.
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
