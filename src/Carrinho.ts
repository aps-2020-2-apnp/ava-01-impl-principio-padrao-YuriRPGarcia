import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []

  adiciona(produto: Produto, ...produtos: Produto[]): void {
    this.produtos.push(produto, ...produtos)
  }

  toString(): string {
    return 'Conteúdo do Carrinho:\n' +
      '=====================\n' +
      this.produtos.join('\n')
  }
}