import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'hello': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'hello': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'hello': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}