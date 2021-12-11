//動畫開始 ======================================
// $(document).ready(function () {
//   $("body").addClass("animationStart");
// });
//關閉動畫 ======================================
function stopAni() {
  setTimeout(function () {
    // $(".board_box").css({
    //   animation: "none",
    //   opacity: "1",
    // });
    $("body").removeClass("animationStart");
  }, 7000);
}
stopAni();
//資料載入 ======================================
var data = [
  {
    section: "1-1",
    itemname: "基金運作",
    num: "2",
    des: [
      {
        option: "收支管理與運用",
        describe:
          "土污基金及水資源作業基金各項資金來源、使用用途、保管等均須依循作業辦法規定，且應注重收益性及安全性，並有審理稽核制度",
      },
      {
        option: "預算決算公開",
        describe: "預算編製與執行及決算編造需依相關法令辦理，並公開供查詢",
      },
    ],
  },
  {
    section: "1-2",
    itemname: "政策擘劃",
    num: "2",
    des: [
      {
        option: "地下水施政綱領擬定",
        describe:
          "延續過去地下水保護政策，擬定地下水永續管理之願景、目標、策略、行動方案及權責分工等未來政策方向",
      },
      {
        option: "未來工作藍圖擬定",
        describe:
          "以5年為單位，建立短中長程之地下水水質永續管理之量化目標、進程規劃與分階段工作",
      },
    ],
  },
  {
    section: "1-3",
    itemname: "交流培育",
    num: "4",
    des: [
      {
        option: "公眾參與",
        describe:
          "建立地下水公眾參與機制，使政策能確實傳遞，保有其暢通發聲管道，公眾意見亦能納入決策過程。另研訂政策白皮書，各項政策之策略與措施供民眾瞭解，建立交流與溝通管道",
      },
      {
        option: "跨部會溝通平台建置",
        describe:
          "地下水管理涉及之權管機關眾多，需建立部會間之溝通平台，以地下水水質保護為標的，整合各單位資源、工作與期程，避免資源重複投入",
      },
      {
        option: "人才培訓與環境教育",
        describe:
          "持續辦理土水青年種子人才培訓，並辦理提升大眾環境保護意識之活動、文宣與教育訓練",
      },
      {
        option: "國際交流",
        describe:
          "持續維繫與國外產學界上之交流互動，以提升我國地下水管理各層面之技術與經驗",
      },
    ],
  },
  {
    section: "1-4",
    itemname: "法規研修",
    num: "2",
    des: [
      {
        option: "相關母法修訂與檢討",
        describe:
          "檢討與研修地下水相關上位法規，如土壤及地下水污染整治法、水污染防治法、水利法等",
      },
      {
        option: "相關法規命令與行政規則檢討",
        describe:
          "依據母法制定之相關法規命令與行政規則之檢討，包含各類施行細則、作業與管理辦法、管制標準等適宜性、各類保護區劃設與整合等",
      },
    ],
  },
  {
    section: "2-1",
    itemname: "調查評估",
    num: "3",
    des: [
      {
        option: "基礎資料建置累積",
        describe:
          "持續辦理各地下水區特性研究，包含地下水水位、水質狀況及地質條件等，並藉由地理統計及繪製各項圖資等，藉以研判各地下水區水文地質、水質特性及變化趨勢",
      },
      {
        option: "高污染潛勢分析",
        describe:
          "針對具高污染潛勢之運作中或廢棄工廠、加油站、貯槽、油庫、工業區等人為活動潛在污染源，定期監測地下水水質，並掌握污染物潛勢分布與影響範圍及污染緊急應變。並針對水文地質條件影響之水質項目，掌握其污染成因及潛勢範圍，並擬定成因判定SOP，供污染事件釐清參考",
      },
      {
        option: "地下水蘊藏潛能估算",
        describe:
          "持續辦理地下水補注量、蘊藏量之推估研究，並結合水質狀況，估算各地下水區地下水合理可用水量",
      },
    ],
  },
  {
    section: "2-2",
    itemname: "環境監測",
    num: "4",
    des: [
      {
        option: "基礎監測設施維運",
        describe:
          "完備地下水監測井網，於密度不足地區補充設置，並定期檢視井網空間密度與功能，並整合各單位水井推動水質聯合監測",
      },
      {
        option: "污染場址管理",
        describe:
          "剖析停滯場址之問題與解決對策，修訂場址管理制度，並推動污染場址逐步解列",
      },
      {
        option: "水位與地層下陷監測",
        describe:
          "持續監測沿海地區地層下陷之速率與趨勢，強化地層下陷防治工作，並建立地下水鹽化監測系統，預測地下水鹽化入侵之程度與範圍。在沿海地下水鹽化嚴重之地區限制使用地下水，並調整土地利用及產業型態，或評估地下水補注之可能",
      },
      {
        option: "地下水資源預警制度建置",
        describe:
          "考量水質優劣與水位變動對於水資源調配運用的重要性，評估水質與水位變化趨勢，整合水文地質與人為活動相關資訊，建立地下水水質與水位預警機制，並研擬應變配套措施",
      },
    ],
  },
  {
    section: "2-3",
    itemname: "衝擊調適",
    num: "3",
    des: [
      {
        option: "脆弱度評估架構建立",
        describe:
          "以各項調查與監測數據為基礎，結合地下水使用的用途與需求，建立地下水環境脆弱度建立與評估方法",
      },
      {
        option: "分級分區管制方案建立",
        describe:
          "依不同的土地使用形式、地下水水質概況及水文地質特性等研擬分級分區管制與管理方案",
      },
      {
        option: "氣候變遷調適策略研訂與實施",
        describe:
          "因應氣候變遷所導致的降雨時空變異、溫度變化、及相應的產業活動與用水使用上的改變，研擬及推動地下水水質水量之衝擊調適策略",
      },
    ],
  },
  {
    section: "3-1",
    itemname: "物聯網及機器學習",
    num: "2",
    des: [
      {
        option: "機器學習與數據分析方法發展",
        describe:
          "發展巨量資料分析技術，以基於長期且大量的地下水相關監測數據，判斷地下水污染變化趨勢上升之潛在區域，以有效預防地下水污染事件",
      },
      {
        option: "地下水水質及供需智慧管理",
        describe:
          "應用物聯網概念，規劃監測數據智慧化管理，如數據檢核、預警通報等，優化地下水水質管理，並藉由鏈結水井、輸水設施與用水端之需求等各項資訊，達到精準供水與節水管理的目標",
      },
    ],
  },
  {
    section: "3-2",
    itemname: "調查整治技術",
    num: "3",
    des: [
      {
        option: "調查技術引進與研發",
        describe:
          "引進與發展地下水水質監測、即時監測、污染調查、污染物快篩等新穎技術，深入掌握地下水水質狀況及變化趨勢，強化地下水水質調查及污染預警",
      },
      {
        option: "整治技術引進與研發",
        describe:
          "創新綠色整治技術、生物整治技術以及物理化學整治技術的引進與研發，並精進高解析污染場址分析技術，以能更明確掌握污染物的暴露途徑與分布，幫助定位污染洩漏位置，釐清污染責任主體",
      },
      {
        option: "綠色永續整治概念導入",
        describe:
          "導入採行兼顧環境、社會與經濟效益三面向的技術、工法、策略或管理方法，以減少整體環境衝擊與環境足跡",
      },
    ],
  },
  {
    section: "3-3",
    itemname: "水文地質調查",
    num: "2",
    des: [
      {
        option: "地下水環境調查技術發展",
        describe:
          "發展能更加精確掌握地下水文地質條件之技術，如透地雷達、電磁波探測、井內探測、地電阻探測及其他地球物理等探勘技術。另強化如地下水流向、流速、水力傳導係數等地下水環境調查技術，強化地下水水環境基本特性之掌握",
      },
      {
        option: "地表地下水交互關係研究",
        describe:
          "研究影響地表地下水間的交互關係的因子如地質、地形、水文、生物、化學等，及其與水量、水質及生態系統健康的影響",
      },
    ],
  },
  {
    section: "3-4",
    itemname: "評估模擬工具",
    num: "3",
    des: [
      {
        option: "地下水污染流布模擬工具研發",
        describe:
          "研發或引進地下水數值模式，建立污染傳輸模式之模型，以做為追查污染源、範圍及污染控制或整治的有力輔助工具",
      },
      {
        option: "健康風險評估技術完善",
        describe:
          "建構土壤及地下水污染場址健康風險評估制度，強化健康風險評估方法之本土適宜性及需求",
      },
      {
        option: "土壤液化與淹水推估研究",
        describe:
          "分析土壤液化潛勢區範圍，並研究在地下水位較高且高程較低之地區，是否會有地下水不斷升高而淹水，或是對地表建物與設施等造成基樁結構不穩的可能",
      },
    ],
  },
  {
    section: "4-1",
    itemname: "水資源經營",
    num: "4",
    des: [
      {
        option: "地下水補注",
        describe:
          "採取以人工湖、水塘、地面漫流、重力或壓注式補注井、地下水人工補注回用等方式，在確保水質無虞的前提下，積極補注與保育地下水資源",
      },
      {
        option: "地表地下水聯合應用",
        describe:
          "綜合考量供水之需求與時程、各水源之供應潛能、未來水源設施規劃等，訂定地表地下水聯合運用方案，並持續評估伏流水開發適當場域，開發多元水源，以強化地區供水穩定性",
      },
      {
        option: "抗旱井建置",
        describe:
          "在地下水豐沛地區，評估適當區位設置抗旱井，在確認不會造成地層下陷或影響水源保育情況下，作為產業短期缺水的備援措施",
      },
      {
        option: "地下水超抽管制",
        describe:
          "掌握水井分布位置與數量，輔導水權登記申請，合法抽汲地下水，並基於區域地下水補注量與蘊藏量之合理用水量推估，管理地下水抽汲量，避免過度抽取衍生之問題",
      },
    ],
  },
  {
    section: "4-2",
    itemname: "國土規劃利用",
    num: "2",
    des: [
      {
        option: "農漁畜牧發展",
        describe:
          "結合農業相關政策與規範如合理化施肥宣導，農藥登記與管理、畜牧與養殖污染防治等，於水土資源永續下避免導致環境污染負荷",
      },
      {
        option: "公共與環保設施建置與營運",
        describe:
          "對於環保設施(如掩埋場、廢棄物處理設施、污水處理廠、污水下水道系統等)或水利類公共設施(自來水設施、蓄水設施等)等，於其建置與營運過程中應評析對於地下水水質及蘊藏量之潛在影響",
      },
    ],
  },
  {
    section: "4-3",
    itemname: "資訊整合",
    num: "3",
    des: [
      {
        option: "資訊公開制度建立",
        describe:
          "建立整合各單位地下水相關政策、計畫與地下水監測數據之公開平台",
      },
      {
        option: "資料系統整合",
        describe:
          "建立跨單位間資訊交換平台，並整合各項監測數據的資料格式、項目及交換頻率等",
      },
      {
        option: "決策支援平台建置",
        describe:
          "建置關注區域或議題之評估決策支援平台，整合與架接現有相關數據與研究，提供決策端快速掌握資源投入優先順序之參考",
      },
    ],
  },
  {
    section: "4-4",
    itemname: "經濟工具",
    num: "2",
    des: [
      {
        option: "地下水經濟價值評估",
        describe:
          "建立分析工具與方法，以評估地下水的經濟價值。如用於飲用、灌溉或工業上產生的價值，或是做為替代水源上，所避免缺水所造成之損害的價值，以及其補注河川湖泊水源，所產生的生態價值",
      },
      {
        option: "地下水污染整治效益評估",
        describe:
          "依污染場址之整治期程、投入經費及污染物削減率等，及整治作業細部規劃、人員管理及溝通作業等，評估整治經費之實質經濟成效，避免過多不必要費用支出",
      },
    ],
  },
];
console.log(data);
//資料載入 ======================================
function fetchAll(openItem) {
  fetch("./../data.json", {})
    .then((response) => {
      // 這裡會得到一個 ReadableStream 的物件
      // console.log(response);
      // 可以透過 blob(), json(), text() 轉成可用的資訊
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach((element) => {
        if (element.section == openItem) {
          $(".optionLists").empty();

          $(".itmeName").text(element.itemname);
          for (var i = 0; i < element.num; i++) {
            $(".optionLists").append(
              '<li><div class="title">' +
                element.des[i].option +
                "</div><p>" +
                element.des[i].describe +
                "</p></li>"
            );
          }
        }
      });
    })
    .catch((err) => {
      console.log("錯誤:", err);
    });
}
function dataFetch(openItem) {
  data.forEach((element) => {
    if (element.section == openItem) {
      $(".optionLists").empty();

      $(".itmeName").text(element.itemname);
      for (var i = 0; i < element.num; i++) {
        $(".optionLists").append(
          '<li><div class="title">' +
            element.des[i].option +
            "</div><p>" +
            element.des[i].describe +
            "</p></li>"
        );
      }
    }
  });
}
//資料帶入燈箱 ================================
function lbOpen(clickBoard) {
  var openItem = clickBoard;
  // fetchAll(openItem);
  dataFetch(openItem);
  $(".info_cover").addClass("show");
  $("html").addClass("lbShow");
}
function lbClose() {
  $(".info_cover").removeClass("show");
  $("html").removeClass("lbShow");
}

//開燈箱 ======================================
$(".board").click(function () {
  clickBoard = $(this).data("no");
  lbOpen(clickBoard);
});
$(".closeBtn").click(function () {
  lbClose();
});
//白標滑鼠移入與移出 底下物件會上升 ===================
$(".board")
  .mouseenter(function (e) {
    $(this).parents(".board_box").addClass("up");
  })
  .mouseleave(function () {
    $(this).parents(".board_box").removeClass("up");
    if ($(this).parents(".board_box").hasClass("chosed")) {
      $(this).parents(".board_box").addClass("up");
    }
  });

//點擊nav 同步將相關物件上升 ===================
function clickNavHandler(sections) {
  if ($(sections).hasClass("chosed")) {
    $(sections).removeClass("up chosed");
    return;
  }
  $(".board_box").removeClass("up chosed");
  $(sections).addClass("up chosed");
}
//點擊nav addclass ===================
$(".navigation a").click(function () {
  $(this).toggleClass("active").siblings().removeClass("active");
});
