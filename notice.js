/* ========================================================
   NOTICE BANNER CONFIGURATION
   ======================================================== */

const NOTICE_CONFIG = {
  isVisible: true,
  text: "🚀 Now Live: EV Motor Controller, BMS, Charger PCB & Service Care. Drone & Flying Car (eVTOL) repair coming soon!",
  bgColor: "rgba(0, 255, 178, 0.1)",
  textColor: "#00ffb2"
};

document.addEventListener("DOMContentLoaded", () => {
  if (!NOTICE_CONFIG.isVisible) return;

  const noticeHTML = `
    <div id="customNoticeBanner" style="
      background: ${NOTICE_CONFIG.bgColor};
      border-bottom: 1px solid rgba(0, 255, 178, 0.3);
      color: ${NOTICE_CONFIG.textColor};
      text-align: center;
      padding: 12px 20px;
      font-size: 0.9rem;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
      line-height: 1.5;
      position: relative;
      z-index: 99;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    ">
      ${NOTICE_CONFIG.text}
    </div>
  `;

  const header = document.querySelector('header');
  if (header) {
    header.insertAdjacentHTML('afterend', noticeHTML);
  }
});
