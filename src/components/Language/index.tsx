"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import "./style.css";

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
    <main>
      <div className="background-container">
        <h4 className="fw-bold text-center pt-2">
          Please select your language
        </h4>
        <div className="d-flex justify-content-around">
          <div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onSelectChange("en")}
            >
              ENGLISH
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onSelectChange("hi")}
            >
              हिंदी
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onSelectChange("mh")}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
