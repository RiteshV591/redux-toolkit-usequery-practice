import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

export const MutateData = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation((newPost) =>
    axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
  );

  const handleSubmit = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Submitting..</span>;
  }

  if (mutation.isError) {
    return <span>Error occured</span>;
  }

  if (mutation.isSuccess) {
    return <span>Post Submitted..!!</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />

      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="body"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
