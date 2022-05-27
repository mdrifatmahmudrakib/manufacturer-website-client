import React from 'react';

const Contact = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YdrKRwY/battery.jpg)' }}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <div class="card-body">
                    <h1 className="text-primary text-xl font-bold text-center">Your Comment </h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Email "
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-bold">Message</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your Comment Here.. "
                            class="input input-bordered py-10"
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn bg-primary border-none text-white font-bold">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;