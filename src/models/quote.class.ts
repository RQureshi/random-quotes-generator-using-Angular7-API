export class Quote{
    json(): any {
        throw new Error("Method not implemented.");
    }
    public quote:string
    public character :string
    public image :string

    constructor( quote:string, character:string,image :string){
this.quote=quote;
this.character=character
this.image=image
    }
}