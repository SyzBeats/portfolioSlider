const modal = document.querySelector<HTMLElement>(".kiel-modalslider");
const modalButtonLeft = document.querySelector<HTMLElement>(".kiel-modalslider_button--left");
const modalButtonRight = document.querySelector<HTMLElement>(".kiel-modalslider_button--right");
const portfolioItems = document.querySelectorAll<HTMLElement>(".kiel-portfolio_item");
const modalImage = document.querySelector<HTMLElement>(".kiel-modalslider_image");
const modalClose = document.querySelector<HTMLElement>(".kiel-modalslider_closeBtn");

const modalName = document.querySelector<HTMLElement>("[data-modalcontent='name']");
const modalOEM = document.querySelector<HTMLElement>("[data-modalcontent='OEM']");
const modalBetreiber = document.querySelector<HTMLElement>("[data-modalcontent='betreiber']");
const modalModel = document.querySelector<HTMLElement>("[data-modalcontent='model']");
const modalCount = document.querySelector<HTMLElement>("[data-modalcontent='count']");
const modalRange = document.querySelector<HTMLElement>("[data-modalcontent='range']");

class ModalContent {
  private name: string;
  private oem: string;
  private betreiber: string;
  private model: string;
  private count: string;
  private range: string;
  private current: number;
  private image: string;

  constructor() {}

  public setValues(dataSet: DOMStringMap): void {
    this.name = dataSet.name;
    this.oem = dataSet.oem;
    this.betreiber = dataSet.betreiber;
    this.model = dataSet.model;
    this.count = dataSet.count;
    this.range = dataSet.range;
    this.image = dataSet.image;
    this.current = parseInt(dataSet.number);
  }

  public updateModal(): void {
    modalName.innerHTML = this.name;
    modalOEM.innerHTML = this.oem;
    modalBetreiber.innerHTML = this.betreiber;
    modalModel.innerHTML = this.model;
    modalCount.innerHTML = this.count;
    modalRange.innerHTML = this.range;
    modalImage.style.backgroundImage = `url(${this.image})`;
  }
  public getCurrent(): number {
    return this.current;
  }
}
//instance
let Content = new ModalContent();

portfolioItems.forEach((element): void => {
  element.addEventListener("click", (): void => {
    modal.classList.add("shown");
    Content.setValues(element.dataset);
    Content.updateModal();
    return;
  });
});

modalButtonLeft.addEventListener("click", (): void => {
  let current: number = Content.getCurrent();
  if (typeof current !== undefined && current > 1) {
    let previous: number = current - 1;
    let nextUp = document.querySelector<HTMLElement>(`[data-number="${previous}"]`);
    if (nextUp) Content.setValues(nextUp.dataset);
    Content.updateModal();
  }
});

modalButtonRight.addEventListener("click", (): void => {
  let current: number = Content.getCurrent();
  if (typeof current !== undefined && current < 15) {
    let next: number = current + 1;
    let nextUp = document.querySelector<HTMLElement>(`[data-number="${next}"]`);
    if (nextUp) Content.setValues(nextUp.dataset);
    Content.updateModal();
  }
});

modalClose.addEventListener("click", (): void => {
  modal.classList.remove("shown");
  return;
});

// Get Data Attributes from elements
