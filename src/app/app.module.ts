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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const appRoutes = [
  { path: 'new-form', component: NewFormComponent,data:{title:"New Form"} },
  { path: 'edit-form', component: EditFormComponent,data:{title:"Edit Form"}  },
  { path: 'disp-form', component: DispFormComponent,data:{title:"Display Form"}  },
  { path: 'my-request-view', component: MyRequestViewComponent,data:{title:"My Request View"} },
  { path: 'substitution', component: SubstitutionComponent, data:{title:"Substitution"}  },
  { path: 'analytics', component: AnalyticsComponent,data:{title:"Analytics"}  },
  { path: 'configurations', component: ConfigurationsComponent,data:{title:"Configuration"}  },
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
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
