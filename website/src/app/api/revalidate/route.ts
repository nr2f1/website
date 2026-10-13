import { revalidateTag } from 'next/cache';

const SECRET_HEADER = 'x-revalidate-secret';

// Contentful calls this on every publish and unpublish (webhook configured
// in Contentful > Settings > Webhooks with the secret as a custom header).
// Every Contentful read is tagged 'contentful' (see graphql/client.ts), so
// one call expires every CMS-backed page; each page re-renders on its next
// request. `{ expire: 0 }` is what the Next.js docs prescribe for webhooks:
// stale content is never served after a publish.
export async function POST(request: Request) {
  const secret = process.env.CONTENTFUL_REVALIDATE_SECRET;

  if (!secret) {
    return Response.json(
      { message: 'CONTENTFUL_REVALIDATE_SECRET is not configured' },
      { status: 500 },
    );
  }

  if (request.headers.get(SECRET_HEADER) !== secret) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidateTag('contentful', { expire: 0 });

  return Response.json({ now: Date.now(), revalidated: true });
}
