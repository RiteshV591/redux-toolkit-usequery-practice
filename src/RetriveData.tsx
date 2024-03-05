import axios from "axios";
import { useQuery } from "react-query";

type post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const retrivePost = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data;
};

export const RetriveData = () => {
  const { data: posts, error, isLoading } = useQuery("postData", retrivePost);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>Some error has occured : </div>;

  return (
    <ul>
      {posts.map((post: post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
