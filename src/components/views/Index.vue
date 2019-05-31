<template>
    <div>
        <VCarousel height="100%" min-height="400px">
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
            </MaterialCard>
        </VContainer>
    </div>
</template>

<script>

    export default {
        name: "Index",
        data(){
            return{
                length : 3,
                onBoarding : 1,
                msg : [{
                    text : '欢迎来到我的网站',
                    img : 'http://i2.bvimg.com/689260/5a6fa2c802460762.png'
                },{
                    text : '这是一个单纯的欢迎界面啦',
                    img : 'http://i2.bvimg.com/689260/f8145eb781232d76.jpg'
                }],
                thanks : [{
                    icon : 'Vue',
                    name : 'Vue.js',
                    about : 'Vue是一个渐进式的js框架'
                },{
                    icon : '',
                    name : 'Vue.js',
                    about : ''
                },{
                    icon : '',
                    name : 'Vue.js',
                    about : ''
                }]
            }
        },
        methods: {
            next () {
                this.onBoarding = this.onBoarding + 1 === this.length
                    ? 0
                    : this.onBoarding + 1
            },
            prev () {
                this.onBoarding = this.onBoarding - 1 < 0
                    ? this.length - 1
                    : this.onBoarding - 1
            }
        }
    }
</script>

<style scoped>
    .index-carousel-card{
        position: relative;
        background: rgba(0,0,0,.24);
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

    .index-iconfont{
        margin-right: 10px;
    }
</style>