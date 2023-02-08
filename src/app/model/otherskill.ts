export class OtherSkill{
    id: number
    name: string
    level: string

    constructor(id: number = 0, name: string = "", level: string = ""){
        this.id = id
        this.name = name
        this.level = level
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.name = obj.name
            this.level = obj.level
        }
    }
}