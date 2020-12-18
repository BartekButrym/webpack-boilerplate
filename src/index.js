import './styles/main.scss';

import image from './images/html.png';
import vectorImg from './images/zipcode.svg';

class Game {
	name = 'Violin Charades';
}
const myGame = new Game();

const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;

const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

const app = document.querySelector('#root');
app.append(heading, p);
