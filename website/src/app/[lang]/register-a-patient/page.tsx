import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return <h1>Register patient {lang}</h1>;
};

export default Page;
