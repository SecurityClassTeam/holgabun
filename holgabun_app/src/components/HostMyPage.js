//HostMyPage
import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import '../css/HostPage.css';

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
`;

const HostMyPage = ({ userObj }) => {
  const navigate = useNavigate();
  function HostName() {
    if (userObj.displayName !== null) {
      return <h1>"{userObj.displayName}"Host님</h1>;
    }
    return <h2>"닉네임을 설정하세요"Host님</h2>;
  }

  /*function SpaceReg(userID) {
    return <img height="30px" src="" alt="MainImg" />;
  }
  */
  const onClick = () => {
    navigate('/Sign');
  };

  return (
    <div className="Hostpage">
      <div className="HostpageSection">
        <form className="profile">
          <HostName />
          <h5>남는 공간을 통해 수익을 창출해보세요.</h5>
        </form>
        <br />
        <br />
        <br></br>
        <div class="hostContainer">
          <form className="box1">
            <h2>계정관리</h2>
            <StyledLink to="">
              <button>내정보변경하기</button>
            </StyledLink>
            <br />
            <br />
            <StyledLink to="">
              <button>대금수령관리</button>
            </StyledLink>
            <br></br>
            <br></br>
            <h2>공간예약</h2>
            <StyledLink to="/hostpage/create">
              <button>공간 등록하기</button>
            </StyledLink>
            <br />
            <br />
            <StyledLink to="/hostpage/manage">
              <button>공간 관리하기</button>
            </StyledLink>
            <br />
            <br />
            <StyledLink to="/">
              <button>예약 관리하기</button>
            </StyledLink>
            <br />
            <br />
            <StyledLink to="/">
              <button>공간 인증하기</button>
            </StyledLink>
            <br />
            <br />
            <StyledLink to="/Sign">
              <button>신원 인증하기</button>
            </StyledLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostMyPage;
