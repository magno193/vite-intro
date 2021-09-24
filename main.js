import { createApp } from 'vue';
import App from './App.vue';

import('./async.js').then(chunk => {
  console.log(chunk);
})

createApp(App).mount('#app');