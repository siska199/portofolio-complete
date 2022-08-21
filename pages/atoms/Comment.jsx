import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-[3.5rem] h-[3.5rem] border-2 dark:border-cd300 border-cl300 rounded-full"
        src={data?.user?.image}
        alt=""
      />
      <div className="">
        <h1 className="font-bold text-md">{data?.user?.username}</h1>
        <p className="font-thin text-sm text-cl300 dark:text-cd300">
          {data?.body}
        </p>
      </div>
    </div>
  );
};

export default Comment;
