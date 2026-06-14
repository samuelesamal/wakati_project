export default function WhatsAppFloat() {
  return (
    <div className="get-template hstack gap-2">
      <a
        href="https://wa.me/256703883879"
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        {/* @ts-ignore */}
        <iconify-icon icon="mdi:whatsapp" className="whatsapp-float-icon" />
      </a>
    </div>
  );
}
