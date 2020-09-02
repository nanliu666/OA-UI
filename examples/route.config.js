import navConfig from './nav.config'

const load = name => {
  return r => require.ensure([], () => r(require(`./pages/${name}.vue`)))
}

const loadDocs = name => {
  return r => require.ensure([], () => r(require(`./docs${name}.md`)))
}

const registerRoute = navConfig => {
  let route = []
  route.push({
    path: '/component',
    redirect: '/component/table',
    component: load('component'),
    children: []
  })

  navConfig.forEach(nav => {
    if (nav.href) return
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })
  function addRoute(page) {
    const component = loadDocs(page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    }

    route[0].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

// route.push({
//   path: "/play",
//   name: "play",
//   component: require("./play/index.vue")
// })
let defaultPath = '/component'
route = route.concat([
  { path: '/', redirect: defaultPath },
  {
    path: '*',
    redirect: defaultPath
  }
])

export default route
