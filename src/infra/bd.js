import Usuario from "../models/usuario.js"
import Tarefa from "../models/tarefa.js"

const bdUsuarios = []
const bdTarefas = []

const usuario = new Usuario("Pedro Nicacio", "pnicacio@gmail.com", "26xxxxxx")
bdUsuarios.push(usuario);

const tarefa = new Tarefa("estudar", "legal", "em curso", new Date());
bdTarefas.push(tarefa)


export { bdTarefas, bdUsuarios }