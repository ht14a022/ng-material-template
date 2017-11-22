// ルーティング定義ファイル
import { Routes } from '@angular/router';

// ページのコンポーネントをインポート
import { Page1Component } from './page1/page1.component';

// ルーティング定義
export const route: Routes = [
    {
        // /ページ1
        component: Page1Component,
        path: 'page1'
    }
];