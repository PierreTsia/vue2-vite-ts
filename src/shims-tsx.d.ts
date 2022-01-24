/* eslint-disable no-unused-vars */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    /* eslint-disable */
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare global {
  interface Window {
    Protocol: any
  }
  interface ImportMeta {
    env: Record<string, unknown>
    globEager<T = unknown>(globPath: string): Record<string, T>
  }
}
