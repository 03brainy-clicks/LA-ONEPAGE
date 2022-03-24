import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { CountComponent } from './main/count/count.component';
import { AboutVideoComponent } from './main/about-video/about-video.component';
import { ClientComponent } from './main/client/client.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { ServicesComponent } from './main/services/services.component';
import { CtaComponent } from './main/cta/cta.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { TeamComponent } from './main/team/team.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { FaqComponent } from './main/faq/faq.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    MainComponent,
    AboutComponent,
    CountComponent,
    AboutVideoComponent,
    ClientComponent,
    TestimonialsComponent,
    ServicesComponent,
    CtaComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
