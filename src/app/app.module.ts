import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { StyleComponent } from './style/style.component';
import { MyNgForComponent } from './my-ng-for/my-ng-for.component';
import { DeomFormComponent } from './deom-form/deom-form.component';
import { MyformBuilderComponent } from './myform-builder/myform-builder.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { WatchingChangeComponent } from './watching-change/watching-change.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

import { YoutubeServiceService } from './youtube-service.service';
import { YouTubeSearchComponentComponent } from './you-tube-search-component/you-tube-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    StyleComponent,
    MyNgForComponent,
    DeomFormComponent,
    MyformBuilderComponent,
    FormValidationComponent,
    WatchingChangeComponent,
    NgModelComponent,
    SimpleHttpComponent,
    YouTubeSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ YoutubeServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
