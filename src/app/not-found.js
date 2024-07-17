import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center gap-4 flex-col items-center h-screen text-xl dark:bg-black dark:text-white">
            <h2 className="text-3xl">Not Found... Coming Soon</h2>
            <Link className=" bg-black text-white px-4 py-2 rounded-md dark:bg-white dark:text-black" href="/">
                Return Home
            </Link>
        </div>
    );
}
////
//new
