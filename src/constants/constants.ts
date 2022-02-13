export const APP_CSS = {
  STANDARD: 8,
  APP_THEME_COLOR: '#6076e8',
  WHITE: '#ffffff',
  BLACK: '#000000'
};

export const API = {
  BASE_URL: 'http://10.10.12.53:9000/api'
}
export const REG_EXP_WHAT_DATE = /[^월|화|수|목|금|토|일]/g;

export const date = new Date();
export const year: number = date.getFullYear();

export const ERROR_MSG = {
  FAILED_NETWORK_REQUEST: '네트워크 요청에 실패했습니다.'
}
