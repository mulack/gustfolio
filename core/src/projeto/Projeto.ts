import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"
import Tecnologia from "../tecnologia/Tecnologia"

export default interface Projeto {
    id: number
    nome: string
    descricao: string
    imagem: string[]
    tipo: Tipo
    level: Nivel
    repositorio: string
    destaque: boolean
    tecnologias: Tecnologia[]
}