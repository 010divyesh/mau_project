"use client";
import { useTranslations } from "next-intl";

export default function Guidelines() {

  const t = useTranslations('Index.Guidelines')

    return (
      <div className="container">
        <h5 className="fw-bold text-center my-3">{t('heading')}</h5>
        <ol className="list-group list-group-numbered my-2">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_1')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_2')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_3')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_4')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_5')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_6')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_7')}</div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_8')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_9')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_10')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_11')}</div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_12')}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_13')}</div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            {t('step_14')}</div>
          </li>
        </ol>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckChecked"
            // defaultChecked=""
          />
          <label className="form-check-label fw-bold" htmlFor="flexCheckChecked">
            I Agree
          </label>
        </div>
        <div className="d-flex justify-content-end my-2">
          <input className="btn btn-primary" type="button" value="Next"></input>
        </div>
      </div>
    );
  }