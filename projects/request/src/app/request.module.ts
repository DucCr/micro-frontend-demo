import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { REQUEST_ROUTES } from './app.routes';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [RequestComponent],

  imports: [CommonModule, RouterModule.forChild(REQUEST_ROUTES)],

  providers: [],
})
export class RequestModule {}
