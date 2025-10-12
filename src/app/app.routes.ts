import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { RegisterPage } from './pages/register-page/register-page';
import { NavBarLeftLayout } from './layouts/nav-bar-left-layout/nav-bar-left-layout';
import { GroupListPage } from './pages/group-list-page/group-list-page';
import { onlyUserGuard } from './guards/only-user-guard';
import { onlyPublicGuard } from './guards/only-public-guard';
import { NewEditContactPage } from './pages/new-edit-contact-page/new-edit-contact-page';

export const routes: Routes = [

    {
        path: "login",
        component: LoginPage,
        canActivate: [onlyPublicGuard]
    },

    {
        path: "register",
        component: RegisterPage,
        canActivate: [onlyPublicGuard]

    },
    {
        path: "",
        component: NavBarLeftLayout,
        canActivate: [onlyUserGuard],
        children: [
            {
                // Path vacío se abre cuando la pagina no tiene url más que localhost
                path: "",
                component: ContactListPage,
            },
            {
                path: "add",
                component: NewEditContactPage
            },
            {
                path: ":idContact/details",
                component: ContactDetailsPage
            },
            {
                path: ":idContact/edit",
                component: NewEditContactPage
            },
            {
                path: "groups",
                component: GroupListPage
            }
        ]
    },
];
