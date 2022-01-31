import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Lesson } from 'apollo/generated/globalTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

type DetailsParams = {
  lesson: Lesson | null | undefined;
};

export type ScreensParams = {
  Login: undefined;
  Home: undefined;
  Alerts: undefined;
  Discover: undefined;
  Feed: undefined;
  Details: DetailsParams;
};

export type MainStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>;

export type Props = {};
