import { useEffect, useState } from 'react';

export const CheckoutPaydPage = () => {
  const [showModal] = useState(true);
  const history: string[] = [];

  function HomeButton() {
    useEffect(() => {
      const timer = setTimeout(() => {
        history.push('/phones');
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return null;
  }

  return (
    <div className="">
      {showModal && (
        <div className="modal">
          <p>Ваше замовлення успішно оформлено!</p>
          <HomeButton />
        </div>
      )}
    </div>
  );
};
