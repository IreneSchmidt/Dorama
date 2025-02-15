import type { IAvaliacao } from '../../model/Avaliacao';
import { Avaliacao } from '../../model/Avaliacao';
import AvaliacaoController from '../AvaliacaoController';
import { GenericStore } from './generic/GenericStore';

const avaliacaoController = new AvaliacaoController();
const genericStore = new GenericStore<IAvaliacao>('avaliacao');

const avaliacoes: Avaliacao[] = [
    new Avaliacao('1', 'Avaliação 1', 5, 'Ótimo dorama!'),
    new Avaliacao('2', 'Avaliação 2', 4, 'Muito bom!'),
    new Avaliacao('3', 'Avaliação 3', 3, 'Foi ok.'),
    new Avaliacao('4', 'Avaliação 4', 2, 'Não gostei muito.'),
    new Avaliacao('5', 'Avaliação 5', 1, 'Péssimo dorama.'),
    new Avaliacao('6', 'Avaliação 6', 5, 'Maravilhoso!'),
    new Avaliacao('7', 'Avaliação 7', 4, 'Gostei bastante.'),
    new Avaliacao('8', 'Avaliação 8', 3, 'Foi razoável.'),
    new Avaliacao('9', 'Avaliação 9', 2, 'Não foi bom.'),
    new Avaliacao('10', 'Avaliação 10', 1, 'Horrível.')
];

genericStore.enableMock(async () => avaliacoes);
export const useAvaliacaoStore = genericStore.createStore(avaliacaoController);
