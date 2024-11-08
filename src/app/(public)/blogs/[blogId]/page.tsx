// import { fetch } from '@/shared/utils/fetch';

// export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
//   const blogPosts = await fetch('/api/blog-posts');
//   return { props: { blogPosts } };
// };

// ./src/pages/[id].tsx
import { getProduct } from '@/shared/utils/fetch';

// export const getServerSideProps: GetServerSideProps<TBlogProps> = async () => {
//   const id = ctx.query.id;
//   const post = await fetch(`/api/blog-posts/${id}`);

//   return { props: { post } };
// };

export default async function BlogIdPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  const product = await getProduct(`/api/client/products/${blogId}`);

  return (
    <>
      <div className="">params: {String(blogId)}</div>

      <div className="flex flex-col">
        <span className="text-lg font-bold">{product.name}</span>
        <span className="text-muted-foreground">{product.description}</span>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </>
  );
}
