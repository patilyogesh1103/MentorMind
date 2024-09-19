import React from 'react';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import Footer from './Footer';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen pt-20">
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg dark:bg-slate-800 dark:text-white bg-white text-black p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-2xl text-left">
                            Contact Us
                        </h1><br />
                        <div>
                            <label className="mt-3">Name :</label><br />
                            <input
                                type="text"
                                placeholder="Please enter your name"
                                className="w-full mt-2 bg-slate-100 dark:border-white dark:bg-slate-800 border rounded-md border-black p-2"
                                {...register('name', { required: "This field is required" })}
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="mt-8">
                            <label className="mt-3">Email :</label><br />
                            <input
                                type="email"
                                placeholder="Please enter your email"
                                className="w-full mt-2 bg-slate-100 dark:border-white dark:bg-slate-800 border rounded-md border-black p-2"
                                {...register('email', { required: "This field is required" })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="mt-8">
                            <label className="mt-3">Opinion :</label><br />
                            <textarea
                                placeholder="Please enter your opinion"
                                className="w-full mt-2 bg-slate-100 dark:border-white dark:bg-slate-800 border rounded-md border-black p-2"
                                {...register('Message', { required: "This field is required" })}
                            />
                            {errors.Message && <span className="text-red-500">{errors.Message.message}</span>}
                        </div>
                        <div className="mt-10">
                            <button type="submit"
                                className="text-semibold bg-pink-500 text-white rounded-md hover:bg-pink-700 px-3 py-1">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
