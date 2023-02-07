export class City{
    id: number
    name: string
    zip: string

    constructor(id: number = 0, name: string = "", zip: string = ""){
        this.id = id
        this.name = name
        this.zip = zip
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.name = obj.name
            this.zip = obj.zip
        }
    }
}