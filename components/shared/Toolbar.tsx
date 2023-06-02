import { TfiInstagram, TfiFacebook } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import TypewritingBox from './TypewritingBox';

const Toolbar = () => {
  const [message, setMessage] = useState('Dobrodošli na sajt Zlatare Safir');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hvala na poverenju.');
      setTimeout(() => {
        setMessage('Trenutna cena zlata je: 53.251,9€ - kg');
      }, 4000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-between px-3 pt-5 pb-3">
      <div className="cursor-pointer font-mono text-xl font-bold">
        <TypewritingBox message={message} />
      </div>
      <div>
        <ul className="flex space-x-5 text-xl">
          <li className="hover:animate-spin">
            <a href="tel:00381628663981">
              <BsTelephone />
            </a>
          </li>
          <li className="hover:animate-spin">
            <a href="https://www.instagram.com/brkovifolk/">
              <TfiInstagram />
            </a>
          </li>
          <li className="hover:animate-spin">
            <a href="https://www.instagram.com/brkovifolk/">
              <TfiFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
