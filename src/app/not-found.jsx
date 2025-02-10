import Link from "next/link";

const PageNotFound= () => {
  return (
    <>
      <main className="flex justify-center h-screen pt-5 bg-slate-300 sm:text-5xl">
        <div className="text-center">
          <h1>Page not found!!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn't finde the page you are looking for
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-slate-400 px-3.5 py-2.5 text-sm font-semibold text-slate-300 shadow-sm hover:bg-slate-600 focus-visible:outline"
            >
              INICIO
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound
