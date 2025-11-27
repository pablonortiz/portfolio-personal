# Portfolio Personal - Pablo Ortiz

Portfolio personal moderno y animado construido con React, TypeScript, Tailwind CSS y Framer Motion.

## Características

- **Diseño Responsivo**: Perfectamente adaptado para mobile, tablet y desktop
- **Animaciones Fluidas**: Usando Framer Motion para transiciones suaves y atractivas
- **TypeScript**: Código tipado para mayor seguridad y mantenibilidad
- **Arquitectura Escalable**: Estructura de carpetas clara y organizada
- **Optimizado para Vercel**: Configuración lista para deployment
- **UI/UX Moderna**: Paleta de colores violeta/negro con efectos gradient y blur

## Tecnologías Utilizadas

- ⚛️ **React 18** - Biblioteca UI
- 📘 **TypeScript** - Tipado estático
- ⚡ **Vite** - Build tool ultrarrápido
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🎭 **Framer Motion** - Animaciones profesionales
- 📝 **React Hook Form** - Manejo de formularios
- 🎯 **Lucide React** - Iconos modernos

## Estructura del Proyecto

```
portfolio-pablo-ortiz/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Footer.tsx
│   │   ├── InfiniteSlider.tsx
│   │   ├── PhoneEmulator.tsx
│   │   ├── ProfileImage.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── RoleCarousel.tsx
│   │   └── TimelineItem.tsx
│   ├── data/            # Datos y contenido
│   │   └── personal.ts  # Información personal, proyectos, timeline
│   ├── hooks/           # Custom hooks
│   │   ├── useInView.ts
│   │   └── useTypingEffect.ts
│   ├── sections/        # Secciones principales
│   │   ├── Hero.tsx
│   │   ├── TechStack.tsx
│   │   ├── Journey.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json         # Configuración de Vercel
```

## Instalación

1. **Instalar dependencias**

```bash
npm install
```

2. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## Personalización

### 1. Información Personal

Edita el archivo `src/data/personal.ts` para actualizar tu información:

```typescript
export const personalInfo = {
  name: 'Pablo Ortiz',
  age: 25,
  roles: ['Desarrollador Mobile', 'Desarrollador de Software'],
  photo: '/profile.jpg', // Coloca tu foto en public/
}
```

### 2. Proyectos

Añade tus proyectos en el mismo archivo:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Mi Proyecto',
    description: 'Descripción',
    image: '/projects/proyecto.jpg',
    link: 'https://github.com/tuusuario/proyecto',
    type: 'web' // o 'mobile'
  },
  // ... más proyectos
]
```

### 3. Trayectoria

Actualiza tu timeline profesional:

```typescript
export const timeline = [
  {
    id: 1,
    year: '2024',
    title: 'Mi Trabajo',
    description: 'Descripción del trabajo',
    type: 'work', // o 'education'
    logo: '💼',
  },
  // ... más eventos
]
```

### 4. Redes Sociales

Actualiza tus links sociales:

```typescript
export const socialLinks = {
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
  email: 'tu@email.com',
}
```

### 5. Colores

Los colores están configurados en `tailwind.config.js`. La paleta principal usa tonos violeta:

```javascript
colors: {
  primary: {
    500: '#a855f7',  // Violeta principal
    600: '#9333ea',
    // ... más tonos
  },
}
```

### 6. Imágenes

Coloca tus imágenes en la carpeta `public/`:

- `public/profile.jpg` - Tu foto de perfil
- `public/projects/` - Imágenes de proyectos

## Formulario de Contacto

El formulario está preparado para conectar con servicios de email. Opciones recomendadas:

### Opción 1: EmailJS (Recomendado)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Instala el SDK:

```bash
npm install @emailjs/browser
```

3. Actualiza `src/sections/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser'

const onSubmit = async (data: ContactFormData) => {
  try {
    await emailjs.send(
      'tu_service_id',
      'tu_template_id',
      data,
      'tu_public_key'
    )
    setSubmitStatus('success')
  } catch (error) {
    setSubmitStatus('error')
  }
}
```

### Opción 2: Formspree

1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Actualiza el form action en Contact.tsx

### Opción 3: API Propia

Conecta el formulario a tu propio backend API.

## Deployment en Vercel

### Método 1: CLI de Vercel

1. Instala Vercel CLI:

```bash
npm install -g vercel
```

2. Despliega:

```bash
vercel
```

### Método 2: GitHub + Vercel (Recomendado)

1. Sube tu código a GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin tu-repo-url
git push -u origin main
```

2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración de Vite
5. Click en "Deploy"

### Variables de Entorno en Vercel

Si usas servicios externos (EmailJS, etc.), añade las variables de entorno en Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade las variables necesarias

## Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta ESLint
```

## Optimizaciones de Performance

- ✅ Lazy loading de imágenes
- ✅ Code splitting automático (Vite)
- ✅ Animaciones optimizadas con Framer Motion
- ✅ CSS purging con Tailwind
- ✅ Compresión de assets en build

## Browser Support

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Roadmap de Mejoras

- [ ] Dark/Light mode toggle
- [ ] Internacionalización (i18n)
- [ ] Blog section
- [ ] CMS integration
- [ ] Analytics integration
- [ ] SEO optimization con react-helmet

## Solución de Problemas

### Error: Cannot find module '@/*'

Asegúrate de que el path alias esté configurado en `vite.config.ts`:

```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### Las animaciones no funcionan

Verifica que Framer Motion esté instalado:

```bash
npm install framer-motion
```

### Build falla en Vercel

Asegúrate de que `vercel.json` tenga la configuración correcta y que todas las dependencias estén en `package.json`.

## Licencia

MIT - Siéntete libre de usar este template para tu propio portfolio.

## Contacto

Pablo Ortiz - [GitHub](https://github.com/tuusuario) - [LinkedIn](https://linkedin.com/in/tuusuario)

---

Hecho con ❤️ y React
