<template>
    <div class="card">
        <img :src="require(`../assets/img/${wor.img}.png`)" alt="">
        <div class="card__wrapper">
            <h3>{{ wor.name }}</h3>
            <p>{{ wor.desc }}</p>
            <span>{{ wor.stack }}</span>
            <div class="card-btn">
                <Live :wor="wor" />
                <Git :wor="wor" />
            </div>
        </div>
    </div>
</template>

<script>
import Git from './Git.vue';
import Live from './Live.vue';
export default {
    props: ['wor'],
    components: { Live, Git },
}
</script>

<style lang="scss" scoped>
@mixin media($size) {
    @media screen and (max-width: #{$size}px) {
        @content;
    }
}

.card {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
padding: 60px 0;
    img {
        border-radius: 20px 20px 0px 0px;
        max-width: 500px;
        height: 220px;
        width: 100%;
    }

    &__wrapper {
        padding: 27px 30px;

        display: flex;
        gap: 20px;
        flex-direction: column;
        border-radius: 0px 0px 20px 20px;
        background: #FFF;
        box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
    }

    &-btn {
        display: flex;
        gap: 20px;
    }
}
</style>