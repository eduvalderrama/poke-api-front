# Pokédex

Pokédex en React y TypeScript. Muestra el listado de Pokémon en páginas de 24 y abre la ficha del que elijas.

Publicado en Vercel: https://poke-api-front-kappa.vercel.app/

## Cómo funciona

Al entrar se pide una sola vez el índice de PokéAPI:

`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

Esa respuesta trae los nombres y las URL, no las fichas ni las imágenes. La paginación y la búsqueda ocurren en el navegador sobre ese arreglo. Anterior y Siguiente no vuelven a llamar a la API.

La ficha se pide aparte, solo cuando eliges un Pokémon (`/pokemon/{nombre}`). React Query guarda esa respuesta, así que volver a abrirlo no repite la llamada.

Las imágenes de la grilla no vienen en el índice. De la URL del listado se saca el id (`/pokemon/4/` → `4`) y cada tarjeta pinta:

`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`

Solo se descargan los sprites de la página visible. El arte de la ficha sale de `sprites` en la respuesta del Pokémon: el arte oficial y, con «Ver variocolor», la versión shiny.

## Arranque

```bash
npm install
npm run dev
```

La app queda en http://127.0.0.1:5173/

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run typecheck` | Revisa los tipos |
| `npm run build` | Revisa los tipos y genera `dist/` |
| `npm run preview` | Sirve el build |

## Stack

React 18, TypeScript, Vite, React Router, TanStack Query, Axios, Bootstrap y Sass.
