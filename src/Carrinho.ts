import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []

  // prod2? significa parâmetro opcional
  adiciona(...produtos: Produto[]): void {
    produtos.forEach(produto => this.produtos.push(produto))
  }

  toString(): string {
    return 'Conteúdo do Carrinho:\n' +
      '=====================\n' +
      this.produtos.join('\n') // junta os produtos separados por nova linha
  }
}
