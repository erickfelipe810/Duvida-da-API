import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http//localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) { }

  getProduto(id: any): Observable<Produto> {
    const urlIdProduto = `${this.url}?id=${id}`;
    return this._httpClient.get<Produto>(urlIdProduto);
  }

  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);
  }

  cadastrarProdutos(produto: Produto): Observable<Produto[]> {
    return this._httpClient.post<Produto[]>(this.url, produto);
  }

  atualizaProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/?${id}`;
    return this._httpClient.put<Produto[]>(urlAtualizar, produto);
  }

  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/?${id}`;
    return this._httpClient.delete<Produto[]>(urlDeletar);
  }
}
