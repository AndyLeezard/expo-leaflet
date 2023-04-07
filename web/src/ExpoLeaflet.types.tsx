import type {
  ImageOverlayOptions,
  LatLngBoundsExpression,
  LatLngBoundsLiteral,
  LatLngLiteral,
  MapOptions,
} from "leaflet"
import { ReactElement } from "react"
import { LeafletWebViewEvent, MapLayer, MapMarker, MapShape } from "./model"

export type LeafletMapProps = {
  mapOptions?: MapOptions
  mapLayers: MapLayer[]
  mapMarkers?: MapMarker[]
  mapShapes?: MapShape[]
  mapCenterPosition: LatLngLiteral
  zoom?: number
  maxZoom?: number

  // updated
  flyTrigger?: number
  // imageOverlays
  imageOverlays?: Array<{
    imageUrl: string
    bounds: LatLngBoundsExpression
    options?: ImageOverlayOptions | undefined
  }>
  // bounds
  mapBounds?: LatLngBoundsLiteral
}

export type ExpoLeafletProps = LeafletMapProps & {
  backgroundColor?: string
  loadingIndicator?: () => ReactElement
  onMapLoad?: () => void
  onMessage: (message: LeafletWebViewEvent) => void
}
