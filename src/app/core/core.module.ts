import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, MatIconModule, MatMenuModule],
  exports: [HeaderComponent, FooterComponent, HomeComponent],
})
export class CoreModule {}
