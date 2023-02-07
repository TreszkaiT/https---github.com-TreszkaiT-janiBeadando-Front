export class Language{
    id: number
    name: string
    code: string

    constructor(id: number = 0, name: string = "", code: string = ""){
        this.id = id
        this.name = name
        this.code = code
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.name = obj.name
            this.code = obj.code
        }
    }
}