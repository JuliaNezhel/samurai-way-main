import s from "./MyPosts.module.css";
import { Post } from "./post/Post";
import React, { useRef } from "react";
import { MyPostsType } from "../../../redux/profile-reduser";

type MyPostsPropsType = {
  updateNewPostText: any;
  addPost: any;
  myPosts: MyPostsType[];
  newPostText: string;
};

export const MyPosts = (props: MyPostsPropsType) => {
  let postsElement = props.myPosts.map((p) => (
    <Post
      key={p.id}
      message={p.message}
      imgSrc={p.imgSrc}
      likeCount={p.likeCount}
    />
  ));

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  const addPost = () => {
    if (props.newPostText.trim() != '') {
    props.addPost()
    }
  };

  const onPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newPost = e.currentTarget.value;
    props.updateNewPostText(newPost);
  };

  return (
    <div className={s.postsBlok}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostText}
          value={props.newPostText}
        />
      </div>
      <div>
        <button className={s.button} onClick={addPost}>
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
