export default class Liker {
  constructor(container) {
    this.container = container || document.body;
    this.animationNames = ['i', 'ii', 'iii', 'iiii'];
    this.likerContainer = document.querySelector('.liker-container');
    this.button = document.querySelector('.liker-btn');
  }

  getName() {
    return this.animationNames[Math.floor(Math.random() * this.animationNames.length)];
  }

  start() {
    this.button.addEventListener('click', () => {
      this.likerContainer.insertAdjacentHTML('beforeend', '<div class="heart"></div>');
      const heart = document.querySelector('.heart');
      heart.style.animationName = this.getName();
      heart.addEventListener('animationend', () => {
        [...document.querySelectorAll('.heart')].forEach((element) => element.remove());
      });
    });
  }
}
