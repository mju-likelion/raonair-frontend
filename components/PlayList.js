import { red } from '@mui/material/colors';
import Link from 'next/link';
import styled from 'styled-components';

import PlayComponent from './PlayComponent';

const Plays = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const LinkWrap = styled.a`
  margin: 0 48px;
  margin-bottom: 54px;
`;

const PlayList = ({ plays }) => {
  return (
    <Plays>
      {plays.map((play) => (
        <Link href={`/plays/${play.id}`} key={play.id}>
          <LinkWrap>
            <PlayComponent play={play} key={play.id} />
          </LinkWrap>
        </Link>
      ))}
    </Plays>
  );
};

export default PlayList;
