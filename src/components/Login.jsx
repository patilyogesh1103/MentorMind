import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      ...data,
      email: data.email,
      password: data.password,
    };

    axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();

          reset({
            email: "",
            password: "",
          });

          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            navigate('/');
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      });
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
    navigate('/');
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" onClick={handleClickOutside}>
        <div className="modal-box relative dark:bg-slate-800 dark:text-white bg-slate-100 shadow-lg text-black max-w-lg w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg dark:text-white text-black">Login</h3>
            <div className="mt-3 dark:text-white text-black">
              <label htmlFor="email ">Email</label>
              <br />
              <input
                id="email"
                type="email"
                placeholder="Enter your Email here"
                className="w-full outline-none border px-3 py-2 rounded-md dark:bg-slate-700 bg-slate-300"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                type="password"
                placeholder="Enter your password here"
                className="w-full outline-none border px-3 py-2 rounded-md"
                {...register("password", { required: "This field is required" })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              <br />
              <div className="flex justify-between mt-3 items-center">
                <button type="submit" className="bg-pink-500 rounded-md hover:bg-pink-700 text-white px-3 py-2">
                  Login
                </button>
                <p>Not registered?{" "}
                  <Link to="/signup" className="underline cursor-pointer text-blue-400 hover:text-blue-600">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
