import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { NavBarTopLayout } from './layouts/nav-bar-top-layout/nav-bar-top-layout';
import { NavBarLeftLayout } from './layouts/nav-bar-left-layout/nav-bar-left-layout';
import { GroupListPage } from './pages/group-list-page/group-list-page';

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
        component: NavBarTopLayout,
        children: [
            {
                path:"",
                component: NavBarLeftLayout,
                children: [
                    {
                        // Path vacío se abre cuando la pagina no tiene url más que localhost
                        path:"",
                        component: ContactListPage
                    },
                    {
                        path:"contacts/:id",
                        component: ContactDetailsPage
                    },
                    {
                        path:"groups",
                        component: GroupListPage
                    }
                ]
            }
        ]
    },
];
