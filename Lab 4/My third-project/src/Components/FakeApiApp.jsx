import { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

 
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const response = await fetch(URL);
    const apiData = await response.json();
     const limitedData = apiData.slice();
    setData(limitedData);
    setIsLoading(false);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const postToAdd = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body
    };
    setData([postToAdd, ...data]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div>
      <h1>Fake API App</h1>
      
     
      <PostForm 
        newPost={newPost}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      
      
      
      
      {isLoading && <h1>Loading...</h1>}
      <PostsContainer posts={data} />
      
     
     
    </div>
  );
}