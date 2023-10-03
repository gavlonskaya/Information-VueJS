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
                    <button class="add-child-button" @click="addChild">
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
        };
    },
    methods: {
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
                this.showChildForm = true; // Установите showChildForm в true
            }
        },
        removeChild(childToRemove) {
            const index = this.children.indexOf(childToRemove);
            if (index !== -1) {
                this.children.splice(index, 1);
            }
        }

    },

    computed: {

    },


};
</script>
  
<style scoped lang="scss">
@import '../assets/layouts/index.scss';


.container-main {
    padding: 30px 375px 136px;
}

.form {

    &__title {
        color: $primary;
        font-size: 16px;
        font-weight: 500;
    }

    .personal-info-form {
        margin-top: 20px;


        .form-group {
            margin-bottom: 10px;
            padding: 8px 16px 6px;
            width: 616px;
            height: 56px;
            border-radius: 4px;
            border: 1px solid ($border-form);
            background: $bg-form;


            label {
                display: block;
                color: $header;
                font-size: 13px;
            }

            input {
                color: $primary;
                font-size: 14px;
                border: none;
                outline: none;
            }

            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                appearance: none;
                margin: 0;
            }
        }

        .child-form-group {
            width: 260px;
            display: inline-block;
            margin-right: 18px;
            vertical-align: middle;

        }
    }


    .form__title.child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 44px;
        width: 616px;
    }

    .child-title {
        color: $primary;
        font-size: 16px;
        font-weight: 500;
    }

    .add-child-button {
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        padding: 10px 20px;
        border-radius: 100px;
        border: 2px solid $btn-blue;
        color: $btn-blue;
        font-size: 14px;
        background-color: $bg-form;
        float: right;

    }

    .delete-child-button {
        cursor: pointer;
        border: none;
        color: $btn-blue;
        font-size: 14px;
        background-color: $bg-form;
    }

    .save-button {
        margin-top: 30px;
        cursor: pointer;
        border-radius: 100px;
        border: none;
        color: $bg-form;
        font-size: 14px;
        background-color: $btn-blue;
        padding: 10px 20px;
    }

}
</style>
