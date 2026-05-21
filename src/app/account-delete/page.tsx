import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "계정 삭제 요청 - 강쥐엄마",
  description:
    "강쥐엄마 앱의 계정 삭제 요청 방법 안내. 이메일로 요청 시 영업일 기준 7일 이내 처리됩니다.",
};

const sections = [
  { id: "overview", title: "1. 안내" },
  { id: "in-app", title: "2. 앱 내 삭제 방법" },
  { id: "email", title: "3. 이메일 요청 방법" },
  { id: "what-deleted", title: "4. 삭제되는 정보" },
  { id: "what-kept", title: "5. 보존되는 정보" },
  { id: "processing-time", title: "6. 처리 기간" },
];

export default function AccountDeletePage() {
  return (
    <LegalLayout
      title="계정 삭제 요청"
      subtitle="강쥐엄마 계정 및 관련 데이터 삭제 안내"
      effectiveDate="2026년 5월 22일"
      sections={sections}
    >
      {/* ─────────────────────────── */}
      <section id="overview" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-black text-ink-1 mb-6">
          1. 안내
        </h2>
        <p className="mb-4 leading-relaxed">
          강쥐엄마(이하 &quot;서비스&quot;)는 이용자가 언제든 계정 및 관련 개인정보의
          삭제를 요청할 수 있도록 두 가지 방법을 제공합니다.
        </p>
        <p className="mb-4 leading-relaxed">
          본 페이지의 안내에 따라 계정 삭제를 요청하시면, 본인 확인 후
          이용자의 모든 개인정보와 활동 기록을 삭제해드립니다. (단, 관련 법령에
          따라 일정 기간 보관이 필요한 정보는 제외)
        </p>
      </section>

      {/* ─────────────────────────── */}
      <section id="in-app" className="scroll-mt-24 mt-12">
        <h2 className="text-2xl md:text-3xl font-black text-ink-1 mb-6">
          2. 앱 내에서 직접 삭제하기
        </h2>
        <p className="mb-4 leading-relaxed">
          강쥐엄마 앱을 설치하신 경우, 다음 경로로 직접 계정을 삭제하실 수
          있습니다:
        </p>
        <div className="bg-surface-subtle rounded-2xl p-6 my-6">
          <ol className="list-decimal list-inside space-y-2 text-ink-2">
            <li>강쥐엄마 앱 실행</li>
            <li>하단 메뉴 <strong>MY</strong> 탭 → <strong>내 프로필</strong> 진입</li>
            <li>화면 하단 <strong>계정 탈퇴</strong> 선택</li>
            <li>안내에 따라 본인 확인 후 탈퇴 완료</li>
          </ol>
        </div>
      </section>

      {/* ─────────────────────────── */}
      <section id="email" className="scroll-mt-24 mt-12">
        <h2 className="text-2xl md:text-3xl font-black text-ink-1 mb-6">
          3. 이메일로 요청하기
        </h2>
        <p className="mb-4 leading-relaxed">
          앱이 설치되지 않은 경우 또는 앱 내 절차가 어려운 경우, 이메일로 직접
          요청해주시면 처리해드립니다.
        </p>
        <div className="bg-brand-tint50 border border-brand-tint200 rounded-2xl p-6 md:p-8 my-6">
          <p className="font-bold text-ink-1 mb-3">📧 요청 이메일 주소</p>
          <p className="text-lg md:text-xl mb-6">
            <a
              href="mailto:cs@gangjiumma.kr?subject=[계정 삭제 요청] 강쥐엄마"
              className="text-brand font-bold hover:underline"
            >
              cs@gangjiumma.kr
            </a>
          </p>
          <p className="font-bold text-ink-1 mb-3">📋 이메일에 포함할 정보</p>
          <ul className="list-disc list-inside space-y-1.5 text-ink-2 mb-6">
            <li>가입 시 사용한 이메일 주소 또는 닉네임</li>
            <li>요청 사유 (선택사항)</li>
            <li>본인 확인을 위한 추가 정보 (요청 시)</li>
          </ul>
          <p className="font-bold text-ink-1 mb-3">📝 이메일 양식 예시</p>
          <div className="bg-white rounded-xl p-4 md:p-5 text-sm md:text-base text-ink-2 font-mono leading-relaxed">
            제목: [계정 삭제 요청] 강쥐엄마
            <br />
            <br />
            안녕하세요. 강쥐엄마 계정 삭제를 요청합니다.
            <br />
            <br />
            • 가입 이메일: example@email.com
            <br />
            • 닉네임: 마음이맘
            <br />
            • 요청 사유: (선택)
          </div>
        </div>
      </section>

      {/* ─────────────────────────── */}
      <section id="what-deleted" className="scroll-mt-24 mt-12">
        <h2 className="text-2xl md:text-3xl font-black text-ink-1 mb-6">
          4. 삭제되는 정보
        </h2>
        <p className="mb-4 leading-relaxed">
          계정 삭제 요청을 처리하면 다음과 같은 정보가 영구적으로 삭제됩니다.
        </p>
        <ul className="list-disc list-inside space-y-2 my-6 text-ink-2">
          <li>회원 가입 정보 (이메일, 닉네임, 프로필 사진 등)</li>
          <li>반려견 정보 (이름, 견종, 사진, 건강 정보 등)</li>
          <li>작성한 게시글, 댓글, 좋아요 기록</li>
          <li>AI(강GPT) 대화 기록</li>
          <li>일정, 알림, 산책 기록</li>
          <li>이웃 관계 정보</li>
          <li>로그인 기록, 기기 정보</li>
        </ul>
      </section>

      {/* ─────────────────────────── */}
      <section id="what-kept" className="scroll-mt-24 mt-12">
        <h2 className="text-2xl md:text-3xl font-black text-ink-1 mb-6">
          5. 일정 기간 보존되는 정보
        </h2>
        <p className="mb-4 leading-relaxed">
          관련 법령에 따라 다음 정보는 계정 삭제 후에도 일정 기간 보관 후
          파기됩니다. 이는 회사가 임의로 선택할 수 없는 법적 의무사항입니다.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm md:text-base border border-line rounded-xl overflow-hidden">
            <thead className="bg-surface-subtle">
              <tr>
                <th className="text-left p-3 font-bold text-ink-1">보존 항목</th>
                <th className="text-left p-3 font-bold text-ink-1">보존 기간</th>
                <th className="text-left p-3 font-bold text-ink-1">근거 법령</th>
              </tr>
            </thead>
            <tbody className="text-ink-2">
              <tr className="border-t border-line">
                <td className="p-3">결제 및 거래 기록</td>
                <td className="p-3">5년</td>
                <td className="p-3">전자상거래법</td>
              </tr>
              <tr className="border-t border-line">
                <td className="p-3">소비자 분쟁/불만 처리 기록</td>
                <td className="p-3">3년</td>
                <td className="p-3">전자상거래법</td>
              </tr>
              <tr className="border-t border-line">
                <td className="p-3">접속 로그 (IP 등)</td>
                <td className="p-3">3개월</td>
                <td className="p-3">통신비밀보호법</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-ink-3 leading-relaxed">
          ※ 익명화된 통계 데이터는 개인을 식별할 수 없는 형태로 변환되어 서비스
          개선 목적으로 보관될 수 있습니다.
        </p>
      </section>

      {/* ─────────────────────────── */}
      <section id="processing-time" className="scroll-mt-24 mt-12">
        <h2 className="text-2xl md:text-3xl font-black text-ink-1 mb-6">
          6. 처리 기간
        </h2>
        <p className="mb-4 leading-relaxed">
          이메일로 계정 삭제를 요청하신 경우, 본인 확인 후{" "}
          <strong>영업일 기준 7일 이내</strong>에 처리해드립니다. 처리 완료 시
          요청하신 이메일로 결과를 회신해드립니다.
        </p>
        <p className="mb-4 leading-relaxed">
          앱 내에서 직접 탈퇴하신 경우 즉시 처리됩니다.
        </p>
        <div className="bg-surface-subtle rounded-2xl p-6 my-6">
          <p className="text-ink-2 leading-relaxed">
            <strong className="text-ink-1">⚠️ 주의사항</strong>
            <br />
            계정 삭제 후에는 동일 정보로 재가입이 가능하나, 이전 활동 기록 및
            적립된 Paw 포인트는 복구되지 않습니다.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
