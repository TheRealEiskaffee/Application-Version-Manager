<template>
    <div class="overflow-x-auto w-full">
        <table class="table">
            <thead>
                <tr>
                    <th v-if="selectable">
                        <label>
                            <Checkbox />
                        </label>
                    </th>
                    <th v-for="(head, index) in cHeader" :key="`th-${index}-${_id}`">
                        {{ head.name }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in cItems" :key="`tr-${index}-${_id}`">
                    <th v-if="selectable">
                        <label>
                            <Checkbox @click.exact.stop="select(item._id)" />
                        </label>
                    </th>
                    <td v-for="(key, subIndex) in cItemKeys" :key="`td-${index}-${subIndex}-${_id}`">
                        <slot :name="key">
                            {{ item[key] }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';
import Avatar from './Avatar.vue';
import { keys } from 'lodash';
import Checkbox from './Checkbox.vue';

export default {
    components: { 
        Avatar,
        Checkbox
    },
    name : 'Table',
    props : {
        header : {
            type : [Object],
            default : []
        },
        items : [Object],
        selectable : Boolean
    },
    setup() {
        return {
            keys
        }
    },
    data : () => ({
        _id : getCurrentInstance()?.uid,
        selected : [],
    }),
    computed : {
        cItems() {
            return this.items;
        },
        cHeader() {
            return this.header;
        },
        cItemKeys() {
            const result : string[] = [];

            this.header
                .forEach(({ value } : any) => {
                    result.push(value);
                });

            return result;
        }
    },
    methods : {
        select(_id : string) {
            console.log(_id)
        }
    }
}
</script>
  