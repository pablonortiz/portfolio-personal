# Configuración de Appetize.io para el Emulador Android

Este documento explica cómo integrar **Appetize.io** en tu portfolio para mostrar tus aplicaciones Android de forma interactiva.

## ¿Qué es Appetize.io?

Appetize.io es un servicio que permite ejecutar aplicaciones móviles reales (Android y iOS) directamente en el navegador. Los usuarios pueden interactuar con tus apps como si estuvieran en un dispositivo real.

## Planes y Precios

- **Plan Gratuito**: 100 minutos/mes de uso
- **Plan Básico**: $40/mes - 400 minutos
- **Plan Premium**: Desde $100/mes - 1,000+ minutos

El plan gratuito es suficiente para portfolios personales.

## Paso a Paso: Configuración

### 1. Crear cuenta en Appetize.io

1. Ve a [https://appetize.io](https://appetize.io)
2. Haz clic en "Sign Up" o "Get Started"
3. Completa el registro con tu email

### 2. Subir tu APK

1. Inicia sesión en tu cuenta de Appetize.io
2. En el dashboard, haz clic en "Upload New App"
3. Selecciona tu archivo APK
4. Completa la información:
   - **Platform**: Android
   - **App Name**: Nombre de tu app
   - **Note** (opcional): Descripción o notas

### 3. Configurar el emulador

Una vez subida tu app, puedes configurar:

- **Device**: El modelo de dispositivo (Pixel 7, Samsung Galaxy, etc.)
- **OS Version**: Versión de Android (11, 12, 13, etc.)
- **Launch URL**: URL específica si tu app tiene deep linking
- **Orientation**: Portrait o Landscape
- **Scale**: Tamaño del emulador (50%, 75%, 100%)

### 4. Obtener la URL de Embed

1. En el dashboard de Appetize.io, selecciona tu app
2. Haz clic en "Embed" o busca la opción "Share"
3. Copia la **URL de embed** que se ve así:
   ```
   https://appetize.io/embed/YOUR_APP_PUBLIC_KEY?device=pixel7&osVersion=13.0&scale=75
   ```

### 5. Agregar la URL a tu Portfolio

Abre el archivo `src/data/personal.ts` y agrega la URL de Appetize.io a tus proyectos móviles:

```typescript
{
  id: 3,
  title: "Mi App Increíble",
  description: "Descripción de mi aplicación móvil",
  image: "/projects/app1.jpg",
  link: "https://github.com/tuusuario/mi-app",
  type: "mobile" as const,
  appetizeUrl: "https://appetize.io/embed/YOUR_APP_PUBLIC_KEY?device=pixel7&osVersion=13.0&scale=75"
}
```

### 6. Parámetros opcionales de la URL

Puedes personalizar la URL de embed con estos parámetros:

```
https://appetize.io/embed/YOUR_APP_PUBLIC_KEY
  ?device=pixel7              // Modelo de dispositivo
  &osVersion=13.0            // Versión de Android
  &scale=75                  // Escala del emulador (50-100)
  &autoplay=false            // Auto-iniciar la app
  &orientation=portrait      // portrait o landscape
  &deviceColor=black         // Color del dispositivo
  &language=es               // Idioma del sistema
  &location=37.7749,-122.4194 // Ubicación GPS (lat,lon)
```

## Ejemplo Completo

```typescript
export const projects = [
  // ... otros proyectos ...
  {
    id: 3,
    title: "Task Manager Pro",
    description: "Aplicación de gestión de tareas con sincronización en la nube",
    image: "/projects/task-manager.jpg",
    link: "https://github.com/tuusuario/task-manager",
    type: "mobile" as const,
    appetizeUrl: "https://appetize.io/embed/abc123xyz?device=pixel7&osVersion=13.0&scale=75&autoplay=false"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "App de seguimiento de ejercicios y nutrición",
    image: "/projects/fitness.jpg",
    link: "https://github.com/tuusuario/fitness-tracker",
    type: "mobile" as const,
    appetizeUrl: "https://appetize.io/embed/def456uvw?device=pixel7&osVersion=13.0&scale=75"
  }
];
```

## Funcionamiento

Una vez configurado:

1. **Sin Appetize URL**: El emulador mostrará información de la app con capturas de pantalla (vista estática)
2. **Con Appetize URL**: El emulador cargará un iframe con tu app real funcionando

Los usuarios podrán:
- Tocar los iconos de apps en la pantalla de inicio
- Interactuar con la app real en tiempo real
- Navegar usando los botones de Android (atrás, inicio)
- Volver a la pantalla de inicio para ver otras apps

## Consejos

1. **Optimiza tu APK**: Apps más pequeñas cargan más rápido
2. **Usa el plan gratuito sabiamente**: 100 minutos/mes = ~3 minutos por día
3. **Configura timeout**: Appetize puede configurar un timeout de inactividad para ahorrar minutos
4. **Test antes**: Prueba tu app en Appetize.io antes de publicarla en tu portfolio
5. **Capturas de pantalla**: Aunque uses Appetize.io, también agrega capturas en el campo `image` como fallback

## Solución de Problemas

### La app no carga
- Verifica que la URL de Appetize.io sea correcta
- Asegúrate de que tu app esté pública en Appetize.io
- Revisa que tu plan tenga minutos disponibles

### El iframe está en blanco
- Comprueba los permisos del iframe en el navegador
- Verifica que la URL incluya el protocolo `https://`
- Intenta con `&autoplay=true` en la URL

### Errores de CORS
- Appetize.io maneja CORS automáticamente, no deberías tener problemas
- Si tienes errores, contacta soporte de Appetize.io

## Alternativas Gratuitas

Si prefieres no usar Appetize.io o necesitas algo 100% gratis sin límites:

1. **Videos demostrativos**: Graba videos de tu app y muéstralos en el emulador
2. **PWA/WebApps**: Si tu app tiene versión web, úsala directamente
3. **Expo Snack**: Si usas React Native, publica en Expo Snack

## Recursos

- [Documentación de Appetize.io](https://docs.appetize.io/)
- [API de Appetize.io](https://docs.appetize.io/javascript-sdk)
- [Pricing de Appetize.io](https://appetize.io/pricing)

## Soporte

Si tienes problemas con la integración, revisa:
1. El archivo [PhoneEmulator.tsx](src/components/PhoneEmulator.tsx)
2. El archivo [personal.ts](src/data/personal.ts)
3. La documentación oficial de Appetize.io
