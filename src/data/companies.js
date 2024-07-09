import { NewsCategory } from "../types/news.js";

/**
 * @type {NewsCategory[]}
 */
export const allCompanies = [
  {
    id: 1,
    categoryId: 0,
    companies: [
      {
        id: 1,
        name: "연합뉴스",
        logoUrl: "/src/assets/images/yonhapNews.png",
        updatedDate: "2024-07-03T01:10:00Z",
        mainNews: {
          id: 1,
          title: "정부, 올해 韓성장률 2.2%→2.6% 상향…물가상승률 2.6%",
          url: "https://n.news.naver.com/mnews/article/014/0005208091",
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/014/2024/07/03/0005208091_001_20240703124715600.jpg?type=w647",
        },
        newsItems: [
          {
            id: 2,
            title: "비만약 열풍에 생산시설 확보 '붐'…韓 CDMO 업계 '화색'",
            url: "https://n.news.naver.com/mnews/article/421/0007639861",
          },

          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "[하반기 경제] 배당증가분에 저율 분리과세…밸류업 稅조치 윤곽",
            url: "https://n.news.naver.com/mnews/article/001/0014784902",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 2,
        name: "서울경제",
        logoUrl: "/src/assets/images/seoulEconomic.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/087/2024/07/05/0001054440_001_20240705101010144.jpg?type=w647",
          id: 1,
          title: "[속보]이원석 '민주당 검사 탄핵 불법행위…면밀히 조사하겠다'",
          url: "https://n.news.naver.com/article/087/0001054440?cds=news_media_pc&type=editn",
        },
        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 3,
        name: "데일리한국",
        logoUrl: "/src/assets/images/dailyKorea.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/658/2024/07/05/0000077810_001_20240705071910797.jpg?type=w647",
          id: 1,
          title: "밀양 알루미늄 공장서 불…대응 1단계 발령",
          url: "https://n.news.naver.com/article/658/0000077810?cds=news_media_pc&type=editn",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 4,
        name: "파이낸스",
        logoUrl: "/src/assets/images/finance.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          id: 1,
          title: "'할부지 왔어!' 푸바오도 성큼…92일 만에 중국서 재회",
          url: "https://n.news.naver.com/article/055/0001169379?cds=news_media_pc&type=editn",
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/055/2024/07/05/0001169379_001_20240705110711943.jpg?type=w647",
        },
        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 5,
        name: "아이뉴스",
        logoUrl: "/src/assets/images/iNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",

          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },
        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 6,
        name: "시사위크",
        logoUrl: "/src/assets/images/sisaweek.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/014/2024/07/05/0005209104_001_20240705100915169.jpg?type=w647",
          id: 1,
          title: "'작작 해라'..허웅 전 여친, '청담동 아파트' 등기 공개했다",
          url: "https://n.news.naver.com/article/014/0005209104?cds=news_media_pc&type=editn",
        },
        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 7,
        name: "엑스포츠",
        logoUrl: "/src/assets/images/ecSportsNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    categoryId: 1,
    companies: [
      {
        id: 8,
        name: "일간스포츠",
        logoUrl: "/src/assets/images/ilganSports.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/011/2024/07/03/0004361289_001_20240703104510953.jpg?type=w647",
          id: 1,
          title: "벤츠, 국내 수입차 판매 1위 '재탈환'…BMW와 엎치락뒤치락",
          url: "https://n.news.naver.com/mnews/article/011/0004361289",
        },
        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 9,
        name: "중앙일보",
        logoUrl: "/src/assets/images/joongangNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          id: 1,
          title: "정부, 올해 韓성장률 2.2%→2.6% 상향…물가상승률 2.6%",
          url: "https://n.news.naver.com/mnews/article/014/0005208091",
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/014/2024/07/03/0005208091_001_20240703124715600.jpg?type=w647",
        },
        newsItems: [
          {
            id: 2,
            title: "비만약 열풍에 생산시설 확보 '붐'…韓 CDMO 업계 '화색'",
            url: "https://n.news.naver.com/mnews/article/421/0007639861",
          },

          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "[하반기 경제] 배당증가분에 저율 분리과세…밸류업 稅조치 윤곽",
            url: "https://n.news.naver.com/mnews/article/001/0014784902",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },

      {
        id: 10,
        name: "여성경제신문",
        logoUrl: "/src/assets/images/womanEconomic.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 11,
        name: "인사이트",
        logoUrl: "/src/assets/images/insight.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/003/2024/07/03/NISI20240616_0001185203_web_20240616115159_20240703154135804.jpg?type=w647",
          id: 1,
          title: "바이든 전방위 '사퇴 압박'에…오바마, 통화서 조언[2024 美대선]",
          url: "https://n.news.naver.com/mnews/article/003/0012645324",
        },
        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 12,
        name: "데이터뉴스",
        logoUrl: "/src/assets/images/dataNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",
          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },
        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 13,
        name: "JTBC",
        logoUrl: "/src/assets/images/JTBC.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },
        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 14,
        name: "KBSWorld",
        logoUrl: "/src/assets/images/KBSWorld.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    categoryId: 2,
    companies: [
      {
        id: 15,
        name: "KNN",
        logoUrl: "/src/assets/images/KNN.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/011/2024/07/05/0004362471_001_20240705103617645.jpg?type=w647",

          id: 1,
          title:
            "韓 AI 스타트업 키우는 구글, '구글 포 스타트업 액셀러레이터: AI 퍼스트' 프로그램 성료",
          url: "https://n.news.naver.com/mnews/article/011/0004362471",
        },

        newsItems: [
          {
            id: 2,
            title: "비만약 열풍에 생산시설 확보 '붐'…韓 CDMO 업계 '화색'",
            url: "https://n.news.naver.com/mnews/article/421/0007639861",
          },

          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "[하반기 경제] 배당증가분에 저율 분리과세…밸류업 稅조치 윤곽",
            url: "https://n.news.naver.com/mnews/article/001/0014784902",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 2,
        name: "국민일보",
        logoUrl: "/src/assets/images/koockminNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/011/2024/07/03/0004361289_001_20240703104510953.jpg?type=w647",
          id: 1,
          title: "벤츠, 국내 수입차 판매 1위 '재탈환'…BMW와 엎치락뒤치락",
          url: "https://n.news.naver.com/mnews/article/011/0004361289",
        },
        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 3,
        name: "매일경제",
        logoUrl: "/src/assets/images/mailEconomic.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/009/2024/07/05/0005329933_001_20240705092115268.jpeg?type=w647",
          id: 1,
          title: "[단독] “울 엄마·누나 당장 통장 바꾸겠네”...‘선업튀’ 변우석 NH 새 얼굴로",
          url: "https://n.news.naver.com/article/009/0005329933?cds=news_media_pc&type=editn",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 4,
        name: "MBN",
        logoUrl: "/src/assets/images/MBN.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/003/2024/07/03/NISI20240616_0001185203_web_20240616115159_20240703154135804.jpg?type=w647",
          id: 1,
          title: "바이든 전방위 '사퇴 압박'에…오바마, 통화서 조언[2024 美대선]",
          url: "https://n.news.naver.com/mnews/article/003/0012645324",
        },
        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 5,
        name: "마이데일리",
        logoUrl: "/src/assets/images/mydaily.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",
          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },
        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 6,
        name: "뉴데일리",
        logoUrl: "/src/assets/images/newDaily.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },
        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 7,
        name: "OBS",
        logoUrl: "/src/assets/images/OBS.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    categoryId: 3,
    companies: [
      {
        id: 16,
        name: "Digital Today",
        logoUrl: "/src/assets/images/digitalToday.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/374/2024/07/05/0000391239_001_20240705091613796.jpg?type=w647",
          id: 1,
          title: "'애플, 자사 기기에 구글 AI 모델 제미나이 탑재 9월 발표'",
          url: "https://n.news.naver.com/mnews/article/374/0000391239",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 2,
        name: "SBSBiz",
        logoUrl: "/src/assets/images/SBSBiz.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/665/2024/07/05/0000003287_002_20240705092113195.jpg?type=w647",
          id: 1,
          title: "'똘똘한 한 채 제외? 투기 어찌 막으려고' 종부세 폐지론의 맹점",
          url: "https://n.news.naver.com/article/665/0000003287?cds=news_media_pc&type=editn",
        },
        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 3,
        name: "헤럴드 경제",
        logoUrl: "/src/assets/images/HEconimic.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/366/2024/07/05/0001002413_001_20240705102910553.jpg?type=w647",
          id: 1,
          title: "‘이재명 습격범’ 1심 징역 15년 선고",
          url: "https://n.news.naver.com/article/366/0001002413?cds=news_media_pc&type=editn",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 4,
        name: "스포츠동아",
        logoUrl: "/src/assets/images/sportsDonga.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/003/2024/07/03/NISI20240616_0001185203_web_20240616115159_20240703154135804.jpg?type=w647",
          id: 1,
          title: "바이든 전방위 '사퇴 압박'에…오바마, 통화서 조언[2024 美대선]",
          url: "https://n.news.naver.com/mnews/article/003/0012645324",
        },

        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 5,
        name: "스포츠뉴스",
        logoUrl: "/src/assets/images/sportsNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/005/2024/07/05/2024070420190512268_1720091945_1720083586_20240705040312435.jpg?type=w647",
          id: 1,
          title: "재회한 시진핑-푸틴 “혼란 속 우호 견지”",
          url: "https://n.news.naver.com/mnews/article/005/0001708572",
        },

        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 6,
        name: "MKSports",
        logoUrl: "/src/assets/images/MKSports.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },

        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 7,
        name: "세계뉴스",
        logoUrl: "/src/assets/images/worldNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    categoryId: 4,
    companies: [
      {
        id: 17,
        name: "ZNDETKorea",
        logoUrl: "/src/assets/images/ZNDETKorea.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/421/2024/07/05/0007645589_001_20240705104623332.jpg?type=w647",
          id: 1,
          title: "'인사이드 아웃2'VS'탈주', 엎치락뒤치락 1위 경쟁…주말 어떨까 [N이슈]",
          url: "https://m.entertain.naver.com/article/421/0007645589",
        },

        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 18,
        name: "전자뉴스",
        logoUrl: "/src/assets/images/junjaNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/011/2024/07/03/0004361289_001_20240703104510953.jpg?type=w647",
          id: 1,
          title: "벤츠, 국내 수입차 판매 1위 '재탈환'…BMW와 엎치락뒤치락",
          url: "https://n.news.naver.com/mnews/article/011/0004361289",
        },

        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 19,
        name: "에너지경제",
        logoUrl: "/src/assets/images/energyEconomy.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 20,
        name: "일간스포츠",
        logoUrl: "/src/assets/images/ilganSports.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/003/2024/07/03/NISI20240616_0001185203_web_20240616115159_20240703154135804.jpg?type=w647",
          id: 1,
          title: "바이든 전방위 '사퇴 압박'에…오바마, 통화서 조언[2024 美대선]",
          url: "https://n.news.naver.com/mnews/article/003/0012645324",
        },

        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 21,
        name: "데일리안",
        logoUrl: "/src/assets/images/dailyAn.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",
          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },

        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 22,
        name: "YTN",
        logoUrl: "/src/assets/images/YTN.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },

        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 23,
        name: "동아일보",
        logoUrl: "/src/assets/images/DonaANews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    categoryId: 5,
    companies: [
      {
        id: 24,
        name: "텐아시아",
        logoUrl: "/src/assets/images/10Asia.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",
          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },

        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 25,
        name: "SBS",
        logoUrl: "/src/assets/images/SBS.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/011/2024/07/03/0004361289_001_20240703104510953.jpg?type=w647",
          id: 1,
          title: "벤츠, 국내 수입차 판매 1위 '재탈환'…BMW와 엎치락뒤치락",
          url: "https://n.news.naver.com/mnews/article/011/0004361289",
        },

        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 26,
        name: "서울신문",
        logoUrl: "/src/assets/images/seoulNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 27,
        name: "조선Biz",
        logoUrl: "/src/assets/images/chosunBiz.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/003/2024/07/03/NISI20240616_0001185203_web_20240616115159_20240703154135804.jpg?type=w647",
          id: 1,
          title: "바이든 전방위 '사퇴 압박'에…오바마, 통화서 조언[2024 美대선]",
          url: "https://n.news.naver.com/mnews/article/003/0012645324",
        },

        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 28,
        name: "조이뉴스24",
        logoUrl: "/src/assets/images/joyNews24.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",
          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },

        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 29,
        name: "TV리포트",
        logoUrl: "/src/assets/images/TVReport.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },

        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 30,
        name: "e데일리",
        logoUrl: "/src/assets/images/eDaily.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    categoryId: 6,
    companies: [
      {
        id: 31,
        name: "파이낸셜뉴스",
        logoUrl: "/src/assets/images/finacialNews.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },
        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 32,
        name: "it조선",
        logoUrl: "/src/assets/images/itChosun.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/011/2024/07/03/0004361289_001_20240703104510953.jpg?type=w647",
          id: 1,
          title: "벤츠, 국내 수입차 판매 1위 '재탈환'…BMW와 엎치락뒤치락",
          url: "https://n.news.naver.com/mnews/article/011/0004361289",
        },
        newsItems: [
          {
            id: 2,
            title: "'마세라티코리아' 공식 출범…효성家 'FMK'는 딜러로",
            url: "https://n.news.naver.com/mnews/article/417/0001012163",
          },

          {
            id: 3,
            title: "[날씨] 오후 대부분 비 그쳐‥남부·제주 폭염",
            url: "https://n.news.naver.com/mnews/article/214/0001358731",
          },
          {
            id: 4,
            title: "ADHD 치료 골든타임 찾나…서울대병원, 7~8세에 뇌혈류 변화",
            url: "https://n.news.naver.com/mnews/article/015/0005005101",
          },
          {
            id: 5,
            title: "넷플릭스, ‘김치’가 중국 음식? [잇슈 컬처]",
            url: "https://n.news.naver.com/mnews/article/056/0011753534",
          },
          {
            id: 6,
            title: "경북 고령 대가야, 우리나라 5번째 '고도' 된다",
            url: "https://n.news.naver.com/mnews/article/657/0000027519",
          },
          {
            id: 7,
            title: "47kg 박나래, 살 뺀 후 '이것' 후유증?...왜 그런가 봤더니",
            url: "https://n.news.naver.com/mnews/hotissue/article/296/0000079476?type=series&cid=2001627",
          },
        ],
      },
      {
        id: 33,
        name: "미디어오늘",
        logoUrl: "/src/assets/images/mediaToday.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },

        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 34,
        name: "오마이뉴스",
        logoUrl: "/src/assets/images/ohmyNews.png",
        updatedDate: "2024-07-04T01:10:00Z",

        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/003/2024/07/03/NISI20240616_0001185203_web_20240616115159_20240703154135804.jpg?type=w647",
          id: 1,
          title: "바이든 전방위 '사퇴 압박'에…오바마, 통화서 조언[2024 美대선]",
          url: "https://n.news.naver.com/mnews/article/003/0012645324",
        },
        newsItems: [
          {
            id: 2,
            title: "바이든 교체론에는 선 그었지만…대선 판세 우려하는 오바마",
            url: "https://n.news.naver.com/mnews/article/001/0014785441",
          },

          {
            id: 3,
            title: "채널캔디, 스웨리 첫 단독 내한공연 이달 8일 예매 시작",
            url: "https://n.news.naver.com/mnews/article/421/0007640911",
          },
          {
            id: 4,
            title: "바이든 완주 부추기는 질 바이든에 비판 쏟아져",
            url: "https://n.news.naver.com/mnews/article/009/0005328825",
          },
          {
            id: 5,
            title: "2분기에만 77조원…'AI 붐'에 美 벤처투자 2년만 최대",
            url: "https://n.news.naver.com/mnews/article/011/0004361403",
          },
          {
            id: 6,
            title: "美 국토안보부, 전세기 띄워 중국인 밀입국자 추방",
            url: "https://n.news.naver.com/mnews/article/003/0012645076",
          },
          {
            id: 7,
            title: "비트코인 3% 이상 급락, 6만1000달러도 붕괴(상보)",
            url: "https://n.news.naver.com/mnews/article/421/0007640713",
          },
        ],
      },
      {
        id: 35,
        name: "시사저널e",
        logoUrl: "/src/assets/images/sisajounalE.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/609/2024/07/03/202407031410140410_51_20240703145113888.jpg?type=w647",
          id: 1,
          title: "신하균 복제인간설까지…쥐새끼 잡는 사이다 드라마 통할까(감사합니다)[종합]",
          url: "https://m.entertain.naver.com/article/609/0000871344",
        },
        newsItems: [
          {
            id: 2,
            title: "비욘세→이효리에 러브콜..'별의별걸', 나띠·하리무·박제니가 말아주는 숏폼 [종합]",
            url: "https://m.entertain.naver.com/article/108/0003247435",
          },

          {
            id: 3,
            title: "고현정, 시크한 오버핏…힙하네[★핫픽]",
            url: "https://m.entertain.naver.com/article/003/0012645048",
          },
          {
            id: 4,
            title: "'늘 사랑에 솔직했던' 이유영, 하늘도 축복할 '결혼 그리고 임신' [MD피플]",
            url: "https://m.entertain.naver.com/article/117/0003846929?cid=1073787",
          },
          {
            id: 5,
            title: "“너네 사귀지?” 변우석♥김혜윤, 망붕 케미…‘샬롱드립’ 1000만 돌파",
            url: "https://m.entertain.naver.com/article/144/0000972829?cid=1073788",
          },
          {
            id: 6,
            title: "신성우, 곧 환갑인데…'두 돌' 아들 어린이집 행사에서 열정 투혼 ('아빠는 꽃중년')",
            url: "https://m.entertain.naver.com/article/076/0004164061?cid=1073788",
          },
          {
            id: 7,
            title: "오연수, 트렌디한 52세의 멋! 활기찬 스트라이프 셔츠-버뮤다팬츠 청청패션",
            url: "https://m.entertain.naver.com/article/410/0001009374?cid=1073788",
          },
        ],
      },
      {
        id: 36,
        name: "매일경제",
        logoUrl: "/src/assets/images/mailEconomic.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/052/2024/07/03/202407031454215473_t_20240703145630145.jpg?type=w647",
          id: 1,
          title: "고개 숙인 바이든...미 대선, '고? 스톱?' [앵커리포트]",
          url: "https://n.news.naver.com/article/052/0002056085?ntype=RANKING",
        },
        newsItems: [
          {
            id: 2,
            title: "[속보] 채 상병 특검법, 곧 본회의 상정...與 필리버스터 대응 방침",
            url: "https://n.news.naver.com/article/052/0002056129?ntype=RANKING",
          },
          {
            id: 3,
            title: "[날씨] 강풍 속 무더위, 남부 '폭염주의보'...내일 전국 장맛비",
            url: "https://n.news.naver.com/article/052/0002056103?ntype=RANKING",
          },
          {
            id: 4,
            title: "인도로 시속 100km 돌진...가속인가 급발진인가 [앵커리포트]",
            url: "https://n.news.naver.com/article/052/0002056017?ntype=RANKING",
          },
          {
            id: 5,
            title: "'아동학대 혐의' 손웅정 검찰 조사...기소 여부 관심",
            url: "https://n.news.naver.com/article/052/0002056086?ntype=RANKING",
          },
          {
            id: 6,
            title: "오뚜기, CGV 용산아이파크몰에 체험형 매장 공개",
            url: "https://n.news.naver.com/mnews/article/629/0000301065",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
      {
        id: 37,
        name: "한국경제TV",
        logoUrl: "/src/assets/images/koreaEconomyTY.png",
        updatedDate: "2024-07-04T01:10:00Z",
        mainNews: {
          thumbnailUrl:
            "https://imgnews.pstatic.net/image/025/2024/07/03/0003370954_001_20240703141017192.jpg?type=w647",
          id: 1,
          title: "‘나노코리아 2024’ 개막…국제 나노기술 심포지엄 공개 강연 주목",
          url: "https://n.news.naver.com/mnews/article/215/0001169154",
        },
        newsItems: [
          {
            id: 2,
            title: "넥슨게임즈, 신작 ‘퍼스트 디센던트’ 흥행 기대감에 급등",
            url: "https://n.news.naver.com/mnews/article/009/0005328576",
          },
          {
            id: 3,
            title: "[역동경제 로드맵] '요일제 공휴일' 검토…먹거리 관세율 낮춘다",
            url: "https://n.news.naver.com/mnews/article/001/0014784913",
          },
          {
            id: 4,
            title: "대웅바이오, CMO 사업 본격화…바이오 생산 능력 확보",
            url: "https://n.news.naver.com/mnews/article/003/0012644231",
          },
          {
            id: 5,
            title: "더존비즈온, ‘옴니이솔(OmniEsol)’ 비즈니스 파트너 모집 나섰다",
            url: "https://n.news.naver.com/mnews/article/009/0005328842",
          },
          {
            id: 6,
            title: "로봇이 택배·커피 배달하고 주차도 척척...스마트 오피스 등장",
            url: "https://n.news.naver.com/mnews/article/092/0002337033",
          },
          {
            id: 7,
            title: "혁신금융 서비스 지정 131건 신청…자본시장·전자금융·대출 순",
            url: "https://n.news.naver.com/mnews/article/056/0011753815",
          },
        ],
      },
    ],
  },
];
