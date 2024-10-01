
import { Comentario } from "../Comentario"
import { Usuario } from "../Usuario"

let date = new Date()
let dataAtual = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`

export class Postagem{
    public IDPostagem:number
    public nome:string
    public titulo:string
    public descricao:string
    public comentarios:Comentario[]
    public idsRemovComent:number
    public datas:string[]
    public anexos:string[]
    public deslikes:number
    public likes:number

    constructor(IDPostagem:number, nome:string, titulo:string, descricao:string, data:string, anexos:string[]){
        this.IDPostagem = IDPostagem
        this.nome = nome
        this.titulo = titulo
        this.descricao = descricao
        this.datas.push(data)
        this.datas.push(data)//Esta correto
        this.anexos = anexos

    }

    dataCriacao():string{
        return this.dataCriacao[0]
    }

    alterarNome(novoNome:string){
        this.nome = novoNome
        this.datas[1] = (dataAtual)
    }

    alterarTitulo(novoTitulo:string){
        this.titulo = novoTitulo
        this.datas.push(dataAtual)
    }

    alterarDescricao(novaDescricao:string){
        this.descricao = novaDescricao
        this.datas.push(dataAtual)
    }

    alterarAnexos(novosAnexos:string[]){
        this.anexos = novosAnexos
        this.datas.push(dataAtual)
    }

    adicionarLike(){
        this.likes += 1
    }

    adicionarDeslike(){
        this.deslikes += 1
    }

    removerComentario(idComentario:number):boolean{
        let findComent = this.comentarios.find(comment => comment.IDComentario === idComentario)
        let indexComent = findComent? this.comentarios.indexOf(findComent): false
        if(indexComent){
            this.comentarios.splice(indexComent,1)
            this.idsRemovComent++
            return true
        }
        return false
    }

}