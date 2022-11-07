import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AxiosAdapter from './infra/AxiosAdapter';
import TodoHttpGateway from './gateways/TodoHttpGateway';

const app = createApp(App);
const httpClient = new AxiosAdapter();
const todoGateway = new TodoHttpGateway(httpClient, "http://localhost:3000");
app.provide("todoGateway", todoGateway);
app.mount('#app');
