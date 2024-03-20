import { App, Plugin } from 'vue';

import { default as page } from './lib-components/LktSelectPage.vue';
import "../lkt-select-page.css";


const LktSelectPage: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-select-page') === undefined) app.component('lkt-select-page', page);
  },
};

export default LktSelectPage;
