export class Picture{
    id: number
    name: string
    type: string
    uuid: string

    constructor(id: number = 0, name: string = "", type: string = "", uuid = ""){
        this.id = id
        this.name = name
        this.type = type
        this.uuid = uuid;
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.name = obj.name
            this.type = obj.type
            this.uuid = obj.uuid;
        }
    }
}