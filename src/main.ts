import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { configureMovieService } from './modules/useMovieService';

const app = createApp(App);

// configure MovieApi
configureMovieService(app);

app.use(router);
app.mount('#app');
