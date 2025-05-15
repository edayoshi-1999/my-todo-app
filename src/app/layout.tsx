// src/app/layout.tsx
import { Providers } from '@/lib/providers'
import './globals.css' // グローバルCSSをインポート。これをlayout.tsxでインポートすることで、全てのページに適用される


// childrenを受け取るRootLayoutコンポーネント
// これはアプリケーション全体のレイアウトを定義するコンポーネントです
// 例えば、ヘッダーやフッターなどの共通部分をここに配置することができます
// childrenの中身は、page.tsxの中で定義されたHomePageコンポーネントが入ります
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
