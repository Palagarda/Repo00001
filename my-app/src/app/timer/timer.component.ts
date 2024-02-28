import { Component, effect, signal } from '@angular/core';
import { time } from 'console';
 
@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = signal(new Date())
 
  constructor(){
   
    effect((onCleanup) => {
      const handle = setInterval(() => this.time.set(new Date()),10000)
      onCleanup(() => {
        clearInterval(handle)
      });
    })
  }
 
}