//HostMyPage
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { authService } from '../fBase';

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
`;

const HostMyPage = () => {
  function HostName({ userName }) {
    return <h1>"{userName}"Host님</h1>;
  }

  function SpaceReg(userID) {
    return <img height="30px" src="" alt="MainImg" />;
  }
  
  
  return (
    <div class="Hostpage">
      {/* <Header /> */}
      <div class="HostpageSection">
        <form class="profile">
          <HostName userName="Guest" />
          <h4>남는 공간을 통해 수익을 창출해보세요.</h4>
        </form>
        <form class="box1">
          <h2>계정관리</h2>
          <StyledLink to="">
            <button>내정보변경하기</button>
          </StyledLink>
          <br/>
          <StyledLink to="">
            <button>대금수령관리</button>
          </StyledLink>
        </form>
        <form class="box2">
          <h2>공간예약</h2>
          <StyledLink to="/hostpage/create">
            <button>공간 등록하기</button>
          </StyledLink>
          <br/>
          <StyledLink to="/hostpage/manage">
            <button>공간 관리하기</button>
          </StyledLink>
          <br/>
          <StyledLink to="">
            <button>예약 관리하기</button>
          </StyledLink>
          {/*<SpaveReg/ userID="">*/}
        </form>
      </div>
    </div>
  );
};

export default HostMyPage;
