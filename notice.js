/* ========================================================
   NOTICE BANNER CONFIGURATION
   Change the text, colors, or visibility of your notice here.
   ======================================================== */

const NOTICE_CONFIG = {
  // Set to true to SHOW the notice, set to false to HIDE it completely
  isVisible: true, 
  
  // The message you want to display to your customers
  text: "📢 Special Notice: Currently, we are only accepting Home Appliance (AC, Fridge, Washing Machine), TV, and Audio Boards. Other services (EV, Drone, Solar) will resume soon.",
  
  // The background color of the notice box
  bgColor: "rgba(0, 255, 178, 0.1)",
  
  // The text color
  textColor: "#00ffb2"
};

document.addEventListener("DOMContentLoaded", () => {
  if (!NOTICE_CONFIG.isVisible) return;

  // Generate the HTML for the notice banner
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

  // Insert the notice immediately after the header
  const header = document.querySelector('header');
  if (header) {
    header.insertAdjacentHTML('afterend', noticeHTML);
  }
});
