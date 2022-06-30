import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { LeafletMapProps } from "./web/src/ExpoLeaflet.types";
import { LeafletWebViewEvent } from "./web/src/model";
export declare type ExpoLeafletProps = LeafletMapProps & {
    wrapperStyle?: StyleProp<ViewStyle>;
    webviewContainerStyle?: StyleProp<ViewStyle>;
    loadingIndicator?: () => ReactElement;
    onMapLoad?: () => void;
    onMessage: (message: LeafletWebViewEvent) => void;
};
