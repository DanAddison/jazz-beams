import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'

import {
  faCheck,
  faTimes,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faHtml5,
  faJs,
  faCss3Alt,
  faVuejs,
  faSass,
  faWordpress,
  faGulp,
  faNpm,
  faGit  
} from '@fortawesome/free-brands-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faHtml5,
  faJs,
  faCss3Alt,
  faVuejs,
  faSass,
  faWordpress,
  faGulp,
  faNpm,
  faGit,
  faCheck,
  faTimes,
  faExternalLinkAlt
)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}