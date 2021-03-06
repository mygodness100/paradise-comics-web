import cookie from '../utils/cookie'

export default {
  user: {},
  token: null,
  avatar: null,
  roles: [],
  routes: [],
  buttons: [],
  // 前端配置文件
  config: {},
  // 是否刷新当前页面
  fresh: false,
  // 若当前页面中有树形结构,是否刷新
  freshTree: false,
  // 全局搜索key
  searchKey: null,
  // 全局搜索状态改变
  searchState: false,
  pageIndex: 1,
  pageSize: 10,
  total: 0,
  // 若是页面中树形结构数据,且需要默认展开树时的节点key
  expandKey: null,
  sidebar: {
    opened: cookie.get('sidebarStatus') ? !!+cookie.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  sidebarLogo: false,
  device: "desktop",
  size: cookie.get('size') || 'medium',
  showSettings: true,
  needTagsView: true,
  fixedHeader: false,
  errorLogs: [],
  visitedViews: [],
  cachedViews: []
}
