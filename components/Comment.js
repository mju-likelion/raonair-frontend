import styled from 'styled-components';

import Star from './Star';

const CommentBox = styled.div`
  display: block;
  width: 1140px;
  min-height: 500px;
  margin-top: 65px;
  border: 2px #529acc solid;
  border-radius: 12px;
  overflow-y: scroll;
`;

const CommentItem = styled.div`
  width: 986px;
  max-height: 150px;
  min-height: 150px;
  margin: 13px 31px;
  padding: 23px 45px;
  border-radius: 6px;
  border: 1px #87cbff solid;
  background-color: #f9f9f9;
`;

const Commnet = ({ comments }) => {
  return (
    // 후기가 페이징 구현 필요
    <CommentBox>
      {comments.map(comment =>
        <CommentItem key={comment.id}>
          {/* 별을 어떻게 반복해야하는지 고민 필요 */}
          {/* {comment.star} */}
          <p>{comment.nickname} | {comment.date}</p>
          <p>{comment.content}</p>
        </CommentItem>
      )}
    </CommentBox>
  );
};

export default Commnet;
