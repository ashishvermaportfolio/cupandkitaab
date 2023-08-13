import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cupkitab';
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYV3gUAJs6_9J1UCCQG7T400u5pgUQizI",
  authDomain: "cup-and-kitaab.firebaseapp.com",
  projectId: "cup-and-kitaab",
  storageBucket: "cup-and-kitaab.appspot.com",
  messagingSenderId: "19930452617",
  appId: "1:19930452617:web:9a3bd20e5d317d948c2c58",
  measurementId: "G-9CT6X8QQ1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);