import { Link } from 'react-router-dom';
import style from './RegisterForm.module.scss';
import { scrollToTop } from '../../utils/helpers';

export const RegisterForm = () => {
  return (
    <form
      action="#"
      method="post"
      className={style.RegisterForm}
    >
      <h2 className={style.RegisterForm__title}>Register</h2>

      <div className={style.RegisterForm__item}>
        <label
          htmlFor="firstName"
          className={style.RegisterForm__label}
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          required
          className={style.RegisterForm__input}
        />
      </div>

      <div className={style.RegisterForm__item}>
        <label
          htmlFor="surname"
          className={style.RegisterForm__label}
        >
          Surname:
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          required
          placeholder="Enter your surname"
          className={style.RegisterForm__input}
        />
      </div>

      <div className={style.RegisterForm__item}>
        <label
          htmlFor="email"
          className={style.RegisterForm__label}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className={style.RegisterForm__input}
        />
      </div>

      <div className={style.RegisterForm__item}>

        <label
          htmlFor="password"
          className={style.RegisterForm__label}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className={style.RegisterForm__input}
        />
      </div>

      <div className={style.RegisterForm__item}>

        <label
          htmlFor="repeatPassword"
          className={style.RegisterForm__label}
        >
          Repeat Password:
        </label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder="Repeat your password"
          required
          className={style.RegisterForm__input}
        />
      </div>

      <button
        type="submit"
        className={style.RegisterForm__submitBtn}
      >
        Register
      </button>

      <p className={style.RegisterForm__haveAnAcc}>
        Already have an account?
        <Link
          to="/account/login"
          onClick={scrollToTop}
          className={style.RegisterForm__signIn}
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};
