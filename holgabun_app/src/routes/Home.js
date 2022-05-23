import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainBox = styled.div`
  display: flex;
`;
const ButtonBox = styled.div`
  width: 500px;
  height: 400px;
  margin: auto;
  margin-top: 100px;
`;
const Button = styled.button`
  background-color: #ffe08c;
  border: none;
  color: black;
  padding: 15px 30px;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin: auto;
  width: 350px;
  border-radius: 5px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
`;

function Home({ isLoggedIn, userObj }) {
  return (
    <>
      <MainBox>
        <ButtonBox>
          <StyledLink to="/search/home">
            <Button variant="primary" size="lg">
              짐 맡기러가기
            </Button>
          </StyledLink>
          <StyledLink to="/mypage">
            <Button variant="primary" size="lg">
              마이페이지
            </Button>
          </StyledLink>
          <StyledLink to="/account">
            <Button variant="primary" size="lg">
              로그인
            </Button>
          </StyledLink>
          <StyledLink to="/hostpage">
            <Button variant="primary" size="lg">
              호스트 되기
            </Button>
          </StyledLink>
        </ButtonBox>
      </MainBox>
    </>
  );
}

export default Home;
