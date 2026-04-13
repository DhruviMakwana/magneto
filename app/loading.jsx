import Image from "next/image";

export default function Loading() {
  return (
    <main className="page-loader" aria-busy="true" aria-live="polite">
      <div className="page-loader__panel">
        <div className="page-loader__logo-wrap">
          <Image
            src="/download.gif"
            alt="Magneto Mall"
            width={220}
            height={220}
            unoptimized
            priority
            className="page-loader__logo"
          />
        </div>
      </div>
    </main>
  );
}
