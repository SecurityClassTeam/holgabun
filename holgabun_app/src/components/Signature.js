import React, { useEffect, useState } from 'react';
import SignaturePad from 'signature_pad';
import { storageService } from '../fBase';
import { v4 as uuidv4 } from 'uuid';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from 'firebase/storage';

let sigPad = null;

const Signature = ({ userObj }) => {
  const [sigPadData, setSigPadData] = useState(null);

  useEffect(() => {
    sigPad = new SignaturePad(document.querySelector('canvas'));
    setSigPadData(sigPad.toDataURL());
  }, []);
  /*
  const convertDataUrlToFile = (name) => {
    const decodedURL = sigPadData.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(decodedURL, 'base64');
    const blob = new Blob([buf], { type: 'image/png' });
    return new File([blob], `${name}.png`, { type: 'image/png' });
  };
  */

  const handleRestSignature = () => {
    sigPad.clear();
    setSigPadData();
  };
  /*
  const saveSign = () => {
    //`${userObj.uid}`
    const signImg = convertDataUrlToFile(`${userObj.uid}`);
      //파일 경로 참조 만들기
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      //storage 참조 경로로 파일 업로드 하기
      uploadBytes(fileRef, signImg).then((snapshot) => {
        console.log("Upload")
      })
      //const response = uploadString(fileRef, attachment, 'data_url');
      //console.log(uploadFile);
      //storage에 있는 파일URL로 다운로드 받기
      //attachmentUrl = getDownloadURL(response.ref);

  }
  */
  const saveSign = () => { 
    //firebase에 서명 업로드
    console.log(sigPadData);
    const fileRef = ref(storageService, 'hello/sign');
    uploadString(fileRef, sigPadData).then((snapshot) => {
      console.log('Upload');
    });
  };

  return (
    <div className="Signature">
      <canvas
        width={300}
        height={325}
        style={{ border: '1px solid #cdcdcd' }}
      />
      <button onClick={handleRestSignature}>리셋</button>
      <button type="button" onClick={saveSign}>
        서명 저장
      </button>
    </div>
  );
};

export default Signature;
