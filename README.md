# Mersiel Web

Sitio corporativo de Mersiel construido con Next.js (App Router) y TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4 (disponible para utilidades)

## Estructura del proyecto

```text
src/
	app/
	components/
	lib/
public/
	brand/
	images/
```

## Desarrollo

```bash
npm run dev
```

App local en `http://localhost:3000`.

## Pendientes

- [ ] **Vectorizar logos** — Convertir los assets de `public/Logos/` a SVG para poder trazar el contorno exacto de la marca en código.
- [ ] **Loader de la página** — Construir el loader animado con el logo como base: trazo serpiente que recorre el borde exacto de cada pieza del logotipo. Requiere los SVGs para lograrlo correctamente.

## Estructura del proyecto

```text
src/
	app/
	components/
	lib/
public/
	brand/
	images/
```

## Desarrollo

```bash
npm run dev
```

App local en `http://localhost:3000`.

## Pendientes

- [ ] **Vectorizar logos** — Convertir los assets de `public/Logos/` a SVG para poder trazar el contorno exacto de la marca en código.
- [ ] **Loader de la página** — Construir el loader animado con el logo como base: trazo serpiente que recorre el borde exacto de cada pieza del logotipo. Requiere los SVGs para lograrlo correctamente.

## Assets de marca

Sube aqui las versiones oficiales del logo:

- `public/brand/logo-color.svg`
- `public/brand/logo-white.svg`
- `public/brand/logo-black.svg`

Y usa rutas absolutas desde raiz web, por ejemplo: `/brand/logo-color.svg`.

## Scripts

- `npm run dev`: modo desarrollo
- `npm run build`: build produccion
- `npm run start`: correr build
- `npm run lint`: lint del proyecto
