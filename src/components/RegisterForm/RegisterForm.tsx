import style from './RegisterForm.module.scss';
import mobileImg from '../../images/registration-horizontal.png';

export const RegisterForm = () => {
  return (
    <div className={style.RegisterFormContainer}>
      <div className={style.RegisterFormImageContainer}>
        <img
          src={mobileImg}
          alt="iphone 15"
          className={style.RegisterFormImage}
        />
      </div>

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
          <a href="/" className={style.RegisterForm__signIn}> Sign In</a>
        </p>
      </form>
    </div>
  );
};
