import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
  exports: [RouterModule] 
})
export class AppRoutingModule { }
