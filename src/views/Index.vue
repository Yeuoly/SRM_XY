<template>
    <div>
        <VCarousel :height="componentHeight" :cycle="false">
            <VCarouselItem v-for="(t , key) in msg" :key="key" :src="t.img">
                <VCard class="index-carousel-card" flat>
                    <h1 class="index-carousel-card-textbox">
                        <span style="margin: auto">{{t.text}}</span>
                    </h1>
                </VCard>
            </VCarouselItem>
        </VCarousel>
        <VContainer>
            <MaterialCard title="这个破网站用到的工具">
                <h4>前端</h4>
                <li>Vue.js，这是一个渐进式的js框架</li>
                <li>Vue-Router，Vue官网推出的Vue路由，将会给您带来更好的前端浏览体验</li>
                <li>Vuetify，Vuetify基于Vue与Material Design，是一个强大的Vue组件库</li>
                <li>MaterialDashBoard，基于bootstrap4的一个UI设计</li>
                <li>部分代码直接来源于见齐（Jannchie）的开源项目：biliob</li>
            </MaterialCard>
            <MaterialCard title="一些必要知道的">
                <li>
                    这个网站由我自己维护，当然我认为它将会一直是一个静态网站，不会有什么维护，
                    必要的时候会在您的计算机中储存cookie，如果您不希望被储存此类数据的话还是点
                    右上角关掉这个网站的好。
                </li>
                <li>
                    网站开源在:<VBtn flat text color="primary" @click.stop="toGithub">github</VBtn>
                </li>
            </MaterialCard>
        </VContainer>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                msg: [{
                    text: '欢迎来到我的网站',
                    img: 'https://s2.ax1x.com/2019/06/08/VDuHG8.png'
                }, {
                    text: '这是一个单纯的欢迎界面啦',
                    img: 'https://s2.ax1x.com/2019/06/08/VDuXrj.png'
                }, {
                    text: '开源的',
                    img: 'https://s2.ax1x.com/2019/06/14/V43UW6.png'
                }]
            }
        },
        computed : {
            componentHeight(){
                return this.$vuetify.breakpoint.mdAndUp
                    ? this.$vuetify.breakpoint.height
                    : 400;
            }
        },
        methods: {
            toGithub(){
                location.href = 'https://www.github.com/Yeuoly/SRM_XY';
            }
        }
    }
</script>

<style scoped>
    .index-carousel-card{
        position: relative;
        background-color: rgba(0,0,0,.35) !important;
        height: 100%;
        width: 100%;
    }

    .index-carousel-card-textbox{
        position: absolute;
        top: calc((100% - 400px) / 2);
        left: calc((100% - 600px) / 2);
        width: 600px;
        height: 400px;
        font-size: 60px;
        text-align: center;
        color: aliceblue;
        display: flex;
        align-items: center;
    }

    @media (max-width: 600px) {
        .index-carousel-card-textbox{
            font-size: 25px;
            width: 400px;
            left: calc((100% - 400px) / 2);
        }
    }

    @media (max-width: 500px) {
        .index-carousel-card-textbox{
            font-size: 20px;
            width: 350px;
            left: calc((100% - 350px) / 2);
        }
    }

    @media (max-width: 400px) {
        .index-carousel-card-textbox{
            font-size: 16px;
            width: 300px;
            left: calc((100% - 300px) / 2);
        }
    }

    .index-iconfont{
        margin-right: 10px;
    }
</style>