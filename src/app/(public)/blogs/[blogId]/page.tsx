export default async function BlogIdPage({
  params
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;

  return (
    <>
      <div className="">params: {String(blogId)}</div>

      <div className="flex flex-col">
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
