import { formatDate, formatDay } from "./date";

test('one of 월 화 수 목 금 토 일', () => {
  const mon = formatDay('(월)');
  expect(mon).toMatch('월');

  const tue = formatDay('(화)');
  expect(tue).toMatch('화');

  const wed = formatDay('(수)');
  expect(wed).toMatch('수');

  const thu = formatDay('(목)');
  expect(thu).toMatch('목');

  const fri = formatDay('(금)');
  expect(fri).toMatch('금');

  const sat = formatDay('(토)');
  expect(sat).toMatch('토');

  const sun = formatDay('(일)');
  expect(sun).toMatch('일');
});

test('number format to XX: string', () => {
  const stringOne = formatDate('1');
  expect(stringOne).toMatch('01');

  const stringEleven = formatDate('11');
  expect(stringEleven).toMatch('11');

  const one = formatDate(1);
  expect(one).toMatch('01');

  const eleven = formatDate(11);
  expect(eleven).toMatch('11');

  const oneDay = formatDate('1일');
  expect(oneDay).toMatch('01');
});