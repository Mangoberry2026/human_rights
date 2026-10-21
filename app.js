/**
 * 국가인권위원회 디지털 가이드 웹 앱
 * - 표준 자바스크립트 (Vanilla JS)
 * - 빌드 단계 없음, file:// 프로토콜에서 브라우저 더블클릭 실행 완벽 지원
 */

// ==========================================
// 1. 최신 뉴스 데이터셋 (실제 보도 URL 및 메타데이터)
// ==========================================
const NEWS_DATA = [
  {
    id: 1,
    title: "軍, 사관생도 '3禁' 흡연 제한적 허용키로…인권위 권고 수용",
    source: "연합뉴스 / 다음뉴스",
    date: "2026.10.19",
    category: "recommend",
    tag: "#군인권 #3금규정완화",
    url: "https://v.daum.net/v/20261019192923602",
    summary: "국방부가 국가인권위원회의 기본권 보장 권고를 전격 수용하여, 육·해·공군 사관학교 생도들의 영외 사복 착용 및 지정된 장소에서의 제한적 흡연을 허용하도록 학칙 규정을 개정했습니다."
  },
  {
    id: 2,
    title: "인권위원장 \"이주민, 배려 대상 아닌 권리 주체로 존중해야\"",
    source: "뉴스1 / 다음뉴스",
    date: "2026.10.21",
    category: "society",
    tag: "#이주민인권 #다문화사회",
    url: "https://v.daum.net/v/20261021102912591",
    summary: "안창호 국가인권위원장이 최근 개최된 국제 인권 콘퍼런스에서 이주민을 단순 시혜나 복지의 대상이 아닌 '동등한 사회 구성원이자 권리의 주체'로 인식 전환해야 한다고 역설했습니다."
  },
  {
    id: 3,
    title: "인권위, 5개 부처에 '공중이용시설 장애인 접근권 증진' 법·제도 개선 권고",
    source: "연합뉴스 / 다음뉴스",
    date: "2026.10.13",
    category: "military",
    tag: "#장애인접근권 #무장애환경",
    url: "https://v.daum.net/v/20261013120157826",
    summary: "인권위는 휠체어 이용 장애인이 식당, 편의점 등 일상 생활 시설에 자유롭게 출입할 수 있도록 면적 기준에 따른 예외 조항을 폐지하고 편의시설 설치 의무를 전면 확대하도록 5개 정부 부처에 권고했습니다."
  },
  {
    id: 4,
    title: "소매점 95% 장애인 편의시설 전무…인권위, 시행령 전면 개정 주문",
    source: "뉴시스 / 다음뉴스",
    date: "2026.10.13",
    category: "military",
    tag: "#장애인차별금지 #법령개정",
    url: "https://v.daum.net/v/20261013120203845",
    summary: "실태조사 결과 대다수의 소형 소매점에 경사로가 설치되지 않아 휠체어 장애인이 고립되고 있음을 지적하고, 장애인등편의법 시행령 기준을 조속히 현실화할 것을 관계부처에 촉구했습니다."
  },
  {
    id: 5,
    title: "공군 하사 숨졌는데 부대관리 실태 조사 부실…인권위 군인권보호관 직권조사",
    source: "KBS / 다음뉴스",
    date: "2026.10.14",
    category: "military",
    tag: "#군인권보호관 #부대관리감독",
    url: "https://v.daum.net/v/20261014120200750",
    summary: "군 복무 중 부대 내 폭행·폭언에 시달리다 극단적 선택을 한 공군 부사관 사건과 관련하여, 군 당국의 관리 부실과 2차 가해 여부를 규명하기 위해 군인권보호관이 직권조사에 착수했습니다."
  },
  {
    id: 6,
    title: "인권위 \"공군항공과학고, 미성년 학생에 군형법 적용·전학 불가 제도 개선하라\"",
    source: "한겨레 / 다음뉴스",
    date: "2026.09.29",
    category: "recommend",
    tag: "#아동청소년 #학생인권",
    url: "https://v.daum.net/v/20260929120640306",
    summary: "미성년자인 군 특성화 고등학생에게 성인 군인과 동일한 군형법을 적용하고 전학의 자유를 제한하던 차별적 관행에 대해 시정 권고를 내렸고, 국방부로부터 일부 수용 답변을 이끌어냈습니다."
  },
  {
    id: 7,
    title: "인권위, 1년 8개월 만에 '尹 방어권 보장 권고' 폐기 및 대국민 사과 의결",
    source: "연합뉴스 / 다음뉴스",
    date: "2026.10.12",
    category: "issue",
    tag: "#인권위의결 #기관독립성",
    url: "https://v.daum.net/v/20261012175230597",
    summary: "국가인권위원회 전원위원회는 과거 의결했던 대통령 탄핵 국면 방어권 보장 권고안을 공식 폐기하고, 인권위 본연의 설립 목적과 국민적 신뢰 회복을 위한 대국민 사과문을 채택·의결했습니다."
  },
  {
    id: 8,
    title: "“파리원칙 위배” 정부 부처 세종 이전 계획에 인권위 독립성 훼손 논란",
    source: "경향신문 / 다음뉴스",
    date: "2026.10.16",
    category: "issue",
    tag: "#UN파리원칙 #독립기구위상",
    url: "https://v.daum.net/v/20261016130144676",
    summary: "정부 부처의 행정수도 이전 추진 과정에서 피감기관인 중앙행정기관과 인권위가 한 건물에 복합 입주할 경우, UN 파리원칙이 요구하는 기능적·물리적 독립성이 훼손될 수 있다는 반발이 일고 있습니다."
  },
  {
    id: 9,
    title: "외국인 입국심사 때 휴대전화 포렌식·열람…인권위 \"동의 절차 엄격히 지켜야\"",
    source: "뉴시스 / 구글뉴스",
    date: "2026.10.19",
    category: "society",
    tag: "#디지털프라이버시 #적법절차",
    url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE5CVE94ZFNaNTBIcDNhRFBaRVNRLXhZU1JYRFQyWFZaTnh5bVlrcG9qM3NRdHhhTk5yXzEyWXNfa24yRU1wT1otVWlMU1dELWhlakZ4RnVzUGc5UE9VQjlLS1F3dWJRWkRsOVJkWDNkV1hNSEl2eGVIZNIBeEFVX3lxTE5CVE94ZFNaNTBIcDNhRFBaRVNRLXhZU1JYRFQyWFZaTnh5bVlrcG9qM3NRdHhhTk5yXzEyWXNfa24yRU1wT1otVWlMU1dELWhlakZ4RnVzUGc5UE9VQjlLS1F3dWJRWkRsOVJkWDNkV1hNSEl2eGVIZA?oc=5",
    summary: "출입국 심사 과정에서 사적인 메신저 및 사진이 저장된 휴대전화를 임의 제출받아 확인하는 관행에 대해, 실질적인 본인 고지 및 자발적 동의 절차를 제도화할 것을 법무부에 권고했습니다."
  },
  {
    id: 10,
    title: "정신의료기관 격리·강박 중 기저귀 강제 착용 및 신체 제한 “인권침해”",
    source: "에이블뉴스",
    date: "2026.10.16",
    category: "recommend",
    tag: "#환자인권 #신체의자유",
    url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE1YTzRubTF4MGRjS1gtSlZ6a0dfN3RqWEtGa2NMYjl1RmlfMl9kSzBicm40ajNKaVF4MnBKTy05TjVnOWJDVkMtem5GcDZleUFWa18tLU55ZVhRd0hzWF82TFJRRTRscUI3YmxFdUF30gFyQVVfeXFMUGJRSFN6Qk12Q291QVBMTzVmM050X2RuTDNOdE9yOVZ3eXdoblBNanNEYTMxczVjSGVLUmxaeXhRSTZBVlNtbEtwMlZUdlYyenF6R2cwZHJJTVJ0RUZ4N1JNYTg4ZHJFejBFeWcxelBWeW9n?oc=5",
    summary: "정신의료기관에서 환자를 묶어둔 채 배뇨를 위해 기저귀를 강제로 채운 것은 치료 목적을 벗어난 신체의 자유 침해이자 굴욕적 처우라고 판단, 관련자 징계와 행정처분을 권고했습니다."
  },
  {
    id: 11,
    title: "초고령사회 소득 공백 대응…인권위, '법정 정년 65세 상향' 정부 공식 권고",
    source: "국가인권위원회 정책보고",
    date: "2025.03.20",
    category: "society",
    tag: "#노동인권 #정년연장",
    url: "https://www.humanrights.go.kr",
    summary: "OECD 최고 수준인 노인 빈곤율과 국민연금 수급 개시 연령 불일치 문제를 해소하기 위해, 국무총리와 고용노동부에 법정 정년을 60세에서 65세로 상향 추진할 것을 공식 권고했습니다."
  },
  {
    id: 12,
    title: "국가인권위원회 공식 언론보도 및 전원위원회 의결 결정문 포털",
    source: "국가인권위원회 공식",
    date: "상시 업데이트",
    category: "issue",
    tag: "#공식보도자료 #원문열람",
    url: "https://www.humanrights.go.kr",
    summary: "국가인권위원회의 모든 권고서, 결정문, 성명서 및 보도자료 원문은 공식 홈페이지를 통해 대국민 투명 공개 원칙에 따라 언제든지 자유롭게 열람하고 다운로드할 수 있습니다."
  }
];

