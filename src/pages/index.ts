import { createApp, ref } from 'vue'
import VInput from './VInput/VInput.vue'
import MyButton from './MyButton.vue'
import './index.scss'

createApp({
    setup() {
        return {
            title: ref('Hello world!')
        }
    }
})
    .component('v-input', VInput)
    .component('my-button', MyButton)
    .mount('#app')
