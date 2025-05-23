/* Inspired from the famous sakura.js repo https://github.com/jhammann/sakura
I added some functionalities that allows the user to control fall-speed, max-size, min-size and delay rate.
*/

export function initializeSakura() {
  class Sakura {
      constructor(selector, options) {
          if (typeof selector === 'undefined') {
              throw new Error('No selector present. Define an element.');
          }

          this.el = document.querySelector(selector);

          const defaults = {
              className: 'sakura',
              fallSpeed: parseFloat(this.el.getAttribute('fall-speed')) || 1,
              maxSize: parseInt(this.el.getAttribute('max-size')) || 14,
              minSize: parseInt(this.el.getAttribute('min-size')) || 10,
              delay: parseInt(this.el.getAttribute('delay')) || 300,
              colors: [{
                  gradientColorStart: 'rgba(255, 183, 197, 0.9)',
                  gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
                  gradientColorDegree: 120,
              }],
              lifeTime: 0,
          };

          const extend = function(originalObj, newObj) {
              Object.keys(originalObj).forEach(key => {
                  if (newObj && Object.prototype.hasOwnProperty.call(newObj, key)) {
                      const origin = originalObj;
                      origin[key] = newObj[key];
                  }
              });

              return originalObj;
          };

          this.settings = extend(defaults, options);
          this.petalsWeak = new Map();

          setInterval(() => {
              if (!this.settings.lifeTime) return;

              const keysForRemove = [];
              const stamp = Date.now();

              for (const [key, value] of this.petalsWeak) {
                  if (key + this.settings.lifeTime < stamp) {
                      keysForRemove.push(key);
                      value.remove();
                  }
              }

              for (const key of keysForRemove) {
                  this.petalsWeak.delete(key);
              }
          }, 1000);

          this.el.style.overflowX = 'hidden';

          function randomArrayElem(arr) {
              return arr[Math.floor(Math.random() * arr.length)];
          }

          function randomInt(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          }

          const prefixes = ['webkit', 'moz', 'MS', 'o', ''];
          function PrefixedEvent(element, type, callback) {
              for (let p = 0; p < prefixes.length; p += 1) {
                  let animType = type;

                  if (!prefixes[p]) {
                      animType = type.toLowerCase();
                  }

                  element.addEventListener(prefixes[p] + animType, callback, false);
              }
          }

          function elementInViewport(el) {
              const rect = el.getBoundingClientRect();

              return (
                  rect.top >= 0 &&
                  rect.left >= 0 &&
                  rect.bottom <=
                  (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
          }

          this.createPetal = () => {
              if (this.el.dataset.sakuraAnimId) {
                  setTimeout(() => {
                      window.requestAnimationFrame(this.createPetal);
                  }, this.settings.delay);
              }

              const animationNames = {
                  blowAnimations: [
                      'blow-soft-left',
                      'blow-medium-left',
                      'blow-soft-right',
                      'blow-medium-right',
                  ],
                  swayAnimations: [
                      'sway-0',
                      'sway-1',
                      'sway-2',
                      'sway-3',
                      'sway-4',
                      'sway-5',
                      'sway-6',
                      'sway-7',
                      'sway-8',
                  ],
              };

              const blowAnimation = randomArrayElem(animationNames.blowAnimations);
              const swayAnimation = randomArrayElem(animationNames.swayAnimations);
              const fallTime =
                  (document.documentElement.clientHeight * 0.007 +
                      Math.round(Math.random() * 5)) *
                  this.settings.fallSpeed;

              const animationsArr = [
                  `sakurafall ${fallTime}s linear 0s 1`,
                  `${blowAnimation} ${(fallTime > 30 ? fallTime : 30) -
                      20 +
                      randomInt(0, 20)}s linear 0s infinite`,
                  `${swayAnimation} ${randomInt(2, 4)}s linear 0s infinite`,
              ];
              const animations = animationsArr.join(', ');

              const petal = document.createElement('div');
              petal.classList.add(this.settings.className);
              const height = randomInt(this.settings.minSize, this.settings.maxSize);
              const width = height - Math.floor(randomInt(0, this.settings.minSize) / 3);
              const color = randomArrayElem(this.settings.colors);

              petal.style.background = `linear-gradient(${color.gradientColorDegree}deg, ${color.gradientColorStart}, ${color.gradientColorEnd})`;
              petal.style.webkitAnimation = animations;
              petal.style.animation = animations;
              petal.style.borderRadius = `${randomInt(
                  this.settings.maxSize,
                  this.settings.maxSize + Math.floor(Math.random() * 10),
              )}px ${randomInt(1, Math.floor(width / 4))}px`;
              petal.style.height = `${height}px`;
              petal.style.left = `${Math.random() * document.documentElement.clientWidth -
                  100}px`;
              petal.style.marginTop = `${-(Math.floor(Math.random() * 20) + 15)}px`;
              petal.style.width = `${width}px`;

              PrefixedEvent(petal, 'AnimationEnd', () => {
                  if (!elementInViewport(petal)) {
                      petal.remove();
                  }
              });

              PrefixedEvent(petal, 'AnimationIteration', () => {
                  if (!elementInViewport(petal)) {
                      petal.remove();
                  }
              });

              this.petalsWeak.set(Date.now(), petal);
              this.el.appendChild(petal);
          };

          this.el.setAttribute(
              'data-sakura-anim-id',
              window.requestAnimationFrame(this.createPetal),
          );
      }

      start() {
          const animId = this.el.dataset.sakuraAnimId;
          if (!animId) {
              this.el.setAttribute(
                  'data-sakura-anim-id',
                  window.requestAnimationFrame(this.createPetal),
              );
          } else {
              throw new Error('Sakura is already running.');
          }
      }

      stop(graceful = false) {
          const animId = this.el.dataset.sakuraAnimId;
          if (animId) {
              window.cancelAnimationFrame(animId);
              this.el.setAttribute('data-sakura-anim-id', '');
          }

          if (!graceful) {
              setTimeout(() => {
                  const petals = document.getElementsByClassName(this.settings.className);
                  while (petals.length > 0) {
                      petals[0].parentNode.removeChild(petals[0]);
                  }
              }, this.settings.delay + 50);
          }
      }
  }

  const sakuraEl = document.getElementById('sakura-petal');
  const sakura = new Sakura('#sakura-petal');
  sakura.start();

  setTimeout(() => {
      sakura.stop();
  }, 10000);
}

document.addEventListener('DOMContentLoaded', initializeSakura);
