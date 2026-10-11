import Image from "next/image";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import notFoundImg from "@/assets/notFoundimg.png";
const EmptyState = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4 pb-12 pt-6 text-center">
      <Image
        src={notFoundImg}
        alt="not found image"
        width={480}
        height={500}
        className="rounded-2xl"
      />

      {/* <p className="mb-2 text-7xl font-extrabold text-green-600">404</p> */}

      <h2 className=" mt-4 mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
        দুঃখিত! আপনার পণ্যটি খুঁজে পাওয়া যায়নি
      </h2>

      <p className="mb-7 max-w-lg text-gray-500">
        এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই, অথবা আপনি যে লিংকটি ব্যবহার
        করেছেন সেটি সঠিক নয়।
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        <FiHome size={20} />
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default EmptyState;
