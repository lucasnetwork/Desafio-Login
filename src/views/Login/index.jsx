import Container from './styles';

import Button from '../../components/Button/';
import Input from '../../components/Input/';

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleForm(e) {
    e.preventDefault();

    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);
    return;
  }
  return (
    <Container error={error}>
      <span className="trapezoid"></span>
      <div>
        <form>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="EMAIL"
          />
          <Input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="SENHA"
          />
          <Button onClick={handleForm} value="FAZER LOGIN">
            FAZER LOGIN
          </Button>
        </form>
      </div>
      <span className="error">Email ou senha inválidos</span>
      <span className="span"></span>
    </Container>
  );
};

export default Login;
