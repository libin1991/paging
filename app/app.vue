<template>
    <div>
<!-- 展示 -->
           <Table :columns="col" :data="info"></Table>
 
<!-- 分页条 -->
    <Page :total="total" show-sizer show-total  :current="nowPage" @on-change="changeNowpage" @on-page-size-change="changePagesize"  />
    </div>
</template>
<script>
    export default {
        created(){
        this.$store.dispatch("info/loadInfo")
        },
        data () {
            return {
                col: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '家乡',
                        key: 'home',
                        width:'150px'
                    },
                    {
                        title: '学历',
                        key: 'education'
                    }
                ]
            }
        },
        computed:{
            info(){
                return this.$store.state.info.arr
            },
            total(){
                return this.$store.state.info.total
            },
            nowPage(){
                return this.$store.state.info.nowPage
            }
        },
        methods:{
            changeNowpage(v){
                this.$store.dispatch("info/changeNowpage",{nowpage:v})
            },
            changePagesize(v){
                this.$store.dispatch("info/changePagesize",{pagesize:v})
            }
        }
    }
    //app
</script>

<style scoped lang="less">
div{
    width:700px;
    margin:50px auto;

}
</style>