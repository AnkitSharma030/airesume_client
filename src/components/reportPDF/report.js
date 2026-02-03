import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function pdfDownload(resumeData) {
  const html = `
  <div style="
    font-family: Arial, Helvetica, sans-serif;
    padding:32px;
    color:#0f172a;
    background:#ffffff;
  ">

    <h1 style="
      text-align:center;
      font-size:28px;
      margin-bottom:32px;
    ">
      📊 Resume Report
    </h1>

    <!-- MATCH INFO -->
    <div style="display:flex; gap:20px; margin-bottom:32px;">
      ${statCard("Match Level", resumeData.match?.match_level || "N/A", "#2563eb", "#e0f2fe")}
      ${statCard(
        "Confidence Score",
        `${(resumeData.match?.confidence_score || 0) * 10}/10`,
        "#16a34a",
        "#dcfce7"
      )}
    </div>

    ${sectionWithChecks("💪 Strengths", resumeData.strengths)}
    ${sectionWithArrows("📈 Improvement Areas", resumeData.improvement_areas)}
    ${sectionWithArrows("🔧 Technical Gaps", resumeData.technical_gaps)}
    ${sectionWithArrows("🎤 Interview Preparation", resumeData.interview_preparation)}
    ${sectionWithArrows("🚀 Project Recommendations", resumeData.project_recommendations)}

    ${simpleBlock("⏱️ Timeline", resumeData.timeline)}
    ${simpleBlock("📝 Overall Assessment", resumeData.assessment)}

  </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = html;
  container.style.width = "800px";
  document.body.appendChild(container);

  html2canvas(container, { scale: 2 }).then((canvas) => {
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const pageHeightPx = (canvas.width * pageHeight) / pageWidth;

    let renderedHeight = 0;
    let pageIndex = 0;

    while (renderedHeight < canvas.height) {
      const pageCanvas = document.createElement("canvas");
      const ctx = pageCanvas.getContext("2d");

      pageCanvas.width = canvas.width;
      pageCanvas.height = Math.min(
        pageHeightPx,
        canvas.height - renderedHeight
      );

      ctx.drawImage(
        canvas,
        0,
        renderedHeight,
        canvas.width,
        pageCanvas.height,
        0,
        0,
        canvas.width,
        pageCanvas.height
      );

      const imgData = pageCanvas.toDataURL("image/png");

      if (pageIndex > 0) pdf.addPage();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        (pageCanvas.height * imgWidth) / canvas.width
      );

      renderedHeight += pageHeightPx;
      pageIndex++;
    }

    pdf.save("Resume_Report.pdf");
    document.body.removeChild(container);
  });

  // ---------- HELPERS ----------

  function statCard(title, value, color, bg) {
    return `
      <div style="
        flex:1;
        background:${bg};
        padding:20px;
        border-radius:16px;
      ">
        <p style="margin:0; font-size:14px; color:#475569;">
          ${title}
        </p>
        <h2 style="margin-top:6px; color:${color}; font-size:24px;">
          ${value}
        </h2>
      </div>
    `;
  }

  function sectionWithChecks(title, items = []) {
    if (!items?.length) return "";
    return `
      <div style="margin-bottom:32px;">
        <h2 style="font-size:20px; margin-bottom:16px;">
          ${title}
        </h2>
        ${items
          .map(
            (i) => `
          <div style="
            display:flex;
            align-items:flex-start;
            gap:10px;
            margin-bottom:10px;
          ">
            <span style="color:#22c55e; font-size:18px;">✔</span>
            <p style="margin:0; line-height:1.6;">${i}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function sectionWithArrows(title, items = []) {
    if (!items?.length) return "";
    return `
      <div style="margin-bottom:32px;">
        <h2 style="font-size:20px; margin-bottom:16px;">
          ${title}
        </h2>
        ${items
          .map(
            (i) => `
          <div style="
            display:flex;
            align-items:flex-start;
            gap:10px;
            margin-bottom:10px;
          ">
            <span style="color:#2563eb; font-size:18px;">➜</span>
            <p style="margin:0; line-height:1.6;">${i}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function simpleBlock(title, content) {
    if (!content) return "";
    return `
      <div style="
        margin-bottom:32px;
        padding:20px;
        background:#f8fafc;
        border-radius:16px;
      ">
        <h2 style="font-size:20px; margin-bottom:12px;">
          ${title}
        </h2>
        <p style="margin:0; line-height:1.7;">
          ${content}
        </p>
      </div>
    `;
  }
}
