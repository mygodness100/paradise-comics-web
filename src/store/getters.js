/* jshint esversion:6 */
import cookie from "../utils/cookie";

export default {
  user: state => state.user && Object.keys(state.user).length > 0 ? state.user : cookie.getUser(),
  token: state => state.token ? state.token : cookie.getToken(),
  avatar: state => state.avatar,
  roles: state => state.user && Object.keys(state.user).length > 0 ? state.user.roles
      : cookie.getUser().roles,
  routes: state => state.routes,
  buttons: state => state.buttons,
  config: state => state.config,
  fresh: state => state.fresh,
  freshTree: state => state.freshTree,
  searchKey: state => state.searchKey,
  searchState: state => state.searchState,
  language: state => state.language,
  pageIndex: state => state.pageIndex,
  pageSize: state => state.pageSize,
  total: state => state.total,
  expandKey: state => state.expandKey,
  sidebar: state => state.sidebar,
  device: state => state.device,
  size: state => state.size,
  showSettings: state => state.showSettings,
  needTagsView: state => state.tagsView,
  fixedHeader: state => state.fixedHeader,
  sidebarLogo: state => state.sidebarLogo,
  errorLogs: state => state.errorLogs,
  visitedViews: state => state.visitedViews,
  cachedViews: state => state.cachedViews
}
