import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "이용약관",
  description: "강쥐엄마 서비스 이용약관. 이용자와 회사 간의 권리·의무를 규정합니다.",
};

const sections = [
  { id: "section-1", title: "1. 목적" },
  { id: "section-2", title: "2. 용어의 정의" },
  { id: "section-3", title: "3. 약관의 효력 및 변경" },
  { id: "section-4", title: "4. 회원가입" },
  { id: "section-5", title: "5. 회원 탈퇴 및 자격 상실" },
  { id: "section-6", title: "6. 서비스 제공" },
  { id: "section-7", title: "7. 서비스 변경 및 중단" },
  { id: "section-8", title: "8. 이용자의 의무" },
  { id: "section-9", title: "9. 금지 행위" },
  { id: "section-10", title: "10. 게시물 권리 및 관리" },
  { id: "section-11", title: "11. 회사의 권리" },
  { id: "section-12", title: "12. AI 서비스 면책" },
  { id: "section-13", title: "13. 사장님(사업자) 회원" },
  { id: "section-14", title: "14. 유료 서비스 및 결제" },
  { id: "section-15", title: "15. 환불 정책" },
  { id: "section-16", title: "16. Paw 포인트" },
  { id: "section-17", title: "17. 광고 및 제휴" },
  { id: "section-18", title: "18. 책임 제한" },
  { id: "section-19", title: "19. 손해배상" },
  { id: "section-20", title: "20. 분쟁 해결 및 관할" },
  { id: "section-21", title: "21. 준거법" },
  { id: "section-22", title: "22. 기타" },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="이용약관"
      subtitle="강쥐엄마 서비스 이용에 관한 규정입니다."
      effectiveDate="2026년 5월 12일"
      sections={sections}
    >
      <section className="mb-12">
        <p className="text-base md:text-lg">
          본 약관은 (주)비타니마(이하 &quot;회사&quot;)가 운영하는 반려견 커뮤니티 서비스 &quot;강쥐엄마&quot;(이하 &quot;서비스&quot;)의 이용 조건 및 절차, 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section id="section-1" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제1조 (목적)</h2>
        <p>본 약관은 회사가 제공하는 반려견 커뮤니티, AI 건강 상담, 업체 정보, 건강템 추천, 산책 기록, Paw 포인트 등 강쥐엄마 서비스 일체의 이용 조건 및 절차, 회사와 회원 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제2조 (용어의 정의)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>&quot;서비스&quot;</strong>란 회사가 제공하는 강쥐엄마 모바일 앱, 웹사이트(gangjiumma.kr) 및 관련 일체의 서비스를 말합니다.</li>
          <li><strong>&quot;이용자&quot;</strong>란 본 약관에 동의하고 서비스를 이용하는 모든 회원을 말합니다.</li>
          <li><strong>&quot;일반 회원&quot;</strong>이란 개인 자격으로 가입한 회원을 말합니다.</li>
          <li><strong>&quot;사장님 회원&quot;</strong>이란 사업자 자격으로 가입하여 광고·홍보 등 사업 활동을 하는 회원을 말합니다.</li>
          <li><strong>&quot;게시물&quot;</strong>이란 이용자가 서비스에 게시한 글, 사진, 영상, 댓글, 채팅 등 모든 형태의 정보를 말합니다.</li>
          <li><strong>&quot;Paw 포인트&quot;</strong>란 회사가 정한 정책에 따라 이용자가 서비스 내 활동으로 적립하거나 사용할 수 있는 가상의 포인트를 말합니다.</li>
          <li><strong>&quot;AI 서비스(강GPT)&quot;</strong>란 인공지능 기반의 반려동물 정보 제공 및 상담 서비스를 말합니다.</li>
        </ol>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제3조 (약관의 효력 및 변경)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>본 약관은 서비스 화면에 게시하거나 이용자에게 공지함으로써 효력이 발생합니다.</li>
          <li>회사는 「약관의 규제에 관한 법률」, 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li>
          <li>약관을 변경할 경우 회사는 변경 사항을 시행일자 7일 전부터 앱 내 공지사항을 통해 공지합니다. 다만, 이용자에게 불리한 변경의 경우 30일 전부터 공지합니다.</li>
          <li>이용자가 변경된 약관에 명시적으로 거부 의사를 표시하지 않고 서비스를 계속 이용한 경우 변경된 약관에 동의한 것으로 간주합니다.</li>
          <li>이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
        </ol>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제4조 (회원가입)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>이용자는 회사가 정한 절차에 따라 본 약관 및 개인정보 처리방침에 동의하고 회원가입을 신청합니다.</li>
          <li>회원가입은 만 14세 이상부터 가능합니다.</li>
          <li>회사는 다음 각 호에 해당하는 경우 회원가입을 거부하거나 사후 자격을 상실시킬 수 있습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>타인의 정보를 도용하거나 허위 정보로 가입한 경우</li>
              <li>관련 법령에 위반되는 경우</li>
              <li>이전 약관 위반으로 탈퇴된 이력이 있는 경우</li>
              <li>회사가 합리적인 판단에 의해 필요하다고 인정하는 경우</li>
            </ul>
          </li>
          <li>회원은 가입 시 등록한 정보에 변경이 있는 경우 즉시 수정해야 하며, 미수정으로 인한 불이익은 회원이 부담합니다.</li>
        </ol>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제5조 (회원 탈퇴 및 자격 상실)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회원은 언제든지 서비스 내 [설정] → [회원 탈퇴] 메뉴를 통해 탈퇴를 요청할 수 있습니다.</li>
          <li>탈퇴 시 다음 사항이 처리됩니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>개인정보는 즉시 파기됩니다. (관련 법령에 의해 보존이 필요한 경우 해당 기간 보관)</li>
              <li>탈퇴 시점에 보유한 Paw 포인트는 모두 소멸됩니다.</li>
              <li>탈퇴 후에는 보유한 쿠폰, 혜택, 진행 중인 구독을 사용할 수 없으며, 환불되지 않습니다.</li>
              <li>이미 작성한 게시물·댓글은 익명 처리되거나 회원 요청에 의해 삭제됩니다. 단, 다른 이용자와의 상호작용(댓글, 답글 등)이 있는 게시물은 즉시 삭제되지 않을 수 있습니다.</li>
            </ul>
          </li>
          <li>회사는 회원이 본 약관 또는 관련 법령을 위반한 경우, 사전 통보 후 서비스 이용을 제한하거나 계정을 삭제할 수 있습니다.</li>
          <li>회사는 다음 각 호에 해당하는 경우 사전 통보 없이 즉시 자격을 상실시킬 수 있습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>관련 법령 위반(명예훼손, 사기, 불법 행위 등)</li>
              <li>긴급한 서비스 보안 위협</li>
              <li>다른 이용자에게 명백한 피해를 주는 행위</li>
              <li>Paw 어뷰징, 부정 거래 행위</li>
            </ul>
          </li>
          <li>회사에 의해 자격이 상실된 경우, 해당 회원의 Paw 포인트, 쿠폰, 진행 중인 구독은 모두 소멸되며 환불되지 않습니다.</li>
        </ol>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제6조 (서비스 제공)</h2>
        <p>회사는 다음과 같은 서비스를 제공합니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>반려견 커뮤니티(강쥐talk) 서비스</li>
          <li>AI 기반 건강 상담 서비스(강GPT)</li>
          <li>반려동물 업체·병원 정보 제공 및 후기 서비스</li>
          <li>건강템 추천 및 자사몰 상품 정보 서비스</li>
          <li>산책 기록 및 일정 관리 서비스</li>
          <li>Paw 포인트 적립·사용·현금화 서비스</li>
          <li>사장님(사업자) 광고·홍보 플랫폼 서비스</li>
          <li>쿠폰 발급 및 사용 서비스</li>
          <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
        </ul>
        <p className="mt-4 text-sm text-ink-3">
          ※ AI 서비스의 응답 및 콘텐츠는 참고용이며, 의학적 진단이나 처방을 대체할 수 없습니다. 자세한 내용은 제12조를 참고하시기 바랍니다.
        </p>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제7조 (서비스 변경 및 중단)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 운영상 또는 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경할 수 있으며, 변경 내용을 공지합니다.</li>
          <li>회사는 다음 각 호에 해당하는 경우 서비스 제공을 일시 중단할 수 있습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>시스템 정기점검, 서버 증설 및 교체</li>
              <li>네트워크 불안정, 정전, 설비 장애</li>
              <li>서비스 이용 폭주로 정상적인 제공이 불가능한 경우</li>
              <li>천재지변, 전쟁, 국가비상사태 등 불가항력적 사유</li>
              <li>회사 분할·합병·영업 양도 등 경영상 필요</li>
            </ul>
          </li>
          <li>회사는 서비스의 전부 또는 일부를 영구히 중단할 경우 최소 30일 전에 공지하며, 유료 서비스의 경우 잔여 기간에 해당하는 금액을 환불합니다.</li>
          <li>회사의 책임 없는 사유로 서비스가 중단된 경우 회사는 손해배상의 책임을 지지 않습니다.</li>
        </ol>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제8조 (이용자의 의무)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>이용자는 본 약관, 관련 법령, 회사의 공지사항 및 운영 정책을 준수해야 합니다.</li>
          <li>이용자는 자신의 계정 및 비밀번호를 안전하게 관리할 책임이 있으며, 이를 제3자에게 양도·대여할 수 없습니다.</li>
          <li>계정 정보 유출로 인한 손해는 이용자 본인의 책임이며, 회사는 책임을 지지 않습니다.</li>
          <li>이용자는 서비스 이용 중 알게 된 다른 이용자의 정보를 본인 동의 없이 외부에 공개·제공할 수 없습니다.</li>
        </ol>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제9조 (금지 행위)</h2>
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>타인의 정보 도용 및 허위 정보 등록</li>
          <li>욕설, 비방, 혐오 표현, 차별, 협박, 성희롱 등 타인에게 불쾌감을 주는 표현</li>
          <li>음란물, 폭력, 잔혹한 콘텐츠 게시</li>
          <li>광고, 스팸, 홍보성 게시물 무단 게시 (사장님 회원의 정당한 광고 제외)</li>
          <li>저작권, 초상권, 상표권 등 타인의 지적재산권 침해</li>
          <li>회사 또는 제3자의 명예를 훼손하거나 업무를 방해하는 행위</li>
          <li>서비스의 정상적인 운영을 방해하는 행위 (해킹, 자동화 도구, 크롤링 등)</li>
          <li>다른 이용자의 개인정보를 무단으로 수집·저장·공개하는 행위</li>
          <li>Paw 포인트 또는 쿠폰의 부정 적립·사용·거래 (다중 계정, 어뷰징, 매매 등)</li>
          <li>허위 후기 작성, 경쟁 업체 비방, 조직적 평점 조작</li>
          <li>회사의 동의 없이 서비스를 이용한 영업·홍보·정치적 활동</li>
          <li>관련 법령(개인정보보호법, 정보통신망법, 저작권법 등)에 위반되는 행위</li>
          <li>본 약관 및 회사 운영 정책에 위반되는 일체의 행위</li>
        </ul>
        <p className="mt-4">위 행위 적발 시 회사는 사전 통보 없이 게시물 삭제, 이용 정지, 계정 영구 정지, 손해배상 청구, 수사기관 고발 등의 조치를 취할 수 있습니다.</p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제10조 (게시물의 권리 및 관리)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>이용자가 서비스에 게시한 게시물의 저작권은 해당 이용자에게 있습니다.</li>
          <li>이용자는 게시물 등록 시, 회사에 대해 다음 권한을 무상으로 부여합니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>서비스 내 게시·노출·전송·배포할 권리</li>
              <li>마케팅, 홍보, 통계 분석을 위해 활용할 권리</li>
              <li>일부 수정·편집(편집상의 변경, 단순 인용 등)할 권리</li>
              <li>다른 미디어, SNS, 광고 등을 통해 서비스 홍보 목적으로 활용할 권리</li>
              <li>AI 모델 학습 자료로 활용할 권리 (개인 식별 정보 제외, 통계적 활용 한정)</li>
            </ul>
          </li>
          <li>위 권한은 이용자가 회원 탈퇴 후에도 회사가 보유 중인 게시물에 한해 유지됩니다.</li>
          <li>회사는 게시물이 다음 각 호에 해당하는 경우 사전 통보 없이 삭제하거나 비공개 처리할 수 있습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>본 약관 또는 관련 법령에 위반되는 게시물</li>
              <li>타인의 권리(저작권, 명예권, 사생활 등)를 침해하는 게시물</li>
              <li>음란·폭력·혐오·차별·스팸성 게시물</li>
              <li>회사의 운영 정책에 위반되는 게시물</li>
              <li>제3자로부터 신고 또는 권리 침해 주장이 제기된 게시물</li>
              <li>장기간 활동이 없는 회원의 게시물 (1년 이상)</li>
            </ul>
          </li>
          <li>게시물 삭제로 인한 손해는 회사가 고의 또는 중대한 과실이 있는 경우를 제외하고 책임지지 않습니다.</li>
        </ol>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제11조 (회사의 권리)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 다음 사항에 대한 권리를 보유합니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>서비스의 구성, 기능, 디자인, 내용을 자유롭게 변경할 권리</li>
              <li>광고를 게재하고 광고 수익을 운영비로 사용할 권리</li>
              <li>이용자의 게시물, 사용 패턴, 통계 등을 익명화하여 서비스 개선 및 사업적 목적으로 활용할 권리</li>
              <li>이용자가 위반 행위를 한 경우 게시물 삭제, 계정 정지·삭제, 손해배상 청구할 권리</li>
              <li>다른 서비스, 제휴사, 광고주에게 서비스 운영 데이터(개인 식별 정보 제외)를 제공할 권리</li>
            </ul>
          </li>
          <li>회사의 모든 서비스에 포함된 텍스트, 이미지, 디자인, 로고, 상표는 회사 또는 정당한 권리자에게 귀속됩니다. 이용자는 회사의 사전 서면 동의 없이 이를 복제·배포·전송·전시·판매할 수 없습니다.</li>
        </ol>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제12조 (AI 서비스에 대한 면책)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>AI 서비스(강GPT)는 반려동물에 대한 일반적인 정보 제공 및 참고용 상담을 목적으로 합니다.</li>
          <li>AI 서비스는 다음을 보장하지 않으며 책임지지 않습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>응답 내용의 정확성, 완전성, 적시성</li>
              <li>의학적 진단, 처방, 치료의 정확성</li>
              <li>AI가 추천한 업체·상품의 품질, 안전성, 적합성</li>
              <li>AI 응답을 통한 의사 결정의 결과</li>
            </ul>
          </li>
          <li><strong>이용자는 다음을 명확히 인지하고 사용해야 합니다.</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>AI는 수의사 진단을 대체할 수 없습니다.</li>
              <li>응급 상황 또는 의심 증상이 있을 경우 반드시 동물병원에 방문하시기 바랍니다.</li>
              <li>AI 응답에 따른 모든 행동의 결과는 이용자 본인의 책임입니다.</li>
              <li>AI는 학습 데이터의 한계로 인해 부정확하거나 편향된 정보를 제공할 수 있습니다.</li>
            </ul>
          </li>
          <li>회사는 AI 서비스 이용으로 인해 발생한 직접적·간접적 손해에 대해 책임을 지지 않습니다. (반려동물의 건강 악화, 치료 지연, 재산상 손실 등 일체)</li>
          <li>이용자는 AI 대화 내용이 서비스 개선 및 학습 목적으로 활용될 수 있음에 동의합니다. (개인 식별 정보는 제거됩니다.)</li>
        </ol>
      </section>

      <section id="section-13" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제13조 (사장님 회원의 특별 조항)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>사장님 회원은 본인이 등록한 사업자 정보, 매장 정보, 광고 콘텐츠가 사실에 기반하며 관련 법령을 위반하지 않음을 보증합니다.</li>
          <li>사장님 회원은 다음 의무를 부담합니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>표시·광고의 공정화에 관한 법률 등 관련 법령 준수</li>
              <li>이용자에게 약속한 서비스/상품의 제공 의무</li>
              <li>이용자 문의에 대한 성실한 응대</li>
              <li>Paw 포인트 또는 쿠폰 사용 시 정당한 절차에 따른 처리</li>
              <li>등록 정보 변경 시 즉시 업데이트</li>
            </ul>
          </li>
          <li>사장님 회원은 다음 행위를 할 수 없습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>허위·과장 광고, 가짜 후기 작성</li>
              <li>다른 사장님에 대한 비방, 비교 광고</li>
              <li>이용자 정보의 무단 활용 (마케팅, 외부 영업 등)</li>
              <li>다중 계정으로 광고 한도를 회피하는 행위</li>
              <li>회사의 사전 동의 없이 강쥐엄마 브랜드/로고를 사용하는 행위</li>
            </ul>
          </li>
          <li>사장님 회원과 일반 회원 간의 거래에서 발생한 분쟁에 대해 회사는 중재·조정의 의무가 없으며, 이용자가 직접 해결해야 합니다. 단, 회사는 공정한 서비스 운영을 위해 자료 제공 등의 협조를 할 수 있습니다.</li>
          <li>사장님 회원의 위반 행위가 발생할 경우, 회사는 광고 게시 중단, 구독 해지(환불 없음), 계정 정지, 손해배상 청구 등의 조치를 취할 수 있습니다.</li>
        </ol>
      </section>

      <section id="section-14" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제14조 (유료 서비스 및 결제)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 유료 서비스(사장님 구독, Paw 추가 사용 등)를 제공할 수 있으며, 가격 및 정책은 서비스 화면에 명시합니다.</li>
          <li>유료 서비스 결제는 회사가 지정한 결제 수단(신용카드, 체크카드, 자동결제 등)을 통해 이루어집니다.</li>
          <li>회사는 결제 정보를 직접 보관하지 않으며, 결제 대행사(토스페이먼츠 등)를 통해 안전하게 처리됩니다.</li>
          <li>자동결제(구독) 시 회사는 결제 24시간 전 이용자에게 사전 안내할 수 있습니다.</li>
          <li>이용자는 언제든지 [구독 관리] 메뉴에서 자동결제를 해지할 수 있습니다.</li>
          <li>가격 변경 시 회사는 시행 30일 전에 공지하며, 기존 구독자에게는 차회 결제부터 적용됩니다.</li>
        </ol>
      </section>

      <section id="section-15" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제15조 (환불 정책)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>유료 서비스 결제 후 7일 이내, 서비스를 전혀 이용하지 않은 경우 전액 환불됩니다.</li>
          <li>서비스를 1회라도 이용한 경우(콘텐츠 열람, 광고 게시 등) 환불되지 않습니다.</li>
          <li>월 구독의 경우, 구독 해지 시 잔여 기간은 사용 가능하나, 일할 계산하여 환불되지 않습니다.</li>
          <li>회사의 책임 있는 사유로 서비스가 중단된 경우, 사용하지 못한 기간에 대해 비례 환불합니다.</li>
          <li>이용자의 약관 위반으로 자격이 상실된 경우 환불되지 않습니다.</li>
          <li>Paw 포인트, 쿠폰, 무료 혜택은 환불 대상이 아닙니다.</li>
          <li>환불은 결제 수단을 통해 처리되며, 결제 수단의 정책에 따라 처리 기간이 소요될 수 있습니다 (영업일 기준 3~7일).</li>
        </ol>
      </section>

      <section id="section-16" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제16조 (Paw 포인트)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Paw 포인트는 회사가 정한 정책에 따라 적립·차감되는 가상 포인트입니다.</li>
          <li>Paw 포인트는 회사 내 서비스에서만 사용 가능하며, 현금 또는 다른 재산권으로 직접 교환되지 않습니다. 단, 회사가 정한 정책 하에 사장님 회원이 일정 수량을 현금화할 수 있습니다.</li>
          <li>Paw 포인트는 회원 탈퇴, 계정 정지, 1년간 미사용 시 소멸됩니다.</li>
          <li>Paw 포인트의 적립·차감 정책은 회사가 자율적으로 조정할 수 있으며, 변경 시 공지합니다.</li>
          <li>다음 행위가 적발될 경우 적립된 Paw 포인트는 즉시 소멸되며, 손해배상 청구 대상이 됩니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>다중 계정을 이용한 어뷰징</li>
              <li>자동화 도구 사용</li>
              <li>허위 활동, 부정 거래</li>
              <li>매매·양도 등 부적절한 거래</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="section-17" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제17조 (광고 및 제휴)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 서비스 운영을 위해 광고를 게재할 수 있으며, 이용자는 서비스 이용 시 광고에 노출됨에 동의합니다.</li>
          <li>이용자가 서비스에 게시된 사장님 광고, 제휴 상품, 쿠팡 파트너스 링크 등을 통해 외부 사이트로 이동하거나 거래하는 경우, 해당 거래는 이용자와 광고주·판매자 간의 직접 거래입니다.</li>
          <li>회사는 외부 거래에 대해 관여하지 않으며 책임지지 않습니다. (상품 품질, 배송, 환불, A/S 등 일체)</li>
          <li>회사는 광고·제휴를 통해 수수료를 수취할 수 있으며, 이는 서비스 운영비로 사용됩니다.</li>
          <li>회사는 제휴를 통해 제공된 정보의 정확성을 보증하지 않습니다.</li>
        </ol>
      </section>

      <section id="section-18" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제18조 (책임 제한)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사는 다음 사유로 인한 서비스 장애·중단·손해에 대해 책임을 지지 않습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>천재지변, 전쟁, 폭동, 테러 등 불가항력</li>
              <li>해킹, DDoS 공격, 통신 장애 등 회사의 통제를 벗어난 사유</li>
              <li>이용자의 귀책사유 (단말기 분실, 비밀번호 누설, 부적절한 사용 등)</li>
              <li>위탁사(Supabase, Vercel, Anthropic, 토스 등)의 장애</li>
              <li>이용자 간 또는 이용자와 제3자 간의 분쟁</li>
            </ul>
          </li>
          <li>회사는 다음 사항에 대해 보증하거나 책임지지 않습니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>이용자가 게시한 정보의 정확성, 신뢰성</li>
              <li>다른 이용자(사장님 포함)의 행위 또는 서비스</li>
              <li>AI 서비스의 응답 결과</li>
              <li>이용자가 서비스를 통해 알게 된 정보의 활용 결과</li>
              <li>이용자가 서비스 이용으로 기대한 이익 또는 결과의 미달성</li>
            </ul>
          </li>
          <li>회사의 무료 서비스에 대해서는 「전자상거래법」 등 관련 법령상의 별도 면책 규정이 적용되며, 무료 서비스의 중단·오류·정보 손실에 대해 회사는 책임지지 않습니다.</li>
          <li>회사의 책임이 인정되는 경우에도, 회사의 손해배상 책임은 해당 이용자가 회사에 지급한 직전 12개월간의 금액을 초과하지 않습니다.</li>
        </ol>
      </section>

      <section id="section-19" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제19조 (손해배상)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>이용자가 본 약관을 위반하여 회사 또는 제3자에게 손해를 끼친 경우, 해당 이용자는 발생한 모든 손해를 배상할 책임이 있습니다.</li>
          <li>이용자가 위반 행위로 인해 회사가 제3자로부터 손해배상 청구, 소송, 행정 처분 등을 받은 경우, 이용자는 자신의 비용으로 회사를 면책시키고 회사가 부담한 모든 비용(변호사 비용 포함)을 배상해야 합니다.</li>
          <li>회사가 이용자의 위반 행위를 조사하거나 대응하기 위해 발생한 합리적인 비용(인건비, 시스템 비용 등)도 손해배상 범위에 포함됩니다.</li>
        </ol>
      </section>

      <section id="section-20" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제20조 (분쟁 해결 및 관할)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>서비스 이용과 관련한 분쟁은 회사와 이용자가 상호 협의하여 해결합니다.</li>
          <li>이용자는 회사의 고객센터(<a href="mailto:cs@gangjiumma.kr" className="text-brand hover:underline">cs@gangjiumma.kr</a>)에 분쟁 해결을 위한 의견을 제출할 수 있으며, 회사는 합리적인 기간 내에 처리 결과를 통지합니다.</li>
          <li>협의로 해결되지 않을 경우, 「전자문서 및 전자거래기본법」, 「소비자기본법」 등 관련 법령에 따라 처리합니다.</li>
          <li>분쟁 해결을 위한 소송이 제기되는 경우, 회사의 본점 소재지를 관할하는 법원을 전속관할 법원으로 합니다.</li>
        </ol>
      </section>

      <section id="section-21" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제21조 (준거법)</h2>
        <p>본 약관 및 서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁의 해결은 대한민국 법령에 따릅니다.</p>
      </section>

      <section id="section-22" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제22조 (기타)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>본 약관에서 정하지 않은 사항은 관련 법령 및 상관례에 따릅니다.</li>
          <li>본 약관 일부 조항이 무효 또는 집행 불가능하다고 판단되는 경우에도, 나머지 조항은 그대로 유효하게 적용됩니다.</li>
          <li>회사는 필요에 따라 별도의 운영 정책을 제정할 수 있으며, 해당 정책은 본 약관과 동일한 효력을 갖습니다.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">부칙</h2>
        <p>본 약관은 2026년 5월 12일부터 시행됩니다.</p>
        <p className="mt-2 text-sm text-ink-3">이전 버전 약관(시행일: 2026년 3월 19일)은 본 약관 시행과 동시에 폐지됩니다.</p>
      </section>
    </LegalLayout>
  );
}
