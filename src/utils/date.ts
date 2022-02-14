import axios, { AxiosResponse } from "axios";
import { API, REG_EXP_WHAT_DATE } from "../constants/constants";
import { date } from "../constants/constants";
import { ERROR_MSG } from "../constants/constants";

// 월(Month) 혹은 일(Date)을 두자리 숫자 포맷으로 바꿔 반환합니다.
export const formatDate = (targetDate: number | string): string | Error => {
  const result = targetDate.toString().replace(/\D/, '');
  if (Number(result) < 1) {
    return new Error (ERROR_MSG.NOT_UNDER_ONE);
  }
  return Number(result) < 10 ? '0' + result : result;
};

export const formatDay = (day: string): string | Error => {
  const result = day.replace(REG_EXP_WHAT_DATE, '');
  const makeEmpty = result.replace(/[월|화|수|목|금|토|일]/, '');

  if (makeEmpty === '' || makeEmpty.length > 0) {
    return result;
  }
  return new Error('흠... 이 문자열은 요일이 아니거나 연속되는 요일 같은데요?');
};

// data.go.kr 의 휴일을 가져오는 API를 사용합니다. 파라미터 값을 넣지 않을 경우 
export const getHoliDaysByYearMonth = async(year = date.getFullYear(), month = date.getMonth() + 1): Promise<AxiosResponse<any, any>> => {
  let formattedMonth: string | Error = formatDate(month);
  return await axios.get(`${API.BASE_URL}/${year}/${formattedMonth}`);
};

export const formatTodayYYYYMMDD = (): string => {
  return date.toLocaleDateString('ko-kr', {
    year: "numeric",
    month: '2-digit',
    day: '2-digit'
  }).split('.').map(v => v.trim()).join('')
};