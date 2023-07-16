import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
  return (
    <div className="w-full h-screen text-[#fff] absolute top-0 z-50 bg-[#000]">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-[60px]">Please try again - 404</h1>
      </div>
    </div>
  );
}
