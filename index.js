import Vue from 'vue'
import HaiButton from './src/button'
import HaiButtonGroup from './src/button-group'
import HaiIcon from './src/icon'
import HaiInput from './src/input'
import HaiCol from './src/col'
import HaiRow from './src/row'
import HaiContainer from './src/container'
import HaiHeader from './src/header'
import HaiContent from './src/content'
import HaiSider from './src/sider'
import HaiFooter from './src/footer'
import HaiPlugin from "./src/plugin"
import HaiTabs from './src/tabs'
import HaiTabsHead from './src/tabs-head'
import HaiTabsBody from './src/tabs-body'
import HaiTabsItem from './src/tabs-item'
import HaiTabsPane from './src/tabs-pane'
import HaiPopover from './src/popover'
import HaiCollapse from './src/collapse'
import HaiCollapseItem from './src/collapse-item'

const components = {
  HaiButton,
  HaiButtonGroup,
  HaiIcon,
  HaiInput,
  HaiCol,
  HaiRow,
  HaiContainer,
  HaiHeader,
  HaiContent,
  HaiSider,
  HaiFooter,
  HaiTabs,
  HaiTabsHead,
  HaiTabsBody,
  HaiTabsItem,
  HaiTabsPane,
  HaiPopover,
  HaiCollapse,
  HaiCollapseItem
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.use(HaiPlugin)
}

export default install
