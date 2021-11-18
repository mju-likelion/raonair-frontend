import styled from 'styled-components';

const CommentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 852px;
  min-height: 342px;
  border: 2px #49b0ff solid;
  border-radius: 12px;
  margin: 64px auto 0;
  background-color: #f6fbff;
  p {
    font-weight: bold;
  }
`;

const InputForm = styled.form`
  width: 678px;
`;

const InputBox = styled.textarea`
  width: 678px;
  height: 201px;
  border: 1px #49b0ff solid;
  border-radius: 12px;
  margin: 25px auto 18px;
`;

const CommentInput = () => {
  return (
    <CommentInputBox>
      <p>리뷰도 남겨주실거죠?</p>
      {/* formik으로 수정하기 */}
      <InputForm>
        <InputBox type='text' />
        <button type='submit' aria-label='리뷰제출'>
          리뷰제출
        </button>
        <button type='button' aria-label='리뷰제출'>
          취소
        </button>
      </InputForm>
    </CommentInputBox>
  );
};

export default CommentInput;
