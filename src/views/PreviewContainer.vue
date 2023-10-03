<template>
    <div class="preview">
        <div class="container-main">
            <div class="preview__title">Персональные данные</div>
            <div class="preview__data">, лет
            </div>
            <div class="preview__title">Дети</div>
            <div class="preview__data-child">
                , лет
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PreviewContainer",
    data() {
        return {

        };
    },

    methods: {

    },
}
</script>


  
<style scoped lang="scss">
@import '../assets/layouts/index.scss';


.container-main {
    padding: 30px 375px 136px;
}

.preview {

    &__title {
        color: $primary;
        font-size: 16px;
        font-weight: 500;
    }

    &__data {
        margin: 20px 0 60px;
        color: $primary;
        font-size: 16px;
        font-weight: 700;
    }

    &__data-child {
        margin: 20px 0 60px;
        color: $primary;
        font-size: 16px;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 5px;
        background: $border-form;
        display: inline-block;
    }
}
</style>
