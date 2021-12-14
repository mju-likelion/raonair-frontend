import Link from 'next/link';
import styled from 'styled-components';

import PlayComponent from './PlayComponent';

const Plays = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkWrap = styled.a`
  margin: 0 48px;
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
