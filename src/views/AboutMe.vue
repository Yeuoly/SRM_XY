<template>
    <VContainer>
        <HeaderSpacer />
        <MaterialCard title="关于我">
            <hr>
            <h4>基本的</h4>
            <li v-for="(t , key) in info.base" :key="key">
                {{t}}
            </li>
            <hr>
            <h4>编程相关</h4>
            <li v-for="(t , key) in info.programming.text" :key="key + infoBaseLength">
                {{t}}
            </li>
            <li>
                <VCard>
                    <VCardTitle>下面是我编程的学习历程，中二模式，on!</VCardTitle>
                    <VCardText>
                        <VTimeline align-top dense>
                            <VTimelineItem small
                                           v-for="(t , key) in info.programming.timeline"
                                           :key="key"
                            >
                                <v-layout pt-3>
                                    <v-flex xs3 sm2 md1>
                                        <h5>{{t.timestamp}}</h5>
                                    </v-flex>
                                    <v-flex xs9 sm10 md11>
                                        <h4>{{t.title}}</h4>
                                        <div class="caption"
                                             v-for="(d , key) in t.text"
                                             :key="key"
                                        >
                                            {{d}}
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </VTimelineItem>
                        </VTimeline>
                    </VCardText>
                </VCard>
            </li>
            <hr>
        </MaterialCard>
    </VContainer>
</template>

<script>
    import HeaderSpacer from "../components/common/HeaderSpacer";
    export default {
        name: "AboutMe",
        components: {HeaderSpacer},
        computed : {
            infoBaseLength(){
                return this.info.base.length;
            }
        },
        data(){
            return{
                info : {
                    base : [
                        '可以叫我星宇，也可以叫我芸璃，这俩是同一个人，也就是SRM_XY和Yeuoly。',

                        '是个死宅，不过没什么追新番的动力了，' +
                        '某种方面是现在的新番确实不大和我的胃口，很少看到我认为是精品的番。'
                        ,
                        '喜欢的番大多是像《k-on》《New Game》这样的番，当然，《Fate》系列《魔禁》系列也都还行。',

                        '游戏基本不玩，一方面是以前玩得太多了，现在差不多也都厌倦了；二是觉得有点浪费时间，' +
                        '比起在游戏上花这么多时间，我宁愿多写几行代码。',

                        '关于女装，别问，问就是喜欢。',

                        '还是学生，高中生，还要准备高考，所以很多项目的速度都会慢很多，或者说干脆停掉。'
                    ],
                    programming : {
                        text : [
                            '前端后端都做，主要还是在做后端，前端算是自己玩的，而且从不懂编程的人的角度来看，' +
                            '后端基本看不出什么厉害的地方，大多数人都会比较喜欢前端的设计或者是特效啥的，' +
                            '这就是我说的玩玩。',

                            '需要特别声明的是，我特别菜。',
                        ],
                        timeline : [{
                            title : '种子',
                            timestamp : '2011',
                            text : [
                                '学校开了电脑，具体我也记不清了，大概就是我是当时我们全校打字最快的，' +
                                '然后被同学冠以“电脑天才”的称号，从四年级到六年级基本都是这么过来的，' +
                                ' 差不多也就习惯了，这期间接触了vb，当时的电脑里有这个东西，只不多我只是' +
                                '瞎搞，这期间还接触了Minecraft，这大概才是真正的种子。'
                            ]
                        },{
                            title : '萌芽',
                            timestamp : '2014',
                            text : [
                                '到了初中，当时有一个小学跟我一个班的同学还是跟我在一个班，他似乎很快就' +
                                '成为了班上的较为中心的人物，然后我的“电脑天才”的称号一下子就在班里传开了，' +
                                '但我真的不懂啊，没办法，开始学呗。',

                                '第一个开始学习的：CMD，我相信很多人都是从CMD开始的，因为这是我们最好接触' +
                                '的跟编程有关的东西之一。',

                                '其实具体的说，是当时在学习Minecraft搭建服务器，想要和小伙伴一起玩，' +
                                '在看教程的过程中看到了用批处理打开JRE然后运行服务器的操作，当时给我的感觉就是' +
                                '这么短的代码就可以开服务器了？？？深深感到震惊，于是就开始瞎玩起了CMD'
                            ]
                        },{
                            title : '开始',
                            timestamp : '2015',
                            text : [
                                '虽然说是初一就有接触CMD，但是由于整个初一成谜于MC红石，花费了大量的时间在' +
                                '红石上（主要是打记录），也就没怎么管编程，随意就GG。初二开始，在团队里某个' +
                                '成员的带动下开始学习C++，当然那个时候我还没脱坑，依旧在红石的坑里orz，所以' +
                                '也就只会些最基本的int main()啥的，xd。',
                            ]
                        },{
                            title : '入门',
                            timestamp : '2016',
                            text : [
                                '买了一本C++ Primer Plus看了起来，然后各种地方找教程，最终在一个叫潭州教育' +
                                '的地方看了一个晚上的《C++打造推箱子小游戏》，正式入门（还没，总之就是这个' +
                                '小游戏给了我相当大的学习动力，当时还兴奋了好久。',
                            ]
                        },{
                            title : '接触WEB',
                            timestamp : '2016',
                            text : [
                                '小游戏终究是小游戏，而且还是不联网的，要命啊，所以开始学习网络编程，最开始是' +
                                'C++的SOCKET，学得很吃力，不过还是勉强坚持下来了，自己封装了一套SOCKET用的' +
                                'C++库，主要是为了方便使用SOCKET，原生情况下C++的SOCKET真不太好用。后来还' +
                                '接触了html css php这些东西，但由于纯属瞎玩的，就被团队里某个人黑得死去活来，' +
                                '一下是被提权，一下又是被注入，这大概就是不去系统学习纯瞎玩的代价吧orz。',
                            ]
                        },{
                            title : '突破',
                            timestamp : '2018',
                            text : [
                                '整个17年都在整Qt（其实说白了还是瞎玩），18年的上半年放弃了Qt，写了一个自己' +
                                '实现的比较简陋的Windows Terminal，它是一个支持网络的终端，支持伪协同开发，' +
                                '具体点说就是有两个版本的终端，一个服务端一个客户端，通过服务端完成两个客户端' +
                                '之前的文件同步，同时可以在被允许的情况下通过指令操控另一个客户端所在的电脑，当然' +
                                '啊，自己也可以用同样的方式操控自己的电脑（通过ll li cd rm cr这些指令），' +
                                '只是在远程的时候需要先通过一个connect指令连接目标主机，然后在指令后加上-rmt。' +
                                '并没有完成Mac Linux两个系统的这些功能，所以叫Windows Terminal。我的C++的' +
                                '旅程大概就在这结束了，后面就没怎么再碰了。',
                            ]
                        },{
                            title : '进入WEB开发',
                            timestamp : '2019',
                            text : [
                                '18年下半年和19年都在学习WEB相关的知识，目前学习了大概有React Vue Vuetify' +
                                'ElementUI ThinkPHP Lumen MySQL MongoBD' +
                                ' MaterialDeign(这个算不上是学，只是用) Linux Nginx等等',
                            ]
                        }]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>