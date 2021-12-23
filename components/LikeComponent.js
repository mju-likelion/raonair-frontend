import { useState } from 'react';
import styled from 'styled-components';

const LikeBox = styled.div`
  cursor: default;
  p {
    text-align: center;
  }
`;

const LikeButton = styled.img`
  width: 50px;
  height: 45px;
  cursor: pointer;
`;

const Like = ({ children }) => {
  const [isCheck, setIsCheck] = useState('');

  const onClickEvent = () => {
    setIsCheck(!isCheck);
    // eslint-disable-next-line no-alert
    alert(isCheck ? '좋아요 취소..' : '좋아요!');
  };
  return (
    <LikeBox>
      <LikeButton
        onClick={onClickEvent}
        src={isCheck ? '../svg/heart.svg' : '../svg/heart_false.svg'}
      />
      <p>{children}</p>
    </LikeBox>
  );
};

export default Like;
