import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../redux/features/authSlice";
import { handleModalMenu } from "../../redux/features/menuSlice";

const InfoUser = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.value.userData);

  const handleLogoutUser = () => {
    dispatch(handleLogout());
    dispatch(handleModalMenu(false));

    const html = document.querySelector("html");
    html.classList.add("overflow-y-hidden");
  };
  return (
    <section className="mx-[2rem] p-3 flex gap-4 border-[0.005rem] rounded-xl dark:border-cd600 border-cl600">
      <img src={userData.image} className="h-12 w-12 rounded-full" alt="" />
      <div>
        <h1 className="font-semibold px-2 text-center rounded-lg bg-cd700">
          {userData.username}
        </h1>
        <button
          onClick={() => handleLogoutUser()}
          className="text-sm px-1 rounded-md "
        >
          Log out
        </button>
      </div>
    </section>
  );
};

export default InfoUser;
