import { AVAILABLE_LOCALES, AvailableLocale, english } from '@i18n/locales';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LocaleSelector = () => {
  const [locale, setLocale] = useState<AvailableLocale>(english);
  const router = useRouter();
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    setLocale(locale as AvailableLocale);
  }, [pathname]);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setLocale(value as AvailableLocale);
    router.push(`/${value}/${pathnameWithoutLocale}`);
  };
  return (
    <select value={locale} onChange={handleOnChange}>
      {AVAILABLE_LOCALES.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};

export default LocaleSelector;
