import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { LeistungsPaketDisplayComponent } from './leistungs-paket-display/leistungs-paket-display.component';
import { LeistungsPaketPageComponent } from './leistungs-paket-page/leistungs-paket-page.component';
import { AbrechnungFormComponent } from './abrechnung-form/abrechnung-form.component';
import { AbrechnungKkComponent } from './abrechnung-kk/abrechnung-kk.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeistungsPaketDisplayComponent,
    LeistungsPaketPageComponent,
    AbrechnungFormComponent,
    AbrechnungKkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
