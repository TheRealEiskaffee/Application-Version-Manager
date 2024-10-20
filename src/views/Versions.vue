<template>
    <div class="flex flex-col gap-3">
        <div class="w-full bg-neutral text-neutral-content p-2 rounded-md" v-for="(version, index) in versions" :key="`version-${index}-${version._id}`">
            {{ version.number }}
        </div>
    </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import SimpleDate from 'simple-date-operation';
import useVersionStore from '@/stores/version';

export default {
    components : {
        Card
    },
    setup() {
        return {
			store : {
				versions : useVersionStore()
			},
            SimpleDate,
        }
    },
    data : () => ({
        versions : [{
            _id : '',
            file : {
                name : 'app-v1.0.0',
                ext : '.exe',
                path : '',
                size : 123512,
                checksum : 'e99a18c428cb38d5f260853678922e03',
            },
            downloads : 0,
            number : '1.0.0',
            url : '',
            releaseNotes : '',
            tags : [], // stable, beta, security, initial-release
            platform : 'win32', //win32, linux, mac
            status : '', // active, deprecated, archived
            release : {
                date : new Date(),
                user : null
            },
            created : {
                date : new Date(),
                user : null
            },
            updated : {
                date : new Date(),
                user : null
            },
            deleted : {
                date : new Date(),
                user : null
            }
        }, {
            _id : '',
            file : {
                name : 'app-v1.0.0',
                ext : '.exe',
                path : '',
                size : 123512,
                checksum : 'e99a18c428cb38d5f260853678922e03',
            },
            downloads : 0,
            number : '1.0.0',
            url : '',
            releaseNotes : '',
            tags : [], // stable, beta, security, initial-release
            platform : 'win32', //win32, linux, mac
            status : '', // active, deprecated, archived
            release : {
                date : new Date(),
                user : null
            },
            created : {
                date : new Date(),
                user : null
            },
            updated : {
                date : new Date(),
                user : null
            },
            deleted : {
                date : new Date(),
                user : null
            }
        }, {
            _id : '',
            file : {
                name : 'app-v1.0.0',
                ext : '.exe',
                path : '',
                size : 123512,
                checksum : 'e99a18c428cb38d5f260853678922e03',
            },
            downloads : 0,
            number : '1.0.0',
            url : '',
            releaseNotes : '',
            tags : [], // stable, beta, security, initial-release
            platform : 'win32', //win32, linux, mac
            status : '', // active, deprecated, archived
            release : {
                date : new Date(),
                user : null
            },
            created : {
                date : new Date(),
                user : null
            },
            updated : {
                date : new Date(),
                user : null
            },
            deleted : {
                date : new Date(),
                user : null
            }
        }, {
            _id : '',
            file : {
                name : 'app-v1.0.0',
                ext : '.exe',
                path : '',
                size : 123512,
                checksum : 'e99a18c428cb38d5f260853678922e03',
            },
            downloads : 0,
            number : '1.0.0',
            url : '',
            releaseNotes : '',
            tags : [], // stable, beta, security, initial-release
            platform : 'win32', //win32, linux, mac
            status : '', // active, deprecated, archived
            release : {
                date : new Date(),
                user : null
            },
            created : {
                date : new Date(),
                user : null
            },
            updated : {
                date : new Date(),
                user : null
            },
            deleted : {
                date : new Date(),
                user : null
            }
        }, {
            _id : '',
            file : {
                name : 'app-v1.0.0',
                ext : '.exe',
                path : '',
                size : 123512,
                checksum : 'e99a18c428cb38d5f260853678922e03',
            },
            downloads : 0,
            number : '1.0.0',
            url : '',
            releaseNotes : '',
            tags : [], // stable, beta, security, initial-release
            platform : 'win32', //win32, linux, mac
            status : '', // active, deprecated, archived
            release : {
                date : new Date(),
                user : null
            },
            created : {
                date : new Date(),
                user : null
            },
            updated : {
                date : new Date(),
                user : null
            },
            deleted : {
                date : new Date(),
                user : null
            }
        }],
    })
}
</script>

<style>

</style>