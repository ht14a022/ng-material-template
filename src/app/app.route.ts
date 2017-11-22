// ルーティング定義ファイル
import { Routes } from '@angular/router';

// ページのコンポーネントをインポート
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

// ルーティング定義
export const route: Routes = [
    {
        // /ページ1
        component: Page1Component,
        path: ''
    },
    {
        // /ページ2
        component: Page2Component,
        path: 'page2'
    }
];