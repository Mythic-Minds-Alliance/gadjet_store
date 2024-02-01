import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './LoginForm.module.scss';
import { scrollToTop } from '../../utils/helpers';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [, setIsLogged] = useState(false);

  const handleLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      storedUserData
        && formData.email === storedUserData.email
        && formData.password === storedUserData.password
    ) {
      // console.log('Login success');
      setIsLogged(true);
    } else {
      // console.log('Login failed');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      action="#"
      method="post"
      className={style.LoginForm}
      onSubmit={handleLogin}
    >
      <h2 className={style.LoginForm__title}>Log In</h2>

      <div className={style.LoginForm__item}>
        <label htmlFor="email" className={style.LoginForm__label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className={style.LoginForm__input}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className={style.LoginForm__item}>
        <label htmlFor="password" className={style.LoginForm__label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className={style.LoginForm__input}
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className={style.LoginForm__submitBtn}>
        Log In
      </button>

      <p className={style.LoginForm__haveAnAcc}>
        Do not have an account yet?
        <Link
          to="/account/register"
          className={style.LoginForm__register}
          onClick={scrollToTop}
        >
          Register
        </Link>
      </p>
    </form>
  );
};
