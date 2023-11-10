<template>
    <div class="git">
        <a :href="`https://github.com/aksamchik/${wor.urlGit}`" target="_blank">
            <img src="../assets/img/gitBtn.svg" alt="">
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
.git {
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