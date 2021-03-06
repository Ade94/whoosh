import Whoosh from "./Whoosh/Whoosh.vue";
import { events } from "./Whoosh/events";
import { isCustomStatusesDefined } from "./Whoosh/Util";
import { CardContent, WhooshOptions } from "./types/index";
import Vue from 'vue';
const WhooshOn = {
  install(Vue: any, options: WhooshOptions = {}) {

    Vue.component("Whoosh", Whoosh);

    Vue.prototype.$whoosh = (params: CardContent = {}) => {
      isCustomStatusesDefined(options.statuses)
        ? (params.statuses = options.statuses)
        : null;
      events.$emit("startWhoosh", params);
    };

  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(WhooshOn);
}

export default WhooshOn;
export { Whoosh };
