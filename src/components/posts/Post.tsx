import { ContentPost } from "./(component)/contentPost";
import { FooterPost } from "./(component)/footerPost";
import { Header } from "./(component)/headerPost";
import { samplePosts } from "./data/data";
const Post = () => {
  return (
    <>
      {samplePosts.map((posts) => (
        <div className="flex flex-col w-full h-auto bg-white/30 rounded-sm">
          <Header
            username={posts.username}
            date={posts.date}
            tags={posts.tags}
          ></Header>
          <ContentPost title={posts.title} content={posts.content} />
          <hr className="flex mx-4 my-2 border border-white/30"/>
          <FooterPost/>
        </div>
      ))}
    </>
  );
};
export default Post;
