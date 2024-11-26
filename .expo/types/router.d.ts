/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/DestinationCreateScreen` | `/DestinationCreateScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/auxiliar-classes/BackendCaller`; params?: Router.UnknownInputParams; } | { pathname: `/components/DestinationListComponents/DestinationListContainer`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/DropDownSelector`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/EditableForm`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/ReloadFlagContext`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/ScreenSizeWrap`; params?: Router.UnknownInputParams; } | { pathname: `/constants/BACKEND_URI`; params?: Router.UnknownInputParams; } | { pathname: `/constants/interfaces`; params?: Router.UnknownInputParams; } | { pathname: `/constants/routes`; params?: Router.UnknownInputParams; } | { pathname: `/DestinationDetailsScreen/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/DestinationCreateScreen` | `/DestinationCreateScreen`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/auxiliar-classes/BackendCaller`; params?: Router.UnknownOutputParams; } | { pathname: `/components/DestinationListComponents/DestinationListContainer`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Global/DropDownSelector`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Global/EditableForm`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Global/ReloadFlagContext`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Global/ScreenSizeWrap`; params?: Router.UnknownOutputParams; } | { pathname: `/constants/BACKEND_URI`; params?: Router.UnknownOutputParams; } | { pathname: `/constants/interfaces`; params?: Router.UnknownOutputParams; } | { pathname: `/constants/routes`; params?: Router.UnknownOutputParams; } | { pathname: `/DestinationDetailsScreen/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/DestinationCreateScreen${`?${string}` | `#${string}` | ''}` | `/DestinationCreateScreen${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/auxiliar-classes/BackendCaller${`?${string}` | `#${string}` | ''}` | `/components/DestinationListComponents/DestinationListContainer${`?${string}` | `#${string}` | ''}` | `/components/Global/DropDownSelector${`?${string}` | `#${string}` | ''}` | `/components/Global/EditableForm${`?${string}` | `#${string}` | ''}` | `/components/Global/ReloadFlagContext${`?${string}` | `#${string}` | ''}` | `/components/Global/ScreenSizeWrap${`?${string}` | `#${string}` | ''}` | `/constants/BACKEND_URI${`?${string}` | `#${string}` | ''}` | `/constants/interfaces${`?${string}` | `#${string}` | ''}` | `/constants/routes${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/DestinationCreateScreen` | `/DestinationCreateScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/auxiliar-classes/BackendCaller`; params?: Router.UnknownInputParams; } | { pathname: `/components/DestinationListComponents/DestinationListContainer`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/DropDownSelector`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/EditableForm`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/ReloadFlagContext`; params?: Router.UnknownInputParams; } | { pathname: `/components/Global/ScreenSizeWrap`; params?: Router.UnknownInputParams; } | { pathname: `/constants/BACKEND_URI`; params?: Router.UnknownInputParams; } | { pathname: `/constants/interfaces`; params?: Router.UnknownInputParams; } | { pathname: `/constants/routes`; params?: Router.UnknownInputParams; } | `/DestinationDetailsScreen/${Router.SingleRoutePart<T>}` | { pathname: `/DestinationDetailsScreen/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}