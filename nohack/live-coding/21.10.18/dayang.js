// 5. 알람 시계
// 문제) 다한이는 매일 아침 알람을 듣고 일어난다.
// 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
// 다한이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
// 이런 다한이를 불쌍하게 보던, 얌굴이는 자신이 사용하는 방법을 추천해 주었다.
// 바로 "45분 일찍 알람 설정하기"이다.
// 이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다.
// 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다.
// 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

// 현재 다한이가 설정한 알람 시각이 주어졌을 때, 얌굴이의 방법을 사용한다면,
// 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

/*
input) 두 정수 H와 M이 주어진다. 불필요한 0은 제외한다. (00분 -> 0분, 09시 -> 9시)
10 10
0 30
23 40

output)
9 25
23 45
22 55
*/

function alarm(h, m) {
  if (h < 0 && h > 24) {
    console.error(h_error);
  } else {
    if (m < 0 && m > 60) {
      console.error(m_error);
    } else {
      if (m - 45 < 0) {
      } else {
      }
    }
  }
}

alarm(10, 10);
/* 조건들 >>    h는 0~23사이만 존재
                m은 0~59사이만 존재
                m-45 > 0 -- h : m-45 출력
                m-45 < 0 -- h-1 : 60+(m-45)출력
                    -- h < 0 -- h = 23 출력


*/
