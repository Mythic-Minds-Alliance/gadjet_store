import { Link } from 'react-router-dom';
import style from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <form
      action="#"
      method="post"
      className={style.LoginForm}
    >
      <h2 className={style.LoginForm__title}>Log In</h2>

      <div className={style.LoginForm__item}>
        <label
          htmlFor="email"
          className={style.LoginForm__label}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className={style.LoginForm__input}
        />
      </div>

      <div className={style.LoginForm__item}>

        <label
          htmlFor="password"
          className={style.LoginForm__label}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className={style.LoginForm__input}
        />
      </div>

      <button
        type="submit"
        className={style.LoginForm__submitBtn}
      >
        Log In
      </button>

      <p className={style.LoginForm__haveAnAcc}>
        Do not have an account yet?
        <Link
          to="/account/register"
          className={style.LoginForm__register}
        >
          Register
        </Link>
      </p>
    </form>
  );
};
