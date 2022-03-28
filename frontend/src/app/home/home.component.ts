import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Allgemeines', cols: 1, rows: 1, content: 'Der Dienstplaner ist dazu gedacht seine Dienste übersichtlich in einer Tabelle zu speichern. So behält man leicht den Überblick und muss sich nicht mehr mit Excel-Tabellen herumschlagen. Registrieren Sie sich und entdecken sie den Dienstplaner!'},
          { title: 'Funktionen', cols: 1, rows: 1, content: 'Nachdem Sie sich eingeloggt haben, haben Sie den Zugriff auf die Dienstübersicht. Dort werden Ihnen alle eingetragenen Dienste angezeigt. Sie können Dienste hinzufügen und löschen. Sollte sich etwas an Ihrem Plan ändern ist es auch kein Problem, denn Sie können die Dienste auch ganz leicht bearbeiten.' }
          /**{ title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }*/
        ];
      }

      return [
        { title: 'Allgemeines', cols: 1, rows: 1 , content: 'Der Dienstplaner ist dazu gedacht seine Dienste übersichtlich in einer Tabelle zu speichern. So behält man leicht den Überblick und muss sich nicht mehr mit Excel-Tabellen herumschlagen. Registrieren Sie sich und entdecken sie den Dienstplaner!'},
        { title: 'Funktionen', cols: 1, rows: 1 , content: 'Nachdem Sie sich eingeloggt haben, haben Sie den Zugriff auf die Dienstübersicht. Dort werden Ihnen alle eingetragenen Dienste angezeigt. Sie können Dienste hinzufügen und löschen. Sollte sich etwas an Ihrem Plan ändern ist es auch kein Problem, denn Sie können die Dienste auch ganz leicht bearbeiten.'}
        /**{ title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }*/
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
