import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow" />
      <Footer />
    </div>
  );
};

export default BaseLayout;
