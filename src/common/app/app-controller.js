import { createReactiveElement, isBrowser } from '@baseloop/core'
import AppView from './app-view'
import { Router } from '@baseloop/router'

export default function AppController ({initialUrl}) {
  const router = Router([
    {path: '/', name: 'home'},
  ], {initialUrl})

  router.url.subscribe(() => {
    if (isBrowser && window.ga != null) {
      window.ga('send', 'pageview', window.location.pathname)
    }
  })

  return createReactiveElement(AppView, {
    router: router.view
  })
}
