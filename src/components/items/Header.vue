<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <VToolbar app dark height="50" :scroll-off-screen="true" style="background-color: #444">
        <VToolbarTitle class="headline text-uppercase">
            <span>SRM_XY</span>
        </VToolbarTitle>
            <VToolbarItems class="hidden-sm-and-down toolbar-items">
                <VBtn flat @click="router('index')">
                    <CommonYIcon class="toolbar-items-icon">home</CommonYIcon>
                    <span>主页</span>
                </VBtn>
                <VBtn flat @click="router('aboutme')">
                    <CommonYIcon class="toolbar-items-icon">about</CommonYIcon>
                    <span>关于</span>
                </VBtn>
                <VBtn flat @click="router('project')">
                    <CommonYIcon class="toolbar-items-icon">xiangmu</CommonYIcon>
                    <span>项目</span>
                </VBtn>
                <VBtn flat @click="router('contact')">
                    <CommonYIcon class="toolbar-items-icon">contact</CommonYIcon>
                    <span>联系</span>
                </VBtn>
            </VToolbarItems>
        <VSpacer></VSpacer>
            <VToolbarItems class="hidden-md-and-up">
                <VMenu color="white" offset-y origin="center center" class="toolbar-menu" transition="scale-transition">
                    <template v-slot:activator="{ on }">
                        <VBtn flat v-on="on">
                            <CommonYIcon>ego-menu</CommonYIcon>
                        </VBtn>
                    </template>
                    <VBtn flat @click="router('index')">
                        <CommonYIcon class="toolbar-items-icon">home</CommonYIcon>
                        <span>主页</span>
                    </VBtn>
                    <VBtn flat @click="router('aboutme')">
                        <CommonYIcon class="toolbar-items-icon">about</CommonYIcon>
                        <span>关于</span>
                    </VBtn>
                    <VBtn flat @click="router('project')">
                        <CommonYIcon class="toolbar-items-icon">xiangmu</CommonYIcon>
                        <span>项目</span>
                    </VBtn>
                    <VBtn flat @click="router('contact')">
                        <CommonYIcon class="toolbar-items-icon">contact</CommonYIcon>
                        <span>联系</span>
                    </VBtn>
                </VMenu>
            </VToolbarItems>
    </VToolbar>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                routesLinks : [{
                    name : '主页',
                    route : 'index'
                },{
                    name : '关于',
                    route : 'aboutme'
                },{
                    name : '项目',
                    route : 'project'
                },{
                    name : '联系',
                    route : 'contact'
                }]
            }
        },
        methods : {
            router(name){
                this.$router.push({name : name});
            }
        }
    }
</script>

<style scoped>
    .toolbar-items{
        margin-left: 10px !important;
    }

    .toolbar-items-icon{
        margin-right: 5px;
        font-size: 20px;
    }

    .toolbar-menu{
        background-color: white !important;
    }

    .v-menu__content{
        background-color: white;
    }
</style>