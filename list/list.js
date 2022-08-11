class List {
    constructor(){
        this.root = null;
    }
    add(node){
        if(!this.root){
            this.root = node;
        }else{
            this.root.next = node;
        }
    }
}

module.exports = List;