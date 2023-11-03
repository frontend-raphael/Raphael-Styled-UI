const commonComponentPropsDescription = {
  className: `컴포넌트에 적용할 CSS 클래스 이름.`,
};

const commonButtonAttributesDescription = {
  $buttonWidth: `버튼의 너비. 기본값은 "fit-content"로 설정되어 있습니다.`,
  $buttonHeight: `버튼의 높이. 기본값은 "fit-content"로 설정되어 있습니다.`,
  $buttonPadding: `버튼의 안쪽 여백. 기본값은 "10px"로 설정되어 있습니다.`,
  $buttonBorderRadius: `버튼의 모서리 둥글기. 기본값은 "10px"로 설정되어 있습니다.`,
  disabled: `버튼을 비활성화할지 여부. 비활성화된 버튼은 클릭할 수 없습니다.`,
  onClick: `버튼이 클릭될 때 호출되는 함수. 기본값은 빈 함수입니다.`,
};

const buttonAttributesDescription = {
  $buttonFontSize: `버튼 텍스트의 글꼴 크기. 기본값은 "16px"로 설정되어 있습니다.`,
  $buttonFontWeight: `버튼 텍스트의 글꼴 두께. 기본값은 400으로 설정되어 있습니다.`,
  $buttonBackgroundColor: `버튼의 배경색. 기본값은 defaultPalette.primaryColor로 설정되어 있습니다.`,
  $buttonColor: `버튼 텍스트의 글꼴 색상. 기본값은 defaultPalette.mainFontColor로 설정되어 있습니다.`,
  $buttonHoverBackgroundColor: `마우스가 버튼 위로 이동할 때 버튼의 배경색. 기본값은 defaultPalette.lightPrimaryColor로 설정되어 있습니다.`,
  $buttonHoverColor: `마우스가 버튼 위로 이동할 때 버튼 텍스트의 글꼴 색상. 기본값은 defaultPalette.mainFontColor로 설정되어 있습니다.`,
};

const commonImageAttributesDescription = {
  $imageWidth: `이미지의 너비. 기본값은 "fit-content"로 설정되어 있습니다`,
  $imageHeight: `이미지의 높이. 기본값은 "fit-content"로 설정되어 있습니다`,
  $imageBorderRadius: `이미지의 모서리 둥글기. 기본값은 "0px"으로 설정되어 있습니다`,
};

export {
  commonComponentPropsDescription,
  commonButtonAttributesDescription,
  buttonAttributesDescription,
  commonImageAttributesDescription,
};
