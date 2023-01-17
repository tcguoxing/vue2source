/* @flow */

export * from 'shared/util' // 这里应该是一个大对象的集合，其他都可以从此处引用属性。
export * from './lang'
export * from './env'
export * from './options'
export * from './debug'
export * from './props'
export * from './error'
export * from './next-tick'
export { defineReactive } from '../observer/index'
