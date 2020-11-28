module.exports = {
    ukr: {
        landing: {
            title: 'Благодійність - понад усе',
            subtitle: 'Найкраща платформа благодійності для усіх милосердних та великодушних',
        },
        form: {
            title: 'Зробити внесок',
            validation: {
                email: "Електронна пошта є обов'язковим полем",
                donation: "Розмір коштів є обов'язковим полем",
            },
            labels: {
                email: 'Вкажіть Вашу пошту',
                password: 'Введіть суму внеску, USD',
            },
            smalls: {
                email: 'Ми ніколи не будемо ділитися Вашою поштою з кимось іншим.',
            },
            confirm: 'Надіслати кошти',
        },
        navbar: {
            title: 'Крута Благодійність',
            components: [
                {
                    title: 'Домашня сторінка',
                    href: '/',
                },
                {
                    title: 'Наші проєкти',
                    href: '/projects',
                },
                {
                    title: 'Про нас',
                    href: '/about',
                },
            ],
            languages: [
                {
                    title: 'Українська',
                    href: '/ukr',
                    lang: 'ukr',
                },
                {
                    title: 'Англійська',
                    href: '/eng',
                    lang: 'eng',
                },
            ],
        },
        projects: {
            empty: 'Ще не було зареєстровано жодного проєкту!',
            more: 'Детальніше...',
            less: 'Згорнути опис...',
        },
        about: {
            more: 'Дізнатись більше',
            title: 'Ще не з нами?',
            motivation: 'Допомогай успішним проєктам ставати ще кращими!',
            text:
                'На ринку України, та за її теренами, ми допомагаємо найкращим проєктам вже 13 років! Можливо ти хочеш долучитись до їхньої підтримки?',
        },
    },
    eng: {
        landing: {
            title: 'Charity - is above all',
            subtitle: 'The best charity platform for all the merciful and generous',
        },
        form: {
            title: 'Donate',
            validation: {
                email: 'E-mail is a required field',
                donation: 'Donation size is a required field',
            },
            labels: {
                email: 'E-mail',
                password: 'Input donation amounts, USD',
            },
            smalls: {
                email: "We' ll never share your email with anyone else.",
            },
            confirm: 'Make donation',
        },
        navbar: {
            title: 'Cool Charity',
            components: [
                {
                    title: 'Home',
                    href: '/',
                },
                {
                    title: 'Our projects',
                    href: '/projects',
                },
                {
                    title: 'About us',
                    href: '/about',
                },
            ],
            languages: [
                {
                    title: 'Ukrainian',
                    href: '/ukr',
                    lang: 'ukr',
                },
                {
                    title: 'English',
                    href: '/eng',
                    lang: 'eng',
                },
            ],
        },
        projects: {
            empty: 'There are no projects registered yet!',
            more: 'Read more...',
            less: 'Hide...',
        },
        about: {
            more: 'Learn more',
            title: 'Not with us yet?',
            motivation: 'Help successful projects become even better!',
            text:
                'In the market of Ukraine, and abroad, we have been helping the best projects for 13 years! Maybe you want to join their support?',
        },
    },
};
