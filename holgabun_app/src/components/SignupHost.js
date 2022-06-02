//하연
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { dbService } from '../fBase';
import '../css/SignupHost.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';

const SignupHost = ({ userObj, hostState, setHostState }) => {
  const navigate = useNavigate();
  const [hostName, setHostName] = useState('');
  const [hostNumber, setHostNumber] = useState('');

  const Host = {
    hostName: hostName,
    hostNumber: hostNumber,
    hostID: Date.now(),
    identityCheak: false,
    bankAccount: null,
    countSpace: 0,
    userID: userObj.uid,
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'hostName') {
      setHostName(value);
    } else if (name === 'hostNumber') {
      setHostNumber(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'Hosts'), Host);
    //제출하면 호스트 state를 true로 바꾸고
    //호스트 페이지 이동하기
    //setHostState(true);
    setHostNumber('');
    setHostName('');
    navigate('/hostpage');
  };
  /*
  const onClick = (event) => {
    const {
      target: { name },
    } = event;
    if (name === 'submit') {
      console.log(target);
    }
  };
*/
  return (
    <>
      <div>
        <h1>호스트 되기</h1>
        <form class="submit" onSubmit={onSubmit}>
          <input
            type="text"
            name="hostName"
            placeholder="호스트 이름을 입력하세요"
            value={hostName}
            onChange={onChange}
            required
          />
          <tr />
          <input
            type="text"
            name="hostNumber"
            placeholder="호스트 연락처를 입력하세요"
            onChange={onChange}
            value={hostNumber}
            required
          />
          <tr />
          <h3>호스트 이용약관</h3>
          <div>
            <h6>세금</h6>
            <ul>
              <li>
                1. 공간공유 호스팅을 통한 수입은 과세 대상 수입으로 간주되며,
                이에따라 각종 세금이 부과될수 있습니다. 호스팅과 관련된 세금 및
                사업자 등록정보를 확인하세요.
              </li>
              <li>
                2. 호스팅 소득의 신고 의무 여부는 국세청에서 확인하시기
                바랍니다. 대금 결제 내역에서 확인하실 수 있습니다.
              </li>
            </ul>
            <h6>계약에 따른 합의 및 허가</h6>
            <ul>
              <li>
                1. 임대차 계약, 부동산 계약, 건물 규정 및 주민회의 규정에서
                재임대나 호스팅을 제한하는 경우가 있습니다. 체결한 계약 내용을
                검토하거나 임대인, 입주자 협의회에 확인해 보시길 바랍니다.
              </li>
              <li>
                2. 임대차/부동산 계약서에 특약을 추가하여 모든 관련 당사자의
                우려사항, 책임과 의무를 명확히 규정할 수 있습니다.
              </li>
            </ul>
            <h6>법규 위반</h6>
            <ul>
              <li>
                호스트는 법규을 위반하는 어떠한 행위를 해서는 안됩니다.
                '홀가분'은 호스트의 법규 위반에 책임지지 않습니다.
              </li>
            </ul>
            <h6>주택담보대출 제한</h6>
            <ul>
              <li>
                주택담보대출(또는 다른 대출)을 이용하고 있는 경우, 재임대나
                호스팅에 대한 제한이 없는지 대출 기관에 확인하시기 바랍니다.
              </li>
            </ul>
            <h6>정부 보조 주택 제한</h6>
            <ul>
              <li>
                정부 보조를 받는 주택의 경우, 허가 없이 이를 재임대하는 행위는
                일반적으로 금지됩니다. 정부 보조 주택에서 거주하고 호스팅에
                관심이 있는 경우, 주택 관리 기관에 문의하시기 바랍니다.
              </li>
            </ul>
            <h6>법규 위반 및 악용</h6>
            <ul>
              <li>
                위반 및 악용에 대한 신고가 있을 경우, '홀가분'은 해당 사용자에
                대한 적절한 조치를 취할 것입니다.
              </li>
            </ul>
            <h6>배상 책임 및 기본 보장</h6>
            <ul>
              <li>
                보험 설계사 또는 보험사에 주택 보험 또는 세입자 보험 약관을
                문의하여 숙소에 대해 적절한 배상 책임 및 대물 피해 배상 관련
                보장이 적용되는지 확인하세요.{' '}
              </li>
            </ul>
            <p>
              홀가분는 호스트의 행위를 통제할 수 없으며, 이에 대해 어떠한 책임도
              없습니다. 호스트가 의무를 지키지 않은 경우, 홀가분 계정이 일시
              중지 또는 비활성화될 수 있습니다.
            </p>
            <label for="Agreement" />
            <input required id="Agreement" type="checkbox" value="Agreement" />
          </div>

          <div class="SignupHost">
            <button name="SpaceAuth">공간 인증하기</button>
            <tr />
            <button name="UserAuth">신원 인증하기</button>
          </div>
          <input type="submit" value={'호스트되기'} name="submit" />
        </form>
      </div>
    </>
  );
};

export default SignupHost;
