import { createApp, ref } from 'vue'
import MyButton from './MyButton.vue'
import './MyButton.scss'

createApp({
    setup() {
        return {
            title: ref('Hello world!')
        }
    }
}).component('my-button', MyButton).mount('#app')