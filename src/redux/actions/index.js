import { actionType } from '../constants';

export const desktopMode = () => {
  return {
    type: actionType.DESKTOP_MODE,
  };
};

export const mobileMode = () => {
  return {
    type: actionType.MOBILE_MODE,
  };
};

export const leftBar = () => {
  return {
    type: actionType.LEFT_BAR,
  };
};
