import React from "react";

const Page = () => {
    return (
        <div className="container mx-auto py-8 px-4 pt-28">
            {/* About Section */}
            <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                    <img src="/about.jpg" alt="About us" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 lg:pl-8 pt-14 lg:pt-0">
                    <h2 data-translate className="text-3xl font-bold mb-4">
                        About Our Company
                    </h2>
                    <p data-translate className="text-lg leading-relaxed">
                        At Eder, we specialize in providing seamless transportation and logistics solutions tailored to
                        your business needs. With a commitment to reliability, efficiency, and customer satisfaction, we
                        ensure that your goods reach their destination safely and on time, every time. Our dedicated
                        team combines industry expertise with innovative technology to optimize supply chain management.
                        We offer comprehensive services such as freight transport, warehousing, distribution, and
                        customs clearance. Whether shipping locally or globally, Eder is your trusted partner for
                        reliable logistics solutions.
                    </p>
                </div>
            </div>

            {/* Mission Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 pt-8">
                {/* Card 1 - Our Team */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <div className="bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 data-translate className="text-xl font-bold mb-2">
                            Our Team
                        </h3>
                        <p data-translate className="text-lg">
                            Fully trained and highly skilled personnel with expert knowledge work in flexible
                            environments.
                        </p>
                    </div>
                </div>

                {/* Card 2 - CEO */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <div className="bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 data-translate className="text-xl font-bold mb-2">
                            CEO
                        </h3>
                        <p data-translate className="text-lg">
                            Meet CEO Affan Dawood, a logistics expert with 20 years of industry experience.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Warehouses */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 data-translate className="text-xl font-bold mb-2">
                            Warehouses
                        </h3>
                        <p data-translate className="text-lg">
                            A broad network of warehouses worldwide to streamline your solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
