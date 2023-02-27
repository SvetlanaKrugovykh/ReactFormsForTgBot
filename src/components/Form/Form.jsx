import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const sendReqToDB = require("../../hooks/toDB");


const Form = () => {
	//const tg = useTelegram();
	
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [PIB, setPIB] = useState('');
  const [contract, setContract] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
		const id = "???????";
		const verificationCode = "??????";
    const data = {
      email,
      password,
      PIB,
      contract,
      address,
			verificationCode,
			id
    };
		sendReqToDB('___UserRegistration__', data);
  };

  // const onSendData = useCallback(() => {
  //       const data = {
  //     email,
  //     password,
  //     PIB,
  //     contract,
  //     address,
  //       }
  //       tg.sendData(JSON.stringify(data));
  //   }, [      email, password, PIB, contract, address,  tg])

  //   useEffect(() => {
  //       tg.onEvent('mainButtonClicked', onSendData)
  //       return () => {
  //           tg.offEvent('mainButtonClicked', onSendData)
  //       }
  //   }, [onSendData, tg])

  //   useEffect(() => {
  //       tg.MainButton.setParams({
  //           text: 'Отправить данные'
  //       })
  //   }, [])

  //    useEffect(() => {
  //        if(!address || !email) {
  //            tg.MainButton.hide();
  //        } else {
  //            tg.MainButton.show();
  //        }
  //    }, [email, password, contract, address, tg.MainButton])

const onChangeEmail = (e) => {
  setEmail(e.target.value);
};

const onChangePassword = (e) => {
  setPassword(e.target.value);
};

const onChangePIB = (e) => {
  setPIB(e.target.value);
};

const onChangeContract = (e) => {
  setContract(e.target.value);
};

const onChangeAddress = (e) => {
  setAddress(e.target.value);
};

	return (
    <div className={'form'}>
      <h3>Введіть ваші дані.</h3>
			<h4>Email є обов'язковим, очікуйте код верифікації на цей Email</h4>
      <form onSubmit={onSubmit}>
        <input
          className={'input'}
          type="text"
          placeholder={'Email (є обов\'язковим)'}
          value={email}
          onChange={onChangeEmail}
        />
        <input
          className={'input'}
          type="password"
          placeholder={'Пароль для подальшого входу на сайт (опціонально)'}
          value={password}
          onChange={onChangePassword}
        />
        <input
          className={'input'}
          type="text"
          placeholder={'ПІБ'}
          value={PIB}
          onChange={onChangePIB}
        />
        <input
          className={'input'}
          type="text"
          placeholder={'Номер Договору'}
          value={contract}
          onChange={onChangeContract}
        />
        <input
          className={'input'}
          type="text"
          placeholder={'Адреса '}
          value={address}
          onChange={onChangeAddress}
        />
        <button className="submit" type="submit">
          Відправити введені дані на сервер
        </button>
      </form>
    </div>
  );
};


export default Form;
