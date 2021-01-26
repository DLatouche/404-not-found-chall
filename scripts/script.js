let observer = new IntersectionObserver(
  (observables) => {
    observables.forEach((observable) => {
      console.log("script.js -> 4: observable", observable.target.classList);
      if (observable.intersectionRatio > 0.5) {
        observable.target.classList.remove("enter-right-a");
        observable.target.classList.remove("enter-left-a");
        observer.unobserve(observable.target);
      }
    });
  },
  {
    threshold: [0.5],
  }
);

let enterLeft = document.querySelectorAll(".enter-left");
let enterRight = document.querySelectorAll(".enter-right");

enterLeft.forEach((item) => {
  item.classList.add("enter-left-a");
  observer.observe(item);
});

enterRight.forEach((item) => {
  item.classList.add("enter-right-a");
  observer.observe(item);
});
