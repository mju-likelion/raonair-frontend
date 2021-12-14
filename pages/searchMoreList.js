/* eslint-disable no-console */
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import PlayComponent from '../components/PlayComponent';

const PlayListContainer = styled.div`
  width: 1182px;
  margin: 54px auto;
`;

const PlayList = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkWrap = styled.a`
  margin: 0 48px;
`;

const searchMoreList = ({ plays }) => {
  return (
    <PlayListContainer>
      <PlayList>
        {plays.map((play) => (
          <Link href={`/plays/${play.id}`} key={play.id}>
            <LinkWrap>
              <PlayComponent play={play} key={play.id} />
            </LinkWrap>
          </Link>
        ))}
      </PlayList>
    </PlayListContainer>
  );
};

export async function getServerSideProps({ query }) {
  // query를 받아 api 패치하기 이하 테스트용
  const { type, searchKeyword } = query;
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
    props: { type, searchKeyword, plays },
  };
}

export default withRouter(searchMoreList);
