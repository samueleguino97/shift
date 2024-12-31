import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon
            aria-hidden="true"
            className="size-5 text-green-400"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Gracias por tu registro! Estaremos en contacto contigo pronto.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ErrorBanner() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="size-5 text-red-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">
            Hubo un error, intenta nuevamente.
          </p>
        </div>
      </div>
    </div>
  );
}
