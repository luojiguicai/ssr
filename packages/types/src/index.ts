import { FaaSContext } from '@midwayjs/faas'

export * from './yml'

export type Mode = 'development' | 'production'

export interface IWindow extends Window {
  __USE_SSR__?: string
}

export interface INodeModule extends NodeModule {
  hot?: Hot
}
export interface Hot {
  accept (path?: string): void
}

export interface IFaaSContext extends FaaSContext {
  serverData?: any
}
export interface Global extends NodeJS.Global {
  renderToNodeStream: (element: React.ReactElement) => NodeJS.ReadableStream
  serverStream: (ctx: IFaaSContext) => Promise<React.ReactElement>
  isLocal: boolean
}

export interface Global extends NodeJS.Global {
  renderToNodeStream: (element: React.ReactElement) => NodeJS.ReadableStream
  serverStream: (ctx: IFaaSContext) => Promise<React.ReactElement>
  isLocal: boolean
}
export interface FC extends React.FC {
  getInitialProps?: (params: any) => Promise<any>
  Layout?: React.FC
  preload?: () => Promise<Preload>
}

interface Preload {
  default: React.FC
}

export interface Config {
  baseDir?: string
  type?: string
  serverJs: ServerJs | string
  env?: string
  useCDN?: string
  routes: RouteItem[]
  injectScript: string[]
  injectCss: string[]
}

export interface ServerJs {
  (ctx: FaaSContext): React.ReactElement
}

export interface RouteItem {
  path: string
  exact?: boolean
  component: FC
}
