import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "마케팅 정보 수신 동의",
  description: "강쥐엄마 마케팅 정보 수신 동의에 관한 안내입니다.",
};

const sections = [
  { id: "intro", title: "개요" },
  { id: "section-1", title: "1. 동의 항목" },
  { id: "section-2", title: "2. 수집·이용 목적" },
  { id: "section-3", title: "3. 수집 항목" },
  { id: "section-4", title: "4. 발송 채널" },
  { id: "section-5", title: "5. 보유·이용 기간" },
  { id: "section-6", title: "6. 동의 철회" },
  { id: "section-7", title: "7. 거부 권리" },
  { id: "section-8", title: "8. 맞춤형 광고" },
  { id: "section-9", title: "9. 제휴 광고" },
];

export default function MarketingConsentPage() {
  return (
    <LegalLayout
      title="마케팅 정보 수신 동의"
      subtitle="강쥐엄마의 다양한 혜택과 정보를 받아보세요."
      effectiveDate="2026년 5월 12일"
      sections={sections}
    >
      <section id="intro" className="mb-12">
        <p className="text-base md:text-lg">
          (주)비타니마(이하 &quot;회사&quot;)는 「개인정보 보호법」 제22조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제50조에 따라 회원에게 마케팅 정보를 제공하기 위해 다음과 같이 동의를 받습니다.
        </p>
        <p className="mt-4">
          본 동의는 <strong>선택 사항</strong>이며, 동의를 거부하시더라도 강쥐엄마의 기본 서비스 이용에는 제한이 없습니다. 다만, 회사가 제공하는 다양한 혜택과 맞춤형 정보를 받지 못할 수 있습니다.
        </p>

        <div className="my-6 p-5 bg-brand-tint50 rounded-2xl border border-brand-tint200">
          <p className="text-base font-bold text-ink-1 mb-2">동의 시 받게 되는 혜택</p>
          <ul className="list-disc pl-6 space-y-1 text-ink-2">
            <li>회원 전용 할인 쿠폰 및 Paw 보너스</li>
            <li>신규 펫페어, 동네 이벤트 사전 안내</li>
            <li>반려동물 맞춤 건강·영양·산책 가이드</li>
            <li>강쥐엄마 굿즈 및 무료 체험단 이벤트</li>
            <li>제휴사 협업 혜택 (전문 동물병원, 펫샵 등)</li>
          </ul>
        </div>
      </section>

      <section id="section-1" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제1조 (동의 항목)</h2>
        <p>회원은 다음 두 가지 항목에 대해 각각 동의할 수 있습니다. (선택)</p>

        <ol className="list-decimal pl-6 mt-4 space-y-3">
          <li>
            <strong>광고성 정보 수신 동의</strong>
            <p className="mt-1 text-ink-2">앱 푸시 알림, 이메일, SMS·LMS·MMS, 알림톡 등을 통해 마케팅 정보를 수신합니다.</p>
          </li>
          <li>
            <strong>개인정보의 마케팅 활용 동의</strong>
            <p className="mt-1 text-ink-2">개인 식별 정보를 마케팅 활용을 위해 분석·가공하는 것에 동의합니다. (맞춤형 광고, 추천 알고리즘 등)</p>
          </li>
        </ol>

        <p className="mt-4 text-sm text-ink-3">
          ※ 회원은 위 두 항목 중 일부에만 동의하거나, 둘 다 거부할 수 있습니다.
        </p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제2조 (수집·이용 목적)</h2>
        <p>회사는 동의한 회원의 개인정보를 다음 목적으로 활용합니다.</p>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">① 신규 서비스 및 이벤트 안내</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>강쥐엄마 신규 기능 및 업데이트 안내</li>
          <li>회사 또는 제휴사 이벤트, 프로모션, 경품 행사 안내</li>
          <li>펫페어, 강아지 강연, 지역 행사 사전 안내</li>
          <li>회원 등급별 특별 혜택 안내</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">② 맞춤형 정보 및 광고 제공</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>반려동물 정보(견종, 나이, 건강 상태 등)에 맞춘 콘텐츠 추천</li>
          <li>거주 지역 기반 동네 업체, 행사 추천</li>
          <li>이용 패턴 분석 기반 맞춤형 추천 (관심 카테고리, 인기 콘텐츠 등)</li>
          <li>구매·검색 이력 기반 맞춤 광고</li>
          <li>회원의 관심사에 부합하는 제휴 광고 노출</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">③ 쿠폰·할인·혜택 제공</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>전용 할인 쿠폰 발행 및 안내</li>
          <li>Paw 포인트 보너스 적립 이벤트</li>
          <li>무료 체험단·시제품 증정 이벤트 참여 안내</li>
          <li>회원 생일, 가입 기념일 등 특별 혜택 안내</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">④ 통계 분석 및 마케팅 자료 활용</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>인구통계 분석 (연령, 지역, 견종 등)</li>
          <li>서비스 이용 행태 분석을 통한 마케팅 전략 수립</li>
          <li>광고·홍보 효과 측정 및 최적화</li>
          <li>회원의 게시물·후기 등을 회사 홍보 자료로 활용 (개인정보 보호 처리 후)</li>
          <li>회사의 SNS, 블로그, 광고 캠페인에 활용</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">⑤ 회원 리서치 및 의견 수렴</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>설문조사 및 만족도 조사 참여 요청</li>
          <li>사용자 인터뷰, 베타 테스트 참여 안내</li>
          <li>서비스 개선을 위한 의견 수렴</li>
        </ul>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">⑥ 제휴사·파트너 협업 마케팅</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>제휴 동물병원, 펫샵, 펫호텔 등의 광고 노출</li>
          <li>제휴사와 공동 이벤트 진행 시 안내</li>
          <li>전문가(수의사, 트레이너 등) 콘텐츠 협업</li>
        </ul>

        <p className="mt-4 text-sm text-ink-3">
          ※ 회사는 마케팅 활용 시에도 회원의 개인정보 보호를 최우선으로 하며, 외부 제휴사에 회원 식별 정보(이름, 전화번호 등)를 직접 제공하지 않습니다. 회사 내부에서 분석·가공한 통계 정보만 활용됩니다.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제3조 (수집·활용 항목)</h2>
        <p>마케팅 활용에 동의한 경우, 회사는 다음 정보를 활용합니다.</p>

        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>회원 기본 정보: 닉네임, 이메일, 휴대전화번호</li>
          <li>반려동물 정보: 견종, 성별, 나이, 건강 상태</li>
          <li>거주 지역: 시·도, 시·군·구</li>
          <li>서비스 이용 정보: 게시물, 검색어, 좋아요, 댓글 등 활동 내역</li>
          <li>구매·결제 정보: 구매 상품, 결제 내역, 쿠폰 사용 내역</li>
          <li>광고 노출·클릭 정보: 광고 반응, 관심 카테고리</li>
          <li>접속·기기 정보: 접속 시간, 기기 OS, 위치(동의 시)</li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제4조 (마케팅 정보 발송 채널)</h2>
        <p>회사는 다음 채널을 통해 마케팅 정보를 발송합니다.</p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border border-line text-sm md:text-base">
            <thead className="bg-surface-subtle">
              <tr>
                <th className="border border-line p-3 text-left">발송 채널</th>
                <th className="border border-line p-3 text-left">발송 형태</th>
                <th className="border border-line p-3 text-left">예시</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-line p-3 font-bold">앱 푸시 알림</td><td className="border border-line p-3">즉시</td><td className="border border-line p-3">이벤트, 쿠폰, 추천 콘텐츠</td></tr>
              <tr><td className="border border-line p-3 font-bold">이메일</td><td className="border border-line p-3">주 1~2회</td><td className="border border-line p-3">뉴스레터, 신규 콘텐츠</td></tr>
              <tr><td className="border border-line p-3 font-bold">SMS / LMS / MMS</td><td className="border border-line p-3">월 1~2회</td><td className="border border-line p-3">특별 혜택, 긴급 안내</td></tr>
              <tr><td className="border border-line p-3 font-bold">카카오 알림톡</td><td className="border border-line p-3">필요 시</td><td className="border border-line p-3">맞춤 안내, 이벤트 참여</td></tr>
              <tr><td className="border border-line p-3 font-bold">앱 내 배너·팝업</td><td className="border border-line p-3">상시</td><td className="border border-line p-3">진행 중인 이벤트, 추천</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-ink-3">
          ※ 야간(오후 9시 ~ 익일 오전 8시)에는 광고성 정보를 발송하지 않습니다. 단, 동의 시 야간 발송이 가능합니다.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제5조 (보유 및 이용 기간)</h2>
        <p>회사는 마케팅 정보 수신 동의 철회 시 또는 회원 탈퇴 시까지 회원 정보를 마케팅 목적으로 활용합니다.</p>
        <p className="mt-3">단, 동의 철회·탈퇴 후에도 회사가 발송한 마케팅 캠페인 이력(통계용)은 익명 처리되어 보관될 수 있습니다.</p>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제6조 (동의 철회)</h2>
        <p>회원은 언제든지 마케팅 정보 수신 동의를 철회할 수 있습니다.</p>

        <h3 className="text-lg font-bold text-ink-1 mt-6 mb-3">철회 방법</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>앱 내:</strong> [My] → [설정] → [알림 설정] → [마케팅 정보 수신] 토글 해제</li>
          <li><strong>이메일:</strong> 수신한 이메일 하단의 [수신 거부] 링크 클릭</li>
          <li><strong>SMS:</strong> 수신한 메시지 회신 또는 안내된 거부 번호로 회신</li>
          <li><strong>고객센터:</strong> <a href="mailto:cs@gangjiumma.kr" className="text-brand hover:underline">cs@gangjiumma.kr</a>로 요청</li>
        </ul>

        <p className="mt-4">철회 처리는 즉시 이루어지며, 처리 후 7일 이내에는 발송 일정상 이미 예약된 일부 메시지가 발송될 수 있습니다.</p>

        <p className="mt-4 text-sm text-ink-3">
          ※ 마케팅 정보 수신을 거부하더라도 서비스 이용에 필수적인 정보(공지사항, 약관 변경, 결제 안내 등)는 계속 수신됩니다.
        </p>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제7조 (동의 거부 권리 및 불이익)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회원은 마케팅 정보 수신 동의를 거부할 권리가 있습니다.</li>
          <li>동의를 거부하더라도 강쥐엄마의 기본 서비스(커뮤니티, AI 상담, 업체 정보 등) 이용에는 제한이 없습니다.</li>
          <li>다만, 다음과 같은 제한이 있을 수 있습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>회원 전용 쿠폰·이벤트 안내를 받지 못함</li>
              <li>맞춤형 콘텐츠 추천의 정밀도가 낮아짐</li>
              <li>신규 서비스·기능 소식을 빠르게 받지 못함</li>
              <li>일부 회원 특별 혜택에서 제외될 수 있음</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제8조 (맞춤형 광고 및 자동 의사결정)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 AI 알고리즘을 활용하여 회원에게 맞춤형 광고 및 추천을 제공합니다.</li>
          <li>맞춤형 광고에 사용되는 정보:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>반려동물 정보 (견종, 나이, 건강 상태)</li>
              <li>거주 지역</li>
              <li>서비스 이용 패턴 (관심 카테고리, 검색어)</li>
              <li>구매·결제 이력</li>
              <li>광고 노출·클릭 반응</li>
            </ul>
          </li>
          <li>회원은 [설정] → [개인화 광고 설정] 메뉴에서 맞춤형 광고를 거부할 수 있습니다.</li>
          <li>거부 시에도 비개인화된 일반 광고는 노출될 수 있습니다.</li>
        </ol>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제9조 (제휴사·파트너 광고)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 서비스 내에 제휴사(사장님 회원, 외부 파트너, 쿠팡 파트너스 등)의 광고를 게재할 수 있습니다.</li>
          <li>제휴 광고에 대한 회원의 클릭·구매 행위는 회사가 직접 추적하며, 통계 분석 및 광고 효과 측정에 활용됩니다.</li>
          <li>제휴사에는 개인 식별 정보가 제공되지 않으며, 통계적 데이터(연령대, 지역, 관심사 등 익명화 처리)만 제공됩니다.</li>
          <li>회원이 제휴 광고를 통해 외부로 이동한 경우, 해당 외부 사이트의 개인정보 처리방침이 적용됩니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">부칙</h2>
        <p>본 동의서는 2026년 5월 12일부터 시행됩니다.</p>
        <p className="mt-3">본 동의서 내용은 회사의 사업 변경에 따라 수정될 수 있으며, 변경 시 회원에게 사전 공지합니다.</p>

        <div className="my-6 p-5 bg-surface-subtle rounded-2xl">
          <p className="text-sm text-ink-3">
            마케팅 정보 수신 동의는 회원 가입 시 또는 앱 내 [설정] → [알림 설정]에서 별도로 동의할 수 있습니다. 본 페이지는 동의 시 적용되는 사항을 안내하기 위한 페이지입니다.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
