import React from 'react';
import Balloon from './index.js';

// export default stories => stories
//    .add('デフォルト', () => <Balloon />);

export default { title: 'Balloon' };

export const with2LettersLabal = () => <span class="balloon">次へ</span>;
export const with4LettersLabel = () => <span class="balloon">削除する</span>;