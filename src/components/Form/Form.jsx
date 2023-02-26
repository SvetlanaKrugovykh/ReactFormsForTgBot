import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
	console.log('Form');
	//const tg = useTelegram();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [PIB, setPIB] = useState('');
  const [contract, setContract] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
			PIB,
      contract,
      address,
    };
    console.log(data); // or you can send the data to the server here
  };


  // const onSendData = useCallback(() => {
  //       const data = {
  //           email,
	// 					password,
	// 					contract,
  //           address,
  //           subject
  //       }
  //       tg.sendData(JSON.stringify(data));
  //   }, [email, password, contract, address, subject, tg])

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

  //   useEffect(() => {
  //       if(!address || !email) {
  //           tg.MainButton.hide();
  //       } else {
  //           tg.MainButton.show();
  //       }
  //   }, [email, password, contract, address, tg.MainButton])

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

    // const onChangeSubject = (e) => {
    //     setSubject(e.target.value)
    // }

  return (
    <div className={'form'}>
      <h3>Введіть ваші дані.</h3>
			<h4>Email є обов'язковим, очикуйте код веріфікації на цей Email </h4>
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
        <button className={'submit'} type="submit">
          Отправить данные
        </button>
      </form>
    </div>
  );
};


export default Form;
