import { atom } from 'recoil';

const locationState = atom({
  key: 'locationState',
  default: [
    { id: '서울', value: 'seoul' },
    { id: '경기', value: 'gyeonggi' },
    { id: '인천', value: 'incheon' },
    { id: '부산', value: 'busan' },
    { id: '광주', value: 'gwangju' },
    { id: '대구', value: 'deagu' },
    { id: '대전', value: 'deajeon' },
    { id: '울산', value: 'ulsan' },
    { id: '세종', value: 'sejong' },
    { id: '강원', value: 'gangwon' },
    { id: '충북', value: 'chungbuk' },
    { id: '충남', value: 'chungnam' },
    { id: '전북', value: 'jeonbuk' },
    { id: '전남', value: 'jeonnam' },
    { id: '경북', value: 'gyeongbuk' },
    { id: '경남', value: 'gyeongnam' },
    { id: '제주', value: 'jeju' },
  ],
});

export default locationState;
