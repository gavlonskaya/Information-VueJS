<template>
    <div class="form">
        <div class="container-main">
            <div class="form__title">Персональные данные</div>
            <form class="personal-info-form">
                <div class="form-group">
                    <label for="name">Имя</label>
                    <input type="text" id="name" v-model="name" @input="limitName" />
                </div>
                <div class="form-group">
                    <label for="age">Возраст</label>
                    <input type="text" id="age" v-model="age" @input="limitAge" />
                </div>
            </form>
            <div class="form__title child">
                <div class="child-title">Дети (макс. 5)</div>
                <button class="add-child-button" @click="addChild">
                    <img src="../assets/styles/plus.svg" />
                    Добавить ребенка
                </button>
            </div>
            <form class="personal-info-form">
                <div v-for="(child, index) in children" :key="index">
                    <div class="form-group child-form-group">
                        <label :for="'childName' + index">Имя</label>
                        <input :id="'childName' + index" v-model="child.name" @input="limitChildName(index)" />
                    </div>
                    <div class="form-group child-form-group">
                        <label :for="'childAge' + index">Возраст</label>
                        <input :id="'childAge' + index" v-model="child.age" @input="limitChildAge(index)" />
                    </div>
                </div>
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
            children: [

                {
                    name: "",
                    age: null,
                },
            ],
        };
    },
    methods: {
        limitName() {
            // ...
        },
        limitAge() {
            // ...
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
            }
        },
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

    .add-child-button img {
        margin-right: 8px;

    }

}
</style>
  