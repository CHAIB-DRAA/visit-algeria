'use client'
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();

    const changeLanguage = (locale) => {
        const currentPath = router.asPath || ''; // Vérifiez que asPath n'est pas undefined

        // Construit correctement l'URL en ajoutant le locale
        router.push(`/${locale}${currentPath}`);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
        </div>
    );
}
