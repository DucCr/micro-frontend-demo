import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mailbox',
    loadChildren: () =>
      import('mailbox/MailboxModule').then((m) => m.MailboxModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('calendar/CalendarModule').then((m) => m.CalendarModule),
  },
  {
    path: 'request',
    loadChildren: () =>
      import('request/RequestModule').then((m) => m.RequestModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
