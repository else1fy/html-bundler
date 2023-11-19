import { createApp, ref } from 'vue'
import MyButton from './MyButton.vue'

createApp({
    setup() {
        return {
            title: ref('Hello world!')
        }
    }
}).component('my-button', MyButton).mount('#app')