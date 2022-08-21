import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import Modal from "../layouts/Modal";
import AddComment from "../atoms/AddComment";
import Comment from "../atoms/Comment";
import {
  handleGetProjects,
  handleModalComments,
} from "../../redux/features/projectSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const dataComments = useSelector((state) => state.project.value.dataComments);
  const handleCloseComments = () => {
    dispatch(handleModalComments(false));
    dispatch(handleGetProjects());
    const html = document.querySelector("html");
    html.classList.remove("overflow-y-hidden");
  };

  return (
    <Modal type="comments" showModal={true}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] lg:w-[60rem] min-h-full bg-cl900 dark:bg-cd900 p-5"
      >
        <div
          onClick={() => handleCloseComments()}
          className="absolute -top-3 -right-3 cursor-pointer text-[1.5rem] bg-cl700 dark:bg-cd700 rounded-full p-1"
        >
          <MdClose />
        </div>
        <h1 className="text-center font-bold text-[2rem] md:text-[3rem]">
          {dataComments.title}
        </h1>
        <div className="w-[90%] mx-auto justify-center items-center mt-[3rem] ">
          <AddComment />
          <div className="flex flex-col mt-5 gap-3 max-h-[20rem] overflow-y-scroll">
            {dataComments.comments.map((data, i) => (
              <Comment data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Comments;
