import { Rating } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
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
  width: 852px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: scroll; */
`;

const InputBox = styled.textarea`
  width: 678px;
  height: 100px;
  border: 1px #49b0ff solid;
  border-radius: 12px;
  margin: 25px auto 18px;
  padding: 30px;
`;

const SubmitBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 486px;
`;

const FormBtn = styled.button`
  width: 177px;
  height: 49px;
  background-color: #49b0ff;
  border: 1px #fff solid;
  border-radius: 12px;
  cursor: pointer;
  color: #fff;
`;

const CommentInput = ({
  inputStar,
  cancelCommentInput,
  resetComment,
  onClickStar,
}) => {
  const formik = useFormik({
    initialValues: {
      comment: '',
      star: inputStar,
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
      resetComment();
    },
  });

  return (
    <CommentInputBox>
      <p>리뷰도 남겨주실거죠?</p>
      <InputForm onSubmit={formik.handleSubmit}>
        <Rating
          defaultValue={0}
          precision={0.5}
          value={inputStar}
          size='large'
          onChange={(event, newValue) => {
            onClickStar(newValue);
          }}
          {...formik.getFieldProps('star')}
        />
        <InputBox type='text' {...formik.getFieldProps('comment')} />
        <SubmitBox>
          <FormBtn type='submit' aria-label='리뷰제출'>
            리뷰제출
          </FormBtn>
          <FormBtn
            type='button'
            aria-label='리뷰취소'
            onClick={cancelCommentInput}
          >
            취소
          </FormBtn>
        </SubmitBox>
      </InputForm>
    </CommentInputBox>
  );
};

export default CommentInput;
