import {
    createRenderer,
    RootRenderFunction,
    CreateAppFunction
} from '@vue/runtime-core'
import { nodeOps, FmpElement } from './nodeOps'
import { extend } from '@vue/shared'

const { render: baseRender, createApp: baseCreateApp } = createRenderer(extend(nodeOps))

export const render = baseRender as RootRenderFunction<FmpElement>
export const createApp = baseCreateApp as CreateAppFunction<FmpElement>


export * from './nodeOps'
export * from '@vue/runtime-core'