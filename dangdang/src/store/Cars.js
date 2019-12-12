export default{
    state:{
        goodslists:[],
        checkedGoods:[],
        total:[]
    },
    mutations:{
        add(state,obj){
            let index = state.goodslists.findIndex(val=>val.id == obj.id);
            if(index == -1){
                state.goodslists.push(obj);
                state.checkedGoods=state.goodslists.map(val=>val.id);
                state.total=state.goodslists.map(val=>val.id);
            }else{
                state.goodslists[index].num+=1;
            }
        }
    }
}