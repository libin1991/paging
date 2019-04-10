export default{
    //命名空间
    namespaced:true,
    //状态管理
    state:{
        arr:[],
        total:0,
        nowPage:4,
        pageSize:10
    },
    //无副作用方法,唯一用于改变state的地方
    mutations:{
        changeArr(state,{arr}){
            state.arr=arr;
        },
        changeTotal(state,{total}){
            state.total=total
        },
        changeNowpage(state,{nowpage}){
            state.nowPage=nowpage
        },
        changePagesize(state,{pagesize}){
            state.pageSize=pagesize
        }
    },
    //副作用方法,用于进行逻辑判断,以及拉取数据
    actions:{
        loadInfo({state,commit}){
            $.get(`/api/student?_limit=${state.pageSize}&_page=${state.nowPage}`,function(data,statu,xhr){
                commit("changeArr",{arr:data})
                var total = Number(xhr.getResponseHeader("x-total-count"));
                commit("changeTotal",{total}) 
            })
        },
        changeNowpage({commit,dispatch},{nowpage}){

            commit("changeNowpage",{nowpage});
            dispatch("loadInfo")
        },
        changePagesize({commit,dispatch},{pagesize}){
            commit("changePagesize",{pagesize});
            commit("changeNowpage",{nowpage:1});
            dispatch("loadInfo")
        }
    }
}