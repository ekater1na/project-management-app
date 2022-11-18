import { useTranslation } from 'react-i18next';
import './ErrorPage.scss';

export function Error() {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center justify-content-center app-container">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">{t('error-main')}</span>
        </p>
        <p className="lead">{t('error-description')}</p>
        <a href="/" className="btn btn-primary">
          {t('error-button')}
        </a>
      </div>
    </div>
  );
}
