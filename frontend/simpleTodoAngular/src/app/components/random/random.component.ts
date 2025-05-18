import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  // οι μεταβλητές που χρειάζομαι. τις αρχικοποιώ για να μην έχω ΝαΝ
  userInput: number = 0
  min: number = 0
  max: number = 100
  // αυτήν θα την καλέσω στη html με {{}} γιατί είναι το αποτέλεσμά μου
  randomNum: number = 100
  temp: number | null = null

  generateRandomNum = () => {
    // αν η max μικροτερη απο min τις κάνω swap
    if (this.max < this.min) {
      this.temp = this.max
      this.max = this.min
      this.min = this.temp
    }
    this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  }
  /*
  Σε react αυτο θα γραφόταν (με useState) 

  const handleMinChange = (e) => {
    setMin(Number(e.target.value));
  };
  
  η παράξενη συνταξη είναι γιατί η ts θέλει type asertion. 
  By default, TypeScript thinks event.target is just a generic "EventTarget" (could be any element)
  We're telling TypeScript: "No, trust me, this is specifically an HTML input element"
  */
  onMinInput(event: Event) {
    this.min = Number((<HTMLInputElement>event.target).value);
  }

  onMaxInput(event: Event) {
    this.max = Number((<HTMLInputElement>event.target).value);
  }
}
