'use client';

import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('');

  const handleClick = async () => {
    setStatus('処理中...');
    const res = await fetch('/api/create-user-table', {
      method: 'POST',
    });
    const data = await res.json();
    if (data.success) {
      setStatus('テーブル作成成功！');
    } else {
      setStatus(`失敗: ${data.error}`);
    }
  };

  return (
    <div>
      <main>
        <p>This is super Hero!</p>
      </main>
    </div>
  );
}
