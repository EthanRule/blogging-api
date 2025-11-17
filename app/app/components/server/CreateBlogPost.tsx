export default async function CreateBlogPost({ input }: any) {
  const handleClick = async () => {
    try {
      const res = await fetch(`create-blog-post`);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="p-2 bg-zinc-400 hover:bg-zinc-600 border border-zinc-200"
    >
      Create Post
    </button>
  );
}
