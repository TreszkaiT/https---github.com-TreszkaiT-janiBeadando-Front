export class MessageApp{
    id: number
    name: string

    constructor(id: number = 0, name: string = ""){
        this.id = id
        this.name = name
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.name = obj.name
        }
    }
}