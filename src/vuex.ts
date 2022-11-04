/*
 store'un calismasi icin herhangi bir .ts dosyasina 
bu ifadeyi yazmamiz gerek.
*/

import store from '@/store';

declare module 'vue' {
    //bunun sayesinde volar store'un her şeyine(state falan) erisebilecek.
    interface ComponentCustomProperties{
        $store : typeof store;
    }
}
