import svgPaths from "./svg-vp8c61jfox";
import imgDriversCarIcon from "./4445bd047b8f6085750cd56c5f2c86c327f1746a.png";
import imgPicture from "./fe5475bc41d9c2086cb49e7fcb80cdc6f97a0352.png";
import imgGroup431 from "./22400b303504728883d26b4b1ff4023fab438d9a.png";
import imgBannerBigReserve from "./4e650b79161aa5e1684e266610e0a0bae4ffb923.png";
import imgAiGeneratedMusic from "./2192da4909e0efe2353fa85e1a097c00303950d7.png";

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-center left-0 p-[8px] right-0 top-0" data-name="header">
      <div className="h-[4px] relative shrink-0 w-[55px]" data-name="bar">
        <div className="absolute bg-[#f3f3f3] inset-0 rounded-[100px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Uber_Move:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">
        <p className="leading-[28px]">Pickup in 4 min</p>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-black" data-name="copy">
      <div className="flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center mb-[-3px] relative shrink-0 text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ride details</p>
      </div>
      <div className="flex flex-col font-['Uber_Move:Bold',sans-serif] justify-center relative shrink-0 text-[20px] w-[232px]">
        <p className="leading-[28px]">Meet at your pickup spot on Volta do Duche</p>
      </div>
    </div>
  );
}

function AvatarAndChipContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[4px]" data-name="avatar and chip container">
      <div className="mb-[-14px] overflow-clip relative shrink-0 size-[52px]" data-name="52px avatar">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[44px] top-1/2" data-name="picture">
          <div className="absolute inset-[-4.55%]">
            <img alt="" className="block max-w-none size-full" height="48" src={imgPicture} width="48" />
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_3px_3.3px_rgba(0,0,0,0.25)] flex gap-px items-center justify-center pl-[5px] pr-[3px] relative rounded-[100px] shrink-0" data-name="rating chip">
        <div className="[word-break:break-word] flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
          <p className="leading-[20px]">5.0</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="12px star">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.95px] left-[calc(50%+0.23px)] top-[calc(50%-0.03px)] w-[10.462px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4616 9.94959">
              <path d={svgPaths.p1faf8280} fill="var(--fill-0, black)" id="Star 4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-end justify-center leading-[0] not-italic pt-[4px] relative shrink-0 text-black text-right whitespace-nowrap" data-name="car details">
      <div className="flex flex-col font-['Uber_Move:Bold',sans-serif] justify-center relative shrink-0 text-[20px]">
        <p className="leading-[28px]">99AA999</p>
      </div>
      <div className="flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[20px]">White Tesla Model 3</p>
      </div>
    </div>
  );
}

function AvatarAndCarDetailsContainer() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[6px] relative shrink-0 w-full" data-name="avatar and car details container">
      <div className="h-[62px] relative shrink-0 w-[115.481px]" data-name="driver avatar">
        <div className="absolute h-[61.119px] left-[21px] top-0 w-[94.481px]" data-name="driver's car icon">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[142.73%] left-[-21.56%] max-w-none top-[-30.43%] w-[138.35%]" src={imgDriversCarIcon} />
          </div>
        </div>
        <AvatarAndChipContainer />
      </div>
      <CarDetails />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-px size-[21.5px] top-px">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
        <g id="Group 52">
          <circle cx="11" cy="10.5" fill="var(--fill-0, black)" id="Ellipse 72" r="5" />
          <path d="M11 0V3.5" id="Vector 206" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M11 18V21.5" id="Vector 207" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M18 10.5H21.5" id="Vector 208" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M0 10.5H3.5" id="Vector 209" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M3 2.5L5.47487 4.97487" id="Vector 210" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M19.4751 2.5L17.0002 4.97487" id="Vector 211" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M3 18.4749L5.47487 16" id="Vector 212" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
          <path d="M19.4751 18.4749L17.0002 16" id="Vector 213" stroke="var(--stroke-0, black)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function MessageAndCtasContainer() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0 w-full" data-name="message and ctas container">
      <div className="bg-[#e8e8e8] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="message input field">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[7.5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Uber_Move_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[20px]">Message Rufat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center p-[5.5px] relative rounded-[100px] shrink-0" data-name="call button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="24px phone">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[19.824px] items-center justify-center left-[calc(50%-0.09px)] top-[calc(50%-0.09px)] w-[19.823px]">
            <div className="flex-none rotate-[6.15deg]">
              <div className="h-[18px] relative w-[17.999px]" data-name="phone">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9987 18">
                  <path d={svgPaths.p13f30e00} fill="var(--fill-0, black)" id="phone" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f3] content-stretch flex items-center justify-center p-[5.5px] relative rounded-[100px] shrink-0" data-name="spotlight button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="24px spotlight">
          <Group />
        </div>
      </div>
    </div>
  );
}

function DriversDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[183px] items-center left-0 pb-[16px] pt-[11px] px-[16px] right-0 top-[189px]" data-name="drivers details">
      <div aria-hidden className="absolute border-[#f3f3f3] border-b border-solid border-t inset-0 pointer-events-none" />
      <AvatarAndCarDetailsContainer />
      <div className="[word-break:break-word] flex flex-col font-['Uber_Move_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p>
          <span className="leading-[20px] text-[#427791]">Rufat</span>
          <span className="leading-[20px]">・112,520 trips</span>
        </p>
      </div>
      <MessageAndCtasContainer />
    </div>
  );
}

function CtaContainer() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="cta container">
      <p className="[word-break:break-word] font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Reserve a ride</p>
      <div className="relative shrink-0 size-[20px]" data-name="20px arrow">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-0.25px)] top-1/2 w-[13.5px]" data-name="arrow">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 12">
            <path d={svgPaths.p11764d00} fill="var(--fill-0, white)" id="arrow" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[16px] top-[14px]" data-name="copy">
      <p className="[word-break:break-word] font-['Uber_Move:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-[161px]">Ride on your schedule</p>
      <CtaContainer />
    </div>
  );
}

function CtaContainer1() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="cta container">
      <p className="[word-break:break-word] font-['Uber_Move_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Try Uber Black</p>
      <div className="relative shrink-0 size-[20px]" data-name="20px arrow">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%-0.25px)] top-1/2 w-[13.5px]" data-name="arrow">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 12">
            <path d={svgPaths.p11764d00} fill="var(--fill-0, white)" id="arrow" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Copy2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[16px] top-[14px]" data-name="copy">
      <p className="[word-break:break-word] font-['Uber_Move:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-[161px]">Enjoy a luxury car</p>
      <CtaContainer1 />
    </div>
  );
}

function LargeCardsCarousel() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 pb-[4px] pt-[18px] px-[16px] top-[452px]" data-name="large cards carousel">
      <div className="content-stretch flex flex-col gap-[10px] h-[136px] items-start relative shrink-0 w-[327px]" data-name="banner card/large">
        <div className="h-[136px] relative shrink-0 w-[327px]" data-name="banner/big/luxury">
          <div className="absolute inset-0 rounded-[12px]" data-name="Group 43 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[101.67%] left-[-16.21%] max-w-none top-[-0.1%] w-[116.21%]" src={imgGroup431} />
            </div>
          </div>
        </div>
        <Copy1 />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] h-[136px] items-start relative shrink-0 w-[327px]" data-name="banner card/large">
        <div className="h-[136px] relative shrink-0 w-[327px]" data-name="banner/big/reserve">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerBigReserve} />
        </div>
        <Copy2 />
      </div>
    </div>
  );
}

function RideDetailsSheet() {
  return (
    <div className="absolute bg-white h-[604px] left-0 overflow-clip right-0 rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_0px_7.7px_0px_rgba(46,46,46,0.25)] top-[269px]" data-name="ride details sheet">
      <Header />
      <div className="absolute content-stretch flex items-start justify-between left-[16px] px-[15px] py-[16px] right-[16px] rounded-[8px] top-[65px]" data-name="ride details card">
        <div aria-hidden className="absolute border-2 border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Copy />
        <div className="bg-[#f3f3f3] content-stretch flex gap-[3px] items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="more button">
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, black)" id="Ellipse 75" r="2" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, black)" id="Ellipse 75" r="2" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[4px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="2" cy="2" fill="var(--fill-0, black)" id="Ellipse 75" r="2" />
            </svg>
          </div>
        </div>
      </div>
      <DriversDetails />
      <LargeCardsCarousel />
      <div className="absolute bg-black content-stretch flex items-center justify-center left-[16px] p-[16px] rounded-[8px] top-[391px] w-[298px]" data-name="primary button">
        <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(106.665deg, rgb(255, 174, 231) 20.273%, rgb(142, 251, 255) 84.481%)" }}>
          <p className="leading-[24px]">Vibe and Ride</p>
        </div>
      </div>
      <div className="absolute bg-[#e8e8e8] content-stretch flex items-center justify-center left-[322px] p-[14px] rounded-[10px] size-[56px] top-[391px]" data-name="reserve ride button" />
      <div className="absolute left-[335px] size-[30px] top-[405px]" data-name="Ai Generated Music">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAiGeneratedMusic} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[873px] left-0 top-0 w-[399px]" data-name="VIDEO-2026-06-15-22-53-23 2" />
      <RideDetailsSheet />
    </div>
  );
}