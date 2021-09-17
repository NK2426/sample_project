import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from 'app/shared/footer/footer.module';
import { FixedPluginModule } from 'app/shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { AppRoutes } from 'app/app.routing';
import { AppComponent } from 'app/app.component';
import { AdminLayoutComponent } from 'app/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from 'app/layouts/auth/auth-layout.component';
import { LoginComponent } from 'app/auth/login/login.component';




@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes,{
            useHash: true
        }),
        BrowserAnimationsModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LoginComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }