// export default function Loading() {
//   return (
//     <div className="py-10 text-center">
//       ক্যাটাগরির পণ্য লোড হচ্ছে...
//       <span className="loading loading-spinner text-success"></span>
//     </div>
//   );
// }

export default function Loading() {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-2xl border border-green-100 bg-white p-8 shadow-sm">
      <div className="flex w-full max-w-sm md:max-w-md flex-col items-center gap-5 rounded-xl bg-green-50/70 p-8">
        <span className="loading loading-spinner loading-lg text-success"></span>
        <h2 className="text-center text-2xl font-semibold text-gray-700">
          ক্যাটাগরির পণ্য লোড হচ্ছে...
        </h2>
        <p className="mt-2 text-lg text-base-content/60 text-center">
          অনুগ্রহ করে একটু অপেক্ষা করুন। আমরা আপনার জন্য পণ্যের তথ্য নিয়ে আসছি।
        </p>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-green-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-green-500"></div>
        </div>
      </div>
    </div>
  );
}
