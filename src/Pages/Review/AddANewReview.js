import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const AddANewReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        swal({
            title: "Awesome!",
            text: "Thanks for your feedback",
            icon: "success",
            button: "OK",
        });

        const url = `https://mighty-beach-10745.herokuapp.com/review`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };
    return (
        <div className="flex mx-auto">
            <form
                className="sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl p-6 rounded-lg"
                id="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-xl">Add Your Review Here Please </h1>


                <input className="hidden" value={user?.photoURL || "https://api.lorem.space/image/face?hash=64318"} {...register("img")} alt="img" name="img" {...register("img")} />

                <input
                    type="text"
                    name="name"
                    value={user?.displayName}
                    placeholder={user?.displayName}
                    className="input input-bordered w-full mt-3"
                    {...register("name")}
                />

                <input
                    type="text"
                    name="email"
                    value={user?.email}
                    placeholder={user?.email}
                    className="input input-bordered w-full my-6"
                    {...register("email")}
                />

                <select
                    name="rating"
                    className="input w-full input-bordered"
                    {...register("rating")}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Type your feedback"
                    className="textarea textarea-bordered w-full my-4"
                    {...register("reviewTitle")}
                />
                <input
                    type="submit"
                    value="Add Review"
                    className="btn btn-primary w-full text-white"
                />
            </form>
        </div>
    );
};

export default AddANewReview;