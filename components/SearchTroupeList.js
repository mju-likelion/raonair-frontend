import styled from 'styled-components';

import TroupeComponenet from './TroupeComponent';

const TitleSector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
  a {
    font-size: 20px;
    color: #49b0ff;
    :hover {
      color: #529acc;
    }
  }
`;

const TroupeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1184px;
  padding: 0 32px;
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
  const troupeType = type === 'normal' ? '일반' : '학생';
  return (
    <>
      <TitleSector>
        <KeyWordBox>
          <span>'{troupeType}'</span> 극단&nbsp;
          <span>'{keyword}'</span> 검색 결과
        </KeyWordBox>
      </TitleSector>
      <TroupeList>
        {searchDatas.map((troupe) => (
          <TroupeComponenet troupe={troupe} key={troupe.id} />
        ))}
      </TroupeList>
    </>
  );
};

export default SearchTroupeList;
