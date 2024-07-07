
  // ページの全てが読み込まれた場合
  $(window).on('load', () => {
    console.log('loadイベントが発生しました');
  });

  // scrollした場合
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });