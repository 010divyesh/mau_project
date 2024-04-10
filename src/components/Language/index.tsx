"use client"
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Lang() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}/Guidelines`); // Update the route based on the language
    });
  };

  return (
    <>
      <div className="background-container">
        <h4 className="fw-bold text-center my-3">
        Please select your language
        </h4>
        <div className="d-flex justify-content-around">
          <div>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => onSelectChange('en')}>
            ENGLISH
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => onSelectChange('hi')}>
            HINDI
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => onSelectChange('mh')}>
            MARATHI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
