<template>
    <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="container">
            <a class="navbar-brand logo" href="/"><img src="../assets/styles/Logo_imi_horizontal.svg" alt="logo"></a>
            <div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item menu-link" v-for="(menu, index) in headerMenuList" :key="index">
                        <router-link class="nav-link  active" aria-current="page" :to="menu.path">{{ menu.name
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'HeaderContainer',
    props: {
        msg: String,
    },
    data() {
        return {
            headerMenuList: [
                { name: 'Форма', path: '/' },
                { name: 'Превью', path: '/preview' }
            ],
        }
    },
}
</script>
<style scoped lang="scss">
@import '../assets/layouts/index.scss';

.navbar {
    height: 76px;
box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.10);
}

.logo {
    padding-right: 473px;
}

.collapse-fontsize {
    font-size: 14px;
}

.menu-link {
    margin-right: 24px;
}

.nav-link {
    color: $header !important;
}
</style>