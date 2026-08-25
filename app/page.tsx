"使用客戶端模式";

從 "@/contexts/lm-context" 導入 LmProvider;
從 "@/components/lm/app-shell" 導入 AppShell;

默認導出 幸運商城頁面() {
  返回 (
    <LmProvider>
      <主要 樣式="最小高度螢幕 背景色">
        <應用程式外殼 />
      </主要>
    </LmProvider>
  );
}
