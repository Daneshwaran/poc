;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewFormComponent } from './new-form/new-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DispFormComponent } from './disp-form/disp-form.component';
import { MyRequestViewComponent } from './my-request-view/my-request-view.component';
import { SubstitutionComponent } from './substitution/substitution.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
const appRoutes = [
  { path: 'new-form', component: NewFormComponent },
  { path: 'edit-form', component: EditFormComponent  },
  { path: 'disp-form', component: DispFormComponent  },
  { path: 'my-request-view', component: MyRequestViewComponent },
  { path: 'substitution', component: SubstitutionComponent  },
  { path: 'analytics', component: AnalyticsComponent  },
  { path: 'configurations', component: ConfigurationsComponent  },
];
@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    EditFormComponent,
    DispFormComponent,
    MyRequestViewComponent,
    SubstitutionComponent,
    AnalyticsComponent,
    ConfigurationsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