// ==========================================
// 2. 대화형 3분 자가진단 위저드 로직
// ==========================================
const DIAGNOSIS_STEPS = [
  {
    step: 1,
    title: "누구로부터 억울한 일을 겪으셨나요?",
    sub: "상대방의 신분이나 기관의 성격을 선택해 주세요.",
    options: [
      {
        icon: "🏛️",
        title: "국가 또는 공공기관",
        desc: "경찰·검찰·법무부·군대·교도소·구청·동주민센터·국공립학교 등",
        value: "public"
      },
      {
        icon: "🏢",
        title: "민간 기업, 학교, 서비스 제공자",
        desc: "회사 고용주·직장 상사, 사립학교, 가게, 식당, 금융기관, 복지시설 등",
        value: "private"
      },
      {
        icon: "👥",
        title: "개인 간의 단순 사적 관계",
        desc: "이웃 주민(층간소음 등), 동네 지인, 사적으로 돈을 빌려간 사람 등",
        value: "individual"
      }
    ]
  },
  {
    step: 2,
    title: "어떤 종류의 피해 또는 부당함을 겪으셨나요?",
    sub: "해당되는 상황을 가장 잘 나타내는 항목을 골라주세요.",
    options: [
      {
        icon: "🚨",
        title: "공권력 남용 및 신체의 자유·사생활 침해",
        desc: "무리한 체포·구속, 폭언·가혹행위, 불법 수색, 휴대전화 강제 열람, 진료 방해 등",
        value: "infringement"
      },
      {
        icon: "⚖️",
        title: "차별 행위 (불합리한 배제 또는 불이익)",
        desc: "성별, 나이, 장애, 출신지역, 외모, 학력 등을 이유로 한 채용 탈락, 시설 출입 거부 등",
        value: "discrimination"
      },
      {
        icon: "💸",
        title: "재산상 사기, 단순 임금체불, 금전 거래 피해",
        desc: "빌려준 돈 미반환, 투자 사기, 단순 임금 체불 등 경제적 권리 다툼",
        value: "civil_money"
      }
    ]
  },
  {
    step: 3,
    title: "현재 해당 사안에 대해 법적 조치가 진행 중인가요?",
    sub: "현재 사건의 법적 처리 단계를 선택해 주세요.",
    options: [
      {
        icon: "⏳",
        title: "소송 전이거나 행정기관 처리 단계입니다",
        desc: "아직 법원 소송을 제기하지 않았거나, 억울함을 호소할 곳을 찾는 중입니다.",
        value: "no_lawsuit"
      },
      {
        icon: "🏛️",
        title: "법원에서 이미 정식 판결이 확정되었습니다",
        desc: "대법원이나 지방법원의 1·2·3심 판결이 모두 끝난 상태입니다.",
        value: "court_decided"
      }
    ]
  }
];

