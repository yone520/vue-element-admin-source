import locale   from 'element-ui/lib/locale'
import Vue      from 'vue'
import VueI18n  from 'vue-i18n'
import messages from './langs'
import store from '@/store'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: store.state.lang,
  messages
})

window.appLanguage = i18n

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
