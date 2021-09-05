import axios from 'axios';
import styled from 'styled-components';

import SearchComponent from '../components/SearchComponent';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 1280px; */
  margin: 0 auto;
  .intro {
    margin: 99px auto;
    max-width: 800px;
    height: 143px;
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
  }
`;

const Section = styled.div`
  height: 645px;
  .indie {
    background-color: red;
  }
`;
const Theame = styled.h4`
  font-size: 36px;
  text-align: center;
  margin-bottom: 13px;
`;

const Home = ({ plays }) => {
  return (
    <>
      <SearchComponent />
      <MainContainer>
        <div className='intro'>
          <Theame>다양한 공연을 라온에어와 함께 만나보세요</Theame>
          {/* 클릭으로 포커스를 맞출지, 페이지 이동을 할지 미정 */}
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
        </div>
        <Section>
          <div className='indie'>
            <Theame>
              INDIE
            </Theame>
            <ul>
              { plays && plays.map(play =>
                <li key={play.id}>{play.title}</li>) }
            </ul>
          </div>
        </Section>
        <Section>
          <Theame>
            NEW TEAM&apos;S PLAY
          </Theame>
        </Section>
        <Section>
          <Theame>
            RANKING
          </Theame>
        </Section>
        <Section>
          <Theame>
            PROCEEDING
          </Theame>
        </Section>
      </MainContainer>
    </>
  );
};


export async function getServerSideProps() {
  // 임시적 api
  const res = await axios.get(`http://3.38.8.220/api/search/play`);

  const data = await res.data;
  const plays = data.data.searched_results.ongoing_plays;
  
  return {
    props: { plays }
  }
}

export default Home;