let userAnswers = {};
let currentWizardStep = 1;

function renderWizard() {
  const container = document.getElementById("wizard-content");
  if (!container) return;

  // 인디케이터 업데이트
  document.querySelectorAll(".step-indicator").forEach((ind) => {
    const s = parseInt(ind.getAttribute("data-step"), 10);
    ind.classList.remove("active", "completed");
    if (s === currentWizardStep) {
      ind.classList.add("active");
    } else if (s < currentWizardStep) {
      ind.classList.add("completed");
    }
  });

  // 1~3단계 질문 렌더링
  if (currentWizardStep <= 3) {
    const stepData = DIAGNOSIS_STEPS.find(s => s.step === currentWizardStep);
    if (!stepData) return;

    let optionsHtml = stepData.options.map((opt) => `
      <button type="button" class="option-btn" data-value="${opt.value}">
        <div class="opt-icon">${opt.icon}</div>
        <div class="opt-text">
          <strong>${opt.title}</strong>
          <span>${opt.desc}</span>
        </div>
      </button>
    `).join("");

    container.innerHTML = `
      <div class="wizard-question">${stepData.title}</div>
      <div class="wizard-sub">${stepData.sub}</div>
      <div class="wizard-options">${optionsHtml}</div>
    `;

    // 옵션 클릭 이벤트
    container.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-value");
        userAnswers[`step${currentWizardStep}`] = val;
        currentWizardStep++;
        renderWizard();
      });
    });
  } else {
    // 4단계 결과 렌더링
    renderWizardResult(container);
  }
}

