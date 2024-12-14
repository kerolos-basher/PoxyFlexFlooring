import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components//home/home.component').then((x) => x.HomeComponent) },
    { path: 'anti-slip-poolside-solutions', loadComponent: () => import('./components/anti-slip-poolside-solutions/anti-slip-poolside-solutions.component').then((x) => x.AntiSlipPoolsideSolutionsComponent) },
    { path: 'designs-for-floors-walls', loadComponent: () => import('./components/designs-for-floors-walls/designs-for-floors-walls.component').then((x) => x.DesignsForFloorsWallsComponent) },
    { path: 'epoxy-flakes-flooring', loadComponent: () => import('./components/epoxy-flakes-flooring/epoxy-flakes-flooring.component').then((x) => x.EpoxyFlakesFlooringComponent) },
    { path: 'epoxy-marble-floors-and-walls', loadComponent: () => import('./components/epoxy-marble-floors-and-walls/epoxy-marble-floors-and-walls.component').then((x) => x.EpoxyMarbleFloorsAndWallsComponent) },
    { path: 'metallic-finish-floors', loadComponent: () => import('./components/metallic-finish-floors/metallic-finish-floors.component').then((x) => x.MetallicFinishFloorsComponent) },

];
