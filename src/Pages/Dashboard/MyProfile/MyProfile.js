import React from 'react';
import myimg from "../../../Images/myimg.jpg"
const MyProfile = () => {

    return (
        <div >
            <div className="grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-5 px-12 lg:my-12">
                <div className="lg:row-span-2 row-span-1">
                    <div>
                        <div className="avatar pb-12 pt-4">
                            <div className="w-48  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={myimg} />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold ">
                            <span className="text-primary">Name:</span> Rifat Mahmud Rakib
                        </h2>
                        <p>
                            Email:{" "}
                            <a href="mailto:123abunaem@gmail.com">mdrifatmahmudrakib@gmail.com</a>
                        </p>
                        <p>
                            Phone: <a href="tel:+8801948389446">+8801948389446</a>
                        </p>
                    </div>
                </div>
                <div className="lg:row-span-2 lg:col-span-2 lg:px-12">
                    <p>
                        I am <span className="font-bold text-primary">Rifat Mahmud</span>
                    </p>
                    <p>
                        A Web Developer located in Dhaka, Bangladesh. Working as a Professional Full stack Web developer and completed over 50 web projects worldwide. I am looking to take on more work and to increase my skills as a Web Developer.
                    </p>
                    <div className="py-2">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-secondary dark:text-white">
                                HTML
                            </span>
                            <span className="text-sm font-medium text-secondary dark:text-white">
                                98%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: "98%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-secondary dark:text-white">
                                CSS
                            </span>
                            <span className="text-sm font-medium text-secondary dark:text-white">
                                95%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-secondary h-2.5 rounded-full"
                                style={{ width: "95%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-secondary dark:text-white">
                                JAVASCRIPT
                            </span>
                            <span className="text-sm font-medium text-secondary dark:text-white">
                                90%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-secondary dark:text-white">
                                REACT
                            </span>
                            <span className="text-sm font-medium text-secondary dark:text-white">
                                85%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-secondary h-2.5 rounded-full"
                                style={{ width: "85%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-secondary dark:text-white">
                                WORDPRESS
                            </span>
                            <span className="text-sm font-medium text-secondary dark:text-white">
                                98%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: "99%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;