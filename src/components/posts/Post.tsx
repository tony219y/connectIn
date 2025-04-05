import { useEffect, useState } from "react";
import { ContentPost } from "./(components)/contentPost";
import { FooterPost } from "./(components)/footerPost";
import { Header } from "./(components)/headerPost";
import { getPosts } from "@/hooks/usePost";
import { useUser } from "@/contexts/UserContext";

const Post = () => {
  const [postData, setPostData] = useState<any>([]);
  const { user } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await getPosts();
        setPostData(postResponse);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const thaiTime = date.toLocaleString("en-EN", {
      timeZone: "Asia/Bangkok",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return thaiTime;

  }
  return (
    <>
      {postData.map((posts: any) => (
        <div key={posts.id} className="flex flex-col w-full h-auto bg-white/30 rounded-sm">
          <Header
            postId={posts.id}
            username={posts.username}
            date={formatDate(posts.updatedAt)}
            tags={posts.tags}
            postFor={posts.postFor}
          />
          <ContentPost title={posts.title} content={posts.content} />
          <hr className="flex mx-4 my-2 border border-white/30"/>
          <FooterPost/>
        </div>
      ))}
    </>
  );
};
export default Post;