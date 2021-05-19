<template>
    <VContainer>
        <HeaderSpacer />
        <MaterialProgressCard :value="90"
                              :small-value="100"
                              title="FxxkXSS"
                              sub-text="一个专注于后台XSS攻击的工具"
                              @click="toFxxkXSS"
        >
        </MaterialProgressCard>
        <p style="height: 20px"></p>
        <MaterialProgressCard :value="90"
                              :small-value="100"
                              title="YeuolyDanmuJi"
                              sub-text="一个具有比较高自定义性的B站直播弹幕姬"
                              @click="toFxxkXSS"
        >
        </MaterialProgressCard>
        <p style="height: 20px"></p>
        <MaterialProgressCard :value="35"
                              :small-value="100"
                              title="YueolyBlog_FrontEnd"
                              sub-text="一个信息流产品的前端"
                              @click="toYeuolyBlogFrontEnd"
        >
        </MaterialProgressCard>
        <p style="height: 20px"></p>
        <MaterialProgressCard :value="39"
                              :small-value="100"
                              title="YueolyBlog_BackEnd"
                              sub-text="一个信息流产品的后端，暂不开源"
        >
        </MaterialProgressCard>
        <p style="height: 20px"></p>
        <MaterialProgressCard :value="80"
                              :small-value="100"
                              title="SRM_XY"
                              sub-text="就这个网站"
                              @click="toSRMXY"
        >
        </MaterialProgressCard>
        <p style="height: 20px"></p>
        <MaterialProgressCard :value="60"
                              :small-value="100"
                              title="DDStation"
                              sub-text="确切的说不是我的项目，是鸡腿做的一个东西"
                              @click="toDDStation"
        >
        </MaterialProgressCard>
        <p style="height: 20px"></p>
    </VContainer>
</template>

<script>
    import HeaderSpacer from "../components/common/HeaderSpacer";
    export default {
        name: "Project",
        components: {HeaderSpacer},
        methods : {
            github(pro,user){
                if(typeof user === 'undefined')
                    location.href = 'https://github.com/Yeuoly/' + pro;
                else
                    location.href = 'https://github.com/' + user + '/' + pro;
            },
            toYeuolyBlogFrontEnd(){
                this.github('YeuolyBlog_FrontEnd');
            },
            toSRMXY(){
                this.github('SRM_XY');
            },
            toDDStation(){
                this.github('DDStation','KenAtlas')
            },
            toFxxkXSS(){
                this.github('FxxkXSS');
            }
        }
    }
</script>

<style scoped>

</style>