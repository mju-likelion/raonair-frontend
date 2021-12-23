// import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

import PlayComponent from '../components/PlayComponent';
import PlayList from '../components/PlayList';
import SearchComponent from '../components/SearchComponent';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1280px;
  margin: 0 auto;
`;

const Intro = styled.div`
  margin: 99px auto;
  text-align: center;
  button {
    font-size: 18px;
    color: #49b0ff;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  li {
    margin: 0 12px;
  }
  hr {
    width: 100%;
    color: #bfbfbf;
  }
`;

const Section = styled.div`
  min-height: 645px;
  max-height: 645px;
  &:nth-child(odd) {
    background-color: #f6f6f6;
  }
`;

const Theme = styled.h4`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 71px;
  margin-bottom: 31px;
`;

const Home = ({ plays }) => {
  const themes = [
    { id: 'indie', name: '#인디', index: 0 },
    { id: 'newTeam', name: '#신생극단', index: 1 },
    { id: 'rank', name: '#랭킹', index: 2 },
    { id: 'proceed', name: '#진행중', index: 3 },
  ];

  const ScrollEvent = (e) => {
    const target = themes.filter((item) => item.id === e.target.id);
    const scrollValue = target[0].index * 600 + 1000;
    window.scrollTo({ top: scrollValue, behavior: 'smooth' });
  };

  return (
    <>
      <MainContainer>
        <SearchComponent />
        <Intro>
          <Theme>다양한 공연을 라온에어와 함께 만나보세요</Theme>
          <ul>
            {themes.map((theme) => (
              <li key={theme.id}>
                <button
                  id={theme.id}
                  type='button'
                  onClick={ScrollEvent}
                  onKeyUp={ScrollEvent}
                >
                  {theme.name}
                </button>
              </li>
            ))}
          </ul>
          <hr />
        </Intro>
        <Section>
          <Theme>INDIE</Theme>
          <PlayList plays={plays} />
        </Section>
        <Section>
          <Theme>NEW TEAM'S PLAY</Theme>
          <PlayList plays={plays} />
        </Section>
        <Section>
          <Theme>RANKING</Theme>
          <PlayList plays={plays} />
        </Section>
        <Section>
          <Theme>PROCEEDING</Theme>
          <PlayList plays={plays} />
        </Section>
      </MainContainer>
    </>
  );
};

export async function getServerSideProps() {
  // 임시 api, 추천 관련 api 구현 필요함
  // const API_KEY = process.env.NEXT_APP_API_KEY;
  // const res = await axios.get(`${API_KEY}/api/search/play`);
  // const data = await res.data.data;
  // const ongoingPlays = data.searched_results.ongoing_plays;
  // const tobePlays = data.searched_results.tobe_plays;

  // 더미데이터
  const plays = [
    {
      id: 1,
      poster:
        'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
      title: '한여름밤의 꿈',
      likes: 10,
      star_avg: 3.5,
      start_date: new Date('2021-07-01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 2,
      poster:
        'http://kpenews.com/Files/4/News/202004/114_20200422233333060.JPG',
      title: '렁스',
      likes: 5,
      star_avg: 3.5,
      start_date: new Date('2021-08-28').toLocaleDateString(),
      end_date: new Date('2021.12.31').toLocaleDateString(),
    },
    {
      id: 3,
      poster:
        'http://www.job-post.co.kr/news/photo/202110/37086_35174_2649.jpg',
      title: '과학하는 마음',
      likes: 7,
      star_avg: 4,
      start_date: new Date('2021.09.01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 4,
      poster:
        'http://www.newsfreezone.co.kr/news/photo/201907/119453_105123_503.jpg',
      title: 'One More',
      likes: 3,
      star_avg: 3.8,
      start_date: new Date('2021.11.31').toLocaleDateString(),
      end_date: null,
    },
  ];

  return {
    props: { plays },
  };
}

export default Home;
