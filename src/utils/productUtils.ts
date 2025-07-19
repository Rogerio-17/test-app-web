import { Product } from '../http/types/get-product-response';

// Função para encontrar a primeira letra ausente do alfabeto
export function findMissingLetter(products: Product[]): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const usedLetters = new Set(
    products
      .map(product => product.name.charAt(0).toUpperCase())
      .filter(letter => /[A-Z]/.test(letter))
  );

  for (const letter of alphabet) {
    if (!usedLetters.has(letter)) {
      return letter;
    }
  }

  return 'Todas as letras foram usadas';
}

// Dados mock para exemplo
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone',
    description: 'Smartphone premium com tela de alta resolução e câmera avançada'
  },
  {
    id: '2',
    name: 'Bosch Furadeira',
    description: 'Furadeira elétrica profissional para uso doméstico e industrial'
  },
  {
    id: '3',
    name: 'Dell Notebook',
    description: 'Notebook para trabalho com processador Intel Core i7 e 16GB RAM'
  },
  {
    id: '4',
    name: 'Echo Dot',
    description: 'Alto-falante inteligente com Alexa para automação residencial'
  },
  {
    id: '5',
    name: 'Fone de Ouvido',
    description: 'Fone de ouvido bluetooth com cancelamento de ruído ativo'
  },
  {
    id: '6',
    name: 'Geladeira Samsung',
    description: 'Geladeira frost free de 400 litros com dispenser de água'
  },
  {
    id: '7',
    name: 'HD Externo',
    description: 'Disco rígido externo de 1TB para backup e armazenamento'
  },
  {
    id: '8',
    name: 'iPad Pro',
    description: 'Tablet profissional para design e produtividade'
  },
  {
    id: '9',
    name: 'JBL Speaker',
    description: 'Caixa de som portátil à prova d\'água com bluetooth'
  },
  {
    id: '10',
    name: 'Kindle',
    description: 'Leitor digital de livros com tela antirreflexo'
  }
];
