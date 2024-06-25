// components/Loader.js


const Loader = () => {
    return (
        <div className="loader flex justify-center items-center h-screen text-xl dark:bg-black dark:text-white">
            <style>
                {`
                .loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-size: 1.5rem;
                  }
                `}
            </style>
            {/* Add your loader animation or spinner here */}
          Loading...
        </div>
    );
};

export default Loader;
