# Accionamientos IEC

Juego educativo interactivo para practicar la identificación de símbolos eléctricos IEC. El jugador debe relacionar cada símbolo con su concepto correspondiente mediante arrastrar y soltar, o mediante selección táctil en dispositivos móviles.

La experiencia se divide en tres niveles progresivos: el nivel 1 contiene 8 símbolos, el nivel 2 contiene 10 y el nivel 3 contiene 12. Cada nivel dispone de 60 segundos; al presionar **Terminar y evaluar**, el juego marca las asociaciones correctas e incorrectas. Solo al completar todas correctamente se desbloquea el siguiente nivel.

## Características

- Tres niveles con 30 símbolos eléctricos IEC en total.
- Temporizador de 60 segundos por nivel.
- Interacción de arrastrar y soltar en escritorio.
- Alternativa accesible para móvil: tocar un símbolo y luego su concepto.
- Evaluación de respuestas, retroalimentación visual y reintentos.
- Diseño adaptable para pantallas de escritorio y móviles.
- Despliegue automatizado en GitHub Pages.

## Stack tecnológico

| Tecnología | Aporte al proyecto |
| --- | --- |
| React 19 | Construye la interfaz mediante componentes y administra el estado e interacciones del juego. |
| TypeScript | Define los tipos de niveles, símbolos y respuestas para reducir errores durante el desarrollo. |
| Vite | Proporciona el servidor de desarrollo y genera la compilación optimizada para producción. |
| CSS | Implementa el diseño visual, las animaciones y la adaptación responsive. |
| HTML Drag and Drop API | Permite arrastrar los símbolos a sus conceptos en equipos de escritorio. |
| ESLint | Revisa la calidad y consistencia del código. |


## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior.
- npm, incluido con Node.js.

## Ejecutar el proyecto localmente

1. Clona el repositorio y entra en la carpeta del proyecto:

   ```bash
   git clone https://github.com/Farith77/PE-Minigame-electronica.git
   cd PE-Minigame-electronica
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la dirección que Vite indique en la terminal, normalmente `http://localhost:5173/`.

5. Opcion movil

   ```bash
   npm run dev -- --host
   ```
   Ingresa la dirección Network en el navegador de tu celular
   

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo con recarga automática. |
| `npm run build` | Verifica TypeScript y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. Ejecutar después de `npm run build`. |
| `npm run lint` | Analiza el código con ESLint. |

## Estructura principal

```text
src/
├── components/  # Tablero de juego y ventana de resultados
├── data/        # Catálogo de símbolos y niveles
├── type/        # Tipos de TypeScript
├── App.tsx      # Flujo y estado principal del juego
└── index.css    # Estilos globales y diseño responsive
public/images/   # Imágenes de símbolos organizadas por nivel
```
