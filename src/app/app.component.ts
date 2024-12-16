import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faFacebookF, 
  faXTwitter, 
  faLinkedinIn, 
  faPinterestP, 
  faWeibo 
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent,FontAwesomeModule  ]
})
export class AppComponent {
  constructor(library: FaIconLibrary){
    library.addIcons(faFacebookF, faXTwitter, faLinkedinIn, faPinterestP, faWeibo);

  }
  title = 'PoxyFlexFlooring';
}
