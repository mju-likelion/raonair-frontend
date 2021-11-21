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

const StarBox = styled.div`
  width: 250px;
  height: 50px;
  background: url('../svg/star_default.svg');
`;

const Star = styled.div`
  width: ${(props) => props.rate && `${props.rate}px`};
  height: 50px;
  background: url('../svg/star.svg');
`;

const Commnet = ({ comments }) => {
  return (
    // 후기가 페이징 구현 필요
    <CommentBox>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <CommentInnerTop>
            {/* StarBox에 기본 이미지를 주고 평점에 따라 star 이미지를 덮어씌움 */}
            <StarBox>
              <Star rate={comment.star * 50} />
            </StarBox>
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
