import BaseLayout from 'components/layouts/BaseLayout';
import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="SEO Title" description="This is SEO Descrioption tag" />
      <BaseLayout />
    </>
  );
};

export default Home;
