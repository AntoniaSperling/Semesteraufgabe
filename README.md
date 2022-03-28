## Allgemeine Informationen

Der Dienstplaner ist eine Webapp, die für alle gedacht ist, die ihre Dienste übersichtlich in einer Tabelle speichern wollen.
So behält man leicht den Überblick und muss sich nicht mehr mit Excel-Tabellen herumschlagen. Die Dienste haben immer eine Funktion, eine Stunden Anzahl, ein Datum und eine Anfangs- und Endezeit.

Um den Dienstplaner nutzen zu können, musst du dich zuerst registrieren und deine Daten eingeben. Danach kannst du dich einloggen.
Nachdem du dich eingeloggt hast, kannst du auf die Dienstübersicht zugreifen. 
Dort werden dir alle eingetragenen Dienste angezeigt. Du kannst Dienste hinzufügen und löschen. 
Sollte sich etwas an deinem Plan ändern ist es auch kein Problem, denn du kannst die Dienste auch ganz leicht bearbeiten.

![image](https://user-images.githubusercontent.com/82514219/160459267-8ffaa7f7-7781-40f4-935d-5d156537cd74.png)

![image](https://user-images.githubusercontent.com/82514219/160459395-b24da2bb-03af-471e-8656-cc95fc1bfe22.png)

## Installation

###### Kurze Anleitung

Als Erstest sollte man sich das Git Repository clonen und sich eine Mongo DB Datenbank installieren.

```
git clone https://github.com/AntoniaSperling/Semesteraufgabe.git
```

Dann kann das Backend im Terminal im Ordner "backend" gestartet werden mit 

```
npm run watch
```

Als leztes muss noch das Frontend gestartet werden. Dazu navigiert man mit einem neuen Terminal zu dem Frontend Ordner und gibt den folgenen Befehl ein:

```
ng serve (optional) -o
```
