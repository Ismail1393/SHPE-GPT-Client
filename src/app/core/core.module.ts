import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShpeToolbarComponent } from './components/shpe-toolbar/shpe-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LinkedinBarComponent } from './components/linkedin-bar/linkedin-bar.component';
import { MindComponent } from './components/mind/mind.component';

@NgModule({
  declarations: [ShpeToolbarComponent, LinkedinBarComponent, MindComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    // AuthModule.forRoot({
    //   domain: environment.AUTH0_DOMAIN,
    //   clientId: environment.AUTH0_CLIENT_ID,
    //   authorizationParams: {
    //     redirect_uri: environment.AUTH0_REDIRECT_URI,
    //     // audience: environment.AUTH0_AUDIENCE,
    //     scope: 'openid profile email',
    //   },
    //   cacheLocation: 'localstorage',
    // }),
  ],
  providers: [],

  exports: [ShpeToolbarComponent, LinkedinBarComponent, MindComponent],
})
export class CoreModule {}
