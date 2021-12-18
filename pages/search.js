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

const search = ({ searchDatas, searchTarget }) => {
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
            searchDatas={searchDatas}
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
  // 더미데이터
  const searchDatas = [
    {
      id: 1,
      poster:
        'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
      title: 'title',
      likes: 10,
      star_avg: 3.5,
      start_date: new Date('2021-07-01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 2,
      poster: null,
      title: 'title2',
      likes: 5,
      star_avg: 3.5,
      start_date: new Date('2021-08-28').toLocaleDateString(),
      end_date: new Date('2021.12.31').toLocaleDateString(),
    },
    {
      id: 3,
      poster: null,
      title: 'title3',
      likes: 0,
      star_avg: 0,
      start_date: new Date('2021.09.01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 4,
      poster: null,
      title: 'title4',
      likes: 0,
      star_avg: 0,
      start_date: new Date('2021.11.31').toLocaleDateString(),
      end_date: null,
    },
  ];
  return {
    props: { searchTarget, searchDatas },
  };
}

export default withRouter(search);
