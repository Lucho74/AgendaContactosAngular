import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { RegisterPage } from './pages/register-page/register-page';
import { NotLoggedLayout } from './layouts/not-logged-layout/not-logged-layout';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';

export const routes: Routes = [
    
    {
        path:"login",
        component: LoginPage
    },
    {
        path:"register",
        component: RegisterPage
    },
    {
        path:"",
        component: LoggedLayout,
        children: [
            {
                // Path vacío se abre cuando la pagina no tiene url más que localhost
                path:"a",
                component: ContactListPage
            },
            {
                path:"contacts/:id",
                component: ContactDetailsPage
            },
        ]
    },
];
