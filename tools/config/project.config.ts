import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true }, // inject into css section
      { src: 'bootstrap/dist/css/bootstrap-theme.min.css', inject: true }, // inject into css section
      { src: 'bootstrap/dist/css/bootstrap-theme.min.css.map', inject: true }, // inject into css section
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      // required for dev build
      {
        name: 'ng2-bootstrap',
        path: 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js'
      },

      // required for prod build
      {
        name: 'ng2-bootstrap/*',
        path: 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js'
      },

      // mandatory dependency for ng2-bootstrap datepicker
      {
        name: 'moment',
        path: 'node_modules/moment',
        packageMeta: {
          main: 'moment.js',
          defaultExtension: 'js'
        }
      },
      {
        name: '@ngrx/core',
        path: 'node_modules/@ngrx/core/bundles',
        packageMeta: {
          main: 'core.umd.js',
          defaultExtension: 'js',
        }
      },
      {
        name: '@ngrx/store',
        path: 'node_modules/@ngrx/store/bundles',
        packageMeta: {
          main: 'store.umd.js',
          defaultExtension: 'js',
        }
      },
      {
        name: '@ngrx/store-devtools',
        path: 'node_modules/@ngrx/store-devtools/bundles',
        packageMeta: {
          main: 'store-devtools.umd.js',
          defaultExtension: 'js',
        }
      },
      {
        name: '@ngrx/store-log-monitor',
        path: 'node_modules/@ngrx/store-log-monitor/bundles',
        packageMeta: {
          main: 'store-log-monitor.umd.js',
          defaultExtension: 'js',
        }
      }
    ];
    this.addPackagesBundles(additionalPackages);
    //https://github.com/mgechev/angular-seed/issues/1475
    // delete this.SYSTEM_BUILDER_CONFIG['packageConfigPaths'];

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')({ ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
