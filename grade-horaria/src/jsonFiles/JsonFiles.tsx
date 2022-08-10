import { useState } from 'react'
import {Disciplinas, Professores} from '../data/Pasta1.json'
import fs from 'fs-extra'


type disp2 = {
  nome: string,
  pratica: boolean,
  dupla: boolean,
  cargaHoraria: number,
  turma: string,
  sala: number,
  professor: string
}

export const JsonFiles = () => {
  const [novaDisciplina, setNovaDisciplina] = useState<disp2>({
    nome: '',
    pratica: false,
    dupla: false,
    cargaHoraria: 0,
    turma: '',
    sala: 0,
    professor: ''
  })

  const Professor = [...Professores]
  const Disp = [...Disciplinas]
  
  const Disciplinas2 = Disp.reduce((resp: Array<disp2>, disciplina) => {
    novaDisciplina.nome = disciplina.nome
    novaDisciplina.pratica = disciplina.pratica === "true" ? true : false
    novaDisciplina.dupla = disciplina.pratica === "true" ? true : false
    novaDisciplina.cargaHoraria = disciplina.cargaHoraria
    novaDisciplina.turma = disciplina.turma
    novaDisciplina.sala = disciplina.sala 
    let index = disciplina.professor + 1
    let novoProfessor = Professor[index].nome
    // console.log(novoProfessor)
    novaDisciplina.professor = novoProfessor
    console.log(novaDisciplina.professor)
    resp.push(novaDisciplina)
    return resp
  }, [])

  var convert = JSON.stringify(Disciplinas2)
  fs.writeFileSync('disprof.json', convert, 'utf-8')


  return (
    <div>
      <h1>{Professor[1].nome}</h1> 
    </div>
  )
}

