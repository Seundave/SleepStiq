import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDescription = () => {
  const [postDescription, setPostDescription] = useState(null);
  const [comments, setComments] = useState([]);
  const [fetchingPost, setFetchingPost] = useState(false);
  const [fetchingComments, setFetchingComments] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getpostDescription = async () => {
      setFetchingPost(true);
      try {
        const fetchPost = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPostDescription(fetchPost.data);
        setFetchingPost(false);
      } catch (error) {
        setFetchingPost(false);
        console.log(error);
      }
    };
    if (id) {
      getpostDescription();
    }
  }, [id]);

  useEffect(() => {
    const getProductComments = async () => {
      setFetchingComments(true);
      try {
        const fetchComments = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        setComments(fetchComments.data);
        setFetchingComments(false);
      } catch (error) {
        setFetchingComments(false);
        console.log(error);
      }
    };
    if (id) {
      getProductComments();
    }
  }, [id]);

  if (fetchingComments || fetchingPost) {
    return <p>loading...</p>;
  }

  return (
    <div className="px-[30px] py-[130px]">
      <h2 className="font-bold text-[24px] text-center">
        {postDescription?.title}
      </h2>
      <p className="body">{postDescription?.body}</p>
      <div className="comments">
        <h3 className="font-bold mt-10">Comments</h3>
        {comments.length > 0 ? (
          <>
            {comments?.map((item, index) => (
              <div className="px-5 mb-2" key={index}>
                <p className="font-bold underline">By: {item?.name}</p>
                <p>{item?.email}</p>
                <p>{item?.body}</p>
              </div>
            ))}
          </>
        ) : (
          <p>No comment</p>
        )}
      </div>
    </div>
  );
};

export default PostDescription;
