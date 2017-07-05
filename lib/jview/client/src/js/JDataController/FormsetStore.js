import { autorun, observable, computed} from "mobx"

class FormsetStore {
    @observable map = {
        device: 0,
        x: 0,
        y: 0,
        status: 0,
    }
    
    reset(){
        this.map.device=0;
        this.map.x=0;
        this.map.y=0;
        this.map.status=0;
    }

    changeValue(value,param){
        this.map[param]=value;
    }
}

var store = window.store = new FormsetStore;

export default store
