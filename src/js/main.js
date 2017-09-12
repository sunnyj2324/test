

(function (){
  const viewer = document.getElementById('viewer');
  const btnGet = document.getElementById('get');
  const btnPost = document.getElementById('post');
  const btnPut = document.getElementById('put');
  const btnDel = document.getElementById('delete');
  const inputUserid = document.getElementById('userid');

  btnGet.addEventListener('click', () => {
    const userid = inputUserid.value;
    const url = userid ? '/users/${userid}' : '/users';
    function get(url) {
      // promise 생성과 반환
      return new Promise(function () {
        // XMLHttpRequest 객체의 생성
        var req = new XMLHttpRequest();
        // 비동기 방식으로 Request를 오픈한다
        req.open('GET', `/users/${userid}`);
        // Request를 전송한다
        req.send();

        // Event Handler
        req.onreadystatechange = function () {
          // 서버 응답 완료 && 정상 응답
          if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status == 200) {
              // resolve 메소드에 전달한 처리 결과는 then 메소드의 첫번째 콜백함수에서 취득 가능
              const data = JSON.parse(req.responseText);
              view.innerHTML = JSON.stringify(data);
            } else {
              // 서버의 응답이 정상이 아니면
              // reject 메소드에 전달한 처리 결과는 then 메소드의 두번째 콜백함수에서 취득 가능
              reject(req.statusText);
            }
          }
        };
      });
    });
