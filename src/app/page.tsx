import Banner, { ErrorBanner } from "@/components/banner";
import Image from "next/image";
import Script from "next/script";
import { use } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <Image
            height={100}
            width={150}
            alt="Your Company"
            src="/logo.svg"
            className="h-24"
          />

          {params["success"] === "true" && <Banner />}
          {params["error"] === "true" && <ErrorBanner />}
          <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Cada minuto cuenta
          </h1>
          <p className="my-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Organiza y optimiza fácilmente los horarios de tu equipo, controla
            el tiempo de trabajo y mantén todo bajo control, todo desde una
            plataforma intuitiva. te ayudamos ayuda a aprovechar cada minuto.
          </p>

          <form
            action="/api/waitlist"
            method="post"
            className="w-full mb-4 max-w-md lg:col-span-5 lg:pt-2"
          >
            <div className="flex flex-col gap-y-4">
              <label htmlFor="phone" className="sr-only">
                Numero Celular
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Numero Celular"
                autoComplete="tel"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C2A2C] sm:text-sm/6"
              />
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Correo electrónico"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C2A2C] sm:text-sm/6"
              />

              <div
                id="cf-turnstile"
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              ></div>
              <button
                type="submit"
                className="flex-none rounded-md bg-[#2C2A2C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2C2A2C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar a la beta
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                alt="App screenshot"
                src="/screenshot.png"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
