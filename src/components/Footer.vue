<template>
    <footer class="footer container" id="contact">
        <div class="footer__wrapper">
            <div class="header__wrapper_logo">
                {{ $t('logo') }}
            </div>
            <div class="footer__wrapper_desc">
                <a target="_blank" href="tel:+998 90 933 65 42">Tel: +998 90 933 65 42</a>
                <a target="_blank" href="mailto:aksam292882@gmail.com">Gmail: aksam292882@gmail.com</a>
                <a target="_blank" href="https://t.me/AkSam228">Telegram: AkSam228</a>
            </div>
        </div>
        <div class="lines"></div>
        <div class="footer__wrap">
            <div class="footer__wrap_desc">
                {{ $t('footer') }}
                <span>{{ $t('footerSpan') }}</span>
            </div>

        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>