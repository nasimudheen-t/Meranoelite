// components/products/products-loading.tsx

export function ProductsLoading() {
  return (
    <div className="min-h-screen bg-[#050505] pb-32">
      {/* HERO */}
      <div className="h-[300px] animate-pulse bg-gradient-to-b from-white/5 to-transparent" />

      <div className="mx-auto mt-10 max-w-[1450px] px-6 md:px-10">
        {/* SEARCH */}
        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-8">
          <div className="h-12 w-[320px] animate-pulse rounded-xl bg-white/10" />

          <div className="h-6 w-40 animate-pulse rounded bg-white/10" />
        </div>

        <div className="flex gap-10">
          {/* SIDEBAR */}
          <div className="w-[260px] rounded-3xl border border-white/10 p-6">
            <div className="mb-6 h-6 w-32 animate-pulse rounded bg-white/10" />

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="mb-4 h-12 animate-pulse rounded-xl bg-white/10"
              />
            ))}
          </div>

          {/* PRODUCTS */}
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]"
              >
                {/* IMAGE */}
                <div className="h-[320px] animate-pulse bg-white/10" />

                {/* CONTENT */}
                <div className="p-6">
                  <div className="mb-4 h-8 w-3/4 animate-pulse rounded bg-white/10" />

                  <div className="mb-2 h-4 w-full animate-pulse rounded bg-white/10" />

                  <div className="mb-6 h-4 w-2/3 animate-pulse rounded bg-white/10" />

                  <div className="h-10 w-24 animate-pulse rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}