// 相対パスで書かなくてもwebpackがnode_modulesの中を探しに行ってくれる
import $ from 'jquery';
import velocity from 'velocity-animate';
import { add } from './modules/math';
import { greet } from './modules/greet';

console.log('app');

const result = add(1, 2);

$('body')
  .append(result)
  .append(`<p>${greet('App')}</p>`);
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });

console.log(a);

const z = { z: 3 };
console.log({ x: 1, y: 2, ...z });

const promise = new Promise((resolve) => {
  setTimeout(() => resolve('hello!'), 3000);
});

async function delayHello() {
  const value = await promise;
  console.log(value);
}

delayHello();
