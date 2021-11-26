import {
    createRenderer,
    RootRenderFunction,
    CreateAppFunction,
} from '@vue/runtime-core'
import { nodeOps, FmpElement } from './nodeOps'
import { extend } from '@vue/shared'
import { patchProp } from './patchProp'

const { render: baseRender, createApp: baseCreateApp } = createRenderer(extend({ patchProp }, nodeOps))

export const render = baseRender as RootRenderFunction<FmpElement>

export const createApp = ((...args) => {
  const app = baseCreateApp(...args)

  const { mount } = app
  app.mount = (containerOrSelector: string): any => {
    const container = nodeOps.createElement(containerOrSelector);
    return mount(container)
  }

  return app
}) as CreateAppFunction<Element>

export * from './nodeOps'
export * from '@vue/runtime-core'