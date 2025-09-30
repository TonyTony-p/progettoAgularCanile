import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaneList } from "./cane-list/cane-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CaneList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esercizioCanile');
}
