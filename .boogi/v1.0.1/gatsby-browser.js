import 'fontsource-kosugi'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `サイトが最新に更新されています。` + `リロードして新しい内容を表示しますか？`
  );
  if (answer === true) {
    window.location.reload();
  }
};
