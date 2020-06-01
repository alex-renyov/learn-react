import React, { Fragment, useState } from 'react';

export default function FormComponent() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    alert(`Login: ${login}; password: ${password}`);
  }
  return (
    <Fragment>
      <div>Welcome to form component</div>
      <form>
        <input placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)} /><br/>
        <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button onClick={(e) => { e.preventDefault(); onLogin(); }}>Enter</button>
      </form>
    </Fragment>
  );
}
