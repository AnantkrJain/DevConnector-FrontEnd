import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    pathMatch: "full",
  },
  {
    path: "admin",
    loadChildren: "./admindashboard/admindashboard.module#AdmindashboardModule",
  },
  {
    path: "vendor",
    loadChildren:
      "./vendordashboard/vendordashboard.module#VendordashboardModule",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
