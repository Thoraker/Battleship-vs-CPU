# Battleships Game

Clásico juego de mesa realizado en React donde 2 jugadores colocan sus barcos en un tablero escondido de su rival y deben adivinar las celdas donde están para lograr hundirlos.

# Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=Vitest&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

# Reglas del juego

- Los barcos deben colocarse horizontales o verticales, no diagonalmente.
- Debes situar los 5 barcos en la grilla.
- Los barcos deben estar completamente dentro del tablero y no pueden estar colgando de los bordes.
- Los Barcos no deben solaparse o estar uno sobre el otro.
- Cuando los 5 barcos están colocados y el juego empieza, estos no se pueden mover.

## Instalación

```sh
npm install
```

## Levantar el servidor

```ts
npm run dev
```

Por defecto el servidor esta disponible en http://localhost:5173/

# Consideraciones

Trabajo aún en desarrollo

Si bien el juego esta funcionando, es posible que se encuentren algunos bugs ya que por ejemplo a veces si se hace click en el borde de la celda, la celda no detecta el click event y hay que hacer click nuevamente.

Realizado con ViteJS

[![npm](https://img.shields.io/npm/v/@vitejs/plugin-react-swc)](https://vitejs.dev/)
