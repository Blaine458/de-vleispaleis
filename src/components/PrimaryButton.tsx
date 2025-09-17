export default function PrimaryButton({ text, color, bgColor, textColor }: { text: string, color: string, bgColor?: string, textColor?: string  }) {
  // Clean the color values by removing square brackets if present
  const cleanColor = color.replace(/[\[\]]/g, '');
  const cleanBgColor = bgColor ? bgColor.replace(/[\[\]]/g, '') : cleanColor;
  const cleanTextColor = textColor ? textColor.replace(/[\[\]]/g, '') : 'white';

  return (
    <button 
      className="border-2 cursor-pointer rounded-full px-6 py-2 z-[9999] transition-colors"
      style={{
        borderColor: cleanColor,
        color: cleanColor,
        '--hover-bg': cleanBgColor
      } as React.CSSProperties & { '--hover-bg': string }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = cleanBgColor;
        e.currentTarget.style.color = cleanTextColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = cleanColor;
      }}
    >
      {text}
    </button>
  );
}