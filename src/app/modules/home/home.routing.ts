
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { homeComponent } from './home.component';
import { GuardHomeGuard } from 'src/app/services/guard-home.guard';

const routes: Routes = [
  
    { path: '', component: homeComponent, canActivate:[GuardHomeGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeRoutingModule { }