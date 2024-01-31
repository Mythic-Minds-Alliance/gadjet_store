import style from './RegistrationPage.module.scss';
import { RegisterForm } from '../../components/RegisterForm';

export const RegistrationPage = () => {
  return (
    <div className={style.RegistrationPage}>
      <RegisterForm />
    </div>
  );
};
