import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaneList } from "./cane-list/cane-list";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CaneList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esercizioCanile');
}
