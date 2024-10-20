import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        user: {
            name: 'David Koch',
            loggedIn: false
        },
        items: []
    }),

    getters: {
        isLoggedIn: (state) => state.user.loggedIn,
    },

    actions: {
        loginUser(name : string) {
            this.user.name = name;
            this.user.loggedIn = true;
        },
        logoutUser() {
            this.user.name = '';
            this.user.loggedIn = false;
        },
        generateObjectId() {
            const randomHex = (length : number) => {
                       return Array.from({ length })
                           .map(() => Math.floor(Math.random() * 16).toString(16))
                           .join('');
                     },
                  timestamp = Math.floor(new Date().getTime() / 1000).toString(16),
                  machineId = randomHex(4),
                  processId = randomHex(4),
                  counter = randomHex(8);
        
            return `${timestamp}${machineId}${processId}${counter}`;
        }
    }
});
