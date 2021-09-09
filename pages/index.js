// import axios from 'axios';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import PlayComponent from '../components/PlayComponent';
import SearchComponent from '../components/SearchComponent';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1280px;
  margin: 0 auto;
  .intro {
    margin: 99px auto;
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
  &:nth-child(odd) {
    background-color: #F6F6F6;
  }
  .plays {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1120px;
    height: 400px;
    list-style: none;
  }
`;

const Theame = styled.h4`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 71px;
  margin-bottom: 31px;
`;

const Home = () => {
  // 더미데이터(API추가시 삭제)
  const [plays, setPlays] = useState([{
    id: 1,
    poster: 'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
    title: 'title',
    likes: 10,
    star_avg: 3.5,
    start_date: '2021.07.01',
    end_date: null,
  },
  {
    id: 2,
    poster: null,
    title: 'title2',
    likes: 5,
    star_avg: 3.5,
    start_date: '2021.08.28',
    end_date: '2021.12.31',
  },
  {
    id: 3,
    poster: null,
    title: 'title3',
    likes: 0,
    star_avg: 0,
    start_date: '2021.09.01',
    end_date: null,
  },{
    id: 4,
    poster: null,
    title: 'title4',
    likes: 0,
    star_avg: 0,
    start_date: '2021.11.31',
    end_date: null,
  }]);

  return (
    <>
      <MainContainer>
      <SearchComponent />
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
          <Theame>INDIE</Theame>
          <div className='plays'>
            { plays && plays.map(play =>
              <div key={play.id}><PlayComponent play={play} /></div>) }
          </div>
        </Section>
        <Section>
          <Theame>NEW TEAM&apos;S PLAY</Theame>
          <div className='plays'>
            { plays && plays.map(play =>
              <div key={play.id}><PlayComponent play={play} /></div>) }
          </div>
        </Section>
        <Section>
          <Theame>RANKING</Theame>
          <div className='plays'>
            { plays && plays.map(play =>
              <div key={play.id}><PlayComponent play={play} /></div>) }
          </div>
        </Section>
        <Section>
          <Theame>PROCEEDING</Theame>
          <div className='plays'>
            { plays && plays.map(play =>
              <div key={play.id}><PlayComponent play={play} /></div>) }
          </div>
        </Section>
      </MainContainer>
    </>
  );
};


// export async function getServerSideProps() {
//   // 임시 api, 추천 관련 api 구현 필요함
//   const API_KEY = process.env.NEXT_APP_API_KEY;
//   const res = await axios.get(`${API_KEY}/api/search/play`);
//   const data = await res.data.data;
//   const ongoingPlays = data.searched_results.ongoing_plays;
//   const tobePlays = data.searched_results.tobe_plays;
  
//   return {
//     props: { ongoingPlays, tobePlays }
//   }
// }

export default Home;
