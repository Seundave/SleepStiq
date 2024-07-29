import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = () => {
  let num = [1, 2, 3, 4, 5];
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const fetchPosts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = fetchPosts.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const getMedian = (num) => {
    const numbers = num.sort((a, b) => a - b);
    let length = numbers.length;
    let middle = length / 2;
    if (length % 2 !== 0) {
      return numbers[Math.floor(middle)];
    } else {
      return (numbers[middle - 1] + numbers[middle]) / 2;
    }
  };

  console.log(getMedian(num));

  return (
    <div className="px-[30px] py-[130px]">
      {post.length > 0 ? (
        <>
          <h3 className="font-bold mt-10">Posts</h3>
          {post.map((item, index) => (
            <ul key={index}>
              <Link to={`/posts/${item.id}`}>
                <li className="underline">{item.title}</li>
              </Link>
            </ul>
          ))}
        </>
      ) : (
        <p>Fetcing data</p>
      )}
    </div>
  );
};

export default Post;
