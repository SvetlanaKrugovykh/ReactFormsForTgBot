import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [PIB, setPIB] = useState('');
  const [contract, setContract] = useState('');
  const [address, setAddress] = useState('');
	const { onToggleButton, tg } = useTelegram();

	const onSendData = useCallback(() => {
    const data = {
      email,
      password,
      PIB,
      contract,
      address
      }
      tg.sendData(JSON.stringify(data));
}, [email, password,  PIB,  contract,  address, tg])

 useEffect(() => {
    if (tg && tg.onEvent) {
      tg.onEvent('mainButtonClicked', onSendData);
      return () => {
        tg.offEvent('mainButtonClicked', onSendData);
      };
    }
  }, [onSendData, tg]);

  useEffect(() => {
    if (tg && tg.MainButton) {
      tg.MainButton.setParams({
        text: 'Отправить данные',
      });
    }
  }, [tg]);

  useEffect(() => {
    if (tg && tg.MainButton) {
      if (!address || !email) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
  }, [email, password, PIB, contract, address, tg]);

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
				{/* <button 
				className={'submit'}
				onClick={onToggleButton}
				> Відправити інформацію на сервер </button> */}

    </div>
  );
};


export default Form;
