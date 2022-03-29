

export class Calc {
    static degToRad = (angle: number) => angle / 180 * Math.PI

    static getCosSin = (angle: number) => {
        const sin = Math.sin(Calc.degToRad(angle))
        const cos = Math.cos(Calc.degToRad(angle))

        return { sin, cos }
    }
}