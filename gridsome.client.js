import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheck,
  faTimes,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
  faInstagram,
  faFacebook,
  faYoutube,
  faCheck,
  faTimes,
  faExternalLinkAlt
);

export default function(Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
}
