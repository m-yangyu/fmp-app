import { FmpElement, NodeOpTypes } from './nodeOps'
import { isOn } from '@vue/shared'

export function patchProp(
  el: FmpElement,
  key: string,
  prevValue: any,
  nextValue: any
) {
  el.props[key] = nextValue
  if (isOn(key)) {
    const event = key.slice(2).toLowerCase()
    ;(el.eventListeners || (el.eventListeners = {}))[event] = nextValue
  }
}
