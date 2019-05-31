<template>
    <i class="iconfont" :class="'icon'+iconName"></i>
</template>

<script>
    export default {
        name: "YIcon",
        computed : {
            iconName(){
                return this.$slots.default[0].text;
            }
        }
    }
</script>