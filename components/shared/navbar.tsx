import Image from 'next/image';
import Link from 'next/link';
import { CiUser, CiSearch, CiHeart, CiShoppingBasket } from 'react-icons/ci';

const navList = [
  {
    displayName: 'Proizvodi',
    route: '/products',
  },
  {
    displayName: 'Nova kolekcija',
    route: '/new-collections',
  },
  {
    displayName: 'Shop',
    route: '/shop',
  },
  {
    displayName: 'Blog',
    route: '/blog',
  },
  {
    displayName: 'O nama',
    route: '/about',
  },
];

const NavBar = () => {
  return (
    <header className="border-t ">
      <div className="flex justify-between items-center px-10">
        <div>
          <Link href="/">
            <Image src="/logo-safir.svg" alt="logo" height={120} width={250} />
          </Link>
        </div>
        <div>
          <ul className="flex font-mono space-x-20">
            {navList.map((item) => (
              <li>
                <a
                  href={item.route}
                  className="text-black font-semibold text-2xl"
                >
                  {item.displayName}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-9 text-3xl pr-3">
            <li>
              <Link href="/">
                <CiUser />
              </Link>
            </li>
            <li>
              <Link href="/">
                <CiSearch />
              </Link>
            </li>
            <li>
              <Link href="/">
                <CiHeart />
              </Link>
            </li>
            <li>
              <Link href="/">
                <CiShoppingBasket />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
