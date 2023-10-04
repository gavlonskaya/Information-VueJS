<template>
    <div class="form">
        <div class="container-main">
            <div class="form__title">Персональные данные</div>
            <form class="personal-info-form" @submit.prevent="saveData">
                <div class="form-group">
                    <label for="name">Имя</label>
                    <input type="text" id="name" v-model="name" @input="limitAdultName" />
                </div>
                <div class="form-group">
                    <label for="age">Возраст</label>
                    <input type="text" id="age" v-model="age" @input="limitAdultAge" />
                </div>
                <div class="form__title child">
                    <div class="child-title">Дети (макс. 5)</div>
                    <button class="add-child-button" @click="addChild" v-if="canAddChild">
                        <img src="../assets/styles/plus.svg" />
                        Добавить ребенка
                    </button>
                </div>
                <div v-if="showChildForm">
                    <div v-for="(child, index) in children" :key="index">
                        <div class="form-group child-form-group">
                            <label :for="'childName' + index">Имя</label>
                            <input :id="'childName' + index" v-model="child.name" @input="limitChildName(index)" />
                        </div>
                        <div class="form-group child-form-group">
                            <label :for="'childAge' + index">Возраст</label>
                            <input :id="'childAge' + index" v-model="child.age" @input="limitChildAge(index)" />
                        </div>
                        <button class="delete-child-button" @click="removeChild(child)">Удалить</button>
                    </div>
                </div>
                <button class="save-button" type="submit">Сохранить</button>
            </form>

        </div>


    </div>
</template>

<script>
export default {
    name: "FormContainer",
    data() {
        return {
            name: "",
            age: null,
            children: [],
            showChildForm: false,
            childName: '',
            childAge: null,
        };
    },
    computed: {
        canAddChild() {
            return this.children.length < 5;
        },
        isDataValid() {

            const isAdultDataValid = this.name && this.age !== null;


            const isChildrenDataValid = this.children.every(child => child.name && child.age !== null);

            return isAdultDataValid && isChildrenDataValid;
        },
    },
    methods: {
        isAgeValid(age) {

            return age !== null && age >= 0 && age <= 99;
        },
        limitAdultName() {
            this.name = this.name.replace(/[^A-Za-zА-Яа-яЁё]+/g, "");
        },
        limitAdultAge() {
            this.age = this.age.replace(/\D/g, "");
            this.age = this.age.replace(/^0+/, "");
            if (this.age.length > 2) {
                this.age = this.age.slice(0, 2);
            }
            const ageNumber = parseInt(this.age);
            if (isNaN(ageNumber)) {
                this.age = "";
            } else if (ageNumber > 99) {
                this.age = "99";
            }
        },
        limitChildName(index) {
            this.children[index].name = this.children[index].name.replace(
                /[^A-Za-zА-Яа-яЁё]+/g,
                ""
            );
        },
        limitChildAge(index) {
            this.children[index].age = this.children[index].age.replace(/\D/g, "");
            this.children[index].age = this.children[index].age.replace(/^0+/, "");
            if (this.children[index].age.length > 2) {
                this.children[index].age = this.children[index].age.slice(0, 2);
            }
            const ageNumber = parseInt(this.children[index].age);
            if (isNaN(ageNumber)) {
                this.children[index].age = "";
            } else if (ageNumber > 99) {
                this.children[index].age = "99";
            }
        },
        addChild() {
            if (this.children.length < 5) {
                this.children.push({
                    name: "",
                    age: null,
                });
                this.showChildForm = true;
                this.$store.dispatch('updateChildren', this.children);
            }
        },
        removeChild(childToRemove) {
            const index = this.children.indexOf(childToRemove);
            if (index !== -1) {
                this.children.splice(index, 1);
                this.$store.dispatch('updateChildren', this.children);
            }
        },

        saveData() {
            if (!this.isDataValid) {

                return;
            }
            const updatedData = {
                name: this.name,
                age: this.age,
                children: this.children,
            };

            this.$store.dispatch('updateFormData', updatedData);
            console.log("Данные сохранены:", updatedData);
        },
    },

};

</script>
  
<style scoped lang="scss">
@import '../assets/layouts/index.scss';
</style>
