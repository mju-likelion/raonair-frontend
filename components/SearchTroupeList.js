import styled from 'styled-components';

import TroupeComponenet from './TroupeComponent';

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
          <span>'{type}'</span> 극단&nbsp;
          <span>'{keyword}'</span> 검색 결과
        </KeyWordBox>
      </TitleSector>
      {searchDatas.map((troupe) => (
        <TroupeComponenet troupe={troupe} key={troupe.id} />
      ))}
    </>
  );
};

export default SearchTroupeList;
