<template>
    <header class="header">
        <div class="header__wrapper container">
            <div class="header__wrapper_logo">
                {{ $t('logo') }}
            </div>
            <ul class="header__wrapper_nav">
                <li class="header__wrapper_nav-link"><a href="#"> {{ $t('nav.home') }}</a></li>
                <li class="header__wrapper_nav-link"><a href="#banner"> {{ $t('nav.about') }}</a></li>
                <li class="header__wrapper_nav-link"><a href="#skills"> {{ $t('nav.stack') }}</a></li>
                <li class="header__wrapper_nav-link"><a href="#work"> {{ $t('nav.projects') }}</a></li>
                <li class="header__wrapper_nav-link"><a href="#contact"> {{ $t('nav.contact') }}</a></li>
            </ul>
            <div class="header__wrapper_transleite">
                <button class="header__wrapper_transleite-btn" @click="switchLang">{{ $i18n.locale }}</button>
            </div>
            <BtnAnimation />
        </div>
    </header>
</template>
  
<script>
import BtnAnimation from "@/components/BtnAnimation.vue";
import { mapState } from 'vuex';
export default {
    components: { BtnAnimation },
    methods: {
        ...mapState(['mode']),
        switchLang() {
            this.$i18n.locale == 'ru' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'ru'
        }
    },
}
</script>