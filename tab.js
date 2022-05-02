/* 버튼 0 누르면
모든 버튼에 붙은 orange 클래스명 제거
버튼0에 orange 클래스 추가
모든 div에 붙은 show 클래스명 제거
div0에 show 클래스명 추가
*/

/* querySelectorAll('.tab-button')[0]과 같다. */
// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click',function(){
//       탭열기(i);
//     });
// }

$('.list').click(function(e){

  /* Vanilla JavaScript */ 
  // if(e.target == document.querySelectorAll('.tab-button')[0]){
  //   탭열기(0);
  // }

  /* jQuery */ 
  // if($(e.target).is($('.tab-button').eq(0))){
  //   탭열기(0);
  // }

  /* DataSet */ 
  openTab(e.target.dataset.id);

});

/* 함수로 축약하기 */
function openTab(num){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(num).addClass('show');
}

