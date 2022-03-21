import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloEuropeComponent } from './hello-europe/hello-europe.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloCountryComponent } from './hello-country/hello-country.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { ExampleResolver } from './example.resolver';
import { HelloCountryDetailsComponent } from './hello-country-details/hello-country-details.component';
import { HelloCountryFormComponent } from './hello-country-form/hello-country-form.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'world',
    component: HelloWorldComponent,
    // canActivate: [AdminGuardGuard],
  },
  {
    path: 'europe',
    component: HelloEuropeComponent,
  },
  {
    path: 'europe/:id',
    component: HelloCountryComponent,
    // resolve: {
    //   x: ExampleResolver,
    // },
    children: [
      {
        path: 'form',
        component: HelloCountryFormComponent,
      },
      {
        path: 'details',
        component: HelloCountryDetailsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'europe',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'europe',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloEuropeComponent,
    HelloCountryComponent,
    HelloCountryDetailsComponent,
    HelloCountryFormComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
