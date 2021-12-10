import { Rating } from '@mui/material';
import { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CommentBox = styled.div`
  display: block;
  width: 1140px;
  min-height: 500px;
  margin-top: 65px;
  border: 2px #529acc solid;
  border-radius: 12px;
  overflow-y: scroll;
  /* 스크롤바 숨기기, 특정 브라우저에서만 가능 */
  &::-webkit-scrollbar {
    display: none;
  }
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
  const scrollRef = useRef();

  const [pageCount, setPageCount] = useState(2);
  const getCommentList = (page) => {
    // API 협의 완료 후 data fetch로 수정하기
    return comments.filter((comment) => comment.page === page);
  };
  const [commentItems, setCommentItems] = useState(getCommentList(1));

  const handleScroll = useCallback(() => {
    /* 
      clientHeight = 패딩포함 / 스크롤바, 테두리 마진 제외한 높이
      offsetHeight = 패딩, 스크롤바, 테두리 포함 / 마진 제외
      scrollHeight = 컨텐츠 내부에 있는 전체 높이
    */
    const containerHeight = scrollRef.current.clientHeight;
    const commentsHeight = scrollRef.current.scrollHeight;
    const scrollPoint = scrollRef.current.scrollTop;
    if (
      Math.round(scrollPoint + containerHeight) >= commentsHeight &&
      pageCount <= comments.length / 3
    ) {
      // pageCount += 1;
      setCommentItems(commentItems.concat(getCommentList(pageCount)));
      setPageCount(pageCount + 1);
    }
  }, [pageCount, commentItems]);

  return (
    <CommentBox ref={scrollRef} onScroll={handleScroll}>
      {commentItems.map((comment) => (
        <CommentItem key={comment.id}>
          <CommentInnerTop>
            <Ratings defaultValue={comment.star / 2} readOnly precision={0.5} />
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
