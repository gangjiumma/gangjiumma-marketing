import type { Metadata } from "next";
import AppLegalLayout from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  robots: { index: false, follow: false, nocache: true },
  description: "AnimAI 개인정보 처리방침. 이용자의 개인정보를 안전하게 보호하기 위한 방침입니다.",
};

export default function PrivacyPolicyPage() {
  return (
    <AppLegalLayout
      title="개인정보 처리방침"
      subtitle="(주)비타니마는 이용자의 개인정보를 소중히 다룹니다."
      effectiveDate="2026년 5월 12일"
    >
      <section id="intro" className="mb-12">
        <p className="text-base md:text-lg">
          (주)비타니마(이하 &quot;회사&quot;)는 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하고 관련 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>
        <p className="mt-4">
          본 방침은 회사가 제공하는 &quot;AnimAI&quot; 모바일 앱 및 웹사이트(<a href="https://animai.kr" className="text-brand hover:underline">animai.kr</a>)에 적용됩니다.
        </p>
      </section>

      <section id="section-1" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제1조 (수집하는 개인정보 항목)</h2>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">① 회원가입 시 수집 항목</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>필수:</strong> 이메일 주소, 비밀번호(암호화 저장), 닉네임, 휴대전화번호</li>
          <li><strong>필수:</strong> 거주 지역(시·도, 시·군·구), 주소(우편번호 포함, 일부 서비스 한정)</li>
          <li><strong>필수:</strong> 반려동물 정보(이름, 성별, 생년월일, 견종, 사진)</li>
          <li><strong>선택:</strong> 프로필 사진, 추가 연락처</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">② 사장님(사업자) 회원가입 시 추가 수집 항목</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>상호, 사업자등록번호, 사업자등록증 사본(이미지)</li>
          <li>대표자명, 매장 주소, 매장 연락처</li>
          <li>업종 정보, 영업시간, 매장 사진</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">③ 결제 및 정산 시 수집 항목</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>카드 정보(빌링키 발급용, 카드사 직접 처리·회사 미보관)</li>
          <li>현금화 시: 예금주명, 은행명, 계좌번호(암호화 저장)</li>
          <li>세금계산서 발행 시: 사업자 정보</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">④ 서비스 이용 중 자동 생성·수집 항목</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>접속 IP, 접속 로그, 쿠키, 기기 정보(OS, 기종, 브라우저)</li>
          <li>서비스 이용 기록(게시글, 댓글, 좋아요, 검색어, 채팅 내역)</li>
          <li>위치 정보(GPS, 산책 기록, 동의 시에 한함)</li>
          <li>AI(강GPT) 대화 내역</li>
          <li>구매·결제·구독 내역, Paw 적립·차감 내역</li>
          <li>광고 노출·클릭 내역, 통계용 익명 데이터</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">⑤ 카메라 및 갤러리 접근</h3>
        <p>강아지 사진 등록, 산책 기록, AI 사진 분석, 사업자 등록증 제출 등을 위해 카메라·갤러리 접근 권한을 요청합니다. 사용자가 명시적으로 사진을 선택·촬영한 경우에만 수집됩니다.</p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제2조 (개인정보의 수집 및 이용 목적)</h2>
        <p>회사는 수집한 개인정보를 다음 목적으로만 이용하며, 목적이 변경되는 경우 사전에 동의를 받습니다.</p>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">① 회원 관리</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>회원 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리</li>
          <li>서비스 부정 이용 방지, 비인가 사용 방지</li>
          <li>탈퇴 의사 확인, 분쟁 조정을 위한 기록 보존</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">② 서비스 제공</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>반려동물 맞춤형 정보·콘텐츠 제공</li>
          <li>지역 기반 업체·상품·이벤트 추천 (위치 정보 기반)</li>
          <li>AI 건강 상담(강GPT) 응답 생성 및 개인화</li>
          <li>커뮤니티 게시판 운영, 좋아요·댓글·알림 기능 제공</li>
          <li>산책 기록·일정 관리·예방접종 알림 등 기능 제공</li>
          <li>Paw 포인트 적립·차감·현금화 처리</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">③ 결제 및 정산</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>구독 결제, 자동결제, 환불 처리</li>
          <li>사장님(사업자) Paw 현금화 정산</li>
          <li>세금계산서 및 매출 자료 발행</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">④ 마케팅 및 광고 (별도 동의 시)</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>신규 서비스·이벤트·혜택 안내</li>
          <li>맞춤형 광고 제공, 추천 알고리즘 개선</li>
          <li>설문조사·통계 분석, 서비스 개선 자료로 활용</li>
        </ul>
        <p className="mt-3 text-sm text-ink-3">
          ※ 자세한 내용은 <a href="/marketing-consent" className="text-brand hover:underline">마케팅 정보 수신 동의</a> 페이지를 참고하세요.
        </p>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">⑤ 통계 분석 및 서비스 개선</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>이용 행태 분석, 인기 콘텐츠/업체 분석</li>
          <li>AI 모델 성능 개선 (개인 식별 정보 제외)</li>
          <li>서비스 오류 추적 및 개선</li>
        </ul>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제3조 (개인정보의 보유 및 이용 기간)</h2>
        <p>회사는 원칙적으로 개인정보 수집·이용 목적이 달성된 후 또는 회원 탈퇴 시 즉시 해당 정보를 파기합니다. 다만, 관련 법령에 의해 보존이 필요한 경우 다음 기간 동안 보관합니다.</p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border border-line text-sm md:text-base">
            <thead className="bg-surface-subtle">
              <tr>
                <th className="border border-line p-3 text-left">보존 항목</th>
                <th className="border border-line p-3 text-left">보존 기간</th>
                <th className="border border-line p-3 text-left">법적 근거</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-line p-3">계약·청약철회 기록</td><td className="border border-line p-3">5년</td><td className="border border-line p-3">전자상거래법</td></tr>
              <tr><td className="border border-line p-3">대금 결제·재화 공급 기록</td><td className="border border-line p-3">5년</td><td className="border border-line p-3">전자상거래법</td></tr>
              <tr><td className="border border-line p-3">소비자 불만·분쟁 처리 기록</td><td className="border border-line p-3">3년</td><td className="border border-line p-3">전자상거래법</td></tr>
              <tr><td className="border border-line p-3">전자금융 거래 기록</td><td className="border border-line p-3">5년</td><td className="border border-line p-3">전자금융거래법</td></tr>
              <tr><td className="border border-line p-3">세무 관련 기록</td><td className="border border-line p-3">5년</td><td className="border border-line p-3">국세기본법</td></tr>
              <tr><td className="border border-line p-3">접속 로그, IP</td><td className="border border-line p-3">3개월</td><td className="border border-line p-3">통신비밀보호법</td></tr>
              <tr><td className="border border-line p-3">부정이용 기록</td><td className="border border-line p-3">1년</td><td className="border border-line p-3">회사 내부 정책</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-ink-3">
          ※ 부정 이용 방지 및 서비스 신뢰성 확보를 위해, 탈퇴한 회원의 일부 정보(닉네임, 가입 IP, 부정 이용 사유)는 최대 1년간 보관할 수 있습니다.
        </p>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제4조 (개인정보의 제3자 제공)</h2>
        <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 다음의 경우에는 예외로 합니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령에 특별한 규정이 있거나, 수사기관의 적법한 절차에 따른 요청이 있는 경우</li>
          <li>이용자가 매장 예약/문의/쿠폰 사용 시 해당 사장님에게 닉네임·전화번호 등 거래 진행에 필요한 최소 정보 제공</li>
          <li>통계 분석, 학술 연구 등을 위해 식별 불가능한 형태로 제공하는 경우</li>
        </ul>

        <p className="mt-4 text-sm text-ink-3">
          ※ 사장님 간 거래 시 제공되는 정보는 거래 목적 외 사용이 금지되며, 위반 시 사장님 계정이 영구 정지될 수 있습니다.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제5조 (개인정보 처리 위탁)</h2>
        <p>회사는 서비스의 원활한 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border border-line text-sm md:text-base">
            <thead className="bg-surface-subtle">
              <tr>
                <th className="border border-line p-3 text-left">위탁받는 자</th>
                <th className="border border-line p-3 text-left">위탁 업무 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-line p-3 font-bold">Supabase Inc.</td><td className="border border-line p-3">데이터베이스 호스팅, 인증, 파일 저장</td></tr>
              <tr><td className="border border-line p-3 font-bold">Vercel Inc.</td><td className="border border-line p-3">웹사이트 호스팅, CDN, 결제 페이지 호스팅</td></tr>
              <tr><td className="border border-line p-3 font-bold">Anthropic, PBC</td><td className="border border-line p-3">AI(강GPT) 응답 생성 (Claude API)</td></tr>
              <tr><td className="border border-line p-3 font-bold">토스페이먼츠</td><td className="border border-line p-3">결제 처리, 빌링키 발급, 자동결제</td></tr>
              <tr><td className="border border-line p-3 font-bold">㈜카카오</td><td className="border border-line p-3">소셜 로그인, 알림톡 발송 (해당 시)</td></tr>
              <tr><td className="border border-line p-3 font-bold">㈜네이버</td><td className="border border-line p-3">지도·위치 서비스 (해당 시)</td></tr>
              <tr><td className="border border-line p-3 font-bold">SOLAPI</td><td className="border border-line p-3">SMS·LMS 발송</td></tr>
              <tr><td className="border border-line p-3 font-bold">Google LLC</td><td className="border border-line p-3">앱 분석(Firebase, Analytics), 푸시 알림(FCM)</td></tr>
              <tr><td className="border border-line p-3 font-bold">Apple Inc.</td><td className="border border-line p-3">iOS 푸시 알림(APNs), App Store 결제</td></tr>
              <tr><td className="border border-line p-3 font-bold">Expo, Inc.</td><td className="border border-line p-3">앱 빌드 및 업데이트 배포</td></tr>
            </tbody>
          </table>
        </div>

        <p>회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁 업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한 등을 명시합니다.</p>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제6조 (개인정보의 국외 이전)</h2>
        <p>회사는 일부 위탁사가 해외에 서버를 두고 있어 다음과 같이 개인정보가 국외로 이전될 수 있습니다.</p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border border-line text-sm md:text-base">
            <thead className="bg-surface-subtle">
              <tr>
                <th className="border border-line p-3 text-left">이전 받는 자</th>
                <th className="border border-line p-3 text-left">이전 국가</th>
                <th className="border border-line p-3 text-left">이전 항목</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-line p-3">Supabase Inc.</td><td className="border border-line p-3">미국, 싱가포르</td><td className="border border-line p-3">회원 정보 전반</td></tr>
              <tr><td className="border border-line p-3">Vercel Inc.</td><td className="border border-line p-3">미국</td><td className="border border-line p-3">접속 로그, IP</td></tr>
              <tr><td className="border border-line p-3">Anthropic, PBC</td><td className="border border-line p-3">미국</td><td className="border border-line p-3">AI 대화 내용 (식별 정보 제외)</td></tr>
              <tr><td className="border border-line p-3">Google LLC</td><td className="border border-line p-3">미국</td><td className="border border-line p-3">기기 정보, 사용 로그</td></tr>
              <tr><td className="border border-line p-3">Apple Inc.</td><td className="border border-line p-3">미국</td><td className="border border-line p-3">기기 정보, 결제 정보</td></tr>
            </tbody>
          </table>
        </div>

        <p>이전 시기 및 방법: 회원 가입 및 서비스 이용 시 자동으로 네트워크를 통해 이전. 보유 및 이용 기간은 본 방침의 제3조 및 위탁사 정책에 따릅니다.</p>
        <p className="mt-3">이용자는 개인정보 국외 이전을 거부할 권리가 있습니다. 다만, 거부 시 서비스의 일부 또는 전부를 이용할 수 없습니다.</p>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제7조 (이용자 및 법정대리인의 권리)</h2>
        <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>개인정보 열람 요청</li>
          <li>오류 정정 및 삭제 요청</li>
          <li>처리 정지 요청</li>
          <li>동의 철회 (마케팅 수신 등)</li>
          <li>개인정보 이동권 행사 (해당 시)</li>
        </ul>

        <p className="mt-4"><strong>행사 방법:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>이메일: <a href="mailto:cs@vitanima.kr" className="text-brand hover:underline">cs@vitanima.kr</a></li>
          <li>앱 내 [My] → [문의하기] 기능</li>
          <li>앱 내 [설정] → [개인정보 관리]에서 직접 변경/삭제</li>
        </ul>

        <p className="mt-4">회사는 요청 접수 후 10일 이내에 처리하며, 처리 결과를 알려드립니다. 단, 법령에 의해 보존이 필요한 정보는 처리되지 않을 수 있습니다.</p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제8조 (개인정보의 파기 절차 및 방법)</h2>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">파기 절차</h3>
        <p>이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 관련 법령에 의한 정보보호 사유(제3조)에 따라 일정 기간 저장된 후 파기됩니다.</p>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">파기 방법</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>전자적 파일:</strong> 복구 불가능한 기술적 방법(데이터베이스 트리거를 통한 영구 삭제, 디스크 영구 삭제)으로 처리</li>
          <li><strong>종이 문서:</strong> 분쇄기로 분쇄하거나 소각</li>
        </ul>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제9조 (개인정보의 안전성 확보 조치)</h2>
        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">① 관리적 조치</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>내부관리계획 수립·시행 및 정기 점검</li>
          <li>개인정보 취급자 최소화 및 정기 교육</li>
          <li>접근 권한 차등 부여 및 정기 점검</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">② 기술적 조치</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>비밀번호 일방향 암호화 저장 (bcrypt 등)</li>
          <li>전송 구간 SSL/TLS 암호화 적용</li>
          <li>주요 개인정보(계좌번호, 사업자번호 등) 저장 시 암호화</li>
          <li>접근 제어 시스템(RLS, Row Level Security)</li>
          <li>해킹 및 컴퓨터 바이러스에 대한 대비</li>
          <li>정기적인 보안 점검 및 백업</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">③ 물리적 조치</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>전산실, 자료보관실의 접근 통제 (위탁사 데이터센터)</li>
          <li>비인가자의 접근 제어</li>
        </ul>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제10조 (자동 수집 장치의 설치·운영 및 거부)</h2>
        <p>회사는 이용자에게 개별 맞춤 서비스를 제공하기 위해 쿠키 및 유사 기술을 사용합니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li><strong>사용 목적:</strong> 로그인 유지, 이용 패턴 분석, 보안</li>
          <li><strong>거부 방법:</strong> 웹 브라우저의 설정에서 쿠키를 차단할 수 있습니다. 단, 일부 서비스 이용에 제한이 있을 수 있습니다.</li>
          <li><strong>모바일 앱:</strong> 광고 식별자(ADID/IDFA)는 기기 설정에서 초기화 또는 차단 가능합니다.</li>
        </ul>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제11조 (만 14세 미만 아동의 개인정보)</h2>
        <p>회사는 만 14세 미만 아동의 회원 가입을 받지 않으며, 만 14세 미만임이 확인된 경우 즉시 해당 계정을 삭제 처리합니다. 만 14세 미만 아동의 부모 또는 법정대리인은 언제든지 자녀의 개인정보 열람·정정·삭제·처리정지·동의 철회를 요청할 수 있습니다.</p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제12조 (개인정보 보호책임자)</h2>
        <p>회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 개인정보 처리와 관련한 이용자의 불만 처리 및 피해 구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>

        <div className="my-4 p-5 bg-brand-tint50 rounded-2xl">
          <p className="font-bold text-ink-1 mb-2">개인정보 보호책임자</p>
          <p>성명: 김훈기</p>
          <p>직책: 대표</p>
          <p>연락처: <a href="mailto:cs@vitanima.kr" className="text-brand hover:underline">cs@vitanima.kr</a></p>
        </div>
      </section>

      <section id="section-13" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제13조 (권익 침해 구제 방법)</h2>
        <p>개인정보 침해로 인한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>개인정보분쟁조정위원회: <a href="https://www.kopico.go.kr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">kopico.go.kr</a> / 1833-6972</li>
          <li>개인정보침해신고센터: <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">privacy.kisa.or.kr</a> / 118</li>
          <li>대검찰청 사이버수사과: <a href="https://www.spo.go.kr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">spo.go.kr</a> / 1301</li>
          <li>경찰청 사이버수사국: <a href="https://ecrm.cyber.go.kr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">ecrm.cyber.go.kr</a> / 182</li>
        </ul>
      </section>

      <section id="section-14" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제14조 (개인정보 처리방침의 변경)</h2>
        <p>이 개인정보 처리방침은 2026년 5월 12일부터 시행됩니다.</p>
        <p className="mt-3">법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우 변경사항의 시행 7일 전부터 앱 내 공지사항 또는 이메일을 통해 사전 공지합니다. 다만, 이용자의 권리에 중대한 변경이 발생하는 경우 최소 30일 전에 공지합니다.</p>
      </section>
    </AppLegalLayout>
  );
}
