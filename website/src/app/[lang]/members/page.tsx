import DonateButton from '@components/widgets/button';
import { getClient } from '@graphql/client';
import {
  GetBoardMembersDocument,
  type GetBoardMembersQuery,
} from '@graphql/queries/board-members/index.generated';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  const { query } = getClient();

  const {
    data: { boardMemberCollection },
  } = await query<GetBoardMembersQuery>({
    query: GetBoardMembersDocument,
    variables: {
      locale: lang,
    },
  });

  const boardMembers = boardMemberCollection?.items;
  return (
    <div className="content-wrapper">
      <DonateButton />
      <h1>Board members</h1>

      {boardMembers?.map((member) => {
        if (!member) return null;
        return (
          <section key={member?.name}>
            <img src={member?.picture?.url ?? ''} alt={member?.name ?? ''} />
            <h2>{member.name}</h2>
            <p>{member?.title}</p>
            <p>{member?.position}</p>
            <p>{member?.email}</p>
            {member?.bio?.split('\n').map((paragraph) => (
              <p key={Math.random() * 1000}>{paragraph}</p>
            ))}
          </section>
        );
      })}
    </div>
  );
};

export default Page;
