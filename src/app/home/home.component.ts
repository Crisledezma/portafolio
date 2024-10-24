import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, NgbNavModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('LedezmaStory') LedezmaStory!: ElementRef;
  @ViewChild('ExperienceSection') ExperienceSection!: ElementRef;
  @ViewChild('ProjectsSection') ProjectsSection!: ElementRef;
  active: string = 'Description';
  highlightedText: boolean = false;

  highlightText(pElement: HTMLElement) {
    this.highlightedText = true;
    pElement.classList.add('expanded-text');
  }

  darkenText(pElement: HTMLElement) {
    this.highlightedText = false;
    pElement.classList.remove('expanded-text');
  }

  scrollToSection(section: string) {
    console.log('ScrollTo', section);
    switch (section) {
      case 'LedezmaStory':
        this.LedezmaStory.nativeElement.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolled to:', section);
        break;
        case 'ExperienceSection':
          this.ExperienceSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
          console.log('Scrolled to:', section);
          break;
          case 'ProjectsSection':
            this.ProjectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolled to:', section);
        break;
    }
  }

}
