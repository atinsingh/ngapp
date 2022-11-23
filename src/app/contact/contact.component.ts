import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  processForm(fdata: any) {
    console.log(JSON.stringify(fdata.value))
  }
}
