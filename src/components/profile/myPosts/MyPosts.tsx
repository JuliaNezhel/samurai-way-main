import s from "./MyPosts.module.css";
import { Post } from "./post/Post";
import React from "react";
import { MyPostsType } from "../../../redux/profile-reducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormControls";

type MyPostsPropsType = {
  addPost: (newPost: string) => void;
  myPosts: MyPostsType[];
};

type FormDataType = {
  newPostMessage: string;
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

  const addPost = (values: FormDataType) => {
    props.addPost(values.newPostMessage);
  };

  // const onPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   let newPost = e.currentTarget.value;
  //   props.updateNewPostText(newPost);
  // };

  return (
    <div className={s.postsBlok}>
      <h3>My posts</h3>
      <div>New post</div>
      <AddNewPostReduxForm onSubmit={addPost} />
      {/* <div>
        <textarea
          ref={newPostElement}
          onChange={onPostText}
          value={props.newPostText}
        />
      </div> */}
      {/* <div>
        <button className={s.button} onClick={addPost}>
          Add post
        </button>
      </div> */}
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
  const maxLengthCreator30 = maxLengthCreator(30);
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="add post"
        name="newPostText"
        component={TextArea}
        validate={[required, maxLengthCreator30]}
      />
      <div>
        <button className={s.button}>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm<FormDataType>({
  form: "profileNewPostForm",
})(AddNewPostForm);
