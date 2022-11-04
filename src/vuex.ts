import store from '@/store';

declare module 'vue' {
    //bunun sayesinde volar store'un her şeyine(state falan) erisebilecek.
    interface ComponentCustomProperties{
        $store : typeof store;
    }
}
