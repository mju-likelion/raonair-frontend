import styled from 'styled-components';

import SearchComponent from '../components/SearchComponent';

const Intro = styled.div`
  /* display: flex; */
  margin: 99px auto;
  width: 800px;
  height: 143px;
  /* background-color: gray; */
  text-align: center;
  p {
    color: #49b0ff;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  li {
    margin: 0 12px;
    cursor: pointer;
  }
  hr {
    width: 100%;
    color: #BFBFBF;
  }
`;
const Theame = styled.h4`
  font-size: 36px;
  text-align: center;
  margin-bottom: 13px;
`;

const HomePage = () => {
  return (
    <>
      <SearchComponent />
      <Intro>
        <Theame>다양한 공연을 라온에어와 함께 만나보세요</Theame>
        <ul>
          <li>
            <p>#인디</p>
          </li>
          <li>
            <p>#신생극단</p>
          </li>
          <li>
            <p>#랭킹</p>
          </li>
          <li>
            <p>#진행중</p>
          </li>
        </ul>
        <hr />
      </Intro>
      <Theame>
        INDIE
      </Theame>
    </>
  );
};

export default HomePage;
