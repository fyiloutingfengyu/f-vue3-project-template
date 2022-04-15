import { Store } from '@/store'; // path to store file

// todo f any
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store,
    $http: any,
    $refs: any,
    $toast: any,
    $dialog: any
  }
}

declare module 'mockjs'
