<template>
    <footer class="footer">
        <div class="footer__title">all right reserved</div>
    </footer>
</template>
<script>

export default {
    name: 'FooterContainer',
    props: {
        msg: String,
    },
    data() {
        return {

        }
    },
}
</script>
<style scoped lang="scss">
@import '../assets/layouts/index.scss';

.footer {
    height: 76px;
    background: $footer;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.footer__title {
    font-size: 13px;
    color: $black;
    text-align: center;
}
</style>