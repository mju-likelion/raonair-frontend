import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import PlayList from '../components/PlayList';
import SearchComponent from '../components/SearchComponent';

const KeyWordBox = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #848484;
  span {
    color: #222222;
  }
`;

const PlayListContainer = styled.div`
  margin: 0 auto;
  padding: 72px 0;
  width: 1280px;
  display: flex;
  flex-direction: column;
`;

const PlayBox = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const PlayBoxTitle = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 41px;
  a {
    color: #49b0ff;
    :hover {
      color: #529acc;
    }
  }
`;

const PlayListBox = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const search = ({ plays, searchData }) => {
  const { keyword, type } = searchData;
  return (
    <>
      <SearchComponent />
      <PlayListContainer>
        <KeyWordBox>
          <span>'{keyword}'</span> 검색 결과
        </KeyWordBox>
        <PlayBox>
          <PlayBoxTitle>
            <p>진행중</p>
            <Link
              href={{
                pathname: '/searchMoreList',
                query: { type: 'on-going', searchKeyword: keyword },
              }}
            >
              <a>더보기</a>
            </Link>
          </PlayBoxTitle>
          <PlayList plays={plays} />
        </PlayBox>
        <PlayBox>
          <PlayBoxTitle>
            <p>상영 예정</p>
            <Link
              href={{
                pathname: '/searchMoreList',
                query: { type: 'to-be', searchKeyword: keyword },
              }}
            >
              <a>더보기</a>
            </Link>
          </PlayBoxTitle>
          <PlayList plays={plays} />
        </PlayBox>
        <PlayBox>
          <PlayBoxTitle>
            <p>지난 공연</p>
            <Link
              href={{
                pathname: '/searchMoreList',
                query: { type: 'closed', searchKeyword: keyword },
              }}
            >
              <a>더보기</a>
            </Link>
          </PlayBoxTitle>
          <PlayList plays={plays} />
        </PlayBox>
      </PlayListContainer>
    </>
  );
};

export async function getServerSideProps({ query }) {
  // 쿼리 정보를 검색 컴포넌트에서 가져와 axios로 데이터 패치하자
  const searchData = {
    keyword: query.keyword,
    type: query.type,
  };
  // 더미데이터
  const plays = [
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
    props: { searchData, plays },
  };
}

export default withRouter(search);
