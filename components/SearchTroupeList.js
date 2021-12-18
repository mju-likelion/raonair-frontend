import Link from 'next/link';
import styled from 'styled-components';

const TitleSector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 20px;
    color: #49b0ff;
    :hover {
      color: #529acc;
    }
  }
`;

const KeyWordBox = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #848484;
  span {
    color: #222222;
  }
`;

const SearchTroupeList = ({ searchTarget, searchDatas }) => {
  const { keyword, type } = searchTarget;
  return (
    <>
      <TitleSector>
        <KeyWordBox>
          <span>'{type}'</span> 지역&nbsp;
          <span>'{keyword}'</span> 검색 결과
        </KeyWordBox>
        {/* 링크 더보기 수정요망 */}
        <Link
          href={{
            pathname: '/searchMoreList',
            query: { type: 'on-going', searchKeyword: keyword },
          }}
        >
          <a>더보기</a>
        </Link>
      </TitleSector>
      <p>연극검색결과입니다</p>
    </>
  );
};

export default SearchTroupeList;