function renderWizardResult(container) {
  const a1 = userAnswers.step1; // public, private, individual
  const a2 = userAnswers.step2; // infringement, discrimination, civil_money
  const a3 = userAnswers.step3; // no_lawsuit, court_decided

  let resultType = "";
  let icon = "";
  let title = "";
  let desc = "";
  let actionTitle = "";
  let actionDesc = "";
  let primaryBtnText = "";
  let primaryBtnLink = "";

  if (a3 === "court_decided") {
    // 법원 확정 판결 사건
    resultType = "other";
    icon = "🏛️";
    title = "법원 확정 판결 사건은 인권위 조사 대상에서 제외됩니다";
    desc = "헌법상 사법부의 독립성을 존중하기 위해, 법원에서 이미 판결이 확정되었거나 재판이 진행 중인 사건은 인권위에서 조사하거나 번복할 수 없습니다.";
    actionTitle = "💡 추천 해결 창구:";
    actionDesc = "새로운 명백한 증거가 발견된 경우 재심 청구를 검토하시거나, 대한법률구조공단(☎ 132)에서 무료 법률 상담을 받아보실 수 있습니다.";
    primaryBtnText = "대한법률구조공단(132) 알아보기";
    primaryBtnLink = "https://www.klac.or.kr";
  } else if (a1 === "individual" || a2 === "civil_money") {
    // 개인 간 단순 사적 다툼 / 금전 사기
    resultType = "other";
    icon = "⚖️";
    title = "개인 간의 민사·금전 다툼은 관할 수사·사법기관의 도움을 받으셔야 합니다";
    desc = "인권위원회는 공권력에 의한 인권침해와 사회적 차별행위를 조사하는 기구입니다. 이웃 간의 단순 생활 다툼이나 개인 간 채권·채무, 사기 피해 등은 인권위의 조사 대상이 아닙니다.";
    actionTitle = "💡 추천 해결 창구:";
    actionDesc = "사기 및 범죄 피해는 경찰청(☎ 182 / 112), 임금체불은 고용노동부(☎ 1350), 민사 법률 자문은 대한법률구조공단(☎ 132)에 신속히 도움을 요청하세요.";
    primaryBtnText = "고용노동부 민원포털(1350)";
    primaryBtnLink = "https://minwon.moel.go.kr";
  } else if (a2 === "discrimination") {
    // 차별행위 구제 대상 (공공 + 민간 고용/교육/시설 모두 포함)
    resultType = "discrimination";
    icon = "🤝";
    title = "국가인권위원회 [차별행위 조사·구제] 대상입니다!";
    desc = "성별, 나이, 장애, 출신지역, 외모 등을 이유로 고용·채용, 승진, 학교 교육, 시설 이용에서 정당한 이유 없이 불이익을 당하셨다면 인권위의 강력한 구제 조치를 받으실 수 있습니다.";
    actionTitle = "📋 즉시 취할 수 있는 조치:";
    actionDesc = "1331 전화로 전문 상담원과 통화하시거나, 인권위 홈페이지에서 온라인 진정서를 제출하시면 전담 차별조사관이 배정되어 현장 사실 확인과 시정 권고를 진행합니다.";
    primaryBtnText = "인권위 온라인 진정 접수 바로가기";
    primaryBtnLink = "https://www.humanrights.go.kr";
  } else if (a1 === "public" && a2 === "infringement") {
    // 공권력에 의한 인권침해 대상
    resultType = "eligible";
    icon = "🛡️";
    title = "국가인권위원회 [인권침해 진정] 핵심 대상입니다!";
    desc = "경찰, 검찰, 교도소, 군대, 지자체 등 국가기관의 불법적이거나 부당한 공권력 행사로 헌법상 보장된 기본권을 침해당하셨습니다. 인권위가 즉시 독립적으로 사실을 조사할 수 있습니다.";
    actionTitle = "📋 신속 구제 절차:";
    actionDesc = "국번 없이 ☎ 1331로 전화하시어 구체적인 피해 일시와 상대 기관을 알려주세요. 피해 발생일로부터 1년 이내에 진정하시면 조사관이 즉시 현장 조사에 착수합니다.";
    primaryBtnText = "☎ 1331 전화 상담 안내 보기";
    primaryBtnLink = "#contact";
  } else {
    // 기타 조합
    resultType = "eligible";
    icon = "🔍";
    title = "인권위 전문 상담을 통한 정밀 검토를 권장합니다";
    desc = "귀하의 상황은 기본권 침해 또는 차별 행위에 해당할 가능성이 높습니다. 복합적인 사안일 수 있으므로 인권상담센터(1331) 전문 상담사와 먼저 1:1 유선 상담을 진행하시는 것을 추천합니다.";
    actionTitle = "📋 상담 안내:";
    actionDesc = "전국 국번 없이 ☎ 1331 (평일 09:00 ~ 18:00)로 전화 주시면 상담원이 법령 적용 여부를 상세히 안내해 드립니다.";
    primaryBtnText = "상담 창구 및 전국 사무소 보기";
    primaryBtnLink = "#contact";
  }

  container.innerHTML = `
    <div class="result-box">
      <div class="result-icon">${icon}</div>
      <h3 class="result-title ${resultType}">${title}</h3>
      <p class="result-desc">${desc}</p>

      <div class="result-action-box">
        <h5>${actionTitle}</h5>
        <p>${actionDesc}</p>
      </div>

      <div class="result-buttons">
        <a href="${primaryBtnLink}" ${primaryBtnLink.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-primary btn-lg">
          ${primaryBtnText}
        </a>
        <button type="button" id="btn-restart-wizard" class="btn btn-secondary btn-lg">
          🔄 다시 진단하기
        </button>
      </div>
    </div>
  `;

  document.getElementById("btn-restart-wizard").addEventListener("click", () => {
    userAnswers = {};
    currentWizardStep = 1;
    renderWizard();
  });
}

// ==========================================
// 3. 최신 뉴스 렌더링 & 검색/필터 기능
// ==========================================
let currentNewsCategory = "all";
let searchKeyword = "";

