import styled from 'styled-components';

import Star from './Star';

const CommentBox = styled.div`
  display: block;
  height: 860px;
  margin-top: 65px;
  border: 2px #529acc solid;
  border-radius: 12px;
  overflow-y: scroll;
`;

const CommentItem = styled.div`
  width: 1077px;
  margin: 30px 31px;
  padding: 23px 45px;
  border-radius: 6px;
  background-color: skyblue;
`;

const Commnet = () => {
  return (
    <CommentBox>
      <CommentItem>
        <p>유저이름 | 2021.11.09</p>
        <p>이거 재밌어요!!!</p>
      </CommentItem>
      <CommentItem>
        <h1>대충 별점</h1>
        <p>유저이름 | 2021.11.09</p>
        <p>이거 재밌어요!!!</p>
      </CommentItem>
      <CommentItem>
        <h1>대충 별점</h1>
        <p>유저이름 | 2021.11.09</p>
        <p>이거 재밌어요!!!</p>
      </CommentItem>
    </CommentBox>
  );
};

export default Commnet;
