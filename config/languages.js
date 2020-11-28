module.exports = {
    ukr: {
        landing: {
            title: 'Благодійність - понад усе',
            subtitle: 'Найкраща платформа благодійності для усіх милосердних та великодушних',
        },
        form: {
            title: 'Зробити внесок',
            titleAdmin: 'Новий проєкт',
            validation: {
                email: "Електронна пошта є обов'язковим полем",
                donation: "Розмір коштів є обов'язковим полем",
            },
            labels: {
                email: 'Вкажіть Вашу пошту',
                password: 'Введіть суму внеску, USD',
                name: 'Назва проєкту',
                description: 'Вкажіть опис проєкту',
            },
            smalls: {
                email: 'Ми ніколи не будемо ділитися Вашою поштою з кимось іншим.',
                name: 'Ця назва буде показуватись Вашим клієнтам',
            },
            confirm: 'Надіслати кошти',
            approve: 'Підтвердити заявку',
            create: 'Опублікувати проєкт',
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
            emptyApplications: 'Ще не було зареєстровано жодної нової заявки!',
            more: 'Детальніше...',
            less: 'Згорнути опис...',
            remove: 'Видалити проєкт',
        },
        about: {
            more: 'Дізнатись більше',
            title: 'Ще не з нами?',
            motivation: 'Допомогай успішним проєктам ставати ще кращими!',
            text:
                'На ринку України, та за її теренами, ми допомагаємо найкращим проєктам вже 13 років! Можливо ти хочеш долучитись до їхньої підтримки?',
        },
        admin: {
            application: {
                title: 'Мої нові заявки',
                button: 'Перейти',
            },
            project: {
                title: 'Усі проєкти',
                button: 'Перейти',
            },
        },
    },
    eng: {
        landing: {
            title: 'Charity - is above all',
            subtitle: 'The best charity platform for all the merciful and generous',
        },
        form: {
            title: 'Donate',
            titleAdmin: 'New project',
            validation: {
                email: 'E-mail is a required field',
                donation: 'Donation size is a required field',
            },
            labels: {
                email: 'E-mail',
                password: 'Input donation amounts, USD',
                name: 'Name of the project',
                description: 'Enter the project description',
            },
            smalls: {
                email: "We' ll never share your email with anyone else.",
                name: 'This naming will be shown to your clients',
            },
            confirm: 'Make donation',
            approve: 'Approve application',
            create: 'Publish project',
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
            emptyApplications: 'There are no new applications registered yet!',
            more: 'Read more...',
            less: 'Hide...',
            remove: 'Remove project',
            myApplications: 'My applications',
        },
        about: {
            more: 'Learn more',
            title: 'Not with us yet?',
            motivation: 'Help successful projects become even better!',
            text:
                'In the market of Ukraine, and abroad, we have been helping the best projects for 13 years! Maybe you want to join their support?',
        },
        admin: {
            application: {
                title: 'My new applications',
                button: 'Redirect',
            },
            project: {
                title: 'All Projects',
                button: 'Redirect',
            },
        },
    },
};