function renderNews() {
  const grid = document.getElementById("news-grid");
  if (!grid) return;

  const countAll = document.getElementById("count-all");
  if (countAll) {
    countAll.textContent = NEWS_DATA.length;
  }

  const filtered = NEWS_DATA.filter(item => {
    const matchesCategory = (currentNewsCategory === "all") || (item.category === currentNewsCategory);
    const matchesKeyword = searchKeyword === "" || 
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="news-empty-state">
        <p style="font-size: 1.5rem; margin-bottom: 8px;">🔍</p>
        <p><strong>'${searchKeyword}'</strong>에 해당하는 뉴스를 찾을 수 없습니다.</p>
        <p style="font-size: 0.85rem; margin-top: 6px; color: var(--color-text-light);">다른 검색어나 전체 카테고리를 선택해 보세요.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="news-card">
      <div class="news-card-meta">
        <span class="news-source">${item.source}</span>
        <span class="news-date">${item.date}</span>
      </div>
      <h3 class="news-card-title">${item.title}</h3>
      <p class="news-card-desc">${item.summary}</p>
      <div class="news-card-footer">
        <span class="news-tag">${item.tag}</span>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-link-btn" title="원문 기사 새 창 열기">
          원문 기사 ↗
        </a>
      </div>
    </article>
  `).join("");
}

function initNewsControls() {
  const filterBtns = document.querySelectorAll(".btn-filter");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentNewsCategory = btn.getAttribute("data-category");
      renderNews();
    });
  });

  const searchInput = document.getElementById("news-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.trim();
      renderNews();
    });
  }
}

// ==========================================
// 4. 사례/절차 탭 & FAQ 아코디언 로직
// ==========================================
function initTabsAndAccordions() {
  // 탭 제어
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      tabBtns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });

  // FAQ 아코디언 제어
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // 단일 열림을 원하면 다른 항목 닫기
      document.querySelectorAll(".accordion-item").forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const otherHeader = other.querySelector(".accordion-header");
          if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
        }
      });

      if (isActive) {
        item.classList.remove("active");
        header.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ==========================================
// 5. 테마 (다크모드) & 글자 크기 접근성 설정
// ==========================================
function initAccessibilityControls() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // 로컬 스토리지에서 이전 설정 불러오기
  const savedTheme = localStorage.getItem("nhrck_theme") || "light";
  const savedFontSize = localStorage.getItem("nhrck_font_size") || "medium";

  body.setAttribute("data-theme", savedTheme);
  body.setAttribute("data-font-size", savedFontSize);
  updateThemeButton(savedTheme);
  updateFontButtons(savedFontSize);

  // 테마 토글 버튼
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = body.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", next);
      localStorage.setItem("nhrck_theme", next);
      updateThemeButton(next);
    });
  }

  // 글자 크기 버튼
  const fontSm = document.getElementById("font-sm");
  const fontMd = document.getElementById("font-md");
  const fontLg = document.getElementById("font-lg");

  if (fontSm) fontSm.addEventListener("click", () => setFontSize("small"));
  if (fontMd) fontMd.addEventListener("click", () => setFontSize("medium"));
  if (fontLg) fontLg.addEventListener("click", () => setFontSize("large"));
}

function updateThemeButton(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  const icon = themeToggle.querySelector(".theme-icon");
  const text = themeToggle.querySelector(".theme-text");
  if (theme === "dark") {
    if (icon) icon.textContent = "☀️";
    if (text) text.textContent = "라이트모드";
  } else {
    if (icon) icon.textContent = "🌙";
    if (text) text.textContent = "다크모드";
  }
}

function setFontSize(size) {
  document.body.setAttribute("data-font-size", size);
  localStorage.setItem("nhrck_font_size", size);
  updateFontButtons(size);
}

function updateFontButtons(size) {
  const fontBtns = {
    small: document.getElementById("font-sm"),
    medium: document.getElementById("font-md"),
    large: document.getElementById("font-lg")
  };
  Object.keys(fontBtns).forEach(k => {
    const el = fontBtns[k];
    if (el && el.classList) {
      if (k === size) el.classList.add("active");
      else el.classList.remove("active");
    }
  });
}

// ==========================================
// 6. 모바일 메뉴 토글 & 부드러운 스크롤
// ==========================================
function initMobileNavigation() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // 네비게이션 링크 클릭 시 모바일 메뉴 자동 닫기
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  }
}

// ==========================================
// 6.5 국민 맞춤형 도움 체크리스트 데이터 및 로직
// ==========================================
const CHECKLIST_SERVICES = {
  free_investigation: {
    id: "free_investigation",
    icon: "🔍",
    title: "국가 예산 100% 무료 전담 조사 지원",
    desc: "변호사를 선임할 경제적 여력이 없어도 괜찮습니다. 국가인권위원회 소속 전문 조사관이 현장에 직접 출동하여 폐쇄회로(CCTV) 영상, 근무일지, 출입기록 등 핵심 증거를 국가 공권력으로 확보합니다.",
    benefit: "★ 개인 변호사 선임 비용(수백만원) 부담 0원 + 증거 확보 국가 지원",
    urgent: false
  },
  remedy_order: {
    id: "remedy_order",
    icon: "⚖️",
    title: "가해자 징계 & 불이익 원상회복(승진·복직) 권고",
    desc: "피진정기관의 장에게 위법·차별 행위자에 대한 징계 처분을 권고하고, 부당한 탈락이나 징계 처분을 취소하며, 피해자에 대한 위자료·손해배상금 지급 합의를 주선합니다.",
    benefit: "★ 공공기관 권고 수용률 90% 안팎 + 정당한 사유 없이 거부 시 언론에 명단 전면 공표",
    urgent: false
  },
  military_ombuds: {
    id: "military_ombuds",
    icon: "🪖",
    title: "군인권보호관 영내 불시 방문조사 & 은폐 차단",
    desc: "2022년 출범한 법정 군인권보호관이 군부대 영내에 사전 통보 없이 불시 방문하여 군 복무 중 가혹행위, 진료 방치, 사망사건의 진상을 군 당국과 완전히 독립되어 조사합니다.",
    benefit: "★ 지휘관의 사건 축소·은폐 원천 차단 + 유족 참여권 보장 및 순직 심의 권고",
    urgent: true
  },
  disability_order: {
    id: "disability_order",
    icon: "♿",
    title: "장애인차별시정명령 청구 & 정당한 편의제공 강제",
    desc: "휠체어 경사로 미설치, 수어 통역 거부, 안내견 출입 거부 등 정당한 사유 없는 배제 행위에 대해 시정권고를 내립니다. 피진정인이 불이행 시 법무부장관의 시정명령 및 최대 3천만원 과태료가 부과됩니다.",
    benefit: "★ 배려가 아닌 '법적 의무'로 강제 + 이동권 및 시설 접근권 회복",
    urgent: false
  },
  urgent_relief: {
    id: "urgent_relief",
    icon: "🚨",
    title: "긴급구제 임시조치 (위원회 최종 의결 전 즉시 발동)",
    desc: "본 조사가 끝나기 전이라도 피해자의 생명이나 신체에 회복하기 어려운 급박한 위험이 있는 경우, 즉시 가해자 분리 격리, 구금시설 변경, 외부 민간병원 긴급 이송을 피진정기관에 권고합니다.",
    benefit: "★ 긴급한 신체 위협·보복 피해를 골든타임 내에 차단하는 안전망",
    urgent: true
  },
  whistleblower_protection: {
    id: "whistleblower_protection",
    icon: "🔒",
    title: "진정인 인적사항 철저 비밀보장 & 해고·불이익 처벌",
    desc: "진정인의 성명, 주소, 연락처 등 일체의 개인정보는 비공개 처리되며, 진정을 했다는 이유로 해고, 전보, 따돌림 등 불이익을 가할 경우 법률에 따라 2년 이하 징역 또는 2천만원 이하 벌금형에 처해집니다.",
    benefit: "★ 신분 노출 걱정 없이 안심 진정 + 2차 가해 시 형사처벌 법적 보호",
    urgent: false
  },
  school_reform: {
    id: "school_reform",
    icon: "🎒",
    title: "인권침해 학칙(휴대전화 강제수거 등) 개정 권고",
    desc: "학생들의 일반적 행동자유권과 통신의 자유를 침해하는 휴대전화 일괄 수거, 과도한 소지품 검사, 두발 규제 등 불합리한 학교 규칙을 개정하도록 관할 교육청과 학교장에게 공식 권고합니다.",
    benefit: "★ 개별 학생 보호뿐 아니라 전교생 대상 인권친화적 학교 규칙 개정 견인",
    urgent: false
  },
  public_benefits: {
    id: "public_benefits",
    icon: "📚",
    title: "인권 전문도서관 무료 대출 & 무료 온라인 교육 이수증",
    desc: "서울 저동 본부에 위치한 인권도서관의 7만여 권 전문 도서·영상 자료를 무료 대출받으실 수 있으며, '인권 e-배움터' 포털에서 직장 내 괴롭힘·성희롱 예방 등 법정의무 교육을 무료 수강하고 수료증을 발급받습니다.",
    benefit: "★ 대한민국 국민 누구나 무료 이용 + 법정 의무교육 이수증 공인 발급",
    urgent: false
  },
  law_monitoring: {
    id: "law_monitoring",
    icon: "📜",
    title: "국민 권리 침해 법률·조례에 대한 정부·국회 개정 권고",
    desc: "국민의 삶을 옥죄거나 사각지대를 방치하는 국가 법률, 시행령, 지자체 조례에 대해 인권위 차원의 공식 개정·폐지 의견을 국회와 행정부에 표명합니다.",
    benefit: "★ 사관생도 3금 완화, 정년 65세 권고처럼 대한민국 제도 전체를 바꾸는 영향력",
    urgent: false
  }
};

const CHECKLIST_SITUATIONS = [
  {
    id: "work_discrim",
    roles: ["worker", "migrant"],
    icon: "👔",
    tag: "고용·채용 차별",
    title: "채용 면접, 승진, 임금에서 성별·나이·출신·외모로 차별을 당했어요",
    desc: "직무와 무관한 개인 신상(결혼 계획, 용모, 나이) 질문으로 탈락했거나, 동일 노동 차별 임금을 받고 있는 경우",
    services: ["free_investigation", "remedy_order", "whistleblower_protection"]
  },
  {
    id: "disability_barrier",
    roles: ["disabled", "citizen"],
    icon: "♿",
    tag: "장애인 차별·접근권",
    title: "휠체어로 식당·가게 출입이 막혔거나, 편의시설·수어통역 미비로 배제되었어요",
    desc: "식당 경사로 미설치, 시각장애인 안내견 출입 거부, 웹사이트 화면해설 미제공 등 일상에서 거부당한 경우",
    services: ["disability_order", "remedy_order", "free_investigation"]
  },
  {
    id: "military_abuse",
    roles: ["military"],
    icon: "🪖",
    tag: "군 복무 가혹행위",
    title: "군대 내에서 폭언·구타·따돌림을 당했거나, 아픈데 병원 진료를 막았어요",
    desc: "영내 괴롭힘, 선임병의 가혹행위, 지휘관의 진료권 제한, 군 사망사건 진상규명이 필요한 경우",
    services: ["military_ombuds", "urgent_relief", "free_investigation", "remedy_order"]
  },
  {
    id: "police_excess",
    roles: ["justice", "citizen"],
    icon: "👮",
    tag: "수사권 남용·공권력",
    title: "경찰·검찰 수사 과정에서 폭언, 심야 강압수사, 변호인 참여 거부를 겪었어요",
    desc: "위법한 긴급체포, 휴대전화 강제 포렌식 제출 강요, 미성년 피의자 부모 미통지 등 적법절차 위반",
    services: ["free_investigation", "remedy_order", "whistleblower_protection"]
  },
  {
    id: "mental_care",
    roles: ["disabled", "justice"],
    icon: "🏥",
    tag: "시설 격리·신체제한",
    title: "정신병원·요양시설에서 부당하게 침대에 묶이거나(격리·강박), 기저귀를 강요당했어요",
    desc: "치료 목적을 벗어난 장시간 신체 억압, 통신·면회 차단, 시설 내 폭행 및 가혹행위로 인권이 짓밟힌 경우",
    services: ["urgent_relief", "free_investigation", "remedy_order"]
  },
  {
    id: "school_privacy",
    roles: ["student"],
    icon: "🎒",
    tag: "학생 사생활·학칙",
    title: "학교에서 휴대전화를 강제로 수거당하거나, 과도한 소지품 검사 등 사생활 침해를 겪었어요",
    desc: "학습권과 무관한 과도한 통신 통제, 인격 모독성 체벌 및 언어폭력, 성소수자 학생 차별 등",
    services: ["school_reform", "free_investigation", "remedy_order"]
  },
  {
    id: "urgent_danger",
    roles: ["military", "justice", "disabled", "worker"],
    icon: "🚨",
    tag: "긴급 신체 위험",
    title: "당장 생명이나 신체에 급박한 위해가 발생하여 즉시 개입(긴급구제)이 절실해요",
    desc: "지속적 폭력 위협, 시설 내 긴급 환자 외부 후송 차단, 구금시설 내 보복 폭행 위험에 직면한 경우",
    services: ["urgent_relief", "military_ombuds", "free_investigation"]
  },
  {
    id: "secret_whistle",
    roles: ["worker", "military", "justice", "citizen"],
    icon: "🔒",
    tag: "신분 노출 두려움",
    title: "억울함을 알리고 싶은데, 회사나 가해자에게 내 신분이 탄로날까 봐 보복이 두려워요",
    desc: "비정규직 해고 위협, 조직 내 블랙리스트, 보복성 인사 조치가 두려워 신고를 망설이고 있는 경우",
    services: ["whistleblower_protection", "free_investigation"]
  },
  {
    id: "free_edu",
    roles: ["citizen", "worker", "student"],
    icon: "📚",
    tag: "무료 교육·도서",
    title: "인권 관련 무료 전문 교육을 이수하고 수료증을 받거나, 전문 도서를 빌려보고 싶어요",
    desc: "직장 내 법정 인권교육 무료 이수, 인권 연구 논문 및 전문 서적 무료 열람 대출을 희망하는 경우",
    services: ["public_benefits"]
  },
  {
    id: "law_improve",
    roles: ["citizen", "disabled", "migrant", "worker"],
    icon: "📜",
    tag: "법령·제도 개선",
    title: "불합리한 법이나 조례가 시민의 권리를 침해하고 있어, 개정을 권고하도록 건의하고 싶어요",
    desc: "시대착오적인 규정, 초고령 정년 연장, 알고리즘 AI 규제 등 사회 시스템 개선 의견을 표명하고 싶은 경우",
    services: ["law_monitoring", "public_benefits"]
  }
];

let currentChecklistRole = "all";
const checkedSituationIds = new Set(["work_discrim", "disability_barrier"]);

function renderChecklistItems() {
  const container = document.getElementById("check-items-container");
  if (!container) return;

  const filtered = CHECKLIST_SITUATIONS.filter(item => {
    if (currentChecklistRole === "all") return true;
    return item.roles.includes(currentChecklistRole);
  });

  container.innerHTML = filtered.map(item => {
    const isChecked = checkedSituationIds.has(item.id);
    return `
      <div class="check-card-item ${isChecked ? 'selected' : ''}" data-id="${item.id}" role="checkbox" aria-checked="${isChecked}">
        <div class="check-box-custom">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="check-card-content">
          <div class="check-card-header">
            <span class="check-item-icon">${item.icon}</span>
            <span class="check-item-tag">${item.tag}</span>
          </div>
          <div class="check-card-title">${item.title}</div>
          <div class="check-card-desc">${item.desc}</div>
        </div>
      </div>
    `;
  }).join("");

  // 체크 카드 클릭 이벤트 바인딩
  container.querySelectorAll(".check-card-item").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      if (checkedSituationIds.has(id)) {
        checkedSituationIds.delete(id);
      } else {
        checkedSituationIds.add(id);
      }
      renderChecklistItems();
      renderChecklistReport();
    });
  });
}

function renderChecklistReport() {
  const container = document.getElementById("help-report-result");
  if (!container) return;

  if (checkedSituationIds.size === 0) {
    container.innerHTML = `
      <div class="report-empty-state">
        <div class="report-empty-icon">💡</div>
        <h4>선택된 상황이 없습니다</h4>
        <p>위 2단계 체크리스트에서 본인의 상황이나 궁금한 점을 1개 이상 체크해 보세요.<br>국가인권위원회로부터 받으실 수 있는 구체적 혜택과 구제 방법이 즉시 안내됩니다.</p>
      </div>
    `;
    return;
  }

  // 선택된 항목들로부터 고유한 서비스 추출
  const activeServiceIds = new Set();
  CHECKLIST_SITUATIONS.forEach(sit => {
    if (checkedSituationIds.has(sit.id)) {
      sit.services.forEach(sId => activeServiceIds.add(sId));
    }
  });

  const servicesList = Array.from(activeServiceIds)
    .map(sId => CHECKLIST_SERVICES[sId])
    .filter(Boolean);

  const servicesHtml = servicesList.map(srv => `
    <div class="service-card ${srv.urgent ? 'urgent' : ''}">
      <div class="service-card-top">
        <span class="service-icon">${srv.icon}</span>
        <h5 class="service-title">${srv.title}</h5>
      </div>
      <p class="service-desc">${srv.desc}</p>
      <div class="service-benefit">${srv.benefit}</div>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="report-header-box">
      <div class="report-title-wrap">
        <h4>🎯 국민 맞춤형 인권위 지원 패키지 리포트</h4>
        <p>선택하신 ${checkedSituationIds.size}개 고민에 대응하여 국가인권위원회가 법률에 따라 제공하는 맞춤 구제 혜택입니다.</p>
      </div>
      <div class="report-stats-badge">
        <div class="stat-pill">
          <span class="stat-pill-num">${checkedSituationIds.size}건</span>
          <span class="stat-pill-label">선택한 고민</span>
        </div>
        <div class="stat-pill">
          <span class="stat-pill-num">${servicesList.length}가지</span>
          <span class="stat-pill-label">제공되는 지원</span>
        </div>
      </div>
    </div>

    <div class="report-section-title">
      <span>🛡️</span> 국가인권위원회가 제공해 드리는 핵심 지원 내용
    </div>

    <div class="help-services-grid">
      ${servicesHtml}
    </div>

    <div class="prep-memo-box">
      <h5><span>📝</span> 인권상담(1331) 또는 진정 신청 시 챙기면 좋은 준비 메모</h5>
      <div class="prep-list">
        <div class="prep-list-item">
          <span class="prep-check-bullet">✔</span>
          <span><strong>발생 일시 및 장소:</strong> 언제, 어느 장소 또는 부서에서 발생했는지 대략적인 시점</span>
        </div>
        <div class="prep-list-item">
          <span class="prep-check-bullet">✔</span>
          <span><strong>상대방 정보:</strong> 가해 기관명, 부서명, 직책 또는 이름 (미상인 경우 기관명만으로도 가능)</span>
        </div>
        <div class="prep-list-item">
          <span class="prep-check-bullet">✔</span>
          <span><strong>구체적 피해 사실:</strong> 겪으신 상황을 감정이 아닌 사실 위주(육하원칙)로 메모</span>
        </div>
        <div class="prep-list-item">
          <span class="prep-check-bullet">✔</span>
          <span><strong>참고자료 (선택사항):</strong> 녹취, 문자, 사진, 진단서 등 (자료가 전혀 없어도 조사 착수 가능)</span>
        </div>
      </div>
    </div>

    <div class="report-action-buttons">
      <div class="report-action-left">
        <a href="#contact" class="btn btn-primary">
          ☎ 1331 상담 창구 안내 보기
        </a>
        <a href="https://www.humanrights.go.kr" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          인권위 온라인 진정 접수 바로가기 ↗
        </a>
      </div>
      <button type="button" id="btn-print-report" class="btn-print" title="이 리포트를 인쇄하거나 PDF로 저장합니다">
        🖨️ 내 맞춤 리포트 인쇄 / PDF 저장
      </button>
    </div>
  `;

  // 인쇄 버튼 이벤트 바인딩
  const printBtn = document.getElementById("btn-print-report");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

function initChecklistControls() {
  // 1단계 태그 필터 버튼들
  const tagPills = document.querySelectorAll("#user-role-tags .tag-pill");
  tagPills.forEach(pill => {
    pill.addEventListener("click", () => {
      tagPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentChecklistRole = pill.getAttribute("data-role");
      renderChecklistItems();
    });
  });

  // 전체 선택 버튼
  const btnSelectAll = document.getElementById("btn-select-all");
  if (btnSelectAll) {
    btnSelectAll.addEventListener("click", () => {
      CHECKLIST_SITUATIONS.forEach(s => checkedSituationIds.add(s.id));
      renderChecklistItems();
      renderChecklistReport();
    });
  }

  // 선택 초기화 버튼
  const btnClearAll = document.getElementById("btn-clear-all");
  if (btnClearAll) {
    btnClearAll.addEventListener("click", () => {
      checkedSituationIds.clear();
      renderChecklistItems();
      renderChecklistReport();
    });
  }
}

// ==========================================
// 7. 애플리케이션 초기화
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderWizard();
  renderNews();
  initNewsControls();
  initTabsAndAccordions();
  initAccessibilityControls();
  initMobileNavigation();

  // 신규 맞춤도움 체크리스트 초기화
  renderChecklistItems();
  renderChecklistReport();
  initChecklistControls();
});
