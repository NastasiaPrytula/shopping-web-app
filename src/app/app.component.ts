import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'shopping-web-app';
 ngOnInit(){
  AngularFireModule.initializeApp(environment.firebase);
 }
  constructor(private firestore: AngularFirestore) {}
}
