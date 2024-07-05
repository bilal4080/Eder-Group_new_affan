"use client";
import React, {useState} from "react";
import axios from "axios";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        let errors = {};
        if (!email) {
            errors.email = "Email is required";
        }
        if (!subject) {
            errors.subject = "Subject is required";
        }
        if (!message) {
            errors.message = "Message is required";
        }

        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post("/api/send_email", {
                    email,
                    subject,
                    message,
                });

                if (response.status === 200) {
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setStatus("success");
                } else {
                    console.error("Unexpected response:", response);
                    setStatus("error");
                }
            } catch (error) {
                console.error("Error sending email:", error);
                setStatus("error");
            }
        } else {
            setErrors(errors);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 pt-10">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Do you have a technical issue? Want to give feedback on a beta feature? Need details on our business
                    plan? Let us know.
                </p>
                {status === "success" && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md mb-4">
                        Email sent successfully!
                    </div>
                )}
                {status === "error" && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
                        Error sending email. Please try again later.
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                                errors.email ? "border-red-500" : ""
                            }`}
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                                errors.subject ? "border-red-500" : ""
                            }`}
                            placeholder="Let us know how we can help you"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                errors.message ? "border-red-500" : ""
                            }`}
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm bg-black font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
