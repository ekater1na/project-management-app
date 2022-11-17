import { useTranslation } from 'react-i18next';
import './ErrorPage.scss';

export function Error() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <p className="text">{t('error')}((</p>
    </div>
  );
}
