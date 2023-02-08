export class Phone{
    id: number
    code: number
    number: number

    constructor(id: number = 0, code: number = 0, number: number = 0){
        this.id = id
        this.code = code
        this.number = number
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.code = obj.code
            this.number = obj.number
        }
    }
}