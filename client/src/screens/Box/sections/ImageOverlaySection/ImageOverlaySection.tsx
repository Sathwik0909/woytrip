import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ImageOverlaySection = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[670px] h-[619px]">
      <div className="relative w-full max-w-[680px] h-[592px] mt-[27px] -ml-2.5">
        {/* Decorative elements */}
        <div className="absolute w-[157px] h-[108px] top-[41px] left-1.5 rotate-[-61.55deg]">
          <div className="relative w-[110px] h-[104px] top-2.5 left-[22px]">
            <img
              className="absolute w-[11px] h-2.5 top-14 left-10 rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-42.svg"
            />
            <img
              className="absolute w-2 h-[7px] top-10 left-[60px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-44.svg"
            />
            <img
              className="absolute w-[27px] h-6 top-[31px] left-[49px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-45.svg"
            />
            <img
              className="absolute w-[85px] h-[60px] top-[22px] left-[11px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-46.svg"
            />
            <img
              className="absolute w-[59px] h-[46px] top-[35px] left-[13px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-11.svg"
            />
            <img
              className="absolute w-[22px] h-[22px] top-[7px] left-[13px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-1.svg"
            />
            <img
              className="absolute w-4 h-3 top-[21px] left-2 rotate-[61.55deg]"
              alt="Vector"
              src="public/vector.svg"
            />
            <img
              className="absolute w-[9px] h-2 top-[66px] left-[85px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-17.svg"
            />
            <img
              className="absolute w-2 h-[9px] top-[62px] left-[75px] rotate-[61.55deg]"
              alt="Vector"
              src="public/vector-66.svg"
            />
            <img
              className="absolute w-[41px] h-[103px] top-0 left-[34px] rotate-[61.55deg]"
              alt="Group"
              src="public/group-5.png"
            />
          </div>
        </div>

        <img
          className="absolute w-[658px] h-[483px] top-[109px] left-[9px]"
          alt="Vector"
          src="public/vector-99.svg"
        />

        <div className="absolute w-[611px] h-[560px] top-[5px] left-[69px]">
          <div className="relative w-[575px] h-[508px] top-[27px]">
            {/* Circular background elements */}
            <div className="absolute w-[501px] h-[501px] top-0 left-[55px]">
              <div className="relative h-[501px] rounded-[250.64px/250.56px]">
                <div className="absolute w-[67px] h-[67px] top-[335px] left-[432px] rounded-[33.32px/33.31px] [background:linear-gradient(180deg,rgb(66,167,195)_0%,rgb(138,219,240)_75.03%)]" />
                <div className="absolute w-[93px] h-[93px] top-[139px] left-[35px] bg-[#42a7c3] rounded-[46.74px/46.73px]" />
                <div className="w-[501px] h-[501px] top-0 left-0 rounded-[250.64px/250.56px] absolute backdrop-blur-[4.71px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.71px)_brightness(100%)]" />
                <div className="w-[406px] h-[406px] top-[47px] left-12 rounded-[202.94px/202.88px] absolute backdrop-blur-[4.71px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.71px)_brightness(100%)]" />
                <div className="absolute w-6 h-6 top-7 left-[373px] bg-[#42a7c3] rounded-[12.03px]" />
              </div>
            </div>

            {/* Main person image */}
            <img
              className="absolute w-[487px] h-[499px] top-2 left-[55px]"
              alt="People"
              src="public/people.png"
            />

            <div className="absolute w-[575px] h-[468px] top-[37px] left-0">
              {/* Flight info card */}
              <Badge className="absolute top-8 left-[404px] flex items-center gap-[7.54px] px-[26.4px] py-[9.43px] bg-gray-50 rounded-[22.62px] shadow-[0px_7.54px_15.08px_#60617029,0px_1.89px_3.77px_#28293d0a] hover:bg-gray-50">
                <img
                  className="w-[18.85px] h-[18.85px]"
                  alt="Ic baseline flight"
                  src="public/ic-baseline-flight.svg"
                />
                <span className="mt-[-0.52px] font-['Lato',Helvetica] font-normal text-gray-600 text-[13.2px] tracking-[0.16px] leading-[18.5px] whitespace-nowrap">
                  HYD - GOA
                </span>
              </Badge>

              {/* Circular icon badge */}
              <Badge className="absolute top-0 left-[110px] flex items-center justify-center p-[12.44px] bg-gray-50 rounded-[29.85px] shadow-[0px_9.95px_19.9px_#60617029,0px_2.49px_4.98px_#28293d0a] hover:bg-gray-50">
                <img
                  className="w-[29.85px] h-[29.85px]"
                  alt="Frame"
                  src="public/frame.svg"
                />
              </Badge>

              {/* Kayaking activity card */}
              <Card className="absolute w-[203px] h-[188px] top-[280px] left-0 bg-gray-50 rounded-[15.08px] shadow-[0px_7.54px_15.08px_#60617029,0px_1.89px_3.77px_#28293d0a] border-0">
                <CardContent className="p-0">
                  <div className="w-[191px] h-[120px] mt-2.5 mx-auto rounded-[6.17px] overflow-hidden">
                    <div className="relative h-[120px]">
                      <img
                        className="absolute w-[191px] h-[117px] top-0 left-0 object-cover"
                        alt="Rectangle"
                        src="public/rectangle-9.png"
                      />
                      <img
                        className="absolute w-[191px] h-[120px] top-0 left-0 object-cover"
                        alt="Element"
                        src="public/98-1.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[3.77px] mt-[11px] ml-[11px]">
                    <div className="mt-[-0.94px] font-['Lato',Helvetica] font-bold text-[#333333] text-[13.2px] tracking-[0.16px] leading-[18.5px] whitespace-nowrap">
                      Kayaking At Baga Beach
                    </div>
                    <div className="flex items-center gap-[3.77px]">
                      <div className="relative w-[11.31px] h-[11.31px]">
                        <div className="w-2 h-[9px] left-0.5 bg-[url(public/location.svg)] relative top-px bg-[100%_100%]" />
                      </div>
                      <div className="mt-[-0.94px] font-['Lato',Helvetica] font-normal text-[#8e8e8e] text-[9.4px] tracking-[0.09px] leading-[13.2px] whitespace-nowrap">
                        Goa
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resort card */}
              <Card className="absolute w-[120px] h-[111px] top-[218px] left-[455px] bg-gray-50 rounded-[7.54px] shadow-[0px_7.54px_15.08px_#60617029,0px_1.89px_3.77px_#28293d0a] border-0">
                <CardContent className="p-0">
                  <div className="w-[113px] h-[66px] mt-[3px] mx-auto rounded-[3.09px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Coconut creek resort"
                      src="public/coconut-creek-resort-south-goa-bg-5-1.png"
                    />
                  </div>
                  <div className="flex flex-col w-[70px] h-[25px] items-start gap-[3.77px] mt-[6px] ml-[7px]">
                    <div className="mt-[-0.94px] mr-[-3.97px] font-['Lato',Helvetica] font-bold text-[#333333] text-[7.5px] tracking-[0] leading-[10.6px] whitespace-nowrap">
                      Coconut Creek Resort
                    </div>
                    <div className="mr-[-16.17px] flex items-center gap-[3.77px]">
                      <div className="relative w-[9.43px] h-[9.43px]">
                        <div className="w-[7px] h-2 left-px bg-[url(public/location-1.svg)] relative top-px bg-[100%_100%]" />
                      </div>
                      <div className="mt-[-0.23px] font-['Lato',Helvetica] font-normal text-[#8e8e8e] text-[5.7px] tracking-[0.06px] leading-[7.9px] whitespace-nowrap">
                        Bimmut Ward, Bogmalo, Goa
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
