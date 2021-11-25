import { markRaw } from '@vue/reactivity'

export const enum NodeTypes {
  TEXT = 'text',
  ELEMENT = 'element',
  COMMENT = 'comment'
}

export const enum NodeOpTypes {
  CREATE = 'create',
  INSERT = 'insert',
  REMOVE = 'remove',
  SET_TEXT = 'setText',
  SET_ELEMENT_TEXT = 'setElementText',
  PATCH = 'patch'
}

export interface FmpElement {
  id: number
  type: NodeTypes.ELEMENT
  parentNode: FmpElement | null
  tag: string
  children: FmpNode[]
  props: Record<string, any>
  eventListeners: Record<string, Function | Function[]> | null
}

export interface FmpText {
  id: number
  type: NodeTypes.TEXT
  parentNode: FmpElement | null
  text: string
}

export interface FmpComment {
  id: number
  type: NodeTypes.COMMENT
  parentNode: FmpElement | null
  text: string
}

export type FmpNode = FmpElement | FmpText | FmpComment

export interface NodeOp {
  type: NodeOpTypes
  nodeType?: NodeTypes
  tag?: string
  text?: string
  targetNode?: FmpNode
  parentNode?: FmpElement
  refNode?: FmpNode | null
  propKey?: string
  propPrevValue?: any
  propNextValue?: any
}

let nodeId: number = 0;

function createElement(tag: string): FmpElement {
  const node: FmpElement = {
    id: nodeId++,
    type: NodeTypes.ELEMENT,
    tag,
    children: [],
    props: {},
    parentNode: null,
    eventListeners: null
  }
  // avoid test nodes from being observed
  markRaw(node)
  return node
}

function createText(text: string): FmpText {
  const node: FmpText = {
    id: nodeId++,
    type: NodeTypes.TEXT,
    text,
    parentNode: null
  }
  // avoid test nodes from being observed
  markRaw(node)
  return node
}

function createComment(text: string): FmpComment {
  const node: FmpComment = {
    id: nodeId++,
    type: NodeTypes.COMMENT,
    text,
    parentNode: null
  }
  // avoid test nodes from being observed
  markRaw(node)
  return node
}

function setText(node: FmpText, text: string) {
  node.text = text
}

function insert(child: FmpNode, parent: FmpElement, ref?: FmpNode | null) {
  let refIndex
  if (ref) {
    refIndex = parent.children.indexOf(ref)
    if (refIndex === -1) {
      console.error('ref: ', ref)
      console.error('parent: ', parent)
      throw new Error('ref is not a child of parent')
    }
  }
  // remove the node first, but don't log it as a REMOVE op
  remove(child, false)
  // re-calculate the ref index because the child's removal may have affected it
  refIndex = ref ? parent.children.indexOf(ref) : -1
  if (refIndex === -1) {
    parent.children.push(child)
    child.parentNode = parent
  } else {
    parent.children.splice(refIndex, 0, child)
    child.parentNode = parent
  }
}

function remove(child: FmpNode, logOp = true) {
  const parent = child.parentNode
  if (parent) {
    const i = parent.children.indexOf(child)
    if (i > -1) {
      parent.children.splice(i, 1)
    } else {
      console.error('target: ', child)
      console.error('parent: ', parent)
      throw Error('target is not a childNode of parent')
    }
    child.parentNode = null
  }
}

function setElementText(el: FmpElement, text: string) {
  el.children.forEach(c => {
    c.parentNode = null
  })
  if (!text) {
    el.children = []
  } else {
    el.children = [
      {
        id: nodeId++,
        type: NodeTypes.TEXT,
        text,
        parentNode: el
      }
    ]
  }
}

function parentNode(node: FmpNode): FmpElement | null {
  return node.parentNode
}

function nextSibling(node: FmpNode): FmpNode | null {
  const parent = node.parentNode
  if (!parent) {
    return null
  }
  const i = parent.children.indexOf(node)
  return parent.children[i + 1] || null
}

function querySelector(): any {
  // throw new Error('querySelector not supported in test renderer.')
}

function setScopeId(el: FmpElement, id: string) {
  el.props[id] = ''
}

export const nodeOps = {
  insert,
  remove,
  createElement,
  createText,
  createComment,
  setText,
  setElementText,
  parentNode,
  nextSibling,
  querySelector,
  setScopeId
}
