import { Rating } from '@mui/material';
import styled from 'styled-components';

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
  font-size: 30px;
`;

const CommentInnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
`;

const Ratings = styled(Rating)`
  // 별 사이즈 커스터마이징
  span {
    font-size: 50px;
  }
`;

const Commnet = ({ comments }) => {
  return (
    // 후기가 페이징 구현 필요
    <CommentBox>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <CommentInnerTop>
            <Ratings defaultValue={comment.star} readOnly precision={0.5} />
            <p>
              {comment.nickname} | {comment.date}
            </p>
          </CommentInnerTop>
          <p>{comment.content}</p>
        </CommentItem>
      ))}
    </CommentBox>
  );
};

export default Commnet;
