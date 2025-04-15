import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component'; // 👈 make sure this path is correct
@Component({
  selector: 'ecom-root',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, NavbarComponent,FooterComponent], // ✅ Add FontAwesomeModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // fixed typo: 'styleUrl' ➡️ 'styleUrls'
})

export class AppComponent  implements OnInit{
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  ngOnInit(): void {
    this.initFontAwesome();
  }
  

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
