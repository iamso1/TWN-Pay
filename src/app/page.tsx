export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-8 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Next.js 16
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">TWN-Pay</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          專案已完成初始化，可以開始建立付款服務。
        </p>
      </section>
    </main>
  );
}
