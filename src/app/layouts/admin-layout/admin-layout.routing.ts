import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AuthenticateGuard } from 'app/authenticate.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', canActivate : [AuthenticateGuard], component: DashboardComponent },
    { path: 'user-profile', canActivate : [AuthenticateGuard], component: UserProfileComponent },
    { path: 'table-list', canActivate : [AuthenticateGuard], component: TableListComponent },
    { path: 'typography', canActivate : [AuthenticateGuard], component: TypographyComponent },
    { path: 'icons', canActivate : [AuthenticateGuard], component: IconsComponent },
    { path: 'maps', canActivate : [AuthenticateGuard], component: MapsComponent },
    { path: 'notifications', canActivate : [AuthenticateGuard], component: NotificationsComponent },
    { path: 'upgrade', canActivate : [AuthenticateGuard], component: UpgradeComponent },
];
