import axios from 'axios';
import styled from 'styled-components';

import PlayComponent from '../components/PlayComponent';
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
  min-height: 645px;
  max-height: 645px;
  background-color: #F6F6F6;
  .plays {
    
  }
`;

const Theame = styled.h4`
  font-size: 36px;
  text-align: center;
  margin-bottom: 13px;
`;

const Home = ({ ongoingPlays }) => {
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
          <Theame>
            INDIE
          </Theame>
          <ul>
            { ongoingPlays && ongoingPlays.map(play =>
              <li key={play.id}><PlayComponent play={play} /></li>) }
          </ul>
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
  const API_KEY = process.env.NEXT_APP_API_KEY;
  const res = await axios.get(`${API_KEY}/api/search/play`);
  const data = await res.data.data;
  const ongoingPlays = data.searched_results.ongoing_plays;
  
  return {
    props: { ongoingPlays }
  }
}

export default Home;
