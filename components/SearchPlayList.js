import Link from 'next/link';
import styled from 'styled-components';

import PlayList from './PlayList';

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

const SearchPlayList = ({ keyword, plays }) => {
  return (
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
  );
};

export default SearchPlayList;
