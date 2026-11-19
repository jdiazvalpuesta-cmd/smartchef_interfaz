import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Fuera del menú
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then((m) => m.LoginPage),
  },

  // Dentro del menú inferior (4 pestañas)
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./paginas/inicio/inicio.page').then((m) => m.InicioPage),
      },
      {
        path: 'cocinar',
        loadComponent: () => import('./paginas/cocinar/cocinar.page').then((m) => m.CocinarPage),
      },
      {
        path: 'cocinar/resultados',
        loadComponent: () =>
          import('./paginas/recetas-resultados/recetas-resultados.page').then((m) => m.RecetasResultadosPage),
      },
      {
        path: 'recetas/:id',
        loadComponent: () => import('./paginas/receta-detalle/receta-detalle.page').then((m) => m.RecetaDetallePage),
      },
      {
        path: 'compras',
        loadComponent: () => import('./paginas/compras/compras.page').then((m) => m.ComprasPage),
      },
      {
        path: 'mi-espacio',
        loadComponent: () => import('./paginas/mi-espacio/mi-espacio.page').then((m) => m.MiEspacioPage),
      },
      {
        path: 'despensa',
        loadComponent: () => import('./paginas/despensa/despensa.page').then((m) => m.DespensaPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then((m) => m.PerfilPage),
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },

  // Pantalla completa, sin menú
  {
    path: 'suscripciones',
    loadComponent: () => import('./paginas/suscripciones/suscripciones.page').then((m) => m.SuscripcionesPage),
  },

  // Cualquier otra dirección: SIEMPRE LA ÚLTIMA
  {
    path: '**',
    loadComponent: () => import('./paginas/no-encontrada/no-encontrada.page').then((m) => m.NoEncontradaPage),
  },
];
