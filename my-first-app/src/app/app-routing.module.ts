import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserProfileComponent, canActivate: [AuthGuardService]},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
