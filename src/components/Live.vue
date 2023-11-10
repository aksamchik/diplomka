<template>
    <div class="line">
        <a :href="`https://aksamchik.github.io/${wor.urlLine}`" target="_blank">
            <img src="../assets/img/liveBtn.svg" alt="">
            Live Preview
        </a>
    </div>
</template>

<script>
export default {
    props: ['wor'],
}
</script>

<style lang="scss" scoped>
.line {
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        text-decoration-line: underline;
    }
}
</style>