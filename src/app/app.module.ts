import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { ScreenOneComponent } from './Components/screen-one/screen-one.component';
import { ScreenTwoComponent } from './Components/screen-two/screen-two.component';
import { ScreenThreeComponent } from './Components/screen-three/screen-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ScreenFourComponent } from './Components/screen-four/screen-four.component';



const routes: Routes = [
  { path: 'screen1', component: ScreenOneComponent },
  { path: 'screen2', component: ScreenTwoComponent },
  { path: 'screen4', component: ScreenFourComponent },
  { path: '**', component: ScreenThreeComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    ScreenThreeComponent,
    ScreenFourComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgGridModule,
    FormsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
