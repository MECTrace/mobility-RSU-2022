import { Path } from '@/config/path';
import { LazyExoticComponent } from 'react';
import { Socket } from 'socket.io-client';
import { IDiagramData } from './interfaceHierarchyTree';

/**
 * Get all 'values' of `T` interface
 */
export type TypesOf<T> = T[keyof T];

export interface IRoute {
  path: Path;
  component: LazyExoticComponent<() => JSX.Element>;
}   

export type TypesOf<T> = T[keyof T];

export interface IRoute {
  path: Path;
  component: LazyExoticComponent<() => JSX.Element>;
}