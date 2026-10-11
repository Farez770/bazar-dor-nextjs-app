const LoadingPage = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-base-300 bg-base-100 p-8 text-center shadow-lg">
        <span className="loading loading-spinner loading-lg text-success"></span>
        <h2 className="mt-5 text-xl font-semibold">পণ্যের তথ্য লোড হচ্ছে...</h2>
        <p className="mt-2 text-sm text-base-content/60">
          অনুগ্রহ করে একটু অপেক্ষা করুন। আমরা আপনার জন্য পণ্যের তথ্য নিয়ে আসছি।
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
