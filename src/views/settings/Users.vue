<template>
    <Card title="Users">
        <Table :items="cItems" :header="header"></Table>
    </Card>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import Checkbox from '@/components/Checkbox.vue';
import { useMainStore } from '../../stores/main';
import Table from '@/components/Table.vue';


export default {
    components : {
        Card,
        Checkbox,
        Table
    },
    setup() {
        return {
            store : {
                main : useMainStore()
            }
        }
    },
    data : () => ({
        header : [{
            name : 'Name',
            value : 'fullname'
        }, {
            name : 'Login',
            value : 'login'
        }, {
            name : '',
            value : 'action'
        }],
        users : [{
            _id : 1,
            firstname : 'Hart',
            lastname : 'Hagerty',
            login : true
        }]
    }),
    computed : {
        cItems() {
            return this.users.map(({ _id, firstname, lastname, login}) => {
                return {
                    _id,
                    firstname,
                    lastname,
                    fullname : `${firstname} ${lastname}`,
                    login,
                }
            })
        }
    }
}
</script>
  