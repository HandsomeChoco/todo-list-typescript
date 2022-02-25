export enum APP_CSS {
  STANDARD = 8,
  APP_THEME_COLOR = '#6076e8',
  WHITE = '#ffffff',
  BLACK = '#000000',
  TRANSITION_TIME = '0.2s',
  MAX_HEIGHT = 1200,
}

export enum API {
  BASE_URL = 'http://10.10.12.53:9000/api'
}

export const REG_EXP_WHAT_DATE = /[^월|화|수|목|금|토|일]/g;

export const date = new Date();
export const year: number = date.getFullYear();

export enum ERROR_MSG {
  FAILED_NETWORK_REQUEST = '네트워크 요청에 실패했습니다.',
  NOT_UNDER_ONE = '1보다 작은 값이 들어올 수 없습니다.',
  STATE_CONTEXT_ERROR = 'TodoStateContext 를 찾을 수 없습니다.',
  DISPATCH_CONTEXT_ERROR = 'TodoDispatchContext 를 찾을 수 없습니다.',
  ID_REF_ERROR = 'id 를 찾을 수 없습니다.',
  TEXT_ERROR = 'text 를 찾을 수 없습니다.'
}
