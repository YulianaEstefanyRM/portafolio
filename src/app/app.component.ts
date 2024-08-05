import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estefany';
  @ViewChild('cursor') cursor!: ElementRef<HTMLDivElement>;

  constructor(private el: ElementRef) {}

  // Método para mover el cursor
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursorElement = this.cursor.nativeElement;
    cursorElement.style.left = `${event.pageX}px`;
    cursorElement.style.top = `${event.pageY}px`;
  }

  // Cambia el tamaño del cursor al pasar sobre un botón
  onButtonHover(hover: boolean) {
    const cursorElement = this.cursor.nativeElement;
    cursorElement.style.transform = hover ? 'scale(1.5)' : 'scale(1)';
    cursorElement.style.backgroundColor = hover ? '#333' : 'transparent'; // Cambia el color
  }

}
