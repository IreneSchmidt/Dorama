import type { IDorama } from '../../model/Dorama';
import { Dorama } from '../../model/Dorama';
import DoramaController from '../DoramaController';
import { GenericStore } from './generic/GenericStore';

const doramaController = new DoramaController();
const genericStore = new GenericStore<IDorama>('dorama');

const doramas: Dorama[] = [
    new Dorama('1', 'Dorama 1', 'Descrição 1', '2002-01-01', 5, ['Ação', 'Aventura']),
    new Dorama('2', 'Dorama 2', 'Descrição 2', '2002-01-01', 5, ['Ação', 'Aventura']),
    new Dorama('3', 'Dorama 3', 'Descrição 3', '2002-01-01', 5, ['Ação', 'Aventura']),
    new Dorama('4', 'Dorama 4', 'Descrição 4', '2003-02-02', 4, ['Drama', 'Romance']),
    new Dorama('5', 'Dorama 5', 'Descrição 5', '2004-03-03', 3, ['Comédia', 'Romance']),
    new Dorama('6', 'Dorama 6', 'Descrição 6', '2005-04-04', 4, ['Mistério', 'Suspense']),
    new Dorama('7', 'Dorama 7', 'Descrição 7', '2006-05-05', 5, ['Fantasia', 'Aventura']),
    new Dorama('8', 'Dorama 8', 'Descrição 8', '2007-06-06', 2, ['Terror', 'Suspense']),
    new Dorama('9', 'Dorama 9', 'Descrição 9', '2008-07-07', 4, ['Ação', 'Drama']),
    new Dorama('10', 'Dorama 10', 'Descrição 10', '2009-08-08', 5, ['Aventura', 'Fantasia'])
];

genericStore.enableMock(async () => doramas);
export const useDoramaStore = genericStore.createStore(doramaController);
