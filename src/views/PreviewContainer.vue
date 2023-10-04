<template>
    <div class="preview">
        <div class="container-main">
            <div class="preview__title">Персональные данные</div>
            <div class="preview__data">
                {{ formData }}
            </div>
            <div class="preview__title">Дети</div>
            <div class="preview__data-child">
                <div v-for="(child, index) in childrenData" :key="index" class="child-container">
                    {{ child }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PreviewContainer",
    computed: {
        formData() {
            const formData = this.$store.getters.formData;
            if (formData && formData.name && formData.age) {
                return `${formData.name}, ${formData.age} лет`;
            }
            return null
        },

        childrenData() {
            const formData = this.$store.getters.formData;
            if (formData && formData.children) {
                return formData.children.map(
                    (child) => `${child.name}, ${child.age} лет`
                );
            }
            return null
        },

    },
};
</script>

<style scoped lang="scss">
@import '../assets/layouts/index.scss';
</style>
