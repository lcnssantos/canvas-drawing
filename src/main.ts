import { Situation } from './domain/situation'
import { drawBase, drawForce, getScale } from './infra/ui'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const canvas = document.createElement("canvas")
canvas.id = "canvas"
canvas.width = 1000
canvas.height = 1000


const context = canvas.getContext("2d")


const state = new Situation(500, (state) => context && draw(context, state))

const draw = (context: CanvasRenderingContext2D, state: Situation) => {
  if (state) {
    const scale = getScale(context, state.length)

    for (const force of state.forces) {
      drawForce(context, [canvas.width / 2 - state.length / 2 + force.position, canvas.height / 2], force.intensity, force.angle)
    }
    drawBase(context, state.length, scale)
  }
}

if (context) {
  draw(context, state)
}

document.querySelector('#buttonAddForce')?.addEventListener('click', () => {
  const distancia = document.querySelector<HTMLInputElement>('#distancia')?.value
  const intensidade = document.querySelector<HTMLInputElement>('#intensidade')?.value
  const angulo = document.querySelector<HTMLInputElement>('#angulo')?.value

  if (distancia && intensidade && angulo) {
    state.addForce({
      id: 'newId',
      angle: Number(angulo),
      intensity: Number(intensidade),
      position: Number(distancia)
    })
  }
})

app.appendChild(canvas)
