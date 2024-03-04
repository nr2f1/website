import '@styles/main.scss';
// import './index.scss';

import { getClient } from '@graphql/client';
import {
  GetBoardMembersDocument,
  GetBoardMembersQuery,
} from '@graphql/queries.generated';

export default async function Index() {
  const {
    data: { boardMemberCollection },
  } = await getClient().query<GetBoardMembersQuery>({
    query: GetBoardMembersDocument,
  });

  const boardMembers = boardMemberCollection?.items;

  return (
    <div className="content-wrapper">
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
}
