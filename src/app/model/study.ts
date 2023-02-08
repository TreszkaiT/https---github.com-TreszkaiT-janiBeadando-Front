export class Study{
    id: number
    nameSchool: string
    from: string
    to: string
    comment: string
    level: number

    constructor(id: number = 0, nameSchool: string = "", from: string = "", to: string = "", comment: string = "", level: number = 0){
        this.id = id
        this.nameSchool = nameSchool
        this.from = from
        this.to = to
        this.comment = comment
        this.level = level
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.nameSchool = obj.nameSchool
            this.from = obj.from
            this.to  = obj.to
            this.comment = obj.comment
            this.level = obj.level
        }
    }
}