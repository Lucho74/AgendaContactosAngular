import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { RegisterPage } from './pages/register-page/register-page';
import { NavBarTopLayout } from './layouts/nav-bar-top-layout/nav-bar-top-layout';
import { NavBarLeftLayout } from './layouts/nav-bar-left-layout/nav-bar-left-layout';
import { GroupListPage } from './pages/group-list-page/group-list-page';
import { onlyUserGuard } from './guards/only-user-guard';
import { onlyPublicGuard } from './guards/only-public-guard';

export const routes: Routes = [
    
    {
        path:"login",
        component: LoginPage,
        canActivate: [onlyPublicGuard]
    },
    {
        path:"register",
        component: RegisterPage,
        canActivate: [onlyPublicGuard]

    },
    {
        path:"",
        component: NavBarTopLayout,
        canActivateChild: [onlyUserGuard],
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
