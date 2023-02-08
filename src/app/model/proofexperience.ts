export class ProofExperience{
    id: number
    nameWork: string
    from: string
    to: string
    comment: string

    constructor(id: number = 0, nameWork: string = "", from: string = "", to: string = "", comment: string = ""){
        this.id = id
        this.nameWork = nameWork
        this.from = from
        this.to = to
        this.comment = comment
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.nameWork = obj.nameWork
            this.from = obj.from
            this.to  = obj.to
            this.comment = obj.comment
        }
    }
}