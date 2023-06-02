import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { GrInstagram, GrFacebook } from 'react-icons/gr';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    alert('NOT IMPLEMENTED');
  };

  return (
    <div className="bg-custom-primary font-mono text-custom-secondary flex flex-col px-10">
      <div className="flex justify-around py-10">
        <Image src="/logo-safir-white.svg" height={120} width={250} />
      </div>
      <div className="flex">
        <div className="w-2/3 justify-around items-center flex bg-gray-500">
          <div>
            <h3 className="text-3xl pb-5">Prijavi se i prati novosti!</h3>
            <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
              <input
                className="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                aria-label="Vaše ime"
                name="fields[first_name]"
                placeholder="Vaše ime"
                type="text"
                onChange={handleNameChange}
                value={name}
                required
              />
              <input
                aria-label="Vaša email adresa"
                name="email_address"
                placeholder="Vaša email adresa"
                required
                type="email"
                onChange={handleEmailChange}
                value={email}
                className="text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
              <button className="font-serif text-3xl" type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-4xl  pb-3">Zapratite nas</h3>
            <ul className="flex space-x-5">
              <li>
                <a className="text-4xl" href="www.google.com">
                  <GrInstagram />
                </a>
              </li>
              <li>
                <a className="text-4xl" href="www.google.com">
                  <GrFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 bg-gray-500">
          <div className="flex flex-col items-center pt-8">
            <h3 className="font-serif text-4xl pb-3">Kontakt</h3>
            <a className="text-lg" href="tel:0038124552745">
              Telefon: 024/ 552 - 745
            </a>
          </div>
          <div className="flex flex-col items-center pt-8">
            <h3 className="font-serif text-4xl  pb-3">Lokacija</h3>
            <address className="text-lg">
              Posetite nas na, <br />
              Dimitrija Tucovica 4<br />
              24000 Subotica <br />
            </address>
          </div>
          <div className="flex flex-col items-center pt-8">
            <h3 className="font-serif text-4xl pb-3">Radno vreme</h3>
            <p className="text-lg">9:00-19:00</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-10">
        <Image src="/assets/svgs/love.svg" height={150} width={150} />
        <Image src="/assets/svgs/wedding-rings.svg" height={150} width={150} />
        <Image src="/assets/svgs/hvala.svg" height={200} width={200} />
        <Image
          src="/assets/svgs/earth-environment.svg"
          height={150}
          width={150}
        />
        <Image src="/assets/svgs/jewelry-fits.svg" height={200} width={200} />
      </div>
      <div className="flex justify-center">
        <p>©2022, Zlatara Safir</p>
      </div>
    </div>
  );
};

export default Footer;
