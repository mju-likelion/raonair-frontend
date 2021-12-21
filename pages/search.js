import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SearchComponent from '../components/SearchComponent';
import SearchPlayList from '../components/SearchPlayList';
import SearchTroupeList from '../components/SearchTroupeList';

const ListContainer = styled.div`
  margin: 0 auto;
  padding: 72px 0;
  width: 1280px;
  display: flex;
  flex-direction: column;
`;

// api 추가 후 troupeDatas를 searchTarget과 통합하기
const search = ({ searchDatas, searchTarget, troupeDatas }) => {
  const { keyword, type } = searchTarget;
  const [searchType, setSearchType] = useState('play');

  useEffect(() => {
    if (type === 'normal' || type === 'student') {
      setSearchType('troupe');
    } else {
      setSearchType('play');
    }
  }, [type]);

  return (
    <>
      <SearchComponent />
      <ListContainer>
        {searchType === 'play' ? (
          <SearchPlayList
            searchDatas={searchDatas}
            searchTarget={searchTarget}
          />
        ) : (
          <SearchTroupeList
            searchDatas={troupeDatas}
            searchTarget={searchTarget}
          />
        )}
      </ListContainer>
    </>
  );
};

export async function getServerSideProps({ query }) {
  // 쿼리 정보를 검색 컴포넌트에서 가져와 axios로 데이터 패치하자
  const searchTarget = {
    keyword: query.keyword,
    type: query.type,
  };
  // 더미데이터(API 패치 후 극단도 searchDatas로 바꾸기)
  const searchDatas = [
    {
      id: 1,
      poster:
        'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
      title: '한여름밤의 꿈',
      likes: 10,
      star_avg: 3.5,
      start_date: new Date('2021-07-01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 2,
      poster:
        'http://kpenews.com/Files/4/News/202004/114_20200422233333060.JPG',
      title: '렁스',
      likes: 5,
      star_avg: 3.5,
      start_date: new Date('2021-08-28').toLocaleDateString(),
      end_date: new Date('2021.12.31').toLocaleDateString(),
    },
    {
      id: 3,
      poster:
        'http://www.job-post.co.kr/news/photo/202110/37086_35174_2649.jpg',
      title: '여름 호텔을 위한 의상',
      likes: 0,
      star_avg: 0,
      start_date: new Date('2021.09.01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 4,
      // poster: null,
      poster:
        'http://www.newsfreezone.co.kr/news/photo/201907/119453_105123_503.jpg',
      title: '여름과 연기',
      likes: 0,
      star_avg: 0,
      start_date: new Date('2021.11.31').toLocaleDateString(),
      end_date: null,
    },
  ];

  // 연극 검색 결과 데이터(API 패치 후 searchDatas와 통합하기)
  const troupeDatas = [
    {
      id: 1,
      name: '국립극단',
      type: 'normal',
      logo: 'https://pbs.twimg.com/profile_images/1160798818977247232/TKusMqlE_400x400.jpg',
    },
    {
      id: 2,
      name: '극단박창대소',
      type: 'normal',
      logo: 'url',
    },
    {
      id: 3,
      name: '극단민들레',
      type: 'normal',
      logo: 'url',
    },
    {
      id: 4,
      name: '극단서울',
      type: 'normal',
      logo: 'url',
    },
    {
      id: 5,
      name: '극단가원',
      type: 'student',
      logo: 'url',
    },
    {
      id: 6,
      name: '극단초인',
      type: 'student',
      logo: 'url',
    },
    {
      id: 7,
      name: '극단모이공',
      type: 'student',
      logo: 'url',
    },
    {
      id: 8,
      name: '젊은극단늘',
      type: 'student',
      logo: 'url',
    },
  ];
  return {
    props: { searchTarget, searchDatas, troupeDatas },
  };
}

export default withRouter(search);
