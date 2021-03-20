<template>
    <div>
        <h2>
            <router-link to='/'>View List</router-link>
        </h2>
        <hr>
        <div class="form-container">
            <form action="" @submit.prevent>
                <h3>種類:</h3>
                <input type="radio" id="type1" name="type" value="複方" v-model="type">
                <label for="type1">複方</label><br>
                <input type="radio" id="type2" name="type" value="單方" v-model="type">
                <label for="type2">單方</label><br>
                
                <div class="row">
                    <label for="品號">品號:</label>
                    <input type="text" v-model="number"> <br>
                </div>

                <div class="row">
                    <label for="品名">品名:</label>
                    <input type="text" v-model="name"> <br>
                </div>
                
                <div class="row">
                    <label for="時價">時價:</label>
                    <input type="text" v-model="price"> <br>
                </div>

                <div class="row">
                    <label for="健保代號">健保代號:</label>
                    <input type="text" v-model="hicode"> <br>
                </div>

                <div class="row">
                    <label for="第一次筆畫分類">第一次筆畫分類:</label>
                    <input type="text" v-model="firstStrokeClass"> <br>
                </div>

                <div class="row">
                <label for="備註">備註:</label>
                <input type="text" v-model="remark"> <br>
                </div>

                <div class="row">
                    <label for="組成">組成:</label>
                    <input type="text" v-model="composition"> <br>
                </div>

                <button @click="insert()">Insert</button>
                <button @click="query()">Query</button>
                <button @click="update()">Update</button>
                <button @click="deleteItem()">Delete</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PostService from '@/PostService';

export default {
    name: 'edit-component',
    data() {
        return {
            medicine1: [],
            medicine2: [],
            type: null,
            number: null,
            name: null,
            price: null,
            hicode: null,
            firstStrokeClass: null,
            remark: null,
            composition: null,
        }
    },
    methods: {
        ...mapActions(['insertItemOne', 'insertItemTwo']),
        update() {
            var data = {
                id: '',
                number: this.number,
                name: (this.name ? this.name  : ''),
                price: (this.price ? this.price : ''),
                hicode: (this.hicode ? this.hicode : ''),
                classFirstStroke: (this.firstStrokeClass ? this.firstStrokeClass : ''),
                remark: (this.remark ? this.remark : ''),
                composition: (this.composition ? this.composition : ''),
            }
            if(this.type === '複方') {
                if(this.number){
                    var flag = false;
                    for(var i=0; i<this.allItemsSheetOne.length; i++) {
                        if(this.number == this.allItemsSheetOne[i].number){
                            console.log(this.allItemsSheetOne[i]._id);
                            data.id = this.allItemsSheetOne[i]._id;
                            flag = true;
                            break;
                        }
                    }
                    if(flag)
                        PostService.updateItem(data).then(() => {
                            this.clear();
                        });
                    else alert('The number does not exist');
                }
                else alert('Enter Number of the Item');

            } else if(this.type === '單方') {
                var flag2 = false;
                for(var j=0; j<this.allItemsSheetTwo.length; j++) {
                    if(this.number === this.allItemsSheetTwo[j].number){
                        console.log(this.allItemsSheetTwo[j]._id);
                        data.id = this.allItemsSheetTwo[j]._id;
                        flag2 = true;
                        break;
                    }
                }
                if(flag2)
                    PostService.updateItem2(data).then(() => {
                        this.clear();
                    });
                else alert('The number does not exist');
            } else alert('Please Select Type');
        },
        query() {
            if(this.type === '複方') {
                if(this.number){
                    var index = 0, flag = false;
                    for(var i=0; i<this.allItemsSheetOne.length; i++) {
                        if(this.number == this.allItemsSheetOne[i].number){
                            index = i;
                            flag = true;
                            break;
                        }
                    }
                    if(flag) {
                        this.number = this.allItemsSheetOne[index].number;
                        this.name = this.allItemsSheetOne[index].name;
                        this.price = this.allItemsSheetOne[index].price;
                        this.hicode = this.allItemsSheetOne[index].hicode;
                        this.firstStrokeClass = this.allItemsSheetOne[index].classFirstStroke;
                        this.remark = this.allItemsSheetOne[index].remark;
                        this.composition = this.allItemsSheetOne[index].composition;
                    }
                    else alert('The number does not exist');
                }
                else alert('Enter Number of the Item');

            } else if(this.type === '單方') {
                var index2 = 0, flag2 = false;
                
                for(var j=0; j<this.allItemsSheetTwo.length; j++) {
                    console.log(this.number, this.allItemsSheetTwo[j].number)
                    if(this.number === this.allItemsSheetTwo[j].number){
                        index2 = j;
                        flag2 = true;
                        console.log(this.allItemsSheetTwo[j])
                        break;
                    }
                }
                if(flag2) {
                    this.number = this.allItemsSheetTwo[index2].number
                    this.name = this.allItemsSheetTwo[index2].name
                    this.price = this.allItemsSheetTwo[index2].price
                    this.hicode = this.allItemsSheetTwo[index2].hicode
                    this.firstStrokeClass = this.allItemsSheetTwo[index2].classFirstStroke
                    this.remark = this.allItemsSheetTwo[index2].remark
                    this.composition = this.allItemsSheetTwo[index2].composition
                }
                else alert('The number does not exist');
            } else alert('Please Select Type');
        },
        insert() {
            var data = {
                number: this.number,
                name: this.name,
                price: this.price,
                hicode: this.hicode,
                classFirstStroke: this.firstStrokeClass,
                remark: this.remark,
                composition: this.composition,
            }
            if(this.type === '複方') {
                this.insertItemOne(data).then(() => {
                    this.clear();
                    console.log(this.allItemsSheetOne);
                });
            } else if(this.type === '單方') {
                this.insertItemTwo(data).then(() => {
                    this.clear();
                });
            } else {
                alert('Please select type');
            }
        },
        deleteItem() {
            if(this.type === '複方') {
                if(this.number){
                    var id = '', flag = false;
                    for(var i=0; i<this.allItemsSheetOne.length; i++) {
                        if(this.number == this.allItemsSheetOne[i].number){
                            id = this.allItemsSheetOne[i]._id;
                            flag = true;
                            break;
                        }
                    }
                    if(flag)
                        PostService.deleteItem(id).then(() => {
                            this.clear();
                        });
                    else alert('The number does not exist');
                }
                else alert('Enter Number of the Item');

            } else if(this.type === '單方') {
                var id2 = '', flag2 = false;
                for(var j=0; j<this.allItemsSheetTwo.length; j++) {
                    if(this.number === this.allItemsSheetTwo[j].number){
                        id2 = this.allItemsSheetTwo[j]._id;
                        flag2 = true;
                        break;
                    }
                }
                if(flag2)
                    PostService.deleteItem2(id2).then(() => {
                        this.clear();
                    });
                else alert('The number does not exist');
            } else alert('Please Select Type');
        },
        clear() {
            this.number = null;
            this.name = null;
            this.price = null;
            this.hicode = null;
            this.firstStrokeClass = null;
            this.remark = null;
            this.composition = null;
        },
        ...mapActions(['fetchItemsOne', 'fetchItemsTwo'])
    },
    computed: mapGetters(['allItemsSheetOne', 'allItemsSheetTwo']),
    async created() {
        await this.fetchItemsOne();
        await this.fetchItemsTwo();
    }
}
</script>

<style scoped>
    form button {
        margin: 1em;
    }
    .row {
        margin: 1em;
    }
    form label {
        display: inline-block;
        width: 200px;
    }
</style>