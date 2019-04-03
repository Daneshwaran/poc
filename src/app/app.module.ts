import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NewFormComponent } from './new-form/new-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DispFormComponent } from './disp-form/disp-form.component';
import { MyRequestViewComponent } from './my-request-view/my-request-view.component';
import { SubstitutionComponent } from './substitution/substitution.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SPService } from './services/sp.service';
import {   HttpClientModule } from '@angular/common/http';
const appRoutes = [
  { path: 'home', component: HomeComponent,data:{title:"Home"} },
  { path: 'new-form', component: NewFormComponent,data:{title:"New Form"} },
  { path: '*', redirectTo: '/home',pathMatch: 'full' },
  { path: 'index.aspx', redirectTo: '/home',pathMatch: 'full' },
  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: 'edit-form', component: EditFormComponent,data:{title:"Edit Form"}  },
  { path: 'disp-form', component: DispFormComponent,data:{title:"Display Form"}  },
  { path: 'my-request-view', component: MyRequestViewComponent,data:{title:"My Request View"} },
  { path: 'substitution', component: SubstitutionComponent, data:{title:"Substitution"}  },
  { path: 'search', component: SearchComponent,data:{title:"Search"}  },
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
    ConfigurationsComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    MaterialModule,
    
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [SPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
