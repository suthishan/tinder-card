import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards;

  constructor() {
    this.cards = [];
  }

  loadTinderCards() {
    this.cards = [
      {
        img: "https://i.pinimg.com/originals/51/fe/18/51fe180cc453fccbf05652ad051b4803.jpg",
        title: "Demo card 1",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://static.toiimg.com/thumb/msid-71581763,imgsize-259859,width-800,height-600,resizemode-75/71581763.jpg",
        title: "Demo card 2",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/3513-12-Models-who-turned-Bollywood-actresses.jpg",
        title: "Demo card 3",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://pepnewz.com/wp-content/uploads/shraddha-kapoor-2880x1800-4k-actress-bollywood-1144.jpg",
        title: "Demo card 4",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://m.media-amazon.com/images/M/MV5BMjMwZjhjOTUtNmVjNS00NTM1LWEwOTItN2ZlMzMwMGY5ZGQ2XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
        title: "Demo card 5",
        description: "This is a demo for Tinder like swipe cards"
      }
    ]
  };

}
