import * as React from "react";
import Svg, { Rect, Use, Image, Defs, Pattern, NumberProp } from "react-native-svg";

type ClipboardProps = {
  width?: NumberProp;
  height?: NumberProp;
}

export function Clipboard({ width = 50, height = 50 }: ClipboardProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 57 56" fill="none">
      <Rect x="0.5" width="56" height="56" fill="url(#pattern0_401_140)" />
      <Defs>
        <Pattern
          id="pattern0_401_140"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_401_140" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_401_140"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}
