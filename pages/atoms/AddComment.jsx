import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModalAuth } from "../../redux/features/authSlice";
import { handleAddComment } from "../../redux/features/projectSlice";

const AddComment = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.value.token);
  const commentRef = useRef(null);

  const handleSubmitByPressEnter = (e) => {
    if (e.key == "Enter") {
      console.log("test");
      e.preventDefault();
      handleAddCommentProject();
    }
  };
  const handleAddCommentProject = (e) => {
    e && e.preventDefault();
    token
      ? dispatch(handleAddComment({ body: commentRef.current.value })).then(
          () => {
            commentRef.current.value = "";
          }
        )
      : dispatch(handleModalAuth("login"));
  };
  return (
    <form className="flex flex-col w-ful gap-2">
      <textarea
        onKeyDown={(e) => handleSubmitByPressEnter(e)}
        ref={commentRef}
        className="l outline-none bg-transparent border-[0.005rem] border-cl700 dark:border-cd700 p-3"
        rows={2}
        placeholder="Add Comment"
      ></textarea>
      <button
        onClick={(e) => handleAddCommentProject(e)}
        className="bg-cl800 dark:bg-cd800 hover:bg-cl700 hover:dark:bg-cd700 w-[7rem] md:w-[10rem] py-2 text-[0.8rem] md:text-sm font-thin ml-auto"
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
